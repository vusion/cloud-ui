<template>
<div :class="$style.root">
    <svg :class="$style.svg" viewBox="0 0 100 100">
        <g transform="translate(50, 50) rotate(-90)">
            <circle :class="$style.track" cx="0" cy="0" :r="radius" />
            <circle :class="$style.trail" cx="0" cy="0" :r="radius" :style="{ strokeDasharray }" />
        </g>
    </svg>
    <div :class="$style.text">
        <div :class="$style.percent">{{ percent + '%' }}</div>
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
export default {
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 },
        title: String,
        content: String,
    },
    data() {
        return { radius: 42 };
    },
    computed: {
        strokeDasharray() {
            return (
                2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px'
            );
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    width: var(--circular-progress-size);
    height: var(--circular-progress-size);
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
    color: var(--color-base);
    line-height: 30px;
}

.foot {
    text-align: center;
    color: var(--color-light);
    font-size: 14px;
}
</style>
