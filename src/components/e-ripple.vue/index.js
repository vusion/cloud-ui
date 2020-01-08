export const ERipple = {
    name: 'e-ripple',
    props: {
        reference: { type: [String], default: 'parent' },
    },
    data() {
        return {
            referenceEl: undefined,
        };
    },
    mounted() {
        this.referenceEl = this.$el.parentElement;

        const computedStyle = window.getComputedStyle(this.referenceEl);
        if (computedStyle.overflow !== 'hidden')
            this.referenceEl.style.overflow = 'hidden';
        if (computedStyle.position === 'static')
            this.referenceEl.style.position = 'relative';

        this.referenceEl.addEventListener('click', this.onClick);
    },
    destroyed() {
        this.referenceEl.removeEventListener('click', this.onClick);
    },
    methods: {
        onClick(e) {
            this.$el.removeAttribute('animated');
            const pos = this.referenceEl.getBoundingClientRect();
            this.$el.style.left = e.clientX - pos.left + 'px';
            this.$el.style.top = e.clientY - pos.top + 'px';
            this.$el.setAttribute('animated', 'animated');
        },
    },
};

export default ERipple;
