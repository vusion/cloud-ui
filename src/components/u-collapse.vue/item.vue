<template>
<div :class="$style.root" :disabled="disabled" :expanded="currentExpanded">
    <div :class="$style.head" :expand-trigger="parentVM.expandTrigger" @click="parentVM.expandTrigger === 'click' && toggle()">
        <span :class="$style.title" vusion-slot-name="title">
            <slot name="title">{{ title }}</slot>
        </span>
        <span :class="$style.expander"
            :expanded="currentExpanded"
            @click="parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
        ></span>
        <span :class="$style.extra" vusion-slot-name="extra">
            <slot name="extra"></slot>
            <!-- 使模板可控制empty-slot的显隐 -->
            <s-empty v-if="parentVM.showExtraEmptySlot && (!$slots.extra) && $env.VUE_APP_DESIGNER" :class="$style.emptySlot"></s-empty>
        </span>
    </div>
    <f-collapse-transition>
        <div :class="$style.body" v-show="currentExpanded">
            <slot name="body">
                <div :class="$style.content" vusion-slot-name="default">
                    <slot></slot>
                    <s-empty v-if="(!$slots.default) && $env.VUE_APP_DESIGNER"></s-empty>
                </div>
            </slot>
        </div>
    </f-collapse-transition>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [MChild],
    components: {
        SEmpty,
    },
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    methods: {
        expand() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (this.currentExpanded)
                return;
            if (this.$emitPrevent('before-expand', {}, this))
                return;
            this.currentExpanded = true;
            this.$emit('update:expanded', true, this);
            if (this.parentVM.accordion) {
                this.parentVM.itemVMs.forEach((itemVM) => {
                    if (itemVM !== this && itemVM.currentExpanded)
                        itemVM.collapse();
                });
            }
            this.$emit('expand', {}, this);
            this.parentVM.onItemExpand(this);
        },
        collapse() {
            if (this.disabled || this.parentVM.disabled)
                return;
            if (!this.currentExpanded)
                return;
            if (this.$emitPrevent('before-collapse', {}, this))
                return;
            this.currentExpanded = false;
            this.$emit('update:expanded', false, this);
            this.$emit('collapse', {}, this);
            this.parentVM.onItemCollapse(this);
        },
        designerControl() {
            this.toggle();
        },
        toggle(expanded) {
            if (expanded === undefined)
                expanded = !this.currentExpanded;
            expanded ? this.expand() : this.collapse();
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.root + .root {
    border-top: var(--collapse-border-width) solid var(--collapse-border-color);
}

.head {
    user-select: none;
    padding: var(--collapse-item-head-padding);
    background: var(--background-color-default);
    overflow: hidden;
}

.head[expand-trigger="click"] {
    cursor: var(--cursor-pointer);
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
    icon-font: url("i-material-design.vue/assets/filled/keyboard_arrow_right.svg");
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

.extra {
    float: right;
}

.emptySlot {
    width: auto;
}

.body {
    border-top: var(--collapse-border-width) solid var(--collapse-border-color);
    transition: var(--collapse-transition-duration) height ease-in-out,
        var(--collapse-transition-duration) padding-top ease-in-out,
        var(--collapse-transition-duration) padding-bottom ease-in-out;
}

.content {
    padding: var(--collapse-item-content-padding);
}
</style>
