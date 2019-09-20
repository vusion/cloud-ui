import SidebarItem from 'proto-ui.vusion/src/u-sidebar-item.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [SidebarItem],
    methods: {
        watchActive(active) {
            if (active) {
                let groupVM = this.groupVM;
                while (groupVM) {
                    groupVM.toggle && groupVM.toggle(true, this.parentVM.particular);
                    groupVM = groupVM.parentVM;
                }
            }
        },
    },
};
