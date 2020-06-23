<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-placeholder',
    props: { type: { type: String, default: 'empty' } },
};
</script>

<style module>
.root {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 85px;
    background: white url('./assets/empty.png') center center no-repeat;
}
</style>
