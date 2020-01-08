import { UTab } from '../../u-tabs.vue';

export const UStep = {
    name: 'u-step',
    parentName: 'u-steps',
    extends: UTab,
    props: {
        value: { type: Number, default: 0 },
    },
    computed: {
        index() {
            return this.parentVM.itemVMs.indexOf(this);
        },
    },
};

export default UStep;
