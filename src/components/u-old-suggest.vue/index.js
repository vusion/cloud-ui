import ListView from './u-old-list-view.js';
import i18n from './i18n';

export const UOldSuggest = {
    name: 'u-old-suggest',
    childName: 'u-old-suggest-item',
    extends: ListView,
    i18n,
    props: {
        value: { type: String, default: '' },
        color: String,
        size: String,
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        strict: { type: Boolean, default: false },
        emptyText: { type: String, default() { return this.$t('emptyText'); } },
    },
    data() {
        return {
            currentText: '',
            filterText: '', // 与 currentText 分开，只有 input 时会改变它
        };
    },
    computed: {
        // @TODO: 只能再过滤一遍数组，暂时没有好的解决方案
        matchedVMs() {
            return this.itemVMs.filter((item) => item.matched);
        },
    },
    watch: {
        selectedVM(selectedVM, oldVM) {
            if (selectedVM === oldVM)
                return;
            if (selectedVM)
                this.currentText = selectedVM.innerText;
            else if (this.strict)
                this.currentText = '';
        },
    },
    created() {
        this.$on('select', ($event) => {
            this.toggle(false);
        });
        this.$on('shift', ($event) => {
            this.$emit('input', $event.value);
            this.$emit('update:value', $event.value);
        });
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined || value === '')
                this.selectedVM = undefined;
            else {
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
                this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
                if (!this.strict)
                    this.currentText = value;
            }
        },
        shift(count) {
            let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (let i = selectedIndex + count; i < this.itemVMs.length; i++) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled && itemVM.matched) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1)
                    selectedIndex = this.itemVMs.length;
                for (let i = selectedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            }
        },
        toggle(open) {
            this.$refs.popper && this.$refs.popper.toggle(open);
        },
        onToggle($event) {
            // 刚打开时不 filterText
            if ($event.open)
                this.filterText = '';
            this.$emit('toggle', $event);
            setTimeout(() => this.ensureSelectedInView(true));
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        match(item) {
            if (!this.filterText || this.currentDataSource)
                return true;

            let matchMethod;
            if (typeof this.matchMethod === 'function')
                matchMethod = this.matchMethod;
            else {
                matchMethod = (itemValue, filterText) => {
                    if (!this.caseSensitive) {
                        itemValue = itemValue.toLowerCase();
                        filterText = filterText.toLowerCase();
                    }
                    return itemValue[this.matchMethod](filterText);
                };
            }
            return !!matchMethod(item.innerText, this.filterText);
        },
        fetchData(clear) {
            if (!this.currentDataSource)
                return;

            const dataSource = this.currentDataSource;
            // dataSource 的多次 promise 必须串行
            dataSource.promise = dataSource.promise.then(() => {
                this.loading = true;
                if (clear) {
                    this.currentData = [];
                    dataSource.clear();
                }

                const result = dataSource.fetch({
                    // @TODO: 要不要设置 limit 属性
                    offset: this.currentData ? this.currentData.length : 0,
                    filter: {
                        value: this.filterText,
                    },
                    clear,
                });
                const then = (data) => {
                    this.currentData = data;
                    this.loading = false;
                };

                if (result instanceof Promise)
                    return result.then(then).catch(() => this.loading = false);
                else if (result instanceof Array)
                    return Promise.resolve(result).then(then);
                else
                    throw new TypeError('Wrong type of `dataSource.fetch` result!');
            });
        },
        onInput(value) {
            this.filterText = value;
            this.currentText = value;
            if (!this.strict) {
                this.$emit('input', value);
                this.$emit('update:value', value);
            }
            this.currentDataSource && this.debouncedFetchData(true);
            this.toggle(true);
        },
        onBlur() {
            this.$nextTick(() => {
                const oldVM = this.selectedVM;
                let selectedVM = this.itemVMs.find((itemVM) => itemVM.innerText === this.currentText);

                if (this.strict && !selectedVM && this.currentText) {
                    selectedVM = oldVM;
                }
                this.selectedVM = selectedVM;
                if (selectedVM)
                    this.currentText = selectedVM.innerText;
                else if (this.strict)
                    this.currentText = '';

                let value = selectedVM ? selectedVM.value : '';
                if (!this.strict)
                    value = this.currentText;

                this.$emit('input', value);
                this.$emit('update:value', value);
                this.$emit('change', {
                    value,
                    oldValue: oldVM ? oldVM.value : undefined,
                });
            });
        },
    },
};

export { UOldSuggestItem } from './item.vue';

export default UOldSuggest;
