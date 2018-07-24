import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import setMonth from 'date-fns/set_month';
import isEqual from 'date-fns/is_equal';
import addYears from 'date-fns/add_years';
import format from 'date-fns/format';

export default {
    name: 'u-panel-month',
    parentName: 'u-panel-control',
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
            monthArr: [{ text: '一' }, { text: '二' }, { text: '三' }, { text: '四' }, { text: '五' }, { text: '六' }, { text: '七' }, { text: '八' }, { text: '九' }, { text: '十' }, { text: '十一' }, { text: '十二' }],
            displayYear: null,
            displayMonth: null,
            selectedYear: null,
            selectedMonth: null,
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
        selectedDate(value, oldValue) {
            if (isEqual(value, oldValue))
                return;
            this.initDate();
        },
    },
    methods: {
        initDate() {
            this.displayMonth = getMonth(this.displayDate);
            this.selectedMonth = getMonth(this.selectedDate);
            this.displayYear = getYear(this.displayDate);
            this.selectedYear = getYear(this.selectedDate);
            this.monthArr.forEach((obj, index) => {
                obj.date = setMonth(this.displayDate, index);
                obj.disabled = !this.inMonthRange(obj.date);
            });
        },
        onYearClick() {
            this.$emit('changeView', 'year');
        },
        onMonthClick(date) {
            this.$emit('dateClick', {
                type: 'month',
                date,
            });
        },
        addYear(gap) {
            this.$emit('update:displayDate', addYears(this.displayDate, gap));
        },
        // date月份是否在range之间
        inMonthRange(date) {
            if (this.dateRange.length <= 0)
                return true;
            const _trans = (d) => format(d, 'YYYYMM');
            const month = _trans(date);
            return this.dateRange.some((arr) => {
                const month1 = arr[0] ? _trans(arr[0]) : null;
                const month2 = arr[1] ? _trans(arr[1]) : null;
                if (month1 && month2)
                    return month >= month1 && month <= month2;
                if (month1)
                    return month >= month1;
                if (month2)
                    return month <= month2;

                return true;
            });
        },
    },
};
