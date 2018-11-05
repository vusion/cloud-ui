import Select from 'proto-ui.vusion/src/u-select.vue';
import i18n from './i18n';

export default {
    name: 'u-table-select',
    i18n,
    props: {
        title: {
            type: String,
            default() { this.$t('title'); },
        },
        value: [String, Number, Boolean],
        data: Array,
        placement: {
            type: String,
            default: 'bottom-start',
        },
    },
    childName: 'u-table-select-item',
    mixins: [Select],
};
