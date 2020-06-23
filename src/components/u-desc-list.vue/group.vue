<template>
<div :class="$style.root">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.body">
        <slot></slot>
    </div>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'u-desc-list-group',
    parentName: 'u-desc-list',
    childName: 'u-desc-list-item',
    mixins: [MEmitter],
    props: { title: String, labelSize: String },
    data() {
        return { parentVM: undefined, itemVMs: [] };
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
        this.$dispatch(this.$options.parentName, 'add-group-vm', this);
    },
    destroyed() {
        this.$dispatch(this.$options.parentName, 'remove-group-vm', this);
    },
};
</script>

<style module>
.root:not(:first-child) {
    margin-top: 40px;
}

.title {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 16px;
    color: var(--color-base);
}
</style>
