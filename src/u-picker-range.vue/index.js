/**
 * disabled: 禁用
 * readonly：只读
 * editable: input框是否可编辑
 * placeholder: 占位符，Array为选择范围的占位符
 * rangeSeparator：range的分隔符
 * value.sync: 初始时间
 * panelDisplayValue: 初始panel显示时间，如有value，则显示value
 * fixOn：输入校正时机，editable为true时生效
 * type: 类型：year/month/date/datetime/daterange/datetimerange
 * formatter: 符合date-fns的格式化，当type非year/month时，以formatter为主控制panel跳转。如‘MM-DD’不显示年份
 * placement: popper组件的placement
 * dateRange: 时间范围: 二维数组形式。
 * minDate: 最小时间。
 * maxDate: 最大时间。
 * time: 并没有时分秒的地方设置默认的时分秒值，不建议使用。
 *
 * picker由input和panel组成，由外部传入。
 * input抛出input，focus, blur事件
 * panel抛出select, beforeSelect事件。 date都为Date格式，交由picker格式化
 * picker抛出toggle。before-select, select（不论有效值是否改变，用户点击即触发）. change(两个validate的值变化)
 */
import isEqual from 'date-fns/is_equal';
import isBefore from 'date-fns/is_before';
import format from 'date-fns/format';
import { dateValidadtor, validateDateRange, inDateRange, setDateTime, _parse } from '../u-picker.vue/panel/date';

import debounce from 'lodash/debounce';

