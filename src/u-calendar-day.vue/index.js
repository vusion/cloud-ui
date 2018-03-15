import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import getDay from 'date-fns/get_day';
import getDate from 'date-fns/get_date';
import startOfMonth from 'date-fns/start_of_month';
import lastDayOfMonth from 'date-fns/last_day_of_month';
import addDays from 'date-fns/add_days';
import isAfter from 'date-fns/is_after';
import isEqual from 'date-fns/is_equal';
import addMonths from 'date-fns/add_months';
import isToday from 'date-fns/is_today';

import { Emitter } from 'proto-ui.vusion';
import { inDateRange } from '../u-calendar.vue/date';

export default {
    name: 'u-calendar-day',
    parentName: 'u-calendar',
    mixins: [Emitter],
    props: {
        currentDate: { type: Date }, // u-calendar转为Date传入
        showDate: { type: Date }, // u-calendar转为Date传入
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        isDateRangePicker: { type: Boolean, default: false },
        showPreMonth: { type: Boolean, default: true },
        showNextMonth: { type: Boolean, default: true },
        dateRange: { type: Array, default: () => [] },
    },
    data() {
        return {
            weekArr: ['日', '一', '二', '三', '四', '五', '六'],
            currentShowDate: null, // 当前显示时间页面
            currentMonth: '',
            dayRowArr: [],
        };
    },
    watch: {
        showDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate();
        },
    },
    created() {
        this.initDate();
    },
    methods: {
        initDate() {
            this.currentShowDate = this.showDate;
            this.currentMonth = getMonth(this.currentShowDate);
            this.getAllDays(this.currentShowDate);
        },
        onYearClick() {
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'year',
            });
        },
        onMonthClick() {
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'month',
            });
        },
        onDateClick(date) {
            this.dispatch(this.$options.parentName, 'selectDate', date);
            // this.$emit('update:currentDate', date);
            this.$emit('update:showDate', date);
        },
        // 得到当前月份的所有日期
        getAllDays(date) {
            this.dayRowArr = [];
            let start = startOfMonth(date),
                end = lastDayOfMonth(date);
            start = addDays(startOfMonth(date), -getDay(start));
            end = addDays(lastDayOfMonth(date), 6 - getDay(end));

            let tempDate = start;
            while (!isAfter(tempDate, end)) {
                const rowArr = [];
                for (let i = 0; i < 7; ++i) {
                    rowArr.push({
                        showDate: getDate(tempDate),
                        date: tempDate,
                        disabled: !inDateRange(tempDate, this.dateRange),
                    });
                    tempDate = addDays(tempDate, 1);
                }
                this.dayRowArr.push(rowArr);
            }
        },
        addMonth(monthGap) {
            this.$emit('update:showDate', addMonths(this.currentShowDate, monthGap));
        },
        isEqual,
        getMonth,
        getYear,
        isToday,
    },
};
