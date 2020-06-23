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
import { MComplexItem } from '../../m-complex.vue';

export default {
    name: 'u-table-view-filter',
    parentName: 'u-table-view-filters',
    extends: MComplexItem,
};
</script>

<style module>
@extends;

.root {
    display: block;
    white-space: nowrap;
}
</style>
