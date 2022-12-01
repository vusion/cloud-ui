<template>
<div :class="$style.root"
    :size="parentVM.$attrs.size"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @click="select()"
    v-ellipsis-title
    vusion-slot-name="default">
    <!-- @override: 添加了label功能 -->
    <span v-if="label" :class="$style.label">{{ label }}</span>
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import { UListViewItem } from '../u-list-view.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-capsule',
    parentName: 'u-capsules',
    components: { SEmpty },
    extends: UListViewItem,
    props: { label: String },
};
</script>

<style module>
.root {
    display: table-cell;
    position: relative;
    /* height: 32px;
    line-height: 30px; */
    font-size: var(--capsules-capsule-font-size);
    text-align: center;
    /* margin-right: -1px; */
    padding: var(--capsules-capsule-padding-x) var(--capsules-capsule-padding-y);
    border: 1px solid var(--capsules-capsule-border-color);
    border-left-color: transparent;
    background: var(--capsules-capsule-background);
    color: var(--capsules-capsule-color);
    cursor: var(--capsules-capsule-cursor);
    vertical-align: middle;
}

.root:first-child {
    border-top-left-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
    border-left-color: var(--border-color-base);
}

.root:last-child {
    border-top-right-radius: var(--border-radius-base);
    border-bottom-right-radius: var(--border-radius-base);
}

.root:not([selected], [readonly], [disabled]):hover {
    z-index: 1;
    border-color: var(--capsules-capsule-border-color-hover);
    color: var(--capsules-capsule-color-hover);
}
.root:not([selected], [readonly], [disabled]):hover + .root[selected],
.root[selected] + .root:not([selected], [readonly], [disabled]):hover {
    border-left-color:transparent;
}

.root[selected]:not([disabled]) {
    z-index: 1;
    border-color: var(--capsules-capsule-border-color-selected);
    background: var(--capsules-capsule-background-selected);
    color: var(--capsules-capsule-color-selected);
}

.root[selected]:not([readonly], [disabled]):hover {
    border-color: var(--capsules-capsule-border-color-selected-hover);
    background: var(--capsules-capsule-background-selected-hover);
}

.root[readonly] {
    cursor: initial;
}

.root[disabled] {
    z-index: auto;
    background: var(--capsules-capsule-background-disabled);
    color: var(--capsules-capsule-color-disabled);
    cursor: var(--capsules-capsule-cursor-disabled);
}

.root[disabled][selected] {
    border-color: var(--capsules-capsule-border-color-selected-disabled);
    background: var(--capsules-capsule-background-selected-disabled);
    color: var(--capsules-capsule-color-selected-disabled);
}

.root[flag]::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border: 5px solid;
    border-color: var(--capsules-capsule-flag-border-color) var(--capsules-capsule-flag-border-color) transparent transparent;
}

.root:last-child[flag]::after {
    border-top-right-radius: 3px;
}

.label {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    line-height: 14px;
    padding: 0 4px;
    border-radius: 2px;
    white-space: nowrap;
    background: var(--capsules-capsule-label-background);
    color: var(--capsules-capsule-label-color);
}

.label:empty {
    display: none;
}

.root[size="small"] {
    width: 50px;
    padding: 0;
}
</style>
