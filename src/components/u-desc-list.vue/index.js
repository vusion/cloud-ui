export const UDescList = {
    name: 'u-desc-list',
    groupName: 'u-desc-list-group',
    childName: 'u-desc-list-item',
    props: {
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' },
    },
    data() {
        return {
            groupVMs: [],
            itemVMs: [],
        };
    },
    created() {
        this.$on('add-group-vm', (groupVM) => {
            groupVM.parentVM = this;
            this.groupVMs.push(groupVM);
        });
        this.$on('remove-group-vm', (groupVM) => {
            groupVM.parentVM = undefined;
            this.groupVMs.splice(this.groupVMs.indexOf(groupVM), 1);
        });
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
    },
};

export { UDescListGroup } from './group.vue';
export { UDescListItem } from './item.vue';

export default UDescList;
