<template>
<div :class="$style.root" ref="element">
    <div :class="$style.head">
        <input :class="$style.input" :placeholder="placeholder" :value="dateTime" ref="input" :autofocus="autofocus" :readonly="readonly" :disabled="disabled"
            @click.stop="toggle(true)" @change="onInput($event)" @focus="onFocus" @blur="onBlur">
         <span v-if="dateTime && clearable" :class="[$style.wrap, $style.close]" @click.stop="clearValue">
            <i :class="[$style.closeIcon]"></i>
        </span>
    </div>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo" :disabled="disabled || readonly" :placement="placement" @toggle="onToggle($event)">
        <div :class="$style.body" @click.stop>
            <u-calendar :readonly="readonly" :year-diff="yearDiff" :year-add="yearAdd" :min-date="minCalendarDate" :max-date="maxCalendarDate" :date="showDate" @select="outRangeDateTime($event.date, showTime)">
                <u-time-picker :class="$style.timePicker" :readonly="readonly" :time="showTime" width="50" :min-time="minTime" :max-time="maxTime" @change="outRangeDateTime(showDate, $event.time)"></u-time-picker>
                    <slot name="footer">
                        <div :class="$style.footer">
                            <u-linear-layout justify="end">
                                <u-button size="small" @click="setDateNow()" :readonly="readonly" :disabled="disabled || disabledNow">{{ $t('now') }}</u-button>
                                <u-button size="small" @click="toggle(false)" color="primary" :readonly="readonly" :disabled="disabled">{{ $t('submit') }}</u-button>
                            </u-linear-layout>
                        </div>
                    </slot>
            </u-calendar>
        </div>
    </m-popper>
    <slot></slot>
</div>
</template>

