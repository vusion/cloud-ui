<template>
    <div :class="$style.root" @click.stop :border="border">
        <div :class="$style.popperhead">
            <u-input :placeholder="popperplaceholder" :class="$style.pickerinput" :value="showDate" clearable
                ref="dateInput"
                @clear="showDate=undefined"
                @blur:value="onDateChange($event)">
            </u-input>
            <u-time-picker :class="$style.pickerinput" :readonly="readonly" :time="showTime"
                width="50" :min-time="minTime" :max-time="maxTime"
                :simple-foot="true" pre-icon=""
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
                    <u-link @click="setDateNow()" v-if="showRightNowButton" :readonly="readonly" :disabled="disabled || disabledNow">{{ rightNowTitle || $t('now') }}</u-link>
                </u-linear-layout>
                <u-linear-layout :class="$style.btnwrap" v-if="showFooterButton">
                    <u-button @click="onCancel">{{ cancelTitle || $t('cancel') }}</u-button>
                    <u-button @click="onConfirm" color="primary" :readonly="readonly" :disabled="disabled">{{ okTitle || $t('submit') }}</u-button>
                </u-linear-layout>
            </u-linear-layout>
        </div>
    </div>
</template>

<script>
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
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */

export default {
    name: 'u-date-time-panel',
    i18n,
    mixins: [MField],
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        date: [String, Number, Date],
        yearDiff: { type: [String, Number], default: 20 },
        yearAdd: { type: [String, Number], default: 20 },
        converter: { type: String, default: 'json' },
        showRightNowButton: { type: Boolean, default: true },
        showFooterButton: { type: Boolean, default: true },
        rightNowTitle: {type: String, default: ""},
        cancelTitle: {type: String, default: ""},
        okTitle: {type: String, default: ""},
        border: { type: Boolean, default: true },
    },
    data() {
        return {
            dateTime: this.format(this.date, 'YYYY-MM-DD HH:mm:ss'), // popper选择以后的值
            minTime: undefined,
            maxTime: undefined,
            currentMaxDate: this.getMaxDate(), // 可能会存在最大值小于最小值情况，组件需要内部处理让最大值和最小值一样
            popperplaceholder: this.$t('selectPopperDateText'),
            finalDateTime: this.format(this.date, 'YYYY-MM-DD HH:mm:ss'), // 最外面的输入框
            showDate: undefined, // popper里的日期输入框
            showTime: undefined, // popper里的时间输入框
        };
    },
    computed: {
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
            this.finalDateTime = this.dateTime;
            this.$emit(
                'update',
                this.dateTime,
            );
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
            this.showDate = this.format(newDateTime, 'YYYY-MM-DD');
            this.showTime = this.format(newDateTime, 'HH:mm:ss');
        },
        maxDate(value) {
            this.currentMaxDate = this.getMaxDate(value);
        },
        minDate(value) {
            this.currentMaxDate = this.getMaxDate();
        },
    },
    mounted() {
        this.dateTime = this.format(new Date(this.finalDateTime.replace(/-/g, '/')), 'YYYY-MM-DD HH:mm:ss');
        this.showDate = this.format(this.dateTime, 'YYYY-MM-DD');
        this.showTime = this.format(this.dateTime, 'HH:mm:ss');
    },
    methods: {
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
            this.preventBlur = true;
            // 隐藏底部确认取消按钮时，更新日期相当于直接确认操作
            if (!this.showFooterButton) {
                this.finalDateTime = this.dateTime;
                this.emitValue();
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
            const minDate = this.transformDate(this.minDate);
            const maxDate = this.transformDate(this.currentMaxDate); // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
            return (
                (minDate && date < minDate && minDate)
                || (maxDate && date > maxDate && maxDate)
            );
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
        onCancel() {
            this.$emit('cancel');
        },
        onConfirm() {
            this.finalDateTime = this.dateTime;
            this.emitValue();
        },
        emitValue() {
            const newDateTime = this.finalDateTime ? this.toValue(new Date(this.finalDateTime.replace(/-/g, '/'))) : undefined;
            this.$emit('update:date', newDateTime);
            /**
             * @event change 日期时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期时间
             */
            this.$emit('change', {
                sender: this,
                date: this.finalDateTime ? new Date(this.finalDateTime.replace(/-/g, '/')).getTime() : undefined,
            }); // 方便u-field组件捕获到其值
            this.$emit('input', newDateTime);
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
            this.$refs.dateInput.updateCurrentValue(this.showDate);
            this.outRangeDateTime(this.showDate, this.showTime);
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
    width: calc(var(--calendar-width) + 4px);
    user-select: none;
    background: var(--calendar-background);
    box-sizing: border-box;
}

.root[border] {
    border: 1px solid var(--calendar-border-color);
    border-radius: var(--calendar-border-radius);
}

.footer {
    padding: 10px 8px;
    border-top: 1px solid var(--datetime-popper-border-color);
}

.pickerinput {
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
