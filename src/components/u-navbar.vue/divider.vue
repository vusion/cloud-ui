<template>
<div :class="$style.root"></div>
</template>

<script>
export default { name: 'u-navbar-divider' };
</script>

<style module>
.root {
    display: inline-block;
    margin: 0 var(--navbar-item-space);
    height: var(--navbar-divider-height);
    width: var(--navbar-divider-width);
    background: var(--navbar-divider-background);
    vertical-align: -4px;
}
</style>
