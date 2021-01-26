<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';
import MField from '../m-field.vue';
import MConverter from '../m-converter.vue';

export default {
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    mixins: [MParent, MField, MConverter],
    props: {
        value: [Array, String],
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
            if (this.converter) {
                value = this.currentConverter.get(value);
                oldValue = this.currentConverter.get(oldValue);
            }
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
                if (this.converter)
                    value = this.currentConverter.set(value);
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
                return length <= this.max;
            } else if (!value && this.currentValue.includes(label)) {
                const length = this.currentValue.length - 1;
                return length >= this.min;
            }
        },
        onCheck($event) {
            const value = $event.value;
            const label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label))
                this.currentValue.push(label);
            else if (!value && this.currentValue.includes(label))
                this.currentValue.splice(this.currentValue.indexOf(label), 1);
            let currentValue = this.currentValue;
            if (this.converter)
                currentValue = this.currentConverter.get(currentValue);
            this.$emit('input', currentValue);
            this.$emit('update:value', currentValue);
            this.$emit('check', {
                value: currentValue,
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
