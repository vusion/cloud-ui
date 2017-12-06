import { Emitter } from 'proto-ui.vusion';
import Zoom from './zoomobj.js';

export default {
    name: 'u-lightbox-item',
    parentName: 'u-lightbox',
    props: {
        title: { type: String, default: '' },
    },
    mixins: [Emitter],
    computed: {
        index() {
            return this.parentVM.itemVMs.indexOf(this);
        },
        parentItemLen() {
            return this.parentVM.itemVMs.length;
        },
        isStart() {
            return this.index === this.parentVM.start;
        },
        isCurrent() {
            return this.index === this.parentVM.current;
        },
        isActive() {
            return this.index === this.parentVM.active;
        },
        isPrev() {
            return this.index === (this.parentVM.current - 1 + this.parentItemLen) % this.parentItemLen;
        },
        isNext() {
            return this.index === (this.parentVM.current + 1) % this.parentItemLen;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
        if (this.parentVM.selectedVM === undefined)
            this.parentVM.selectedVM = this;
        this.animation = this.parentVM.animation;
    },
    mounted() {
        if (!this.$refs.root || !this.$refs.root.children)
            return;
        this.img = this.$refs.root.children[0];
        if (!(this.img && this.img.nodeName && this.img.nodeName.toLowerCase() === 'img'))
            return;
        // 图片设置最大宽高
        this.resetImg();

        // 图片增加缩放功能
        if (this.parentVM.zoomable) {
            this.zoomImg = new Zoom(this.img, this.initOptions());
            // 缩放事件
            this.$on('zoom', (operation) => {
                if (operation === 'in')
                    this.zoomImg.zoomin();
                else
                    this.zoomImg.zoomout();
            });
        }
    },
    destroyed() {
        this.parentVM.$emit('remove-item-vm', this);
    },
    methods: {
        animationEnd() {
            this.dispatch('u-lightbox', 'u-lightbox-item-end', 1);
        },
        // 按照图片原比例，将img的宽高设置在最大宽高里面
        resetImg() {
            const maxWidth = this.parentVM.zoomComputedMaxWidth,
                maxHeight = this.parentVM.zoomComputedMaxHeight;
            let w = this.img.width,
                h = this.img.height;
            const radio = w / h;
            if (w > maxWidth || h > maxWidth) {
                if (maxWidth / maxHeight > radio) {
                    h = maxWidth;
                    w = h * radio;
                } else {
                    w = maxWidth;
                    h = w / radio;
                }
            }
            this.img.width = w;
            this.img.height = h;
        },
        // 根据lightbox配置设置Zoom的options
        initOptions() {
            const options = {};
            // 计算放大/缩小后最大宽高
            const _computeMax = (val, op = 1) => {
                const multi = 1 + options.zoom;
                if (op > 0)
                    return typeof (val) === 'number' ? this.img.width * Math.pow(multi, val) : val;
                else
                    return typeof (val) === 'number' ? this.img.width / Math.pow(multi, val) : val;
            };
            options.zoom = this.parentVM.zoomRadio;
            options.MaxZoomin = _computeMax(this.parentVM.zoomMaxZoomin);
            options.MaxZoomout = _computeMax(this.parentVM.zoomMaxZoomout, -1);
            options.canZoomin = this.parentVM.zoomCanZoomin;
            options.canZoomout = this.parentVM.zoomCanZoomout;
            options.allowWheel = this.parentVM.zoomAllowWheel;
            return options;
        },
    },
};
