<template>
<span :class="$style.root">
    <u-number-input :class="$style.item" :min="hourmin" :max="hourmax" formatter="00" fix-on="input" :value="hour" :readonly="readonly" :disabled="disabled" :autofocus="autofocus" @input="changeHour"></u-number-input>
    <span :class="$style.dot">:</span>
    <u-number-input :class="$style.item" :min="minutemin" :max="minutemax" formatter="00" fix-on="input" :value="minute" :readonly="readonly" :disabled="disabled" @input="changeMinute"></u-number-input>
    <span v-if="minUnit==='second'" :class="$style.dot">:</span>
    <u-number-input v-if="minUnit==='second'" :class="$style.item" :min="secondmin" :max="secondmax" formatter="00" fix-on="input" :value="second" :readonly="readonly" :disabled="disabled" @input="changeSecond"></u-number-input>
</span>
</template>

<script>
const HOUR_MIN = 0;
const MINUTE_MIN = 0;
const SECOND_MIN = 0;
const HOUR_MAX = 23;
const MINUTE_MAX = 59;
const SECOND_MAX = 59;

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

const TimeRangeError = function (minTime, maxTime) {
    this.name = 'TimeRangeError';
    this.message
        = 'Wrong Time Range where `minTime` is '
            + minTime
            + ' and `maxTime` is '
            + maxTime
            + '!';
};

TimeRangeError.prototype = Object.create(Error.prototype);
TimeRangeError.prototype.constructor = TimeRangeError;

