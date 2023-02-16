<template>
    <u-input ref="input" :class="$style.root" :buttonDisplay="buttonDisplay" :value="formattedValue"
        :readonly="readonly" :disabled="disabled" :clearable="clearable"
        @keydown.native.up.prevent="increase" @keydown.native.down.prevent="decrease" @keydown.native.enter="onEnter"
        @input="onInput" @focus="onFocus" @blur="onBlur" v-bind="$attrs" v-on="listeners" v-click-outside="handleClickOutside" :hideButtons="hideButtons">
        <span :class="$style.button" v-if="!hideButtons" :disabled="currentValue >= max" role="up" v-repeat-click="increase"
            tabindex="0" @keydown.prevent></span>
        <span :class="$style.button" v-if="!hideButtons" :disabled="currentValue <= min" role="down" v-repeat-click="decrease"
            tabindex="0" @keydown.prevent></span>
        <slot></slot>
    </u-input>
</template>

<script>
import MField from '../m-field.vue';
import { repeatClick, clickOutside } from '../../directives';
import { noopFormatter, NumberFormatter } from '../../utils/Formatters';
const isNil = (value) => (typeof value === 'string' && value.trim() === '') || value === null || value === undefined;

export default {
    name: 'u-number-input',
    directives: { repeatClick, clickOutside },
    mixins: [MField],
    props: {
        // String 类型是为了验证抛出
        value: [Number, String],
        defaultValue: [String, Number],
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision >= 0 },
        formatter: { type: [String, Object] },
        hideButtons: { type: Boolean, default: false },
        // 按钮呈现形式 tail ｜ bothEnds
        buttonDisplay: {
            type: String,
            default: 'tail'
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
    },
    data() {
        // 根据初始值计算 fix 精度
        const currentPrecision = this.getCurrentPrecision(this.value);
        const data = {
            // 当前使用的精度，当 precision 为 0 时，使用动态精度
            currentPrecision,
            currentValue: this.fix(this.value, currentPrecision), // 格式化后的 value，与`<input>`中的实际值保持一致
            formattedValue: this.value,
            currentFormatter: undefined,
        };

        if (this.formatter instanceof Object)
            data.currentFormatter = this.formatter;
        else if (typeof this.formatter === 'string')
            data.currentFormatter = new NumberFormatter(this.formatter);
        else
            data.currentFormatter = noopFormatter; // 初始值需要在最小值和最大值范围之内
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
            // 根据传入的 value 调整 fix 精度
            const currentPrecision = (this.currentPrecision = this.getCurrentPrecision(value));
            const currentValue = (this.currentValue = this.fix(value, currentPrecision));
            this.formattedValue = this.currentFormatter.format(currentValue);
            this.$emit('update', this.currentValue, this);
            // 当点击了form的创建按钮等调用了validate方法，fieldTouched值会变为true，不会走update validate
            // 所以这里需要再增加input emit
            this.$emit('input', this.currentValue, this);
        },
    },
    created() {
        const value = this.currentValue;
        this.$emit('update', value, this);
    },
    mounted() {
        this.autofocus && this.$refs.input.focus();
    },
    methods: {
        strip(num, precision = 17) {
            return +parseFloat(num).toPrecision(precision);
        },
        fix(value, precision = this.currentPrecision) {
            // 为空时使用默认值
            if ((typeof value === 'string' && value.trim() === '') || value === null || value === undefined)
                return value = this.defaultValue !== undefined ? this.defaultValue : '';
            else if (isNaN(value))
                value = this.currentValue || this.defaultValue || 0;
            
            value = +value; // 精度约束
            value = Math.round(this.strip(value / precision)) * precision; // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max); // 保留小数位数
            value = +value.toFixed(precision < 1 ? -Math.floor(Math.log10(precision)) : 0);

            return value;
        },
        /**
         * 根据值计算精度
         * @param {*} value 输入值
         */
        computePrecision(value) {
            // 优先使用精度设置的值
            if(this.precision !== 0 && this.step === 0)
                return this.precision;
            // 没有精度的情况下，需要判断value和step的值
            if ((typeof value === 'string' && value.trim() === '') || value === null || value === undefined)
                value = this.defaultValue !== undefined ? this.defaultValue : this.currentValue || 0;
            else if (isNaN(value))
                value = this.currentValue || this.defaultValue || 0;
            const arr = String(value).split('.');
            let precisionLength = arr[1] ? arr[1].length : 0;
            if(this.precision === 0 && this.step !== 0) {
                const arr = String(this.step).split('.');
                precisionLength = arr[1] && arr[1].length > precisionLength ? arr[1].length : precisionLength;
            }
            return precisionLength ? Math.pow(0.1, precisionLength).toFixed(precisionLength) : 1;
        },
        /**
         * 计算 fix 精度
         * @param {*} value 输入值
         */
        getCurrentPrecision(value) {
            return this.precision === 0 ? this.computePrecision(value) : this.precision;
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
            const formattedValue = (this.formattedValue = this.currentFormatter.format(value));

            this.$refs.input.currentValue = formattedValue;

            this.$emit('input', value, this);
            this.$emit('update', value, this);
            this.$emit('update:value', value, this);
            this.$emit('change', { value, oldValue, formattedValue, valid: this.isValid(value) }, this);
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
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;

            this.input(value);
            this.$emit('adjust', {
                value: this.currentValue,
                oldValue,
                formattedValue: this.formattedValue,
            }, this);
            this.hasFocus = true;
        },
        increase() {
            const step = this.step === 0 ? this.computePrecision(this.currentValue) : this.step;
            this.adjust(+this.currentValue + (step - 0));
            this.preventBlur = true;
        },
        decrease() {
            const step = this.step === 0 ? this.computePrecision(this.currentValue) : +this.step;
            this.adjust(+this.currentValue - step);
            this.preventBlur = true;
        },
        onInput(rawValue) {
            if (this.readonly || this.disabled)
                return;
            const parsedValue = isNil(rawValue) ? '' : this.currentFormatter.parse(rawValue); // 根据输入调整 fix 精度
            const currentPrecision = (this.currentPrecision = this.getCurrentPrecision(parsedValue));
            const value = this.fix(parsedValue, currentPrecision);
            const valid = String(value) === String(parsedValue);
            if (valid)
                // 用于上下键
                this.currentValue = value;
            this.$emit('validate', { valid, value, rawValue });
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onEnter(e) {
            const inputValue = this.$refs.input.currentValue;
            this.input(isNil(inputValue) ? inputValue : this.currentFormatter.parse(inputValue));
        },
        onBlur(e) {
            const inputValue = this.$refs.input.currentValue;
            this.input(isNil(inputValue) ? inputValue : this.currentFormatter.parse(inputValue));
            if (this.preventBlur)
                return (this.preventBlur = false);
            this.$emit('blur', e, this);
        },
        handleClickOutside(){
            if(this.hasFocus){
                this.$emit('blur');
                this.hasFocus = false;
            }
        },
    },
};
</script>

