<template>
    <div :class="$style.root" ref="root" @click.stop>
        <div :class="$style.head" :selected="selected" vusion-click-enabled>
            <div
                :class="$style.title"
                vusion-slot-name="title"
                vusion-slot-name-edit="title"
            >
                <i-ico
                    v-if="icon"
                    :name="icon"
                    :class="$style.singleicon"
                    notext
                ></i-ico>
                <slot name="title">
                    {{ title }}
                </slot>
                <s-empty v-if="!$slots.title && !title && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
            </div>
            <div>
                <u-loading v-if="loading" size="small"></u-loading>
                <span v-else :class="$style.expander"></span>
                <span :class="$style.extra">
                    <slot name="extra"></slot>
                </span>
            </div>
        </div>
        <m-popper
            v-if="!loading"
            :class="$style.popper"
            :reference="$refs.root"
            :trigger="rootVM.trigger"
            placement="right-start"
            :disabled="disabled"
            :append-to="rootVM.appendTo"
            :opened="($env.VUE_APP_DESIGNER && collapsible === false ) ? false :currentExpanded"
            @before-open="$event=>collapsible === false && $event.preventDefault()"
            @update:opened="toggle($event)"
            :offset="popperOffset"
            >
            <div :class="$style.body" vusion-slot-name="default" v-show="currentCollapsible ? currentExpanded : true">
                <template v-for="(childNode, idx) in childrenNodes">
                    <u-dropdown-group
                        v-if="hasChildren(childNode)"
                        :key="$at2(childNode, rootVM.valueField) || idx"
                        :node="childNode"
                        :disabled="childNode.disabled"
                        :collapsible="$at2(childNode, rootVM.collapsibleField)"
                        :title="$at2(childNode, rootVM.textField)"
                        :icon="$at2(node, rootVM.iconField)"
                        :inner-idx="idx"
                        ></u-dropdown-group>
                    <u-dropdown-item
                        v-else
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
                        :disabled="childNode.disabled"></u-dropdown-item>
                </template>
                <slot></slot>
                <div v-if="!$slots.default && !hasChildren(node) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']" vusion-empty-background="add-sub" style="padding: 20px 0"></div>
            </div>
        </m-popper>
    </div>
</template>

<script>
import { MGroup } from '../m-group.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-dropdown-group',
    parentName: 'u-dropdown',
    childName: 'u-dropdown-item',
    components: {
        SEmpty,
    },
    mixins: [MGroup],

    props: {
        node: Object,
        innerIdx: { type: Number, default: undefined },
        icon: String,
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
        popperOffset() {
            let isFirstItem = false;
            if (this.innerIdx !== undefined) {
                // 这是由childNodes动态渲染的
                isFirstItem = this.innerIdx === 0;
            } else if (Array.isArray(this.parentVM.childrenNodes) && this.parentVM.childrenNodes.length === 0 && this.parentVM.$slots.default) {
                // 这是由tag模式静态指定
                isFirstItem = this.parentVM.$slots.default.indexOf(this.$vnode) === 0;
            }
            return isFirstItem ? [-8, 4] : [4, 4];
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
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled) {
                return;
            }
            const oldExpanded = this.currentExpanded;
            if (expanded === undefined) {
                expanded = !this.currentExpanded;
            }
            if (expanded === oldExpanded && !mode) {
                return;
            }
            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => (cancel = true),
            });
            if (cancel) {
                return;
            }
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

            if (expanded && this.node && !this.$at(this.node, this.rootVM.childrenField) && !this.$at(this.node, this.rootVM.isLeafField) && this.rootVM.currentDataSource.load) {
                this.load().then(() => final());
            } else {
                final();
            }
        },
        load() {
            this.loading = true;
            return this.rootVM.currentDataSource
                .load({
                    node: this.node,
                    nodeVM: this,
                    childrenField: this.rootVM.childrenField,
                })
                .then(() => {
                    this.loading = false;
                })
                .catch(() => (this.loading = false));
        },
        reload() {
            this.load();
        },
    },
};
</script>

<style module>

.root {
    display: block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    line-height: 32px;
    padding: 0 32px 0 12px;
    font-size: 14px;
    color: var(--color-base);
    text-align: left;
}
.root:hover {
    color: var(--brand-primary);
}

.root[readonly] {
    cursor: default;
    background: none;
}

.root[selected] {
    color: var(--brand-primary);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--font-disabled-color);
}

.root[selected][disabled] {
    background: var(--background-color-disabled);
}
.root .singleicon {
    margin-right: 4px;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: var(--cursor-pointer);
}

.title{
    flex: 1;
}
.head svg{
    font-size: 16px;
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
    text-align: center;
    transform: translateX(-100%);
}

.loading {
    padding: 8px;
}

.loading .loading_text{
    margin-left: 4px
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

.popper {
    width: var(--dropdown-popper-width);
    min-width: 120px;
    line-height: var(--navbar-dropdown-popper-line-height);
    font-size: var(--navbar-dropdown-popper-font-size);
    padding: 8px 0px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background: #fff;
}
</style>
