<template>
<div :class="$style.root" v-bind="$attrs" :direction="direction" :gap="gap" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-multi-layout',
    components: {
        SEmpty,
    },
    props: {
        direction: {
            type: String,
            default: 'horizontal',
        },
        gap: {
            type: String,
            default: 'none',
        },
    },
};
</script>

<style module>
.root {
    display: flex;
    box-sizing: border-box;
    position: relative;
    height: 100%;
}
.root[direction="horizontal"] {
    flex-direction: row;
}
.root[direction="vertical"] {
    flex-direction: column;
}
.root[direction="horizontal"][gap="shrink"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-right: var(--space-shrink);;
}
.root[direction="horizontal"][gap="none"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-right: 0;
}
.root[direction="horizontal"][gap="small"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-right: var(--space-small);
}
.root[direction="horizontal"][gap="normal"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-right: var(--space-base);
}
.root[direction="horizontal"][gap="large"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-right: var(--space-large);
}
.root[direction="vertical"][gap="shrink"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-bottom: var(--space-shrink);;
}
.root[direction="vertical"][gap="none"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-bottom: 0;
}
.root[direction="vertical"][gap="small"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-bottom: var(--space-small);
}
.root[direction="vertical"][gap="normal"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-bottom: var(--space-base);
}
.root[direction="vertical"][gap="large"] > [class^="u-multi-layout_item"]:not(:last-child) {
    margin-bottom: var(--space-large);
}

.root[justify="start"] { justify-content: flex-start; }
.root[justify="center"] { justify-content: center; }
.root[justify="end"] { justify-content: flex-end; }
.root[justify="space-between"] { justify-content: space-between; }
.root[justify="space-between"]::after { display: none; }
.root[justify="space-around"] { justify-content: space-around; }

.root[alignment="start"] { align-items: flex-start; }
.root[alignment="center"] { align-items: center; }
.root[alignment="end"] { align-items: flex-end; }
.root[alignment="baseline"] { align-items: baseline; }
.root[alignment="stretch"] { align-items: stretch; }

</style>