<style module>
.root {
    width: var(--number-input-width);
    height: var(--number-input-height);
    background: var(--number-input-background);
    border: var(--number-input-border-width) solid var(--number-input-border-color);
    border-radius: var(--number-input-border-radius);
    color: var(--number-input-color);
}
.root:not([hideButtons="true"]) {
    padding-right: 28px;
}

.root[buttonDisplay="bothEnds"]  {
    text-align: center;
    padding: 0 calc(var(--number-input-both-ends-button-width) + 12px);
}

.root:hover {
    border-color: var(--number-input-border-color-hover);
}

.root[focus] {
    border-color: var(--number-input-border-color-focus);
    box-shadow: var(--number-input-box-shadow-focus);
}

.button {
    user-select: none;
    position: absolute;
    cursor: var(--cursor-pointer);
    text-align: center;
}

.root[buttonDisplay="tail"] .button {
    height: var(--number-input-button-height);
    line-height: var(--number-input-button-height);
    right: 0;
    border-left: 1px solid var(--number-input-border-color);
    padding: var(--number-input-button-padding);
    background: var(--number-input-button-background);
}

.root[buttonDisplay="bothEnds"] .button {
    width: var(--number-input-both-ends-button-width);
    height: var(--number-input-both-ends-button-height);
    line-height: var(--number-input-both-ends-button-height);
    background: var(--number-input-button-both-ends-background);
    top: 0;
}

.root[buttonDisplay="tail"] .button:hover {
    background: var(--number-input-button-background-hover);
}

.root[buttonDisplay="bothEnds"] .button:hover {
    background: var(--number-input-button-both-ends-background-hover);
}

.root[buttonDisplay="tail"] .button:focus {
    background: var(--number-input-button-background-focus);
    outline: var(--number-input-button-outline);
}

.root[buttonDisplay="bothEnds"] .button:focus {
    background: var(--number-input-button-both-ends-background-focus);
    outline: var(--number-input-button-both-ends-outline);
}

.root[buttonDisplay="tail"] .button:active {
    background: var(--number-input-button-background-active);
}

