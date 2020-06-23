<template>
<ul :class="$style.root" :style="{ listStyleType: type }">
    <slot></slot>
</ul>
</template>

<script>
import { MParent } from '../m-parent.vue';

export default {
    name: 'u-list',
    childName: 'u-list-item',
    mixins: [MParent],
    props: { type: String },
};
</script>

<style module>
.root {
    margin: 0;
    list-style: var(--list-style);
}

.root[line] .item:not(:last-child) {
    border-bottom: var(--list-item-border-bottom);
}

.root[striped] .item:nth-of-type(odd) {
    background: var(--list-item-background-striped);
}

.root[hover] .item:hover {
    background: var(--list-item-background-hover);
}
</style>
