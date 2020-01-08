import { UListViewItem } from '../../u-list-view.vue';

export const UCapsule = {
    name: 'u-capsule',
    parentName: 'u-capsules',
    extends: UListViewItem,
    props: {
        label: String,
    },
};

export default UCapsule;
