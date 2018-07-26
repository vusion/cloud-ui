import isEqual from 'date-fns/is_equal';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';
import { inDateRange, _isDate, validateDateRange } from '../u-picker.vue/panel/date';

export default {
    name: 'u-date-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: String, default: '请选择日期' },
        type: { type: String, default: 'date', validator: (value) => ['calendar', 'year', 'month', 'date'].includes(value) },
    },
    watch: {
        value(value, oldValue) {
            if (!this.inDateRange(value, this.currentDateRange))
                throw new RangeError('initital date is out of dateRange');
            if (isEqual(value, oldValue))
                return;

            this.inputValue = format(value, this.currentFormatter);
            this.currentValue = value;
        },
        inputValue(value, oldValue) { // input框值emit更新
            if (value === this.changedInputValue)
                return;
            if (value !== undefined) {
                if (this.inDateRange(value, this.currentDateRange)) {
                    this.inputValue = format(value, this.currentFormatter);
                } else {
                    this.inputValue = oldValue;
                }
                this.changedInputValue = this.inputValue; // 防止循环赋值
            }
            this.currentValue = this.inputValue;
            this.$refs.input.forceUpdateValue();
        },
        currentValue(value, oldValue) {
            this.$emit('update:value', this.formatValue(value));
            this.inputValue = value ? format(value, this.currentFormatter) : value;
            if (isEqual(value, oldValue))
                return;
            this.$emit('change', {
                value: this.setDateTime(parse(value)),
                oldValue: this.setDateTime(parse(oldValue)),
                formattedValue: this.inputValue,
            });
        },
        type(value) {
            this.initFormatter();
            this.initPanelControl();
        },
    },
    methods: {
        inDateRange,
        validateRange: validateDateRange,
        // date面板和time面板的跳转控制
        initFormatter() {
            let res;
            switch (this.type) {
                case 'year':
                    res = /^(Y)+$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY';
                    break;
                case 'month':
                    res = /^(Y+[^a-zA-Z]M+)$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY-MM';
                    break;
                case 'date':
                    res = /^(Y+[^a-zA-Z]M+[^a-zA-Z]D+)$/.exec(this.currentFormatter);
                    this.currentFormatter = res && _isDate(parse(new Date(), res[0])) ? res[0] : 'YYYY-MM-DD';
                    break;
            }
            this.inputValue = format(this.currentValue, this.currentFormatter);
        },
        initPanelControl() {
            this.blockPanel = {};
            if (!/(Y)+/.exec(this.currentFormatter))
                this.blockPanel.year = true;
            else
                this.panelView = 'year';
            if (!/(M)+/.exec(this.currentFormatter))
                this.blockPanel.month = true;
            else
                this.panelView = 'month';
            if (!/(D)+/.exec(this.currentFormatter))
                this.blockPanel.day = true;
            else
                this.panelView = 'day'; // 面板显示优先级： day > month > year
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
            const value = this.setDateTime(event.value);
            this.$emit('select', {
                value,
                oldValue: this.setDateTime(event.oldValue),
                formattedValue: format(value, this.currentFormatter),
            });
            this.closePanel();
        },
    },
};
