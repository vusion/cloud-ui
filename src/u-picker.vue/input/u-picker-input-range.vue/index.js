import debounce from 'lodash/debounce';

export default {
    name: 'u-picker-input-range',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        editable: { type: Boolean, default: true },
        placeholder: { type: Array },
        startValue: { type: String },
        endValue: { type: String },
        rangeSeparator: { type: String },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) }, // 输入校正时机
    },
    data() {
        return {
            showClearBtn: false, // 显示清空按钮
            currentValueStart: this.value, // 当前输入值
            currentValueEnd: this.value, // 当前输入值
            preValue: this.value, // 上一个validate的值
            startFocus: false,
            endFocus: false,
        };
    },
    watch: {
        currentValueStart(value) {
            if (this.fixOn === 'input')
                this.debouncedInputStart(value);
            this.$emit('startInput', value); // !事件名哪个好？
            // this.$emit('input', value);
        },
        currentValueEnd(value) {
            if (this.fixOn === 'input')
                this.debouncedInputEnd(value);
            // this.$emit('input', value);
            this.$emit('endInput', value);
        },
        startValue(value) {
            this.currentValueStart = value;
        },
        endValue(value) {
            this.currentValueEnd = value;
        },
    },
    created() {
        this.debouncedInputStart = debounce(this.setStartValue, 1000);
        this.debouncedInputEnd = debounce(this.setEndValue, 1000);
    },
    methods: {
        onMouseEnter() {
            if (this.currentValueStart || this.currentValueEnd)
                this.showClearBtn = true;
            else
                this.showClearBtn = false;
        },
        onStartBlur(event) {
            this.startFocus = false;
            if (this.fixOn === 'blur')
                this.setStartValue(this.currentValueStart);
                // this.$emit('blur', event); // 两输入框blur才是真blur
        },
        onEndBlur(event) {
            this.endFocus = false;
            if (this.fixOn === 'blur')
                this.setEndValue(this.currentValueEnd);
                // this.$emit('blur', event);
        },
        onStartFocus() {
            this.startFocus = true;
        },
        onEndFocus() {
            this.endFocus = true;
        },
        setStartValue(value) {
            this.$emit('update:startValue', value);
        },
        setEndValue(value) {
            this.$emit('update:endValue', value);
        },
        forceUpdateValue() {
            this.currentValueStart = this.startValue;
            this.currentValueEnd = this.endValue;
        },
        clearInput() {
            this.currentValueStart = this.currentValueEnd = undefined;
            this.setStartValue(this.currentValueStart);
            this.setEndValue(this.currentValueEnd);
            this.showClearBtn = false;
        },
    },
};
