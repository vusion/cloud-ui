<template>
<div :class="$style.root" :width="width" :height="height">
    <u-range-input
        :class="$style.input"
        ref="input"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        left-width="full"
        :left-value="genDisplayFormatText(finalStartDateTime)"
        :right-value="genDisplayFormatText(finalEndDateTime)"
        :clearable="clearable" :placeholder="placeholder"
        :placeholder-right="placeholderRight"
        @left-click="toggleLeft(true)"
        @right-click="toggleRight(true)"
        @update:value="onInput($event)" @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :pre-icon="preIcon"
        :suffix-icon="suffixIcon"
        :color="formItemVM && formItemVM.color">
    </u-range-input>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo" :disabled="disabled || readonly" :placement="placement"
        @toggle="onToggle($event)"
        @close="onPopperClose"
        @open="onPopperOpen">
        <div @click.stop>
            <div :class="$style.popperhead">
                <u-input :placeholder="popperplaceholder" :class="$style.pickerinput" :value="showDate" clearable
                    ref="dateInput"
                    @clear="showDate=undefined"
                    @blur:value="onDateChange($event)">
                </u-input>
                <u-time-picker :class="$style.pickerinput" :readonly="readonly" :time="showTime"
                    width="50" :min-time="minTime" :max-time="maxTime"
                    :simple-foot="true" pre-icon=""
                    :min-unit="minUnit"
                    :disabled="!showDate"
                    @change="outRangeDateTime(showDate, $event.time)"
                    popper-width="134px">
                </u-time-picker>
            </div>
            <u-calendar :readonly="readonly" :year-diff="yearDiff" :year-add="yearAdd"
                :min-date="minCalendarDate" :max-date="maxCalendarDate" :date="showDate"
                :border="false"
                @select="outRangeDateTime($event.date, showTime)">
            </u-calendar>
            <div :class="$style.footer" v-if="showFooterButton || showRightNowButton">
                <u-linear-layout justify="space-between">
                    <u-linear-layout :class="$style.ctimewrap">
                        <u-link @click="setDateNow()" v-if="showRightNowButton" :readonly="readonly" :disabled="disabled || disabledNow">{{ rightNowTitle || $tt('now') }}</u-link>
                    </u-linear-layout>
                    <u-linear-layout :class="$style.btnwrap" v-if="showFooterButton">
                        <u-button @click="onCancel">{{ cancelTitle || $tt('cancel') }}</u-button>
                        <u-button @click="onConfirm" color="primary" :readonly="readonly" :disabled="disabled">{{ okTitle || $tt('submit') }}</u-button>
                    </u-linear-layout>
                </u-linear-layout>
            </div>
        </div>
    </m-popper>
    <slot></slot>
</div>
</template>

<script>
import dayjs from '../../utils/dayjs';
import DateFormatMixin from '../../mixins/date.format';
// import { formatterOptions as dateFormatterOptions } from '../u-date-picker.vue/wrap';
import { formatterOptions as timeFormatterOptions } from '../u-time-picker.vue/wrap';
import { format, transformDate } from '../../utils/date';
import MField from '../m-field.vue';
import URangeInput from '../u-date-picker.vue/range-input.vue';
import i18n from './i18n';
import i18nMixin from '../../mixins/i18n';
/**
 * @class DateTimePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期时间
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期时间，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期时间，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */

