import { UInput as OInput } from 'proto-ui.vusion';

export const UInput = {
    name: 'u-input',
    extends: OInput,
    props: {
        // @override: 添加了 maxlengthMessage 功能
        maxlengthMessage: String,
        search: String,
    },
    methods: {
        onKeypress(e) {
            const inputEl = e.target;
            if (this.formItemVM && this.maxlengthMessage && inputEl.value.length === inputEl.maxLength) {
                this.formItemVM.color = 'error';
                this.formItemVM.currentMessage = this.maxlengthMessage;
            }
        },
        onInput(e) {
            if (!this.compositionInputing) {
                if (this.formItemVM && this.maxlengthMessage) {
                    this.formItemVM.color = '';
                    this.formItemVM.currentMessage = '';
                }
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue);
                this.$emit('update:value', this.currentValue);
            }
        },
    },
};

export default UInput;
