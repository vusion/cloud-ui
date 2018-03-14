import Input from 'proto-ui.vusion/src/u-input.vue';

export default {
    name: 'u-input',
    mixins: [Input],
    props: {
        maxlengthMessage: String,
        color: String,
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
    },
};
