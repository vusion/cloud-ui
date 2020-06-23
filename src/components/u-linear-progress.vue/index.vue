<template>
<div :class="$style.root">
    <div :class="$style.track" v-bind="$attrs">
        <div :class="$style.trail" :style="{ width: percent + '%', left: range[0] + '%', maxWidth}"></div>
    </div>
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
        range: {
            type: Array,
            default() {
                return [0, 100];
            },
        },
    },
    computed: {
        maxWidth() {
            return (this.range[1] || 100) - (this.range[0] || 0) + '%';
        },
    },
};
</script>

<style module>


.root {}

.track {
    overflow: hidden;
    height: var(--linear-progress-height);
    line-height: var(--linear-progress-height);
    background: var(--linear-progress-track-background);
}

.trail {
    position: relative;
    width: 0;
    height: 100%;
    float: left;
    background: var(--linear-progress-trail-background);
    font-size: var(--linear-progress-trail-font-size);
    color: var(--linear-progress-trail-color);
    transition: var(--linear-progress-trail-transition);
}

.track[size="small"] {
    height: var(--linear-progress-height-small);
    line-height: var(--linear-progress-height-small);
}

.track[size="large"] {
    height: var(--linear-progress-height-large);
    line-height: var(--linear-progress-height-large);
}

.track[size="huge"] {
    height: var(--linear-progress-height-huge);
    line-height: var(--linear-progress-height-huge);
}
</style>
