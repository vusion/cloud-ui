<template>
<div :class="$style.header">
    <input :class="$style.input" :placeholder="placeholder" @click.stop="$refs.popper.toggle(true)" :value="showDate" ref="input" :autofocus="autofocus" :readonly="readonly" :disabled="disabled" :style="{width: width+'px'}" @change="onInput($event)">
    <span v-if="showDate && reset" :class="[$style.wrap, $style.close]" @click.stop="resetValue">
        <i :class="[$style.icon, $style.closeIcon]"></i>
    </span>
    <m-popper :class="$style.popper" ref="popper" append-to="reference" :disabled="disabled || readonly" :placement="placement" @toggle="onToggle($event)" @close="closeCalendar">
        <div :class="$style.body" @click.stop>
            <u-calendar ref="calendar" :min-date="minDate" :year-diff="yearDiff" :year-add="yearAdd" :max-date="maxDate" :date="showDate" @select="select($event.date)"></u-calendar>
        </div>
    </m-popper>
</div>
</template>

<script>
import Calendar from '../u-calendar.vue';
import { clickOutside } from '../../directives';
import { format, transformDate } from '../../utils/date';
import MField from '../m-field.vue';
import i18n from './i18n';
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
    name: 'u-date-picker',
    i18n,
    directives: { clickOutside },
    mixins: [MField],
    props: {
        date: [String, Number, Date],
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$t('selectDateText');
            },
        },
        width: { type: [String, Number], default: 160 },
        alignment: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
        time: { type: [String, Number], default: 'start' },
        yearDiff: { type: [String, Number], default: 3 },
        yearAdd: { type: [String, Number], default: 1 },
        reset: { type: Boolean, default: false },
        converter: { type: String, default: 'json' },
    },
    data() {
        return { showDate: this.format(this.date, 'YYYY-MM-DD'), lastDate: '' };
    },
    computed: {
        placement() {
            if (this.alignment === 'left')
                return 'bottom-start';
            else if (this.alignment === 'right')
                return 'bottom-end';
        },
    },
    watch: {
        date(newValue) {
            this.showDate = this.format(newValue, 'YYYY-MM-DD');
        },
        showDate(newValue) {
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 改变后的日期 返回格式为日期对象
             */ const showDate = this.returnTime(newValue);
            const newDate = showDate ? new Date(showDate.replace(/-/g, '/')) : '';
            this.$emit('update:date', this.toValue(newDate));
            this.$emit('change', { sender: this, date: newDate });
            this.$emit('input', this.toValue(newDate));
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
            const minDate = new Date(this.minDate);
            const maxDate = new Date(this.maxDate);
            if ((minDate / MS_OF_DAY) >> 0 > (maxDate / MS_OF_DAY) >> 0)
                throw new Calendar.DateRangeError(minDate, maxDate);
        }
        this.$emit(
            'input',
            this.toValue(this.showDate ? new Date(this.showDate.replace(/-/g, '/')) : ''),
        ); // document.addEventListener('click', this.fadeOut, false);
    },
    methods: {
        toValue(date) {
            if (!date)
                return date;
            if (this.converter === 'json')
                return date.toLocaleDateString().replace(/\//g, '-');
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
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            this.showDate = this.format(date, 'YYYY-MM-DD');
            const showDate = this.returnTime(this.showDate);
            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: new Date(showDate.replace(/-/g, '/')),
            });
            this.$refs.popper.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            let date = value ? new Date(value.replace(/-/g, '/')) : null;
            this.lastDate = this.showDate;
            let showDate = '';
            if (date !== null && date.toString() !== 'Invalid Date') {
                date = this.isOutOfRange(date) || date; // 此处有坑 需要特殊处理 由于改成最小值 再次输入不合法的值会变成最小值 认为没有发生变化
                showDate = this.format(date, 'YYYY-MM-DD');
            } else
                showDate = this.$refs.input.value = this.format(
                    this.lastDate,
                    'YYYY-MM-DD',
                );
            this.showDate = showDate;
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate); // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
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
        },
        format,
        transformDate,
        closeCalendar() {
            if (this.showDate)
                this.$refs.calendar.updateShowDate(this.showDate);
        },
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
                    throw new Error(this.$t('integerTip'));
                time = this.time < 24 ? this.time + ':00:00' : '23:59:59';
            } else {
                if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(this.time))
                    throw new Error(this.$t('formatErrorTip'));
                time = this.time;
            }
            return date + ' ' + time;
        },
        resetValue() {
            this.showDate = undefined;
        },
    },
};
</script>

<style module>
.header {
    display: inline-block;
    position: relative;
}
.input {
    box-sizing: border-box;
    margin: 0;
    padding: 0 12px;
    vertical-align: middle;
    border: 1px solid var(--border-color-base);
    color: #555;
    background: var(--field-background);
    border-radius: 3px;
    height: 34px;
    line-height: 34px;
    outline: none;
}
.input[disabled] {
    cursor: var(--cursor-not-allowed);
    background: #eee;
    color: var(--color-light);
}

.placeholder, .input::placeholder {
    /* Removes placeholder transparency in Firefox. */
    opacity: 1;
    font-size: inherit;
    color: var(--input-placeholder-color);
}

.body {
    position: relative;
    z-index: 100;
    width: 248px;
    top: 100%;
    margin-top: 2px;
}

.wrap {
    position: absolute;
    text-align: center;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.close {
    cursor: var(--cursor-pointer);
}

.icon {
    width: 18px;
    height: 18px;
    line-height: 18px;
    background: var(--background-color-light);
    border-radius: 100%;
    display: inline-block;
}

.closeIcon:hover {
    color: var(--color-light);
    background-color: #ebedef;
}

.closeIcon::before {
    icon-font: url("../i-icon.vue/icons/close-small.svg");
    font-size: 16px;
    color: #b4b4b4;
    margin-right: 0;
    vertical-align: middle;
}

.popper {
    z-index: var(--z-index-tooltip);
}
</style>
