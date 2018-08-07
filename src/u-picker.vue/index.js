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
 * !time: type为date时设置默认的时分秒值。不建议使用，也不在文档暴露，建议在需要该功能的地方extends一个新组件，整理数据为想要的格式
 *
 * picker由input和panel组成，由外部传入。
 * input抛出input，focus, blur事件
 * panel抛出select, beforeSelect事件。 date都为Date格式，交由picker格式化
 * picker抛出toggle。before-select, select（由用户点击触发）. change(currentValue值变化触发)
 */
import format from 'date-fns/format';

export default {
    name: 'u-picker',
    props: {
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        editable: { type: Boolean, default: true }, // TODO
        placeholder: { type: [String, Array] },
        rangeSeparator: { type: String, default: '至' },
        value: { type: [String, Date, Number], default: undefined },
        panelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        fixOn: { type: String, default: 'blur', validator: (value) => ['input', 'blur'].includes(value) },
        type: { type: String, default: 'date', validator: (value) => ['calendar', 'year', 'month', 'date', 'time', 'datetime', 'daterange', 'datetimerang', 'timeRange'].includes(value) },
        formatter: { type: String, default: 'YYYY-MM-DD' },
        placement: { type: String, default: 'bottom-start' },
        dateRange: { type: Array },
        minDate: { type: [String, Date, Number] },
        maxDate: { type: [String, Date, Number] },
    },
    data() {
        return {
            showPanel: false,
            currentFormatter: this.formatter,
            currentDateRange: [],
            blockPanel: {}, // 不能跳转到的页面
            panelView: 'customDay',
            inputValue: '', // input框值
            currentValue: this.value,
            changedInputValue: null,
        };
    },
    computed: {
        allProps() {
            return Object.assign({}, this.$props, this.$data);// 也是响应式的
        },
    },
    created() {
        this.initFormatter && this.initFormatter(); // 根据type生成currentFormatter
        this.initPanelControl && this.initPanelControl(); // 根据currentFormatter判断可以跳入的页面

        this.initCurrentValue && this.initCurrentValue(this.value); // 根据value设置currentValue
        this.validateData && this.validateData(); // 根据minDate, maxDate和dateRange生成currentDateRange，并判断初始值是否在range内
    },
    methods: {
        onToggle($event) {
            this.$emit('toggle', $event);
            this.showPanel = $event.open;
        },
        /**
         * 返回与this.value同样类型的数据
         */
        formatValue(date) {
            const type = typeof (this.value || this.startValue);
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
        /* eslint no-empty-function: 0*/
        onPanelDateSelect() {},
    },
};
