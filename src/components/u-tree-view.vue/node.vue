<template>
<div :class="$style.root" v-show="!hidden">
    <div :class="$style.item" :selected="selected" :style="{ paddingLeft: rootVM.flat ? '0' : level * expanderWidth + paddingLeft + 'px' }"
        :readonly="rootVM.readonly" :readonly-mode="rootVM.readonlyMode"
        :subBackground="rootVM.subBackground"
        :disabled="currentDisabled"
        :tabindex="disabled || rootVM.readonly || rootVM.disabled ? '' : 0"
        @click="select(), rootVM.expandTrigger === 'click' && toggle()"
        @dblclick="onDblclick($event)"
        @contextmenu="onRightClick($event)"
        @keyup.enter="select()"
        @keyup.left="toggle(false)"
        @keyup.right="toggle(true)"
        :dragging="currentDragging"
        @dragstart="onDragStart($event)"
        @dragover="onDragOver($event)"
        @dragleave="onDragLeave($event)"
        @dragend="onDragEnd($event)"
        @drop="onDrop($event)">
        <u-loading v-if="loading" :class="$style.loading" size="small"></u-loading>
        <div :class="$style.expander"
            ref="clickExpander"
            v-else-if="(hasChildren || nodeVMs.length || (node && !$at(node, rootVM.isLeafField) && rootVM.currentDataSource && rootVM.currentDataSource.load)) && !rootVM.flat"
            :expand-trigger="rootVM.expandTrigger" :expanded="currentExpanded"
            @click="rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
            :style="{ width : expanderWidth? expanderWidth + 'px':'' }"
            :dragover="expanderDragover"></div>
        <div :class="$style.text" :style="{ marginLeft : expanderWidth? expanderWidth + 'px':'' }" :draggable="draggable || rootVM.draggable">
            <u-checkbox v-if="rootVM.checkable" :value="currentChecked" :disabled="currentDisabled" @check="check($event.value)" @click.native.stop></u-checkbox>
            <f-slot name="text" :vm="currentTextSlotVM" :props="{
                data: node && $at(node, currentChildrenField),
                text,
                value,
                expanded: currentExpanded,
                checked: currentChecked,
                disabled: currentDisabled,
                node,
                nodeVM: this,
                parent,
                selected,
                draggable,
                dragging: currentDragging,
            }">
                <span>{{ text }}</span>
            </f-slot>
        </div>
    </div>
    <div :class="$style.sub" v-if="rootVM.ifExpanded && !childrenRendered && node && !node.childrenRendered ? currentExpanded : true" v-show="currentExpanded">
        <template v-if="node && $at(node, currentChildrenField) && !rootVM.excludeFields.includes(currentChildrenField)">
            <u-tree-view-node
                v-for="subNode in $at(node, currentChildrenField)"
                :text="$at(subNode, rootVM.field || rootVM.textField)"
                :value="$at(subNode, rootVM.valueField)"
                :expanded="rootVM.filterText ? $at(subNode, 'expandedByFilter') : $at(subNode, rootVM.expandedField)"
                :checked.sync="subNode.checked"
                :disabled="subNode.disabled"
                :hidden="rootVM.filterText ? $at(subNode, 'hiddenByFilter') : $at(subNode, rootVM.hiddenField)"
                :node="subNode"
                :parent="node"
                :level="level + 1"
                :draggable="subNode.draggable"
            ></u-tree-view-node>
        </template>
        <template v-if="currentMoreChildrenFields">
            <template v-for="subField in currentMoreChildrenFields" v-if="node && $at(node, subField)">
                <u-tree-view-node
                    v-for="subNode in $at(node, subField)"
                    :text="$at(subNode, rootVM.field || rootVM.textField)"
                    :value="$at(subNode, rootVM.valueField)"
                    :expanded="rootVM.filterText ? $at(subNode, 'expandedByFilter') : $at(subNode, rootVM.expandedField)"
                    :checked.sync="subNode.checked"
                    :disabled="subNode.disabled"
                    :hidden="rootVM.filterText ? $at(subNode, 'hiddenByFilter') : $at(subNode, rootVM.hiddenField)"
                    :node="subNode"
                    :parent="node"
                    :level="level + 1"
                    :draggable="subNode.draggable"
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
        draggable: { type: Boolean, default: false },
        dragExpanderDelay: { type: Number, default: 1500 },
    },
    data() {
        return {
            loading: false,
            // @inherit: nodeVMs: [],
            // @inherit: rootVM: undefined,
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
            currentChecked: this.checked,
            childrenRendered: this.expanded,
            currentDragging: false,
            expanderDragover: false,
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
            let fields;
            if (this.moreChildrenFields)
                fields = this.moreChildrenFields;
            else if (this.node && this.node.moreChildrenFields)
                fields = this.node.moreChildrenFields;
            else
                fields = this.rootVM.moreChildrenFields;

            const { excludeFields } = this.rootVM;
            fields = fields || [];
            return fields.filter((item) => !excludeFields.includes(item));
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
        currentFields() {
            const { currentChildrenField, currentMoreChildrenFields } = this;
            let fields = [];
            if (!this.rootVM.excludeFields.includes(currentChildrenField))
                fields = [currentChildrenField];
            if (currentMoreChildrenFields)
                fields = fields.concat(currentMoreChildrenFields);
            return fields;
        },
        hasChildren() {
            const { node } = this;
            if (!node)
                return false;

            for (const field of this.currentFields) {
                if (this.$at(node, field) && this.$at(node, field).length !== 0)
                    return true;
            }
            return false;
        },
        expanderWidth() {
            return this.rootVM && this.rootVM.expanderWidth || 30;
        },
        paddingLeft() {
            return this.rootVM && this.rootVM.paddingLeft || 0;
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
        currentExpanded(currentExpanded) {
            if (currentExpanded)
                this.childrenRendered = true;
        },
        'node.childrenRendered'(childrenRendered) {
            if (childrenRendered)
                this.childrenRendered = true;
        },
        'rootVM.value'() {
            this.renderSelectedVm();
        },
        'rootVM.filterText'(filterText) {
            this.filter();
        },
    },
    created() {
        this.renderSelectedVm();
    },
    mounted() {
        this.$nextTick(() => {
            if(this.selected) this.$el.scrollIntoView({ block: 'center' });         
        });
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
            if (!(this.hasChildren
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
        renderSelectedVm() {
            if (!this.$parent || !this.$parent.$options.name === 'u-tree-view')
                return;
            if (!this.rootVM || !this.rootVM.value)
                return;

            const { value, valueField } = this.rootVM;
            const { currentFields, node, $at } = this;

            const that = this;
            function dfs(node, parent = null, fields) {
                if (!node)
                    return;

                if ($at(node, valueField) === value) {
                    if (parent)
                        that.$set(parent, 'childrenRendered', true);
                    return;
                }

                if (!fields) {
                    const childrenField = node.childrenField || that.rootVM.childrenField;
                    const moreChildrenFields = node.moreChildrenFields || that.rootVM.moreChildrenFields;
                    fields = [childrenField];
                    if (moreChildrenFields)
                        fields = fields.concat(moreChildrenFields);
                }

                for (const field of fields) {
                    if (!$at(node, field))
                        continue;

                    for (const child of $at(node, field)) {
                        dfs(child, node);
                    }
                }

                if (node.childrenRendered && parent)
                    that.$set(parent, 'childrenRendered', true);
            }
            dfs(node, null, currentFields);
        },

        filter() {
            if (!this.$parent || this.$parent.$options.name !== 'u-tree-view')
                return;
            if (!this.rootVM || !this.rootVM.filterable)
                return;

            let { filterText, filterFields } = this.rootVM;
            filterText = filterText.trim().toLowerCase();
            if(!filterText) return;

            const { currentFields, node, $at } = this;

            const that = this;
            function dfs(node, parent = null, fields) {
                if (!node)
                    return;

                const hiddenByFilter = filterFields.every((field) => !$at(node, field) || !$at(node, field).toLowerCase().includes(filterText));
                that.$set(node, 'hiddenByFilter', hiddenByFilter);
                that.$set(node, 'expandedByFilter', false);

                if (!fields) {
                    const childrenField = node.childrenField || that.rootVM.childrenField;
                    const moreChildrenFields = node.moreChildrenFields || that.rootVM.moreChildrenFields;
                    fields = [childrenField];
                    if (moreChildrenFields)
                        fields = fields.concat(moreChildrenFields);
                }

                for (const field of fields) {
                    if (!$at(node, field))
                        continue;

                    for (const child of $at(node, field)) {
                        dfs(child, node);
                    }
                }

                if ((!hiddenByFilter || node.expandedByFilter) && parent) {
                    that.$set(parent, 'expandedByFilter', true);
                    that.$set(parent, 'hiddenByFilter', false);
                }
            }
            dfs(node, null, currentFields);

            if (node.expandedByFilter)
                this.currentExpanded = node.expandedByFilter;
        },
        onDragStart(e) {
            this.currentDragging = true;
            this.rootVM && this.rootVM.$emit('dragstart', {
                node: this.node,
                nodeVM: this,
                value: this.value,
                parent: this.parent,
                level: this.level,
                event: e,
            });
        },
        onDragOver(e) {
            this.rootVM && this.rootVM.$emit('dragover', {
                node: this.node,
                nodeVM: this,
                value: this.value,
                parent: this.parent,
                level: this.level,
                event: e,
            });
            this.startExpanderTimer(e);
        },
        onDragLeave(e) {
            this.clearExpanderTimer();
        },
        onDragEnd(e) {
            this.currentDragging = false;
            this.rootVM && this.rootVM.$emit('dragend', {
                node: this.node,
                nodeVM: this,
                value: this.value,
                parent: this.parent,
                level: this.level,
                event: e,
            });
            this.clearExpanderTimer();
        },
        onDrop(e) {
            this.rootVM && this.rootVM.$emit('drop', {
                node: this.node,
                nodeVM: this,
                value: this.value,
                parent: this.parent,
                level: this.level,
                event: e,
            });
            this.clearExpanderTimer();
        },
        /**
         * 悬停1.5s,展开收起
         */
        startExpanderTimer(e) {
            const clickExpanderEl = this.$refs.clickExpander;
            if (clickExpanderEl) {
                const clickExpanderRect = clickExpanderEl.getBoundingClientRect();
                if (clickExpanderRect.right >= e.x && (e.y <= clickExpanderRect.bottom && e.y >= clickExpanderRect.top)) {
                    if (!this.expanderTimer) {
                        this.startPosition = e;
                        this.expanderTimer = setInterval(() => {
                            this.currentExpanded = !this.currentExpanded;
                            if (!(Math.abs(this.startPosition.x - e.x) <= 5 && Math.abs(this.startPosition.y - e.y) <= 5)) {
                                clearTimeout(this.expanderTimer);
                                this.expanderTimer = null;
                            }
                        }, 1500);
                    }
                    this.expanderDragover = true;
                } else {
                    clearTimeout(this.expanderTimer);
                    this.expanderTimer = null;
                    this.expanderDragover = false;
                }
            }
        },
        clearExpanderTimer() {
            clearTimeout(this.expanderTimer);
            this.expanderTimer = null;
            this.expanderDragover = false;
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
    color: var(--tree-view-node-expander-color);
    font-size: var(--tree-view-node-expander-font-size);
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

.expander[dragover] {
    color: var(--tree-view-node-expander-color-hover);
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

.item:hover .expander{
    color: var(--tree-view-node-expander-color-hover);
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
.item[disabled] .expander {
    color: var(--tree-view-node-expander-color-disabled);
}
.item[subBackground][selected] + .sub {
    background: var(--tree-view-subnode-background-selected);
}
.item[subBackground][selected] + .sub .item:hover {
    background: var(--tree-view-subnode-background-selected-hover);
}
.item[dragging] {
    background: var(--tree-view-node-background-dragging);
}
.item[dragging] .expander {
    color: var(--tree-view-node-expander-color-dragging);
}
.item[dragging] .text {
    color: var(--tree-view-node-color-dragging);
}
.item[dragging] + .sub {
    background: var(--tree-view-subnode-background-dragging);
    color: var(--tree-view-subnode-color-dragging);
}
.item[dragging][selected] + .sub {
    background: var(--tree-view-subnode-background-dragging);
    color: var(--tree-view-subnode-color-dragging);
}
</style>
