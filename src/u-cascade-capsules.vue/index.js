import Field from 'proto-ui.vusion/src/u-field.vue';
import isNumber from 'lodash/isNumber';

export default {
    name: 'u-cascade-capsules',
    mixins: [Field],
    props: {
        data: Array,
        value: String,
        categories: { type: Array, default() { return []; } },
        autoSelect: { type: Boolean, default: true },
        converter: { type: [String, Object], default: 'join' },
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        const data = {
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
                set(value) {
                    // @TODO
                },
            };
        } else if (this.converter === 'join') {
            data.currentConverter = {
                get(values) {
                    return values.join(',');
                },
                set(value) {
                    return value ? value.split(',').map((i) => i) : [];
                },
            };
        } else if (this.converter === 'join-number') {
            data.currentConverter = {
                get(values) {
                    return values.join(',');
                },
                set(value) {
                    return value ? value.split(',').map((i) => +i) : [];
                },
            };
        }

        // 首次传入需要从`value`中得出`values`
        data.values = data.currentConverter.set(this.value);

        return data;
    },
    watch: {
        data(data) {
            this.lists = [];
            this.values = this.currentConverter.set(this.value);

            this.setList(data, 0);
            const value = this.currentConverter.get(this.values);
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        value(value, oldValue) {
            if (value === oldValue)
                return;

            const oldValues = this.currentConverter.set(oldValue);
            this.values = this.currentConverter.set(value);
            this.$emit('change', {
                value,
                oldValue,
                values: this.values,
                oldValues,
            });
        },
    },
    created() {
        this.setList(this.data, 0);
        // 如果没有传入 value，并且选择了 autoSelect，则自动触发一次同步事件
        if (this.autoSelect && this.value === undefined) {
            const value = this.currentConverter.get(this.values);
            if (value !== '') {
                this.$emit('input', value);
                this.$emit('update:value', value);
            }
        }
    },
    methods: {
        /**
         * 设置列表
         * @param {Array} list 需要设置的列表
         * @param {Number} level 当前级别
         */
        setList(list, level) {
            // 递归结束条件
            // if (level >= this.categories.length)
            //     return;

            this.lists.splice(level, 1, list);

            const value = this.values[level];
            let item;
            if (list && list.length) {
                item = list.find((item) => (item.exist === undefined || !!item.exist === true) && !!item.disabled && item.value === value);

                // 自动调整 item 与 value
                if (!item && this.autoSelect) {
                    let index = 0;
                    for (let i = 0; i < list.length; i++) {
                        const item = list[i];
                        // 自动过滤禁用与不存在的项
                        if (!(item.exist === undefined || !!item.exist === true) || item.disabled)
                            continue;

                        index = i;
                        if (isNumber(value) && isNumber(item.value) && value > item.value)
                            continue;
                        else
                            break;
                    }
                    item = list[index];
                }
            }

            if (item) {
                this.values.splice(level, 1, item.value);
                // 继续处理下一级
                level < this.categories.length && this.setList(item.children, level + 1);
            } else {
                this.values.splice(level, this.values.length - level);
                this.lists.splice(level + 1, this.values.length - level - 1);
            }
        },
        onSelect($event, level) {
            this.setList($event.item ? $event.item.children : undefined, level + 1);

            const value = this.currentConverter.get(this.values);
            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                level,
                value,
                values: Array.from(this.values),
                item: $event.item,
                itemVM: $event.itemVM,
            });
        },
    },
};
