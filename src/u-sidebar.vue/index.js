export default {
    name: 'u-sidebar',
    props: {
        accordion: { type: Boolean, default: false },
    },
    data() {
        return {
            menuVMs: [],
        };
    },
    created() {
        this.$on('add-menu-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.menuVMs.push(itemVM);
        });
        this.$on('remove-menu-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.menuVMs.splice(this.menuVMs.indexOf(itemVM), 1);
        });
    },
};
