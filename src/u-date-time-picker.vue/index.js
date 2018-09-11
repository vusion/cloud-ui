import { clickOutside } from '../base/directives';
import Field from 'proto-ui.vusion/src/u-field.vue';
/**
 * @class DateTimePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期时间
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期时间，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期时间，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */
export default {
    name: 'u-date-time-picker',
    props: {
        disabled: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default: '请选择时间',
        },
        readonly: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        date: [String, Number, Date],
        width: {
            type: [String, Number],
            default: 170,
        },
        yearDiff: {
            type: [String, Number],
            default: 3,
        },
        yearAdd: {
            type: [String, Number],
            default: 1,
        },
    },
    mixins: [Field],
    data() {
        return {
            dateTime: this.format(this.date, 'yyyy-MM-dd HH:mm:ss'),
            open: false,
            minTime: undefined,
            maxTime: undefined,
            currentMaxDate: this.getMaxDate(), // 可能会存在最大值小于最小值情况，组件需要内部处理让最大值和最小值一样
        };
    },
    computed: {
        showTime() {
            return this.format(this.dateTime, 'HH:mm:ss');
        },
        showDate() {
            return this.format(this.dateTime, 'yyyy-MM-dd');
        },
        minCalendarDate() {
            return this.format(this.minDate, 'yyyy-MM-dd');
        },
        maxCalendarDate() {
            return this.format(this.currentMaxDate, 'yyyy-MM-dd');
        },
        spMinTime() {
            return this.format(this.minDate, 'HH:mm:ss');
        },
        spMaxTime() {
            return this.format(this.currentMaxDate, 'HH:mm:ss');
        },
    },
    directives: {
        clickOutside,
    },
    watch: {
        date(newValue) {
            this.dateTime = this.format(newValue, 'yyyy-MM-dd HH:mm:ss');
        },
        dateTime(newValue) {
            // 字符类型自动转为日期类型

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');

            // 如果不为空并且超出日期范围，则设置为范围边界的日期
            if (newValue) {
                const isOutOfRange = this.isOutOfRange(newValue);
                if (isOutOfRange)
                    newValue = this.format(isOutOfRange, 'yyyy-MM-dd HH:mm:ss');
            }

            this.$emit('update:date', new Date(newValue.replace(/-/g, '/')).getTime());

            /**
             * @event change 日期时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期时间
             */
            this.$emit('change', {
                sender: this,
                date: new Date(newValue.replace(/-/g, '/')).getTime(),
            });

            // 方便u-field组件捕获到其值
            this.$emit('input', new Date(newValue.replace(/-/g, '/')));
        },
        maxDate(value) {
            this.currentMaxDate = this.getMaxDate(value);
        },
        minDate(value) {
            this.currentMaxDate = this.getMaxDate();
        },
    },
    methods: {
        /**
         * @method outRangeDateTime(date, time) 修改日期为最大日期或最小日期
         * @private
         * @return {void}
         */
        outRangeDateTime(date, time) {
            if (!time)
                time = '00:00:00';

            if (date)
                date = new Date(date);
            else
                date = new Date();
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
            const datetime = this.format(date, 'yyyy-MM-dd');
            const dtime = this.format(date, 'HH:mm:ss');
            if (datetime === this.minCalendarDate && datetime === this.maxCalendarDate) {
                this.minTime = this.spMinTime;
                this.maxTime = this.spMaxTime;
            } else if (datetime === this.minCalendarDate)
                this.minTime = this.spMinTime;
            else if (datetime === this.maxCalendarDate)
                this.maxTime = this.spMaxTime;
            else if (datetime === this.minCalendarDate && dtime < this.spMinTime) {
                const spMinTime = this.spMinTime.split(':');
                date.setHours(spMinTime[0]);
                date.setMinutes(spMinTime[1]);
                date.setSeconds(spMinTime[2]);
            } else if (datetime === this.maxCalendarDate && dtime > this.spMaxTime) {
                const spMaxTime = this.spMaxTime.split(':');
                date.setHours(spMaxTime[0]);
                date.setMinutes(spMaxTime[1]);
                date.setSeconds(spMaxTime[2]);
            } else {
                this.minTime = undefined;
                this.maxTime = undefined;
            }
            // if (datetime === this.minCalendarDate || datetime === this.maxCalendarDate)
            this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');

            this.$emit('select', {
                sender: this,
                date: new Date(date).getTime(),
            });
        },
        /**
         * @method onDateTimeChange(date, time) 日期或时间改变后更新日期时间
         * @private
         * @return {void}
         */
        onDateTimeChange(date, time) {
            if (!time)
                time = '00:00:00';

            date = new Date(date);
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
            this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');

            this.$emit('select', {
                sender: this,
                date: new Date(date).getTime(),
            });
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            let date = value ? new Date(value) : null;

            if (date.toString() !== 'Invalid Date' && date !== null) {
                date = this.isOutOfRange(date) ? this.isOutOfRange(date) : date;
                this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');
            } else
                this.$refs.input.value = this.format(this.dateTime, 'yyyy-MM-dd HH:mm:ss');
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期时间范围
         * @public
         * @param {Date} date 待测的日期时间
         * @return {boolean|Date} date 如果没有超出日期时间范围，则返回false；如果超出日期时间范围，则返回范围边界的日期时间
         */
        isOutOfRange(date) {
            date = this.transformDate(date);
            const minDate = this.transformDate(this.minDate);
            const maxDate = this.transformDate(this.currentMaxDate);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        format(value, type) {
            if (!value)
                return;
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
            if (typeof value === 'string')
                value = value.replace(/-/g, '/');
            value = new Date(value);
            if (value.toString() === 'Invalid Date')
                return;
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        toggle(value) {
            if (this.readonly)
                this.open = false;
            else
                this.open = value;
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        handleClose() {
            this.open = false;
        },
        getMaxDate(value) {
            value = value || this.maxDate;
            const minTime = new Date(this.minDate).getTime();
            const maxTime = new Date(value).getTime();
            if (maxTime < minTime)
                return this.minDate;
            else
                return this.maxDate;
        },
    },
};
