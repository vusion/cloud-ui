export const UOldPopup = {
    name: 'u-old-popup',
    props: {
        title: String,
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        placement: { type: String, default: 'bottom-start' },
        reference: HTMLElement, // 为了方便生成指令
        offset: { type: String, default: '0' },
        followCursor: { type: [Boolean, Number, Object], default: false },
        hideDelay: { type: Number, default: 0 },
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
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

export default UOldPopup;
