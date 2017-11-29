import ListViewItem from 'proto-ui.vusion/src/u-list-view-item.vue';
import directive from '../util/directives';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    mixins: [ListViewItem],
    props: {
        field: String,
    },
    directives: {
        'ellipsis-title': directive.ellipsistitle,
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
