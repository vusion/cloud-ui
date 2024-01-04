<template>
<span v-if="!isPreview" :class="$style.root" :width="width" :height="height">
    <u-input
        :class="$style.input"
        width="full"
        height="full"
        ref="input"
        :value="genDisplayFormatText(inputTime)"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        :clearable="clearable" :placeholder="placeholder"
        @update:value="onInputChange($event)"
        @click="onInputClick"
        @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :prefix="preIcon?preIcon:undefined"
        :suffix="suffixIcon?suffixIcon:undefined"
        :color="formItemVM && formItemVM.color">
        <template #prefix><i-ico v-if="preIcon" :name="preIcon" :class="[$style.preIcon]" notext></i-ico></template>
        <template #suffix><i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.suffixIcon]" notext></i-ico></template>
    </u-input>
    <u-time-picker-popper
        ref="popper"
        :min-unit="minUnit"
        :time="value || time"
        :disabled="disabled"
        :readonly="readonly"
        :min-time="minTime"
        :max-time="maxTime"
        :append-to="appendTo"
        :simple-foot="simpleFoot"
        :popper-width="popperWidth"
        :show-right-now-button="showRightNowButton"
        :show-footer-button="showFooterButton"
        :right-now-title="rightNowTitle"
        :cancel-title="cancelTitle"
        :ok-title="okTitle"
        :input-time.sync="inputTime"
        @spinner-click="onSpinnerClick"
        @change="onChange"
        @update:time="onUpdateTime"
        @blur="onPopperBlur"
        @toggle="onPopperToggle"
        @input="onEmitInput"
        @update="onEmitUpdate"
    ></u-time-picker-popper>
</span>
<u-preview v-else :text="genDisplayFormatText(inputTime)"></u-preview>
</template>

<script>
import dayjs from '../../utils/dayjs';
import DateFormatMixin from '../../mixins/date.format';
import { formatterOptions } from './wrap';
import i18n from './i18n';
import MField from '../m-field.vue';
import UTimePickerPopper from './popper.vue';
import UPreview from '../u-text.vue/preview.vue';
import MPreview from '../u-text.vue/preview';
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
    name: 'u-time-picker',
    // i18n,
    components: { UTimePickerPopper, UPreview },
    mixins: [MField, DateFormatMixin, i18nMixin('u-time-picker'), MPreview],
    props: {
        minUnit: { type: String, default: 'second' },
        time: { type: String, default: '' },
        value: { type: String, default: '' }, // 优先使用
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        preview: { type: Boolean, default: false },
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
    },
    data() {
        return {
            inputTime: this.value || this.time,
        };
    },
    watch: {
        time() {
            this.inputTime = this.time;
        },
    },
    computed: {
        validShowFormatters() {
            return formatterOptions[this.minUnit];
        },
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
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        onInputClick() {
            this.open();
        },
        onInputChange(value) {
            this.$refs.popper && this.$refs.popper.onInputChange(value);
        },
        onBlur() {
            // 先不抛出事件，内部处理掉
            this.$refs.popper && this.$refs.popper.onBlur();
        },
        onBlurInputValue(value) {
            this.$refs.popper && this.$refs.popper.onBlurInputValue(value);
            this.$nextTick(() => {
                this.$refs.input.updateCurrentValue(this.genDisplayFormatText(this.inputTime));
            });
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onChange(e) {
            this.$emit('change', e, this);
        },
        onUpdateTime(e) {
            // time 值的更新也由内部触发
            this.$emit('update:value', e, this);
            this.$emit('update:time', e, this);
        },
        // blur 有很多种情况，这里放到 popper 内部统一处理
        onPopperBlur(e) {
            this.$emit('blur', e, this);
        },
        onPopperToggle(e) {
            this.$emit('toggle', e, this);
        },
        onEmitInput(e) {
            // input 也由内部触发
            this.$emit('input', e, this);
        },
        onEmitUpdate(e) {
            this.$emit('update', e);
        },
        clearValue() {
            this.$refs.popper && this.$refs.popper.clearValue();
        },
        onSpinnerClick() {
            this.$refs.input.focus();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    width: var(--timepicker-input-width);
}

.input {
    padding: 0 var(--timepicker-input-padding-x);
    border: var(--timepicker-input-border-width) solid var(--timepicker-input-border-color);
    color: var(--timepicker-input-color);
    background: var(--timepicker-input-background);
    border-radius: var(--timepicker-input-border-radius);
    width: var(--timepicker-input-width);
    height: var(--timepicker-input-height);
}
.input [class^="u-input_placeholder__"] {
    color: var(--timepicker-input-placeholder-color);
}

.root[width="mini"] {
    width: var(--timepicker-input-width-mini);
}
.root[width="mini"] .input {
    padding-left: var(--timepicker-input-padding-x-mini);
    padding-right: var(--timepicker-input-padding-x-mini);
}

.root[height="mini"] .input {
    height: var(--timepicker-input-height-mini);
    line-height: calc(var(--timepicker-input-height-mini) - var(--timepicker-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--timepicker-input-width-small);
}

.root[width="small"] .input{
    padding-left: var(--timepicker-input-padding-x-small);
    padding-right: var(--timepicker-input-padding-x-small);
}

.root[height="small"] .input {
    height: var(--timepicker-input-height-small);
    line-height: calc(var(--timepicker-input-height-small) - var(--timepicker-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--timepicker-input-width);
}

.root[width="normal"] .input {
    padding-left: var(--timepicker-input-padding-x);
    padding-right: var(--timepicker-input-padding-x);
}

.root[height="normal"] .input {
    height: var(--timepicker-input-height);
    line-height: calc(var(--timepicker-input-height) - var(--timepicker-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--timepicker-input-width-medium);
}

.root[width="medium"] .input {
    padding-left: var(--timepicker-input-padding-x-medium);
    padding-right: var(--timepicker-input-padding-x-medium);
}

.root[height="medium"] .input {
    height: var(--timepicker-input-height-medium);
    line-height: calc(var(--timepicker-input-height-medium) - var(--timepicker-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--timepicker-input-width-large);
}

.root[width="large"] .input {
    padding-left: var(--timepicker-input-padding-x-large);
    padding-right: var(--timepicker-input-padding-x-large);
}

.root[height="large"] .input {
    height: var(--timepicker-input-height-large);
    line-height: calc(var(--timepicker-input-height-large) - var(--timepicker-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--timepicker-input-width-huge);
}

.root[width="huge"] .input {
    padding-left: var(--timepicker-input-padding-x-huge);
    padding-right: var(--timepicker-input-padding-x-huge);
}

.root[height="huge"] .input {
    height: var(--timepicker-input-height-huge);
    line-height: calc(var(--timepicker-input-height-huge) - var(--timepicker-input-border-width) * 2);
}

.root[width="full"] {
    width: 100%;
    padding-right: var(--timepicker-input-padding-x-full);
}

.root[width="full"] .input {
    padding-left: var(--timepicker-input-padding-x-full);
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
