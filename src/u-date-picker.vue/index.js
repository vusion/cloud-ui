import Picker from '../u-picker.vue';
import timePanel from '../u-calendar.vue';

import format from 'date-fns/format';

import { dateValidadtor } from '../u-calendar.vue/date';

export default {
    name: 'u-date-picker',
    mixins: [Picker],
    props: {
        placeholder: { type: String, default: 'yyyy-mm-dd' },
        formatter: { type: String, default: 'YYYY-MM-DD' },
    },
    data() {
        return {
            panelComponent: timePanel,
            currentPlaceholder: this.placeholder,
        };
    },
    computed: {
        currentFormatter() {
            let temp = this.formatter;
            if (this.tag) {
                if (this.tag.charAt(0) === '0') // 不显示年
                    temp = temp.replace(/Y/g, '');
                if (this.tag.charAt(1) === '0') // 不显示月
                    temp = temp.replace(/([^\w]M|M)/g, '');
                if (this.tag.charAt(2) === '0') // 不显示日
                    temp = temp.replace(/([^\w]D|D)/g, '');
            }

            return temp;
        },
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
