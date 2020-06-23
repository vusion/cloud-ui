<template>
<nav :class="$style.root" :readonly="readonly" :disabled="disabled">
    <div :class="$style.body">
        <slot></slot>
    </div>
</nav>
</template>

<script>
import MSinglex from '../m-singlex.vue';

export default {
    name: 'u-toc',
    childName: 'u-toc-item',
    extends: MSinglex,
    props: { router: { type: Boolean, default: true } },
    data() {
        return { parentVM: undefined };
    },
};
</script>

<style module>
.root {
    position: relative;
    user-select: none;
    font-size: var(--toc-font-size);
    width: var(--toc-width);
    padding: var(--toc-padding);
    background: var(--toc-background);
    border-left: var(--toc-border-width) solid var(--toc-border-color);
}

.body {
    margin: var(--toc-padding) -10px;
    padding: 0 calc(10px + var(--toc-padding));
    overflow: hidden;
}

.root::before, .root::after {
    content: '';
    display: block;
    position: absolute;
    width: var(--toc-circle-size);
    height: var(--toc-circle-size);
    left: calc((var(--toc-circle-size) + 1px) / (-2));
    border: 2px solid var(--toc-border-color);
    border-radius: 100px;
    background: white;
}

.root::before {
    top: calc((var(--toc-circle-size) + 1px) / (-2));
}

.root::after {
    bottom: calc((var(--toc-circle-size) + 1px) / (-2));
}
</style>
