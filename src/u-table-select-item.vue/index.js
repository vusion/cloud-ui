import SelectItem from 'proto-ui.vusion/src/u-select-item.vue';

export default {
    name: 'u-table-select-item',
    mixins: [SelectItem],
    parentName: 'u-table-select',
    props: {
        flag: { type: String },
    },
};
