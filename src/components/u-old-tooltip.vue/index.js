export const UOldTooltip = {
    name: 'u-old-tooltip',
    props: {
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'hover' },
        triggerElement: { type: [String, HTMLElement, Function], default: 'reference' },
        placement: { type: String, default: 'bottom' },
        reference: [String, HTMLElement], // 为了方便生成指令
        offset: { type: String, default: '0' },
        boundariesElement: { default: 'window' },
        followCursor: { type: [Boolean, Number, Object], default: false },
        size: { type: String, default: 'normal' },
        hideDelay: { type: Number, default: 0 },
        disabled: { type: Boolean, default: false },
    },
    computed: {
        hasContent() {
            return this.content !== undefined && this.content !== '' || this.$slots.content !== undefined;
        },
    },
    methods: {
        update() {
            this.$refs.popper.update();
        },
        toggle(open) {
            this.$refs.popper.toggle(open);
        },
    },
};

export default UOldTooltip;
