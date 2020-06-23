<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default { name: 'u-capsules-group' };
</script>

<style module>
.root {
    display: inline-block;
}

.root + .root {
    margin-left: 20px;
}
</style>
