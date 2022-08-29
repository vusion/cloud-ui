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

/* .root,
.root[gap="normal"] {
    gap: var(--grid-layout-column-gap-normal);
}
.root[gap="none"] {
    gap: var(--grid-layout-column-gap-none);
}
.root[gap="mini"] {
    gap: var(--grid-layout-column-gap-mini);
}
.root[gap="small"] {
    gap: var(--grid-layout-column-gap-small);
}
.root[gap="large"] {
    gap: var(--grid-layout-column-gap-large);
}
.root[gap="huge"] {
    gap: var(--grid-layout-column-gap-huge);
} */
</style>
