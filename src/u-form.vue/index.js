import Form from 'proto-ui.vusion/src/u-form.vue';

export default {
    name: 'u-form',
    mixins: [Form],
    computed: {
        extraLabel() {
            return this.itemVMs.some((item) => item.$slots.extra);
        },
    },
};
