export default {
    name: 'u-link-list',
    childName: 'u-link-list-item',
    props: {
        maxCount: { type: Number, default: 3 },
        menuTitle: { type: String, default: '更多' },
        placement: { type: String, default: 'bottom-end' },
    },
    data() {
        return {
            itemVMs: [],
            outsideVMs: [],
            insideVMs: [],
        };
    },
    watch: {
        itemVMs(itemVMs) {
            if (itemVMs.length <= this.maxCount) {
                this.outsideVMs = itemVMs.slice(0, itemVMs.length);
                this.insideVMs = [];
            } else {
                this.outsideVMs = itemVMs.slice(0, this.maxCount);
                this.insideVMs = itemVMs.slice(this.maxCount, itemVMs.length);
            }
        },
    },
    created() {
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
