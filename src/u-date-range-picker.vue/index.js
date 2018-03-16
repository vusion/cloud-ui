import { clickOutside } from '../base/directives';

import isDate from 'date-fns/is_date';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isEqual from 'date-fns/is_equal';
import isAfter from 'date-fns/is_after';
import addMonths from 'date-fns/add_months';

import { inDateRange, dateValidadtor, sortIncrease } from '../u-calendar.vue/date';

export default {
    name: 'u-date-range-picker',
    props: {
        startDate: { type: [String, Date], default: null, validator: dateValidadtor },
        endDate: { type: [String, Date], default: null, validator: dateValidadtor },
        showDate: { type: [String, Date], default: null, validator: dateValidadtor }, // 起始日历显示的日期
        gap: { type: Number, default: 1 }, // 起始日历和结束日历的月份间隔
        dateRange: { type: Array, default: () => [] },
        minDate: { type: [String, Date], default: null, validator: dateValidadtor },
        maxDate: { type: [String, Date], default: null, validator: dateValidadtor },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholderArr: { type: Array, default: () => [] },
        dateFormat: { type: String, default: 'YYYY-MM-DD' },
        placement: { type: String, default: 'bottom-start' },
    },
    data() {
        return {
            currentDateFormat: this.dateFormat,
            currentStartDate: null, // 当前calendar选中值
            currentEndDate: null,
            formatCurrentStartDate: null, // 当前输入框中的值
            formatCurrentEndDate: null,
            startShowDate: undefined, // 当前Calendar显示的日期选择页面，month改变时变化
            endShowDate: undefined,
            selectDateArr: [],
            selectIndex: -1,
            allowPre: false,
            allowNext: false,
            hoverDate: null, // 鼠标悬浮的日期
        };
    },
    created() {
        // calendar中会验证时间合法性
        this.initDate();
    },
    directives: { clickOutside },
    watch: {
        startDate(date, oldDate) {
            this.currentStartDate = parse(date); // Date
        },
        endDate(date, oldDate) {
            this.currentEndDate = parse(date); // Date
        },
        startShowDate() {
            this.initAllow();
        },
        endShowDate() {
            this.initAllow();
        },
        currentStartDate(date, oldDate) {
            this.formatCurrentStartDate = format(date, this.currentDateFormat); // Date
        },
        currentEndDate(date, oldDate) {
            this.formatCurrentEndDate = format(date, this.currentDateFormat); // Date
        },
    },
    methods: {
        initDate() {
            if (this.startDate && this.endDate && isAfter(parse(this.startDate), parse(this.endDate)))
                throw new TypeError('startDate cannot after endDate');

            this.startDate && (this.currentStartDate = parse(this.startDate));
            this.endDate && (this.currentEndDate = parse(this.endDate));
            this.startShowDate = this.showDate ? this.setDateTime(parse(this.showDate)) : new Date();
            this.endShowDate = addMonths(this.startShowDate, this.gap);
        },
        initAllow() { // 月份相邻不可更改上下按钮
            const _trans = (date) => +parse(date, 'YYYYMM');
            const setAllow = (allow) => {
                this.allowNext = this.allowPre = allow;
            };
            if (_trans(this.endShowDate) - _trans(this.startShowDate) <= 1)
                setAllow(false);
            else
                setAllow(true);
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
            const tempDate = this.setDateTime(date);
            this.selectIndex = (this.selectIndex + 1) % 2;
            this.selectDateArr[this.selectIndex] = tempDate;
            if (this.selectIndex < 1) {
                this.selectDateArr = this.selectDateArr.slice(0, 1); // 选择一个的时候，清空第二个选项
                return;
            }
            /**
             * @event select 选择了起始和结束时间时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: this.selectDateArr,
                oldDate: [this.currentStartDate, this.currentEndDate],
            });

            this.selectDateArr = sortIncrease(this.selectDateArr); // 选择的两个值按照大小排序
            this.currentStartDate = this.selectDateArr[0];
            this.$emit('update:startDate', this.selectDateArr[0]);
            this.currentEndDate = this.selectDateArr[1];
            this.$emit('update:endDate', this.selectDateArr[1]);
            this.$refs.popper.toggle(false);
        },
        /**
         * @method onInput(value) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput(value) {
            if (this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setValue(value);
            }, 1000);
        },
        // onMouseover(event) {
        //     this.hoverDate = event.value;
        // },
        setValue($event) {
            const dateStr = $event.target.value;
            const tempDate = this.setDateTime(parse(dateStr));
            if (tempDate.toString() !== 'Invalid Date' && isDate(tempDate)) {
                this.$refs.input.value = format(tempDate, this.currentDateFormat); // 保证同一个Date，同一种format形式
                isEqual(tempDate, this.currentDate) || (this.currentDate = tempDate);
            } else
                this.$refs.input.value = format(this.currentDate, this.currentDateFormat);
            // this.$forceUpdate();
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        onToggle($event) {
            this.$emit('toggle', $event);
        },
        setDateTime(date) { // 如果超出范围，不可设置
            // 先不设置时分秒
            return date;

            // if (this.$refs.calendar && !this.$refs.calendar.inCalendarDateRange(date))
            //     return new Date('Invalid Date');
            // if (!isDate(date) || this.time === 'start')
            //     return date;
            // let time;
            // if (this.time === 'morning')
            //     time = '08:00:00';
            // else if (this.time === 'end')
            //     time = '23:59:59';
            // else if (typeof +this.time === 'number')
            //     time = (+this.time > 10 ? this.time : '0' + this.time) + ':00:00';
            // else
            //     time = this.time.replace(/^(\w:)/, '0$1').replace(/:(\w):/g, ':0$1:').replace(/:(\w)$/, ':0$1');
            // return parse(format(date, 'yyyy-MM-dd') + 'T' + time);
        },
    },
};
