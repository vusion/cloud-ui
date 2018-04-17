import ListView from 'proto-ui.vusion/src/u-list-view.vue';
import { deepCopy } from '../base/utils/index';
import lodash from 'lodash';

export default {
    name: 'u-suggest',
    childName: 'u-suggest-item',
    mixins: [ListView],
    props: {
        value: null,
        data: Array,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        placeholder: { type: String, default: '' },
        size: String,
        match: { type: Boolean, default: false },
        remote: { type: Boolean, default: false }, // 支持异步
        filterMethod: Function,
        loading: { type: Boolean, default: false }, // 对于异步需要让其显示正在加载中的信息
        loadText: { type: String, default: '加载中' },
    },
    data() {
        let copyData = [];
        copyData = deepCopy(copyData, this.data);
        if (!this.match) {
            copyData.forEach((item) => {
                item[this.field] = item[this.field].toLowerCase();
            });
        }
        return {
            currentData: copyData,
            currentValue: this.getCurrentValue(),
            compositionInputing: false,
            // open: false,
            matching: false,
            lastMatch: undefined,
            copyData,
        };
    },
    created() {
        this.$on('select', () => {
            this.$refs.popper.toggle(false);
        });
    },
    watch: {
        data(newValue) {
            const data = deepCopy([], newValue);
            if (!this.match) {
                data.forEach((item) => {
                    item[this.field] = item[this.field].toLowerCase();
                });
            }
            this.currentData = this.copyData = data;
        },
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.itemVMs[0];
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
        },
        onToggle($event) {
            this.$emit('toggle', $event);
        },
        initOptionsData(value, data) {
            let currentValue = value || this.currentValue;
            const optionsData = data || this.copyData;
            if (!this.match) {
                currentValue = currentValue.toLowerCase();
                optionsData.forEach((item) => {
                    item[this.field] = item[this.field].toLowerCase();
                });
            }
            optionsData.forEach((item) => {
                if (item[this.field].indexOf(currentValue) !== -1)
                    item.selected = true;
                else
                    item.selected = false;
            });
            return optionsData;
        },
        select(itemVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.value,
                oldValue,
                item: itemVM && itemVM.item,
                itemVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.matching = true;

            if (this.multiple) {
                itemVM.currentSelected = !itemVM.currentSelected;
                const itemVMs = this.itemVMs.filter((itemVM) => itemVM.currentSelected);
                const value = itemVMs.map((itemVM) => itemVM.value);
                const items = itemVMs.map((itemVM) => itemVM.item);

                this.$emit('input', value);
                this.$emit('update:value', value);
                this.$emit('select', {
                    value,
                    oldValue,
                    items,
                    itemVMs,
                });
            } else {
                if (this.cancelable && this.selectedVM === itemVM)
                    this.selectedVM = undefined;
                else
                    this.selectedVM = itemVM;

                const value = this.selectedVM && this.selectedVM.value;
                const item = this.selectedVM && this.selectedVM.item;

                if (item)
                    this.currentValue = item && item[this.field];
                else
                    this.currentValue = this.selectedVM.$el.innerText;

                this.$emit('input', value);
                this.$emit('update:value', value);
                this.$emit('select', {
                    value,
                    oldValue,
                    item,
                    itemVM: this.selectedVM,
                });
            }
        },
        onFocus(e) {
            this.$refs.input.select();
            const query = e.target.value.trim();
            this.currentData = this.copyData;
        },
        onInput(e) {
            if (!this.compositionInputing) {
                let query = e.target.value.trim();
                // 不区分大小写
                if (!this.match) {
                    query = query.toLowerCase();
                }
                if (query === '')
                    this.currentData = [];
                else if (this.remote && this.filterMethod) {
                    setTimeout(() => {
                        this.filterMethod(query);
                    }, 200);
                    return;
                } else if (this.filterMethod)
                    this.currentData = this.filterMethod(query, this.copyData);
                else {
                    this.currentData = this.copyData.filter((item) => {
                        if (item[this.field].indexOf(query) !== -1)
                            return true;
                        else
                            return false;
                    });
                }

                this.matching = this.currentData.length > 0;
                if (this.matching)
                    this.lastMatch = this.selectedVM;

                if (!query && !this.currentData.length) {
                    this.$refs.popper.toggle(true);
                    this.currentData = this.initOptionsData();
                } else if (!this.currentData.length)
                    this.currentData = undefined;
            }
        },
        inputClick() {
            this.$refs.popper.toggle(true);
        },
        onBlur() {
            // hack 写法 不然会限制性blur 再执行select 顺序不是我们希望执行的顺序
            setTimeout(() => {
                if (!this.selectedVM && !this.mathcing) {
                    this.currentValue = this.lastMatch && this.lastMatch.$el.innerText || '';
                    this.currentData = this.copyData;
                } else if (this.selectedVM) {
                    this.currentValue = this.selectedVM.$el.innerText;
                    this.currentData = this.copyData;
                }
            }, 200);
        },
        inputDelete() {
            this.currentValue = '';
            this.currentData = this.copyData;
        },
        getCurrentValue(value) {
            const val = value || this.value;
            if (this.data.length === 0)
                return '';
            return this.data.filter((item) => item.value === val)[0][this.field];
        },
    },
};
