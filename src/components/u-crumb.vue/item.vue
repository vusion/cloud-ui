<template>
<div :class="$style.root">
    <span v-if="readonly" :class="$style.readonly">
        <i-ico v-if="parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </span>
    <span v-else-if="disabled" :class="$style.disabled">
        <i-ico v-if="parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </span>
    <a v-else :class="$style.link" :href="currentHref" :target="target" :disabled="disabled" @click="onClick" v-on="listeners">
        <i-ico v-if="parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </a>
    <i-ico v-if="parentVM.separator === 'arrow'" name="right-arrow" notext :class="$style.separator" ></i-ico>
    <span v-else-if="parentVM.separator === 'slash'" :class="$style.separator" >/</span>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';
import ULink from '../u-link.vue';
import IIco from '../i-ico.vue';

export default {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    components: { IIco },
    mixins: [MChild, ULink],
    props: {
        text: String,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        icon: { type: String, default: null },
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
    color: var(--crumb-color-disabled);
}

.root .separator {
    margin: 0 var(--crumb-space-x);
}

.root:last-child .separator {
    display: none;
}

.icon {
    margin-right: var(--crumb-space-x);
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
