<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    v-ellipsis-title>
    <slot></slot>
</div>
</template>

<script>
import { MComplexItem } from '../m-complex.vue';
// import { ellipsisTitle } from '../../../directives';

export default {
    name: 'u-list-view-item',
    parentName: 'u-list-view',
    groupName: 'u-list-view-group',
    extends: MComplexItem,
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    padding: var(--list-view-item-padding);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root:hover {
    background: var(--list-view-item-background-hover);
}

.root[readonly] {
    cursor: default !important;
    /* background: var(--list-view-item-background-readonly); */
}

.root[focused] {
    background: var(--list-view-item-background-focused);
}

.root[selected] {
    background: var(--list-view-item-background-selected);
    color: var(--list-view-item-color-selected);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--list-view-item-background-disabled);
    color: var(--list-view-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--list-view-item-background-selected-disabled);
}
</style>
