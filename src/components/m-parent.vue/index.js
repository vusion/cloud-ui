export const MParent = {
    name: 'm-parent',
    groupName: 'm-group',
    childName: 'm-child',
    data() {
        return {
            groupVMs: [],
            itemVMs: [],
        };
    },
};

export { MChild } from './m-child.vue';

export default MParent;
