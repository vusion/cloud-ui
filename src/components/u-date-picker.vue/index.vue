<template>
<div :class="[$style.header, preIcon ? $style.preIconHeader: '', suffixIcon ? $style.suffixIconHeader: '']" :style="{ 
    width: `${width}px`
}">
    <i-ico v-if="preIcon" :name="preIcon" :class="[$style.btnicon, $style.preIcon]" notext></i-ico>
    <input :class="$style.input" :placeholder="placeholder" @click.stop="toggle(true)" :value="showDate" ref="input" :autofocus="autofocus" :readonly="readonly" :disabled="disabled" @change="onInput($event)" @focus="onFocus" @blur="onBlur" :color="formItemVM && formItemVM.color">
    <span v-if="showDate && clearable" :class="[$style.wrap, $style.close]" @click.stop="clearValue">
        <i :class="[$style.closeIcon]"></i>
    </span>
    <i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.btnicon, $style.suffixIcon]" notext></i-ico>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo" :disabled="disabled || readonly" :placement="placement" @toggle="onToggle($event)" @close="closeCalendar">
        <div :class="$style.body" @click.stop>
            <u-calendar :picker="picker" ref="calendar" :min-date="minDate" :year-diff="yearDiff" :year-add="yearAdd" :max-date="maxDate" :date="showDate" :value="date" @select="select($event.date)"></u-calendar>
        </div>
    </m-popper>
</div>
</template>

<script>
import Calendar from '../u-calendar.vue';
import { clickOutside } from '../../directives';
import { format, transformDate, ChangeDate } from '../../utils/date';
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
        preIcon: { 
            type: String, 
            default: 'calendar'
        },
        suffixIcon: { 
            type: String, 
            default: ''
        },
        date: [String, Number, Date],
        value: [String, Number, Date],
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        picker: { type: String, default: 'date' },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() {
                return this.$t('selectDateText');
            },
        },
        width: { type: [String, Number], default: '' },
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
            default: 'reference',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        opened: { type: Boolean, default: false },
    },
    data() {
        const date = this.date || this.value;
        return { showDate: this.format(date, this.getFormatString()), lastDate: '' };
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
            this.showDate = this.format(newValue, this.getFormatString());
        },
        value(newValue) {
            this.showDate = this.format(newValue, this.getFormatString());
        },
        showDate(newValue) {
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 改变后的日期 返回格式为日期对象
             */ const showDate = this.returnTime(newValue);
            const newDate = showDate ? new Date(this.transformDate(showDate)) : undefined;
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
        // this.$emit(
        //     'input',
        //     this.toValue(this.showDate ? new Date(this.transformDate(this.showDate)) : ''),
        // ); // document.addEventListener('click', this.fadeOut, false);

        this.$emit(
            'update',
            this.toValue(this.showDate ? new Date(this.transformDate(this.showDate)) : ''),
        );
    },
    mounted() {
        this.autofocus && this.$refs.input.focus();
        // 在编辑器里不要打开
        if(!this.$env.VUE_APP_DESIGNER)
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
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            this.showDate = this.format(date, this.getFormatString());
            const showDate = this.returnTime(this.showDate);
            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: new Date(this.transformDate(showDate)),
            });
            this.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            let date = value ? new Date(this.transformDate(value)) : null;
            this.lastDate = this.showDate;
            let showDate = '';
            if (date !== null && date.toString() !== 'Invalid Date') {
                date = this.isOutOfRange(date) || date; // 此处有坑 需要特殊处理 由于改成最小值 再次输入不合法的值会变成最小值 认为没有发生变化
                showDate = this.format(date, this.getFormatString());
            } else
                showDate = this.$refs.input.value = this.format(
                    this.lastDate,
                    this.getFormatString(),
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
            if($event && $event.opened){
                this.preventBlur = true;
            }
        },
        format,
        transformDate,
        closeCalendar(e) {
            if (this.showDate)
                this.$refs.calendar.updateShowDate(this.showDate);
            this.$emit('blur', e, this);
            setTimeout(()=>{ // 为了不触发input的blur，否则会有两次blur
                this.preventBlur = false;
            }, 0);
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
        clearValue() {
            this.showDate = undefined;
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
    },
};
</script>

<style module>
.header {
    width: var(--datepicker-input-width);
    display: inline-block;
    position: relative;
}

.btnicon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.preIcon {
    left: 12px;
    color: var(--datepicker-input-pre-icon-color);
}

.suffixIcon {
    right: 12px;
    color: var(--datepicker-input-after-icon-color);
}

.input {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 var(--datepicker-input-padding-x);
    vertical-align: middle;
    border: var(--datepicker-input-border-width) solid var(--datepicker-input-border-color);
    color: var(--datepicker-input-color);
    background: var(--datepicker-input-background);
    border-radius: var(--datepicker-input-border-radius);
    height: var(--datepicker-input-height);
    line-height: calc(var(--datepicker-input-height) - var(--datepicker-input-border-width) * 2);
    outline: none;
}

.preIconHeader .input {
    padding-left: calc(var(--datepicker-input-padding-x) + 26px);
}

.suffixIconHeader .input {
    padding-right: calc(var(--datepicker-input-padding-x) + 26px);
}

.input[disabled] {
    width: 100%;
    cursor: var(--cursor-not-allowed);
    background: var(--datepicker-input-background-disabled);
    color: var(--color-light);
}

.input[color="error"] {
    border-color: var(--datepicker-input-border-color-error);
}

.input:focus {
    outline: var(--focus-outline);
    border-color: var(--datepicker-input-border-color-focus);
    box-shadow: var(--datepicker-input-box-shadow-focus);
}

.header:hover .input{
    border-color: var(--datepicker-input-border-color-focus);
}

.input[focus] {
    border-color: var(--datepicker-input-border-color-focus);
    box-shadow: var(--datepicker-input-box-shadow-focus);
}

.input:-ms-input-placeholder, .input::-ms-input-placeholder {
    /* Removes placeholder transparency in Firefox, IE, Edge. */
    opacity: 1;
    font-size: inherit;
    color: var(--datepicker-input-placeholder-color);
}

.placeholder, .input::placeholder {
    opacity: 1;
    font-size: inherit;
    color: var(--datepicker-input-placeholder-color);
}

.body {
    position: relative;
    z-index: 100;
    width: 248px;
    top: 100%;
}

.wrap {
    position: absolute;
    text-align: center;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.suffixIconHeader .wrap  {
    right: calc(10px + 26px);
}

.close {
    cursor: var(--cursor-pointer);
}

.closeIcon:hover::before {
    color: var(--datepicker-input-icon-color-hover);
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
    color: var(--datepicker-input-clear-icon-color);
}

.popper {
    z-index: var(--z-index-tooltip);
    box-shadow: var(--datepicker-popper-box-shadow);
    border-radius: var(--datepicker-popper-border-radius);
}
</style>
