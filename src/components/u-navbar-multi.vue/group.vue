<template>
    <div :class="isInNavbar ? $style.root : $style.dropdownRoot" ref="root" @click.stop>
        <div :class="$style.head" :selected="selected" vusion-click-enabled>
            <div :class="$style.title" vusion-slot-name="title" vusion-slot-name-edit="title">
                <i-ico v-if="icon" :name="icon" :class="$style.singleicon" notext></i-ico>
                <slot name="title">
                    {{ title }}
                </slot>
                <s-empty v-if="!$slots.title && !title && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
            </div>
            <div v-if="!isInNavbar">
                <u-loading v-if="loading" size="small"></u-loading>
                <span v-else :class="$style.expander"></span>
            </div>
        </div>
        <m-popper
            v-if="!loading"
            :class="$style.popper"
            :trigger="rootVM.trigger"
            :placement="placement"
            :disabled="disabled"
            :reference="$refs.root"
            append-to="reference"
            :opened="currentExpanded"
            @update:opened="toggle($event)"
            :offset="popperOffset">
            <div :class="$style.body" vusion-slot-name="default" v-show="currentCollapsible ? currentExpanded : true">
                <template v-for="(childNode, idx) in childrenNodes">
                    <u-navbar-group-multi
                        v-if="hasChildren(childNode)"
                        :key="$at2(childNode, rootVM.valueField) || idx"
                        :node="childNode"
                        :disabled="childNode.disabled"
                        :collapsible="$at2(childNode, rootVM.collapsibleField)"
                        :title="$at2(childNode, rootVM.textField)"
                        :icon="$at2(node, rootVM.iconField)"
                        :inner-idx="idx"></u-navbar-group-multi>
                    <u-navbar-item-multi
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
                        :disabled="childNode.disabled"></u-navbar-item-multi>
                </template>
                <slot></slot>
                <div v-if="!$slots.default && !hasChildren(node) && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']" vusion-empty-background="add-sub" style="padding: 20px 0"></div>
            </div>
        </m-popper>
        <template v-if="isInNavbar">
            <i-ico v-if="loading" :class="[$style.icon, $style.iconLoading]" name="loading"></i-ico>
            <i-ico v-else :class="$style.icon" name="bottom-arrow"></i-ico>
        </template>
    </div>
</template>

<script>
import { MGroup } from '../m-group.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-navbar-group-multi',
    parentName: 'u-navbar-multi',
    childName: 'u-navbar-item-multi',
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
        placement() {
            return this.isInNavbar ? 'bottom-start' : 'right-start';
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

        isInNavbar() {
            return this.parentVM.$options.name === this.$options.parentName;
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
    display: inline-block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    height: var(--navbar-height);
    line-height: var(--navbar-height);
    border: none;
    padding: var(--navbar-dropdown-padding);
    font-size: var(--navbar-item-font-size);
    color: var(--navbar-color);
}

.root:not(:last-child) {
    margin-right: var(--navbar-item-space);
}

.dropdownRoot {
    display: block;
    position: relative;
    z-index: 1;
    cursor: var(--cursor-pointer);
    line-height: 32px;
    padding: 0 12px;
    font-size: 14px;
    color: var(--color-base);
    text-align: left;
}
.dropdownRoot:hover {
    color: var(--brand-primary);
}

.root .icon{
    position: absolute;
    height: auto;
    line-height: var(--navbar-height);
    color: var(--navbar-color);
    font-size: 14px;
    right: 6px;
    top: 0;
}

.root .iconLoading {
    animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
    0%{
       transform: rotate(0deg);
    }
    100%{
       transform: rotate(360deg);
    }
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: var(--cursor-pointer);
}
.head svg {
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

.loading .loading_text {
    margin-left: 4px;
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
