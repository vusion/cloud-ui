<template>
<div :class="$style.root" v-show="!hidden">
    <div :class="$style.item" :selected="selected" :style="{ paddingLeft: level * 30 + 'px' }"
        :readonly="rootVM.readonly" :readonly-mode="rootVM.readonlyMode"
        :disabled="currentDisabled"
        :tabindex="disabled || rootVM.readonly || rootVM.disabled ? '' : 0"
        @click="select(), rootVM.expandTrigger === 'click' && toggle()"
        @dblclick="onDblclick($event)"
        @contextmenu="onRightClick($event)"
        @keyup.enter="select()"
        @keyup.left="toggle(false)"
        @keyup.right="toggle(true)">
        <u-loading v-if="loading" :class="$style.loading" size="small"></u-loading>
        <div :class="$style.expander"
            v-else-if="node && $at(node, currentChildrenField) || nodeVMs.length || (node && !$at(node, rootVM.isLeafField) && rootVM.currentDataSource && rootVM.currentDataSource.load)"
            :expand-trigger="rootVM.expandTrigger" :expanded="currentExpanded"
            @click="rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"></div>
        <div :class="$style.text">
            <u-checkbox v-if="rootVM.checkable" :value="currentChecked" :disabled="currentDisabled" @check="check($event.value)" @click.native.stop></u-checkbox>
            <f-slot name="text" :vm="currentTextSlotVM" :props="{
                data: node && $at(node, currentChildrenField),
                text,
                value,
                expanded: currentExpanded,
                checked: currentChecked,
                disabled: currentDisabled,
                node,
                parent,
            }">
                <span>{{ text }}</span>
            </f-slot>
        </div>
    </div>
    <div :class="$style.sub" v-if="rootVM.ifExpanded ? currentExpanded : true" v-show="currentExpanded">
        <template v-if="node && $at(node, currentChildrenField)">
            <u-tree-view-node
                v-for="subNode in $at(node, currentChildrenField)"
                :text="$at(subNode, rootVM.field || rootVM.textField)"
                :value="$at(subNode, rootVM.valueField)"
                :expanded.sync="subNode.expanded"
                :checked.sync="subNode.checked"
                :disabled="subNode.disabled"
                :hidden="subNode.hidden"
                :node="subNode"
                :parent="node"
                :level="level + 1"
            ></u-tree-view-node>
        </template>
        <template v-if="currentMoreChildrenFields">
            <template v-for="subField in currentMoreChildrenFields" v-if="node && $at(node, subField)">
                <u-tree-view-node
                    v-for="subNode in $at(node, subField)"
                    :text="$at(subNode, rootVM.field || rootVM.textField)"
                    :value="$at(subNode, rootVM.valueField)"
                    :expanded.sync="subNode.expanded"
                    :checked.sync="subNode.checked"
                    :disabled="subNode.disabled"
                    :hidden="subNode.hidden"
                    :node="subNode"
                    :parent="node"
                    :level="level + 1"
                ></u-tree-view-node>
            </template>
        </template>
        <slot></slot>
    </div>
</div>
</template>

<script>
import { MNode } from '../m-root.vue';

