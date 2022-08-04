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
    padding: calc(var(--space-base) / 2);
}

.root .wrap {
    margin: 0 calc(var(--space-base) / (-2));
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

.root[gap^="small"] {
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
}

</style>
