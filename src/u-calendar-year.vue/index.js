import getYear from 'date-fns/get_year';
import setYear from 'date-fns/set_year';
import isEqual from 'date-fns/is_equal';
import addYears from 'date-fns/add_years';

import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-calendar-year',
    parentName: 'u-calendar',
    mixins: [Emitter],
    props: {
        currentDate: { type: Date },
        showDate: { type: Date },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        dateRange: { type: Array, default: () => [] },
    },
    data() {
        return {
            yearArr: [],
        };
    },
    created() {
        this.initDate();
    },
    watch: {
        showDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate();
        },
    },
    methods: {
        initDate() {
            this.currentShowDate = this.showDate;
            this.currentYear = getYear(this.currentDate);
            this.showYear = getYear(this.currentShowDate);
            this.yearArr = [];
            const tempYear = (this.showYear / 10 >> 0) * 10;
            for (let i = 0; i < 10; ++i) {
                const yearObj = {
                    text: tempYear + i,
                };
                yearObj.date = setYear(this.currentShowDate, yearObj.text);
                yearObj.disabled = !this.inYearRange(yearObj.date);
                this.yearArr.push(yearObj);
            }
        },
        onYearClick(date) {
            this.$emit('update:showDate', date);
            // 选择年份后，回到u-calendar-month视图
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'month',
            });
        },
        addYear(gap) {
            this.$emit('update:showDate', addYears(this.currentShowDate, gap));
        },
        // 是否在年份范围内
        inYearRange(date) {
            const year = getYear(date);
            return this.dateRange.some((arr) => {
                const year1 = arr[0] ? getYear(arr[0]) : null,
                    year2 = arr[1] ? getYear(arr[1]) : null;
                if (year1 && year2)
                    return year >= year1 && year <= year2;
                if (year1)
                    return year >= year1;
                if (year2)
                    return year <= year2;
                return true;
            });
        },
    },
};
