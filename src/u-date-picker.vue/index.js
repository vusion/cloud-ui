import Calendar from '../u-calendar.vue';
const MS_OF_DAY = 24 * 3600 * 1000;
import directive from '../util/directives.js';

/**
 * @class DatePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 */
export default {
    name: 'u-date-picker',
    props: {
        date: [String, Number, Date],
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        disabled: [Boolean, String],
        autofocus: [Boolean, String],
        readonly: [Boolean, String],
        placeholder: {
            type: String,
            default: '请输入',
        },
        width: { type: [String, Number], default: 154 },
        alignment: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
    },
    data() {
        return {
            showDate: this.format(this.date, 'yyyy/MM/dd'),
        };
    },
    created() {
        if (this.minDate && this.maxDate) {
            const minDate = new Date(this.minDate);
            const maxDate = new Date(this.maxDate);
            if (minDate / MS_OF_DAY >> 0 > maxDate / MS_OF_DAY >> 0)
                throw new Calendar.DateRangeError(minDate, maxDate);
        }

        // document.addEventListener('click', this.fadeOut.bind(this), false);
    },
    directives: {
        clickoutside: directive.clickoutside,
    },
    watch: {
        date(newValue) {
            this.showDate = this.format(newValue, 'yyyy/MM/dd');
        },
        showDate(newValue) {
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 改变后的日期 返回格式为日期对象
             */
            this.$emit('change', {
                sender: this,
                date: new Date(newValue),
            });
        },
        minDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
        maxDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
    },
    computed: {
        placement() {
            if (this.alignment === 'left')
                return 'bottom-start';
            else if (this.alignment === 'right')
                return 'bottom-end';
        },
    },
    methods: {
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            // debugger;
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;

            this.showDate = this.format(date, 'yyyy/MM/dd');

            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: new Date(this.showDate),
            });

            this.$emit('update:date', this.showDate);

            this.$refs.popper.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            const date = value ? new Date(value) : null;

            if (date.toString() !== 'Invalid Date')
                this.showDate = this.format(date, 'yyyy/MM/dd');
            else
                this.$refs.input.value = this.format(this.showDate, 'yyyy-MM-dd');
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

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期。
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        onToggle($event) {
            this.$emit('toggle', $event);
        },
        format(value, type) {
            if (!value)
                return undefined;
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
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date);
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
    },
};
