<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly" :readonly-mode="parentVM.readonlyMode"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    v-ellipsis-title="ellipsisTitle"
    :designer="$env.VUE_APP_DESIGNER"
    vusion-slot-name="item">
    <slot>{{ text }}</slot>
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
    props: {
        text: { type: String },
        ellipsisTitle: { type: [Boolean, String], default: false },
    },
};
</script>

<style module src="./item.css"></style>
