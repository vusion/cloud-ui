import Steps from '../u-steps.vue';

export default {
    name: 'u-selectable-steps',
    childName: 'u-selectable-step',
    extends: Steps,
    props: {
        readonly: { type: Boolean, default: false },
        counter: { type: Boolean, default: false },
        layout: { type: String, default: 'inline' },
    },
};
