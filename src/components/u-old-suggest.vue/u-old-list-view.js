import MField from '../m-field.vue';
import DataSource from './OldDataSource';
import debounce from 'lodash/debounce';

export default {
    name: 'u-list-view',
    groupName: 'u-list-view-group',
    childName: 'u-list-view-item',
    mixins: [MField],
    props: {
        value: null,
        field: { type: String, default: 'text' },
        data: Array,
        dataSource: [DataSource, Function, Object],
        cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        collapsible: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        loadingText: { type: String, default: '加载中...' },
    },
    data() {
        return {
            ChildComponent: this.$options.childName,
            groupVMs: [],
            itemVMs: [],
            selectedVM: undefined,
            currentData: this.data,
            currentDataSource: this.normalizeDataSource(this.dataSource),
            loading: false,
        };
    },
    watch: {
        data(data) {
            this.currentData = data;
        },
        dataSource(dataSource) {
            this.currentDataSource = this.normalizeDataSource(dataSource);
        },
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            // @TODO: Vue 中 相同复杂类型也会认为是改变？
            if (selectedVM === oldVM)
                return;
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            });
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可以已不存在，这里暂存然后重新查找一遍
            const value = this.selectedVM ? this.selectedVM.value : this.value;
            this.selectedVM = undefined;
            this.watchValue(value);
        },
    },
    created() {
        this.$on('add-group-vm', (groupVM) => {
            groupVM.parentVM = this;
            this.groupVMs.push(groupVM);
        });
        this.$on('remove-group-vm', (groupVM) => {
            groupVM.parentVM = undefined;
            this.groupVMs.splice(this.groupVMs.indexOf(groupVM), 1);
        });
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.debouncedFetchData = debounce(this.fetchData, 100);
        this.currentDataSource && this.debouncedFetchData();
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, itemVMs have not been pushed.
        this.watchValue(this.value);
    },
    methods: {
        normalizeDataSource(dataSource) {
            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Function) {
                return new DataSource({
                    load(params) {
                        const result = dataSource(params);

                        if (result instanceof Promise)
                            return result.catch(() => this.loading = false);
                        else if (result instanceof Array)
                            return Promise.resolve(result);
                        else
                            throw new TypeError('Wrong type of `dataSource.fetch` result!');
                    },
                });
            } else if (dataSource instanceof Object) {
                return new DataSource(dataSource);
            } else
                return undefined;
        },
        watchValue(value) {
            if (this.multiple)
                this.itemVMs.forEach((itemVM) => itemVM.currentSelected = value && value.includes(itemVM.value));
            else {
                if (this.selectedVM && this.selectedVM.value === value)
                    return;
                if (value === undefined)
                    this.selectedVM = undefined;
                else {
                    this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
                    this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
                }
            }
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
        shift(count) {
            let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (let i = selectedIndex + count; i < this.itemVMs.length; i++) {
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
        ensureSelectedInView(natural) {
            if (!this.selectedVM)
                return;

            const selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            const selectedEl = this.selectedVM.$el;
            const parentEl = selectedEl.parentElement;
            if (parentEl.scrollTop < selectedEl.offsetTop + selectedEl.offsetHeight - parentEl.clientHeight) {
                if (natural)
                    parentEl.scrollTop = selectedEl.offsetTop - selectedEl.offsetHeight;
                else
                    parentEl.scrollTop = selectedEl.offsetTop + selectedEl.offsetHeight - parentEl.clientHeight;
                if (selectedIndex === this.itemVMs.length - 1) {
                    this.currentDataSource && this.debouncedFetchData();
                    setTimeout(() => parentEl.scrollTop = parentEl.scrollHeight - parentEl.clientHeight, 200);
                }
            }
            if (parentEl.scrollTop > selectedEl.offsetTop)
                parentEl.scrollTop = selectedEl.offsetTop;
        },
        onToggle(groupVM, expanded) {
            this.$emit('toggle', {
                expanded,
                groupVM,
            });
        },
        toggleAll(expanded) {
            this.groupVMs.forEach((groupVM) => groupVM.toggle(expanded));
        },
        fetchData() {
            if (!this.currentDataSource)
                return;

            this.loading = true;
            const result = this.currentDataSource.fetch({
                // @TODO: 要不要设置 limit 属性
                offset: this.currentData ? this.currentData.length : 0,
            });
            const then = (data) => {
                this.loading = false;
                this.currentData = data;
            };

            if (result instanceof Promise)
                return result.then(then).catch(() => this.loading = false);
            else if (result instanceof Array)
                then(result);
            else
                throw new TypeError('Wrong type of `dataSource.fetch` result!');
        },
        onScroll(e) {
            if (!this.currentDataSource)
                return;

            const el = e.target;
            const offset = this.currentData ? this.currentData.length : 0;
            if (el.scrollHeight === el.scrollTop + el.clientHeight
                && this.currentDataSource.hasMore(offset))
                this.debouncedFetchData();
        },
    },
};
