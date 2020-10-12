<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled">
    <slot></slot>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';
import { MParent } from '../m-parent.vue';

export default {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MEmitter, MParent],
    props: {
        value: Array,
        keepOrder: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVMs: [],
        };
    },
    watch: {
        value(value, oldValue) {
            if (!Array.isArray(value))
                throw new Error('`value` should be an Array!'); // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (value !== oldValue && value.length === oldValue.length
            //     && value.every((val, index) => val === oldValue[index]))
            //     return;
            this.watchValue(value);
        },
        selectedVMs(selectedVMs, oldVMs) {
            // const oldValue = oldVMs.map((itemVM) => itemVM.value);
            const value = selectedVMs.map((itemVM) => itemVM.value); // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (value.length === oldValue.length && value.every((val, index) => val === oldValue[index]))
            //     return;
            const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('change', {
                value, // @TODO: oldValue,
                items: selectedItems,
                itemVMs: selectedVMs,
            });
        }, // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.watchValue(this.value);
        },
    },
    mounted() {
        // Don't need trigger `value` watcher at mounted hook.
        // Because there's a watcher for itemVMs.
        // this.watchValue(this.value);
        this.$emit('update', this.value, this);
    },
    methods: {
        watchValue(value) {
            let selectedVMs = [];
            const selectedMap = {}; // 对于过滤、分页等功能，需要保留原来的 selectedVMs
            this.selectedVMs.forEach((selectedVM) => {
                if (value.includes(selectedVM.value))
                    selectedMap[selectedVM.value] = selectedVM;
            });
            if (value) {
                if (!this.keepOrder) {
                    value.forEach((val) => {
                        const itemVM = this.itemVMs.find(
                            (itemVM) => itemVM.value === val,
                        );
                        if (itemVM)
                            selectedMap[itemVM.value] = itemVM;
                    });
                } else {
                    this.itemVMs.forEach((itemVM) => {
                        if (value.includes(itemVM.value))
                            selectedMap[itemVM.value] = itemVM;
                    });
                }
                selectedVMs = Object.values(selectedMap); // 必须单独指定一遍，因为有取消掉的
                this.itemVMs.forEach(
                    (itemVM) =>
                        (itemVM.currentSelected = value.includes(itemVM.value)),
                );
            } else {
                this.itemVMs.forEach(
                    (itemVM) =>
                        itemVM.currentSelected && selectedVMs.push(itemVM),
                );
            }
            this.selectedVMs = selectedVMs;
        },
        watchSelectedChange(selectedVM) {
            if (!this.keepOrder) {
                const index = this.selectedVMs.indexOf(selectedVM);
                if (selectedVM.currentSelected && (!~index || this.duplicated))
                    this.selectedVMs.push(selectedVM);
                else if (!selectedVM.currentSelected && ~index)
                    this.selectedVMs.splice(index, 1);
            } else
                this.selectedVMs = this.itemVMs.filter(
                    (itemVM) => itemVM.currentSelected,
                );
        },
        select(itemVM, selected) {
            // Check if enabled
            if (this.readonly || this.disabled || !itemVM || itemVM.disabled)
                return;
            if (!this.duplicated) {
                // Method overloading
                if (selected === undefined)
                    selected = !itemVM.currentSelected; // Prevent replication
                if (itemVM.currentSelected === selected)
                    return;
            } else {
                if (selected === undefined)
                    selected = true;
            }
            const oldValue = this.value;
            const oldVMs = this.selectedVMs;
            const oldItems = oldVMs.map((itemVM) => itemVM.item); // Emit a `before-` event with preventDefault()
            if (
                this.$emitPrevent(
                    'before-select',
                    {
                        selected,
                        item: itemVM && itemVM.item,
                        itemVM,
                        oldValue,
                        oldItems,
                        oldVMs,
                    },
                    this,
                )
            )
                return; // Assign and sync `selected`
            itemVM.currentSelected = selected;
            itemVM.$emit('update:selected', selected);
            this.watchSelectedChange(itemVM); // Assign and sync `value`
            const selectedVMs = this.selectedVMs;
            const value = selectedVMs.map((itemVM) => itemVM.value);
            const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('input', value, this);
            this.$emit('update', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                selected: itemVM.currentSelected,
                item: itemVM.item,
                itemVM,
                value,
                oldValue,
                items: selectedItems,
                oldItems,
                itemVMs: selectedVMs,
                oldVMs,
            }, this);
        },
    },
};
</script>

<style module>
.root {
    /* @Private */
    user-select: none;
    position: relative;
}
</style>
