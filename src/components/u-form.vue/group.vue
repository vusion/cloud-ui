<template>
    <div :class="$style.root" :collapsible="currentCollapsible">
        <div :class="$style.head" @click="parentVM.expandTrigger === 'click' && toggle()" :title="title">
            <div :class="$style.title" vusion-slot-name="title">
                <slot name="title">{{ title }}</slot>
            </div>
            <span v-if="currentCollapsible" :class="$style.expander"
                :expanded="currentExpanded"
                @click="parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
            ></span>
            <div :class="$style.extra" vusion-slot-name="extra"><slot name="extra"></slot></div>
        </div>
        <f-collapse-transition>
            <div :class="$style.body" v-show="currentCollapsible ? currentExpanded : true">
                <slot></slot>
            </div>
        </f-collapse-transition>
    </div>
</template>

<script>
import { MGroup } from '../m-group.vue';

export default {
    name: 'u-form-group',
    parentName: 'u-form',
    childName: 'u-form-item',
    extends: MGroup,
    props: {},
};
</script>

<style module>
.root:not(:last-child) {
    margin-bottom: var(--form-group-space);
}

.head {
    position: relative;
    user-select: none;
    overflow: hidden;
    padding: var(--form-group-head-padding);
    margin: 0;
    line-height: var(--form-group-head-line-height);
    color: var(--form-group-head-color);
    background: var(--form-group-head-background);
    border-bottom: var(--form-group-head-border-width) solid var(--form-group-head-border-color);
}

.head::after {
    content: '';
    clear: both;
}

.head[expand-trigger="click"] {
    cursor: var(--cursor-pointer);
}

.root[collapsible] .head {
    cursor: var(--cursor-pointer);
    padding-left: 38px;
}

.title {
    display: inline-block;
}

.extra {
    float: right;
}

.expander {
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    z-index: 1;
    width: var(--collapse-item-expander-size);
    height: var(--collapse-item-expander-size);
    line-height: var(--collapse-item-expander-size);
    font-size: var(--collapse-item-expander-font-size);
    color: var(--collapse-item-expander-color);
    cursor: var(--cursor-pointer);
    text-align: center;
    transition: transform var(--collapse-transition-duration) ease-in-out;
}

.expander::before {
    icon-font: url('i-material-design.vue/assets/filled/keyboard_arrow_right.svg');
}

.expander[expanded] {
    transform: rotate(90deg);
}

.root[disabled] .head {
    cursor: var(--cursor-not-allowed);
    color: var(--collapse-item-head-color-disabled);
}

.root[disabled] .expander {
    color: var(--collapse-item-expander-color-disabled);
}

.body {
    padding: var(--form-group-body-padding-y) 0;
}

.root[appear="header"] .body {
    padding: 0;
}
</style>
