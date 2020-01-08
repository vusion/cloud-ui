import { UListView } from '../u-list-view.vue';

export const UCapsules = {
    name: 'u-capsules',
    childName: 'u-capsule',
    extends: UListView,
};

export { UCapsule } from './capsule.vue';
export { UCapsulesGroup } from './group.vue';

export default UCapsules;
