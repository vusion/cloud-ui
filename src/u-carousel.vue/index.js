import uCarouselSlice from '../u-carousel-slice.vue';

export default {
    name: 'u-carousel',
    props: {
        animation: { type: String, default: '', validator: (value) => ['', 'fade', 'scroll', 'swipe', 'zoom-in', 'zoom-out', 'kenburns', 'slice-down'].includes(value) },
        width: { type: Number, default: 700, validator: (value) => Number.isInteger(value) && value >= 0 },
        height: { type: Number, default: 420, validator: (value) => Number.isInteger(value) && value >= 0 },
        index: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
        autoPlay: { type: Boolean, default: true },
        autoplayInterval: { type: Number, default: 4000, validator: (value) => Number.isInteger(value) && value >= 0 },
        autoplayDirection: { type: String, default: 'right', validator: (value) => ['left', 'right'].includes(value.toLowerCase()) },
        pauseOnHover: { type: Boolean, default: true },
        column: { type: Number, default: 14, validator: (value) => Number.isInteger(value) && value >= 0 },
        showButtonOnHover: { type: Boolean, default: true },
    },
    data() {
        const animationMap = { // 不同动画对应的动画个数
            fade: 1,
            scroll: 4,
            swipe: 4,
            'zoom-in': 3,
            'zoom-out': 3,
        };
        return {
            items: [],
            current: this.index,
            active: this.index,
            slice: {
                showSlice: false, // slice & slice动画未完成时显示
                topItems: [], // 每个slice的样式
            },
            showCurrent: true, // 是否显示current轮播图
            animationNum: animationMap[this.animation] || 0,
            animationEndNum: 0, // 动画当前完成动画的个数
            allAnimationEnd: true, // 是否所有动画都结束
            showButton: !this.showButtonOnHover,
        };
    },
    computed: {
        // 是否可以进行 select next pre操作： 动画完成
        canOp() {
            if (this.animation.includes('slice'))
                return this.allAnimationEnd;
            if (this.animationNum === 0)
                return true;
            return this.allAnimationEnd;
        },
    },
    components: {
        uCarouselSlice,
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

        if (!~['', 'kenburns'].indexOf(this.animation)) {
            this.$watch('current', (cur) => {
                this.animationEndNum = 0;
                this.allAnimationEnd = false;
            });

            // slice动画
            if (this.animation.includes('slice')) {
                this.$on('u-carousel-slice-end', () => {
                    this.animationEndNum += 1;
                    // 所有动画结束，移除所有slice元素
                    if (this.animationEndNum >= this.column) {
                        this.showCurrent = true;
                        this.slice.showSlice = false;
                        this.allAnimationEnd = true;
                    }
                });
                this.$watch('current', (cur) => {
                    this.slice.topItems = [];
                    this.slice.showSlice = true;
                    this.showCurrent = false;
                    const html = this.items[cur].$el.innerHTML;
                    const gap = this.width / this.column;
                    for (let i = 1, rightStart = gap, delayTime = 0; i <= this.column; ++i) {
                        const obj = {
                            style: {
                                clip: `rect(0px ${rightStart}px ${this.height}px ${rightStart - gap}px)`,
                                'animation-delay': `${delayTime}ms`,
                            },
                            html,
                        };
                        this.slice.topItems.push(obj);
                        rightStart += gap;
                        delayTime += 60;
                    }
                });
            } else { // 其他动画
                this.$on('u-carousel-item-end', () => {
                    this.animationEndNum += 1;
                    if (this.animationEndNum >= this.animationNum)
                        this.allAnimationEnd = true;
                });
            }
        }

        this.resetInterval();
    },
    methods: {
        select(index) {
            if (index === this.current || !this.canOp)
                return;
            this.active = this.current;
            this.current = index;
            this.adopAnimation();
            this.resetInterval();
        },
        pre() {
            if (!this.canOp)
                return;
            this.active = this.current;
            const length = this.items.length;
            this.current = (this.current - 1 + length) % length;
        },
        next() {
            if (!this.canOp)
                return;
            this.active = this.current;
            const length = this.items.length;
            this.current = (this.current + 1) % length;
        },
        resetInterval() {
            if (!this.autoPlay)
                return;

            clearInterval(this._interval);
            this._interval = setInterval(() => {
                this.autoplayDirection.toLowerCase() === 'left' ? this.pre() : this.next();
            }, this.autoplayInterval);
        },
        // 调整animation显示错误
        adopAnimation() {
            // siwpe效果下，点击非邻接nav 直接显示current
            if (this.animation === 'swipe') {
                const gap = this.items.length > 3 ? Math.abs(this.active - this.current) % (this.items.length - 2) : 1;
                if (gap !== 1)
                    this.active = this.current;
            }
        },
        mouseover() {
            if (this.pauseOnHover)
                clearInterval(this._interval);
        },
        mouseout() {
            if (this.pauseOnHover)
                this.resetInterval();
        },
        rootMouseover() {
            this.showButton = true;
        },
        rootMouseout() {
            if (this.showButtonOnHover)
                this.showButton = false;
        },
    },
};
