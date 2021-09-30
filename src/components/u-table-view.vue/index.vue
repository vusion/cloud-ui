<template>
<div :class="$style.root" ref="root" :border="border">
    <div v-if="title" :class="$style.title" ref="title" :style="{ textAlign: titleAlignment }" vusion-slot-name="title">
        <slot name="title">{{ title }}</slot>
    </div>
    <div :class="$style.table" v-for="tableMeta in tableMetaList" :key="tableMeta.position" :position="tableMeta.position"
        :style="{ width: tableMeta.position !== 'static' && number2Pixel(tableMeta.width), height: number2Pixel(tableHeight)}"
        @scroll="onTableScroll" :shadow="(tableMeta.position === 'left' && !scrollXStart) || (tableMeta.position === 'right' && !scrollXEnd)">
        <div v-if="showHead" :class="$style.head" ref="head" :style="{ width: number2Pixel(tableWidth) }">
            <u-table :class="$style['head-table']" :color="color">
                <colgroup>
                    <col v-for="columnVM in visibleColumnVMs" :width="columnVM.computedWidth"></col>
                </colgroup>
                <thead><tr>
                    <th ref="th" :class="$style['head-title']" v-for="(columnVM, columnIndex) in visibleColumnVMs"
                        :is-sub="columnVM.$attrs['is-sub']"
                        :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                        :vusion-node-path="columnVM.$attrs['vusion-node-path']"
                        :vusion-node-tag="columnVM.$attrs['vusion-node-tag']"
                        :sortable="columnVM.sortable && sortTrigger === 'head'" :filterable="!!columnVM.filters" @click="columnVM.sortable && sortTrigger === 'head' && onClickSort(columnVM)">
                        <!-- type === 'checkbox' -->
                        <span v-if="columnVM.type === 'checkbox'">
                            <u-checkbox :value="allChecked" @check="checkAll($event.value)"></u-checkbox>
                        </span>
                        <!-- Normal title -->
                        <template>
                            <f-slot name="title" :vm="columnVM" :props="{ columnVM, columnIndex }">
                                <span vusion-slot-name="title" :class="$style['column-title']">{{ columnVM.title }}</span>
                            </f-slot>
                        </template>
                        <!-- Sortable -->
                        <span v-if="columnVM.sortable" :class="$style.sort"
                            :sorting="currentSorting && currentSorting.field === columnVM.field" :order="currentSorting && currentSorting.order"
                            @click="sortTrigger === 'icon' && ($event.stopPropagation(), onClickSort(columnVM))"></span>
                        <!-- Filterable -->
                        <span v-if="columnVM.filters" :class="$style['filter-wrap']">
                            <u-table-view-filters :value="getFiltersValue(columnVM.field)" @select="onSelectFilters(columnVM.field, $event)">
                                <u-table-view-filter v-for="filter in columnVM.filters" :key="filter.value" :value="filter.value">{{ filter.text }}</u-table-view-filter>
                            </u-table-view-filters>
                        </span>
                        <!-- Resizable -->
                        <f-dragger v-if="resizable && columnIndex !== visibleColumnVMs.length - 1" axis="horizontal"
                            @dragstart="onResizerDragStart($event, columnVM)"
                            @drag="onResizerDrag($event, columnVM, columnIndex)"
                            @dragend="onResizerDragEnd($event, columnVM, columnIndex)">
                            <div :class="$style.resizer" @click.stop></div>
                        </f-dragger>
                    </th>
                </tr></thead>
            </u-table>
        </div>
        <div :class="$style.body" ref="body" :style="{ width: number2Pixel(tableWidth), height: number2Pixel(bodyHeight) }" @scroll="onBodyScroll">
            <u-table ref="bodyTable" :class="$style['body-table']">
                <colgroup>
                    <col v-for="columnVM in visibleColumnVMs" :width="columnVM.computedWidth"></col>
                </colgroup>
                <tbody>
                    <template v-if="(!currentLoading && !currentError || pageable === 'auto-more' || pageable === 'load-more') && currentData && currentData.length">
                        <template v-for="(item, rowIndex) in currentData">
                            <tr :key="rowIndex" :class="$style.row" :color="item.rowColor" :selected="selectable && selectedItem === item" @click="selectable && select(item)" :style="{ display: item.display }">
                                <template v-if="$env.VUE_APP_DESIGNER">
                                    <td ref="td" :class="$style.cell" v-for="(columnVM, columnIndex) in visibleColumnVMs" :ellipsis="columnVM.ellipsis" v-ellipsis-title
                                        allowChild
                                        vusion-slot-name="cell"
                                        :vusion-next="true"
                                        :vusion-node-tag="columnVM.$attrs['vusion-node-tag']"
                                        :vusion-template-cell-node-path="columnVM.$attrs['vusion-template-cell-node-path']"
                                        :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                                        :vusion-node-path="columnVM.$attrs['vusion-node-path']">
                                        <!--可视化占据的虚拟填充区域-->
                                        <div vusion-slot-name="cell" :plus-empty="typeCheck(columnVM.type) ? false : columnVM.$attrs['plus-empty']">
                                            <!-- type === 'index' -->
                                            <span v-if="columnVM.type === 'index'">{{ (columnVM.startIndex - 0) + rowIndex }}</span>
                                            <!-- type === 'radio' -->
                                            <span v-if="columnVM.type === 'radio'">
                                                <u-radio :value="selectedItem === item" :disabled="item.disabled" @click.native="select(item)"></u-radio>
                                            </span>
                                            <!-- type === 'checkbox' -->
                                            <span v-if="columnVM.type === 'checkbox'">
                                                <u-checkbox :value="item.checked" :label="$at(item, valueField)" :disabled="item.disabled" @check="check(item, $event.value)"></u-checkbox>
                                            </span>
                                            <!-- type === 'expander' -->
                                            <span :class="$style.expander" v-if="columnVM.type === 'expander'" :expanded="item.expanded" @click="toggleExpanded(item)"></span>
                                            <span :class="$style.tree_expander" v-if="item.hasChildren && columnIndex===0" :expanded="item.expanded" @click="toggleExpanded(item)"></span>
                                            <!-- Normal text -->
                                            <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                            </f-slot>
                                       </div>
                                    </td>
                                </template>
                                <template v-else>
                                    <td ref="td" :class="$style.cell" v-for="(columnVM, columnIndex) in visibleColumnVMs" :ellipsis="columnVM.ellipsis" v-ellipsis-title
                                        :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                                        :vusion-node-path="columnVM.$attrs['vusion-node-path']">
                                            <!-- type === 'index' -->
                                            <span v-if="columnVM.type === 'index'">{{ (columnVM.startIndex - 0) + rowIndex }}</span>
                                            <!-- type === 'radio' -->
                                            <span v-if="columnVM.type === 'radio'">
                                                <u-radio :value="selectedItem === item" :disabled="item.disabled" @click.native="select(item)"></u-radio>
                                            </span>
                                            <!-- type === 'checkbox' -->
                                            <span v-if="columnVM.type === 'checkbox'">
                                                <u-checkbox :value="item.checked" :label="$at(item, valueField)" :disabled="item.disabled" @check="check(item, $event.value)"></u-checkbox>
                                            </span>
                                            <!-- type === 'expander' -->
                                            <span :class="$style.expander" v-if="columnVM.type === 'expander'" :expanded="item.expanded" @click="toggleExpanded(item)"></span>
                                            <template v-if="item.level !== undefined && columnIndex===0">
                                                <span :class="$style.indent" :style="{ paddingLeft: 16*item.level + 'px' }"></span>
                                                <span :class="$style.tree_expander" v-if="item[treeHaschildrenField]" :expanded="item.expanded" @click="toggleTreeExpanded(item)" :loading="item.loading"></span>
                                                <span :class="$style.tree_placeholder" v-else></span>
                                            </template>
                                            <!-- Normal text -->
                                            <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                            </f-slot>
                                    </td>
                                </template>
                            </tr>
                            <tr :class="$style['expand-content']" v-if="expanderColumnVM && item.expanded">
                                <f-collapse-transition>
                                    <td :colspan="visibleColumnVMs.length" :class="$style['expand-td']" v-show="item.expanded" vusion-slot-name="expand-content">
                                        <f-slot name="expand-content" :vm="expanderColumnVM" :props="{ item, value: $at(item, expanderColumnVM.field), columnVM: expanderColumnVM, rowIndex, index: rowIndex }"></f-slot>
                                    </td>
                                </f-collapse-transition>
                            </tr>
                        </template>
                    </template>
                    <tr key="loading" v-if="(currentData === undefined && !currentError) || currentLoading"><!-- 初次加载与加载更多 loading 合并在一起 -->
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="loading">
                            <slot name="loading"><u-spinner></u-spinner> {{ loadingText }}</slot>
                        </td>
                    </tr>
                    <tr key="error" v-else-if="currentData === null || currentError">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="error">
                            <slot name="error">{{ errorText }}</slot>
                        </td>
                    </tr>
                    <tr key="loadMore" v-else-if="pageable === 'load-more' && currentDataSource.hasMore()">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            <u-link @click="load(true)">{{ $t('loadMore') }}</u-link>
                        </td>
                    </tr>
                    <tr key="noMore" v-else-if="(pageable === 'auto-more' || pageable === 'load-more') && !currentDataSource.hasMore()">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            {{ $t('noMore') }}
                        </td>
                    </tr>
                    <tr key="empty" v-else-if="!currentData.length">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="empty">
                            <slot name="empty">{{ emptyText }}</slot>
                        </td>
                    </tr>
                </tbody>
            </u-table>
        </div>
    </div>
    <u-pagination :class="$style.pagination" v-if="(pageable === true || pageable === 'pagination') && currentDataSource"
        :total-items="currentDataSource.total" :page="currentDataSource.paging.number"
        :page-size="currentDataSource.paging.size" :page-size-options="pageSizeOptions" :show-total="showTotal" :show-sizer="showSizer" :show-jumper="showJumper"
        @change="page($event.page)" @change-page-size="page(currentDataSource.paging.number, $event.pageSize)">
    </u-pagination>
    <div><slot></slot></div>
