import { MParent } from '../m-parent.vue';

export const UCollapse = {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    mixins: [MParent],
    props: {
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
    methods: {
        onItemExpand(itemVM) {
            this.$emit('expand', {
                itemVM,
            }, this);
        },
        onItemCollapse(itemVM) {
            this.$emit('collapse', {
                itemVM,
            }, this);
        },
        expand(itemVM) {
            itemVM.expand();
        },
        collapse(itemVM) {
            itemVM.collapse();
        },
        expandAll() {
            this.itemVMs.forEach((itemVM) => itemVM.expand());
        },
        collapseAll() {
            this.itemVMs.forEach((itemVM) => itemVM.collapse());
        },
    },
};

export { UCollapseItem } from './item.vue';

export default UCollapse;
