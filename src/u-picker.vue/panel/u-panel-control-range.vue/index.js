import parse from 'date-fns/parse'; // null -> 1970 undefined -> Invalid Date
import isEqual from 'date-fns/is_equal';
import format from 'date-fns/format';
import addMonths from 'date-fns/add_months';
import panelDay from '../u-panel-day.vue';
import panelMonth from '../u-panel-month.vue';
import panelYear from '../u-panel-year.vue';
import panelTime from '../u-panel-time.vue';

import { sortIncrease } from '../date';
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
        startValue: { type: [String, Date, Number] },
        endValue: { type: [String, Date, Number] },
        panelDisplayValue: { type: [String, Date, Number], default: () => new Date() },
        dateRange: { type: Array },
        view: { type: String, default: 'day' },
        blockPanel: { type: Object, default: {} },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        showPanel: { type: Boolean },
        type: { type: String },
    },
    data() {
        return {
            currentViewStart: this.view,
            currentViewEnd: this.view,
            displayDateStart: undefined,
            displayDateEnd: undefined,
            selectedDates: [], // 选中的值
            hoverDate: undefined,
            panelDisplayDateAdjust: true, // 显示日期是否相邻月数
            currentTimeDateStart: undefined, // 点击选择的时间面板日期(时间需要点击确认才生效))
            currentTimeDateEnd: undefined,
        };
    },
    computed: {
        allProps() {
            return Object.assign({}, this.$props, this.$attrs);
        },
        hasTime() {
            return this.type.includes('time');
        },
    },
    watch: {
        view(value) {
            this.currentViewStart = value;
            this.currentViewEnd = value;
        },
        startValue(value, oldValue) {
            this.initDate();
        },
        endValue(value, oldValue) {
            this.initDate();
        },
        panelDisplayValue(value, oldValue) {
            this.initDate();
        },
        displayDateStart(value) {
            this.adjustDisplayDate('Start');
        },
        displayDateEnd(value) {
            this.adjustDisplayDate('End');
        },
        currentViewStart(value) {
            this.repositionTimePanel();
        },
        showPanel(value) {
            if (value) {
                this.repositionTimePanel();
            }
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
            if (isEqual(this.recordStartValue, this.startValue) && isEqual(this.recordEndValue, this.endValue))
                return;
            this.recordStartValue = this.startValue;
            this.recordEndValue = this.endValue;
            const tempValueStart = this.startValue ? parse(this.startValue) : undefined;
            const tempDisplayValueStart = this.panelDisplayValue ? parse(this.panelDisplayValue) : new Date();
            this.displayDateStart = tempValueStart || tempDisplayValueStart;
            const tempValueEnd = this.endValue ? parse(this.endValue) : undefined;
            const tempDisplayValueEnd = addMonths(this.displayDateStart, 1);
            this.displayDateEnd = tempValueEnd || tempDisplayValueEnd;

            this.selectedDates = [];
            tempValueStart && this.selectedDates.push(tempValueStart);
            tempValueEnd && this.selectedDates.push(tempValueEnd);
        },
        // 点击panel栅格区的年，月，日
        onDateClick(event, id) {
            const displayName = 'displayDate' + id;
            const viewName = 'toView' + id;
            if (!isEqual(event.date, this[displayName]))
                this[displayName] = event.date; // 点击后，panel中的展示日期会发生变化

            if (event.type === this.view)
                this.dateSelect(event.date, id);
            else
                this[viewName](viewJumpMap[event.type]);
        },
        toViewStart(viewName) {
            if (!this.blockPanel[viewName])
                this.currentViewStart = viewName;
        },
        toViewEnd(viewName) {
            if (!this.blockPanel[viewName])
                this.currentViewEnd = viewName;
        },
        formatSelectedDateWithTime() {
            this.selectedDates = this.selectedDates.map((date, index) => {
                const tempDate = index ? this.currentTimeDateEnd : this.currentTimeDateStart;
                return parse(format(date, 'YYYY-MM-DD') + ' ' + format(tempDate, 'HH:mm:ss'));
            });
        },
        dateSelect(date, id) {
            if (this.disabled || this.readonly || this.cancelSelect())
                return;

            const selectName = 'selectedDate' + id;
            this.$emit('selectPanelDate', {
                value: date,
            });
            if (this.selectedDates.length === 2) {
                this.selectedDates = [date];
            } else {
                this.selectedDates.push(date);
                // 已选中两个元素： 1. 选中两个相同的日期，删除一个； 2. 选中两个不同的日期，排序后emit select
                if (this.selectedDates.length === 2) {
                    if (isEqual.apply({}, this.selectedDates)) {
                        this.selectedIndex = 1;
                    } else {
                        !this.hasTime && this.emitSelect();
                    }
                }
            }

            if (!isEqual(date, this[selectName])) {
                this[selectName] = date; // 点击后，panel中的已选日期会发生变化
                this.adjustDisplayDate(id);
            }
        },
        cancelSelect() {
            let cancel = false;
            this.$emit('before-select', { // !before-select应该是before单个select还是整体？
                preventDefault: () => cancel = true,
            });

            return cancel;
        },
        emitSelect() {
            sortIncrease(this.selectedDates);
            this.$emit('select', {
                value: this.selectedDates,
            });
        },
        // 日期选择后，保证第二个页面的DisplayDate比第一个大至少一月
        adjustDisplayDate(id) {
            if (format(this.displayDateEnd, 'YYYY-MM') <= format(this.displayDateStart, 'YYYY-MM')) {
                if (id === 'Start') {
                    this.displayDateEnd = addMonths(this.displayDateStart, 1);
                } else {
                    this.displayDateStart = addMonths(this.displayDateEnd, -1);
                }
            }
            const tempFormat = 'YYYYMM';
            this.panelDisplayDateAdjust = format(this.displayDateEnd, tempFormat) - format(this.displayDateStart, tempFormat) <= 1;
        },
        onChangePanel() {
            this.currentViewStart = this.currentViewStart === 'customTime' ? this.view : 'customTime';
            this.currentViewEnd = this.currentViewStart;
        },
        onConfirm() {
            if (this.selectedDates.length === 2) {
                if (this.disabled || this.readonly || this.cancelSelect())
                    return;
                this.formatSelectedDateWithTime();
                this.emitSelect();
            }
        },
        repositionTimePanel() {
            if (this.currentViewStart === 'customTime') {
                this.$nextTick(() => {
                    ['Start', 'End'].forEach((name) => {
                        name = 'panel' + name;
                        this.$refs && this.$refs[name] && this.$refs[name].reposition();
                    });
                });
            }
        },
    },
};
