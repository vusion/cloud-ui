import { MChild } from '../../m-parent.vue';

export const UCollapseItem = {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [MChild],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    methods: {
        expand() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (this.currentExpanded)
                return;

            if (this.$emitPrevent('before-expand', {}, this))
                return;

            this.currentExpanded = true;
            this.$emit('update:expanded', true, this);

            if (this.parentVM.accordion) {
                this.parentVM.itemVMs.forEach((itemVM) => {
                    if (itemVM !== this && itemVM.currentExpanded)
                        itemVM.collapse();
                });
            }

            this.$emit('expand', {}, this);
            this.parentVM.onItemExpand(this);
        },
        collapse() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (!this.currentExpanded)
                return;

            if (this.$emitPrevent('before-collapse', {}, this))
                return;

            this.currentExpanded = false;
            this.$emit('update:expanded', false, this);

            this.$emit('collapse', {}, this);
            this.parentVM.onItemCollapse(this);
        },
        toggle(expanded) {
            if (expanded === undefined)
                expanded = !this.currentExpanded;
            expanded ? this.expand() : this.collapse();
        },
    },
};

export default UCollapseItem;
