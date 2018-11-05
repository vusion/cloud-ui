import i18n from './i18n';

export default {
    name: 'u-popover',
    i18n,
    props: {
        trigger: {
            type: String,
            default: 'click',
        },
        placement: {
            type: String,
            default: 'bottom',
        },
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
            default() { return this.$t('ok'); },
        },
        confirmCancel: {
            type: String,
            default() { return this.$t('cancel'); },
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
