import i18n from './i18n';

export default {
    name: 'u-link-list',
    childName: 'u-link-list-item',
    i18n,
    props: {
        maxCount: { type: Number, default: 3 },
        menuTitle: { type: String, default() { return this.$t('more'); } },
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
        itemVMs() {
            this.watchValue();
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
    methods: {
        watchValue() {
            const itemVMs = this.itemVMs.filter((itemVM) => !itemVM.hidden);
            if (itemVMs.length <= this.maxCount) {
                this.outsideVMs = itemVMs.slice(0, itemVMs.length);
                this.insideVMs = [];
            } else {
                this.outsideVMs = itemVMs.slice(0, this.maxCount - 1);
                this.insideVMs = itemVMs.slice(this.maxCount - 1, itemVMs.length);
            }
        },
    },
};
