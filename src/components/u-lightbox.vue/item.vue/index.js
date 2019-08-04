import { MEmitter } from 'proto-ui.vusion';
import Zoom from './zoomobj.js';

export const ULightboxItem = {
    name: 'u-lightbox-item',
    parentName: 'u-lightbox',
    props: {
        title: { type: String, default: '' },
        value: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
    },
    mixins: [MEmitter],
    computed: {
        isStart() {
            return this === this.parentVM.itemVMs[0];
        },
        isCurrent() {
            return this === this.parentVM.selectedVM;
        },
    },
    data() {
        return {
            options: {},
            zoomImg: null,
            current: 0,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
        this.animation = this.parentVM.animation;
        this.$watch('isCurrent', (value) => {
            value && this.resetImg();
        });
        this.resetImgWrap = this.resetImg.bind(this);
        this.$on('rotate', this.rotate);
    },
    mounted() {
        this.wrapper = this.$refs.wrapper;
        if (!this.wrapper || !this.wrapper.children)
            return;
        this.img = Array.prototype.filter.call(this.wrapper.children, (ele) => ele.nodeName.toLowerCase() === 'img')[0];

        // 图片设置最大宽高
        if (this.img.complete)
            this.resetImg();

        this.img.addEventListener('load', this.resetImgWrap);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
        if (this.img)
            this.img.removeEventListener('load', this.resetImgWrap);
    },
    methods: {
        animationEnd() {
            this.dispatch(this.$options.parentName, 'u-lightbox-item-end', 1);
        },
        stop(event) {
            this.isCurrent && event.stopPropagation();
        },
        rotate(direction) {
            if (direction === 'right')
                this.current = (this.current + 90) % 360;
            else
                this.current = (this.current - 90) % 360;
            this.img.style.transform = 'rotate(' + this.current + 'deg)';
        },
        initZoomImg() {
            // 图片增加缩放功能
            if (this.parentVM.zoomable) {
                const tempOptions = this.initOptions();
                if (JSON.stringify(tempOptions) !== JSON.stringify(this.options) || this.zoomImg === null) { // 如果配置发生修改，则重新生成zooImg
                    this.options = tempOptions;
                    this.$off('zoom');
                    this.zoomImg = new Zoom(this.img, this.wrapper, this.initOptions());
                    // 缩放事件
                    this.$on('zoom', (operation) => {
                        if (operation === 'in')
                            this.zoomImg.zoomin();
                        else
                            this.zoomImg.zoomout();
                    });
                }
            } else if (this.zoomImg) {
                this.zoomImg.destroyed();
                this.zoomImg = null;
                this.$off('zoom');
            }
        },
        // 按照图片原比例，将img的宽高设置为初始宽高范围
        resetImg() {
            if (!this.img)
                return;

            const initWidth = this.parentVM.initWidth;
            const initHeight = this.parentVM.initHeight;
            let w = this.img.width;
            let h = this.img.height;
            const radio = w / h;
            if (initWidth / initHeight > radio) {
                h = initHeight;
                w = h * radio;
            } else {
                w = initWidth;
                h = w / radio;
            }
            this.wrapper.style.width = w + 'px';
            this.wrapper.style.height = h + 'px';
            // 设置垂直居中
            this.wrapper.style.left = (window.innerWidth - w) / 2 + 'px';
            this.wrapper.style.top = (window.innerHeight - h) / 2 + 'px';
            this.initZoomImg();
            this.img.style.transform = 'rotate(0deg)';// 把旋转的图片恢复原样
            this.current = 0;
        },
        // 根据lightbox配置设置Zoom的options
        initOptions() {
            const options = {};
            // 将单位转换为num
            const _stringToNum = (val) => {
                const res = /^(\d+\.?\d*)([%px]+)$/.exec(val); // res不为null，在u-lightbox中validator
                return res[2] === '%' ? window.innerWidth * res[1] : +res[1];
            };
            // 计算放大/缩小后最大宽高
            const _computeMax = (val, op = 1) => {
                const multi = 1 + options.zoom;
                return typeof (val) === 'number' ? this.img.width * Math.pow(multi, val) : _stringToNum(val);
            };
            options.zoom = this.parentVM.zoomRadio;
            options.MaxZoomin = _computeMax(this.parentVM.zoomMax);
            options.MaxZoomout = _computeMax(this.parentVM.zoomMin, -1);
            options.canZoomin = this.parentVM.zoomable;
            options.canZoomout = this.parentVM.zoomable;
            options.allowWheel = this.parentVM.zoomWheel;
            return options;
        },
    },
};

export default ULightboxItem;
