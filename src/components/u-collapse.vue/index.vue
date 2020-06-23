<template>
<div :class="$style.root" :appear="appear">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';

export default {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    mixins: [MParent],
    props: {
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        appear: String,
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
    methods: {
        onItemExpand(itemVM) {
            this.$emit('expand', { itemVM }, this);
        },
        onItemCollapse(itemVM) {
            this.$emit('collapse', { itemVM }, this);
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
</script>

<style module>
.root {
    border: var(--collapse-border-width) solid var(--collapse-border-color);
    border-radius: var(--collapse-border-radius);
}

.root[appear="simple"] {
    border: none;
    border-top: var(--collapse-border-width) solid var(--collapse-border-color);
    border-bottom: var(--collapse-border-width) solid var(--collapse-border-color);
}

.root[appear="simple"] .item_head {
    background: transparent;
    /* border-top: var(--collapse-border-width) solid var(--collapse-border-color); */
}

.root[appear="simple"] .item_body {
    border-top: none;
}

.root[size="small"] .item_head {
    padding: var(--collapse-item-head-padding-small);
}

.root[size="small"] .item_expander {
    width: var(--collapse-item-expander-size-small);
    height: var(--collapse-item-expander-size-small);
    line-height: var(--collapse-item-expander-size-small);
}

.root[size="mini"] .item_head {
    padding: var(--collapse-item-head-padding-mini);
}

.root[size="mini"] .item_expander {
    width: var(--collapse-item-expander-size-mini);
    height: var(--collapse-item-expander-size-mini);
    line-height: var(--collapse-item-expander-size-mini);
}

.root[size="mini"] .item_content {
    padding: var(--collapse-item-content-padding-mini);
}

.root[display="full"] {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.root[display="filled"] {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.root[display="filled"] .item {
    flex: none;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.root[display="filled"] .item[expanded] {
    flex: auto;
}

.root[display="filled"] .item_head {
    flex: none;
}

.root[display="filled"] .item_body {
    flex: auto;
    overflow: auto;
}
</style>
