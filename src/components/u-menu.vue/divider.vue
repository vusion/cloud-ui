<template>
<div :class="$style.root"></div>
</template>

<script>
export default { name: 'u-menu-divider', parentName: 'u-menu' };
</script>

<style module>
.root {
    margin: var(--menu-divider-margin-y) 0;
    height: var(--menu-divider-height);
    background: var(--menu-divider-background);
}
</style>
