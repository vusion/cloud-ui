import { MParent } from '../m-parent.vue';

export const UList = {
    name: 'u-list',
    childName: 'u-list-item',
    mixins: [MParent],
    props: {
        type: String,
    },
};

export { UListItem } from './item.vue';

export default UList;
