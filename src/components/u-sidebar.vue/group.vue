<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.head" :selected="selected" @click="parentVM.expandTrigger === 'click' && toggle()" :title="title">
        <div :class="$style.title" vusion-slot-name="title">
            <slot name="title">{{ title }}</slot>
        </div>
        <span v-if="currentCollapsible" :class="$style.expander"
            :expanded="currentExpanded"
            @click="parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
        ></span>
        <span :class="$style.extra" vusion-slot-name="extra"><slot name="extra"></slot></span>
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
    name: 'u-sidebar-group',
    parentName: 'u-sidebar',
    childName: 'u-sidebar-item',
    extends: MGroup,
    computed: {
        selected() {
            return this.itemVMs.some((item) => item.active);
        },
    },
    methods: {
        toggle(expanded, mode) {
            if (
                this.disabled
                || this.parentVM.readonly
                || this.parentVM.disabled
            )
                return;
            const oldExpanded = this.currentExpanded;
            if (expanded === undefined)
                expanded = !this.currentExpanded;
            if (expanded === oldExpanded && !mode)
                return;
            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => (cancel = true),
            });
            if (cancel)
                return;
            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded);
            if (this.parentVM.accordion || mode) {
                this.parentVM.groupVMs.forEach((groupVM) => {
                    if (groupVM !== this) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }
            this.$emit('toggle', { expanded, groupVM: this });
            this.parentVM.onToggle({ expanded, groupVM: this });
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.head {
    display: block;
    cursor: var(--cursor-pointer);
    font-weight: var(--sidebar-group-head-font-weight);
    color: var(--sidebar-group-head-color);
    padding-left: var(--sidebar-group-head-padding-left);
    height: var(--sidebar-group-head-height);
    line-height: var(--sidebar-group-head-height);
    transition: color 0.2s;
    position: relative;
}

.head:hover {
    color: var(--sidebar-group-head-color-hover);
    /* background-color: #dde8f0; */
}
.head[selected] {
    color: var(--sidebar-group-head-color-selected);
}

/* @TODO: replace by icon-font */
.head:hover::after {
    border-left-color: white;
}

.text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.expander {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: var(--sidebar-group-head-height);
    height: var(--sidebar-group-head-height);
    line-height: var(--sidebar-group-head-height);
    text-align: center;
}

.expander::after {
    transition: transform var(--transition-duration-base);
    font-size: 16px;
    display: inline-block;
    icon-font: url('i-material-design.vue/assets/filled/keyboard_arrow_right.svg');
}

/* @TODO: replace by icon-font */
.expander[expanded]::after {
    transform: rotate(90deg);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
}

.root[disabled] .expander {
    color: var(--sidebar-expander-color-disabled);
}

.body {}
.title {}
.extra {
    position: absolute;
    right: 5px;
    top: 0;
}
</style>
