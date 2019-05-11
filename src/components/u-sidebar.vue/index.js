import { USidebar as OSidebar } from 'proto-ui.vusion';

export const USidebar = {
    name: 'u-sidebar',
    extends: OSidebar,
    props: {
        particular: { type: Boolean, default: false },
    },
};

export { USidebarGroup } from './group.vue';
export { USidebarItem } from './item.vue';
export { USidebarDivider } from './divider.vue';

export default USidebar;
