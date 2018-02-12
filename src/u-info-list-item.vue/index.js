import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-info-list-item',
    parentName: 'u-info-list',
    groupName: 'u-info-list-group',
    mixins: [Emitter],
    props: {
        label: String,
    },
    data() {
        return {
            groupVM: undefined,
            parentVM: undefined,
        };
    },
    computed: {
        currentColumn() {
            if (this.groupVM && this.groupVM.currentColumn) {
                return this.groupVM.currentColumn;
            } else if (this.parentVM && this.parentVM.column) {
                return this.parentVM.column;
            } else {
                return 'auto';
            }
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
