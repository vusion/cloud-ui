import { MEmitter } from 'proto-ui.vusion';

export const UDescListItem = {
    name: 'u-desc-list-item',
    parentName: 'u-desc-list',
    groupName: 'u-desc-list-group',
    mixins: [MEmitter],
    props: {
        label: String,
        labelSize: String,
    },
    data() {
        return {
            groupVM: undefined,
            parentVM: undefined,
        };
    },
    computed: {
        currentLabelSize() {
            return this.labelSize || (this.groupVM && this.groupVM.labelSize) || (this.parentVM && this.parentVM.labelSize) || 'auto';
        },
    },
    created() {
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};

export default UDescListItem;
