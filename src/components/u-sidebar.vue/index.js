import { USidebar as OSidebar } from 'proto-ui.vusion';

export const USidebar = {
    name: 'u-sidebar',
    extends: OSidebar,
    props: {
        particular: { type: Boolean, default: false },
    },
};

export * from './group.vue';
export * from './item.vue';
export * from './divider.vue';

export default USidebar;