export default {
    name: 'u-picker-range',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        editable: { type: Boolean, default: true }, // TODO
        placeholder: { type: Array },
        rangeSeparator: { type: String, default: '至' },
        startValue: { type: [String, Date, Number], default: undefined },
        endValue: { type: [String, Date, Number], default: undefined },
        startPanelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        endPanelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) },
        type: { type: String },
        formatter: { type: String, default: 'YYYY-MM-DD', validator: (value) => dateValidadtor(format(new Date(), value)) },
        placement: { type: String, default: 'bottom-start' },
        dateRange: { type: Array },
        minDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
        maxDate: { type: [String, Date, Number], default: null, validator: dateValidadtor },
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
    },
    data() {
        return {
            hasInit: false,
            currentFormatter: this.formatter,
            currentDateRange: [],
            blockPanel: {}, // 不能跳转到的页面
            panelView: 'customDay',
            inputValueStart: '',
            inputValueEnd: '',
            currentValueStart: _parse(this.startValue), // Date类型
            currentValueEnd: _parse(this.endValue),
            changedInputValueStart: null,
            changedInputValueEnd: null,
            showPanel: false,
        };
    },
    computed: {
        allProps() {
            return Object.assign({}, this.$props, this.$attrs);// 也是响应式的
        },
    },
    watch: {
        startValue(value, oldValue) {
            this.valueChange('Start', value, oldValue);
        },
        endValue(value, oldValue) {
            this.valueChange('End', value, oldValue);
        },
        inputValueStart(value, oldValue) { // input框值emit更新
            this.inputValueChange('Start', value, oldValue);
        },
        inputValueEnd(value, oldValue) { // input框值emit更新
            this.inputValueChange('End', value, oldValue);
        },
        currentValueStart(value, oldValue) {
            this.currentValueChange('Start', value, oldValue);
        },
        currentValueEnd(value, oldValue) {
            this.currentValueChange('End', value, oldValue);
        },
        type(value) {
            this.initFormatter();
            this.initPanelControl();
        },
        listeners() {
            delete this.$listeners['update:value'];
            return this.$listeners;
        },
    },
    created() {
        this.validateData();
        this.initFormatter();
        this.initPanelControl();

        this.debouncedChange = debounce(this.emitChange, 500);
    },
    methods: {
        inputValueChange(id, value, oldValue) {
            const changedName = 'changedInputValue' + id;
            const inputName = 'inputValue' + id;
            const currentName = 'currentValue' + id;
            const isValueValidate = () => {
                if (id === 'Start')
                    return !this.inputValueEnd || (this.inputValueEnd && isBefore(value, this.inputValueEnd));
                return !this.inputValueStart || (this.inputValueStart && isBefore(this.inputValueStart, value));
            };
            if (isEqual(value, this[changedName]))
                return;
            if (value !== undefined) {
                if (inDateRange(value, this.currentDateRange) && isValueValidate()) {
                    this[inputName] = format(value, this.currentFormatter);
                } else {
                    this[inputName] = oldValue;
                }
                this[changedName] = this[inputName]; // 防止循环赋值
            }
            this[currentName] = _parse(this[inputName]);
            this.$refs.input && this.$refs.input.forceUpdateValue && this.$refs.input.forceUpdateValue();
        },
        valueChange(id, value, oldValue) {
            if (!inDateRange(value, this.currentDateRange))
                throw new RangeError('initital date is out of dateRange');
            if (isEqual(value, oldValue))
                return;
            const inputName = 'inputValue' + id;
            const currentName = 'currentValue' + id;
            this[inputName] = format(value, this.currentFormatter);
            this[currentName] = _parse(value);
        },
        currentValueChange(id, value, oldValue) {
            if (isEqual(value, oldValue))
                return;
            const updateName = id === 'Start' ? 'startValue' : 'endValue';
            const inputName = 'inputValue' + id;

            this.$emit('update:' + updateName, this.formatValue(value));
            this[inputName] = value ? format(value, this.currentFormatter) : value;

            this.debouncedChange();
        },
        emitChange() {
            const value = [this.setDateTime(_parse(this.currentValueStart)), this.setDateTime(_parse(this.currentValueEnd))];
            this.$emit('change', {
                value,
                oldValue: this.oldValue,
                formattedValue: [this.inputValueStart, this.inputValueEnd],
            });
            this.oldValue = value;
        },
        onToggle($event) {
            this.$emit('toggle', $event);
            this.showPanel = $event.open;
        },
        onPanelDateSelect(event) {
            if (this.disabled || this.readonly)
                return;
            this.closePanel();

            const isStartEqual = isEqual(event.value[0], this.currentValueStart);
            const isEndEqual = isEqual(event.value[1], this.currentValueEnd);
            if (isStartEqual && isEndEqual)
                return;
            const value = event.value.concat([]).map((v) => this.setDateTime(v));
            this.$emit('select', {
                value,
                oldValue: [this.setDateTime(this.currentValueStart), this.setDateTime(this.currentValueEnd)],
                formattedValue: value.concat([]).map((v) => format(v, this.currentFormatter)),
            });
            if (!isStartEqual)
                this.currentValueStart = _parse(event.value[0]);
            if (!isEndEqual)
                this.currentValueEnd = _parse(event.value[1]);
        },
        validateData() {
            const tempDateRange = (this.dateRange || []).concat([]);
            validateDateRange(tempDateRange, this.minDate, this.maxDate);
            this.currentDateRange = tempDateRange;
            if (!inDateRange(this.currentValueStart, this.currentDateRange))
                throw new RangeError('initital startValue is out of dateRange');
            if (!inDateRange(this.currentValueEnd, this.currentDateRange))
                throw new RangeError('initital endValue is out of dateRange');
        },
        // date面板和time面板的跳转控制
        initFormatter() {
            // let res;
            // switch (this.type) {
            //     case 'year':
            //         res = /^(Y)+$/.exec(this.currentFormatter);
            //         this.currentFormatter = res && _isDate(_parse(new Date(), res[0])) ? res[0] : 'YYYY';
            //         break;
            //     case 'month':
            //         res = /^(Y+[^a-zA-Z]M+)$/.exec(this.currentFormatter);
            //         this.currentFormatter = res && _isDate(_parse(new Date(), res[0])) ? res[0] : 'YYYY-MM';
            //         break;
            //     case 'date':
            //         res = /^(Y+[^a-zA-Z]M+[^a-zA-Z]D+)$/.exec(this.currentFormatter);
            //         this.currentFormatter = res && _isDate(_parse(new Date(), res[0])) ? res[0] : 'YYYY-MM-DD';
            //         break;
            // }
            this.inputValueStart = this.currentValueStart ? format(this.currentValueStart, this.currentFormatter) : '';
            this.inputValueEnd = this.currentValueEnd ? format(this.currentValueEnd, this.currentFormatter) : '';
        },
        initPanelControl() {
            this.blockPanel = {};
            if (!/(Y)+/.exec(this.currentFormatter))
                this.blockPanel.year = true;
            else
                this.panelView = 'customYear';
            if (!/(M)+/.exec(this.currentFormatter))
                this.blockPanel.month = true;
            else
                this.panelView = 'customMonth';
            if (!/(D)+/.exec(this.currentFormatter))
                this.blockPanel.day = true;
            else
                this.panelView = 'customDay'; // 面板显示优先级： day > month > year
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
                    return format(date, this.currentFormatter);
                default:
                    return date;
            }
        },
        setDateTime(date) {
            return setDateTime(date, this.time);
        },
        closePanel() {
            this.$refs.popper.toggle(false);
        },
    },
};
