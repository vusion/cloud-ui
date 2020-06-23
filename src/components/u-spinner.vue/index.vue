<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default { name: 'u-spinner' };
</script>

<style module>
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.root {
    display: inline-block;
    animation: spin infinite linear var(--spinner-animation-duration);
}

.root::before {
    icon-font: url('./assets/refresh.svg');
}
</style>
