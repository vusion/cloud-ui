<template>
<i :class="$style.root" :name="name" :size="size" :color="color" v-on="$listeners">
    <slot></slot>
</i>
</template>

<script>
export default {
    name: 'i-icon',
    props: { name: String, size: String, color: String },
};
</script>

<style module src="./index.css"></style>
