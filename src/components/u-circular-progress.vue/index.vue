<template>
<div :class="$style.root" :size="size">
    <svg :class="$style.svg" :viewBox="`0 0 ${width} ${width}`">
        <g :transform="`translate(${width / 2}, ${width / 2}) rotate(-90)`">
            <circle :class="$style.track" cx="0" cy="0" :r="radius" />
            <circle :class="$style.trail" cx="0" cy="0" :r="radius" :style="{ strokeDasharray }" stroke-linecap="round"/>
        </g>
    </svg>
    <div :class="$style.text" vusion-slot-name="default">
        <div :class="$style.percent" vusion-slot-name="percent">
            <slot name="percent">
                <s-empty v-if="!$slots.percent && $env.VUE_APP_DESIGNER"></s-empty>
                <template v-else-if="!showPercentSlot">{{ percent + '%' }}</template>
            </slot>
        </div>
        <slot>{{ content }}</slot>
    </div>
    <div :class="$style.foot">
        <slot name="foot">
            <slot name="title">{{ title }}</slot>
        </slot>
    </div>
 </div>
</template>

<script>
import SEmpty from '../s-empty.vue';
export default {
    name: 'u-circular-progress',
    components: {
        SEmpty,
    },
    props: {
        percent: { type: Number, default: 0 },
        title: String,
        content: String,
        size: String,
        showPercentSlot: { type: Boolean, default: false },
    },
    data() {
        return { 
            width: 90,
            radius: 66,
        };
    },
    created() {
        this.setSvgParams(this.size);
    },
    watch: {
        size(value) {
            this.setSvgParams(value);
        }
    },
    computed: {
        strokeDasharray() {
            return (
                2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px'
            );
        },
    },
    methods: {
        setSvgParams(value) {
            const SIZE_MAP = {
                default: { width: 90, border: 6 },
                normal: { width: 90, border: 6 },
                small: { width: 74, border: 5 },
                large: { width: 112, border: 8 },
                huge: { width: 142, border: 10 },
            }
            const size = SIZE_MAP[value] || SIZE_MAP.default;
            this.width = size.width;
            this.radius = ( size.width - size.border ) / 2;
        }
    }
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    width: var(--circular-progress-size);
    height: var(--circular-progress-size);
}
.root[size="small"] {
    width: var(--circular-progress-size-small);
    height: var(--circular-progress-size-small);
}
.root[size="large"] {
    width: var(--circular-progress-size-large);
    height: var(--circular-progress-size-large);
}
.root[size="huge"] {
    width: var(--circular-progress-size-huge);
    height: var(--circular-progress-size-huge);
}

.svg {
    width: 100%;
    height: 100%;
}

.track {
    fill: none;
    stroke-width: var(--circular-progress-stroke-width);
    stroke: var(--circular-progress-track-stroke);
}

.trail {
    fill: none;
    stroke-width: var(--circular-progress-stroke-width);
    stroke: var(--circular-progress-trail-stroke);
    transition: var(--circular-progress-trail-transition);
}

.text {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--circular-progress-font-size);
    color: var(--circular-progress-text-color);
}

.percent {
    font-size: var(--circular-progress-percent-font-size);
    font-weight: var(--circular-progress-percent-font-weight);
    color: var(--circular-progress-percent-color);
    /* line-height: 30px; */
}

.foot {
    text-align: center;
    color: var(--color-light);
    font-size: 14px;
}

.root[size="small"] .track,
.root[size="small"] .trail {
     stroke-width: var(--circular-progress-stroke-width-small);
}
.root[size="small"] .percent {
    font-size: var(--circular-progress-percent-font-size-small);
}
.root[size="large"] .track,
.root[size="large"] .trail {
     stroke-width: var(--circular-progress-stroke-width-large);
}
.root[size="large"] .percent {
    font-size: var(--circular-progress-percent-font-size-large);
}
.root[size="huge"] .track,
.root[size="huge"] .trail {
     stroke-width: var(--circular-progress-stroke-width-huge);
}
.root[size="huge"] .percent {
    font-size: var(--circular-progress-percent-font-size-huge);
}

</style>
