import { clickOutside } from '../base/directives';
import debounce from 'lodash/debounce';

import isDate from 'date-fns/is_date';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isEqual from 'date-fns/is_equal';

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
        value: { type: [String, Date, Number], default: null, validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        dateRange: { type: Array, default: () => [] },
        minDate: { type: [String, Date], default: null, validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        maxDate: { type: [String, Date], default: null, validator: (date) => {
            if (!isDate(parse(date)))
                throw new TypeError('Invalid Date');
            return true;
        } },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default: 'yyyy-mm-dd',
        },
        placement: { type: String, default: 'bottom-start' },
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
        formatter: { type: String, default: 'YYYY-MM-DD' },
        tag: { type: String, default: '111', validator: (t) => /^[01]{3}$/.test(t) }, // 分别对应年月日，年月表示为：110
        fixOn: { type: String, default: 'blur' },
    },
    data() {
        return {
            currentDate: null,
            currentShowDate: null,
            currentFormatter: null,
            focus: false,
            hasValue: false,
        };
    },
    created() {
        this.debouncedInput = debounce(this.setValue, 1000);

        this.initDateFormat();
        this.initDate();
    },
    directives: { clickOutside },
    watch: {
        value() {
            this.initDate();
        },
        currentDate(date, oldDate) {
            if (!date) {
                this.currentShowDate = undefined;
                this.hasValue = false;
            } else {
                this.hasValue = true;
                this.currentShowDate = format(date, this.currentFormatter); // String
                if (this.currentShowDate === format(oldDate, this.currentFormatter))
                    return;
            }
            /**
             * @event change 日期改变时触发
             * @property {Date} date 改变后的日期 返回格式为日期对象
             */
            this.$emit('change', {
                value: date,
                oldValue: oldDate,
            });

            this.$emit('input', this.currentShowDate);
            this.$emit('update:value', this.currentShowDate);
        },
        tag() {
            this.initDateFormat();
        },
    },
    methods: {
        initDateFormat() {
            this.currentFormatter = this.formatter;
            if (this.tag.charAt(0) === '0') // 不显示年
                this.currentFormatter = this.currentFormatter.replace(/Y/g, '');
            if (this.tag.charAt(1) === '0') // 不显示月
                this.currentFormatter = this.currentFormatter.replace(/([^\w]M|M)/g, '');
            if (this.tag.charAt(2) === '0') // 不显示日
                this.currentFormatter = this.currentFormatter.replace(/([^\w]D|D)/g, '');
        },
        initDate() {
            this.currentDate = this.value ? this.setDateTime(parse(this.value)) : undefined; // Date
        },
        onBeforeSelect(e) {
            this.$emit('before-select', e);
        },
        /**
         * @method onSelect(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        onSelect(date) {
            if (this.readonly || this.disabled)
                return;
            const oldValue = this.currentDate;
            this.currentDate = this.setDateTime(date);
            /**
             * @event select 选择某一项时触发
             * @property {Date} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                value: this.currentDate,
                oldValue,
            });

            this.$refs.popper.toggle(false);
            this.focus = false;
        },
        /**
         * @method onBlur(value) 失焦校正
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onBlur(e) {
            if (this.fixOn !== 'blur')
                return;
            this.setValue(this.$refs.input.currentValue);
            this.focus = false;
        },
        onInput(value) {
            if (this.fixOn !== 'input')
                return;
            this.debouncedInput(value);
        },
        setValue(value) {
            if (!value)
                return;
            const dateStr = value;
            const tempDate = this.setDateTime(parse(dateStr));
            if (tempDate.toString() !== 'Invalid Date' && isDate(tempDate)) {
                this.$refs.input.currentValue = format(tempDate, this.currentFormatter); // 保证同一个Date，同一种format形式
                isEqual(tempDate, this.currentDate) || (this.currentDate = tempDate);
            } else
                this.$refs.input.currentValue = format(this.currentDate, this.currentFormatter);
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        onToggle($event) {
            this.$emit('toggle', $event);
            this.focus = $event.open;
        },
        setDateTime(date) { // 如果超出范围，不可设置
            if (this.$refs.calendar && !this.$refs.calendar.inCalendarDateRange(date))
                return new Date('Invalid Date');
            if (!isDate(date) || this.time === 'start')
                return date;
            let time;
            if (this.time === 'morning')
                time = '08:00:00';
            else if (this.time === 'end')
                time = '23:59:59';
            else if (typeof +this.time === 'number')
                time = (+this.time > 10 ? this.time : '0' + this.time) + ':00:00';
            else
                time = this.time.replace(/^(\w:)/, '0$1').replace(/:(\w):/g, ':0$1:').replace(/:(\w)$/, ':0$1');
            return parse(format(date, 'YYYY-MM-DD') + 'T' + time);
        },
        onFocus() {
            this.focus = true;
        },
        onEmptyClick() {
            this.currentDate = undefined;
        },
    },
};
