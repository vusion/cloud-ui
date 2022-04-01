<template>
    <div :class="$style.root">
        <div :class="$style.track" v-bind="$attrs">
            <div :class="$style.trail" :style="trailStyle"></div>
        </div>
        <div vusion-slot-name="default">
            <slot></slot>
            <s-empty v-if="!$slots.default && $env.VUE_APP_DESIGNER"></s-empty>
        </div>
    </div>
</template>

<script>
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-linear-progress',
    components: {
        SEmpty,
    },
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
        maxLength() {
            return (this.range[1] || 100) - (this.range[0] || 0) + '%';
        },
        trailStyle() {
            if (this.$attrs.direction === 'vertical') {
                return {
                    maxHeight: this.maxLength,
                    height: this.percent + '%',
                    top: this.range[0] + '%',
                };
            } else {
                return {
                    maxWidth: this.maxLength,
                    width: this.percent + '%',
                    left: this.range[0] + '%',
                };
            }
        },
    },
};
</script>

<style module>
.root {
}
.root[direction="vertical"] {
    display: inline-block;
    vertical-align: top;
    height: var(--linear-progress-vertical-height);
}

.track {
    overflow: hidden;
    height: var(--linear-progress-size);
    border-radius: var(--linear-progress-size);
    background: var(--linear-progress-track-background);
}
.root[direction="vertical"] .track {
    width: var(--linear-progress-size);
    height: 100%;
}

.trail {
    position: relative;
    float: left;
    width: 0;
    height: 100%;
    border-radius: inherit;
    font-size: var(--linear-progress-trail-font-size);
    background: var(--linear-progress-trail-background-primary);
    color: var(--linear-progress-trail-color);
    transition: var(--linear-progress-trail-transition);
}
.root[direction="vertical"] .trail {
    float: none;
    width: auto;
    height: 0;
}

.track[size="small"] {
    height: var(--linear-progress-size-small);
    border-radius: var(--linear-progress-size-small);
}
.track[size="large"] {
    height: var(--linear-progress-size-large);
    border-radius: var(--linear-progress-size-large);
}
.track[size="huge"] {
    height: var(--linear-progress-size-huge);
    border-radius: var(--linear-progress-size-huge);
}
.track[size="small"][direction="vertical"] {
    width: var(--linear-progress-size-small);
}
.track[size="large"][direction="vertical"] {
    width: var(--linear-progress-size-large);
}
.track[size="huge"][direction="vertical"] {
    width: var(--linear-progress-size-huge);
}

.track[color="success"] .trail {
    background: var(--linear-progress-trail-background-success);
}
.track[color="error"] .trail {
    background: var(--linear-progress-trail-background-error);
}
</style>
