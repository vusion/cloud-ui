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
    },
    data() {
        let copyData = [];
        copyData = deepCopy(copyData, this.data);
        return {
            currentData: this.data,
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
            this.currentData = deepCopy([], newValue);
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
            const currentValue = value || this.currentValue;
            const optionsData = data || this.copyData;
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
                const query = e.target.value.trim();
                if (query === '')
                    this.currentData = [];
                else if (query.length === 1) {
                    if (this.filterMethod)
                        this.currentData = this.filterMethod(query, this.copyData);
                    else {
                        this.currentData = this.copyData.filter((item) => {
                            if (item[this.field].indexOf(query) !== -1)
                                return true;
                            else
                                return false;
                        });
                    }
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
            // hack 写法
            setTimeout(() => {
                if (!this.selectedVM && !this.mathcing) {
                    this.currentValue = this.lastMatch && this.lastMatch.$el.innerText || '';
                    this.currentData = this.copyData;
                } else if (this.selectedVM) {
                    this.currentValue = this.selectedVM.$el.innerText;
                    this.currentData = this.copyData;
                }
            }, 300);
        },
        inputDelete() {
            this.currentValue = '';
            this.currentData = this.copyData;
        },
        getCurrentValue(value) {
            const val = value || this.value;
            return this.data.filter((item) => item.value === val)[0][this.field];
        },
    },
};
