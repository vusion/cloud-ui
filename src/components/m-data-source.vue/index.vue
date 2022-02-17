<script>
import DataSource from '../../utils/DataSource';
import debounce from 'lodash/debounce';
import i18n from './i18n';

export default {
    name: 'm-data-source',
    i18n,
    props: {
        dataSource: [DataSource, Function, Object, Array],
        initialLoad: { type: Boolean, default: true },
        loading: { type: Boolean, default: false },
        loadingText: {
            type: String,
            default() {
                return this.$t('loading');
            },
        },
        error: { type: Boolean, default: false },
        errorText: {
            type: String,
            default() {
                return this.$t('error');
            },
        },
        emptyText: {
            type: String,
            default() {
                return this.$t('empty');
            },
        },
        filterable: { type: Boolean, default: false },
        placeholder: { type: String, default: '请输入' },
        clearable: { type: Boolean, default: true },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        pageable: { type: [Boolean, String], default: false },
        pageSize: { type: Number, default: 50 },
        remotePaging: { type: Boolean, default: false },
    },
    data() {
        return {
            currentDataSource: undefined,
            currentLoading: this.loading,
            currentError: this.error,
        };
    },
    computed: {
        currentData() {
            return this.currentDataSource && this.currentDataSource.viewData;
        },
        paging() {
            if (this.pageable) {
                const paging = {};
                paging.size = this.pageSize;
                paging.number = paging.number || 1;
                return paging;
            } else
                return undefined;
        },
        filtering() {
            if (this.filterable) {
                return {
                    [this.field || this.textField]: {
                        operator: this.matchMethod,
                        value: this.filterText,
                        caseInsensitive: !this.caseSensitive,
                    },
                };
            } else {
                return {};
            }
        },
    },
    watch: {
        dataSource(dataSource, oldDataSource) {
            if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
                return;
            this.handleData();
        },
    },
    created() {
        this.debouncedLoad = debounce(this.load, 300);
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
    },
    methods: {
        handleData() {
            // @TODO: undefined or null
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            if (this.currentDataSource && this.initialLoad) {
                // this.load().then(() => {
                //     // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                //     MComplex.watch.itemVMs.handler.call(this, this.itemVMs);
                // });
            }
        },
        getExtraParams() {
            return { filterText: this.filterText };
        },
        getDataSourceOptions() {
            return {
                viewMode: this.pageable === 'load-more' || this.pageable === 'auto-more' ? 'more' : 'page',
                paging: this.paging,
                remotePaging: this.remotePaging,
                filtering: this.filtering,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
            };
        },
        normalizeDataSource(dataSource) {
            const options = this.getDataSourceOptions();
            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                return new DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    const result = dataSource(params);
                    if (result instanceof Promise)
                        return result.catch(
                            () => (this.currentLoading = false),
                        );
                    else if (result instanceof Array)
                        return Promise.resolve(result);
                    else
                        return Promise.resolve(result);
                };
                return new DataSource(options);
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign(options, dataSource));
            } else
                return undefined;
        },
        fastLoad(more, keep) {
            this.currentDataSource.filter(this.filtering);
            return this.currentDataSource.mustRemote() ? this.debouncedLoad(more, keep) : this.load(more, keep);
        },
        load(more) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;
            if (this.currentLoading)
                return Promise.resolve();
            if (this.$emitPrevent('before-load', undefined, this))
                return;
            this.currentLoading = true;
            return dataSource[more ? 'loadMore' : 'load']()
                .then((data) => {
                    this.currentLoading = false;
                    if (
                        this.pageable === true
                        || this.pageable === 'pagination'
                    ) {
                        if (
                            this.currentDataSource.paging
                            && this.currentDataSource.paging.number
                                > this.currentDataSource.totalPage
                        )
                            this.page(1); // 数据发生变更时，回归到第 1 页
                    }
                    this.ensureSelectedInItemVMs();
                    this.$emit('load', undefined, this);
                    return data;
                })
                .catch(() => (this.currentLoading = false));
        },
        reload() {
            this.currentDataSource.clearLocalData();
            this.load();
        },
        page(number, size) {
            if (size === undefined)
                size = this.currentDataSource.paging.size;
            const paging = {
                size,
                oldSize: this.currentDataSource.paging.size,
                number,
                oldNumber: this.currentDataSource.paging.number,
            };
            if (this.$emitPrevent('before-page', paging, this))
                return;
            this.currentDataSource.page(paging);
            this.load();
            this.$emit('page', paging, this);
            this.$emit('update:page-number', number, this);
        },
        onFocus($event) {
            this.$refs.popper.open();
        },
        onBlur($event) {
            setTimeout(() => {
                this.$refs.popper.close();
                this.$emit('update:input', this.value);
            }, 200);
        },
    }
};
</script>

<style module>
.popper {
    width: 100%;
}

.listview {
    height: auto;
    overflow-y: auto;
    max-height: var(--list-view-height);
}
</style>
