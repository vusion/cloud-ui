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
import format from 'date-fns/format';

import { inDateRange } from '../date';

export default {
    name: 'u-panel-day',
    parentName: 'u-panel-control',
    props: {
        selectedDate: { type: Date },
        displayDate: { type: Date, default: () => new Date() },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        isRangePicker: { type: Boolean, default: false },
        dateRange: { type: Array, default: () => [] },
        hidePre: { type: Boolean, default: false },
        hideNext: { type: Boolean, default: false },
        selectedDates: { type: Array, default: () => [] }, // dateRangePicker选择的所有日期
        hoverDate: { type: Date },
    },
    data() {
        return {
            weekArr: ['日', '一', '二', '三', '四', '五', '六'],
            currentMonth: '',
            dayRowArr: [],
            allowClick: !this.disabled && !this.readonly,
        };
    },
    watch: {
        displayDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate();
        },
        selectedDate(value, oldValue) {
            if (isEqual(value, oldValue))
                return;
            this.initDate();
        },
    },
    created() {
        this.initDate();
    },
    methods: {
        initDate(date = this.value) {
            this.currentMonth = getMonth(this.displayDate);
            this.getAllDays(this.displayDate);
        },
        onYearClick() {
            this.$emit('changeView', 'customYear');
        },
        onMonthClick() {
            this.$emit('changeView', 'customMonth');
        },
        onDateClick(date) {
            this.$emit('dateClick', {
                type: 'customDay',
                date,
            });
        },
        // 得到当前月份的所有日期
        getAllDays(date) {
            this.dayRowArr = [];
            let start = startOfMonth(date);
            let end = lastDayOfMonth(date);
            start = addDays(startOfMonth(date), -getDay(start));
            end = addDays(lastDayOfMonth(date), 6 - getDay(end));
            let tempDate = start;
            while (!isAfter(tempDate, end)) {
                const rowArr = [];
                for (let i = 0; i < 7; ++i) {
                    rowArr.push({
                        day: getDate(tempDate),
                        date: tempDate,
                        disabled: !inDateRange(tempDate, this.dateRange),
                    });
                    tempDate = addDays(tempDate, 1);
                }
                this.dayRowArr.push(rowArr);
            }
        },
        addMonth(monthGap) {
            this.$emit('update:displayDate', addMonths(this.displayDate, monthGap));
        },
        isSelected(item) {
            if (this.isRangePicker)
                return this.selectedDates.some((date) => isEqual(item.date, date));
            else {
                const dayFormatter = 'YYYY-MM-DD';
                return format(item.date, dayFormatter) === format(this.selectedDate, dayFormatter);
            }
        },
        isBetween(date) {
            if (this.isRangePicker) {
                let rangeArr = [];
                if (this.selectedDates.length === 1 && this.hoverDate) {
                    const hoverAfterSelect = isAfter(this.hoverDate, this.selectedDates[0]);
                    rangeArr.push([hoverAfterSelect ? this.selectedDates[0] : this.hoverDate, hoverAfterSelect ? this.hoverDate : this.selectedDates[0]]);
                } else if (this.selectedDates.length === 2) {
                    rangeArr = this.selectedDates.slice(0);
                } else
                    return false;
                return inDateRange(date, rangeArr, true);
            }
            return false;
        },
        getMonth,
        getYear,
        isToday,
    },
};
