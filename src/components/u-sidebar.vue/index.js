import MSinglex from '../m-singlex.vue';
import { MGroupParent } from '../m-group.vue';

export const USidebar = {
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    mixins: [MSinglex, MGroupParent],
    props: {
        router: { type: Boolean, default: true },
        particular: { type: Boolean, default: false },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};

export { USidebarItem } from './item.vue';
export { USidebarGroup } from './group.vue';
export { USidebarDivider } from './divider.vue';

export default USidebar;