<script>
import { clickOutside } from '../../directives';
import { format, transformDate } from '../../utils/date';
import MField from '../m-field.vue';
import i18n from './i18n';
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
    name: 'u-date-time-picker',
    i18n,
    // directives: { clickOutside },
    mixins: [MField],
    props: {
        disabled: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$t('selectTimeText');
            },
        },
        readonly: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        date: [String, Number, Date],
        width: { type: [String, Number], default: 170 },
        yearDiff: { type: [String, Number], default: 20 },
        yearAdd: { type: [String, Number], default: 20 },
        converter: { type: String, default: 'json' },
        clearable: { type: Boolean, default: false },
        appendTo: {
            type: String,
            default: 'reference',
            validator: (value) => ['body', 'reference'].includes(value),
        },
    },
    data() {
        return {
            dateTime: this.format(this.date, 'YYYY-MM-DD HH:mm:ss'),
            open: false,
            minTime: undefined,
            maxTime: undefined,
            currentMaxDate: this.getMaxDate(), // 可能会存在最大值小于最小值情况，组件需要内部处理让最大值和最小值一样
        };
    },
    computed: {
        showTime() {
            return this.format(this.dateTime, 'HH:mm:ss');
        },
        showDate() {
            return this.format(this.dateTime, 'YYYY-MM-DD');
        },
        minCalendarDate() {
            return this.format(this.minDate, 'YYYY-MM-DD');
        },
        maxCalendarDate() {
            return this.format(this.currentMaxDate, 'YYYY-MM-DD');
        },
        spMinTime() {
            return this.format(this.minDate, 'HH:mm:ss');
        },
        spMaxTime() {
            return this.format(this.currentMaxDate, 'HH:mm:ss');
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
    },
    watch: {
        date(newValue) {
            this.dateTime = this.format(newValue, 'YYYY-MM-DD HH:mm:ss');
        },
        dateTime(newValue) {
            // 字符类型自动转为日期类型
            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date'); // 如果不为空并且超出日期范围，则设置为范围边界的日期
            if (newValue) {
                const isOutOfRange = this.isOutOfRange(newValue);
                if (isOutOfRange)
                    newValue = this.format(isOutOfRange, 'YYYY-MM-DD HH:mm:ss');
            }
            const newDateTime = newValue ? this.toValue(new Date(newValue.replace(/-/g, '/'))) : undefined;
            this.$emit('update:date', newDateTime);
            /**
             * @event change 日期时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期时间
             */ this.$emit('change', {
                sender: this,
                date: newValue ? new Date(newValue.replace(/-/g, '/')).getTime() : undefined,
            }); // 方便u-field组件捕获到其值
            this.$emit('input', newDateTime);
        },
        maxDate(value) {
            this.currentMaxDate = this.getMaxDate(value);
        },
        minDate(value) {
            this.currentMaxDate = this.getMaxDate();
        },
    },
    created() {
        // vue中的watch的immediate的执行时间是比created生命周期函数执行时间还早 所以导致u-field无法捕获
        // this.$emit(
        //     'input',
        //     this.toValue(this.dateTime ? new Date(this.dateTime.replace(/-/g, '/')) : ''),
        // );
        this.$emit(
            'update',
            this.toValue(this.dateTime ? new Date(this.dateTime.replace(/-/g, '/')) : ''),
        );
    },
    mounted() {
        this.autofocus && this.$refs.input.focus();
    },
    methods: {
        clearValue() {
            this.dateTime = undefined;
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
         */ outRangeDateTime(date, time) {
            if (!time)
time = '00:00:00';
            if (date)
date = new Date(date);
            else {
                this.$emit('select', { sender: this, date: '' });
                return;
            }
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
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
                date: new Date(date).getTime(),
            });
        },
        /**
         * @method onDateTimeChange(date, time) 日期或时间改变后更新日期时间
         * @private
         * @return {void}
         */ onDateTimeChange(date, time) {
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
                date: new Date(date).getTime(),
            });
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */ onInput($event) {
            const value = $event.target.value;
            this.updateDate(value);
        },
        updateDate(value) {
            let date = value ? new Date(value) : null;
            if (date !== null && date.toString() !== 'Invalid Date') {
                date = this.isOutOfRange(date) || date;
                this.dateTime = this.format(date, 'YYYY-MM-DD HH:mm:ss');
            } else {
                this.$refs.input.value = '';
                this.dateTime = '';
            }
        },
        setDateNow() {
            this.updateDate(new Date());
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期时间范围
         * @public
         * @param {Date} date 待测的日期时间
         * @return {boolean|Date} date 如果没有超出日期时间范围，则返回false；如果超出日期时间范围，则返回范围边界的日期时间
         */ isOutOfRange(date) {
            date = this.transformDate(date);
            const minDate = this.transformDate(this.minDate);
            const maxDate = this.transformDate(this.currentMaxDate); // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
            return (
                (minDate && date < minDate && minDate)
                || (maxDate && date > maxDate && maxDate)
            );
        },
        toggle(value) {
            this.$refs.popper.toggle(value);
        },
        format,
        transformDate,
        handleClose() {
            this.open = false;
        },
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
        },
        onBlur(e) {
            this.$emit('blur', e, this);
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    max-width: 100%; /* 防止表格等小的地方超出区域 */
    width: 170px;
}
.input {
    box-sizing: border-box;
    margin: 0;
    padding: 0 4px;
    vertical-align: middle;
    border: 1px solid var(--border-color-base);
    color: #555;
    background: var(--field-background);
    border-radius: 3px;
    height: 34px;
    line-height: 34px;
    outline: none;
    width: 100%;
}

.placeholder, .input::placeholder {
    /* Removes placeholder transparency in Firefox. */
    opacity: 1;
    font-size: inherit;
    color: var(--input-placeholder-color);
}

.body {
    position: absolute;
    z-index: 100;
    width: 100%;
    top: 100%;
    margin-top: 2px;
    min-width: 160px;
}
.input[disabled] {
    cursor: var(--cursor-not-allowed);
    background: #eee;
    color: var(--color-light);
}

.input:focus {
    outline: var(--focus-outline);
    border-color: var(--datepicker-input-border-color-focus);
    box-shadow: var(--datepicker-input-box-shadow-focus);
}

.head:hover .input{
    border-color: var(--datepicker-input-border-color-focus);
}

.timePicker {
    /* text-align: center; */
    width: 100%;
    box-sizing: border-box;
    padding-left: 32px;
}
.footer {
    padding: 15px 0 5px;
}

.wrap {
    position: absolute;
    text-align: center;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
}

.close {
    cursor: var(--cursor-pointer);
}

.closeIcon:hover {
    color: var(--color-light);
    background-color: #ebedef;
}

.closeIcon::before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    line-height: 1;
    height: 1em;
    margin: auto;
    icon-font: url('../i-icon.vue/assets/close-solid.svg');
    cursor: var(--cursor-pointer);
    color: var(--input-clearable-color);
}

</style>
