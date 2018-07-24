import getYear from 'date-fns/get_year';
import setYear from 'date-fns/set_year';
import isEqual from 'date-fns/is_equal';
import addYears from 'date-fns/add_years';

// import { Emitter } from 'proto-ui.vusion';
// import { dateValidadtor } from '../date';

export default {
    name: 'u-panel-year',
    parentName: 'u-panel-control',
    // mixins: [Emitter],
    props: {
        selectedDate: { type: Date },
        displayDate: { type: Date, default: () => new Date() },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        isRangePicker: { type: Boolean, default: false },
        dateRange: { type: Array, default: () => [] },
        allowPre: { type: Boolean, default: true },
        allowNext: { type: Boolean, default: true },
        selectedValues: { type: Array, default: () => [] }, // dateRangePicker选择的所有日期
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
        displayDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;
            this.initDate();
        },
        selectedDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;
            this.initDate();
        },
    },
    methods: {
        initDate() {
            this.selectedYear = getYear(this.selectedDate);
            this.displayYear = getYear(this.displayDate);
            this.yearArr = [];
            const tempYear = (this.displayYear / 10 >> 0) * 10;
            for (let i = 0; i < 10; ++i) {
                const yearObj = {
                    text: tempYear + i,
                };
                yearObj.date = setYear(this.displayDate, yearObj.text);
                yearObj.disabled = !this.inYearRange(yearObj.date);
                this.yearArr.push(yearObj);
            }
        },
        onYearClick(date) {
            this.$emit('dateClick', {
                type: 'year',
                date,
            });
        },
        addYear(gap) {
            this.$emit('update:displayDate', addYears(this.displayDate, gap));
        },
        // 是否在年份范围内
        inYearRange(date) {
            if (this.dateRange.length <= 0)
                return true;
            const year = getYear(date);
            return this.dateRange.some((arr) => {
                const year1 = arr[0] ? getYear(arr[0]) : null;
                const year2 = arr[1] ? getYear(arr[1]) : null;
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
