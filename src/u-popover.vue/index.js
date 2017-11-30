export default {
    name: 'u-popover',
    props: {
        trigger: String,
        placement: String,
        open: Boolean,
        title: String,
        styleObject: Object,
        content: String,
        confirm: {
            type: Boolean,
            default: false,
        },
        confirmOk: {
            type: String,
            default: '确定',
        },
        confirmCancel: {
            type: String,
            default: '取消',
        },
        message: String,
    },
    data() {
        return {
            enterTimer: null,
        };
    },
    methods: {
        toggle(open) {
            this.$refs.popper.toggle(open);
        },
        // onMouseenter() {
        //     if (this.trigger !== 'hover' || this.confirm)
        //         return false;

        //     if (this.enterTimer)
        //         clearTimeout(this.enterTimer);
        //     this.enterTimer = setTimeout(() => {
        //         this.open = true;
        //     }, 100);
        // },
        // onMouseleave() {
        //     if (this.trigger !== 'hover' || this.confirm)
        //         return false;

        //     if (this.enterTimer) {
        //         clearTimeout(this.enterTimer);
        //         this.enterTimer = setTimeout(() => {
        //             this.open = false;
        //         }, 100);
        //     }
        // },
    },
};
