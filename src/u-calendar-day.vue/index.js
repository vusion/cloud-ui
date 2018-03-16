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
import parse from 'date-fns/parse';

import { Emitter } from 'proto-ui.vusion';
import { inDateRange, dateValidadtor, sortIncrease } from '../u-calendar.vue/date';

export default {
    name: 'u-calendar-day',
    parentName: 'u-calendar',
    mixins: [Emitter],
    props: {
        date: { type: [String, Date], default: undefined, validator: dateValidadtor }, // 单独引用时
        showDate: { type: Date }, // u-calendar转为Date传入
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        isDateRangePicker: { type: Boolean, default: false },
        dateRange: { type: Array, default: () => [] },
        allowPre: { type: Boolean, default: true },
        allowNext: { type: Boolean, default: true },
        selectedDate: { type: Array, default: () => [] }, // dateRangePicker选择的所有日期
        hoverDate: { type: Date },
    },
    data() {
        return {
            weekArr: ['日', '一', '二', '三', '四', '五', '六'],
            currentDate: null,
            currentShowDate: null, // 当前显示时间页面
            currentMonth: '',
            dayRowArr: [],
            // currentSelectedDate: this.selectedDate,
        };
    },
    watch: {
        showDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate();
        },
        date(value, oldValue) {
            const newDate = parse(value);
            const oldDate = parse(oldValue);
            if (isEqual(newDate, oldDate))
                return;
            this.initDate();
        },
        // selectedDate(value) {
        //     this.currentSelectedDate = value;
        // },
    },
    created() {
        this.initDate();
    },
    methods: {
        initDate(date) {
            this.currentDate = parse(date || this.date);
            this.currentShowDate = this.showDate || this.currentDate;
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
            if (this.isDateRangePicker) {
                this.$emit('select', {
                    sender: this,
                    value: date,
                    oldValue: null,
                });
                this.initDate(date);
            } else
                this.dispatch(this.$options.parentName, 'selectDate', date);
        },
        onMouseover(date) {
            if (this.isDateRangePicker) {
                this.$emit('mouseover', {
                    value: date,
                });
            }
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
        isSelected(item) {
            if (this.isDateRangePicker)
                return this.selectedDate.some((date) => isEqual(item.date, date));
            else
                return isEqual(item.date, this.currentDate);
        },
        isBetween(date) {
            if (this.isDateRangePicker) {
                const rangeArr = [];
                if (this.selectedDate.length === 1 && this.hoverDate) {
                    const hoverAfterSelect = isAfter(this.hoverDate, this.selectedDate[0]);
                    rangeArr.push([hoverAfterSelect ? this.selectedDate[0] : this.hoverDate, hoverAfterSelect ? this.hoverDate : this.selectedDate[0]]);
                } else if (this.selectedDate.length === 2)
                    rangeArr.push(sortIncrease(this.selectedDate.slice(0)));
                return rangeArr.length <= 0 ? false : inDateRange(date, rangeArr);
            }
            return false;
        },
        isEqual,
        getMonth,
        getYear,
        isToday,
    },
};
