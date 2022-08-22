<template>
<div :class="$style.root" :readonly="readonly" :readonly-mode="readonlyMode" :disabled="disabled">
    <u-loading v-if="loading" size="small"></u-loading>
    <template v-else-if="currentDataSource">
        <component :is="ChildComponent"
            v-for="node in currentDataSource.data"
            :text="$at(node, field || textField)"
            :value="$at(node, valueField)"
            :expanded="$at(node, expandedField)"
            :checked.sync="node.checked"
            :disabled="node.disabled"
            :hidden="filterText ? $at(node, 'hiddenByFilter') : $at(node, hiddenField)"
            :node="node"
            :level="0"
            :draggable="node.draggable"
        ></component>
    </template>
    <slot></slot>
</div>
</template>

<script>
import { MRoot } from '../m-root.vue';
import MField from '../m-field.vue';

export default {
    name: 'u-tree-view',
    nodeName: 'u-tree-view-node',
    mixins: [MRoot, MField],
    props: {
        flat: { type: Boolean, default: false },
        value: null,
        values: Array,
        field: String,
        data: Array,
        dataSource: [Array, Object, Function],
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        hiddenField: { type: String, default: 'hidden' },
        expandedField: { type: String, default: 'expanded' },
        isLeafField: { type: String, default: 'isLeaf' },
        childrenField: { type: String, default: 'children' },
        moreChildrenFields: Array,
        excludeFields: { type: Array, default: () => [] },
        cancelable: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        ifExpanded: { type: Boolean, default: false },
        initialLoad: { type: Boolean, default: true },
        readonly: { type: Boolean, default: false },
        readonlyMode: String,
        disabled: { type: Boolean, default: false },
        checkControlled: { type: Boolean, default: false },
        expanderWidth: { type: Number, default: 30 },
        paddingLeft: { type: Number, default: 0 },
        filterable: { type: Boolean, default: false },
        filterText: { type: String, default: '' },
        filterFields: { type: Array, default: () => ['text'] },
        draggable: { type: Boolean, default: false },
        subBackground: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: this.$options.nodeName, // easy for SubComponent inheriting
            // @inherit: nodeVMs: [],
            currentDataSource: undefined,
            selectedVM: undefined,
            currentValues: this.values || [],
            loading: false,
        };
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
                return;
            this.handleData();
        },
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.value || selectedVM[this.valueField] : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                node: selectedVM ? selectedVM.node : undefined,
                oldNode: oldVM ? oldVM.node : undefined,
                nodeVM: selectedVM,
                oldVM,
            }, this);
        },
        values(values) {
            this.watchValues(values);
        }, // currentValues(values, oldValues) {
        //     this.$emit('change', {
        //         values,
        //         oldValues,
        //     });
        // },
        // This method just run once after pushing many nodeVMs
        nodeVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        },
    },
    created() {
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
            this.load();
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, nodeVMs have not been pushed.
        this.watchValue(this.value);
        this.watchValues(this.values);
    },
    methods: {
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        },
        normalizeDataSource(dataSource) {
            const final = {
                data: [],
                load: undefined,
            };

            const self = this;
            function createLoad(rawLoad) {
                return async function (params = {}) {
                    const result = await rawLoad(params);
                    if (result) {
                        if (params.node) {
                            self.$setAt(params.node, params.nodeVM.currentChildrenField, result);
                        } else
                            final.data = result;
                    }
                    if (params.node && !this.$at(params.node, params.nodeVM.currentChildrenField))
                        self.$setAt(params.node, self.isLeafField, true);
                };
            }

            if (Array.isArray(dataSource))
                final.data = dataSource;
            else if (typeof dataSource === 'function') {
                final.load = createLoad(dataSource);
            } else if (typeof dataSource === 'object') {
                final.data = dataSource.data;
                final.load = dataSource.load && createLoad(dataSource.load);
            }

            return final;
        },
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = undefined;
            else {
                this.selectedVM = this.find((nodeVM) => nodeVM.value === value);
                if (this.selectedVM) {
                    let nodeVM = this.selectedVM.parentVM;
                    while (nodeVM !== this.rootVM) {
                        nodeVM.currentExpanded = true;
                        nodeVM = nodeVM.parentVM;
                    }
                }
            }
        },
        watchValues(values) {
            if (values) {
                this.currentValues = values;
                this.walk((nodeVM) => {
                    if (values.includes(nodeVM.value))
                        nodeVM.check(true);
                });
            } else {
                const values = [];
                this.walk((nodeVM) => {
                    if (nodeVM.currentChecked) {
                        if (this.checkControlled) {
                            values.push(nodeVM.value);
                        } else if (!nodeVM.nodeVMs.length) {
                            values.push(nodeVM.value);
                        }
                    }
                });
                this.currentValues = values;
            }
        },
        select(nodeVM) {
            if (this.readonly || this.disabled)
                return;
            const oldValue = this.value;
            const oldVM = this.selectedVM;
            let cancel = false;
            this.$emit(
                'before-select',
                {
                    value: nodeVM && nodeVM.value,
                    oldValue,
                    node: nodeVM && nodeVM.node,
                    oldNode: oldVM && oldVM.node,
                    nodeVM,
                    oldVM,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel)
                return;
            if (this.cancelable && this.selectedVM === nodeVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = nodeVM;
            const { value, node } = this.selectedVM || {};
            const actualValue = value || node && node[this.valueField] || this.selectedVM[this.valueField];
            this.$emit('input', actualValue, this);
            this.$emit('update:value', actualValue, this);
            this.$emit(
                'select',
                {
                    value: actualValue,
                    oldValue,
                    node,
                    oldNode: oldVM && oldVM.node,
                    nodeVM,
                    oldVM,
                },
                this,
            );
        },
        selectAndReveal(value, options) {
            this.selectedVM = this.find((nodeVM) => nodeVM.value === value);
            if (this.selectedVM) {
                let nodeVM = this.selectedVM.parentVM;
                while (nodeVM !== this.rootVM) {
                    nodeVM.currentExpanded = true;
                    nodeVM = nodeVM.parentVM;
                }
                setTimeout(() => this.selectedVM.$el && this.selectedVM.$el.scrollIntoView(options));
            }
        },
        onToggle(nodeVM, expanded) {
            this.$emit('toggle', { expanded, node: nodeVM.node, nodeVM }, this);
        },
        toggleAll(expanded) {
            this.walk((nodeVM) => nodeVM.toggle(expanded)); // @TODO: Only one event
        },
        onCheck(nodeVM, checked, oldChecked) {
            this.$emit(
                'check',
                {
                    checked,
                    oldChecked,
                    node: nodeVM.node,
                    nodeVM,
                    values: this.currentValues, // @TODO: oldValues
                },
                this,
            );
        },
        checkAll(checked) {
            this.nodeVMs.forEach(
                (nodeVM) =>
                    !nodeVM.currentDisabled && nodeVM.checkRecursively(checked),
            );
            this.$emit('check', { checked }, this);
        },
        load(params) {
            this.loading = true;
            this.currentDataSource.load(params).then(() => {
                this.loading = false;
            }).catch(() => this.loading = false);
        },
    },
};
</script>

<style module>
.root {
    user-select: none;
    overflow-x: hidden;
    overflow-y: auto;

    background: var(--tree-view-background);
    border: 1px solid var(--border-color-base);
}

.root[readonly-mode="initial"] {
    user-select: initial;
}

.root[size="mini"] .node_expander {
    width: var(--tree-view-node-expander-size-mini);
    height: var(--tree-view-node-expander-size-mini);
    line-height: var(--tree-view-node-expander-size-mini);
}

.root[size="mini"] .node_text {
    padding: var(--tree-view-node-text-padding–mini);
}

.root[display="full"] {
    width: 100%;
    height: 100%;
}
</style>
