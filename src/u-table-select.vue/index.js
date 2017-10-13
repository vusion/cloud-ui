import ListView from 'u-list-view.vue';

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
    childName: 'u-select-item',
    mixins: [ListView],
};
