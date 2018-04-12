import DatePicker from '../u-date-picker.vue';

import { dateValidadtor } from '../u-calendar.vue/date';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
window.parse = parse;
const getDateStr = (date) => format(parse(date), 'YYYY-MM-DD');
const getTimeStr = (date) => format(parse(date), 'HH:mm:ss'); // u-time-picker只支持:分割
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
    mixins: [DatePicker],
    props: {
        value: { type: [String, Date, Number], default: undefined, validator: dateValidadtor },
        placeholder: { type: String, default: '请选择时间' },
        formatter: { type: String, default: 'YYYY-MM-DD HH:mm:ss' },
    },
    data() {
        return {
            currentDate: undefined, // str
            currentTime: undefined, // str
            currentShowDate: undefined, // str
            isDateTimePicker: true,
            minTime: null,
            maxTime: null,
        };
    },
    watch: {
        value(value) {
            this.initDateTime(value);
        },
        currentTime(value) {
            if (!value)
                return;
            if (!this.currentDate)
                return;
            this.currentShowDate = this.formatterFun(parse(this.currentDate + ' ' + value));
        },
        currentDate(value) {
            if (!value)
                return;
            if (!this.currentTime)
                this.currentTime = '00:00:00';
            const temp = parse(value + ' ' + this.currentTime);
            this.currentShowDate = this.formatterFun(temp);
            this.initRange();
        },
        currentShowDate(value, oldValue) {
            this.hasValue = !!value;
            this.initDateTime(value);
            this.$emit('change', { value, oldValue });
            this.$emit('update:value', value);
            this.$emit('input', value);
        },
    },
    created() {
        this.formatterFun = (date) => format(date, this.formatter);
        this.initDateTime(this.value);
        this.initRange();
    },
    methods: {
        initDateTime(value) {
            if (!value) {
                this.currentDate = undefined;
                this.currentTime = undefined;
                this.currentShowDate = undefined;
                return;
            }
            this.currentDate = getDateStr(value);
            this.currentTime = getTimeStr(value);
            this.currentShowDate = this.formatterFun(value);
        },
        initRange() { // 根据当前值设置minTime和maxTime
            // 没选择日期，时间无限制
            if (!this.currentDate) {
                this.minTime = this.maxTime = undefined;
                return;
            }
            let set = false;
            // 时间下限改为minDate的时分秒
            if (this.currentDate === getDateStr(this.minDate)) {
                this.minTime = getTimeStr(this.minDate);
                set = true;
            }
            // 时间上限改为maxDate的时分秒
            if (this.currentDate === getDateStr(this.maxDate)) {
                this.maxTime = getTimeStr(this.maxDate);
                set = true;
            }
            if (!set)
                this.minTime = this.maxTime = undefined;
        },
        /**
         * 覆盖u-date-picker
         * 1. format u-input输入值
         * 2. 根据输入值重置u-calendar和u-time-picker
         * @param {*} value
         */
        setValue(value) {
            if (!value)
                return;
            const dateStr = value;
            // 超出范围， u-input format为上一个值
            if (this.$refs.calendar && !this.$refs.calendar.inCalendarDateRange(parse(dateStr)))
                this.$refs.input.currentValue = this.currentShowDate ? format(parse(this.currentShowDate), this.formatter) : undefined;

            this.currentShowDate = this.formatterFun(parse(value));
            this.$refs.input.currentValue = this.currentShowDate;
        },
        onEmptyClick() {
            this.currentShowDate = undefined;
        },
    },
};