.root[buttonDisplay="bothEnds"] .button:active {
    background: var(--number-input-button-both-ends-background-active);
}

.root[buttonDisplay="tail"] .button[role="up"] {
    top: 0;
    border-bottom: 1px solid var(--number-input-border-color);
    border-top-right-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="tail"] .button[role="down"] {
    bottom: 0;
    border-bottom-right-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="tail"] .button[role="up"] {
    border-bottom: 1px solid var(--number-input-border-color);
    border-top-right-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="tail"] .button[role="down"] {
    bottom: 0;
    border-bottom-right-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="tail"] .button[role="up"]::before {
    icon-font: url("../i-icon.vue/icons/keyboard-arrow-up.svg");
}

.root[buttonDisplay="tail"] .button[role="down"]::before {
    icon-font: url("../i-icon.vue/icons/keyboard-arrow-down.svg");
}

.root[buttonDisplay="bothEnds"] .button[role="up"] {
    right: 0;
    border-left: 1px solid var(--number-input-border-color);
    border-top-right-radius: var(--number-input-button-border-radius);
    border-bottom-right-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="bothEnds"] .button[role="down"] {
    left: 0;
    border-right: 1px solid var(--number-input-border-color);
    border-top-left-radius: var(--number-input-button-border-radius);
    border-bottom-left-radius: var(--number-input-button-border-radius);
}

.root[buttonDisplay="bothEnds"] .button::before {
    font-family: var(--font-family-zh-CN);
}

.root[buttonDisplay="bothEnds"] .button[role="up"]::before {
    content: "+";
}

.root[buttonDisplay="bothEnds"] .button[role="down"]::before {
    content: '-';
}

.button::before {
    width: 1em;
    display: inline-block;
    font-size: 16px;
}

.root[buttonDisplay="tail"] .button:hover, 
.root[buttonDisplay="bothEnds"] .button:hover {
    color: var(--number-input-button-color-hover);
}

.root .button[disabled]:hover, 
.root[disabled] .button:hover {
     color: var(--number-input-button-color-disabled);
}

.root[disabled] {
    background: var(--number-input-background-disabled);
    color: var(--number-input-color-disabled);
    border-color: var(--number-input-border-color-disabled);
}

.root[disabled] .button[role="up"],
.root[disabled] .button[role="down"] {
    border-color: var(--number-input-border-color-disabled);
}

.root[disabled][buttonDisplay="tail"] .button {
    background: var(--number-input-button-background-disabled);
}

.root[disabled][buttonDisplay="bothEnds"] .button {
    background: var(--number-input-button-both-ends-background-disabled);
}

.button {
    color: var(--number-input-button-color);
}

.root[disabled] .button, .button[disabled] {
    background: var(--number-input-button-background-disabled);
    color: var(--number-input-button-color-disabled);
    cursor: var(--cursor-not-allowed);
    opacity: 0.65;
}

.root[readonly] .button {
    background: var(--number-input-button-background);
    cursor: default;
}
.root[readonly]:hover,
.root[readonly][focus] {
    border-color: var(--number-input-border-color);
}
.root[readonly] .button:hover {
    color: var(--number-input-button-color);
}
.root[readonly][buttonDisplay="bothEnds"] .button:focus,
.root[readonly][buttonDisplay="bothEnds"] .button:hover,
.root[readonly][buttonDisplay="bothEnds"] .button:active {
    background: var(--number-input-button-background);
}

.root[size="mini"] .button , .root[height="mini"] .button {
    right: -1px;
    height: calc((100% - 1px) / 2);
    line-height: calc((100% / 2) + 4px);
}

.root[size*="huge"] .button , .root[height="huge"] .button {
    height: calc(var(--input-height-huge) / 2 - 1px);
    line-height: calc(var(--input-height-huge) / 2 - 1px);
}

.root[size="mini"] .button[role="up"] , .root[height="mini"] .button[role="up"]{
    height: calc((100% - 1px) / 2 + 1px);
}

.root[size="mini"] .button[role="down"] , .root[height="mini"] .button[role="down"] {
    bottom: 0;
}

.root:not([hideButtons="true"]),
.root:not([hideButtons="true"])[clearable] input {
    padding-right: calc(var(--input-suffix-padding-right) + 24px);
}
.root:not([hideButtons="true"])[clearable] [class^="u-input_suffix__"] {
    right: 30px;
}
.root[buttonDisplay="bothEnds"][clearable] [class^="u-input_suffix__"] {
    right: 36px;
}
</style>
