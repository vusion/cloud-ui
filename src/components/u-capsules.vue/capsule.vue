<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly"
    :disabled="disabled || parentVM.disabled"
    @click="select()"
    allowChild
    v-ellipsis-title>
    <!-- @override: 添加了label功能 -->
    <span :class="$style.label">{{ label }}</span>
    <slot></slot>
</div>
</template>

<script>
import { UListViewItem } from '../u-list-view.vue';

export default {
    name: 'u-capsule',
    parentName: 'u-capsules',
    extends: UListViewItem,
    props: { label: String },
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    display: inline-block;
    position: relative;
    z-index: 1;
    height: 30px;
    line-height: 28px;
    font-size: var(--font-size-base);
    text-align: center;
    padding: 0 16px;
    margin-right: -1px;
    background: white;
    color: #666;
    border: 1px solid var(--brand-primary);
}

.root:first-child {
    border-top-left-radius: var(--border-radius-base);
    border-bottom-left-radius: var(--border-radius-base);
}

.root:last-child {
    border-top-right-radius: var(--border-radius-base);
    border-bottom-right-radius: var(--border-radius-base);
}

.root[selected] {
    position: relative;
    background: var(--brand-primary);
    color: white;
}

.root[flag]::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border: 5px solid;
    border-color: #fc7272 #fc7272 transparent transparent;
}

.label {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%);
    color: white;
    background: #fc7272;
    font-size: 12px;
    height: 13px;
    line-height: 14px;
    padding: 0 2px;
    white-space: nowrap;
}

.label:empty {
    display: none;
}

.root[disabled] {
    position: relative;
    z-index: 0;
    color: #d6d6d6;
    border-color: #c2ddfb;
    cursor: var(--cursor-not-allowed);
}

.root[selected][disabled] {
    background: #c2ddfb;
    color: white;
}

.root[size="small"] {
    width: 50px;
    padding: 0;
}
</style>
