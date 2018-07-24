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
import format from 'date-fns/format';
import { dateValidadtor, validateDateRange, inDateRange, setDateTime } from './panel/date';

export default {
    name: 'u-picker',
    // inheritAttrs: false,
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        editable: { type: Boolean, default: true },
        placeholder: { type: [String, Array] },
        rangeSeparator: { type: String, default: '至' },
        value: { type: [String, Date, Number], default: undefined },
        panelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) },
        type: { type: String, default: 'date', validator: (value) => ['calendar', 'year', 'month', 'date', 'datetime', 'daterange', 'datetimerang'].includes(value) },
        formatter: { type: String, default: 'YYYY-MM-DD', validator: (value) => dateValidadtor(format(new Date(), value)) },
        placement: { type: String },
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
        return Object.assign({
            showPanel: false,
            hasInit: false,
            currentFormatter: this.formatter,
            currentDateRange: [],
            blockPanel: {}, // 不能跳转到的页面
            panelView: 'day',
            inputValue: '', // input框值
            currentValue: this.value,
        });
    },
    computed: {
        init() { // 控制panel mount时机 ??? 干啥的
            if (this.hasInit)
                return true;
            if (this.showPanel) {
                this.hasInit = true;
                return true;
            }
            return false;
        },
        allProps() {
            return Object.assign({}, this.$props, this.$attrs);// TODO: 可能不是响应式的？
        },
    },
    watch: {
        value(value, oldValue) {
            if (!inDateRange(value, this.currentDateRange))
                throw new RangeError('initital date is out of dateRange');
            if (isEqual(value, oldValue))
                return;

            this.$emit('change', {
                value,
                oldValue,
            });
            this.inputValue = format(value, this.currentFormatter);
        },
        inputValue(value, oldValue) { // input框值emit更新
            if (value !== undefined) {
                if (inDateRange(value, this.currentDateRange)) {
                    this.inputValue = format(value, this.currentFormatter);
                } else {
                    this.inputValue = oldValue;
                }
            }
            this.currentValue = this.inputValue;
            this.$refs.input.forceUpdateValue();
        },
        currentValue(value) {
            this.$emit('update:value', value);
            this.inputValue = value ? format(value, this.currentFormatter) : value;
        },
    },
    created() {
        this.validateData();

        this.initFormatter();
        this.initPanelControl();
    },
    methods: {
        onToggle($event) {
            this.$emit('toggle', $event);
            this.showPanel = $event.open;
        },
        onPanelDateSelect(event) {
            if (this.disabled || this.readonly)
                return;
            let cancel = false;
            this.$emit('before-select', {
                preventDefault: () => cancel = true,
            });

            if (cancel)
                return;

            this.currentValue = event.value;
            const _setDateTime = (date) => setDateTime(date, this.time);
            const value = _setDateTime(event.value);
            const formattedValue = this.formatValue(value);
            this.$emit('select', {
                value,
                oldValue: _setDateTime(event.oldValue),
                formattedValue,
            });
            this.closePanel();
        },
        validateData() {
            this.currentDateRange = validateDateRange(this.dateRange, this.minDate, this.maxDate);
            if (!inDateRange(this.currentValue, this.currentDateRange))
                throw new RangeError('initital date is out of dateRange');
        },
        // date面板和time面板的跳转控制
        initFormatter() {
            let res;
            switch (this.type) {
                case 'year':
                    res = /(Y)+/.exec(this.currentFormatter);
                    this.currentFormatter = res ? res[0] : 'YYYY';
                    break;
                case 'month':
                    res = /(M)+/.exec(this.currentFormatter);
                    this.currentFormatter = res ? res[0] : 'MM';
                    break;
                case 'day':
                    res = /(D)+/.exec(this.currentFormatter);
                    this.currentFormatter = res ? res[0] : 'DD';
                    break;
            }
            this.inputValue = format(this.currentValue, this.currentFormatter);
        },
        initPanelControl() {
            this.blockPanel = {};
            if (!/(Y)+/.exec(this.currentFormatter))
                this.blockPanel.year = true;
            else
                this.showPanel = 'year';
            if (!/(M)+/.exec(this.currentFormatter))
                this.blockPanel.month = true;
            else
                this.showPanel = 'month';
            if (!/(D)+/.exec(this.currentFormatter))
                this.blockPanel.day = true;
            else
                this.showPanel = 'day'; // 面板显示优先级： day > month > year
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
        closePanel() {
            this.$refs.popper.toggle(false);
        },
    },
};
