import debounce from 'lodash/debounce';

export default {
    name: 'u-picker-input',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        editable: { type: Boolean, default: true },
        placeholder: { type: String },
        value: { type: String },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) }, // 输入校正时机
    },
    data() {
        return {
            showClearBtn: false, // 显示清空按钮
            currentValue: this.value, // 当前输入值
        };
    },
    watch: {
        currentValue(value) {
            if (this.fixOn === 'input')
                this.debouncedInput(value);
            this.$emit('input', value);
        },
        value(value) {
            this.currentValue = value;
        },
    },
    created() {
        this.debouncedInput = debounce(this.setValue, 1000);
    },
    methods: {
        onMouseEnter() {
            if (this.currentValue)
                this.showClearBtn = true;
            else
                this.showClearBtn = false;
        },
        onBlur(event) {
            if (this.fixOn === 'blur')
                this.setValue(this.currentValue);
            this.$emit('blur', event);
        },
        setValue(value) {
            this.$emit('update:value', value);
        },
        forceUpdateValue() {
            this.currentValue = this.value;
        },
        clearInput() {
            this.currentValue = undefined;
            this.setValue(this.currentValue);
            this.showClearBtn = false;
        },
    },
};
