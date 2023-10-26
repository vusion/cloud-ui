<template>
<div :class="$style.root" :readonly="readonly" :readonly-mode="readonlyMode" :disabled="disabled">
    <u-loading v-if="loading" size="small"></u-loading>
    <template v-else-if="currentDataSource">
        <u-tree-view-node-new v-if="dataSource"
            v-for="(node, index) in currentDataSource.data"
            :text="$at2(node, field || textField)"
            :value="$at2(node, valueField)"
            :expanded="$at(node, expandedField)"
            :checked.sync="node.checked"
            :disabled="$at2(node, disabledField)"
            :children-field="childrenField"
            :hidden="filterText ? $at(node, 'hiddenByFilter') : $at(node, hiddenField)"
            :node="node"
            :node-key="`${index}`"
            :level="0"
            :designer="$env.VUE_APP_DESIGNER"
            :draggable="node.draggable"
        >
            <template #item="{item}">
<!--                <s-empty v-if="(!$slots.item) && $env.VUE_APP_DESIGNER "></s-empty>-->
                <slot name="item" v-bind="item">
                </slot>
            </template>
        </u-tree-view-node-new>
    </template>
    <template v-if="$env.VUE_APP_DESIGNER && !dataSource && !$slots.default">
        <span :class="$style.loadContent">{{ treeSelectTip }}</span>
    </template>
    <slot></slot>
</div>
</template>

<script>
import { MRoot } from '../m-root.vue';
import MField from '../m-field.vue';
import UTreeViewNodeNew from '../u-tree-view-new.vue/node.vue';

export default {
    name: 'u-tree-view-new',
    nodeName: 'u-tree-view-node-new',
    components: { UTreeViewNodeNew },
    mixins: [MRoot, MField],
    props: {
        value: null,
        field: String,
        data: [Array, Object, Function],
        dataSource: [Array, Object, Function],
        dataSchema: { type: String, default: 'entity' },
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        hiddenField: { type: String, default: 'hidden' },
        expandedField: { type: String, default: 'expanded' },
        isLeafField: { type: String, default: 'isLeaf' },
        childrenField: { type: String, default: 'children' },
        disabledField: { type: String, default: 'disabled' },
        parentField: { type: String, default: '' },
        treeSelectTip: { type: String, default: '请绑定数据源或插入树形视图节点' },
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
            currentValues: (this.checkable && this.value) || [],
            loading: false,
        };
    },
    computed: {
        scopeItem() {
            return `{ scope.item.${this.textField} }`;
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            // if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
            //     return;
            this.handleData();
        },
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.value || this.$at(selectedVM, this.valueField) : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                node: selectedVM ? selectedVM.node : undefined,
                oldNode: oldVM ? oldVM.node : undefined,
                nodeVM: selectedVM,
                oldVM,
            }, this);
        },
        nodeVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        },
    },
    created() {
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
            this.load();
        // console.log('Data', this.currentDataSource);
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, nodeVMs have not been pushed.
        this.watchValue(this.value, true);
    },
    methods: {
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
                this.load();
        },
        list2tree(list, idField, pField) {
            const [map, treeData] = [{}, []];
            for (let i = 0; i < list.length; i += 1) {
                map[this.$at(list[i], idField)] = i;
                this.$setAt(list[i], this.childrenField, []);
            }

            for (let i = 0; i < list.length; i += 1) {
                const node = list[i];
                if (this.$at(node, pField) && list[map[this.$at(node, pField)]]) {
                    this.$at(list[map[this.$at(node, pField)]], this.childrenField).push(node);
                } else {
                    treeData.push(node);
                }
            }
            return treeData;
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
                        if (self.parentField) {
                            // 兼容 { list, total }类型
                            let list = [];
                            if (Array.isArray(result)) {
                                list = result;
                            } else {
                                list = result.list;
                            }

                            const temp = JSON.parse(JSON.stringify(list));
                            final.data = self.list2tree(temp, self.valueField, self.parentField);
                        } else if (params.node) {
                            // 判断 load 数据，当数据 value 包含父节点时，不重复填充
                            const containParentNode = result.find((item) =>
                                self.$at(item, self.valueField) === params.nodeVM.value);
                            if (!containParentNode) {
                                self.$setAt(params.node, params.nodeVM.currentChildrenField, result);
                            }
                        } else
                            final.data = result;
                    }
                    if (params.node && !self.$at(params.node, params.nodeVM.currentChildrenField))
                        self.$setAt(params.node, self.isLeafField, true);
                };
            }

            if (Array.isArray(dataSource))
                if (this.parentField) {
                    const temp = JSON.parse(JSON.stringify(dataSource));
                    final.data = this.list2tree(temp, this.valueField, this.parentField);
                } else {
                    final.data = JSON.parse(JSON.stringify(dataSource)); // 数据深拷贝
                }
            else if (typeof dataSource === 'function') {
                final.load = createLoad(dataSource);
            } else if (typeof dataSource === 'object') {
                const data = dataSource.data || dataSource.list;

                if (this.parentField) {
                    const temp = JSON.parse(JSON.stringify(data));
                    final.data = this.list2tree(temp, this.valueField, this.parentField);
                } else {
                    final.data = data;
                }
                final.load = dataSource.load && createLoad(dataSource.load);
            }

            return final;
        },
        watchValue(value, isMounted = false) {
            if (this.checkable) {
                return this.watchValues(value, isMounted);
            }

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
        watchValues(values, isMounted = false) {
            if (values) {
                this.currentValues = values;
                this.walk((nodeVM) => {
                    if (values.includes(nodeVM.value)) {
                        nodeVM.check(true);
                    } else if (isMounted) {
                        nodeVM.check(false);
                    }
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
                if (values.length > 0) {
                    // 在组件非受控的情况下，当默认有值选中时，上报初始值以便外层组件数据同步
                    this.$emit('update:value', this.currentValues, this);
                }
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
            const actualValue = value || this.$at(node, this.valueField) || this.$at(this.selectedVM, this.valueField);
            this.$emit('input', this.checkable ? this.currentValues : actualValue, this);
            this.$emit('update:value', this.checkable ? this.currentValues : actualValue, this);
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
            // console.log('click', this.currentValues);
            this.$emit('update:value', this.currentValues, this);
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
            if (this.$emitPrevent('before-load', undefined, this))
                return;
            if (!this.currentDataSource.load)
                return;
            this.loading = true;
            this.currentDataSource.load(params).then(() => {
                this.loading = false;
                this.$emit('load', undefined, this);
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

.root .loadContent {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.root[size="mini"] .node_text {
    padding: var(--tree-view-node-text-padding–mini);
}

.root[display="full"] {
    width: 100%;
    height: 100%;
}
</style>
