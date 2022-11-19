<template>
<div :class="$style.root" :readonly="readonly" :readonly-mode="readonlyMode" :disabled="disabled" @scroll="virtualList && updateVirtualList()">
    <u-loading v-if="loading" size="small"></u-loading>
    <template v-else-if="currentDataSource && !virtualList">
        <component :is="ChildComponent"
            v-for="node in currentDataSource.data"
            :text="$at(node, field || textField)"
            :value="$at(node, valueField)"
            :expanded="$at(node, expandedField)"
            :checked.sync="node.checked"
            :disabled="node.disabled"
            :childrenField="childrenField"
            :hidden="filterText ? $at(node, 'hiddenByFilter') : $at(node, hiddenField)"
            :node="node"
            :level="0"
            :draggable="node.draggable"
        ></component>
    </template>
    <slot v-if="!virtualList"></slot>
    <div v-else :style="{ height: totalHeight + 'px' }">
        <div :style="{ transform: `translate3d(0,${beforeHeight}px,0)` }">
            <u-tree-view-node v-for="props in seenNodes" :key="props.key" v-bind="props" ref="nodes"
                @toggle="props.expanded = $event.expanded"></u-tree-view-node>
        </div>
    </div>
</div>
</template>

<script>
import { MRoot } from '../m-root.vue';
import MField from '../m-field.vue';
import { debounce, throttle } from 'lodash';

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
        virtualList: { type: Boolean, default: false },
        scrollView: { type: Object, default: null },
    },
    data() {
        return {
            ChildComponent: this.$options.nodeName, // easy for SubComponent inheriting
            // @inherit: nodeVMs: [],
            currentDataSource: undefined,
            selectedVM: undefined,
            currentValues: this.values || [],
            loading: false,
            seenNodes: [],
            totalHeight: 0,
            beforeHeight: 0,
            nodeHeight: 24,
            nodeHeightUpdated: false,
        };
    },
    computed: {
        propsDataOfDataSource() {
            return this.flatPropsData(this.getPropsDataOfDataSource(this.currentDataSource && this.currentDataSource.data));
        },
        propsDataOfSlot() {
            return this.flatPropsData(this.getPropsDataOfSlot(this.$slots.default));
        },
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
            // this.selectedVM = undefined;
            this.watchValue(this.value);
        },
        scrollView: {
            handler(vm) {
                if(vm && this.virtualList)
                    vm.$on('scroll', this.updateVirtualList);
            },
            immediate: true,
        },
        propsDataOfSlot() {
            this.updateVirtualList && this.updateVirtualList();
        },
        propsDataOfDataSource() {
            this.updateVirtualList && this.updateVirtualList();
        },
    },
    created() {
        this.watchValue = debounce(this.watchValue);

        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.currentDataSource && this.currentDataSource.load && this.initialLoad)
            this.load();

        this.initVirtualList();        
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, nodeVMs have not been pushed.
        this.watchValue(this.value);
        this.watchValues(this.values);
        
        this.scrollIntoView();
    },
    methods: {
        initVirtualList() {
            if(!this.virtualList) return;
            
            this.updateVirtualList = throttle(this._updateVirtualList, 50);
            this.updateVirtualList();
        },
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

            if(this.virtualList)
                setTimeout(() => {
                    this.updateVirtualList();
                });
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
        getPropsDataOfSlot(vNodes = [], level = 0, _collapsedParentCount = 0) {
            const res = [];
            for(const vNode of vNodes) {
                const propsData = vNode.componentOptions && vNode.componentOptions.propsData || {};
                propsData._collapsedParentCount = _collapsedParentCount;
                propsData.level = level;

                propsData.node = propsData.node || {};
                propsData.node._children = [
                    ...this.getPropsDataOfDataSource(this.getChildren(propsData.node, propsData), level+1, propsData.expanded ? _collapsedParentCount: _collapsedParentCount+1),
                    ...this.getPropsDataOfSlot(vNode.componentOptions && vNode.componentOptions.children, level+1, propsData.expanded ? _collapsedParentCount: _collapsedParentCount+1)
                ];

                res.push(propsData);
            }
            return res;
        },
        currentChildrenField(node, propsData = {}) {
            if (propsData.childrenField)
                return propsData.childrenField;
            else if (node.childrenField)
                return node.childrenField;
            else
                return this.childrenField;
        },
        currentMoreChildrenFields(node, propsData = {}) {
            let fields;
            if (propsData.moreChildrenFields)
                fields = propsData.moreChildrenFields;
            else if (node.moreChildrenFields)
                fields = node.moreChildrenFields;
            else
                fields = this.moreChildrenFields;

            const { excludeFields } = this;
            fields = fields || [];
            return fields.filter((item) => !excludeFields.includes(item));
        },
        currentFields(node, propsData = {}) {
            const currentChildrenField = this.currentChildrenField(node, propsData);
            const currentMoreChildrenFields = this.currentMoreChildrenFields(node, propsData);
            let fields = [];
            if (!this.excludeFields.includes(currentChildrenField))
                fields = [currentChildrenField];
            if (currentMoreChildrenFields)
                fields = fields.concat(currentMoreChildrenFields);
            return fields;
        },
        getChildren(node, propsData = {}) {
            const fields = this.currentFields(node, propsData);
            let children = [];
            for(const field of fields) {
                if(node[field])
                    children = children.concat(node[field]);
            }
            return children;
        },
        getPropsDataOfDataSource(arr = [], level = 0, _collapsedParentCount = 0) {
            const res = [];
            for(const node of arr) {
                const propsData = {
                    text: this.$at(node, this.field || this.textField),
                    value: this.$at(node, this.valueField),
                    expanded: this.$at(node, this.expandedField),
                    checked: node.checked,
                    disabled: node.disabled,
                    childrenField: this.childrenField,
                    hidden: this.filterText ? this.$at(node, 'hiddenByFilter'):  this.$at(node, this.hiddenField),
                    node,
                    draggable: node.draggable,
                };
                propsData._collapsedParentCount = _collapsedParentCount;
                propsData.level = level;
                propsData.node._children = this.getPropsDataOfDataSource(this.getChildren(node), level+1, propsData.expanded ? _collapsedParentCount: _collapsedParentCount+1);
                res.push(propsData);
            }
            return res;
        },
        flatPropsData(propsData) {
            let res = [];
            for(const props of propsData) {
                res = [...res, props, ...this.flatPropsData(props.node && props.node._children || [])];
            }
            return res;
        },
        toggleData(nodes, expanded) {
            nodes && nodes.forEach((child) => {
                if(expanded) child._collapsedParentCount--;
                else child._collapsedParentCount++;
                this.toggleData(child.node._children, expanded);
            });
        },
        scrollIntoView() {
            if(!this.virtualList || this.value === undefined) return;

            const propsData = [...this.propsDataOfDataSource, ...this.propsDataOfSlot];
            const pos = propsData.findIndex(item => item.value === this.value);
            if(pos === -1) return;

            let level = propsData[pos].level;
            for(let i=pos;i>=0;i--) {
                const props = propsData[i];
                if(props.level < level) {
                    level = props.level;
                    if(props.node && !props.expanded) {
                        this.$set(props.node, 'expanded', true);
                        this.toggleData(props.node._children, true);                                
                    }
                }
                if(level === 0) break;
            }

            const { hiddenField, nodeHeight } = this;
            const seenNodes = propsData.filter(item => !item._collapsedParentCount && !(item.node && item.node[hiddenField]));
            const index = seenNodes.findIndex(item => item.value === this.value);

            let scrollTop;
            let clientHeight = 0;
            if(this.scrollView) {
                scrollTop = this.scrollView.$refs.wrap && this.scrollView.$refs.wrap.scrollTop || 0;
                clientHeight = this.scrollView.$refs.wrap && this.scrollView.$refs.wrap.clientHeight;
            } else {
                scrollTop = this.$el && this.$el.scrollTop || 0;
                clientHeight = this.$el && this.$el.clientHeight;
            }

            const viewBeg = Math.ceil(scrollTop / nodeHeight);
            const viewEnd = Math.floor((scrollTop + clientHeight) / nodeHeight);
            if(index >= viewBeg && index <= viewEnd)
                return;
            
            if(this.scrollView) {
                this.$nextTick(() => {
                    this.scrollView.$refs.wrap.scrollTop = nodeHeight * index;
                });
            } else
                this.$nextTick(() => {
                    this.$el.scrollTop = nodeHeight * index;           
                });
        },
        _updateVirtualList() {
            if(!this.nodeHeightUpdated && this.$refs.nodes && this.$refs.nodes[0].$el.clientHeight) {
                this.nodeHeight = this.$refs.nodes[0].$el.clientHeight;
                this.nodeHeightUpdated = true;
            }

            const { nodeHeight } = this;
            let scrollTop;
            let clientHeight = 0;
            if(this.scrollView) {
                scrollTop = this.scrollView.$refs.wrap && this.scrollView.$refs.wrap.scrollTop || 0;
                clientHeight = this.scrollView.$refs.wrap && this.scrollView.$refs.wrap.clientHeight;
            } else {
                scrollTop = this.$el && this.$el.scrollTop || 0;
                clientHeight = this.$el && this.$el.clientHeight;
            }
                
            const propsData = [...this.propsDataOfDataSource, ...this.propsDataOfSlot];
            const count = Math.ceil(clientHeight / nodeHeight);
            const beforeCount = count >> 1;
            const total = count * 2;

            const { hiddenField } = this;
            const nodes = propsData.filter((node) => !node._collapsedParentCount && !(node.node && node.node[hiddenField]));
            let begIndex = Math.floor(scrollTop / nodeHeight);
            const beforeBuffer = Math.min(beforeCount, begIndex);
            begIndex = begIndex - beforeBuffer;
            const endIndex = Math.min(begIndex + total, nodes.length);
            this.seenNodes = nodes.slice(begIndex, endIndex);
            this.cloneSameNodes(this.seenNodes);
            this.prepareKeys(this.seenNodes);
            this.beforeHeight = scrollTop - scrollTop % nodeHeight - beforeBuffer * nodeHeight;
            this.totalHeight = nodeHeight * nodes.length;

            if(this.value !== undefined) {
                this.$nextTick(() => {
                    this.selectedVM = this.nodeVMs.find((vm) => vm.value === this.value);
                });                
            }

        },
        cloneSameNodes(seenNodes) {
            const set = new Set();
            for(let i=0;i<seenNodes.length;i++) {
                const node = seenNodes[i];
                if(set.has(node)) {
                    seenNodes[i] = {...node};
                } else
                    set.add(node);
            }
        },
        prepareKeys(seenNodes) {
            const set = new Set();
            for(let i=0;i<seenNodes.length;i++) {
                const node = seenNodes[i];
                if(node.value) {
                    if(!set.has(node.value)) {
                        set.add(node.value);
                        node.key = node.value;
                    } else
                        node.key = `${node.value}_${i}`;
                }
            }
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
