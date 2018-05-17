import debounce from 'lodash/debounce';
export default {
    name: 'u-picker',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placement: { type: String },
        value: { type: String },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) }, // 时间校正方式
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
            if (this.fixOn === 'input')
                this.debouncedInput(value);
            this.$emit('input', value);
        },
        displayValue(value, oldValue) {
            this.inputValue = value;
        },
        $attrs() {
            Object.assign(this.$data, this.$attrs);
        },
        placeholder(value) {
            this.currentPlaceholder = value;
        },
    },
    created() {
        this.debouncedInput = debounce(this.setValue, 1000);
        this.value && (this.displayValue = this.adjust(this.format(this.value)));
    },
    methods: {
        onMouseEnter() {
            if ((Array.isArray(this.displayValue) && this.displayValue.some((item) => item)) || (!Array.isArray(this.displayValue) && this.displayValue !== undefined))
                this.showClearBtn = true;
            else
                this.showClearBtn = false;
        },
        onToggle($event) {
            this.$emit('toggle', $event);
            this.showPanel = $event.open;
        },
        onBlur() {
            if (this.fixOn === 'blur')
                this.setValue(this.inputValue);
        },
        onChange(event) { // panel组件中的value变化
            this.displayValue = event.value ? this.format(event.value) : event.value;
            this.$emit('change', event);
        },
        setValue(value) {
            if (this.validate(value))
                this.displayValue = this.format(value);
            this.inputValue = this.displayValue;
        },
    },
};
