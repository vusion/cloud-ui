<template>
<div :class="$style.root" :gap="gap">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-grid-layout-row',
    props: {
        repeat: Number,
        gap: String,
    },
};
</script>

<style module>
.root {
    display: flex;
    flex-wrap: wrap;
}

.root[justify="start"] { justify-content: flex-start; }
.root[justify="center"] { justify-content: center; }
.root[justify="end"] { justify-content: flex-end; }
.root[justify="space-between"] { justify-content: space-between; }
.root[justify="space-around"] { justify-content: space-around; }

.root[alignment="start"] { align-items: flex-start; }
.root[alignment="center"] { align-items: center; }
.root[alignment="end"] { align-items: flex-end; }
.root[alignment="baseline"] { align-items: baseline; }
.root[alignment="stretch"] { align-items: stretch; }
</style>
