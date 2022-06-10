<template>
<div :class="$style.root"
    :size="parentVM.$attrs.size"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @click="select()"
    allowChild
    v-ellipsis-title
    vusion-slot-name="default">
    <!-- @override: 添加了label功能 -->
    <span v-if="label" :class="$style.label">{{ label }}</span>
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
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
    display: inline-block;
    position: relative;
    height: 32px;
    line-height: 30px;
    font-size: var(--font-size-base);
    text-align: center;
    margin-right: -1px;
    padding: 0 20px;
    border: 1px solid var(--border-color-base);
    background: var(--color-white);
    color: var(--color-base);
    cursor: var(--cursor-pointer);
    vertical-align: middle;
}

.root:first-child {
    border-top-left-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
}

.root:last-child {
    border-top-right-radius: var(--border-radius-base);
    border-bottom-right-radius: var(--border-radius-base);
}

.root:not([selected], [readonly], [disabled]):hover {
    z-index: 1;
    border-color: var(--brand-primary);
    color: var(--brand-primary);
}

.root[selected]:not([disabled]) {
    z-index: 1;
    border-color: var(--brand-primary);
    background: var(--brand-primary);
    color: var(--color-white);
}

.root[selected]:not([readonly], [disabled]):hover {
    border-color: var(--brand-primary-light);
    background: var(--brand-primary-light);
}

.root[readonly] {
    cursor: initial;
}

.root[disabled] {
    z-index: auto;
    background: var(--background-color-disabled);
    color: var(--gray-base);
    cursor: var(--cursor-not-allowed);
}

.root[disabled][selected] {
    border-color: var(--brand-primary-disabled);
    background: var(--brand-primary-disabled);
    color: var(--color-white);
}

.root[flag]::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border: 5px solid;
    border-color: var(--brand-danger) var(--brand-danger) transparent transparent;
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
    background: var(--brand-error);
    color: var(--color-white);
}

.label:empty {
    display: none;
}

.root[size="small"] {
    width: 50px;
    padding: 0;
}
</style>
