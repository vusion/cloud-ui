import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-select',
    props: {
        ellipsisDirection: { type: String, default: 'ltr' },
    },
    mixins: [Select],
};
