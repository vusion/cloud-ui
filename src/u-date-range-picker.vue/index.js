import Picker from '../u-range-picker.vue';
import panel from '../u-calendar-day.vue';

import format from 'date-fns/format';

import { dateValidadtor } from '../u-calendar.vue/date';

export default {
    name: 'u-date-range-picker',
    mixins: [Picker],
    props: {
        placeholders: { type: Array, default: () => ['开始日期', '结束日期'] },
        formatter: { type: String, default: 'YYYY-MM-DD' },
    },
    data() {
        return {
            panelComponent: panel,
            currentPlaceholders: this.placeholders,
            currentFormatter: this.formatter,
        };
    },
    watch: {
        displayValue() {
            this.$refs && this.$refs.popper.toggle(false);
        },
    },
    methods: {
        format(date) {
            return format(date, this.currentFormatter);
        },
        validate: dateValidadtor,
        adjust(value) {
            if ((this.maxDate && value > this.format(this.maxDate)) || (this.minDate && value < this.format(this.minDate)))
                value = undefined;
            return value;
        },
    },
};
