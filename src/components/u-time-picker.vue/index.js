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
export const UTimePicker = {
    name: 'u-time-picker',
    props: {
        minUnit: {
            type: String,
            default: 'second',
        },
        time: {
            type: String,
            default: '00:00:00',
        },
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        readonly: [String, Boolean],
        width: String,
        minTime: {
            type: String,
            default: '00:00:00',
        },
        maxTime: {
            type: String,
            default: '23:59:59',
        },
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
                throw new TypeError('Invalid Time');

            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.showTime = isOutOfRange;
            this.showTime = newValue;
        },
        showTime(newValue) {
            if (!newValue)
                throw new TypeError('Invalid Time');

            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.showTime = isOutOfRange;

            const currentHour = this.showTime.split(':')[0] / 1;
            const currentMinute = this.showTime.split(':')[1] / 1;
            // const currentSecond = this.showTime.split(':')[2] / 1;
            if (this.showTime === this.minTime) {
                this.hourmin = this.sphourmin;
                this.minutemin = this.spminutemin;
                this.secondmin = this.spsecondmin;
            } else if (this.showTime === this.maxTime) {
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
            this.$emit('change', {
                sender: this,
                time: newValue,
            });
        },
        minTime(newValue, oldValue) {
            if (newValue) {
                this.hourmin = newValue.split(':')[0] / 1;
                this.minutemin = newValue.split(':')[1] / 1;
                this.secondmin = newValue.split(':')[2] / 1;
            } else {
                this.hourmin = HOUR_MIN;
                this.minutemin = MINUTE_MIN;
                this.secondmin = SECOND_MIN;
            }
        },
        maxTime(newValue, oldValue) {
            if (newValue) {
                this.hourmax = newValue.split(':')[0] / 1;
                this.minutemax = newValue.split(':')[1] / 1;
                this.secondmax = newValue.split(':')[2] / 1;
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
         */
        isOutOfRange(time) {
            const minTime = this.minTime;
            const maxTime = this.maxTime;

            // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
            return (minTime && time < minTime && minTime) || (maxTime && time > maxTime && maxTime);
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
            return this.minUnit === 'second' ? `${this.getNumberString(hour)}:${this.getNumberString(minute)}:${this.getNumberString(second)}` : `${this.getNumberString(hour)}:${this.getNumberString(minute)}`;
        },
        getNumberString(value) {
            value = +value;
            value = value < 10 ? '0' + value : value;
            return value;
        },
    },
};

const TimeRangeError = function (minTime, maxTime) {
    this.name = 'TimeRangeError';
    this.message = 'Wrong Time Range where `minTime` is ' + minTime + ' and `maxTime` is ' + maxTime + '!';
};

TimeRangeError.prototype = Object.create(Error.prototype);
UTimePicker.TimeRangeError = TimeRangeError.prototype.constructor = TimeRangeError;

export default UTimePicker;
