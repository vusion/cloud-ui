import { UCascadeSelect } from 'proto-ui.vusion';

export const UCascadeCapsules = {
    name: 'u-cascade-capsules',
    extends: UCascadeSelect,
    props: {
        cancelable: { type: Boolean, default: false },
    },
};

export default UCascadeCapsules;
