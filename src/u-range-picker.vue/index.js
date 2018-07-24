import debounce from 'lodash/debounce';
import addMonths from 'date-fns/add_months';
import parse from 'date-fns/parse';

export default {
    name: 'u-range-picker',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placement: { type: String },
        startValue: { type: String },
        endValue: { type: String },
        startShowValue: { type: String },
        endShowValue: { type: String },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) }, // 时间校正方式
        gap: { type: Number, default: 1 }, // 起始日历和结束日历的月份间隔
    },
    data() {
        return Object.assign({
            showClearBtn: false, // 显示清空按钮
            showPanel: false,
            hasInit: false,
            displayStartValue: undefined,
            inputStartValue: undefined,
            displayEndValue: undefined,
            inputEndValue: undefined,
            currentStartShowValue: this.startShowValue,
            currentEndShowValue: this.endShowValue,
            currentSelectValue: undefined,
            selectedValues: [],
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
            ['select', 'input', 'update:value'].forEach((item) => {
                delete listeners[item];
            });
            return listeners;
        },
    },
    watch: {
        inputStartValue(value) {
            if (this.fixOn === 'input')
                this.debouncedStartInput(value);
            this.$emit('input', value);
        },
        inputEndValue(value) {
            if (this.fixOn === 'input')
                this.debouncedEndInput(value);
            this.$emit('input', value);
        },
        displayStartValue(value, oldValue) {
            this.inputStartValue = value;
        },
        displayEndValue(value, oldValue) {
            this.inputEndValue = value;
        },
        $attrs() {
            Object.assign(this.$data, this.$attrs);
        },
        placeholder(value) {
            this.currentPlaceholder = value;
        },
        currentSelectValue(value, oldValue) {
            if ((this.selectedValues[0] && this.selectedValues[1]) || (!this.selectedValues[0] && !this.selectedValues[1])) { // 选择第一个值
                this.selectedValues[0] = value;
                this.selectedValues[1] = undefined;
            } else if (this.selectedValues[0] && !this.selectedValues[1]) {
                this.selectedValues[1] = value;
                [this.displayStartValue, this.displayEndValue] = this.sort(this.selectedValues); // 按指定规则排序
                this.$refs.popper.toggle(false);
            }
        },
    },
    created() {
        this.debouncedStartInput = debounce(this.setStartValue, 1000);
        this.debouncedEndInput = debounce(this.setEndValue, 1000);
        this.startValue && (this.displayStartValue = this.adjust(this.format(this.startValue)));
        this.endValue && (this.displayEndValue = this.adjust(this.format(this.endValue)));
        this.selectedValues = [this.dispayStartValue, this.displayEndValue];
        !this.currentStartShowValue && (this.currentStartShowValue = this.displayStartValue ? this.displayStartValue : new Date());
        !this.currentEndShowValue && (this.currentEndShowValue = this.displayEndValue ? this.displayEndValue : addMonths(parse(this.currentStartShowValue), this.gap));
    },
    methods: {
        onMouseEnter() {
            if (this.displayStartValue !== undefined || this.displayEndValue !== undefined)
                this.showClearBtn = true;
            else
                this.showClearBtn = false;
        },
        onToggle($event) {
            this.$emit('toggle', $event);
            this.showPanel = $event.open;
        },
        onStartBlur() {
            if (this.fixOn === 'blur')
                this.setStartValue(this.inputStartValue);
        },
        onEndBlur() {
            if (this.fixOn === 'blur')
                this.setEndValue(this.inputEndValue);
        },
        setStartValue(value) {
            if (this.validate(value))
                this.displayStartValue = this.format(value);
            this.inputStartValue = this.displayStartValue;
        },
        setEndValue(value) {
            if (this.validate(value))
                this.displayEndValue = this.format(value);
            this.inputEndValue = this.displayEndValue;
        },
        onSelect(event) {
            this.currentSelectValue = this.format(event.value);
        },
        sort(dates) { // 默认从小到大排序
            return dates.sort((a, b) => a - b);
        },
    },
};
