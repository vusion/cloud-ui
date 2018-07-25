import Picker from '../u-picker-range.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input-range.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control-range.vue';

export default {
    name: 'u-date-range-picker',
    extends: Picker,
    components: {
        'u-custom-picker-input': pickerInput,
        'u-custom-panel': pickPanel,
    },
    props: {
        placeholder: { type: Array, default: () => ['开始日期', '结束日期'] },
        type: { type: String, default: 'daterange', validator: (value) => ['daterange'].includes(value) },
    },
};
