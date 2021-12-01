<template>
<div :class="$style.root" :direction="parentVM.direction" :style="{
    width: parentVM.direction === 'horizontal' ? computedSize + 'px' : undefined,
    height: parentVM.direction === 'vertical' ? computedSize + 'px' : undefined,
}">
    <slot></slot>
    <f-dragger v-if="parentVM.resizable && !isLast" :axis="parentVM.direction"
        @dragstart="callParent('onResizerDragStart', $event)"
        @drag="callParent('onResizerDrag', $event)"
        @dragend="callParent('onResizerDragEnd', $event)">
        <div :class="$style.splitter" @click.stop></div>
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
        size: [String, Number],
    },
    data() {
        return {
            currentSize: this.size === undefined ? undefined : this.size + '',
            computedSize: undefined,
        };
    },
    computed: {
        isLast() {
            const index = this.parentVM.itemVMs.indexOf(this);
            return ~index && index === this.parentVM.itemVMs.length - 1;
        },
    },
    watch: {
        size(size) {
            this.currentSize = size === undefined ? undefined : size + '';
            this.parentVM.handleResize();
        },
    },
    methods: {
        callParent(methodName, $event) {
            return this.parentVM[methodName]($event, this);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    overflow: hidden;
}

.root[direction="horizontal"] {
    float: left;
    height: 100%;
}

.splitter {
    position: absolute;
    background: transparent; /* var(--border-color-base); */
    transition: background var(--transition-duration-base);
}

.root[direction="horizontal"] > .splitter {
    width: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0 2px;
    cursor: col-resize;
}

.root[direction="vertical"] > .splitter {
    height: 0;
    left: 0;
    right: 0;
    padding: 2px 0;
    bottom: 0;
    cursor: row-resize;
    z-index: 10;
}

.splitter:hover {
    background: var(--brand-primary);
}
</style>
