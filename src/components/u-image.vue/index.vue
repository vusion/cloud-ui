<template>
<div :class="$style.root">
    <div :class="$style.thumb">
        <img :src="src" v-bind="$attrs">
    </div>
</div>
</template>

<script>

export default {
    name: 'u-image',
    inheritAttrs: false,
    props: {
        src: {
            type: String,
            default: '',
            required: true,
        },
    },
};
</script>

<style module >
.root {
    display: inline-block;
    width: var(--image-width);
    height: var(--image-height);
}
.thumb {
    position: relative;
    width: 100%;
    height: 100%;
}
.thumb img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
}
</style>
