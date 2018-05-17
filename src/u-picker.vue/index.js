import debounce from 'lodash/debounce';
export default {
    name: 'u-picker',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placement: { type: String },
        value: { type: String },
        trigger: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) }, // 时间校正方式
    },
    data() {
        return Object.assign({
            showClearBtn: false, // 显示清空按钮
            showPanel: false,
            hasInit: false,
            displayValue: this.value,
            inputValue: this.value,
        }, this.$attrs);
    },
    computed: {
        init() { // 控制panel mount时机
            if (this.hasInit)
                return true;
            if (this.showPanel) {
                this.hasInit = true;
                return true;
            }
            return false;
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['change', 'input'].forEach((item) => {
                delete listeners[item];
            });
            return listeners;
        },
    },
    watch: {
        inputValue(value) {
            if (this.trigger === 'input')
                this.debouncedInput(value);
            this.$emit('input', value);
        },
        displayValue(value, oldValue) {
            this.inputValue = value;
        },
        $attrs() {
            Object.assign(this.$data, this.$attrs);
        },
    },
    created() {
        this.debouncedInput = debounce(this.setValue, 1000);
        this.value && (this.displayValue = this.adjustTime(this.format(this.value)));
    },
    methods: {
        onMouseEnter() {
            if ((Array.isArray(this.displayValue) && this.displayValue.some((item) => item)) || (!Array.isArray(this.displayValue) && this.displayValue !== undefined))
                this.showClearBtn = true;
            else
                this.showClearBtn = false;
        },
        onBlur() {
            if (this.trigger === 'blur')
                this.setValue(this.inputValue);
        },
        onChange(event) { // panel组件中的value变化
            this.displayValue = event.value;
            this.$emit('change', event);
        },
        setValue(value) {
            if (this.timeValidator(value))
                this.displayValue = value;
            else
                this.inputValue = this.displayValue;
        },
    },
};
