<template>
<div :class="$style.root" :style="{ height }">
    <slot></slot>
    <f-dragger v-if="!isLast" axis="vertical" @drag="onDrag">
        <div :class="$style.splitter"></div>
    </f-dragger>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';

export default {
    name: 'u-split-layout-item',
    parentName: 'u-split-layout',
    mixins: [MChild],
    props: {

    },
    data() {
        return {
            height: '',
        };
    },
    computed: {
        isLast() {
            const index = this.parentVM.itemVMs.indexOf(this);
            return ~index && index === this.parentVM.itemVMs.length - 1;
        },
    },
    methods: {
        onDrag($event) {
            this.height = $event.top + 'px';
        },
    },
};
</script>

<style module>
.root {
    display: table-row;
    overflow-x: hidden;
    overflow-y: auto;
}

.splitter {
    position: absolute;
    height: 1px;
    background: transparent; /* var(--border-color-base); */
    transition: background var(--transition-duration-base);
    padding: 2px 0;
    margin-top: -2px;
    width: 100%;
    cursor: row-resize;
    z-index: 10;
}

.splitter:hover {
    background: var(--brand-primary);
}
</style>