export default {
    name: 'u-date-time-range-picker',
    // i18n,
    components: { URangeInput },
    mixins: [MField, DateFormatMixin, i18nMixin('u-date-time-picker')],
    props: {
        preIcon: {
            type: String,
            default: 'calendar',
        },
        suffixIcon: { type: String },
        disabled: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$tt('selectTimeText');
            },
        },
        placeholderRight: {
            type: String,
        },
        readonly: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        date: [String, Number, Date],
        value: [String, Number, Date],
        startDate: { type: [String, Number, Date] },
        endDate: { type: [String, Number, Date] },
        yearDiff: { type: [String, Number], default: 20 },
        yearAdd: { type: [String, Number], default: 20 },
        converter: { type: String, default: 'json' },
        clearable: { type: Boolean, default: false },
        appendTo: {
            type: String,
            default: 'body',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        opened: { type: Boolean, default: false },
        alignment: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
        width: String,
        height: String,
        showRightNowButton: { type: Boolean, default: true },
        showFooterButton: { type: Boolean, default: true },
        rightNowTitle: { type: String, default: '' },
        cancelTitle: { type: String, default: '' },
        okTitle: { type: String, default: '' },

        showDateFormatter: {
            type: String,
            default: 'YYYY-MM-DD',
        },
        showTimeFormatter: {
            type: String,
            default: 'HH:mm:ss',
        },
        minUnit: { type: String, default: 'second' },
    },
    data() {
        return {
            startDateTime: this.format(this.startDate, 'YYYY-MM-DD HH:mm:ss'), // popper选择以后的值
            endDateTime: this.format(this.endDate, 'YYYY-MM-DD HH:mm:ss'), // popper选择以后的值
            open: false,
            startMinTime: undefined,
            startMaxTime: undefined,
            endMinTime: undefined,
            endMaxTime: undefined,
            currentMaxDate: this.getMaxDate(), // 可能会存在最大值小于最小值情况，组件需要内部处理让最大值和最小值一样
            popperplaceholder: this.$tt('selectPopperDateText'),
            finalStartDateTime: this.format(this.startDate, 'YYYY-MM-DD HH:mm:ss'), // 最外面的输入框
            finalEndDateTime: this.format(this.endDate, 'YYYY-MM-DD HH:mm:ss'), // 最外面的输入框
            showDate: undefined, // popper里的日期输入框
            showTime: undefined, // popper里的时间输入框
            editTarget: '', // 编辑的是起始/结束值
        };
    },
    computed: {
        // 基于编辑目标状态计算出来的最小值
        finalMinDate() {
            return this.editTarget === 'end' ? this.startDateTime : this.minDate;
        },
        // 基于编辑目标状态计算出来的最大值
        finalMaxDate() {
            return this.editTarget === 'start' ? this.endDateTime : this.currentMaxDate;
        },
        minCalendarDate() {
            return this.format(this.finalMinDate, 'YYYY-MM-DD');
        },
        maxCalendarDate() {
            return this.format(this.finalMaxDate, 'YYYY-MM-DD');
        },
        spMinTime() {
            return this.format(this.finalMinDate, 'HH:mm:ss');
        },
        spMaxTime() {
            return this.format(this.finalMaxDate, 'HH:mm:ss');
        },
        disabledNow() {
            const date = new Date();
            const { minDate, currentMaxDate } = this;
            let disabled = false;
            if (minDate) {
                disabled = date < this.transformDate(minDate);
            }
            if (!disabled && currentMaxDate) {
                disabled = date > this.transformDate(currentMaxDate);
            }
            return disabled;
        },
        placement() {
            if (this.alignment === 'left')
                return 'bottom-start';
            else if (this.alignment === 'right')
                return 'bottom-end';
            return '';
        },
        dateTime: {
            get() {
                return this.editTarget === 'end' ? this.endDateTime : this.startDateTime;
            },
            set(value) {
                // 基于当前编辑目标，设置对应的值
                if (this.editTarget === 'end') {
                    this.endDateTime = value;
                } else {
                    this.startDateTime = value;
                }
                if (value === 'Invalid Date' || value === 'NaN')
                    // 如果不为空并且超出日期范围，则设置为范围边界的日期
                    throw new TypeError('Invalid Date');
                if (value) {
                    const isOutOfRange = this.isOutOfRange(value);
                    if (isOutOfRange)
                        value = this.format(isOutOfRange, 'YYYY-MM-DD HH:mm:ss');
                }
                const newDateTime = value ? this.toValue(new Date(value.replace(/-/g, '/'))) : undefined;
                // 日期时间变化时，同步到输入框
                this.showDate = this.format(newDateTime, 'YYYY-MM-DD');
                this.showTime = this.format(newDateTime, this.minUnit === 'minute' ? 'HH:mm' : 'HH:mm:ss');
            },
        },
        minTime: {
            get() {
                return this.editTarget === 'end' ? this.endMinTime : this.startMinTime;
            },
            set(value) {
                // 基于当前编辑目标，设置对应的值
                if (this.editTarget === 'end') {
                    this.endMinTime = value;
                } else {
                    this.startMinTime = value;
                }
            },
        },
        maxTime: {
            get() {
                return this.editTarget === 'end' ? this.endMaxTime : this.startMaxTime;
            },
            set(value) {
                // 基于当前编辑目标，设置对应的值
                if (this.editTarget === 'end') {
                    this.endMaxTime = value;
                } else {
                    this.startMaxTime = value;
                }
            },
        },
        finalDateTime: {
            get() {
                return this.editTarget === 'end' ? this.finalEndDateTime : this.finalStartDateTime;
            },
            set(value) {
                // 基于当前编辑目标，设置对应的值
                if (this.editTarget === 'end') {
                    this.finalEndDateTime = value;
                } else {
                    this.finalStartDateTime = value;
                }
            },
        },
        // 基于编辑目标状态计算出来的 key
        dateKey() {
            return this.editTarget === 'end' ? 'endDate' : 'startDate';
        },
        validShowTimeFormatters() {
            return timeFormatterOptions[this.minUnit];
        },
    },
    watch: {
        startDate(newValue) {
            this.startDateTime = this.format(newValue, 'YYYY-MM-DD HH:mm:ss');
            this.finalStartDateTime = this.startDateTime;
            // this.$emit(
            //     'update:startDate',
            //     this.startDateTime,
            // );
        },
        endDate(newValue) {
            this.endDateTime = this.format(newValue, 'YYYY-MM-DD HH:mm:ss');
            this.finalEndDateTime = this.endDateTime;
            // this.$emit(
            //     'update:endDate',
            //     this.endDateTime,
            // );
        },
        maxDate(value) {
            this.currentMaxDate = this.getMaxDate(value);
        },
        minDate(value) {
            this.currentMaxDate = this.getMaxDate();
        },
    },
    created() {
        const startDateTime = this.toValue(this.startDateTime ? new Date(this.startDateTime.replace(/-/g, '/')) : '');
        const endDateTime = this.toValue(this.endDateTime ? new Date(this.endDateTime.replace(/-/g, '/')) : '');
        this.$emit(
            'update',
            this.startDateTime && this.endDateTime ? [startDateTime, endDateTime] : '',
        );
        this.$emit('update:startDate', startDateTime === '' ? undefined : startDateTime);
        this.$emit('update:endDate', endDateTime === '' ? undefined : endDateTime);
    },
    mounted() {
        this.autofocus && this.$refs.input.focus();
        // 在编辑器里不要打开
        if (!this.$env.VUE_APP_DESIGNER)
            this.toggle(this.opened);
    },
    methods: {
        getFormatString() {
            return 'YYYY-MM-DD HH:mm:ss';
        },
        getDisplayFormatString() {
            let formatter;

            if (this.advancedFormat && this.advancedFormat.enable && this.advancedFormat.value) { // 高级格式化开启
                formatter = this.advancedFormat.value;
            } else if (this.showDateFormatter || this.showTimeFormatter) { // 配置的展示格式满足
                formatter = `${this.showDateFormatter} `;

                if (this.validShowTimeFormatters.includes(this.showTimeFormatter)) {
                    formatter += this.showTimeFormatter;
                } else {
                    formatter += this.validShowTimeFormatters[0];
                }
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
                    text = dayjs(value, valueFormatter).format(showFormatter);
                }
            } catch (error) {
                console.log(error);
            }

            return text;
        },
        clearValue() {
            this.finalStartDateTime = undefined;
            this.finalEndDateTime = undefined;
            this.emitValue();
        },
        toValue(date) {
            if (!date)
                return date;

            if (this.converter === 'format')
                return this.format(date, 'YYYY-MM-DD HH:mm:ss'); // value 的真实格式
            else if (this.converter === 'json')
                return date.toJSON();
            else if (this.converter === 'timestamp')
                return date.getTime();
            else
                return date;
        },
        /**
         * @method outRangeDateTime(date, time) 修改日期为最大日期或最小日期
         * @private
         * @return {void}
         */
        outRangeDateTime(date, time) {
            if (!time) {
                time = '00:00:00';
            }
            if (date) {
                date = new Date(date);
            } else {
                this.$emit('select', { sender: this, [this.dateKey]: '' });
                return;
            }
            time = time.split(':');
            date.setHours(time[0] || 0);
            date.setMinutes(time[1] || 0);
            date.setSeconds(time[2] || 0);
            const datetime = this.format(date, 'YYYY-MM-DD');
            const dtime = this.format(date, 'HH:mm:ss');
            if (
                datetime === this.minCalendarDate
                && datetime === this.maxCalendarDate
            ) {
                this.minTime = this.spMinTime;
                this.maxTime = this.spMaxTime;
            } else if (datetime === this.minCalendarDate)
                this.minTime = this.spMinTime;
            else if (datetime === this.maxCalendarDate)
                this.maxTime = this.spMaxTime;
            else if (
                datetime === this.minCalendarDate
                && dtime < this.spMinTime
            ) {
                const spMinTime = this.spMinTime.split(':');
                date.setHours(spMinTime[0]);
                date.setMinutes(spMinTime[1]);
                date.setSeconds(spMinTime[2]);
            } else if (
                datetime === this.maxCalendarDate
                && dtime > this.spMaxTime
            ) {
                const spMaxTime = this.spMaxTime.split(':');
                date.setHours(spMaxTime[0]);
                date.setMinutes(spMaxTime[1]);
                date.setSeconds(spMaxTime[2]);
            } else {
                this.minTime = undefined;
                this.maxTime = undefined;
            } // if (datetime === this.minCalendarDate || datetime === this.maxCalendarDate)
            this.dateTime = this.format(date, 'YYYY-MM-DD HH:mm:ss');
            this.$emit('select', {
                sender: this,
                [this.dateKey]: new Date(date).getTime(),
            });
            this.preventBlur = true;
            // 隐藏底部确认取消按钮时，更新日期相当于直接确认操作
            if (!this.showFooterButton) {
                this.finalDateTime = this.dateTime;
                this.emitValue();
            }
        },
        /**
         * @method onDateTimeChange(date, time) 日期或时间改变后更新日期时间
         * @private
         * @return {void}
         */
        onDateTimeChange(date, time) {
            if (!time)
                time = '00:00:00';
            date = new Date(date);
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
            this.dateTime = this.format(date, 'YYYY-MM-DD HH:mm:ss');
            this.$emit('select', {
                sender: this,
                [this.dateKey]: new Date(date).getTime(),
            });
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const { leftValue, rightValue } = $event;
            const value = this.editTarget === 'start' ? leftValue : rightValue;
            if (value === '') { // 可以输空值
                this.finalDateTime = undefined;
                this.emitValue();
                return;
            }

            if (this.checkValid(value)) {
                let date = dayjs(value, this.getDisplayFormatString()).toDate();
                const isOutOfRange = this.isOutOfRange(date); // 超出范围还原成上一次值
                date = isOutOfRange ? this.finalDateTime : date;
                this.finalDateTime = this.format(date, 'YYYY-MM-DD HH:mm:ss');
                this.updateCurrentInputValue(this.genDisplayFormatText(this.finalDateTime));
                this.emitValue();
            }
        },
        onBlurInputValue(value) {
            if (!this.checkValid(value)) {
                this.updateCurrentInputValue(this.genDisplayFormatText(this.finalDateTime));
            }
        },
        updateDate(value) {
            let date = value ? new Date(value) : null;
            if (date !== null && date.toString() !== 'Invalid Date') {
                date = this.isOutOfRange(date) || date;
                this.dateTime = this.format(date, 'YYYY-MM-DD HH:mm:ss');
            } else {
                this.dateTime = '';
            }
            if (!this.showFooterButton) {
                this.finalDateTime = this.dateTime;
                this.emitValue();
            }
        },
        // 根据当前编辑目标更新输入框的值（起始/结束）
        updateCurrentInputValue(value) {
            const updateKey = this.editTarget === 'start' ? 'leftValue' : 'rightValue';
            this.$refs.input.updateCurrentValue({ [updateKey]: value });
        },
        setDateNow() {
            this.updateDate(new Date());
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期时间范围
         * @public
         * @param {Date} date 待测的日期时间
         * @return {boolean|Date} date 如果没有超出日期时间范围，则返回false；如果超出日期时间范围，则返回范围边界的日期时间
         */
        isOutOfRange(date) {
            date = this.transformDate(date);
            const minDate = this.transformDate(this.finalMinDate);
            const maxDate = this.transformDate(this.finalMaxDate);
            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
            return (
                (minDate && date < minDate && minDate)
                || (maxDate && date > maxDate && maxDate)
            );
        },
        beforeToggle(open = true) {
            if (open) {
                // 这里需要在打开选择框之前重新计算一下，不然时间范围可能不对
                const datetime = this.format(this.dateTime, 'YYYY-MM-DD');
                if (
                    datetime === this.minCalendarDate
                    && datetime === this.maxCalendarDate
                ) {
                    this.minTime = this.spMinTime;
                    this.maxTime = this.spMaxTime;
                } else if (datetime === this.minCalendarDate)
                    this.minTime = this.spMinTime;
                else if (datetime === this.maxCalendarDate)
                    this.maxTime = this.spMaxTime;
                else {
                    this.minTime = undefined;
                    this.maxTime = undefined;
                }
            }
        },
        toggle(open) {
            if (this.editTarget === 'end') {
                this.toggleRight(open);
            } else {
                this.toggleLeft(open);
            }
        },
        toggleLeft(open) {
            const { popper } = this.$refs;
            if (popper) {
                // 如果已经打开了右侧的，则关闭右侧的面板
                if (this.editTarget === 'end' && open)
                    popper.toggle(!open);
                if (open) {
                    this.editTarget = 'start';
                    this.beforeToggle();
                }
                // 下一个时序触发，等待事件完成
                this.$nextTick(() => {
                    popper.toggle(open);
                });
            }
        },
        toggleRight(open) {
            const { popper } = this.$refs;
            if (popper) {
                // 如果已经打开了左侧的，则关闭左侧的面板
                if (this.editTarget === 'start' && open)
                    popper.toggle(!open);
                if (open) {
                    this.editTarget = 'end';
                    this.beforeToggle();
                }
                // 下一个时序触发，等待事件完成
                this.$nextTick(() => {
                    popper.toggle(open);
                });
            }
        },
        format,
        transformDate,
        getMaxDate(value) {
            value = value || this.maxDate;
            const minTime = new Date(this.minDate).getTime();
            const maxTime = new Date(value).getTime();
            if (maxTime < minTime)
                return this.minDate;
            else
                return this.maxDate;
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
        onBlur(e) { // 只有autofocus的input的blur
            if (this.preventBlur)
                return (this.preventBlur = false);
            this.$emit('blur', e, this);
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onPopperClose(e) {
            this.$emit('blur', e, this);
            setTimeout(() => { // 为了不触发input的blur，否则会有两次blur
                this.preventBlur = false;
            }, 0);
            this.showDate = undefined;
            this.showTime = undefined;
        },
        onCancel() {
            this.toggle(false);
        },
        onConfirm() {
            this.toggle(false);
            this.finalDateTime = this.dateTime;
            this.emitValue();
        },
        emitValue() {
            const newStartDateTime = this.finalStartDateTime ? this.toValue(new Date(this.finalStartDateTime.replace(/-/g, '/'))) : undefined;
            const newEndDateTime = this.finalEndDateTime ? this.toValue(new Date(this.finalEndDateTime.replace(/-/g, '/'))) : undefined;
            this.$emit('update:startDate', newStartDateTime);
            this.$emit('update:endDate', newEndDateTime);
            /**
             * @event change 日期时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期时间
             */
            this.$emit('change', {
                sender: this,
                startDate: this.finalStartDateTime ? new Date(this.finalStartDateTime.replace(/-/g, '/')).getTime() : undefined,
                endDate: this.finalEndDateTime ? new Date(this.finalEndDateTime.replace(/-/g, '/')).getTime() : undefined,
            }); // 方便u-field组件捕获到其值
            this.$emit('input', newStartDateTime && newEndDateTime ? [newStartDateTime, newEndDateTime] : '');
        },
        onPopperOpen() {
            if (!this.finalDateTime)
                return;
            this.dateTime = this.format(new Date(this.finalDateTime.replace(/-/g, '/')), 'YYYY-MM-DD HH:mm:ss');
            this.showDate = this.format(this.dateTime, 'YYYY-MM-DD');
            this.showTime = this.format(this.dateTime, 'HH:mm:ss');
        },
        /**
         * 时间输入框输入的时候
         */
        onDateChange(value) {
            if (!value) {
                this.showDate = undefined;
                return;
            }
            let showDate = this.format(this.finalDateTime, 'YYYY-MM-DD');
            if (this.checkDate(value)) {
                const date = new Date(this.transformDate(value + ' ' + this.spMinTime));
                const isOutOfRange = this.isOutOfRange(date); // 超出范围还原成上一次值
                if (!isOutOfRange) {
                    showDate = this.format(date, 'YYYY-MM-DD');
                }
            }
            this.showDate = showDate;
            this.updateCurrentInputValue(this.showDate);
            this.outRangeDateTime(this.showDate, this.showTime);
        },
        checkValid(value) {
            return dayjs(value, this.getDisplayFormatString(), true).isValid();

            // const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
            // return reg.test(value);
        },
        checkDate(value) {
            const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
            return reg.test(value);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    max-width: 100%; /* 防止表格等小的地方超出区域 */
    width: var(--datetime-range-input-width);
}

.input {
    border: var(--datetime-input-border-width) solid var(--datetime-input-border-color);
    color: var(--datetime-input-color);
    background: var(--datetime-input-background);
    border-radius: var(--datetime-input-border-radius);
    height: var(--datetime-input-height);
}
.input [class^="u-input_placeholder__"] {
    color: var(--datetime-input-placeholder-color);
}

.root[width="mini"] {
    width: var(--datetime-input-width-mini);
}

.root[height="mini"] .input {
    height: var(--datetime-input-height-mini);
    line-height: calc(var(--datetime-input-height-mini) - var(--datetime-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--datetime-input-width-small);
}

.root[height="small"] .input {
    height: var(--datetime-input-height-small);
    line-height: calc(var(--datetime-input-height-small) - var(--datetime-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--datetime-input-width);
}

.root[height="normal"] .input {
    height: var(--datetime-input-height);
    line-height: calc(var(--datetime-input-height) - var(--datetime-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--datetime-input-width-medium);
}

.root[height="medium"] .input {
    height: var(--datetime-input-height-medium);
    line-height: calc(var(--datetime-input-height-medium) - var(--datetime-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--datetime-input-width-large);
}

.root[height="large"] .input {
    height: var(--datetime-input-height-large);
    line-height: calc(var(--datetime-input-height-large) - var(--datetime-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--datetime-input-width-huge);
}

.root[height="huge"] .input {
    height: var(--datetime-input-height-huge);
    line-height: calc(var(--datetime-input-height-huge) - var(--datetime-input-border-width) * 2);
}

.root[width="full"] {
    width: 100%;
}

.root[height="full"] .input {
    height: 100%;
}

.preIcon {
    left: 12px;
    color: var(--datetime-input-pre-icon-color);
}

.suffixIcon {
    right: 12px;
    color: var(--datetime-input-after-icon-color);
}

.timePicker {
    width: 100%;
    box-sizing: border-box;
    padding-left: 32px;
}

.footer {
    padding: 10px 8px;
    border-top: 1px solid var(--datetime-popper-border-color);
}

.pickerinput[class] {
    width: 134px;
    height: 32px;
}

.pickerinput + .pickerinput {
    margin-left: 8px;
}

.popperhead {
    padding: 12px;
    border-bottom: 1px solid var(--datetime-popper-border-color);
}

.popper {
    background: white;
    border: 1px solid var(--datetime-popper-border-color);
    border-radius: var(--datetime-popper-border-radius);
}
.footbtn {
    width: 80px;
    height: 32px;
    padding: 0;
    line-height: 30px;
}
.ctimewrap {
    padding: 3px 0 0 7px;
}
.btnwrap[direction="horizontal"] > *:not(:last-child){
    margin-right: 10px;
}

</style>
