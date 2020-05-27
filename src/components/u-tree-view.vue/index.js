import { MRoot } from '../m-root.vue';
import MField from '../m-field.vue';

export const UTreeView = {
    name: 'u-tree-view',
    nodeName: 'u-tree-view-node',
    mixins: [MRoot, MField],
    props: {
        value: null,
        values: Array,
        field: String,
        data: Array,
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        cancelable: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: this.$options.nodeName, // easy for SubComponent inheriting
            // @inherit: nodeVMs: [],
            selectedVM: undefined,
            currentValues: this.values || [],
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                node: selectedVM ? selectedVM.node : undefined,
                oldNode: oldVM ? oldVM.node : undefined,
                nodeVM: selectedVM,
                oldVM,
            }, this);
        },
        values(values) {
            this.watchValues(values);
        },
        // currentValues(values, oldValues) {
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
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, nodeVMs have not been pushed.
        this.watchValue(this.value);
        this.watchValues(this.values);
    },
    methods: {
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
                    if (nodeVM.currentChecked && !nodeVM.nodeVMs.length)
                        values.push(nodeVM.value);
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
            this.$emit('before-select', {
                value: nodeVM && nodeVM.value,
                oldValue,
                node: nodeVM && nodeVM.node,
                oldNode: oldVM && oldVM.node,
                nodeVM,
                oldVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            if (this.cancelable && this.selectedVM === nodeVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = nodeVM;

            const value = this.selectedVM && this.selectedVM.value;
            const node = this.selectedVM && this.selectedVM.node;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value,
                oldValue,
                node,
                oldNode: oldVM && oldVM.node,
                nodeVM,
                oldVM,
            }, this);
        },
        onToggle(nodeVM, expanded) {
            this.$emit('toggle', {
                expanded,
                node: nodeVM.node,
                nodeVM,
            }, this);
        },
        toggleAll(expanded) {
            this.walk((nodeVM) => nodeVM.toggle(expanded));
            // @TODO: Only one event
        },
        onCheck(nodeVM, checked, oldChecked) {
            this.$emit('check', {
                checked,
                oldChecked,
                node: nodeVM.node,
                nodeVM,
                values: this.currentValues,
                // @TODO: oldValues
            }, this);
        },
        checkAll(checked) {
            this.nodeVMs.forEach((nodeVM) => !nodeVM.currentDisabled && nodeVM.checkRecursively(checked));

            this.$emit('check', {
                checked,
            }, this);
        },
    },
};

export { UTreeViewNode } from './node.vue';
export { UTreeViewText } from './text.vue';

export default UTreeView;
