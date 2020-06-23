<template>
<li :class="$style.root"><slot></slot></li>
</template>

<script>
import { MChild } from '../m-parent.vue';

export default { name: 'u-list-item', parentName: 'u-list', mixins: [MChild] };
</script>

<style module>
.root {
    list-style: inherit;
    padding: var(--list-item-padding);
}
</style>
