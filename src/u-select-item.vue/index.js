import ListViewItem from 'u-list-view-item.vue';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    mixins: [ListViewItem],
    props: {
        field: String,
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
    },
    created() {
        const parentVM = this.$parent.parentVM.$parent;
        parentVM.$emit('add-item-vm', this);
    },
    destroyed() {
        const parentVM = this.$parent.parentVM.$parent;
        parentVM.$emit('remove-item-vm', this);
    },
};
