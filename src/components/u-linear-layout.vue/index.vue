<template>
<div :class="$style.root" :direction="direction" v-on="$listeners" vusion-slot-name="default">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
</div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-linear-layout',
    components: {
        SEmpty,
    },
    props: {
        direction: {
            default: 'horizontal',
            validator: (value) => ['horizontal', 'vertical'].includes(value),
        },
    },
};
</script>

<style module>
/* 默认为 block */
.root[display="inline"], .root[inline] {
    display: inline-block;
}

/* @trap: 不能自动添加`display: block`了，因为`display`有好多种如`table``flex``grid`，有覆盖掉的风险。
 * 用一个属性来添加是否使用`block`
 */
.root[layout="block"] > * {
    display: block;
}
.root[layout="inline"] > * {
    display: inline-block;
}

.root[direction="horizontal"] > *:not(:last-child) {
    margin-right: var(--space-base);
}
.root[direction="vertical"] > *:not(:last-child) {
    margin-bottom: var(--space-base);
}

.root[direction="horizontal"][gap="shrink"] > *:not(:last-child) {
    margin-right: var(--space-shrink);
}
.root[direction="vertical"][gap="shrink"] > *:not(:last-child) {
    margin-bottom: var(--space-shrink);
}
.root[direction="horizontal"][gap="shrink"] > *:hover {
    position: relative;
}

.root[direction="horizontal"][gap="none"] > *:not(:last-child) {
    margin-right: 0;
}
.root[direction="vertical"][gap="none"] > *:not(:last-child) {
    margin-bottom: 0;
}

.root[direction="horizontal"][gap="mini"] > *:not(:last-child) {
    margin-right: var(--space-mini);
}
.root[direction="vertical"][gap="mini"] > *:not(:last-child) {
    margin-bottom: var(--space-mini);
}

.root[direction="horizontal"][gap="small"] > *:not(:last-child) {
    margin-right: var(--space-small);
}
.root[direction="vertical"][gap="small"] > *:not(:last-child) {
    margin-bottom: var(--space-small);
}

.root[direction="horizontal"][gap="large"] > *:not(:last-child) {
    margin-right: var(--space-large);
}
.root[direction="vertical"][gap="large"] > *:not(:last-child) {
    margin-bottom: var(--space-large);
}

/* @deprecated */
.root[alignment="left"] { text-align: left; }
.root[alignment="center"] { text-align: center; }
.root[alignment="right"] { text-align: right; }

/* @TRAP: 使用 text-align 可能会造成使用子元素的默认对齐方式不是左对齐 */
.root[justify="start"] { text-align: left; }
.root[justify="center"] { text-align: center; }
.root[justify="end"] { text-align: right; }
.root[justify="space-between"] > *:first-child { float: left; }
.root[justify="space-between"] > *:last-child { float: right; }
/* stylelint-disable-next-line declaration-block-single-line-max-declarations */
.root[justify="space-between"]::after { display: block; content: ''; clear: both; }

.root[type="flex"] { display: flex; text-align: inherit; }

.root[type="flex"][direction="vertical"] { flex-direction: column; }

.root[type="flex"][justify="start"] { justify-content: flex-start; }
.root[type="flex"][justify="center"] { justify-content: center; }
.root[type="flex"][justify="end"] { justify-content: flex-end; }
.root[type="flex"][justify="space-between"] { justify-content: space-between; }
.root[type="flex"][justify="space-between"]::after { display: none; }
.root[type="flex"][justify="space-around"] { justify-content: space-around; }

.root[type="flex"][alignment="start"] { align-items: flex-start; }
.root[type="flex"][alignment="center"] { align-items: center; }
.root[type="flex"][alignment="end"] { align-items: flex-end; }
.root[type="flex"][alignment="baseline"] { align-items: baseline; }
.root[type="flex"][alignment="stretch"] { align-items: stretch; }
</style>
