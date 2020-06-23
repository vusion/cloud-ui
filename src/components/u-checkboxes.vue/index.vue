<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';
import MField from '../m-field.vue';

export default {
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    mixins: [MParent, MField],
    props: {
        value: Array,
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return { currentValue: this.value, itemVMs: [] };
    },
    watch: {
        value(value) {
            this.watchValue(value);
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue });
        },
        itemVMs() {
            this.watchValue(this.value);
        },
    },
    mounted() {
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            if (value) {
                this.currentValue = value;
                this.itemVMs.forEach(
                    (itemVM) =>
                        (itemVM.currentValue = value.includes(itemVM.label)),
                );
            } else {
                const value = [];
                this.itemVMs.forEach(
                    (itemVM) => itemVM.currentValue && value.push(itemVM.label),
                );
                this.currentValue = value;
            }
        },
        canCheck($event) {
            if (this.readonly || this.disabled)
                return false;
            const value = $event.value;
            const label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label)) {
                const length = this.currentValue.length + 1;
                return this.min <= length && length <= this.max;
            } else if (!value && this.currentValue.includes(label)) {
                const length = this.currentValue.length - 1;
                return this.min <= length && length <= this.max;
            }
        },
        onCheck($event) {
            const value = $event.value;
            const label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label))
                this.currentValue.push(label);
            else if (!value && this.currentValue.includes(label))
                this.currentValue.splice(this.currentValue.indexOf(label), 1);
            this.$emit('input', this.currentValue);
            this.$emit('update:value', this.currentValue);
            this.$emit('check', {
                value: this.currentValue,
                itemVM: $event.itemVM,
            });
        },
    },
};
</script>

<style module>
.root {}

.root > *:not(:last-child) {
    margin-right: var(--checkbox-space-x);
}
</style>
