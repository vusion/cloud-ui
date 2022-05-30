<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    v-ellipsis-title>
    <u-checkbox v-if="parentVM.multiple"
        :readonly="parentVM.readonly"
        :disabled="disabled || parentVM.disabled"
        :value="currentSelected"
    ></u-checkbox>
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
    padding: 5px 12px;
    position: relative;
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
    background: var(--table-view-filter-item-background-selected);
    color: var(--color-white);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--table-view-filter-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--brand-disabled-light);
}

.root {
    display: block;
    white-space: nowrap;
}
.root [class^="u-checkbox_box__"] {
    top: -2px;
}
.root[selected] [status="true"] {
    background-color: var(--table-view-filter-item-checkbox-background-selected);
}
.root[selected] [status="true"]::before {
    color: var(--table-view-filter-item-checkbox-color-selected);
}
</style>
