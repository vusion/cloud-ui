<template>
<div :class="$style.root">
    <span v-if="readonly" :class="$style.readonly">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </span>
    <span v-else-if="disabled" :class="$style.disabled">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </span>
    <a v-else :class="$style.link" :href="currentHref" :target="target" :disabled="disabled" @click="onClick" v-on="listeners">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
    </a>
    <span :class="$style.separator" :icon="parentVM.separator"></span>
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
    display: inline-block;
    line-height: initial;
    font-size: 12px;
    margin: 0 var(--crumb-space-x);
}

.root .separator[icon="arrow"]::before {
    icon-font: url("../i-icon.vue/icons/line-right.svg");
}

.root .separator[icon="slash"]::before {
    icon-font: url("../i-icon.vue/icons/slash.svg");
}

.root:last-child .separator {
    display: none;
}

.icon {
    line-height: initial;
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
