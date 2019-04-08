import { USidebarItem as OSidebarItem } from 'proto-ui.vusion';

export const USidebarItem = {
    name: 'u-sidebar-item',
    extends: OSidebarItem,
    methods: {
        watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true, this.parentVM.particular);
        },
    },
};

export default USidebarItem;
