import { copy } from 'proto-ui.vusion/src/utils/edit/clipboard';
// import i18n from '@/utils/i18n';
export const UCopy = {
    name: 'u-copy',
    props: {
        value: String,
        placement: String,
        successText: { type: String, default: `已复制` },
        disabled: { type: Boolean, default: false },
        hideDelay: { type: Number, default: 3000 },
        modalType: { type: String, default: 'popper' }, // 成功后提示方式，none：不提示，popper，toast
    },
    data() {
        return {
            success: false,
            timeoutId: undefined,
        };
    },
    destroyed() {
        clearTimeout(this.timeoutId);
    },
    methods: {
        copy() {
            if (this.disabled)
                return;
            this.success = copy(this.value);
            if (this.success) {
                if (this.modalType === 'toast')
                    this.$toast.show(this.successText);
                this.$emit('copy', this.value);
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    this.success = false;
                }, this.hideDelay);
            }
        },
    },
};

export default UCopy;
