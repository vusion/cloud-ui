import Picker from '../u-picker.vue';
import timePanel from './panel.vue';
import { formatTime, timeValidator } from './util';

export default {
    name: 'u-time-picker',
    mixins: [Picker],
    props: {
        placeholder: { type: String, default: '选择时间' },
    },
    data() {
        return {
            panelComponent: timePanel,
            currentPlaceholder: this.placeholder,
        };
    },
    methods: {
        format: formatTime,
        validate: timeValidator,
        adjust(value) {
            if (value > this.format(this.maxTime) || value < this.format(this.minTime))
                value = undefined;
            return value;
        },
    },
};
