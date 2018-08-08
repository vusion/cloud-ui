import isEqual from 'date-fns/is_equal';
import parse from 'date-fns/parse'; // null -> 1970 undefined -> Invalid Date
import panelDay from '../u-panel-day.vue';
import panelMonth from '../u-panel-month.vue';
import panelYear from '../u-panel-year.vue';
import panelTime from '../u-panel-time.vue';

import { _isDate } from '../date';

/**
 * value: 初始时间
 * panelDisplayValue: 初始panel显示时间，如有value，则显示value
 * dateRange: 二维数组[<min, max>...]
 * view: 初始化显示页面, 也是点击终止页面
 * blockPanel: 不可跳转到的view
 */
const viewJumpMap = {
    customYear: 'customMonth',
    customMonth: 'customDay',
    customTime: 'customTime',
};
export default {
    name: 'u-panel-control',
    props: {
        value: { type: [String, Date, Number] },
        panelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        dateRange: { type: Array },
        view: { type: String, default: 'day' }, // 日期部分最初显示的panel
        blockPanel: { type: Object, default: {} },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        type: { type: String },
    },
    data() {
        return {
            currentView: this.view,
            displayDate: undefined,
            selectedDate: undefined,
        };
    },
    computed: {
        allProps() {
            return Object.assign({}, this.$props, this.$attrs);
        },
    },
    watch: {
        view(value) {
            this.currentView = value;
        },
        value(value, oldValue) {
            this.initDate();
        },
        panelDisplayValue(value, oldValue) {
            if (!this.value)
                this.initDate();
        },
    },
    components: { // TODO: 用不到的component不加载
        customDay: panelDay,
        customMonth: panelMonth,
        customYear: panelYear,
        customTime: panelTime,
    },
    created() {
        this.initDate();
    },
    methods: {
        initDate() {
            // if (['time', 'timerange'].indexOf(this.type)) {
            //     return;
            // }
            const tempValue = this.value && _isDate(this.value) ? parse(this.value) : undefined;
            const tempDisplayValue = this.panelDisplayValue ? parse(this.panelDisplayValue) : new Date();
            this.displayDate = tempValue || tempDisplayValue;
            this.selectedDate = tempValue;
        },
        // 点击panel栅格区的年，月，日
        onDateClick(event) {
            if (!isEqual(event.date, this.displayDate))
                this.displayDate = event.date; // 点击后，panel中的展示日期会发生变化

            if (event.type === this.view)
                this.dateSelect(event.date);
            else
                this.toView(viewJumpMap[event.type]);
        },
        toView(viewName = this.view) {
            debugger;
            if (!this.blockPanel[viewName])
                this.currentView = viewName;
        },
        dateSelect(date) {
            if (this.disabled || this.readonly)
                return;
            this.$emit('select', {
                value: date,
                oldValue: this.selectedDate,
            });
            if (!isEqual(date, this.selectedDate))
                this.selectedDate = date; // 点击后，panel中的已选日期会发生变化
        },
        onChangePanel() {
            this.currentView = this.currentView === 'customTime' ? this.view : 'customTime';
        },
    },
};
