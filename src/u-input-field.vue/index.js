import Field from '../u-field.vue';

const InputField = Field.extend({
    name: 'u-input-field',
    props: {
        name: String,
        visible: { type: Boolean, default: true },
        type: { type: String, default: 'text' },
        placeholder: String,
        maxlength: String,
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        width: { type: String, default: '160' },
        disabled: { type: Boolean, default: false },
        unit: String,
    },
    methods: {
        /**
         * @private
         */
        onInput($event) {
            // this.$refs.input.value = $event.target.value;
            this.showValue = $event.target.value;
            // setTimeout(() => !this.compositionInputing && this.validate('input'));wei
            // 为保证可以实现所有项内容正确可点 确保在inputfield组件的input事件中对所有inputfield的状态进行验证 所以emit事件语句必须在验证validate方法之后调用
            if (!this.compositionInputing)
                this.validate('input');
            this.$emit('input', $event.target.value);
        },
        /**
         * @private
         */
        onFocus($event) {
            this.state = '';
            this.tip = this.tipInfo;
            this.$emit('focus', $event);
        },
        /**
         * @private
         */
        onBlur($event) {
            this.validate('blur');
            this.$emit('blur', $event);
        },
    },
});
export default InputField;
