import format from 'date-fns/format';
import parse from 'date-fns/parse'; // null -> 1970 undefined -> Invalid Date
import isEqual from 'date-fns/is_equal';
import CalendarDay from '../u-calendar-day.vue';
import CalendarMonth from '../u-calendar-month.vue';
import CalendarYear from '../u-calendar-year.vue';
import { inDateRange, dateValidadtor, setDateTime, validateDateRange } from './date';

export default {
    name: 'u-calendar',
    props: {
        value: { type: [String, Date, Number], default: undefined, validator: dateValidadtor },
        dateRange: { type: Array, default: () => [] },
        minDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
        maxDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        formatter: { type: String, default: 'YYYY-MM-DD' },
        isDateRangePicker: { type: Boolean, default: false },
        time: {
            type: [String, Number],
            default: 'start', // 默认返回00:00:00的时间戳
            validator(value) {
                if (['start', 'morning', 'end'].includes(value))
                    return true;
                const nvalue = +value;
                if (!isNaN(value) && nvalue >= 0 && nvalue < 24)
                    return true;

                if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(value))
                    throw new Error('请输入正确的time格式');
                return true;
            },
        },
        view: { type: String, default: 'day' },
    },
    data() {
        return {
            currentView: 'day',
            currentDate: null, // 选择时间, 数据流： calendar -> components & day->calendar
            currentDisplayDate: null, // 显示时间, 数据流： calendar <-> components
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

            const formattedValue = this.formatValue(newDate);
            this.$emit('change', {
                value: this._setDateTime(newDate),
                oldValue: this._setDateTime(oldDate),
                formattedValue,
            });
            this.$emit('update:value', formattedValue);
            this.$emit('input', formattedValue);
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
    computed: {
        _setDateTime() {
            return (date) => setDateTime(date, this.time);
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
        if (!this.inCalendarDateRange())
            throw new RangeError('initital date is out of dateRange');

        // components视图从fview更改为tview
        this.$on('change-view', ({ fview, tview }) => {
            if (this.tag.charAt(this.tagMap[tview]) === '1')
                this.currentView = tview;
            else { // 年月选择
                this.$emit('select', {
                    value: this._setDateTime(this.currentDisplayDate),
                    oldValue: this._setDateTime(this.currentDate),
                });
                this.currentDate = this.currentDisplayDate;
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
            this.currentDate = date ? parse(date) : undefined;
            this.currentDisplayDate = this.showDate ? parse(this.showDate) : (this.currentDate || new Date());
        },
        initDateRange() {
            this.currentDateRange = validateDateRange(this.dateRange, this.minDate, this.maxDate);
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
