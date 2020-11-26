<template>
<div :class="$style.root">
    <span v-if="readonly" :class="$style.readonly">
        <slot></slot>
    </span>
    <span v-else-if="disabled" :class="$style.disabled">
        <slot></slot>
    </span>
    <a v-else :class="$style.link" :href="currentHref" :target="target" :disabled="disabled" @click="onClick" v-on="listeners">
        <slot></slot>
    </a>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';
import ULink from '../u-link.vue';

export default {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    mixins: [MChild, ULink],
    props: {
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },
};
</script>

<style module>
.root {
    display: inline;
}

.root:not(:last-child)::after {
    content: '>';
    margin: 0 var(--crumb-space-x);
    vertical-align: 1px;
}

.link {
    color: var(--crumb-color-link);
}

.link:hover {
    text-decoration: underline;
}

.readonly {
    color: inherit;
    cursor: default;
}

.disabled {
    color: var(--crumb-color-disabled);
    cursor: default;
}
</style>
