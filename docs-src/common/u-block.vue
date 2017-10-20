<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-block',
};
</script>

<style module>
.root {
    padding: 5px;
    background: $brand-primary;
    color: white;
    text-align: center;
    width: 100%;
    height: 100%;
}

.root[size="large"] {
    padding: 10px;
}

.root[size="huge"] {
    padding: 20px;
}
</style>
