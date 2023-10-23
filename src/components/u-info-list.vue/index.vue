<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-info-list',
    groupName: 'u-info-list-group',
    childName: 'u-info-list-item',
    props: {
        column: [String, Number],
        labelSize: String,
        repeat: { type: [String, Number], default: 3 },
        showHead: { type: Boolean, default: true },
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
/* 避免受嵌套的父级组件影响 */
.root { white-space: normal; }
</style>
