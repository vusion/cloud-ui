<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly" :readonly-mode="parentVM.readonlyMode"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    :style="{ width: parentVM.itemWidth }"
    v-ellipsis-title="parentVM.showTitle"
    :designer="$env.VUE_APP_DESIGNER"
    vusion-slot-name="item">
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
    vertical-align: middle;
}

.root:hover {
    background: none;
}
.root[selected] {
    background: none;
    color: initial;
}

.root[designer]{
    position: relative;
}
.root[designer] + .root[designer]:after{
    content: '';
    position: absolute;
    display: block;
    background: rgba(255,255,255,0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>
