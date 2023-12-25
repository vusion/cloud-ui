<template>
<span :class="$style.root" :width="width" :height="height">
    <u-range-input
        :class="$style.input"
        :left-value="genDisplayFormatText(startInputTime)"
        :right-value="genDisplayFormatText(endInputTime)"
        :autofocus="autofocus"
        :disabled="!!readonly || disabled"
        ref="input"
        :clearable="clearable" :placeholder="placeholder"
        :placeholder-right="placeholderRight"
        @update:value="onInputChange($event)"
        @left-click="onLeftClick"
        @right-click="onRightClick"
        @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :prefix="preIcon?preIcon:undefined"
        :suffix="suffixIcon?suffixIcon:undefined"
        :color="formItemVM && formItemVM.color">
        <template #prefix><i-ico v-if="preIcon" :name="preIcon" :class="[$style.preIcon]" notext></i-ico></template>
        <template #suffix><i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.suffixIcon]" notext></i-ico></template>
    </u-range-input>
    <u-time-picker-popper
        ref="startPopper"
        :min-unit="minUnit"
        :time="startTime"
        :disabled="disabled"
        :readonly="readonly"
        :min-time="minTime"
        :max-time="maxStartTime"
        :append-to="appendTo"
        :simple-foot="simpleFoot"
        :popper-width="popperWidth"
        :show-right-now-button="showRightNowButton"
        :show-footer-button="showFooterButton"
        :right-now-title="rightNowTitle"
        :cancel-title="cancelTitle"
        :ok-title="okTitle"
        :input-time.sync="startInputTime"
        @change="onStartTimeChange"
        @input="onStartTimeInput"
        @update:time="onUpdateStartTime"
        @blur="onPopperBlur"
        @toggle="onPopperToggle"
    ></u-time-picker-popper>
    <u-time-picker-popper
        ref="endPopper"
        :min-unit="minUnit"
        :time="endTime"
        :disabled="disabled"
        :readonly="readonly"
        :min-time="minEndTime"
        :max-time="maxTime"
        :append-to="appendTo"
        :simple-foot="simpleFoot"
        :popper-width="popperWidth"
        :show-right-now-button="showRightNowButton"
        :show-footer-button="showFooterButton"
        :right-now-title="rightNowTitle"
        :cancel-title="cancelTitle"
        :ok-title="okTitle"
        :input-time.sync="endInputTime"
        @change="onEndTimeChange"
        @input="onEndTimeInput"
        @update:time="onUpdateEndTime"
        @blur="onPopperBlur"
        @toggle="onPopperToggle"
    ></u-time-picker-popper>
</span>
</template>

<script>
import dayjs from '../../utils/dayjs';
import DateFormatMixin from '../../mixins/date.format';
import { formatterOptions } from './wrap';
import i18n from './i18n';
import MField from '../m-field.vue';
import UTimePickerPopper from './popper.vue';
import URangeInput from '../u-date-picker.vue/range-input.vue';
import i18nMixin from '../../mixins/i18n';

/**
 * @class TimePicker
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
 * @param {string='00:00'}          options.data.minTime             => 最小时间
 * @param {string='23:59'}          options.data.maxTime             => 最大时间
 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */

