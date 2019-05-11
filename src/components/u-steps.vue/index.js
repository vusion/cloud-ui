import { USteps as OSteps } from 'proto-ui.vusion';

export const USteps = {
    name: 'u-steps',
    extends: OSteps,
    props: {
        counter: { type: Boolean, default: true },
        layout: { type: String, default: 'block' },
    },
};

export { UStep } from './step.vue';

export default USteps;
