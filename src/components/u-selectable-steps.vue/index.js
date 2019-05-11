import { USteps } from '../u-steps.vue';

export const USelectableSteps = {
    name: 'u-selectable-steps',
    childName: 'u-selectable-step',
    extends: USteps,
    props: {
        readonly: { type: Boolean, default: false },
        counter: { type: Boolean, default: false },
        layout: { type: String, default: 'inline' },
    },
};

export { USelectableStep } from './step.vue';

export default USelectableSteps;
