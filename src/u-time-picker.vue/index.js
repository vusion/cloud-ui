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
        timeValidator,
        adjustTime(value) {
            if (value > formatTime(this.maxTime) || value < formatTime(this.minTime))
                value = undefined;
            return value;
        },
    },
};
