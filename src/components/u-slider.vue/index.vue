<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.body">
        <div :class="$style.track">
            <div :class="$style.trail" :style="{ width: percent + '%' }"></div>
            <div :class="$style.bound" role="start" v-if="rangeStartPercent" :style="{ width: rangeStartPercent + '%' }"></div>
            <div :class="$style.bound" role="end" v-if="rangeEndPercent" :style="{ width: rangeEndPercent + '%' }"></div>
        </div>
        <f-dragger :disabled="readonly || disabled" immediate
            axis="horizontal" :grid="grid"
            source="parent" range="offset-parent" range-mode="center"
            @dragstart="onDragStart($event)"
            @drag="onDrag($event)">
            <div :class="$style.handle" ref="handle"></div>
        </f-dragger>
    </div>
</div>
</template>

<script>
import MField from '../m-field.vue';

export default {
    name: 'u-slider',
    mixins: [MField],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        precision: {
            type: Number,
            default: 1,
            validator: (precision) => precision > 0,
        }, // @TODO: 以后再考虑复杂的范围情况
        range: {
            type: Array,
            default() {
                return [];
            },
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            currentRange: this.normalizeRange(this.range),
            grid: { x: 0, y: 0 },
            handleEl: undefined,
        };
    },
    computed: {
        percent: {
            get() {
                return (
                    ((this.currentValue - this.min) / (this.max - this.min))
                    * 100
                );
            },
            set(percent) {
                const value = this.fix(
                    +this.min + ((this.max - this.min) * percent) / 100,
                );
                this.currentValue = value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            },
        },
        rangeStartPercent() {
            const start = Math.max(this.currentRange[0], this.min);
            return ((start - this.min) / (this.max - this.min)) * 100;
        },
        rangeEndPercent() {
            const end = Math.min(this.currentRange[1], this.max);
            return ((this.max - end) / (this.max - this.min)) * 100;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
            this.handleEl.style.left = this.percent + '%';
        },
        currentValue(value, oldValue) {
            value = +value;
            this.$emit('change', { value, oldValue }, this);
        },
        range(range) {
            this.currentRange = this.normalizeRange(range);
        },
        min(value) {
            this.handleEl.style.left = this.percent + '%';
        },
        max(value) {
            this.handleEl.style.left = this.percent + '%';
        },
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },
    methods: {
        normalizeRange(range) {
            range = Array.from(range);
            if (range[0] === undefined)
                range[0] = -Infinity;
            if (range[1] === undefined)
                range[1] = Infinity;
            return range;
        },
        fix(value) {
            // 刻度约束
            this.step && (value = Math.round(value / this.step) * this.step); // 范围约束
            value = Math.min(
                Math.max(this.currentRange[0], value),
                this.currentRange[1],
            ); // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max); // 保留小数位数
            value = +value.toFixed(
                this.precision < 1 ? -Math.log10(this.precision) : 0,
            );
            return value;
        },
        onDragStart($event) {
            this.grid.x
                = (this.step / (this.max - this.min)) * $event.range.width;
            const oldValue = this.currentValue;
            this.percent = ($event.left / $event.range.width) * 100;
            const percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit(
                'slide',
                { oldValue, value: this.currentValue, percent },
                this,
            );
        },
        onDrag($event) {
            const oldValue = this.currentValue;
            this.percent = ($event.left / $event.range.width) * 100;
            const percent = this.percent;
            this.handleEl.style.left = percent + '%';
            this.$emit(
                'slide',
                { oldValue, value: this.currentValue, percent },
                this,
            );
        },
    },
};
</script>

<style module>
.root {
    vertical-align: -7px;
}

.body {
    position: relative;
    margin: var(--slider-body-margin);
    padding: var(--slider-body-padding);
    height: 24px;
}

.track {
    position: relative;
    cursor: var(--cursor-pointer);
    height: var(--slider-track-height);
    background: var(--slider-track-background);
}

.trail {
    position: absolute;
    height: 100%;
    background: var(--slider-trail-background);
}

.bound {
    box-sizing: content-box;
    position: absolute;
    background: var(--slider-bound-background);
    height: 100%;
}

.bound[role="start"] {
    left: -7px;
    padding-left: 7px;
}

.bound[role="end"] {
    right: -7px;
    padding-right: 7px;
}

.handle {
    position: absolute;
    left: 0;
    top: 0;
    cursor: var(--cursor-pointer);
    margin-left: calc(var(--slider-handle-width) / -2);
    width: var(--slider-handle-width);
    height: var(--slider-handle-height);
    background: var(--slider-handle-background);
    border: var(--slider-handle-border);
    border-radius: 2px;
}

.handle::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    background-color: var(--slider-track-background);
    top: 5px;
    left: 3px;
}

.handle::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 12px;
    background-color: var(--slider-track-background);
    top: 5px;
    right: 3px;
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
}

.root[disabled] .trail {
    background: var(--slider-trail-background-disabled);
}

.track::before {
    content: '';
    position: absolute;
    width: 7px;
    left: -7px;
    height: 100%;
    background: var(--brand-primary);
}

.track::after {
    content: '';
    position: absolute;
    width: 7px;
    right: -7px;
    height: 100%;
    background: var(--slider-track-background);
}

.root[disabled] .track::before {
    background: var(--brand-disabled);
}
</style>
