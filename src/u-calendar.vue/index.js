import isDate from 'date-fns/is_date';
import format from 'date-fns/format';
import parse from 'date-fns/parse'; // null -> 1970 undefined -> Invalid Date
import isEqual from 'date-fns/is_equal';
import isAfter from 'date-fns/is_after';
window.format = format;
window.parse = parse;
import CalendarDay from '../u-calendar-day.vue';
import CalendarMonth from '../u-calendar-month.vue';
import CalendarYear from '../u-calendar-year.vue';
import { inDateRange, dateValidadtor } from './date';

export default {
    name: 'u-calendar',
    props: {
        value: { type: [String, Date, Number], default: undefined, validator: dateValidadtor },
        showDate: { type: [String, Date, Number], default: undefined, validator: dateValidadtor },
        dateRange: { type: Array, default: () => [] },
        minDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
        maxDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        tag: { type: String, default: '111', validator: (t) => /^[01]{3}$/.test(t) }, // 分别对应年月日，年月表示为：110
        formatter: { type: String, default: 'YYYY-MM-DD' },
        isDateRangePicker: { type: Boolean, default: false },
    },
    data() {
        return {
            currentView: 'day',
            currentDate: null, // 选择时间, 数据流： calendar -> components & day->calendar
            currentShowDate: null, // 显示时间, 数据流： calendar <-> components
            currentDateRange: [],
            tagMap: {
                year: 0,
                month: 1,
                day: 2,
            },
        };
    },
    watch: {
        currentDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.$emit('change', {
                value: newDate,
                oldValue: oldDate,
            });

            const formatedValue = this.formatValue(newDate);
            this.$emit('update:value', formatedValue);
            this.$emit('input', formatedValue);
        },
        value(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate(newDate);
        },
        tag() {
            this.initView();
        },
    },
    components: {
        day: CalendarDay,
        month: CalendarMonth,
        year: CalendarYear,
    },
    created() {
        this.initView();
        this.initDate(this.value);
        this.initDateRange();
        // components视图从fview更改为tview
        this.$on('change-view', ({ fview, tview }) => {
            if (this.tag.charAt(this.tagMap[tview]) === '1')
                this.currentView = tview;
            else { // 年月选择
                this.$emit('select', {
                    value: this.currentShowDate,
                    oldValue: this.currentDate,
                });
                this.currentDate = this.currentShowDate;
            }
        });
        this.$on('selectDate', (date) => {
            if (this.disabled || this.readonly) // 只读和禁用不修改currentDate
                return;
            let cancel = false;
            this.$emit('before-select', {
                preventDefault: () => cancel = true,
            });

            if (cancel)
                return;

            this.$emit('select', {
                value: date,
                oldValue: this.currentDate,
            });
            this.currentDate = date;
        });
    },
    methods: {
        initView() {
            switch (this.tag.lastIndexOf('1')) {
                case 2:
                    this.currentView = 'day';
                    break;
                case 1:
                    this.currentView = 'month';
                    break;
                case 0:
                    this.currentView = 'year';
                    break;
            }
        },
        initDate(date) {
            if (date)
                this.currentDate = parse(date);
            this.currentShowDate = this.showDate ? parse(this.showDate) : (this.currentDate || new Date());
        },
        initDateRange() {
            this.currentDateRange = this.dateRange;
            if (this.minDate || this.maxDate)
                this.currentDateRange.push([this.minDate, this.maxDate]);
            // 验证时间区间设置合法性
            const isValid = this.currentDateRange.every((arr) => {
                if (arr.length !== 2 || (!arr[0] && !arr[1]))
                    return false;
                arr[0] && (arr[0] = parse(arr[0]));
                arr[1] && (arr[1] = parse(arr[1]));
                if (arr[0] && arr[1] && !(isDate(arr[0]) && isDate(arr[1])) || isAfter(arr[0], arr[1]))
                    return false;

                return true;
            });
            if (!isValid)
                throw new Error('Invalid DateRange');
            if (!this.inCalendarDateRange())
                throw new RangeError('date is out of dateRange');
        },
        inCalendarDateRange(date = this.currentDate, range = this.currentDateRange) { // 是否在当前calendar范围内
            return inDateRange(date, range);
        },
        /**
         * 返回与this.value同样类型的数据
         */
        formatValue(date) {
            const type = typeof this.value;
            switch (type) {
                case 'number':
                    return +date;
                case 'string':
                case 'undefined':
                    return format(date, this.formatter);
                default:
                    return date;
            }
        },
    },
};
