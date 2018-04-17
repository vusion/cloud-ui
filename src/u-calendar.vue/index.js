import uPopover from '../u-popover.vue';
import uListViewItem from 'proto-ui.vusion/src/u-list-view-item.vue';
import uListView from 'proto-ui.vusion/src/u-list-view.vue';
const MS_OF_DAY = 24 * 3600 * 1000;

/**
 * @class Calendar
 * @extend Component
 * @param {object}                  options                    =  绑定属性
 * @param {Date|string=TODAY}       options.date               <=> 当前选择的日期
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {disabled=disabled}       options.disabled            => 是否禁用
 */
const Calendar = {
    name: 'u-calendar',
    props: {
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        readonly: [String, Boolean],
        disabled: [String, Boolean],
        minDate: [String, Date, Number],
        maxDate: [String, Date, Number],
        yearDiff: {
            type: [String, Number],
            default: 3,
        },
        yearAdd: {
            type: [String, Number],
            default: 1,
        },
    },
    data() {
        return {
            days_: [],
            showDate: this.date,
            updateFlag: false,
            monthCol: this.getMonthCol(),
            yearCol: this.getYearCol(),
            yearvisible: false,
            monthvisible: false,
        };
    },
    computed: {
        showYear: {
            get() {
                const date = this.transformDate(this.showDate);
                return date.getFullYear();
            },
            set(value) {
                const date = this.showDate;
                const oldMonth = date.getMonth();
                date.setFullYear(value);
                if (date.getMonth() !== oldMonth)
                    date.setDate(0);

                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        },
        showMonth: {
            get() {
                const date = this.transformDate(this.showDate);
                const month = date.getMonth() + 1;
                return month;
            },
            set(value) {
                const date = this.showDate;
                date.setMonth(value - 1);

                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        },
        // yearCol() {
        //     const date = this.transformDate(this.showDate);
        //     const currentYear = date.getFullYear();
        //     const yearcol = [];
        //     const yearmin = currentYear - this.yearDiff;
        //     const yearmax = parseInt(currentYear) + parseInt(this.yearAdd);
        //     for (let i = yearmin; i <= yearmax; i++)
        //         yearcol.push(i);

        //     return yearcol;
        // },
    },
    components: {
        uPopover,
        uListView,
        uListViewItem,
    },
    watch: {
        date(newValue) {
            this.showDate = this.transformDate(newValue);
            this.updateFlag = true;
        },
        showDate(newValue) {
            // 如果超出日期范围，则设置为范围边界的日期
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange) {
                this.showDate = isOutOfRange;

                // 防止第二次刷新同月
                this.update();
                return;
            }

            if (this.updateFlag) {
                this.updateFlag = false;
                this.update();
            }

            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期
             */
            this.$emit('change', {
                sender: this,
                date: newValue,
            });
        },
        minDate(newValue, oldValue) {
            this.monthCol = this.getMonthCol();
            this.yearCol = this.getYearCol();
        },
        maxDate(newValue, oldValue) {
            this.monthCol = this.getMonthCol();
            this.yearCol = this.getYearCol();
        },
        // 最小值 最大值 发生变化 需要监听
    },
    filters: {
        format(value, type) {
            if (!value)
                return '';
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.length <= 1 ? '0' + str : str;
            };
            const maps = {
                yyyy(date) { return date.getFullYear(); },
                MM(date) { return fix(date.getMonth() + 1); },
                dd(date) { return fix(date.getDate()); },
                HH(date) { return fix(date.getHours()); },
                mm(date) { return fix(date.getMinutes()); },
                ss(date) { return fix(date.getSeconds()); },
            };
            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            type = type || 'yyyy-MM-dd HH:mm';
            value = new Date(value);
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
    },
    created() {
        this.update();
    },
    methods: {
        yearSelect(value) {
            this.showYear = value;
            this.yearvisible = false;
        },
        monthSelect(month) {
            this.showMonth = month.value;
            this.monthvisible = false;
        },
        getYearCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate)
                minDate = this.transformDate(this.minDate).getFullYear();

            if (this.maxDate)
                maxDate = this.transformDate(this.maxDate).getFullYear();

            const currentYear = date.getFullYear();
            const yearcol = [];
            const yearmin = currentYear - this.yearDiff;
            const yearmax = currentYear + parseInt(this.yearAdd);
            for (let i = yearmin; i <= yearmax; i++) {
                const obj = {
                    value: i,
                };
                if (minDate && (i < minDate))
                    obj.disabled = true;
                else if (maxDate && (i > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                yearcol.push(obj);
            }

            return yearcol;
        },
        getMonthCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate) {
                minDate = this.transformDate(this.minDate);
                const minYear = minDate.getFullYear();
                const minMonth = minDate.getMonth();
                const minFormat = minYear + '/' + (minMonth + 1);
                minDate = new Date(minFormat).getTime();
            }

            if (this.maxDate) {
                maxDate = this.transformDate(this.maxDate);
                const maxYear = maxDate.getFullYear();
                const maxMonth = maxDate.getMonth();
                const maxFormat = maxYear + '/' + (maxMonth + 1);
                maxDate = new Date(maxFormat).getTime();
            }

            const currentYear = date.getFullYear();
            const monthcol = [];
            // const mindate = currentYear - this.yearDiff;
            // const maxdate = parseInt(currentYear) + parseInt(this.yearAdd);
            for (let i = 1; i <= 12; i++) {
                const obj = {
                    value: i,
                };
                const dateFormat = currentYear + '/' + i;
                const dateTime = new Date(dateFormat).getTime();
                if (minDate && (dateTime < minDate))
                    obj.disabled = true;
                else if (maxDate && (dateTime > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                monthcol.push(obj);
            }

            return monthcol;
        },
        /**
         * @method update() 日期改变后更新日历
         * @private
         * @return {void}
         */
        update() {
            this.days_ = [];
            this.showDate = this.transformDate(this.showDate);
            const date = this.showDate;
            const month = date.getMonth();
            const mfirst = new Date(date);
            mfirst.setDate(1);
            mfirst.setHours(0, 0, 0, 0);
            const mfirstTime = +mfirst;
            const nfirst = new Date(mfirst); nfirst.setMonth(month + 1); nfirst.setDate(1);
            const nfirstTime = +nfirst;
            const lastTime = nfirstTime + ((7 - nfirst.getDay()) % 7 - 1) * MS_OF_DAY;
            let num = -mfirst.getDay();
            let tmpTime, tmp;
            do {
                tmpTime = mfirstTime + (num++) * MS_OF_DAY;
                tmp = new Date(tmpTime);
                this.days_.push(tmp);
            } while (tmpTime < lastTime);
        },
        /**
         * @method addYear(year) 调整年份
         * @public
         * @param  {number=0} year 加/减的年份
         * @return {void}
         */
        addYear(year) {
            if (this.readonly || this.disabled || !year)
                return;

            if (isNaN(year))
                throw new TypeError(year + ' is not a number!');

            const date = this.showDate;
            const oldMonth = date.getMonth();
            date.setFullYear(date.getFullYear() + year);
            if (date.getMonth() !== oldMonth)
                date.setDate(0);

            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method addMonth(month) 调整月份
         * @public
         * @param  {number=0} month 加/减的月份
         * @return {void}
         */
        addMonth(month) {
            if (this.readonly || this.disabled || !month)
                return;

            if (isNaN(month))
                throw new TypeError(month + ' is not a number!');

            const date = this.showDate;
            const correctMonth = date.getMonth() + month;
            date.setMonth(correctMonth);
            // 如果跳月，则置为上一个月
            if ((date.getMonth() - correctMonth) % 12)
                date.setDate(0);
            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            const _month = date.getMonth() + 1;

            if (this.showMonth !== _month)
                this.updateFlag = true;

            this.showDate = new Date(date);

            /**
             * @event select 选择某一个日期时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 当前选择的日期
             */
            this.$emit('select', {
                sender: this,
                date,
            });
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate);

            // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        fix(str) {
            str = '' + (String(str) || '');
            return str.length <= 1 ? '0' + str : str;
        },
    },
};

const DateRangeError = function (minDate, maxDate) {
    this.name = 'DateRangeError';
    this.message = 'Wrong Date Range where `minDate` is ' + minDate + ' and `maxDate` is ' + maxDate + '!';
};
DateRangeError.prototype = Object.create(RangeError.prototype);
Calendar.DateRangeError = DateRangeError.prototype.constructor = DateRangeError;

export default Calendar;
