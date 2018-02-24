import isDate from 'date-fns/is_date';
import format from 'date-fns/format';
import parse from 'date-fns/parse'; // null -> 1970 undefined -> Invalid Date
import isEqual from 'date-fns/is_equal';
import isAfter from 'date-fns/is_after';

import CalendarDay from '../u-calendar-day.vue';
import CalendarMonth from '../u-calendar-month.vue';
import CalendarYear from '../u-calendar-year.vue';
import { inDateRange } from './date';

export default {
    name: 'u-calendar',
    props: {
        date: { type: [String, Date], default: '2017-08-08', validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        dateRange: { type: Array, default: () => [] },
        minDate: { type: [String, Date], default: null, validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        maxDate: { type: [String, Date], default: null, validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
    },
    data() {
        return {
            currentView: 'day',
            currentDate: null, // 选择时间, 数据流： calendar -> components & day->calendar
            showDate: null, // 显示时间, 数据流： calendar <-> components
            currentDateRange: [],
        };
    },
    watch: {
        currentDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            if (this.cancel) { // before-change被取消，不再emit before-change事件
                this.cancel = false;
                return;
            }
            this.$emit('before-change', {
                preventDefault: () => this.cancel = true,
            });

            if (isDate(oldDate) && this.cancel) {
                this.initDate(oldDate);
                return;
            } else
                this.$emit('update:date', newDate);

            this.$emit('change', {
                sender: this,
                value: newDate,
                oldValue: oldDate,
            });
        },
        date(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate(this.date);
        },
    },
    components: {
        day: CalendarDay,
        month: CalendarMonth,
        year: CalendarYear,
    },
    created() {
        this.initDate(this.date);
        this.initDateRange();
        // components视图从fview更改为tview
        this.$on('change-view', ({ fview, tview }) => {
            this.currentView = tview;
        });
        this.$on('selectDate', (date) => {
            if (this.disabled || this.readonly) // 只读和禁用不修改currentDate
                return;

            this.$emit('select', {
                sender: this,
                value: date,
                oldValue: this.currentDate,
            });
            this.currentDate = date;
        });
    },
    methods: {
        initDate(date) {
            date === null && (date = format(new Date(), 'YYYY-MM-DD'));
            this.showDate = this.currentDate = parse(date);
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
            if (!inDateRange(this.currentDate, this.currentDateRange))
                throw new RangeError('date is out of dateRange');
        },
    },
};
