export const UInfoList = {
    name: 'u-info-list',
    groupName: 'u-info-list-group',
    childName: 'u-info-list-item',
    props: {
        column: { type: [String, Number], default: 3 },
        labelSize: String,
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

export { UInfoListGroup } from './group.vue';
export { UInfoListItem } from './item.vue';

export default UInfoList;
