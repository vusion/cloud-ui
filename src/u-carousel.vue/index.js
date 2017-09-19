export default {
    name: 'u-carousel',
    props: {
        animation: { type: String, default: '', validator: (value) => ['', 'fade', 'scroll', 'swipe', 'zoom-in', 'zoom-out', 'kenburns', 'slice-down'].includes(value) },
        width: { type: Number, default: 700, validator: (value) => Number.isInteger(value) && value >= 0 },
        height: { type: Number, default: 420, validator: (value) => Number.isInteger(value) && value >= 0 },
        index: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
        autoPlay: { type: Boolean, default: false },
        autoplayInterval: { type: Number, default: 4000, validator: (value) => Number.isInteger(value) && value >= 0 },
        autoplayDirection: { type: String, default: 'right', validator: (value) => ['left', 'right'].includes(value.toLowerCase()) },
        pauseOnHover: { type: Boolean, default: true, validator: (value) => typeof (value) === 'boolean' },
        column: { type: Number, default: 14, validator: (value) => Number.isInteger(value) && value >= 0 },
    },
    data() {
        return {
            items: [],
            current: this.index,
            active: this.index,
            showTop: false, // slice & slice动画未完成时显示
            topItems: [], // 每个slice的样式
        };
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
        // slice动画时，显示该item
        if (this.animation.includes('slice')) {
            this.$watch('current', (cur) => {
                this.topItems = [];
                this.showTop = true;
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
                    this.topItems.push(obj);
                    rightStart += gap;
                    delayTime += 60;
                }
            });
        }
        if (this.autoPlay)
            this.resetInterval();
    },
    methods: {
        select(index) {
            if (index === this.current)
                return;
            this.active = this.current;
            this.current = index;
            this.adopAnimation();
            if (this.autoPlay)
                this.resetInterval();
        },
        pre() {
            this.active = this.current;
            const length = this.items.length;
            this.current = (this.current - 1 + length) % length;
        },
        next() {
            this.active = this.current;
            const length = this.items.length;
            this.current = (this.current + 1) % length;
        },
        resetInterval() {
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
    },
};
