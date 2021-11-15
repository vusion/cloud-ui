<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    v-ellipsis-title>
    <slot></slot>
</div>
</template>

<script>
import { MComplexItem } from '../m-complex.vue';

export default {
    name: 'u-table-view-filter',
    parentName: 'u-table-view-filters',
    extends: MComplexItem,
};
</script>

<style module>
.root {
    /* @Private */
    display: inline-block;
    cursor: var(--cursor-pointer);

    /* @Public */
    padding: 4px 12px;
}

.root:hover {
    background: var(--table-view-filter-item-hover);
}

.root[readonly] {
    cursor: default;
    background: none;
}

.root[focused] {
    background: var(--table-view-filter-item-focus);
}

.root[selected] {
    background: var(--brand-primary);
    color: var(--color-white);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--brand-disabled);
}

.root[selected][disabled] {
    background: var(--brand-disabled-light);
}

.root {
    display: block;
    white-space: nowrap;
}
</style>
