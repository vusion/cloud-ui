<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled">
    <div :class="$style.left">
        <slot name="left"></slot>
    </div>
    <div :class="$style.right">
        <slot name="right"></slot>
    </div>
    <nav :class="$style.middle">
        <slot></slot>
    </nav>
</div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';

export default {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    extends: MSinglex,
    props: { router: { type: Boolean, default: true } },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};
</script>

<style module>
.root {
    user-select: none;
    height: var(--navbar-height);
    /* display: flex;
    justify-content: space-between; */
    background: var(--navbar-background);
    white-space: nowrap;
}

.left {
    float: left;
    margin-right: var(--navbar-space-x);
}

.middle {
    margin: 0 var(--navbar-space-x);
}

.root[alignment="center"] .middle {
    text-align: center;
}

.root[alignment="right"] .middle {
    text-align: right;
}

.right {
    float: right;
    margin-left: var(--navbar-space-x);
}

.root[color="inverse"] {
    background-color: var(--navbar-background-inverse);
}

.root[color="inverse"] .item {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item:hover {
    color: var(--navbar-item-color-inverse);
}

.root[color="inverse"] .item[selected] {
    color: var(--navbar-item-color-inverse);
}

.root .item + .divider {
    margin-left: 0;
}
</style>
