import { Emitter } from 'proto-ui.vusion';

export default {
    name: 'u-info-list-group',
    parentName: 'u-info-list',
    childName: 'u-info-list-item',
    mixins: [Emitter],
    props: {
        title: String,
        column: [String, Number],
    },
    data() {
        return {
            parentVM: undefined,
            itemVMs: [],
        };
    },
    computed: {
        currentColumn() {
            return this.column === undefined && this.parentVM ? this.parentVM.column : this.column;
        },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.groupVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.groupVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.dispatch(this.$options.parentName, 'add-group-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-group-vm', this);
    },
};
