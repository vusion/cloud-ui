<template>
<div :class="$style.root" vusion-slot-name="default" :style="[commonStyle, responsiveStyle]" :empty="!$slots.default" :nowrap="!wrap">
    <slot></slot>
    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
</div>
</template>

<script>
import { addResizeListener, removeResizeListener } from '../../utils/dom';
import SEmpty from '../s-empty.vue';

const breakpoints = [
    { name: 'Huge', width: 1440 },
    { name: 'Large', width: 1200 },
    { name: 'Medium', width: 960 },
    { name: 'Small', width: 768 },
    { name: 'Mini', width: 480 },
];

const GAP_CONFIGS = {
    normal: 16,
    none: 0,
    mini: 4,
    small: 8,
    large: 24,
    huge: 32,
};

export default {
    name: 'u-grid-layout-column',
    components: {
        SEmpty,
    },
    props: {
        span: { type: Number, default: 1 },
        pull: Number,
        push: Number,
        offset: Number,
        mediaMini: Number,
        mediaSmall: Number,
        mediaMedium: Number,
        mediaLarge: Number,
        mediaHuge: Number,
        wrap: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            parentVM: this.$parent,
            currentSpan: this.span,
        };
    },
    computed: {
        stack() {
            return breakpoints
                .map((point) => ({
                    name: point.name,
                    width: point.width,
                    span: this['media' + point.name],
                }))
                .filter((point) => point.span !== undefined);
        },
        commonStyle() {
            const left = this.push ? this.getPullPush(this.push) : 'auto';
            const right = this.pull ? this.getPullPush(this.pull) : 'auto';
            const marginLeft = this.getMarginLeft(this.offset);
            return { right, left, marginLeft };
        },
        responsiveStyle() {
            const width = this.currentSpan ? this.getWidth(this.currentSpan) : 'auto';
            return { width };
        },
    },
    watch: {
        currentSpan(span, oldSpan) {
            this.$emit('responsive', { span, oldSpan }, this);
        },
        span(span) {
            this.currentSpan = span;
        },
    },
    mounted() {
        addResizeListener(this.$el, this.onResize);
        this.onResize();
    },
    destroyed() {
        removeResizeListener(this.$el, this.onResize);
    },
    methods: {
        getPullPush(span, repeat) {
            const column = this.getColumnWidth(span, repeat);
            return `calc(${column.columnWidth} + ${column.gap}px * ${span})`;
        },
        getWidth(span, repeat) {
            const column = this.getColumnWidth(span, repeat);
            return `calc(${column.columnWidth} + ${column.gap}px * ${span - 1})`;
        },
        getMarginLeft(span, repeat) {
            if (!span)
                return undefined;
            const column = this.getColumnWidth(span, repeat);
            return `calc(${column.columnWidth} + ${column.gap}px * ${span} + ${column.gap / 2}px)`;
        },
        getColumnWidth(span, repeat) {
            repeat
                = repeat || this.$parent.repeat || this.$parent.$parent.repeat;
            const gap = this.$parent.gap ? GAP_CONFIGS[this.$parent.gap] : GAP_CONFIGS.normal;
            return {
                columnWidth: `(100% - ${gap}px * ${repeat}) / ${repeat} * ${span}`,
                gap,
            };
        },
        onResize() {
            const stack = this.stack;
            if (!stack.length)
                return;
            let span = this.span;
            const width = window.innerWidth;
            stack.forEach((point, index) => {
                if (width <= point.width && point.span !== undefined)
                    span = point.span;
            });
            this.currentSpan = span;
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.root[mode="flex"] { display: flex; text-align: inherit; flex-wrap: wrap }
.root[mode="flex"][nowrap] {flex-wrap: nowrap}

.root[mode="flex"][direction="vertical"] { flex-direction: column; }

.root[mode="flex"][justify="start"] { justify-content: flex-start; }
.root[mode="flex"][justify="center"] { justify-content: center; }
.root[mode="flex"][justify="end"] { justify-content: flex-end; }
.root[mode="flex"][justify="space-between"] { justify-content: space-between; }
.root[mode="flex"][justify="space-between"]::after { display: none; }
.root[mode="flex"][justify="space-around"] { justify-content: space-around; }

.root[mode="flex"][alignment="start"] { align-items: flex-start; }
.root[mode="flex"][alignment="center"] { align-items: center; }
.root[mode="flex"][alignment="end"] { align-items: flex-end; }
.root[mode="flex"][alignment="baseline"] { align-items: baseline; }
.root[mode="flex"][alignment="stretch"] { align-items: stretch; }

.root[mode="flex"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-normal);
}
.root[mode="flex"][direction="vertical"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-normal);
}

.root[mode="flex"][gap="shrink"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-shrink);
}
.root[mode="flex"][direction="vertical"][gap="shrink"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-shrink);
}
.root[mode="flex"][gap="none"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-none);
}
.root[mode="flex"][direction="vertical"][gap="none"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-none);
}

.root[mode="flex"][gap="mini"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-mini);
}
.root[mode="flex"][direction="vertical"][gap="mini"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-mini);
}

.root[mode="flex"][gap="small"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-small);
}
.root[mode="flex"][direction="vertical"][gap="small"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-small);
}

.root[mode="flex"][gap="large"] > *:not(:last-child) {
    margin-right: var(--grid-layout-column-content-gap-large);
}
.root[mode="flex"][direction="vertical"][gap="large"] > *:not(:last-child) {
    margin-bottom: var(--grid-layout-column-content-gap-large);
}
.root[mode="flex"][direction="vertical"] > *:nth-child(odd),
.root[mode="flex"][direction="vertical"] > *:nth-child(even) {
    margin-right: 0;
}

</style>
