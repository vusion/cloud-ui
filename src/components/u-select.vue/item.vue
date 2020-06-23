<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :duplicated="parentVM.duplicated"
    :focused="isFocused"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @mouseenter="hover"
    :style="{ direction: parentVM.ellipsisDirection }"
    @click="select"
    v-ellipsis-title>
    <!-- @override: 添加了flag功能 -->
    <span v-if="flag !== undefined" :class="$style.flag" :layer="layer" v-tooltip.top="flag"></span>
    <slot></slot>
</div>
</template>

<script>
import { UListViewItem } from '../u-list-view.vue';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    extends: UListViewItem,
    props: { flag: { type: String }, layer: { type: String } },
    computed: {
        isFocused() {
            return this.parentVM && this.parentVM.focusedVM === this;
        },
        currentText() {
            return this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
    methods: {
        hover() {
            this.parentVM && (this.parentVM.focusedVM = this);
        },
    },
};
</script>

<style module src="./item.css"></style>
