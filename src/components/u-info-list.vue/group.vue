<template>
<div :class="$style.root">
    <div :class="$style.head">
        <div :class="$style.title" vusion-slot-name="title"><slot name="title">{{ title }}</slot></div>
        <div :class="$style.extra" vusion-slot-name="extra"><slot name="extra"></slot></div>
    </div>
    <div :class="$style.body" vusion-slot-name="default">
        <slot></slot>
    </div>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'u-info-list-group',
    parentName: 'u-info-list',
    childName: 'u-info-list-item',
    mixins: [MEmitter],
    props: {
        title: String,
        column: [String, Number],
        labelSize: String,
        repeat: [String, Number],
    },
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
.root:not(:last-child) {
    margin-bottom: 20px;
}

.head {
    padding: 6px 20px;
    margin: 0;
    line-height: 30px;
    color: var(--color-base);
    background-color: var(--background-color-light);
    border-bottom: 1px solid var(--border-color-base);
}

.head::after {
    content: '';
    clear: both;
}

.title {
    display: inline-block;
}

.extra {
    float: right;
}

.body {
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
}
</style>
