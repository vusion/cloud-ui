<template>
<span :class="$style.root" v-on="$listeners">
    <span vusion-slot-name="text"><slot>{{ text }}</slot></span>
    <span v-if="removable" :class="$style.remove" @click="remove()"></span>
</span>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'u-label',
    mixins: [MEmitter],
    props: {
        text: String,
        removable: { type: Boolean, default: false },
    },
    methods: {
        remove() {
            if (this.$emitPrevent('before-remove', null, this))
                return;
            this.$emit('remove', null, this);
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    line-height: var(--line-height-base);
    padding: var(--label-padding-y) var(--label-padding-x);
    font-size: var(--label-font-size);
    background: var(--label-background);
    color: var(--label-color);
    border-radius: var(--border-radius-base);
    white-space: nowrap;
}

.remove {
    display: inline;
    cursor: var(--cursor-pointer);
    opacity: 0.7;
    padding: var(--label-remove-padding-x);
    margin-right: calc(var(--label-remove-padding-x) * (-2));
}

.remove:hover {
    opacity: 1;
}

.remove::before {
    icon-font: url('../i-icon.vue/assets/close.svg');
}

.root[color="primary"] {
    background: var(--label-background-primary);
    color: var(--label-color-primary);
}

.root[color="success"] {
    background: var(--label-background-success);
    color: var(--label-color-success);
}

.root[color="normal"] {
    background: var(--label-background-normal);
    color: var(--label-color-normal);
}

.root[color="warning"] {
    background: var(--label-background-warning);
    color: var(--label-color-warning);
}

.root[color="error"] {
    background: var(--label-background-error);
    color: var(--label-color-error);
}

.root[size="small"] {
    padding: var(--label-padding-y-small) var(--label-padding-x-small);
    font-size: var(--label-font-size-small);
    line-height: var(--label-line-height-small);
}

.root[size="small"] .remove {
    padding: var(--label-remove-padding-x-small);
    margin-right: calc(var(--label-remove-padding-x-small) * (-2));
}

.root[size="large"] {
    padding: var(--label-padding-y-large) var(--label-padding-x-large);
    font-size: var(--label-font-size-large);
}

.root[size="large"] .remove {
    padding: var(--label-remove-padding-x-large);
    margin-right: calc(var(--label-remove-padding-x-large) * (-2));
}

.root[size="huge"] {
    padding: var(--label-padding-y-huge) var(--label-padding-x-huge);
    font-size: var(--label-font-size-huge);
}

.root[size="huge"] .remove {
    padding: var(--label-remove-padding-x-huge);
    margin-right: calc(var(--label-remove-padding-x-huge) * (-2));
}

.root[display="block"] {
    display: block;
}
</style>
