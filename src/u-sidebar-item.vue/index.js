import SidebarItem from 'proto-ui.vusion/src/u-sidebar-item.vue';

export default {
    name: 'u-sidebar-item',
    mixins: [SidebarItem],
    // watch: {
    //     $route(to, from) {
    //         if (!this.to || !this.$router)
    //             return;

    //         const location = this.$router.resolve(this.to).location;
    //         const active = this.exact ? location.path === to.path : to.path.startsWith(location.path);
    //         active && this.groupVM && this.groupVM.toggle(true);
    //     },
    // },
    methods: {
        watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true, this.parentVM.mode);
            if (active)
                this.parentVM.select(this);
        },
    },
};
