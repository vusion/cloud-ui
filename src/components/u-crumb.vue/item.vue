<template>
<div :class="$style.root">
    <span v-if="readonly" :class="$style.readonly" vusion-slot-name="default">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
        <s-empty v-if="(!$slots.default && !text) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']" :class="$style.empty"></s-empty>
    </span>
    <span v-else-if="disabled" :class="$style.disabled" vusion-slot-name="default">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
        <s-empty v-if="(!$slots.default && !text) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']" :class="$style.empty"></s-empty>
    </span>
    <a v-else :class="$style.link" :href="currentHref" :target="target" :disabled="disabled" @click="onClick" v-on="listeners" vusion-slot-name="default">
        <i-ico v-if="!parentVM.auto && parentVM.icon" :name="icon" notext :class="$style.icon"></i-ico>
        <slot>{{ text }}</slot>
        <s-empty v-if="(!$slots.default && !text) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']" :class="$style.empty"></s-empty>
    </a>
    <span :class="$style.separator" :icon="parentVM.separator"></span>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';
import ULink from '../u-link.vue';
import IIco from '../i-ico.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    components: { IIco, SEmpty },
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
    display: inline-block;
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

/* 在 Safari 中 :last-child 与 display: none 并存时偶现渲染问题 */
.root:last-child .separator {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    height: 0;
    width: 0;
    margin: 0;
    font-size: 0;
    line-height: 0;
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

.empty {
    width: calc(100% - 25px);
}
.icon + .empty {
    width: calc(100% - 50px);
}
</style>
