<template>
<div :class="$style.root" :style="[commonStyle, responsiveStyle]">
    <slot></slot>
</div>
</template>

<script>
const breakpoints = [
    { name: 'Huge', width: 1440 },
    { name: 'Large', width: 1200 },
    { name: 'Medium', width: 960 },
    { name: 'Small', width: 768 },
    { name: 'Mini', width: 480 },
];

export default {
    name: 'u-grid-layout-column',
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
    },
    data() {
        return { parentVM: this.$parent, currentSpan: this.span };
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
            const left = this.push ? this.getPercent(this.push) : 'auto';
            const right = this.pull ? this.getPercent(this.pull) : 'auto';
            const marginLeft = this.getPercent(this.offset);
            return { right, left, marginLeft };
        },
        responsiveStyle() {
            const width = this.currentSpan ? this.getPercent(this.currentSpan) : 'auto';
            return { width };
        },
    },
    watch: {
        currentSpan(span, oldSpan) {
            this.$emit('responsive', { span, oldSpan }, this);
        },
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        getPercent(span, repeat) {
            repeat
                = repeat || this.$parent.repeat || this.$parent.$parent.repeat;
            return (span / repeat) * 100 + '%';
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
    float: left;
    position: relative;
}
</style>
