<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly" :readonly-mode="parentVM.readonlyMode"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    :style="{ width: parentVM.itemWidth }"
    v-ellipsis-title>
    <slot></slot>
</div>
</template>

<script>
import { UListViewItem } from '../u-list-view.vue';

export default {
    name: 'u-grid-view-item',
    parentName: 'u-grid-view',
    groupName: 'u-grid-view-group',
    extends: UListViewItem,
};
</script>

<style module>
@import '../u-list-view.vue/item.css';

.root {
    display: inline-block;
    vertical-align: top;
}
</style>
