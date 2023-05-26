<template>
<div :class="$style.root">
    <u-loading v-if="loading" size="small"></u-loading>
    <u-checkbox
        v-for="(node, index) in currentDataSource.data"
        :key="index"
        :text="$at2(node, textField)"
        :label="$at2(node, valueField)"
        :disabled="node.disabled"
        :readonly="node.readonly"
        :designer="$env.VUE_APP_DESIGNER"
        :node="node"
    >
        <template #item="item">
            <slot name="item" v-bind="item">
                {{ $at2(node, textField) }}
            </slot>
        </template>
    </u-checkbox>
    <template v-if="$env.VUE_APP_DESIGNER && !dataSource && !$slots.default">
        <span :class="$style.loadContent">{{ treeSelectTip }}</span>
    </template>
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';
import MField from '../m-field.vue';
import MConverter from '../m-converter.vue';
import SupportDataSource from '../../mixins/support.datasource';
import UCheckbox from '../u-checkbox.vue';

export default {
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    components: {
        UCheckbox,
    },
    mixins: [MParent, MField, MConverter, SupportDataSource],
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
        // 修复bug：多选组，多选项值设为true，如果不操作拿不到值 http://projectmanage.netease-official.lcap.163yun.com/dashboard/DebtDetail?id=2577483154345216
        this.initSyncValue(this.value);
        this.watchValue(this.currentValue);
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
        exceedMax() {
            return Array.isArray(this.currentValue) && this.currentValue.length >= this.max;
        },
        initSyncValue(value) {
            if (value === '' || (Array.isArray(value) && !value.length)) {
                const values = [];
                this.itemVMs.forEach(
                    (itemVM) => itemVM.currentValue && values.push(itemVM.label),
                );
                this.currentValue = values;
                let currentValue = values;
                if (this.converter)
                    currentValue = this.currentConverter.get(currentValue);

                // 有可能使用方在使用组件的时候，初始双向绑定的value值是空的，等接口返回后去设置value值。有些在使用该组件的时候会监听input方法，这里抛出事件后会导致使用方的值变空
                // 所有如果得到的值和value值一样（可能都是空），就不抛出事件
                if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
                    console.log('input emit');
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                }
            }
        },
    },
};
</script>

<style module>
.root {}

.root > *:not(:last-child) {
    margin-right: var(--checkbox-space-x);
}

.root .loadContent {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

</style>
