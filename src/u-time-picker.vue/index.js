/**
 * value: 外部传入，可能为String, Date 或Number
 * currentValue: Date
 * inputValue:  format后的String 或 undefined
 */
import format from 'date-fns/format';

import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';

import { setTime, inDateRange, validateTimeRange, dateValidadtor, getTimeArr, _isDate } from '../u-picker.vue/panel/date';
import { isEqual, isDate } from 'date-fns';

export default {
    name: 'u-time-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: String, default: '请选择时间' },
        type: { type: String, default: 'time', validator: (value) => ['time'].includes(value) },
        formatter: { type: String, default: 'HH:mm:ss', validator: (value) => dateValidadtor(format(new Date(), 'YYYY-MM-DD') + ' ' + format(new Date(), value)) },
    },
    watch: {
        value(value, oldValue) {
            this.currentValue = value;
        },
        currentValue: {
            immediate: true,
            handler(value, oldValue) {
                if (!isDate(value)) {
                    this.initCurrentValue(value);
                    return;
                }
                const formatedValue = format(value, this.currentFormatter);
                this.$emit('update:value', formatedValue);
                this.inputValue = formatedValue;

                if (this.oldCurrentValue && isEqual(this.oldCurrentValue, value))
                    return;
                this.$emit('change', {
                    value: formatedValue,
                    oldValue: this.oldCurrentValue ? format(this.oldCurrentValue, this.currentFormatter) : undefined,
                });
                this.oldCurrentValue = value;
            },
        },
        inputValue(value, oldValue) {
            this.$nextTick(() => this.currentValue = value); // 先更改input的value，再更正value
        },
    },
    methods: {
        inDateRange,
        validateRange: validateTimeRange,
        validateData() {
            const tempDateRange = (this.dateRange || []).concat([]);
            this.validateRange && this.validateRange(tempDateRange, this.minDate, this.maxDate);
            // dateRange转为Date格式
            const dateRange = [];
            tempDateRange.forEach((range) => {
                dateRange.push([this.generateDate(range[0]), this.generateDate(range[1])]);
            });
            this.currentDateRange = dateRange;
            if (!this.inDateRange(this.currentValue, this.currentDateRange))
                throw new RangeError('initital time is out of dateRange');
        },
        initFormatter() {
            ['hour', 'minute', 'second'].forEach((attr) => {
                this.blockPanel[attr] = false;
            });
            if (!this.currentFormatter.includes('H')) {
                this.blockPanel.hour = true;
            }
            if (!this.currentFormatter.includes('m')) {
                this.blockPanel.minute = true;
            }
            if (!this.currentFormatter.includes('s')) {
                this.blockPanel.second = true;
            }
            this.panelView = 'customTime';
        },
        // 根据formatter设置currentValue
        initCurrentValue(value) {
            this.currentValue = this.generateDate(value);
        },
        generateDate(date) {
            if (!date)
                return undefined;
            if (_isDate(date))
                return date;
            const timeArr = getTimeArr(date);
            let index = 0;
            ['hour', 'minute', 'second'].forEach((attr) => {
                if (!this.blockPanel[attr])
                    date = setTime(date, attr, timeArr[index++] || 0); // 转为Date
            });
            return date;
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

            this.$emit('select', {
                value: format(event.value, this.currentFormatter),
                oldValue: format(this.currentValue, this.currentFormatter),
            });
            this.currentValue = event.value;
            this.closePanel();
        },
    },
};
