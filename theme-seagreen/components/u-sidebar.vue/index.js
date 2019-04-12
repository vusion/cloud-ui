import { USidebar as OSidebar } from '../../../src/components/u-sidebar.vue';

export const USidebar = {
    name: 'u-sidebar',
    extends: OSidebar,
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';

export default USidebar;
