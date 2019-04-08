import Steps from 'proto-ui.vusion/src/u-steps.vue';

export default {
    name: 'u-steps',
    extends: Steps,
    props: {
        counter: { type: Boolean, default: true },
        layout: { type: String, default: 'block' },
    },
};
