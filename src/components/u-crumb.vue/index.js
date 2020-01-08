import { MParent } from '../m-parent.vue';

export const UCrumb = {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent],
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
};

export { UCrumbItem } from './item.vue';

export default UCrumb;
