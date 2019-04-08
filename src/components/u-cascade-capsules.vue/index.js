import CascadeSelect from 'proto-ui.vusion/src/u-cascade-select.vue';

export default {
    name: 'u-cascade-capsules',
    mixins: [CascadeSelect],
    props: {
        cancelable: { type: Boolean, default: false },
    },
};