</div>
</template>

<script>
import DataSource from '../../utils/DataSource';
import { addResizeListener, removeResizeListener } from '../../utils/dom';
import MEmitter from '../m-emitter.vue';
import debounce from 'lodash/debounce';
import isNumber from 'lodash/isNumber';
import i18n from './i18n';

export default {
    name: 'u-table-view',
    mixins: [MEmitter],
    i18n,
    props: {
        data: Array,
        dataSource: [DataSource, Function, Object, Array],
        initialLoad: { type: Boolean, default: true },
        pageable: { type: [Boolean, String], default: false },
        pageSize: { type: Number, default: 20 },
        pageNumber: { type: Number, default: 1 },
        pageSizeOptions: {
            type: Array,
            default() {
                return [10, 20, 50];
            },
        },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: true },
        showJumper: { type: Boolean, default: false },
        sorting: Object,
        defaultOrder: { type: String, default: 'desc' },
        sortTrigger: { type: String, default: 'head' },
        filtering: Object,
        remotePaging: { type: Boolean, default: false },
        remoteSorting: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        title: String,
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        loading: { type: Boolean, default: undefined },
        loadingText: {
            type: String,
            default() {
                return this.$t('loading');
            },
        },
        error: Boolean,
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
        // formatter: { type: [String, Function], default: 'text' },
        /* Selection Props */
        valueField: String,
        value: null,
        values: Array,
        selectable: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        /* Others */
        accordion: { type: Boolean, default: false },
        resizable: { type: Boolean, default: false },
        resizeRemaining: { type: String, default: 'average' },
        showHead: { type: Boolean, default: true },
        color: String,
        treeDisplay: { type: Boolean, default: false },
        treeChildrenField: { type: String, default: 'children' },
        treeHaschildrenField: { type: String, default: 'hasChildren' },
        treeDataSource: [DataSource, Function, Object, Array],
        rowKey: { type: String, default: 'id' },
    },
    data() {
        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined, // currentData: this.data && Array.from(this.data),
            currentDataSource: undefined,
            currentLoading: this.loading || false,
            currentError: this.error,
            currentSorting: this.sorting,
            tableMetaList: [{ position: 'static' }],
            scrollXStart: true,
            scrollXEnd: true,
            /* Selection Data */
            selectedItem: undefined,
            currentValues: this.values || [],
            tableHeight: undefined,
        };
    },
    computed: {
        currentData() {
            setTimeout(() => {
                this.$refs.td && this.$refs.td.forEach((tdEl, index) => {
                    const length = this.columnVMs.length;
                    tdEl.__vue__ = this.columnVMs[index % length];
                });
            });
            let data = this.currentDataSource ? this.currentDataSource.viewData.filter((item) => !!item) : this.currentDataSource;
            if (this.treeDisplay && data) {
                data = this.processTreeData(data);
            }
            return data;
        },
        visibleColumnVMs() {
            return this.columnVMs.filter((columnVM) => !columnVM.hidden);
        },
        expanderColumnVM() {
            return this.columnVMs.find((columnVM) => columnVM.type === 'expander');
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
        allChecked() {
            if (!this.currentData)
                return;
            let checkedLength = 0;
            this.currentData.forEach((item) => {
                if (item.checked)
                    checkedLength++;
            });
            if (checkedLength === 0)
                return false;
            else if (checkedLength === this.currentData.length)
                return true;
            else
                return null;
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource) {
            this.handleData();
        },
        currentData(currentData) {
            this.watchValue(this.value);
            this.watchValues(this.values);
        },
        loading(loading) {
            this.currentLoading = loading;
            this.handleResize();
        },
        error(error) {
            this.currentError = error;
            this.handleResize();
        },
        sorting: {
            deep: true,
            handler(sorting, oldSorting) {
                if (sorting.field === oldSorting.field && sorting.order === oldSorting.order)
                    return;
                this.sort(sorting.field, sorting.order, sorting.compare);
            },
        },
        'currentDataSource.sorting'(sorting) {
            this.currentSorting = sorting;
        },
        filtering: {
            deep: true,
            handler(filtering, oldFiltering) {
                this.filter(filtering);
            },
        },
        /* Selection Watchers */
        value(value) {
            this.watchValue(value);
        },
        selectedItem(item, oldItem) {
            const value = item ? this.$at(item, this.valueField) : undefined;
            const oldValue = oldItem ? this.$at(oldItem, this.valueField) : undefined;
            if (value === oldValue)
                return;
            this.$emit('change', { value, oldValue, item, oldItem }, this);
        },
        values(values) {
            this.watchValues(values);
        },
        currentValues(values, oldValues) {
            this.$emit('change', { values, oldValues });
        },
        columnVMs(columnVMs) {
            this.$nextTick(() => {
                this.$refs.th && this.$refs.th.forEach((thEl, index) => {
                    thEl.__vue__ = columnVMs[index];
                });
            });
        },
        visibleColumnVMs() {
            this.handleResize();
        },
    },
    created() {
        // 自动补充 pageSizeOptions
        if (this.pageSizeOptions && !this.pageSizeOptions.includes(this.pageSize)) {
            for (let i = 0; i < this.pageSizeOptions.length; i++) {
                if (this.pageSizeOptions[i] > this.pageSize) {
                    this.pageSizeOptions.splice(i, 0, this.pageSize);
                    break;
                }
            }
        }
        // @TODO: this.pageNumber
        this.$watch('pageNumber', (number) => {
            this.page(number);
        });
        this.debouncedLoad = debounce(this.load, 300);
        this.currentDataSource = this.normalizeDataSource(
            this.dataSource || this.data,
        );
        this.initialLoad && this.load();
    },
    mounted() {
        if (this.data)
            this.processData(this.data);

        this.watchCurrentData();
        this.watchValue(this.value);
        this.watchValues(this.values);
        this.handleResize();
        addResizeListener(this.$el, this.handleResize);
    },
    destroyed() {
        removeResizeListener(this.$el, this.handleResize);
        this.clearTimeout();
    },
    methods: {
        typeCheck(type) {
            return ['index', 'radio', 'checkbox'].includes(type);
        },
        clearTimeout() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        processData(data) {
            const selectable = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'radio');
            const checkable = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'checkbox');
            const expandable = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'expander');
            if (selectable) {
                data.forEach((item) => {
                    if (!item.hasOwnProperty('disabled'))
                        this.$set(item, 'disabled', false);
                });
            }
            if (checkable) {
                data.forEach((item) => {
                    if (!item.hasOwnProperty('checked'))
                        this.$set(item, 'checked', false);
                    if (!item.hasOwnProperty('disabled'))
                        this.$set(item, 'disabled', false);
                });
            }
            if (expandable) {
                data.forEach((item) => {
                    if (!item.hasOwnProperty('expanded'))
                        this.$set(item, 'expanded', false);
                });
            }
            return data;
        },
        handleData() {
            if (typeof this.data === 'function' || (this.data instanceof Object && !Array.isArray(this.data)))
                throw new Error(`[cloud-ui] Don't assign a function or object to 'data' prop. Try to use 'data-source' prop.`);
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.initialLoad && this.load();
            this.handleResize();
        },
        getExtraParams() {
            return undefined;
        },
        getDataSourceOptions() {
            return {
                viewMode: this.pageable === 'load-more' || this.pageable === 'auto-more' ? 'more' : 'page',
                paging: this.paging,
                sorting: this.currentSorting,
                filtering: this.filtering,
                remotePaging: this.remotePaging,
                remoteSorting: this.remoteSorting,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
                process: this.processData,
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
                        return result;
                    else if (result instanceof Array)
                        return Promise.resolve(result);
                    else
                        return Promise.resolve(result);
                };
                return new DataSource(options);
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign(options, dataSource));
            } else
                return dataSource;
        },
        number2Pixel(value) {
            return isNumber(value) ? value + 'px' : '';
        },
        resetWidthOfVisibleColumnVMs() {
            this.visibleColumnVMs.forEach((vm) => {
                vm.currentWidth = vm.width === undefined ? undefined : vm.width + '';
                vm.computedWidth = vm.width === undefined ? undefined : vm.width + '';
            });
        },
        handleResize() {
            this.tableWidth = undefined;
            this.bodyHeight = undefined;
            this.resetWidthOfVisibleColumnVMs();
            this.clearTimeout();
            this.timer = setTimeout(() => {
                this.timer = undefined;

                let rootWidth = this.$el.offsetWidth;
                if (!rootWidth) {
                    // 初始表格隐藏时，上面的值为0，需要特殊处理
                    let parentEl = this.$el && this.$el.parentElement;
                    while (parentEl && !parentEl.offsetWidth)
                        parentEl = parentEl.parentElement;
                    rootWidth = parentEl ? parentEl.offsetWidth : 0;
                }

                // 分别获取有百分比、具体数值和无 width 的列
                const percentColumnVMs = [];
                const valueColumnVMs = [];
                const noWidthColumnVMs = []; // 统计固定列的数量
                let fixedLeftCount = 0;
                let fixedRightCount = 0;
                let lastIsFixed = false;
                this.visibleColumnVMs.forEach((columnVM, index) => {
                    if (!columnVM.currentWidth)
                        noWidthColumnVMs.push(columnVM);
                    else if (String(columnVM.currentWidth).endsWith('%'))
                        percentColumnVMs.push(columnVM);
                    else
                        valueColumnVMs.push(columnVM);
                    if (columnVM.fixed) {
                        if (index === 0)
                            fixedLeftCount = 1;
                        else if (!fixedRightCount && lastIsFixed)
                            fixedLeftCount++;
                        else if (!lastIsFixed)
                            fixedRightCount = 1;
                        else
                            fixedRightCount++;
                    }
                    lastIsFixed = columnVM.fixed;
                });

                // 全部都是百分数的情况，按比例缩小
                if (percentColumnVMs.length === this.visibleColumnVMs.length) {
                    const sumWidth = percentColumnVMs.reduce((prev, columnVM) => prev + parseFloat(columnVM.currentWidth), 0);
                    if (sumWidth !== 100) {
                        percentColumnVMs.forEach((columnVM) => {
                            columnVM.currentWidth = (parseFloat(columnVM.currentWidth) / sumWidth) * 100 + '%';
                        });
                    }
                }

                // 全部都是数值的情况，按实际大小
                const percentWidthSum = percentColumnVMs.reduce((prev, columnVM) => {
                    columnVM.computedWidth = (parseFloat(columnVM.currentWidth) * rootWidth) / 100;
                    return prev + columnVM.computedWidth;
                }, 0);
                const valueWidthSum = valueColumnVMs.reduce((prev, columnVM) => {
                    columnVM.computedWidth = parseFloat(columnVM.currentWidth);
                    return prev + columnVM.computedWidth;
                }, 0);

                const remainingWidth = rootWidth - percentWidthSum - valueWidthSum;
                if (remainingWidth > 0 && noWidthColumnVMs.length) {
                    const averageWidth = remainingWidth / noWidthColumnVMs.length;
                    noWidthColumnVMs.forEach((columnVM) => columnVM.computedWidth = averageWidth);
                } else if (remainingWidth > 0 && valueWidthSum !== 0) {
                    const averageWidth = remainingWidth / valueColumnVMs.length;
                    valueColumnVMs.forEach((columnVM) => columnVM.computedWidth = columnVM.computedWidth + averageWidth);
                }

                // 如果所有列均有值，则总宽度有超出的可能。否则总宽度为根节点的宽度。
                let tableWidth = '';
                if (this.visibleColumnVMs.every((columnVM) => columnVM.currentWidth)) {
                    tableWidth = this.visibleColumnVMs.reduce((prev, columnVM) => {
                        if (String(columnVM.currentWidth).endsWith('%'))
                            return (prev + (parseFloat(columnVM.currentWidth) * rootWidth) / 100);
                        else
                            return prev + columnVM.computedWidth;
                    }, 0);
                    this.tableWidth = tableWidth;
                } else
                    this.tableWidth = tableWidth = rootWidth; // @important: Work with overflow-x: hidden to prevent two horizontal scrollbar

                const tableMetaList = [this.tableMetaList[0]];
                if (fixedLeftCount) {
                    tableMetaList.push({
                        position: 'left',
                        width: this.visibleColumnVMs.slice(0, fixedLeftCount)
                            .reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                if (fixedRightCount && tableWidth > rootWidth) {
                    // 表格太短时，不固定右侧列
                    tableMetaList.push({
                        position: 'right',
                        width: this.visibleColumnVMs.slice(-fixedRightCount)
                            .reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                this.tableMetaList = tableMetaList;

                /**
                 * 根节点高度优先，头部固定，计算身体高度
                 */
                if ((this.$el.style.height !== '' && this.$el.style.height !== 'auto')
                    || (this.$el.style.maxHeight !== '' && this.$el.style.maxHeight !== 'auto')) {
                    const rootHeight = this.$el.offsetHeight;
                    if (rootHeight) {
                        // 如果使用 v-show 隐藏了，无法计算
                        const titleHeight = this.$refs.title ? this.$refs.title.offsetHeight : 0;
                        const headHeight = this.$refs.head[0] ? this.$refs.head[0].offsetHeight : 0;
                        this.bodyHeight = rootHeight - titleHeight - headHeight;
                    }
                }

                // 当 root 设置了 height，设置 table 的 height，避免隐藏列时的闪烁
                if (this.$el.style.height !== '' && this.$el.style.height !== 'auto')
                    this.tableHeight = this.$el.offsetHeight;
                this.$emit('resize', undefined, this);
            });
        },
        onResizerDragStart($event, columnVM) {
            this.visibleColumnVMs.forEach((columnVM) => {
                columnVM.currentWidth = columnVM.computedWidth;
                columnVM.oldWidth = columnVM.computedWidth;
            });
        },
        onResizerDrag($event, columnVM, index) {
            const minWidth = 44;
            const rootWidth = this.$el.offsetWidth;
            let beforeWidth = 0;
            for (let i = 0; i < index; i++)
                beforeWidth += this.visibleColumnVMs[i].computedWidth;
            const maxWidth = rootWidth - beforeWidth - (this.visibleColumnVMs.length - 1 - index) * minWidth;
            const width = Math.max(minWidth, Math.min(columnVM.oldWidth + $event.dragX, maxWidth));
            let remainingWidth = width - columnVM.computedWidth;
            columnVM.currentWidth = columnVM.computedWidth = width;
            if (this.resizeRemaining === 'sequence') {
                for (let i = index + 1; i < this.visibleColumnVMs.length; i++) {
                    if (remainingWidth === 0)
                        break;
                    const columnVM = this.visibleColumnVMs[i];
                    if (columnVM.computedWidth - remainingWidth >= minWidth) {
                        columnVM.currentWidth = columnVM.computedWidth -= remainingWidth;
                        remainingWidth = 0;
                    } else {
                        remainingWidth -= columnVM.computedWidth - minWidth;
                        columnVM.currentWidth = columnVM.computedWidth = minWidth;
                    }
                }
            } else if (this.resizeRemaining === 'average') {
                /* eslint-disable no-inner-declarations */
                function distributeInAverage(columnVMs) {
                    const averageWidth = remainingWidth / columnVMs.length;
                    const wideColumnVMs = [];
                    columnVMs.forEach((columnVM) => {
                        if (columnVM.computedWidth - averageWidth >= minWidth) {
                            columnVM.currentWidth = columnVM.computedWidth -= averageWidth;
                            remainingWidth -= averageWidth;
                            wideColumnVMs.push(columnVM);
                        } else {
                            remainingWidth -= columnVM.computedWidth - minWidth;
                            columnVM.currentWidth = columnVM.computedWidth = minWidth;
                        }
                    });
                    if (Math.abs(remainingWidth) >= 1 && wideColumnVMs.length)
                        distributeInAverage(wideColumnVMs);
                }
                distributeInAverage(this.visibleColumnVMs.slice(index + 1));
                columnVM.currentWidth = columnVM.computedWidth -= remainingWidth;
            }
            $event.transferEl.style.left = '';
        },
        onResizerDragEnd($event, columnVM, index) {
            this.handleResize();
            this.$emit('resize', {
                columnVM,
                index,
                width: columnVM.computedWidth,
                oldWidth: columnVM.oldWidth,
            });
        },
        onTableScroll(e) {
            this.scrollXStart = e.target.scrollLeft === 0;
            this.scrollXEnd = e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth;
        },
        syncBodyScroll(scrollTop, target) {
            this.$refs.body[0]
                && this.$refs.body[0] !== target
                && (this.$refs.body[0].scrollTop = scrollTop);
            this.$refs.body[1]
                && this.$refs.body[1] !== target
                && (this.$refs.body[1].scrollTop = scrollTop);
            this.$refs.body[2]
                && this.$refs.body[2] !== target
                && (this.$refs.body[2].scrollTop = scrollTop);
        },
        onBodyScroll(e) {
            this.syncBodyScroll(e.target.scrollTop, e.target); // this.throttledVirtualScroll(e);
            if (this.pageable !== 'auto-more' || this.currentLoading)
                return;
            const el = e.target;
            if (el.scrollHeight === el.scrollTop + el.clientHeight && this.currentDataSource && this.currentDataSource.hasMore())
                this.debouncedLoad(true);
        },
        load(more) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;
            if (this.$emitPrevent('before-load', undefined, this))
                return;

            const autoStatus = this.loading === undefined;
            if (autoStatus) {
                this.currentLoading = true;
                this.currentError = false;
            }
            dataSource[more ? 'loadMore' : 'load']()
                .then((data) => {
                    // 防止同步数据使页面抖动
                    // setTimeout(() => this.currentData = data);
                    if (autoStatus) {
                        this.currentLoading = false;
                    }
                    if (this.pageable === true || this.pageable === 'pagination') {
                        if (this.currentDataSource.paging && this.currentDataSource.paging.number > this.currentDataSource.totalPage)
                            this.page(1); // 数据发生变更时，回归到第 1 页
                    } // auto-more 状态的 resize 会频闪。
                    this.pageable !== 'auto-more' && this.handleResize();
                    this.$emit('load', undefined, this);
                    return data;
                })
                .catch((e) => {
                    if (autoStatus) {
                        this.currentLoading = false;
                        this.currentError = true;
                    }
                });
        },
        reload() {
            this.currentDataSource.clearLocalData();
            this.load();
        },
        getFields() {
            return this.visibleColumnVMs
                .map((item) => item.field)
                .filter((item) => !!item)
                .join(',');
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
            delete paging.preventDefault;
            this.currentDataSource.page(paging);
            this.load();
            this.$emit('page', paging, this);
            this.$emit('update:page-number', number, this);
        },
        onClickSort(columnVM) {
            let order;
            let sorting = this.currentSorting;
            if (!sorting)
                sorting = { field: undefined, order: undefined };
            if (sorting.field === columnVM.field) {
                if (sorting.order === (columnVM.defaultOrder || this.defaultOrder))
                    order = sorting.order === 'asc' ? 'desc' : 'asc';
                else if (sorting.order === undefined)
                    order = columnVM.defaultOrder || this.defaultOrder;
                else
                    order = undefined;
            } else
                order = columnVM.defaultOrder || this.defaultOrder;
            this.sort(order && columnVM.field, order, columnVM.sortCompare);
        },
        sort(field, order, compare) {
            const sorting = { field, order, compare };
            if (this.$emitPrevent('before-sort', sorting, this))
                return;
            delete sorting.preventDefault;
            this.currentDataSource.sort(sorting);
            this.load();
            this.$emit('sort', sorting, this);
            this.$emit('update:sorting', sorting, this);
        },
        onSelectFilters(field, $event) {
            const filtering = $event.value || $event.value === 0 ? { [field]: $event.value } : undefined;
            this.filter(filtering);
        },
        getFiltersValue(field) {
            const filtering = this.currentDataSource && this.currentDataSource.filtering;
            if (!filtering)
                return undefined;
            const filterField = Object.keys(filtering)[0];
            if (filterField !== field)
                return undefined;
            else
                return this.$at(filtering, field);
        },
        filter(filtering) {
            if (filtering) {
                if (this.$emitPrevent('before-filter', filtering, this))
                    return;
                delete filtering.preventDefault;
            } else {
                if (this.$emitPrevent('before-filter', {}, this))
                    return;
            }
            this.currentDataSource.filter(filtering);
            this.load();
            this.$emit('filter', filtering, this);
            this.$emit('update:filtering', filtering, this);
        },
        watchCurrentData() {
            this.$watch(() => this.currentData, (currentData) => {
                if (currentData) {
                    this.processData(currentData);
                }
            }, {
                immediate: true,
            });
        },
        /* Selection Methods */
        watchValue(value) {
            if (this.selectedItem && this.$at(this.selectedItem, this.valueField) === value)
                return;
            if (value === undefined)
                this.selectedItem = undefined;
            else {
                this.selectedItem = this.currentData && this.currentData.find((item) => this.$at(item, this.valueField) === value); // @TODO: Group
            }
        },
        watchValues(values) {
            if (!this.valueField)
                return;
            if (values) {
                this.currentValues = values;
                this.currentData && this.currentData.forEach((item) => (item.checked = values.includes(this.$at(item, this.valueField))));
            } else {
                const values = [];
                this.currentData && this.currentData.forEach((item) => item.checked && values.push(this.$at(item, this.valueField)));
                this.currentValues = values;
            }
        },
        select(item, cancelable) {
            // Check if enabled
            if (this.readonly || this.disabled || item.disabled)
                return; // Prevent replication
            const oldValue = this.value;
            const oldItem = this.selectedItem;
            if (cancelable === undefined)
                cancelable = this.cancelable;
            if (!cancelable && item === oldItem)
                return; // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', { value: item && item.value, oldValue, item, oldItem }, this))
                return;
            if (cancelable && item === oldItem)
                this.selectedItem = undefined;
            else
                this.selectedItem = item; // Assign and sync `value`
            const value = this.selectedItem && this.$at(this.selectedItem, this.valueField);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this); // Emit `after-` events
            this.$emit('select', {
                value,
                oldValue,
                selectedItem: this.selectedItem,
                item,
                oldItem,
            }, this);
        },
        check(item, checked) {
            // Check if enabled
            if (this.readonly || this.disabled || item.disabled)
                return; // Method overloading
            if (checked === undefined)
                checked = !item.checked; // Prevent replication
            if (item.checked === checked)
                return;
            const oldValues = this.values ? Array.from(this.values) : this.values; // Emit a `before-` event with preventDefault()
            // if (this.$emitPrevent('before-check', {
            //     oldValues,
            //     checked,
            //     item,
            // }, this))
            //     return;
            // Assign and sync `checked`
            item.checked = checked;
            if (this.valueField) {
                const label = this.$at(item, this.valueField);
                if (checked && !this.currentValues.includes(label))
                    this.currentValues.push(label);
                else if (!checked && this.currentValues.includes(label))
                    this.currentValues.splice(this.currentValues.indexOf(label), 1);
            }
            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', { values: this.currentValues, oldValues, item, checked }, this);
        },
        checkAll(checked) {
            // Check if enabled
            if (this.readonly || this.disabled)
                return;
            const oldValues = this.values ? Array.from(this.values) : this.values;
            this.currentData.forEach((item) => {
                if (item.disabled)
                    return;
                item.checked = checked;
                if (this.valueField) {
                    const label = this.$at(item, this.valueField);
                    if (checked && !this.currentValues.includes(label))
                        this.currentValues.push(label);
                    else if (!checked && this.currentValues.includes(label))
                        this.currentValues.splice(this.currentValues.indexOf(label), 1);
                }
            });
            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', { values: this.currentValues, oldValues, checked }, this);
        },
        toggleExpanded(item, expanded) {
            // Method overloading
            if (expanded === undefined)
                expanded = !item.expanded; // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-toggle-expanded', { item, oldExpanded: !expanded, expanded }, this))
                return;
            this.$set(item, 'expanded', expanded);
            this.$emit('toggle-expanded', { item, expanded }, this);
            if (expanded && this.accordion) {
                this.currentData.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.expanded)
                        otherItem.expanded = false;
                });
            }
        },
        processTreeData(data, level = 0, parent) {
            let newData = [];
            for (const item of data) {
                item.level = level;
                item.treeParent = parent && `${parent[this.rowKey]}${parent.treeParent ? ',' + parent.treeParent : ''}`;
                if (item[this.treeChildrenField] && item[this.treeChildrenField].length) {
                    item[this.treeHaschildrenField] = true;
                    item.expanded = item.expanded || false;
                }
                if (parent && !item.hasOwnProperty('display')) {
                    this.$set(item, 'display', 'none');
                }
                newData.push(item);
                if (item[this.treeChildrenField] && item[this.treeChildrenField].length) {
                    newData = newData.concat(this.processTreeData(item[this.treeChildrenField], level + 1, item));
                }
            }
            return newData;
        },
        toggleTreeExpanded(item, expanded) {
            if (expanded === undefined)
                expanded = !item.expanded;
            if (this.$emitPrevent('before-tree-toggle-expanded', { item, oldExpanded: !expanded, expanded }, this))
                return;
            this.$set(item, 'expanded', expanded);
            this.$emit('tree-toggle-expanded', { item, expanded }, this);
            if (!item[this.treeChildrenField] && this.treeDataSource) {
                this.$set(item, 'loading', true);
                this.treeDataSource(item).then((res) => {
                    const result = res;
                    if (result instanceof Array) {
                        item.children = result;
                        const index = this.currentData.findIndex((currentData) => currentData[this.rowKey] === item[this.rowKey]);
                        if (index !== -1) {
                            const treeData = this.processTreeData(result, item.level + 1, item);
                            this.currentData.splice(index + 1, 0, ...treeData);
                            this.currentData.forEach((itemData) => {
                                if (itemData.treeParent) {
                                    if (expanded) {
                                        if (itemData.treeParent.split(',')[0] === item[this.rowKey]) {
                                            itemData.display = '';
                                        }
                                    } else {
                                        if (itemData.treeParent.includes(item[this.rowKey])) {
                                            itemData.display = 'none';
                                        }
                                    }
                                }
                            });
                        }
                    }
                    this.$set(item, 'loading', false);
                });
            } else {
                this.currentData.forEach((itemData) => {
                    if (itemData.treeParent) {
                        if (expanded) {
                            if (itemData.treeParent.split(',')[0] === item[this.rowKey]) {
                                itemData.display = '';
                            }
                        } else {
                            if (itemData.treeParent.includes(item[this.rowKey])) {
                                itemData.display = 'none';
                            }
                        }
                    }
                });
            }
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    /* 不能加这句，会使分页器的 Select 无法显示！ overflow: hidden; */
}

.title {
    text-align: center;
    margin-bottom: var(--table-view-title-space);
}

.table {
    overflow-x: auto;
    overflow-y: hidden;
    max-height: inherit;
}

.table[position="left"] {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    background: var(--table-view-table-background);
}

.table[position="left"][shadow] {
    box-shadow: var(--table-view-table-shadow);
}

.table[position="right"] {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    background: var(--table-view-table-background);
}

.table[position="right"][shadow] {
    box-shadow: var(--table-view-table-right-shadow);
}

.table[position="right"] > * {
    float: right;
}

.head {
    width: 100%;
}

.head-title {
    position: relative;
}

.head-title[sortable]:hover {
    background: #eef2f8;
}

.extra {
    float: right;
}

.body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}

