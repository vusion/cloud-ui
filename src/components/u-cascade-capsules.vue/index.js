import { UCascadeSelect } from '../u-cascade-select.vue';

export const UCascadeCapsules = {
    name: 'u-cascade-capsules',
    extends: UCascadeSelect,
    props: {
        cancelable: { type: Boolean, default: false },
    },
};

export default UCascadeCapsules;
