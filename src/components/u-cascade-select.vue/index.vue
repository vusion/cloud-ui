<template>
<u-linear-layout :class="$style.root" :layout="layout">
    <u-select v-for="(category, level) in categories" v-if="lists[level] || !hideEmpty" :key="level"
        :field="field" :readonly="readonly" :disabled="disabled" :placeholder="category.placeholder"
        v-model="values[level]" @select="onSelect($event, level)"
        :size="size">
        <u-select-item v-for="item in lists[level]" v-if="item.exist === undefined || !!item.exist === true"
            :key="item.value"
            :value="item.value"
            :item="item"
            :disabled="item.disabled">
            <slot name="text" :item="item" :level="level">{{ $at(item, field) }}</slot>
        </u-select-item>
    </u-select>
</u-linear-layout>
</template>

<script>
import MField from '../m-field.vue';
import isNumber from 'lodash/isNumber';

export default {
    name: 'u-cascade-select',
    mixins: [MField],
    props: {
        data: Array,
        value: String,
        categories: {
            type: Array,
            default() {
                return [];
            },
        },
        autoSelect: { type: Boolean, default: true },
        hideEmpty: { type: Boolean, default: false },
        converter: { type: [String, Object], default: 'join' },
        field: { type: String, default: 'text' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        size: String,
        layout: { type: String, default: 'inline' },
    },
    data() {
        const data = {
            currentData: this.data,
            values: [],
            lists: [],
            currentConverter: {},
        };
        if (this.converter instanceof Object)
            data.currentConverter = this.converter;
        else if (this.converter === 'last-value') {
            data.currentConverter = {
                get(values) {
                    return values[values.length - 1];
                },
                set: (value) => {
                    const values = [];
                    const findValues = (list, level) => {
                        if (!list || level >= this.categories.length)
                            return;
                        for (let i = 0; i < list.length; i++) {
                            const item = list[i];
                            values.push(item.value);
                            if (
                                level === this.categories.length - 1
                                && item.value === value
                            )
                                // 最后一个元素，且值相等，则找到路径
                                return true;
                            else if (
                                item.children
                                && findValues(item.children, level + 1)
                            )
                                return true;
                            else
                                values.pop();
                        }
                    };
                    findValues(this.currentData, 0);
                    return values;
                },
            };
        } else if (this.converter.startsWith('join')) {
            const m = this.converter.match(/^join(\.number)?(:.+)?$/);
            if (!m)
                throw new Error('converter format error');
            const number = !!m[1];
            const sep = m[2] ? m[2].slice(1) : ',';
            data.currentConverter = {
                get(values) {
                    return values.join(sep);
                },
                set(value) {
                    const values = value ? value.split(sep) : [];
                    return number ? values.map((i) => +i) : values;
                },
            };
        } // 首次传入需要从`value`中得出`values`
        data.values = data.currentConverter.set(this.value);
        return data;
    },
    watch: {
        data(data, oldData) {
            this.currentData = data;
        },
        currentData(currentData) {
            // @TODO: 该不该用 map 来查找 value
            this.lists = [];
            this.values = this.currentConverter.set(this.value);
            this.setList(currentData, 0);
            const value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        value(value, oldValue) {
            if (value !== this.currentConverter.get(this.values)) {
                this.lists = [];
                this.values = this.currentConverter.set(value);
                this.setList(this.currentData, 0);
            }
            const oldValues = this.values;
            this.$emit(
                'change',
                { value, oldValue, values: this.values, oldValues },
                this,
            );
        },
    },
    created() {
        this.setList(this.currentData, 0); // 如果没有传入 value，并且选择了 autoSelect，则自动触发一次同步事件
        if (this.autoSelect && this.value === undefined) {
            const value = this.currentConverter.get(this.values);
            if (value !== '') {
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        }
    },
    methods: {
        /**
         * 设置列表
         * @param {Array} list 需要设置的列表
         * @param {Number} level 当前级别
         */ setList(list, level) {
            // 递归结束条件
            // if (level >= this.categories.length)
            //     return;
            this.lists.splice(level, this.values.length, list);
            const value = this.values[level];
            let item;
            if (list && list.length) {
                item = list.find(
                    (item) =>
                        (item.exist === undefined || !!item.exist === true)
                        && !item.disabled
                        && item.value === value,
                ); // 当找不到与 value 对应的 item 时
                // 如果设置了自动选择，并且没有设置 placeholder 的情况下
                // 自动选择第一个显示并且非禁用的项
                if (
                    !item
                    && this.autoSelect
                    && this.categories[level].placeholder === undefined
                ) {
                    let index = 0;
                    for (let i = 0; i < list.length; i++) {
                        const item = list[i]; // 自动过滤禁用与不存在的项
                        if (
                            !(
                                item.exist === undefined
                                || !!item.exist === true
                            )
                            || item.disabled
                        )
                            continue;
                        index = i;
                        if (
                            isNumber(value)
                            && isNumber(item.value)
                            && value > item.value
                        )
                            continue;
                        else
break;
                    }
                    item = list[index];
                }
            }
            if (item) {
                this.values.splice(level, 1, item.value); // 继续处理下一级
                level < this.categories.length
                    && this.setList(item.children, level + 1);
            } else {
                this.values.splice(level, this.values.length);
            }
        },
        onSelect($event, level) {
            this.setList(
                $event.item ? $event.item.children : undefined,
                level + 1,
            );
            const value = this.currentConverter.get(this.values);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit(
                'select',
                {
                    level,
                    value,
                    values: Array.from(this.values),
                    item: $event.item,
                    itemVM: $event.itemVM,
                },
                this,
            );
        },
    },
};
</script>

<style module>
.root {}
</style>
