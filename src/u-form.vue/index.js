import Form from 'proto-ui.vusion/src/u-form.vue';

export default {
    name: 'u-form',
    mixins: [Form],
    computed: {
        extraSlots() {
            return this.validatorVMs.some((itemVM) => itemVM.$slots.extra);
        },
    },
};
