import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import setMonth from 'date-fns/set_month';
import isEqual from 'date-fns/is_equal';
import addYears from 'date-fns/add_years';
import format from 'date-fns/format';

import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-calendar-month',
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
            monthArr: [{ text: '一' }, { text: '二' }, { text: '三' }, { text: '四' }, { text: '五' }, { text: '六' }, { text: '七' }, { text: '八' }, { text: '九' }, { text: '十' }, { text: '十一' }, { text: '十二' }],
            showYear: null,
            currentMonth: null,
            currentYear: null,
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
            this.currentMonth = getMonth(this.currentDate);
            this.showYear = getYear(this.showDate);
            this.currentYear = getYear(this.currentDate);
            this.monthArr.forEach((obj, index) => {
                obj.date = setMonth(this.showDate, index);
                obj.disabled = !this.inMonthRange(obj.date);
            });
        },
        onYearClick() {
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'year',
            });
        },
        onMonthClick(date) {
            this.$emit('update:showDate', date);
            // 选择日期后，回到u-calendar-day视图
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'day',
            });
        },
        addYear(gap) {
            this.$emit('update:showDate', addYears(this.showDate, gap));
        },
        // date月份是否在range之间
        inMonthRange(date) {
            if (this.dateRange.length <= 0)
                return true;
            const _trans = (d) => format(d, 'YYYYMM');
            const month = _trans(date);
            return this.dateRange.some((arr) => {
                const month1 = arr[0] ? _trans(arr[0]) : null,
                    month2 = arr[1] ? _trans(arr[1]) : null;
                if (month1 && month2)
                    return month >= month1 && month <= month2;
                if (month1)
                    return month >= month1;
                if (month2)
                    return month <= month2;

                return true;
            });
        },
        getYear,
    },
};
