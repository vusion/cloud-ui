import ListViewItem from 'u-list-view-item.vue';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    mixins: [ListViewItem],
    created() {
        const parentVM = this.$parent.parentVM.$parent;
        parentVM.$emit('add-item', this);
        if (parentVM.selectedItem === undefined)
            parentVM.selectedItem = this;
    },
    destroyed() {
        const parentVM = this.$parent.parentVM.$parent;
        parentVM.$emit('remove-item', this);
    },
};