.center {
    text-align: center;
}

.sort {
    position: relative;
    display: inline-block;
    width: var(--table-view-sort-size);
    height: var(--table-view-sort-size);
    vertical-align: -1px;
    color: var(--table-view-sort-color);
    cursor: var(--cursor-pointer);
}

.sort::before {
    position: absolute;
    left: 0;
    top: -3px;
    line-height: 1;
    icon-font: url('../i-icon.vue/assets/arrow-up.svg');
}

.sort::after {
    position: absolute;
    left: 0;
    bottom: -4px;
    line-height: 1;
    icon-font: url('../i-icon.vue/assets/arrow-down.svg');
}

.sort[sorting][order="asc"]::before {
    color: var(--table-view-sort-color-active);
}

.sort[sorting][order="desc"]::after {
    color: var(--table-view-sort-color-active);
}

.filter-wrap {
    float: right;
    cursor: var(--cursor-pointer);
    padding-bottom: 6px;
    margin-bottom: -6px;
}

.filter-wrap::before {
    icon-font: url('../i-icon.vue/assets/filter.svg');
    color: var(--brand-disabled);
    font-size: var(--font-size-small);
    vertical-align: -2px;
}

.resizer {
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: -3px;
    z-index: 1;
    cursor: col-resize;
    padding: 2px;
    background: var(--border-color-base) content-box;
    width: 5px;
}

