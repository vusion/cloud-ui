<template>
<div :class="$style.root" v-show="!hidden">
    <div :class="$style.item" :selected="selected"
        :readonly="rootVM.readonly"
        :disabled="currentDisabled"
        :tabindex="disabled || rootVM.readonly || rootVM.disabled ? '' : 0"
        @click="select(), rootVM.expandTrigger === 'click' && toggle()"
        @keyup.enter="select()"
        @keyup.left="toggle(false)"
        @keyup.right="toggle(true)">
        <div :class="$style.back"></div>
        <div :class="$style.expander" v-if="data || nodeVMs.length"
            :expanded="currentExpanded"
            @click="rootVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"></div>
        <div :class="$style.text">
            <u-checkbox v-if="rootVM.checkable" :value="currentChecked" :disabled="currentDisabled" @check="check($event.value)" @click.native.stop></u-checkbox>
            <u-tree-view-text
                :data="data"
                :text="text"
                :value="value"
                :expanded="currentExpanded"
                :checked="currentChecked"
                :disabled="currentDisabled"
                :node="node"
            ></u-tree-view-text>
        </div>
    </div>
    <div :class="$style.sub" v-show="currentExpanded">
        <template v-if="data">
            <u-tree-view-node
                v-for="node in data"
                :text="node[rootVM.field || rootVM.textField]"
                :value="node[rootVM.valueField]"
                :expanded.sync="node.expanded"
                :checked.sync="node.checked"
                :disabled="node.disabled"
                :hidden="node.hidden"
                :data="node.children"
                :node="node"
            ></u-tree-view-node>
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
        node: Object,
    },

    data() {
        return {
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
                this.disabled ||
                this.rootVM.disabled ||
                (this.parentVM && this.parentVM.currentDisabled)
            );
        },
    },

    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
        checked(checked) {
            this.currentChecked = checked;
        },
    },

    methods: {
        select() {
            if (this.currentDisabled || this.rootVM.readonly) return;

            let cancel = false;
            this.$emit(
                'before-select',
                {
                    value: this.value,
                    node: this.node,
                    nodeVM: this,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel) return;

            this.rootVM.select(this);
        },
        toggle(expanded) {
            if (this.currentDisabled || this.rootVM.readonly) return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined) expanded = !this.currentExpanded;

            if (expanded === oldExpanded) return;

            let cancel = false;
            this.$emit(
                'before-toggle',
                {
                    expanded,
                    node: this.node,
                    nodeVM: this,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel) return;

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

            this.$emit(
                'toggle',
                {
                    expanded,
                    node: this.node,
                    nodeVM: this,
                },
                this,
            );

            this.rootVM.onToggle(this, expanded);
        },
        checkRecursively(checked, direction = 'up+down') {
            this.currentChecked = checked;
            this.$emit('update:checked', checked, this);

            if (
                checked &&
                !this.rootVM.currentValues.includes(this.value) &&
                !this.nodeVMs.length
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
                    !nodeVM.currentDisabled &&
                        nodeVM.checkRecursively(checked, 'down');
                });
            }

            // up
            const parentVM = this.parentVM;
            if (direction.includes('up') && parentVM) {
                let count = 0;
                parentVM.nodeVMs.forEach((nodeVM) => {
                    if (nodeVM.currentChecked) count++;
                    else if (nodeVM.currentChecked === null) count += 0.5;
                });

                if (count === 0) parentVM.checkRecursively(false, 'up');
                else if (count === parentVM.nodeVMs.length)
                    parentVM.checkRecursively(true, 'up');
                else parentVM.checkRecursively(null, 'up');
            }
        },
        check(checked) {
            const oldChecked = this.currentChecked;

            this.checkRecursively(checked);

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
.root {
    cursor: var(--cursor-pointer);
    margin-left: var(--tree-view-node-margin-left);
}

.item {
    position: relative;
}

.sub {}

.back {
    position: absolute;
    left: -10000px;
    right: -10000px;
    height: 100%;
}

.expander {
    position: absolute;
    z-index: 1;
    width: var(--tree-view-node-expander-size);
    height: var(--tree-view-node-expander-size);
    line-height: var(--tree-view-node-expander-size);
    text-align: center;
    margin-top: -1px;
    margin-left: calc(var(--tree-view-node-margin-left) * -1);
}

.expander::before {
    content: '▸';
}

.expander[expanded]::before {
    content: '▾';
}

.text {
    position: relative;
    padding: var(--tree-view-node-text-padding);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item:hover .back {
    background: var(--tree-view-node-background-active);
}

.item:focus {
    outline: var(--focus-outline);
}

.item:focus .back {
    background: var(--tree-view-node-background-active);
}

.item[readonly] {
    cursor: default;
}

.item[readonly] .back {
    background: var(--tree-view-node-background-readonly);
}

.item[selected] .back {
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

.item[disabled] .back {
    background: var(--tree-view-node-background-disabled);
}

.item[selected][disabled] .back {
    background: var(--tree-view-node-background-selected-disabled);
}
</style>
