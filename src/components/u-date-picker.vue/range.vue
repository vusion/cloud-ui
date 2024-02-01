<template>
<div :class="$style.root" :width="width" :height="height">
    <u-range-input
        :class="$style.input"
        ref="input"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        :left-value="genDisplayFormatText(showStartDate)"
        :right-value="genDisplayFormatText(showEndDate)"
        :clearable="clearable"
        :placeholder="placeholder"
        :placeholder-right="placeholderRight"
        @left-click="toggle(true)"
        @right-click="toggle(true)"
        @update:value="onInput($event)" @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :pre-icon="preIcon"
        :suffix-icon="suffixIcon"
        :color="formItemVM && formItemVM.color">
    </u-range-input>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo" :disabled="disabled || readonly" :placement="placement" @toggle="onToggle($event)" @close="onPopperClose">
        <div @click.stop>
            <u-calendar-range
                :picker="picker"
                ref="calendar"
                :min-date="minDate"
                :year-diff="yearDiff"
                :year-add="yearAdd"
                :max-date="maxDate"
                :start-date="calendarStartDate"
                :end-date="calendarEndDate"
                @select="select($event)">
            </u-calendar-range>
        </div>
    </m-popper>
</div>
</template>

<script>
import dayjs from '../../utils/dayjs';
import DateFormatMixin from '../../mixins/date.format';
import { formatterOptions } from './wrap';
import { DateRangeError } from '../u-calendar.vue/error.js';
import { clickOutside } from '../../directives';
import { format, transformDate, ChangeDate } from '../../utils/date';
import MField from '../m-field.vue';
import URangeInput from './range-input.vue';
import i18n from './i18n';
import i18nMixin from '../../mixins/i18n';

const MS_OF_DAY = 24 * 3600 * 1000;

/**
 * @class DatePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 */