export default {
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
    mixins: [MNode],
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        hidden: { type: Boolean, default: false },
        childrenField: String,
        moreChildrenFields: Array,
        node: Object,
        parent: Object,
        level: { type: Number, default() {
            // eslint-disable-next-line no-nested-ternary
            return this.$parent ? (this.$parent.level !== undefined ? this.$parent.level + 1 : 0) : 0;
        } },
    },
    data() {
        return {
            loading: false,
            // @inherit: nodeVMs: [],
            // @inherit: rootVM: undefined,
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
            currentChecked: this.checked,
        };
    },
    computed: {
        selected() {
            return this.rootVM.selectedVM === this;
        },
        currentDisabled() {
            return (
                this.disabled
                || this.rootVM.disabled
                || (this.parentVM && this.parentVM.currentDisabled)
            );
        },
        currentChildrenField() {
            if (this.childrenField)
                return this.childrenField;
            else if (this.node && this.node.childrenField)
                return this.node.childrenField;
            else
                return this.rootVM.childrenField;
            // let vm = this;
            // while (vm) {
            //     if (vm.childrenField)
            //         return vm.childrenField;
            //     vm = vm.parentVM;
            // }
        },
        currentMoreChildrenFields() {
            if (this.moreChildrenFields)
                return this.moreChildrenFields;
            else if (this.node && this.node.moreChildrenFields)
                return this.node.moreChildrenFields;
            else
                return this.rootVM.moreChildrenFields;
            // let vm = this;
            // while (vm) {
            //     if (vm.moreChildrenFields)
            //         return vm.moreChildrenFields;
            //     vm = vm.parentVM;
            // }

            // return undefined;
        },
        currentTextSlotVM() {
            let vm = this;
            while (vm) {
                if (vm.$scopedSlots.text || vm.$slots.text)
                    return vm;
                vm = vm.parentVM;
            }

            return this.rootVM;
        },
    },

    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
        checked(checked) {
            this.currentChecked = checked;
        },
        nodeVMs() {
            this.rootVM.selectedVM = undefined;
            this.rootVM.watchValue(this.rootVM.value);
        },
    },

    methods: {
        select() {
            if (this.currentDisabled || this.rootVM.readonly)
                return;

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;

            this.rootVM.select(this);
        },
        onDblclick(e) {
            this.rootVM.$emit('node-dblclick', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                e,
            });
        },
        onRightClick(e) {
            this.rootVM.$emit('node-rightclick', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                e,
            });
        },
        load() {
            this.loading = true;
            return this.rootVM.currentDataSource.load({
                value: this.value,
                node: this.node,
                nodeVM: this,
                parent: this.parent,
                childrenField: this.currentChildrenField,
            }).then(() => {
                this.loading = false;
            }).catch(() => this.loading = false);
        },
        reload() {
            this.load();
        },
        designerControl() {
            this.toggle();
        },
        toggle(expanded) {
            if (this.currentDisabled)
                return;
            if (!(this.node && this.$at(this.node, this.currentChildrenField)
                || this.nodeVMs.length
                || (this.node && !this.$at(this.node, this.rootVM.isLeafField) && this.rootVM.currentDataSource && this.rootVM.currentDataSource.load)))
                return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            if (expanded === oldExpanded)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                node: this.node,
                nodeVM: this,
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;

            const final = () => {
                this.currentExpanded = expanded;
                this.$emit('update:expanded', expanded, this);

                if (this.rootVM.accordion) {
                    (this.parentVM || this.rootVM).nodeVMs.forEach((nodeVM) => {
                        if (nodeVM !== this) {
                            nodeVM.currentExpanded = false;
                            nodeVM.$emit('update:expanded', false);
                        }
                    });
                }

                this.$emit('toggle', {
                    expanded,
                    node: this.node,
                    nodeVM: this,
                }, this);

                this.rootVM.onToggle(this, expanded);
            };

            if (expanded && (this.node && !this.$at(this.node, this.currentChildrenField) && !this.node.isLeaf && this.rootVM.currentDataSource.load)) {
                this.load().then(() => final());
            } else
                final();
        },
        checkControlled(checked) {
            this.currentChecked = checked;
            this.$emit('update:checked', checked, this);
            if (
                checked
                && !this.rootVM.currentValues.includes(this.value)
            )
                this.rootVM.currentValues.push(this.value);
            else if (!checked && this.rootVM.currentValues.includes(this.value))
                this.rootVM.currentValues.splice(
                    this.rootVM.currentValues.indexOf(this.value),
                    1,
                );
        },
        checkRecursively(checked, direction = 'up+down') {
            this.currentChecked = checked;
            this.$emit('update:checked', checked, this);

            if (
                checked
                && !this.rootVM.currentValues.includes(this.value)
                && !this.nodeVMs.length
            )
                this.rootVM.currentValues.push(this.value);
            else if (!checked && this.rootVM.currentValues.includes(this.value))
                this.rootVM.currentValues.splice(
                    this.rootVM.currentValues.indexOf(this.value),
                    1,
                );

            // down
            if (direction.includes('down')) {
                this.nodeVMs.forEach((nodeVM) => {
                    !nodeVM.currentDisabled
                        && nodeVM.checkRecursively(checked, 'down');
                });
            }

            // up
            const parentVM = this.parentVM;
            if (direction.includes('up') && parentVM) {
                let count = 0;
                parentVM.nodeVMs.forEach((nodeVM) => {
                    if (nodeVM.currentChecked)
                        count++;
                    else if (nodeVM.currentChecked === null)
                        count += 0.5;
                });

                if (count === 0)
                    parentVM.checkRecursively(false, 'up');
                else if (count === parentVM.nodeVMs.length)
                    parentVM.checkRecursively(true, 'up');
                else
                    parentVM.checkRecursively(null, 'up');
            }
        },
        check(checked) {
            const oldChecked = this.currentChecked;

            if (this.rootVM.checkControlled) {
                this.checkControlled(checked);
            } else {
                this.checkRecursively(checked);
            }

            this.$emit(
                'check',
                {
                    checked,
                    oldChecked,
                    node: this.node,
                    nodeVM: this,
                },
                this,
            );

            this.rootVM.onCheck(this, checked, oldChecked);
        },
    },
};
</script>

<style module>
.root {}

.item {
    cursor: var(--cursor-pointer);
    position: relative;
    border-radius: var(--tree-view-node-background-border-radius);
    /* margin-left: var(--tree-view-node-margin-left); */
}

.sub {}

.expander {
    position: absolute;
    z-index: 1;
    top: 0;
    width: var(--tree-view-node-expander-size);
    height: var(--tree-view-node-expander-size);
    line-height: var(--tree-view-node-expander-size);
    text-align: center;
    transition: transform var(--transition-duration-base);
}

.expander::before {
    icon-font: url('i-material-design.vue/assets/filled/arrow_right.svg');
}

.expander[expand-trigger="click-expander"] {
    cursor: pointer;
}

.expander[expanded] {
    transform: rotate(90deg);
}

.loading {
    position: absolute;
    z-index: 1;
    top: 7px;
    margin-left: 7px;
}

.text {
    position: relative;
    margin-left: var(--tree-view-node-margin-left);
    padding: var(--tree-view-node-text-padding);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item:hover {
    background: var(--tree-view-node-background-active);
}

.item:focus {
    outline: var(--focus-outline);
}

.item:focus {
    background: var(--tree-view-node-background-active);
}

.item[readonly] {
    cursor: initial;
}

.item[readonly-mode="initial"] {
    background: var(--tree-view-node-background-readonly-initial);
}

.item[selected] {
    background: var(--tree-view-node-background-selected);
}

.item[selected] .text {
    color: var(--tree-view-node-color-selected);
}

.item[selected] .expander {
    color: var(--tree-view-node-expander-color-selected);
}

.item[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    color: var(--tree-view-node-color-disabled);
}

.item[disabled] {
    background: var(--tree-view-node-background-disabled);
}

.item[selected][disabled] {
    background: var(--tree-view-node-background-selected-disabled);
}
</style>
