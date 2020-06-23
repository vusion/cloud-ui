<template>
<div :class="$style.root" :layout="layout">
    <slot></slot>
</div></template>

<script>
export default {
    name: 'u-desc-list',
    groupName: 'u-desc-list-group',
    childName: 'u-desc-list-item',
    props: {
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' },
    },
    data() {
        return { groupVMs: [], itemVMs: [] };
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
</script>

<style module>
.root {}

.root[layout="inline"] .item {
    display: inline-block;
}

.root[layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-large);
}

.root[layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-large);
}

.root[layout="inline"] .item::before, .root[layout="inline"] .item::after {
    display: block;
}

.root[layout="inline"]::after {
    display: block;
    content: '.';
    clear: both;
    height: 0;
    visibility: hidden;
}

.root[layout="inline"] .item_value {
    max-width: none;
}

.root[gap="none"][layout="block"] .item, .root[gap="none"][layout="inline"] .item  {
    margin-bottom: 0;
}

.root[gap="none"][layout="block"] .item_label, .root[gap="none"][layout="inline"] .item_label {
    padding-right: 0;
}

.root[gap="none"] .group {
    margin-top: 0;
}

.root[gap="none"] .group_title {
    margin-bottom: 0;
}

.root[gap="small"][layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-base);
}

.root[gap="small"][layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-base);
}

.root[gap="small"][layout="inline"] .item > .item_label { padding-right: 10px; }

.root[gap="large"][layout="block"] .item:not(:last-child) {
    margin-bottom: var(--space-huge);
}

.root[gap="large"][layout="inline"] .item:not(:last-child) {
    margin-right: var(--space-huge);
}
</style>
