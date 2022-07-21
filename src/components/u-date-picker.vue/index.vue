<template>
<div :class="$style.root" :width="width" :height="height">
    <u-input :class="$style.input" width="full" height="full" :value="showDate" ref="input" :autofocus="autofocus" :readonly="readonly" :disabled="disabled"
        :clearable="clearable" :placeholder="placeholder"
        @click.stop="toggle(true)"
        @update:value="onInput($event)" @focus="onFocus" @blur="onBlur"
        @blur:value="onBlurInputValue($event)"
        @clear="clearValue"
        :prefix="preIcon?preIcon:undefined"
        :suffix="suffixIcon?suffixIcon:undefined"
        :color="formItemVM && formItemVM.color">
        <!-- <template #prefix><i-ico v-if="preIcon" :name="preIcon" :class="[$style.preIcon]" notext slot="prefix"></i-ico></template>
        <template #suffix><i-ico v-if="suffixIcon" :name="suffixIcon" :class="[$style.suffixIcon]" notext></i-ico></template> -->
    </u-input>
    <m-popper :class="$style.popper" ref="popper" :append-to="appendTo" :disabled="disabled || readonly" :placement="placement" @toggle="onToggle($event)" @close="onPopperClose">
        <div @click.stop>
            <u-calendar :picker="picker" ref="calendar" :min-date="minDate" :year-diff="yearDiff" :year-add="yearAdd" :max-date="maxDate" :date="calendarDate" :value="date" @select="select($event.date)"></u-calendar>
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
        const date = this.date || this.value;
        const showDate = this.format(date, this.getFormatString());
        return {
            showDate,
            calendarDate: showDate, // calendar里的值
        };
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
            this.calendarDate = newDate; // showDate改变时设置calendar里的值
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
        // this.autofocus && this.$refs.input.focus();
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
            const value = $event;
            if(value === '') { // 可以输空值
                this.showDate = undefined;
                return;
            }
            if(this.checkValid(value)) {
                let date = new Date(this.transformDate(value));
                const isOutOfRange = this.isOutOfRange(date); // 超出范围还原成上一次值
                date = isOutOfRange ? this.showDate : date;
                const showDate = this.format(date, this.getFormatString());
                this.showDate = showDate;
                this.calendarDate = showDate;
                this.$refs.input.updateCurrentValue(this.showDate);
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
            if($event && $event.opened){
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
        checkValid(value) {
            const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
            return reg.test(value);
        },
        onBlurInputValue(value) {
            // 当输入框输入的值不合法，需还原成上一次合法的值
            if(value && !this.checkValid(value)) {
                this.showDate = this.format(this.calendarDate, this.getFormatString())
                this.$refs.input.updateCurrentValue(this.showDate);
            }
        },
        onPopperClose(e) {
            this.$emit('blur', e, this);
            setTimeout(()=>{ // 为了不触发input的blur，否则会有两次blur
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
    width: var(--datepicker-input-width);
}

.input {
    padding: 0 var(--datepicker-input-padding-x);
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
.root[width="mini"] .input {
    padding-left: var(--datepicker-input-padding-x-mini);
    padding-right: var(--datepicker-input-padding-x-mini);
}

.root[height="mini"] .input {
    height: var(--datepicker-input-height-mini);
    line-height: calc(var(--datepicker-input-height-mini) - var(--datepicker-input-border-width) * 2);
}

.root[width="small"] {
    width: var(--datepicker-input-width-small);
}

.root[width="small"] .input{
    padding-left: var(--datepicker-input-padding-x-small);
    padding-right: var(--datepicker-input-padding-x-small);
}

.root[height="small"] .input {
    height: var(--datepicker-input-height-small);
    line-height: calc(var(--datepicker-input-height-small) - var(--datepicker-input-border-width) * 2);
}

.root[width="normal"] {
    width: var(--datepicker-input-width);
}

.root[width="normal"] .input {
    padding-left: var(--datepicker-input-padding-x);
    padding-right: var(--datepicker-input-padding-x);
}

.root[height="normal"] .input {
    height: var(--datepicker-input-height);
    line-height: calc(var(--datepicker-input-height) - var(--datepicker-input-border-width) * 2);
}

.root[width="medium"] {
    width: var(--datepicker-input-width-medium);
}

.root[width="medium"] .input {
    padding-left: var(--datepicker-input-padding-x-medium);
    padding-right: var(--datepicker-input-padding-x-medium);
}

.root[height="medium"] .input {
    height: var(--datepicker-input-height-medium);
    line-height: calc(var(--datepicker-input-height-medium) - var(--datepicker-input-border-width) * 2);
}

.root[width="large"] {
    width: var(--datepicker-input-width-large);
}

.root[width="large"] .input {
    padding-left: var(--datepicker-input-padding-x-large);
    padding-right: var(--datepicker-input-padding-x-large);
}

.root[height="large"] .input {
    height: var(--datepicker-input-height-large);
    line-height: calc(var(--datepicker-input-height-large) - var(--datepicker-input-border-width) * 2);
}

.root[width="huge"] {
    width: var(--datepicker-input-width-huge);
}

.root[width="huge"] .input {
    padding-left: var(--datepicker-input-padding-x-huge);
    padding-right: var(--datepicker-input-padding-x-huge);
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

.preIcon {
    left: 12px;
    color: var(--datepicker-input-pre-icon-color);
}

.suffixIcon {
    right: 12px;
    color: var(--datepicker-input-after-icon-color);
}

.popper {
    z-index: var(--z-index-tooltip);
    box-shadow: var(--datepicker-popper-box-shadow);
    border-radius: var(--datepicker-popper-border-radius);
}
</style>
