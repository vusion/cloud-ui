import SelectItem from 'proto-ui.vusion/src/u-select-item.vue';

export default {
    name: 'u-select-item',
    mixins: [SelectItem],
    props: {
        flag: { type: String },
        layer: { type: String },
    },
};