export default {
    name: 'u-date-range-picker',
    // i18n,
    components: { URangeInput },
    directives: { clickOutside },
    mixins: [MField, DateFormatMixin, i18nMixin('u-date-picker')],
    props: {
        preIcon: {
            type: String,
            default: 'calendar',
        },
        suffixIcon: { type: String },
        startDate: { type: [String, Number, Date] },
        endDate: { type: [String, Number, Date] },
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        picker: { type: String, default: 'date' },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$tt('selectDateText');
            },
        },
        placeholderRight: {
            type: String,
        },
        alignment: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
        time: { type: [String, Number], default: 'start' },
        yearDiff: { type: [String, Number], default: 20 },
        yearAdd: { type: [String, Number], default: 20 },
        clearable: { type: Boolean, default: false },
        converter: { type: String, default: 'format' },
        appendTo: {
            type: String,
            default: 'body',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        opened: { type: Boolean, default: false },
        width: String,
        height: String,
    },
    data() {
        const showStartDate = this.format(this.startDate, this.getFormatString());
        const showEndDate = this.format(this.endDate, this.getFormatString());
        return {
            // 输入框里的值
            showStartDate,
            showEndDate,
            // calendar里的值
            calendarStartDate: showStartDate ? new Date(this.transformDate(showStartDate)) : undefined,
            calendarEndDate: showEndDate ? new Date(this.transformDate(showEndDate)) : undefined,
        };
    },
    computed: {
        placement() {
            if (this.alignment === 'left')
                return 'bottom-start';
            else if (this.alignment === 'right')
                return 'bottom-end';
        },
        validShowFormatters() {
            return formatterOptions[this.picker];
        },
    },
    watch: {
        startDate(newValue) {
            this.showStartDate = this.format(newValue, this.getFormatString());
        },
        endDate(newValue) {
            this.showEndDate = this.format(newValue, this.getFormatString());
        },
        showStartDate(newValue) {
            const showDate = this.returnTime(newValue);
            const newDate = showDate ? new Date(this.transformDate(showDate)) : undefined;
            this.$emit('update:startDate', this.toValue(newDate));
            this.$emit('change', { sender: this, startDate: newDate });
            this.$emit('input', newDate && this.showEndDate ? [
                this.toValue(newDate),
                this.toValue(new Date(this.transformDate(this.showEndDate))),
            ] : '');
            this.calendarStartDate = newDate; // showDate改变时设置calendar里的值
        },
        showEndDate(newValue) {
            const showDate = this.returnTime(newValue);
            const newDate = showDate ? new Date(this.transformDate(showDate)) : undefined;
            this.$emit('update:endDate', this.toValue(newDate));
            this.$emit('change', { sender: this, endDate: newDate });
            this.$emit('input', this.showStartDate && newDate ? [
                this.toValue(new Date(this.transformDate(this.showStartDate))),
                this.toValue(newDate),
            ] : '');
            this.calendarEndDate = newDate; // showDate改变时设置calendar里的值
        },
        minDate(newValue) {
            return this.checkDate(newValue);
        },
        maxDate(newValue) {
            return this.checkDate(newValue);
        },
    },
    created() {
        if (this.minDate && this.maxDate) {
            if (this.checkDate(this.minDate) && this.checkDate(this.maxDate)) {
                const minDate = new Date(this.minDate);
                const maxDate = new Date(this.maxDate);
                if ((minDate / MS_OF_DAY) >> 0 > (maxDate / MS_OF_DAY) >> 0)
                    throw new DateRangeError(minDate, maxDate);
            }
        }
        this.$emit(
            'update',
            this.showStartDate && this.showEndDate ? [
                this.toValue(this.showStartDate ? new Date(this.transformDate(this.showStartDate)) : ''),
                this.toValue(this.showEndDate ? new Date(this.transformDate(this.showEndDate)) : ''),
            ] : '',
        );
    },
    mounted() {
        // this.autofocus && this.$refs.input.focus();
        // 在编辑器里不要打开
        if (!this.$env.VUE_APP_DESIGNER)
            this.toggle(this.opened);
    },
    methods: {
        getFormatString() {
            if (this.picker === 'date') {
                return 'YYYY-MM-DD';
            }

            if (this.picker === 'year') {
                return 'YYYY';
            }

            if (this.picker === 'month') {
                return 'YYYY-MM';
            }

            if (this.picker === 'quarter') {
                return 'YYYY-QQ';
            }

            if (this.picker === 'week') {
                return 'YYYY-WWWW';
            }

            return 'YYYY-MM-DD';
        },
        toValue(date) {
            if (!date)
                return date;
            if (this.converter === 'format')
                return this.format(date, 'YYYY-MM-DD'); // value 的真实格式
            else if (this.converter === 'json')
                return date.toJSON();
            else if (this.converter === 'timestamp')
                return date.getTime();
            else
                return date;
        },
        checkDate(date) {
            if (!date)
                return;
            if (date === 'Invalid Date' || date === 'NaN')
                throw new TypeError('Invalid Date');
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select({ startDate, endDate }) {
            if (this.readonly || this.disabled
                || this.isOutOfRange(startDate) || this.isOutOfRange(endDate))
                return;
            this.showStartDate = this.format(startDate, this.getFormatString());
            this.showEndDate = this.format(endDate, this.getFormatString());
            const showStartDate = this.returnTime(this.showStartDate);
            const showEndDate = this.returnTime(this.showEndDate);
            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                startDate: new Date(this.transformDate(showStartDate)),
                endDate: new Date(this.transformDate(showEndDate)),
            });
            this.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput({ leftValue, rightValue }) {
            if (!leftValue)
                this.showStartDate = undefined;
            if (!rightValue)
                this.showEndDate = undefined;
            // 处理 left > right 的情况
            if (this.checkValid(leftValue) && this.checkValid(rightValue)
                && new Date(this.transformDate(leftValue)) > new Date(this.transformDate(rightValue))) {
                const temp = leftValue;
                leftValue = rightValue;
                rightValue = temp;
            }
            if (this.checkValid(leftValue)) {
                let date = dayjs(leftValue, this.getDisplayFormatString()).toDate();
                const isOutOfRange = this.isOutOfRange(date); // 超出范围还原成上一次值
                date = isOutOfRange ? this.showStartDate : date;
                const showDate = this.format(date, this.getFormatString());
                this.showStartDate = showDate;
                this.calendarStartDate = this.transformDate(showDate);
                this.$refs.input.updateCurrentValue({ leftValue: this.genDisplayFormatText(this.showStartDate) });
            }
            if (this.checkValid(rightValue)) {
                let date = dayjs(rightValue, this.getDisplayFormatString()).toDate();
                const isOutOfRange = this.isOutOfRange(date); // 超出范围还原成上一次值
                date = isOutOfRange ? this.showEndDate : date;
                const showDate = this.format(date, this.getFormatString());
                this.showEndDate = showDate;
                this.calendarEndDate = this.transformDate(showDate);
                this.$refs.input.updateCurrentValue({ rightValue: this.genDisplayFormatText(this.showEndDate) });
            }
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = ChangeDate(this.transformDate(this.minDate), this.picker, 'min');
            let maxDate = ChangeDate(this.transformDate(this.maxDate), this.picker, 'max'); // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0); // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期。
            return (
                (minDate && date < minDate && minDate)
                || (maxDate && date > maxDate && maxDate)
            );
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        onToggle($event) {
            this.$emit('toggle', $event);
            if ($event && $event.opened) {
                this.preventBlur = true;
            }
        },
        format,
        transformDate,
        returnTime(date) {
            if (!date)
                return;
            let time;
            if (this.time === 'start') {
                // 0:00:00
                time = '0:00:00';
            } else if (this.time === 'morning') {
                // 08:00:00
                time = '8:00:00';
            } else if (this.time === 'end') {
                // 23:59:59
                time = '23:59:59';
            } else if (typeof this.time === 'number') {
                // 具体的时分秒
                if (this.time < 0)
                    throw new Error(this.$tt('integerTip'));
                time = this.time < 24 ? this.time + ':00:00' : '23:59:59';
            } else {
                if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(this.time))
                    throw new Error(this.$tt('formatErrorTip'));
                time = this.time;
            }
            return date + ' ' + time;
        },
        clearValue() {
            this.showStartDate = undefined;
            this.showEndDate = undefined;
        },
        onBlur(e) {
            if (this.preventBlur)
                return (this.preventBlur = false);
            this.$emit('blur', e, this);
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        toggle(value) {
            this.$refs.popper && this.$refs.popper.toggle(value);
        },
        checkValid(value) {
            return dayjs(value, this.getDisplayFormatString(), true).isValid();
            // switch (this.picker) {
            //     case 'year':
            //         return /^[1-9]\d{3}$/.test(value);
            //     case 'month':
            //         return /^[1-9]\d{3}-(0[1-9]|1[0-2])$/.test(value);
            //     case 'quarter':
            //         return /^[1-9]\d{3}-(Q[1-4])$/.test(value);
            //     case 'week':
            //         return /^[1-9]\d{3}-(W[0-5][0-9])$/.test(value);
            //     default:
            //         // date format
            //         return /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value);
            // }
        },
        onBlurInputValue({ leftValue, rightValue }) {
            // 当输入框输入的值不合法，需还原成上一次合法的值
            if (leftValue && !this.checkValid(leftValue)) {
                this.showStartDate = this.format(this.calendarStartDate, this.getFormatString());
                this.$refs.input.updateCurrentValue({ leftValue: this.genDisplayFormatText(this.showStartDate) });
            }
            if (rightValue && !this.checkValid(rightValue)) {
                this.showEndDate = this.format(this.calendarEndDate, this.getFormatString());
                this.$refs.input.updateCurrentValue({ rightValue: this.genDisplayFormatText(this.showEndDate) });
            }
        },
        onPopperClose(e) {
            this.$emit('blur', e, this);
            setTimeout(() => { // 为了不触发input的blur，否则会有两次blur
                this.preventBlur = false;
            }, 0);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    max-width: 100%; /* 防止表格等小的地方超出区域 */
    width: var(--datepicker-range-input-width);
}

.input {
    border: var(--datepicker-input-border-width) solid var(--datepicker-input-border-color);
    color: var(--datepicker-input-color);
    background: var(--datepicker-input-background);
    border-radius: var(--datepicker-input-border-radius);
    height: var(--datepicker-input-height);
    line-height: calc(var(--datepicker-input-height) - var(--datepicker-input-border-width) * 2);
}
.input [class^="u-input_placeholder__"] {
    color: var(--datepicker-input-placeholder-color);
}

.root[width="mini"] {
    width: var(--datepicker-input-width-mini);
}

.root[height="mini"] .input {
    height: var(--datepicker-input-height-mini);
    line-height: calc(var(--datepicker-input-height-mini) - var(--datepicker-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--datepicker-input-width-small);
}

.root[height="small"] .input {
    height: var(--datepicker-input-height-small);
    line-height: calc(var(--datepicker-input-height-small) - var(--datepicker-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--datepicker-input-width);
}

.root[height="normal"] .input {
    height: var(--datepicker-input-height);
    line-height: calc(var(--datepicker-input-height) - var(--datepicker-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--datepicker-input-width-medium);
}

.root[height="medium"] .input {
    height: var(--datepicker-input-height-medium);
    line-height: calc(var(--datepicker-input-height-medium) - var(--datepicker-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--datepicker-input-width-large);
}

.root[height="large"] .input {
    height: var(--datepicker-input-height-large);
    line-height: calc(var(--datepicker-input-height-large) - var(--datepicker-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--datepicker-input-width-huge);
}

.root[height="huge"] .input {
    height: var(--datepicker-input-height-huge);
    line-height: calc(var(--datepicker-input-height-huge) - var(--datepicker-input-border-width) * 2);
}

.root[width="full"] {
    width: 100%;
    padding-right: var(--datepicker-input-padding-x-full);
}

.root[width="full"] .input {
    padding-left: var(--datepicker-input-padding-x-full);
    padding-right: var(--datepicker-input-padding-x-full);
}

.root[height="full"] .input {
    height: 100%;
}

.popper {
    z-index: var(--z-index-tooltip);
    box-shadow: var(--datepicker-popper-box-shadow);
    border-radius: var(--datepicker-popper-border-radius);
}
</style>
