import format from 'date-fns/format';

import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';

import { inDateTimeRange, dateValidadtor, _isDate, validateDateRange } from '../u-picker.vue/panel/date';
import { isEqual, isDate, parse } from 'date-fns';

export default {
    name: 'u-datetime-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: String, default: 'yyyy-mm-dd hh:mm:ss' },
        type: { type: String, default: 'datetime' },
        formatter: { type: String, default: 'YYYY-MM-DD HH:mm:ss', validator: (value) => dateValidadtor(format(new Date(), value)) },
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
        validateRange: validateDateRange,
        validateData() {
            const tempDateRange = (this.dateRange || []).concat([]);
            this.validateRange && this.validateRange(tempDateRange, this.minDate, this.maxDate);
            // dateRange转为Date格式
            const dateRange = [];
            tempDateRange.forEach((range) => {
                dateRange.push([this.generateDate(range[0]), this.generateDate(range[1])]);
            });
            this.currentDateRange = dateRange;
            if (!inDateTimeRange(this.currentValue, this.currentDateRange, 'second'))
                throw new RangeError('initital date is out of dateRange');
        },
        initFormatter() {
            ['hour', 'minute', 'second', 'year', 'month', 'day'].forEach((attr) => {
                this.blockPanel[attr] = false;
            });
            if (!this.currentFormatter.includes('H')) {
                this.panelView = 'customTime';
                this.blockPanel.hour = true;
            }
            if (!this.currentFormatter.includes('m')) {
                this.panelView = 'customTime';
                this.blockPanel.minute = true;
            }
            if (!this.currentFormatter.includes('s')) {
                this.panelView = 'customTime';
                this.blockPanel.second = true;
            }
            if (!this.currentFormatter.includes('Y')) {
                this.panelView = 'customYear';
                this.blockPanel.year = true;
            }
            if (!this.currentFormatter.includes('M')) {
                this.panelView = 'customMonth';
                this.blockPanel.month = true;
            }
            if (!this.currentFormatter.includes('D')) {
                this.panelView = 'customDay';
                this.blockPanel.day = true;
            }
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

            return parse(date); // parse('2018-08-08 15:46:33') parse('2018-08-08 15:46') parse('2018-08-08 15') 都能解析正确
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
