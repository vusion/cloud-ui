import format from 'date-fns/format';

import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';

import { inDateTimeRange, dateValidadtor, getValidDate, validateDateRange } from '../u-picker.vue/panel/date';
import { parse } from 'date-fns';

export default {
    name: 'u-date-time-picker',
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
    methods: {
        validateRange: validateDateRange,
        validateData() {
            const tempDateRange = (this.dateRange || []).concat([]);
            this.validateRange && this.validateRange(tempDateRange, this.minDate, this.maxDate);
            // dateRange转为Date格式
            const dateRange = [];
            tempDateRange.forEach((range) => {
                dateRange.push([getValidDate(range[0]), getValidDate(range[1])]);
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
            this.currentValue = getValidDate(value);
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
            const valueDate = event.value ? parse(event.value) : undefined;
            this.$emit('select', {
                value: valueDate,
                oldValue: this.currentValue,
                formattedValue: event.value ? format(event.value, this.currentFormatter) : undefined,
            });
            this.currentValue = valueDate;
            this.closePanel();
        },
    },
};