export default {
    name: 'u-time-picker',
    props: {
        minUnit: { type: String, default: 'second' },
        time: { type: String, default: '00:00:00' },
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        readonly: [String, Boolean],
        width: String,
        minTime: { type: String, default: '00:00:00' },
        maxTime: { type: String, default: '23:59:59' },
    },
    data() {
        return {
            showTime: this.isOutOfRange(this.time) ? this.isOutOfRange(this.time) : this.time,
            hourmin: HOUR_MIN,
            hourmax: HOUR_MAX,
            minutemin: MINUTE_MIN,
            minutemax: MINUTE_MAX,
            secondmin: SECOND_MIN,
            secondmax: SECOND_MAX,
        };
    },
    computed: {
        hour() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.showTime.split(':')[0] / 1;
        },
        minute() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.showTime.split(':')[1] / 1;
        },
        second() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.minUnit === 'second' ? this.showTime.split(':')[2] / 1 : 0;
        },
        sphourmin() {
            return this.minTime.split(':')[0] / 1;
        },
        sphourmax() {
            return this.maxTime.split(':')[0] / 1;
        },
        spminutemin() {
            return this.minTime.split(':')[1] / 1;
        },
        spminutemax() {
            return this.maxTime.split(':')[1] / 1;
        },
        spsecondmin() {
            return this.minTime.split(':')[2] / 1;
        },
        spsecondmax() {
            return this.maxTime.split(':')[2] / 1;
        },
    },
    watch: {
        time(newValue) {
            if (!newValue)
                throw new TypeError('Invalid Time'); // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return (this.showTime = isOutOfRange);
            this.showTime = newValue;
        },
        showTime(newValue) {
            if (!newValue)
                throw new TypeError('Invalid Time');
            const showTime = newValue; // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return (this.showTime = isOutOfRange);
            const showTimeArr = showTime.split(':');
            const currentHour = showTimeArr[0] / 1;
            const currentMinute = showTimeArr[1] / 1; // const currentSecond = showTimeArr[2] / 1;
            if (showTime === this.minTime) {
                this.hourmin = this.sphourmin;
                this.minutemin = this.spminutemin;
                this.secondmin = this.spsecondmin;
            } else if (showTime === this.maxTime) {
                this.hourmax = this.sphourmax;
                this.minutemax = this.spminutemax;
                this.secondmax = this.spsecondmax;
            } else if (currentHour === this.sphourmin) {
                this.hourmin = currentHour;
                this.minutemin = this.spminutemin;
                this.minutemax = MINUTE_MAX;
                if (currentMinute === this.spminutemin) {
                    this.secondmin = this.spsecondmin;
                    this.secondmax = SECOND_MAX;
                } else if (currentMinute === this.spminutemax) {
                    this.secondmin = SECOND_MIN;
                    this.secondmax = this.spsecondmax;
                } else {
                    this.secondmin = SECOND_MIN;
                    this.secondmax = SECOND_MAX;
                }
            } else if (currentHour === this.sphourmax) {
                this.hourmax = currentHour;
                this.minutemin = MINUTE_MIN;
                this.minutemax = this.spminutemax;
                if (currentMinute === this.spminutemin) {
                    this.secondmin = this.spsecondmin;
                    this.secondmax = SECOND_MAX;
                } else if (currentMinute === this.spminutemax) {
                    this.secondmin = SECOND_MIN;
                    this.secondmax = this.spsecondmax;
                } else {
                    this.secondmin = SECOND_MIN;
                    this.secondmax = SECOND_MAX;
                }
            } else {
                this.hourmin = HOUR_MIN;
                this.minutemin = MINUTE_MIN;
                this.secondmin = SECOND_MIN;
                this.hourmax = HOUR_MAX;
                this.minutemax = MINUTE_MAX;
                this.secondmax = SECOND_MAX;
            }
            /**
             * @event change 时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} time 改变后的时间
             */
            this.$emit('input', newValue, this);
            this.$emit('update:time', newValue, this);
            this.$emit('change', { time: newValue }, this);
        },
        minTime(newValue, oldValue) {
            if (newValue) {
                const newValueArr = newValue.split(':');
                this.hourmin = newValueArr[0] / 1;
                this.minutemin = newValueArr[1] / 1;
                this.secondmin = newValueArr[2] / 1;
            } else {
                this.hourmin = HOUR_MIN;
                this.minutemin = MINUTE_MIN;
                this.secondmin = SECOND_MIN;
            }
        },
        maxTime(newValue, oldValue) {
            if (newValue) {
                const newValueArr = newValue.split(':');
                this.hourmax = newValueArr[0] / 1;
                this.minutemax = newValueArr[1] / 1;
                this.secondmax = newValueArr[2] / 1;
            } else {
                this.hourmax = HOUR_MAX;
                this.minutemax = MINUTE_MAX;
                this.secondmax = SECOND_MAX;
            }
        },
    },
    methods: {
        /**
         * @method isOutOfRange(time) 是否超出规定的时间范围
         * @public
         * @param {Time} time 待测的时间
         * @return {boolean|Time} time 如果没有超出时间范围，则返回false；如果超出时间范围，则返回范围边界的时间
         */ isOutOfRange(time) {
            const minTime = this.minTime;
            const maxTime = this.maxTime; // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
            return (
                (minTime && time < minTime && minTime)
                || (maxTime && time > maxTime && maxTime)
            );
        },
        changeHour(hour, senderVM) {
            hour = senderVM.formattedValue;
            this.showTime = this.getTime(hour, this.minute, this.second);
        },
        changeMinute(minute, senderVM) {
            minute = senderVM.formattedValue;
            this.showTime = this.getTime(this.hour, minute, this.second);
        },
        changeSecond(second, senderVM) {
            second = senderVM.formattedValue;
            this.showTime = this.getTime(this.hour, this.minute, second);
        },
        getTime(hour, minute, second) {
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.padStart(2, '0');
            };
            const formatTime = [fix(hour), fix(minute)];
            if (this.minUnit === 'second') {
                formatTime.push(fix(second));
            }
            return formatTime.join(':');
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
}
.item {
    width: 50px;
    height: 34px;
    padding: 0 4px;
}
.root .item input {
    box-sizing: border-box;
}
.root .dot {
    padding: 0 5px;
    user-select: none;
}
</style>
