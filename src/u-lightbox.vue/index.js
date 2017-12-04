import Emitter from 'u-emitter.vue';

export default {
    name: 'u-lightbox',
    props: {
        title: { type: String, default: '' },
        maskClose: { type: Boolean, default: true },
        closeButton: { type: Boolean, default: false },
        visible: { type: Boolean, default: false },
        static: { type: Boolean, default: false },
        loop: { type: Boolean, default: false }, // item是否循环
        animation: { type: String, default: '', validator: (value) => ['', 'fade', 'zoom-out'].includes(value) },
        index: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
        canZoom: { type: Boolean, default: true },
        zoomShowButton: { type: Boolean, default: true },
        zoomAllowWheel: { type: Boolean, default: true },
        zoomCanZoomin: { type: Boolean, default: true },
        zoomCanZoomout: { type: Boolean, default: true },
        // 添加为number时大于0
        zoomInitMaxWidth: { default: 0.67 },
        zoomInitMaxHeight: { default: 0.75, validator: (value) => typeof (value) === 'string' || typeof (value) === 'number' },
        zoomMaxZoomin: { default: 5, validator: (value) => typeof (value) === 'string' || typeof (value) === 'number' },
        zoomMaxZoomout: { default: 5, validator: (value) => typeof (value) === 'string' || typeof (value) === 'number' },
        zoomRadio: { type: Number, default: 0.1 },
    },
    data() {
        const animationMap = { // 不同动画对应的动画个数
            fade: 1,
            'zoom-out': 2,
        };
        return {
            currentVisible: this.visible,
            items: [],
            start: this.index, // 标记第一次点击lightbox，动画显示
            current: this.index,
            allAnimationEnd: false,
            animationNum: animationMap[this.animation] || 0,
            animationEndNum: 0,
            zoomComputedMaxWidth: this._computeInitMax(this.zoomInitMaxWidth),
            zoomComputedMaxHeight: this._computeInitMax(this.zoomInitMaxHeight, 'h'),
        };
    },
    computed: {
        showButton() {
            return this.items.length > 1;
        },
        hasPre() {
            if (this.loop)
                return true;
            else if (this.current === 0)
                return false;
            return true;
        },
        hasNext() {
            if (this.loop)
                return true;
            else if (this.current === this.items.length - 1)
                return false;
            return true;
        },
        canOp() { // item的动画结束才可以进行下次点击操作
            if (this.animationNum === 0)
                return true;
            return this.allAnimationEnd;
        },
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible;
            if (this.currentVisible) { // 显示灯箱时重置参数
                this.start = this.index;
                this.current = this.index;
                this.animationEndNum = 0;
                this.allAnimationEnd = true;
            }
        },
        current(current) {
            this.animationEndNum = 0;
            this.allAnimationEnd = false;
            this.items && this.items[current].zoomImg && this.items[current].zoomImg.reset(); // 显示图片变化，恢复初始大小 
        },
    },
    created() {
        this.$on('add-item-vm', (item) => {
            item.parentVM = this;
            this.items.push(item);
        });
        this.$on('remove-item-vm', (item) => {
            item.parentVM = undefined;
            this.items.splice(this.items.indexOf(item), 1);
        });
        this.$on('u-lightbox-item-end', () => {
            if (this.start === -1) {
                this.animationEndNum += 1;
                if (this.animationEndNum >= this.animationNum)
                    this.allAnimationEnd = true;
            } else // 初始动画结束
                this.allAnimationEnd = true;
        });
    },
    mounted() {
        if (this.$el && !this.static)
            document.body.appendChild(this.$el);
    },
    destroyed() {
        if (this.$el && this.$el.parentNode === document.body)
            document.body.removeChild(this.$el);
    },
    methods: {
        // 显示灯箱
        open() {
            this.currentVisible = true;
            this.$emit('update:visible', this.currentVisible);
            this.$emit('open');
        },
        close() {
            let cancel = false;
            this.$emit('before-close', {
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentVisible = false;

            this.$emit('update:visible', this.currentVisible);
            this.$emit('close');
        },
        pre() {
            if (!this.canOp)
                return;
            this.start = -1;
            const length = this.items.length;
            this.current = (this.current - 1 + length) % length;
        },
        next() {
            if (!this.canOp)
                return;
            this.start = -1;
            const length = this.items.length;
            this.current = (this.current + 1) % length;
        },
        zoom(operation) {
            if (!this.canZoom)
                return;
            this.items[this.current].$emit('zoom', operation);
        },
        // 计算初始显示最大宽高
        _computeInitMax(val, type = 'w') {
            if (type === 'w')
                return typeof (val) === 'number' ? window.innerWidth * val : val;
            else
                return typeof (val) === 'number' ? window.innerHeight * val : val;
        },

    },
};
