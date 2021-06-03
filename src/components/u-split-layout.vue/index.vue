<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';

export default {
    name: 'u-split-layout',
    childName: 'u-split-layout-item',
    mixins: [MParent],
    props: {
        direction: {
            default: 'horizontal',
            validator: (value) => ['horizontal', 'vertical'].includes(value),
        },
    },
};
</script>

<style module>
.root {
    display: table;
    position: relative;
    height: 100%;
    overflow: hidden;
}
</style>
