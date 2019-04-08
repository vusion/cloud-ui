import SidebarItem from 'proto-ui.vusion/src/u-sidebar-item.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [SidebarItem],
    methods: {
        watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true, this.parentVM.particular);
        },
    },
};
