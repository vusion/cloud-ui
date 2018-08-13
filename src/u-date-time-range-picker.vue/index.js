import Picker from '../u-picker-range.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input-range.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control-range.vue';

export default {
    name: 'u-date-time-range-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: Array, default: () => ['开始日期时间', '结束日期时间'] },
        type: { type: String, default: 'datetimerange', validator: (value) => ['datetimerange'].includes(value) },
        formatter: { type: String, default: 'YYYY-MM-DD HH:mm:ss' },
    },
};
