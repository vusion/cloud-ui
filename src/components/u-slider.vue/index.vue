<template>
<div :class="$style.root" :disabled="disabled" :readonly="readonly">
    <div :class="$style.body">
        <div :class="$style.track" :multiple="multiple">
            <div :class="$style.trail" :style="{ width: percent[0] + '%' }" v-if="!multiple"></div>
            <div :class="$style.trail" :style="trailStyle" v-else></div>
            <div :class="$style.bound" role="start" v-if="rangeStartPercent" :style="{ width: rangeStartPercent + '%' }"></div>
            <div :class="$style.bound" role="end" v-if="rangeEndPercent" :style="{ width: rangeEndPercent + '%' }"></div>
        </div>
        <f-dragger
            v-for="(_, index) in (multiple ? 2 : 1)"
            :disabled="readonly || disabled" immediate
            axis="horizontal" :grid="grid[0]"
            :source="index === 0 && !multiple ? 'parent' : 'self'"
            range="offset-parent" range-mode="center"
            @dragstart="onDragStart($event, index)"
            @drag="onDrag($event, index)"
            @dragend="onDargEnd($event, index)">
            <div :class="$style.handle" ref="handle"  @mouseover="openTooltip(index)" @mouseleave="closeTooltip(index)">
                <u-popup :class="$style.popup" :placement="placement" trigger="manual" :opened="tooltipOpened[index] && !dragging[index]" v-if="showTooltip">
                    {{ tooltip || currentValue[index] }}
                </u-popup>
            </div>
        </f-dragger>
    </div>
</div>
</template>

<script>
import MField from '../m-field.vue';
import Vue from 'vue';

export default {
    name: 'u-slider',
    mixins: [MField],
    props: {
        value: { type: [Number, Array], default: 0 },
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
        showTooltip: { type: Boolean, default: false },
        tooltip: String,
        placement: { type: String, default: 'top' },
        multiple: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: [0, 0],
            currentRange: this.normalizeRange(this.range),
            grid: [
                { x: 0, y: 0 },
                { x: 0, y: 0 },
            ],
            tooltipOpened: [false, false],
            dragging: [false, false],
        };
    },
    computed: {
        percent() {
            return this.currentValue.map((v) => {
                const percent = ((v - this.min) / (this.max - this.min)) * 100;
                return percent < 0 ? 0 : percent;
            });
        },
        rangeStartPercent() {
            const start = Math.max(this.currentRange[0], this.min);
            return ((start - this.min) / (this.max - this.min)) * 100;
        },
        rangeEndPercent() {
            const end = Math.min(this.currentRange[1], this.max);
            return ((this.max - end) / (this.max - this.min)) * 100;
        },
        trailStyle() {
            return {
                marginLeft: (this.percent[0] < this.percent[1] ? this.percent[0] : this.percent[1] ) + '%',
                width: Math.abs(this.percent[1] - this.percent[0]) + '%',
            };
        },
    },
    watch: {
        value: {
            handler(value) {
                if (this.multiple) {
                    if (!Array.isArray(value)) return;
                    // 考虑滑块前后顺序互换的情况，内部是支持先大后小的，但是外部不支持
                    if (value[0] === this.currentValue[1] && value[1] === this.currentValue[0]) return
                    this.currentValue = value
                } else {
                    this.currentValue = [value]
                }
            },
            immediate: true,
        },
        currentValue(value, oldValue) {
            value = value.map((v) => +v);
            if (!Array.isArray(this.value)) {
                this.$emit('change', { value: value[0], oldValue: oldValue[0] }, this);
            } else {
                this.$emit('change', { value: value.concat().sort(), oldValue: oldValue.concat().sort() }, this);
            }
        },
        range(range) {
            this.currentRange = this.normalizeRange(range);
        },
        percent() {
            this.updateHandleLeft();
        },
        multiple(newVal) {
            if (!newVal) {
                this.currentValue = [this.currentValue[0]];
            } else if (!Array.isArray(this.value)) {
                // 如果外部传入的不是数组，就处理为 value + 10
                const value0 = this.value || 0;
                this.currentValue = [value0, value0 + 10];
            }
            this.$nextTick(() => {
                this.updateHandleLeft();
            });
        },
    },
    mounted() {
        this.updateHandleLeft();
    },
    methods: {
        updateCurrentValue(index, percent) {
            const value = this.fix(
                +this.min + ((this.max - this.min) * percent) / 100,
            );
            // 这里不能使用 Vue.set, 因为有 watch
            this.currentValue = this.currentValue.map((v, i) => i === index ? value : v);
            // 对外暴露的 value 需要和传入的 value 类型一致
            const eventValue = Array.isArray(this.value) ? this.currentValue.concat().sort() : this.currentValue[0];
            this.$emit('input', eventValue, this);
            this.$emit('update:value', eventValue, this);
        },
        updateHandleLeft() {
            this.$refs.handle.forEach((element, index) => {
                if (element) {
                    element.style.left = this.percent[index] + '%';
                }
            });
        },
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
        onDragStart($event, index) {
            this.grid[index].x
                = (this.step / (this.max - this.min)) * $event.range.width;
            const oldValue = this.currentValue[index];
            this.updateCurrentValue(index, ($event.left / $event.range.width) * 100);
            const percent = this.percent[index];
            this.$emit(
                'slide',
                { oldValue, value: this.currentValue[index], percent, index },
                this,
            );
        },
        onDrag($event, index) {
            const oldValue = this.currentValue[index];
            this.updateCurrentValue(index, ($event.left / $event.range.width) * 100);
            const percent = this.percent[index];
            this.$emit(
                'slide',
                { oldValue, value: this.currentValue[index], percent, index },
                this,
            );
            this.dragging[index] = true;
        },
        onDargEnd($event, index) {
            this.dragging[index] = false;
        },
        openTooltip(index) {
            Vue.set(this.tooltipOpened, index, true);
        },
        closeTooltip(index) {
            Vue.set(this.tooltipOpened, index, false);
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

.track[multiple] {
    cursor: default;
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
    top: 50%;
    transform: translateY(-50%);
    cursor: var(--cursor-pointer);
    margin-left: calc(var(--slider-handle-width) / -2);
    width: var(--slider-handle-width);
    height: var(--slider-handle-height);
    background: var(--slider-handle-background);
    border: var(--slider-handle-border);
    border-radius: calc(var(--slider-handle-width)/2);
}

/* .handle::before {
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
} */

.handle:hover {
    box-shadow: 0 0 0 2px var(--slider-box-shadow-hover);
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
    border-top-left-radius: var(--slider-track-border-radius);
    border-bottom-left-radius: var(--slider-track-border-radius);
}

.track[multiple]::before {
    background: var(--slider-track-background);
}

.track::after {
    content: '';
    position: absolute;
    width: 7px;
    right: -7px;
    height: 100%;
    background: var(--slider-track-background);
    border-top-right-radius: var(--slider-track-border-radius);
    border-bottom-right-radius: var(--slider-track-border-radius);
}

.root[disabled] .track::before {
    background: var(--slider-trail-background-disabled);
}
.root[disabled] .track,
.root[disabled] .handle {
    cursor: not-allowed;
}
.root[readonly] .track,
.root[readonly] .handle {
    cursor: default;
}
.root[disabled] .handle:hover,
.root[readonly] .handle:hover {
    box-shadow: none;
}
.root[disabled] .handle {
    background-color: var(--slider-handle-background-disabled);
}
.popup {
    background: var(--slider-popup-background);
    min-width: initial;
}
</style>
