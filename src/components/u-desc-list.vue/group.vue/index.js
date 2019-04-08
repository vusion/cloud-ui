import { MEmitter } from 'proto-ui.vusion';

export const UDescListGroup = {
    name: 'u-desc-list-group',
    parentName: 'u-desc-list',
    childName: 'u-desc-list-item',
    mixins: [MEmitter],
    props: {
        title: String,
        labelSize: String,
    },
    data() {
        return {
            parentVM: undefined,
            itemVMs: [],
        };
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

export default UDescListGroup;
