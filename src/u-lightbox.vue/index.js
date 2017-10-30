export default {
    name: 'u-lightbox',
    props: {
        title: { type: String, default: '' },
        maskClose: { type: Boolean, default: true },
        closeButton: { type: Boolean, default: false },
        visible: { type: Boolean, default: false },
        loop: { type: Boolean, default: false }, // item是否循环
        animation: { type: String, default: '', validator: (value) => ['', 'fade', 'zoom-out'].includes(value) },
        index: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
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
        current() {
            this.animationEndNum = 0;
            this.allAnimationEnd = false;
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
    },
};

