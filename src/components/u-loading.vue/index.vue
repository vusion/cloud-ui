<template>
<div :class="$style.root" :size="size">
    <svg :class="$style.svg" viewBox="0 0 40 40">
        <g transform="translate(20, 20) scale(-1,1) rotate(-90)">
            <circle :class="$style.circle" cx="0" cy="0" r="18"></circle>
        </g>
    </svg>
</div>
</template>

<script>
export default {
    name: 'u-loading',
    props: {
        size: {
            type: String,
            validator: (value) => ['small', 'large'].includes(value),
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    height: 24px;
    width: 24px;
    vertical-align: middle;
}

.root[size="small"] {
    height: 16px;
    width: 16px;
}

.root[size="large"] {
    width: 40px;
    height: 40px;
}

.svg {
    width: 100%;
    height: 100%;
}

.circle {
    stroke-linecap: round;
    stroke-width: 4px;
    stroke: #dae1e6;
    fill: none;
    stroke-dasharray: 0, 1000;
    stroke-dashoffset: 0;
    animation: dash 1.5s cubic-bezier(0.12, 0.6, 0.55, 1) infinite;
}

@keyframes dash {
    0% {
        stroke-dasharray: 0, 1000;
        stroke-dashoffset: -111;
    }

    40% {
        stroke-dasharray: 45, 1000;
    }

    80% {
        stroke-dasharray: 0, 1000;
        stroke-dashoffset: 0;
    }

    100% {
        stroke-dasharray: 0, 1000;
        stroke-dashoffset: 0;
    }
}
</style>
