import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-select',
    extends: Select,
    props: {
        ellipsisDirection: { type: String, default: 'ltr' },
    },
};
