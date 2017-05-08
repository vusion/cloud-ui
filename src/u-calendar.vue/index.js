import Base from 'u-base.vue';

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
const Calendar = Base.extend({
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
        minDate: [String, Object],
        maxDate: [String, Object],
    },
    data() {
        return {
            days_: [],
            showDate: this.date,
            updateFlag: false,
        };
    },
    computed: {
        showYear() {
            const date = this.showDate;
            return date.getFullYear();
        },
        showMonth() {
            const date = this.showDate;
            const month = date.getMonth() + 1;
            return this.fix(month);
        },
    },
    watch: {
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
            const mfirst = new Date(date); mfirst.setDate(1);
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
            minDate = minDate && new Date((minDate / MS_OF_DAY >> 0) * MS_OF_DAY);
            maxDate = maxDate && new Date((maxDate / MS_OF_DAY >> 0) * MS_OF_DAY);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date);
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
});

const DateRangeError = function (minDate, maxDate) {
    this.name = 'DateRangeError';
    this.message = 'Wrong Date Range where `minDate` is ' + minDate + ' and `maxDate` is ' + maxDate + '!';
};
DateRangeError.prototype = Object.create(RangeError.prototype);
Calendar.DateRangeError = DateRangeError.prototype.constructor = DateRangeError;

export default Calendar;
