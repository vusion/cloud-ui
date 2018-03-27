import Input from 'proto-ui.vusion/src/u-input.vue';

export default {
    name: 'u-input',
    mixins: [Input],
    props: {
        // @override: 添加了maxlengthMessage功能
        maxlengthMessage: String,
        color: String,
        close: { type: Boolean, default: false },
    },
    data() {
        return {
            currentColor: this.color,
        };
    },
    watch: {
        color(value) {
            this.currentColor = value;
        },
    },
    methods: {
        onKeypress(e) {
            const inputEl = e.target;
            if (this.formItemVM && this.maxlengthMessage
                && inputEl.value.length === inputEl.maxLength) {
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
        removeValue() {
            this.currentValue = '';
            this.$emit('input', this.currentValue);
            this.$emit('update:value', this.currentValue);
        },
    },
};