export default {
    name: 'u-time-range-picker',
    // i18n,
    components: { URangeInput, UTimePickerPopper },
    mixins: [MField, DateFormatMixin, i18nMixin('u-time-picker')],
    props: {
        minUnit: { type: String, default: 'second' },
        startTime: { type: String, default: '' },
        endTime: { type: String, default: '' },
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        readonly: [String, Boolean],
        minTime: { type: String, default: '00:00:00' },
        maxTime: { type: String, default: '23:59:59' },
        appendTo: {
            type: String,
            default: 'body',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        simpleFoot: { type: Boolean, default: false },
        preIcon: {
            type: String,
            default: 'time',
        },
        suffixIcon: {
            type: String,
            default: '',
        },
        clearable: { type: Boolean, default: true },
        width: String,
        height: String,
        popperWidth: { type: String, default: '' },
        showRightNowButton: { type: Boolean, default: true },
        showFooterButton: { type: Boolean, default: true },
        rightNowTitle: { type: String, default: '' },
        cancelTitle: { type: String, default: '' },
        okTitle: { type: String, default: '' },
        placeholder: {
            type: String,
            default() {
                return this.$tt('selectTimeText');
            },
        },
        placeholderRight: {
            type: String,
        },
    },
    data() {
        return {
            startInputTime: this.startTime,
            endInputTime: this.endTime,
            editTarget: '', // 标明当前编辑的是起始/结束值
        };
    },
    computed: {
        maxStartTime() {
            return this.endInputTime || this.maxTime;
        },
        minEndTime() {
            return this.startInputTime || this.minTime;
        },
        validShowFormatters() {
            return formatterOptions[this.minUnit];
        },
    },
    created() {
        const value = this.startInputTime && this.endInputTime ? [this.startInputTime, this.endInputTime] : '';
        this.$emit('update', value);
    },
    methods: {
        getFormatString() {
            if (this.minUnit === 'second') {
                return 'HH:mm:ss';
            }

            if (this.minUnit === 'minute') {
                return 'HH:mm';
            }

            return 'HH:mm:ss';
        },
        getDisplayFormatString() {
            let formatter;

            if (this.advancedFormat && this.advancedFormat.enable && this.advancedFormat.value) { // 高级格式化开启
                formatter = this.advancedFormat.value;
            } else if (this.validShowFormatters.includes(this.showFormatter)) { // 配置的展示格式满足
                formatter = this.showFormatter;
            }

            if (formatter) {
                return formatter;
            }

            return this.getFormatString();
        },
        genDisplayFormatText(value) {
            if (!value)
                return value;

            let text = value;
            try {
                const showFormatter = this.getDisplayFormatString();
                const valueFormatter = this.getFormatString();

                if (showFormatter && showFormatter !== valueFormatter) {
                    // 拼凑出今天日期
                    const today = dayjs().format('YYYY-MM-DD');
                    const time = new Date(`${today} ${value}`);
                    text = dayjs(time).format(showFormatter);
                }
            } catch (error) {
                console.log(error);
            }

            return text;
        },
        callPopperMethod(methodName, ...args) {
            const refName = this.editTarget === 'start' ? 'startPopper' : 'endPopper';
            if (this.$refs[refName] && this.$refs[refName][methodName]) {
                this.$refs[refName][methodName](...args);
            }
        },
        onLeftClick() {
            this.editTarget = 'start';
            this.$refs.endPopper && this.$refs.endPopper.close();
            this.callPopperMethod('open');
        },
        onRightClick() {
            this.editTarget = 'end';
            this.$refs.startPopper && this.$refs.startPopper.close();
            this.callPopperMethod('open');
        },
        onInputChange(value) {
            const changedValue = this.editTarget === 'start' ? value.leftValue : value.rightValue;
            this.callPopperMethod('onInputChange', changedValue);
        },
        onBlur() {
            // 先不抛出事件，内部处理掉
            this.callPopperMethod('onBlur');
        },
        onBlurInputValue(value) {
            this.callPopperMethod('onBlurInputValue', value);
            this.$nextTick(() => {
                this.$refs.input.updateCurrentValue({
                    leftValue: this.genDisplayFormatText(this.startInputTime),
                    rightValue: this.genDisplayFormatText(this.endInputTime),
                });
            });
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onStartTimeChange(e) {
            this.$emit('change', { sender: this, startTime: e.value }, this);
        },
        onEndTimeChange(e) {
            this.$emit('change', { sender: this, endTime: e.value }, this);
        },
        onStartTimeInput(inputValue) {
            const value = inputValue && this.endInputTime ? [inputValue, this.endInputTime] : '';
            this.$emit('input', value, this);
        },
        onEndTimeInput(inputValue) {
            const value = inputValue && this.startInputTime ? [this.startInputTime, inputValue] : '';
            this.$emit('input', value, this);
        },
        onUpdateStartTime(value) {
            this.$emit('update:startTime', value);
        },
        onUpdateEndTime(value) {
            this.$emit('update:endTime', value);
        },
        // blur 有很多种情况，这里放到 popper 内部统一处理
        onPopperBlur() {
            this.$emit('blur', this);
        },
        onPopperToggle(e) {
            this.$emit('toggle', e, this);
        },
        clearValue() {
            this.$refs.startPopper && this.$refs.startPopper.clearValue();
            this.$refs.endPopper && this.$refs.endPopper.clearValue();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    width: var(--timepicker-range-input-width);
}

.input {
    border: var(--timepicker-input-border-width) solid var(--timepicker-input-border-color);
    color: var(--timepicker-input-color);
    background: var(--timepicker-input-background);
    border-radius: var(--timepicker-input-border-radius);
    height: var(--timepicker-input-height);
}
.input [class^="u-input_placeholder__"] {
    color: var(--timepicker-input-placeholder-color);
}

.root[width="mini"] {
    width: var(--timepicker-input-width-mini);
}

.root[height="mini"] .input {
    height: var(--timepicker-input-height-mini);
    line-height: calc(var(--timepicker-input-height-mini) - var(--timepicker-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--timepicker-input-width-small);
}

.root[height="small"] .input {
    height: var(--timepicker-input-height-small);
    line-height: calc(var(--timepicker-input-height-small) - var(--timepicker-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--timepicker-input-width);
}

.root[height="normal"] .input {
    height: var(--timepicker-input-height);
    line-height: calc(var(--timepicker-input-height) - var(--timepicker-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--timepicker-input-width-medium);
}

.root[height="medium"] .input {
    height: var(--timepicker-input-height-medium);
    line-height: calc(var(--timepicker-input-height-medium) - var(--timepicker-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--timepicker-input-width-large);
}

.root[height="large"] .input {
    height: var(--timepicker-input-height-large);
    line-height: calc(var(--timepicker-input-height-large) - var(--timepicker-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--timepicker-input-width-huge);
}

.root[height="huge"] .input {
    height: var(--timepicker-input-height-huge);
    line-height: calc(var(--timepicker-input-height-huge) - var(--timepicker-input-border-width) * 2);
}

.root[width="full"] {
    width: 100%;
    padding-right: var(--timepicker-input-padding-x-full);
}

.root[height="full"] .input {
    height: 100%;
}

.root .dot {
    padding: 0 5px;
    user-select: none;
}

.preIcon {
    color: var(--timepicker-input-pre-icon-color);
}

.suffixIcon {
    color: var(--timepicker-input-after-icon-color);
}
</style>
