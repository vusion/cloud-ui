import MField from '../m-field.vue';
import { repeatClick } from '../../directives';
import { noopFormatter, NumberFormatter } from '../../utils/Formatters';

export const UNumberInput = {
    name: 'u-number-input',
    mixins: [MField],
    directives: { repeatClick },
    props: {
        // String 类型是为了验证抛出
        value: { type: [Number, String], default: 0 },
        defaultValue: [String, Number],
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        formatter: { type: [String, Object] },
        hideButtons: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        const data = {
            currentValue: this.fix(this.value),
            // 格式化后的 value，与`<input>`中的实际值保持一致
            formattedValue: this.value,
            currentFormatter: undefined,
        };

        if (this.formatter instanceof Object)
            data.currentFormatter = this.formatter;
        else if (typeof this.formatter === 'string')
            data.currentFormatter = new NumberFormatter(this.formatter);
        else
            data.currentFormatter = noopFormatter;

        // 初始值需要在最小值和最大值范围之内
        data.formattedValue = data.currentFormatter.format(data.currentValue);

        return data;
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach((prop) => {
                delete listeners[prop];
            });
            return listeners;
        },
    },
    watch: {
        value(value, oldValue) {
            const currentValue = this.currentValue = this.fix(value);
            this.formattedValue = this.currentFormatter.format(currentValue);
        },
    },
    created() {
        const value = this.fix(this.value);
        this.$emit('change', {
            value,
            oldValue: undefined,
            formattedValue: this.currentFormatter.format(value),
            valid: this.isValid(value),
        }, this);
    },
    methods: {
        fix(value) {
            // 为空时使用默认值
            if (typeof value === 'string' && value.trim() === '' || value === null)
                value = this.defaultValue !== undefined ? this.defaultValue : this.currentValue || 0;
            else if (isNaN(value))
                value = this.currentValue || this.defaultValue || 0;
            value = +value;
            // 精度约束
            value = Math.round(value / this.precision) * this.precision;
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.floor(Math.log10(this.precision)) : 0);
            return value;
        },
        isValid(value) {
            if (isNaN(value))
                return false;
            if (value < this.min || value > this.max)
                return false;
            return String(this.fix(value)) === String(value);
        },
        /**
         * 单纯输入
         * @param {*} value 输入值
         */
        input(value) {
            if (this.readonly || this.disabled)
                return;
            value = this.fix(value);

            const oldValue = this.currentValue;
            this.currentValue = value;
            const formattedValue = this.formattedValue = this.currentFormatter.format(value);
            this.$refs.input.currentValue = formattedValue;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('change', {
                value,
                oldValue,
                formattedValue,
                valid: this.isValid(value),
            }, this);
        },
        /**
         * 按上下按钮发送 adjust 事件
         * @param {*} value
         */
        adjust(value) {
            const oldValue = this.currentValue;

            let cancel = false;
            this.$emit('before-adjust', {
                value,
                oldValue,
                formattedValue: this.currentFormatter.format(value),
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.input(value);
            this.$emit('adjust', {
                value: this.currentValue,
                oldValue,
                formattedValue: this.formattedValue,
            }, this);
        },
        increase() {
            this.adjust(+this.currentValue + this.step);
        },
        decrease() {
            this.adjust(+this.currentValue - this.step);
        },
        onInput(rawValue) {
            if (this.readonly || this.disabled)
                return;

            const parsedValue = this.currentFormatter.parse(rawValue);
            const value = this.fix(parsedValue);
            const valid = String(value) === String(parsedValue);
            this.$emit('validate', {
                valid,
                value,
                rawValue,
            });
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onEnter(e) {
            this.input(this.currentFormatter.parse(this.$refs.input.currentValue));
        },
        onBlur(e) {
            this.input(this.currentFormatter.parse(this.$refs.input.currentValue));
            this.$emit('blur', e, this);
        },
    },
};

export default UNumberInput;
