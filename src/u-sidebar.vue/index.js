export default {
    name: 'u-sidebar',
    props: {
        accordion: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
        };
    },
    created() {
        this.$on('add-menu-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-menu-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
};
