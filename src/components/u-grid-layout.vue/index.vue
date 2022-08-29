<template>
<div :class="$style.root">
    <div :class="$style.wrap">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-grid-layout',
    props: {
        repeat: { type: Number, default: 12 },
    },
};
</script>

<style module>
.root {
    /* width: 100%; */ /* Bug-48296 设置了margin后会导致超出父元素 */
    overflow-x: clip; /* 没有这个的话会有横向滚动条，但如果是hidden，在里面放置有dropdown等组件时，打开的时候会有竖向滚动条，所以使用clip */
}

.root .column {
    /* padding: calc(var(--space-base) / 2); */
}

.root .wrap {
    /* margin: 0 calc(var(--space-base) / (-2)); */
}

.root[gap^="none"] {
    margin-top: 0;
    margin-bottom: 0;
}

.root[gap^="none"] .column {
    padding-top: 0;
    padding-bottom: 0;
}
.root[gap^="none"] .wrap {
    margin: 0 0;
}

.root[gap$="none"] {
    margin-left: 0;
    margin-right: 0;
}

.root[gap$="none"] .column {
    padding-left: 0;
    padding-right: 0;
}

.root[gap$="none"] .wrap {
    margin: 0 0;
}

/* .root[gap^="small"] {
    margin-top: calc(var(--space-small) / (-2));
    margin-bottom: calc(var(--space-small) / (-2));
}

.root[gap^="small"] .column {
    padding-top: calc(var(--space-small) / 2);
    padding-bottom: calc(var(--space-small) / 2);
}

.root[gap^="small"] .wrap {
   margin: 0 calc(var(--space-small) / (-2));
}

.root[gap$="small"] .column {
    padding-left: calc(var(--space-small) / 2);
    padding-right: calc(var(--space-small) / 2);
}

.root[gap$="small"] .wrap {
    margin: 0 calc(var(--space-small) / (-2));
}

.root[gap^="large"] {
    margin-top: calc(var(--space-large) / (-2));
    margin-bottom: calc(var(--space-large) / (-2));
}

.root[gap^="large"] .column {
    padding-top: calc(var(--space-large) / 2);
    padding-bottom: calc(var(--space-large) / 2);
}

.root[gap^="large"] .wrap {
    margin: 0 calc(var(--space-large) / (-2));
}

.root[gap$="large"] .column {
    padding-left: calc(var(--space-large) / 2);
    padding-right: calc(var(--space-large) / 2);
}

.root[gap$="normal"] .wrap {
    margin: 0 calc(var(--space-base) / (-2));
} */

.root .column {
    padding: 0;
}
.root .wrap {
    margin: 0;
}
.root .row + .row {
    margin-top: var(--space-base);
}
.root[gap="compact"] .row + .row {
    margin-top: -1px;
}
.root[gap="none"] .row + .row {
    margin-top: 0;
}
.root[gap="small"] .row + .row {
    margin-top: var(--space-small);
}
.root[gap="large"] .row + .row {
    margin-top: var(--space-large);
}
.root[gap="normal"] .row + .row {
    margin-top: var(--space-base);
}
.root .row,
.root .row[gap="normal"] {
    margin: 0 calc(var(--grid-layout-column-gap-normal) / (-2));
}
.root .row[gap="mini"] {
    margin: 0 calc(var(--grid-layout-column-gap-mini) / (-2));
}
.root .row[gap="small"] {
    margin: 0 calc(var(--grid-layout-column-gap-small) / (-2));
}
.root .row[gap="large"] {
    margin: 0 calc(var(--grid-layout-column-gap-large) / (-2));
}
.root .row[gap="huge"] {
    margin: 0 calc(var(--grid-layout-column-gap-huge) / (-2));
}
.root .row .column,
.root .row[gap="normal"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-normal) / 2);
}
.root .row[gap="none"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-none) / 2);
}
.root .row[gap="mini"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-mini) / 2);
}
.root .row[gap="small"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-small) / 2);
}
.root .row[gap="large"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-large) / 2);
}
.root .row[gap="huge"] .column {
    margin: 0 calc(var(--grid-layout-column-gap-huge) / 2);
}
</style>
