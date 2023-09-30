<template>
<div :class="[$style.root, rootVM.currentCollapse && !isInSidebar ? $style.popRoot : $style.normalRoot]" :disabled="disabled" :mini="onlyIcon" ref="root">
    <div :class="$style.head" :selected="selected" @click="rootVM.expandTrigger === 'click' && !rootVM.currentCollapse && toggle()" :title="title" :data-group-nested-level="currentGroupNestedLevel">
        <i-ico
            v-if="onlyIcon||icon"
            :name="icon || 'success'"
            :class="$style.singleicon"
            notext
        ></i-ico>
        <span v-else :class="$style.singleicon" style="width: 16px"></span>
        <div :class="$style.title" vusion-slot-name="title" vusion-slot-name-edit="title">
            <slot name="title" v-if="!hiddenText">
                {{ title }}
                <s-empty
                    v-if="!$slots.title
                        && !title
                        && !hiddenText
                        && $env.VUE_APP_DESIGNER
                        && !!$attrs['vusion-node-path']">
                </s-empty>
            </slot>
        </div>
        <u-loading v-if="!hiddenText && loading" :class="$style.loading" size="small"></u-loading>
        <span v-else-if="!hiddenText &&currentCollapsible && !(rootVM.currentCollapse && isInSidebar)" :class="$style.expander"
            :expanded="currentExpanded"
            @click="rootVM.expandTrigger === 'click-expander' && !rootVM.currentCollapse && ($event.stopPropagation(), toggle())"
        ></span>
        <span v-if="!hiddenText" :class="$style.extra" vusion-slot-name="extra"><slot name="extra"></slot></span>
    </div>
    <m-popper
        v-if="rootVM.currentCollapse"
        :class="$style.popper"
        :reference="$refs.root"
        :trigger="rootVM.trigger"
        placement="right-start"
        :disabled="disabled"
        :append-to="isInSidebar ? 'body': 'reference'"
        @before-open="$event=>collapsible === false && $event.preventDefault()"
        @update:opened="toggle($event)"
        :offset="popperOffset"
    >
        <div :class="$style.body">
            <template v-for="(childNode,idx) in childrenNodes">
                <u-sidebar-group
                    v-if="hasChildren(childNode)"
                    :key="$at2(childNode, rootVM.valueField) || idx"
                    :node="childNode"
                    :disabled="childNode.disabled"
                    :collapsible="$at2(childNode, rootVM.collapsibleField)"
                    :title="$at2(childNode, rootVM.textField)"
                    :icon="$at2(childNode, rootVM.iconField)"
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
    </m-popper>
    <f-collapse-transition>
        <div :class="$style.body" vusion-slot-name="default" v-show="currentCollapsible ? currentExpanded : true" v-if="!rootVM.currentCollapse">
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
        icon: String,
    },

    data() {
        return {
            rootVM: undefined,
            loading: false,
        };
    },

    computed: {
        popperOffset() {
            let isFirstItem = false;
            if (this.innerIdx !== undefined) {
                // 这是由childNodes动态渲染的
                isFirstItem = this.innerIdx === 0;
            } else if (Array.isArray(this.parentVM.childrenNodes) && this.parentVM.childrenNodes.length === 0 && this.parentVM.$slots.default) {
                // 这是由tag模式静态指定
                isFirstItem = this.parentVM.$slots.default.indexOf(this.$vnode) === 0;
                // console.log('%c [ this.parentVM.$slots.default.indexOf(this.$vnode) ]-158', 'font-size:13px; background:pink; color:#bf2c9f;', this.parentVM.$slots.default.indexOf(this.$vnode))
            }
            return isFirstItem ? [-8, 4] : [4, 4];
        },
        selected() {
            return this.itemVMs.some((item) => item.active);
        },

        childrenNodes() {
            if (!this.node) {
                return [];
            }
            return this.$at(this.node, this.rootVM.childrenField) || [];
        },

        isInSidebar() {
            return this.parentVM.$options.name === this.$options.parentName;
        },

        onlyIcon() {
            return this.isInSidebar && this.rootVM.currentCollapse;
        },
        hiddenText() {
            return this.isInSidebar && this.rootVM.currentCollapse && this.rootVM.isTransitionEnd;
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
            const hasChildren = this.itemVMs.length > 0 || this.groupVMs.length > 0;
            const hasRemoteChildren = this.node && !this.$at(this.node, this.rootVM.isLeafField) && this.rootVM.currentDataSource && this.rootVM.currentDataSource.load;
            if (!hasChildren && !hasRemoteChildren)
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
                if ((this.parentVM && this.parentVM.accordion) || mode) {
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

.root[mini]{
    padding-left: 0;
}

.popRoot{
    display: block;
    position: relative;
    z-index: 1;
    line-height: 32px;
    padding: 0 32px 0 12px;
    font-size: 14px;
}

.head {
    display: flex;
    cursor: var(--cursor-pointer);
    font-weight: var(--sidebar-group-head-font-weight);
    color: var(--sidebar-group-head-color);
    transition: color 0.2s;
    border-bottom: var(--sidebar-group-head-border-bottom-width) solid var(--sidebar-group-head-border-bottom-color);
}

.normalRoot .head {
    padding-left: var(--sidebar-group-head-padding-left);
    height: var(--sidebar-group-head-height);
    position: relative;
    line-height: var(--sidebar-group-head-height);
}
.popperRoot .head{
    display: flex;
    align-items: center;
}

.normalRoot[mini] .singleicon {
    margin-left: -8px;
}

.normalRoot .singleicon {
    margin-left: -18px;
}

.root .singleicon {
    margin-right: 8px;
}

.root .singleicon {
    font-size: var(--sidebar-item-icon-font-size);
    color: var(--sidebar-item-icon-color);
}

.root:hover .singleicon {
    color: var(--sidebar-item-icon-color-hover);
}
.root[selected] .singleicon {
    color: var(--sidebar-item-icon-color-selected);
}

.normalRoot .title{
    padding-right: 32px;
}

.normalRoot[mini] .title{
    padding-right: 0;
}

.normalRoot .title{
    flex: 1;
}

.popRoot:hover .head,
.head:hover {
    color: var(--sidebar-group-head-color-hover);
}

.normalRoot .head:hover{
    background-color: var(--sidebar-group-head-background-hover);
}

.normalRoot .head[data-group-nested-level]:hover::before{
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
.normalRoot .head[data-group-nested-level="1"]:hover::before{
    width: calc(1*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="2"]:hover::before{
    width: calc(2*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="3"]:hover::before{
    width: calc(3*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="4"]:hover::before{
    width: calc(4*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="5"]:hover::before{
    width: calc(5*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="6"]:hover::before{
    width: calc(6*var(--sidebar-group-padding-left));
}
.normalRoot .head[data-group-nested-level="7"]:hover::before{
    width: calc(7*var(--sidebar-group-padding-left));
}

.head[selected] {
    color: var(--sidebar-group-head-color-selected);
}

/* @TODO: replace by icon-font */
.normalRoot .head:hover::after {
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
    text-align: center;
}

.normalRoot .expander{
    width: var(--sidebar-group-head-height);
    height: var(--sidebar-group-head-height);
    line-height: var(--sidebar-group-head-height);
}

.popRoot .expander{
    transform: translateX(-100%);
}

.expander::after {
    transition: transform var(--transition-duration-base);
    font-size: 16px;
    display: inline-block;
    icon-font: url('i-material-design.vue/assets/filled/keyboard_arrow_right.svg');
}

/* @TODO: replace by icon-font */
.normalRoot .expander[expanded]::after {
    transform: rotate(90deg);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
}

.root[disabled] .expander {
    color: var(--sidebar-expander-color-disabled);
}

.popper {
    /* margin-left: var(--sidebar-group-popper-margin-left); */
    /* width: var(--sidebar-width); */
    background: var(--sidebar-background);
    min-width: 120px;
    line-height: var(--navbar-dropdown-popper-line-height);
    font-size: var(--navbar-dropdown-popper-font-size);
    padding: 8px 0px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
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
