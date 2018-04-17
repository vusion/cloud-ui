import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-table-select',
    props: {
        title: {
            type: String,
            default: '标题',
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