.cell {
    position: relative;
    white-space: normal;
    word-break: break-all;
    /* 解决在火狐浏览器下英文换行显示问题 */
    word-wrap: break-word;
}

.cell[ellipsis] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.pagination {
    text-align: right;
    margin-top: var(--table-view-pagination-space);
}

.row[selected] {
    background: var(--table-view-row-selected-background) !important;
}

.expander {
    user-select: none;
    display: inline-block;
    width: var(--table-view-expander-size);
    height: var(--table-view-expander-size);
    line-height: var(--table-view-expander-size);
    vertical-align: -2px;
    text-align: center;
    transform: rotate(-180deg);
}

.expander::before {
    icon-font: url('../i-icon.vue/icons/square-down.svg');
}

.expander[expanded] {
    transform: rotate(0);
}

.expand-td {
    /* transition: $transition-duration height ease-in-out, $transition-duration padding-top ease-in-out, $transition-duration padding-bottom ease-in-out; */
}

.column-title {
    color: var(--table-view-head-item-color);
}

.column-field {}

.tree_expander {
    display: inline-block;
    width: var(--table-view-tree-expander-size);
    height: var(--table-view-tree-expander-size);
    line-height: var(--table-view-tree-expander-size);
    text-align: center;
    /* margin-left: calc(var(--table-view-tree-margin-left) * -1); */
    transition: transform var(--transition-duration-base);
}

.tree_expander::before {
    icon-font: url('i-material-design.vue/assets/filled/arrow_right.svg');
}

.tree_expander {
    cursor: pointer;
}

.tree_expander[expanded] {
    transform: rotate(90deg);
}
.tree_placeholder{
    display: inline-block;
    width: var(--table-view-tree-expander-size);
    height: var(--table-view-tree-expander-size);
    line-height: var(--table-view-tree-expander-size);
    text-align: center;
}
.tree_expander[icon="loading"]::before, /* @deprecated */
.tree_expander[loading]::before {
    content: '';
    font: inherit;
    display: inline-block;
    width: var(--table-view-tree-expander-loading-size);
    height: var(--table-view-tree-expander-loading-size);
    border: var(--table-view-tree-expander-loading-border-width) solid currentColor;
    border-top-color: transparent;
    border-radius: var(--table-view-tree-expander-loading-size);
    animation: rotate var(--spinner-animation-duration) ease-in-out var(--spinner-animation-delay) infinite;
}

@keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}
</style>
