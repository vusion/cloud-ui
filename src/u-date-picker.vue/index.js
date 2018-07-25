import Picker from '../u-picker.vue';
import pickerInput from '../u-picker.vue/input/u-picker-input.vue';
import pickPanel from '../u-picker.vue/panel/u-panel-control.vue';

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
};
