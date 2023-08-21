<template>
<div :class="$style.root" :disabled="disabled">
    <div :class="$style.head" :selected="selected" @click="rootVM.expandTrigger === 'click' && toggle()" :title="title" :data-group-nested-level="currentGroupNestedLevel">
        <div :class="$style.title" vusion-slot-name="title" vusion-slot-name-edit="title">
            <slot name="title">
                {{ title }}
                <s-empty
                    v-if="!$slots.title
                        && !title
                        && $env.VUE_APP_DESIGNER
                        && !!$attrs['vusion-node-path']">
                </s-empty>
            </slot>
        </div>
        <u-loading v-if="loading" :class="$style.loading" size="small"></u-loading>
        <span v-else-if="currentCollapsible && !rootVM.collapse" :class="$style.expander"
            :expanded="currentExpanded"
            @click="rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
        ></span>
        <span :class="$style.extra" vusion-slot-name="extra"><slot name="extra"></slot></span>
    </div>
    <m-popper :class="$style.popper" reference="$parent" v-if="rootVM.collapse" placement="right-start">
        <div :class="$style.body">
            <slot></slot>
        </div>
    </m-popper>
    <f-collapse-transition v-else>
        <div :class="$style.body" vusion-slot-name="default" v-show="currentCollapsible ? currentExpanded : true">
            <template v-for="(childNode,idx) in childrenNodes">
                <u-sidebar-group
                    v-if="hasChildren(childNode)"
                    :key="$at2(childNode, rootVM.valueField) || idx"
                    :node="childNode"
                    :disabled="childNode.disabled"
                    :collapsible="$at2(childNode, rootVM.collapsibleField)"
                    :title="$at2(childNode, rootVM.textField)"
                ></u-sidebar-group>
                <u-sidebar-item v-else
                    :key="`${$at2(childNode, rootVM.valueField) || idx}`"
                    :text="$at2(childNode, rootVM.textField)"
                    :replace="$at2(childNode, rootVM.replaceField)"
                    :exact="$at2(childNode, rootVM.exactField)"
                    :value="$at2(childNode, rootVM.valueField)"
                    :icon="$at2(childNode, rootVM.iconField)"
                    :link-type="$at2(childNode, rootVM.linkTypeField)"
                    :href-and-to="$at2(childNode, rootVM.hrefAndToField)"
                    :to="$at2(childNode, rootVM.toField)"
                    :target="$at2(childNode, rootVM.targetField)"
                    :disabled="childNode.disabled"
                ></u-sidebar-item>
            </template>
            <slot></slot>
            <div
                v-if="(!$slots.default)&& !hasChildren && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"
                vusion-empty-background="add-sub"
                style="padding: 20px 0;">
            </div>
        </div>
    </f-collapse-transition>
</div>
</template>

<script>
import { MGroup } from '../m-group.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-sidebar-group',
    parentName: 'u-sidebar',
    childName: 'u-sidebar-item',
    components: {
        SEmpty,
    },
    extends: MGroup,

    provide() {
        return {
            groupNestedLevel: this.currentGroupNestedLevel + 1,
        };
    },

    inject: {
        currentGroupNestedLevel: {
            from: 'groupNestedLevel',
            default: 0,
        },
    },

    props: {
        node: Object,
    },

    data() {
        return {
            rootVM: undefined,
            loading: false,
        };
    },

    computed: {
        selected() {
            return this.itemVMs.some((item) => item.active);
        },

        childrenNodes() {
            if (!this.node) {
                return [];
            }
            return this.$at(this.node, this.rootVM.childrenField) || [];
        },
    },

    created() {
        !this.rootVM
            && this.$contact(this.$options.parentName, (rootVM) => {
                this.rootVM = rootVM;
            });
    },

    methods: {
        hasChildren(node) {
            return this.rootVM.hasChildren(node || this.node);
        },
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
            if (!(this.itemVMs.length
                || (this.node && !this.$at(this.node, this.rootVM.isLeafField) && this.rootVM.currentDataSource && this.rootVM.currentDataSource.load)))
                return;
            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => (cancel = true),
            });
            if (cancel)
                return;
            const final = () => {
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
                this.rootVM.onToggle({ expanded, groupVM: this });
            };

            if (expanded && (this.node && !this.$at(this.node, this.rootVM.childrenField) && !this.$at(this.node, this.rootVM.isLeafField) && this.rootVM.currentDataSource.load)) {
                this.load().then(() => final());
            } else {
                final();
            }
        },
        load() {
            this.loading = true;
            return this.rootVM.currentDataSource.load({
                node: this.node,
                nodeVM: this,
                childrenField: this.rootVM.childrenField,
            }).then(() => {
                this.loading = false;
            }).catch(() => this.loading = false);
        },
        reload() {
            this.load();
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    padding-left: var(--sidebar-group-padding-left);
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
    border-bottom: var(--sidebar-group-head-border-bottom-width) solid var(--sidebar-group-head-border-bottom-color);
}
.title{
    padding-right: 32px;
}

.head:hover {
    color: var(--sidebar-group-head-color-hover);
    background-color: var(--sidebar-group-head-background-hover);
}

.head[data-group-nested-level]:hover::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    /* width: var(--sidebar-group-padding-left); */
    color: var(--sidebar-group-head-color-hover);
    background-color: var(--sidebar-group-head-background-hover);
    /* transform: translateX(calc(-100% - var(--sidebar-group-head-padding-left))); */
    transform: translateX(-100%);
}

/* 当前仅支持7层嵌套的情况，7+的情况大致会很少出现 */
.head[data-group-nested-level="1"]:hover::before{
    width: calc(1*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="2"]:hover::before{
    width: calc(2*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="3"]:hover::before{
    width: calc(3*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="4"]:hover::before{
    width: calc(4*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="5"]:hover::before{
    width: calc(5*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="6"]:hover::before{
    width: calc(6*var(--sidebar-group-padding-left));
}
.head[data-group-nested-level="7"]:hover::before{
    width: calc(7*var(--sidebar-group-padding-left));
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


.loading {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: var(--sidebar-group-head-height);
    height: var(--sidebar-group-head-height);
    line-height: var(--sidebar-group-head-height);
    text-align: center;
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

.popper {
    margin-left: var(--sidebar-group-popper-margin-left);
    width: var(--sidebar-width);
    background: var(--sidebar-background);
}

.body {}
.title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.extra {
    position: absolute;
    right: 5px;
    top: 0;
}
</style>
