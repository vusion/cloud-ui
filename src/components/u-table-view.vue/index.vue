<template>
<div :class="$style.root" ref="root" :border="border"
    @dragend="onDragEnd($event)"
    @drop="onDrop($event)"
    @dragover="onRootDragover($event)">
    <div v-if="title" :class="$style.title" ref="title" :style="{ textAlign: titleAlignment }" vusion-slot-name="title" vusion-slot-name-edit="title">
        <slot name="title">{{ title }}</slot>
    </div>
    <div :class="$style.table" v-for="(tableMeta, tableMetaIndex) in tableMetaList" :key="tableMeta.position" :position="tableMeta.position"
        :style="{ width: tableMeta.position !== 'static' && number2Pixel(tableMeta.width), height: number2Pixel(tableHeight)}"
        @scroll="onTableScroll" :shadow="(tableMeta.position === 'left' && !scrollXStart) || (tableMeta.position === 'right' && !scrollXEnd)">
        <div v-if="showHead" :class="$style.head" ref="head" :stickingHead="stickingHead" :style="{ width: stickingHead ? number2Pixel(tableMeta.width) : '', top: number2Pixel(stickingHeadTop) }">
            <u-table :class="$style['head-table']" :color="color" :line="line" :striped="striped" :style="{ width: number2Pixel(tableWidth)}">
                <colgroup>
                    <col v-for="(columnVM, columnIndex) in visibleColumnVMs" :key="columnIndex" :width="columnVM.computedWidth"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th ref="th" :class="[$style['head-title'], boldHeader ? $style.boldHeader : null]" v-for="(columnVM, columnIndex) in visibleColumnVMs"
                            :key="columnIndex"
                            :is-sub="columnVM.$attrs['is-sub']"
                            :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                            :vusion-node-path="columnVM.$attrs['vusion-node-path']"
                            :vusion-node-tag="columnVM.$attrs['vusion-node-tag']"
                            :vusion-disabled-move="columnVM.$attrs['vusion-disabled-move']"
                            :vusion-disabled-duplicate="columnVM.$attrs['vusion-disabled-duplicate']"
                            :vusion-disabled-cut="columnVM.$attrs['vusion-disabled-cut']"
                            :vusion-template-title-node-path="columnVM.$attrs['vusion-template-title-node-path']"
                            :sortable="columnVM.sortable && sortTrigger === 'head'" :filterable="!!columnVM.filters" @click="columnVM.sortable && sortTrigger === 'head' && onClickSort(columnVM)"
                            :style="getStyle(columnIndex, columnVM)"
                            :last-left-fixed="isLastLeftFixed(columnVM, columnIndex)"
                            :first-right-fixed="isFirstRightFixed(columnVM, columnIndex)"
                            :shadow="(isLastLeftFixed(columnVM, columnIndex) && !scrollXStart) || (isFirstRightFixed(columnVM, columnIndex) && !scrollXEnd)">
                            <!-- type === 'checkbox' -->
                            <span v-if="columnVM.type === 'checkbox'">
                                <u-checkbox :value="allChecked" @check="checkAll($event.value)"></u-checkbox>
                            </span>
                            <!-- Normal title -->
                            <template>
                                <span vusion-slot-name="title" vusion-slot-name-edit="title" :class="$style['column-title']">
                                    <f-slot name="title" :vm="columnVM" :props="{ columnVM, columnIndex }">
                                        {{ columnVM.title }}
                                        <s-empty
                                            v-if="!(columnVM.$slots && columnVM.$slots.title)
                                                && !columnVM.title
                                                && $env.VUE_APP_DESIGNER
                                                && !!$attrs['vusion-node-path']">
                                        </s-empty>
                                    </f-slot>
                                </span>
                            </template>
                            <!-- Sortable -->
                            <span v-if="columnVM.sortable" :class="$style.sort"
                                :sorting="currentSorting && currentSorting.field === columnVM.field" :order="currentSorting && currentSorting.order"
                                @click="sortTrigger === 'icon' && ($event.stopPropagation(), onClickSort(columnVM))"></span>
                            <!-- Filterable -->
                            <span v-if="columnVM.filters" :class="$style['filter-wrap']" :active="isFilterActive(columnVM.field)">
                                <!-- <u-table-view-filters :value="getFiltersValue(columnVM.field)" @select="onSelectFilters(columnVM.field, $event)">
                                    <u-table-view-filter v-for="filter in columnVM.filters" :key="filter.value" :value="filter.value">{{ filter.text }}</u-table-view-filter>
                                </u-table-view-filters> -->
                                <u-table-view-filters-popper
                                    :value="getFiltersValue(columnVM.field)"
                                    :data="columnVM.filters"
                                    :multiple="columnVM.filterMultiple || filterMultiple"
                                    :max="columnVM.filterMax || filterMax"
                                    @select="onSelectFilters(columnVM.field, $event)">
                                </u-table-view-filters-popper>
                            </span>
                            <!-- Resizable -->
                            <f-dragger v-if="resizable && columnIndex !== visibleColumnVMs.length - 1" axis="horizontal"
                                @dragstart="onResizerDragStart($event, columnVM)"
                                @drag="onResizerDrag($event, columnVM, columnIndex)"
                                @dragend="onResizerDragEnd($event, columnVM, columnIndex)">
                                <div :class="$style.resizer" @click.stop></div>
                            </f-dragger>
                        </th>
                    </tr>
                </thead>
            </u-table>
        </div>
        <div v-if="stickingHead" :class="$style.headPlaceholder" ref="headPlaceholder" :style="{ height: number2Pixel(stickingHeadHeight) }"></div>
        <div :class="$style.body" ref="body" :style="{ height: number2Pixel(bodyHeight) }" @scroll="onBodyScroll"
            :sticky-fixed="useStickyFixed">
            <f-scroll-view :class="$style.scrollcview" @scroll="onScrollView" ref="scrollView" :native="!!tableMetaIndex || $env.VUE_APP_DESIGNER" :hide-scroll="!!tableMetaIndex">
            <u-table ref="bodyTable" :class="$style['body-table']" :line="line" :striped="striped" :style="{ width: number2Pixel(tableWidth)}">
                <colgroup>
                    <col v-for="(columnVM, columnIndex) in visibleColumnVMs" :key="columnIndex" :width="columnVM.computedWidth"></col>
                </colgroup>
                <tbody>
                    <template v-if="(!currentLoading && !currentError || pageable === 'auto-more' || pageable === 'load-more') && currentData && currentData.length">
                        <template v-for="(item, rowIndex) in currentData">
                            <tr :key="rowIndex" :class="$style.row" :color="item.rowColor" :selected="selectable && selectedItem === item" @click="selectable && select(item)" :style="{ display: item.display }"
                            :draggable="rowDraggable?rowDraggable:undefined"
                            :dragging="isDragging(item)"
                            :subrow="!!item.tableTreeItemLevel"
                            @dragstart="onDragStart($event, item, rowIndex)"
                            @dragover="onDragOver($event, item, rowIndex)">
                                <template v-if="$env.VUE_APP_DESIGNER">
                                    <td ref="td" :class="$style.cell" v-for="(columnVM, columnIndex) in visibleColumnVMs" :ellipsis="columnVM.ellipsis && columnVM.type !== 'editable'" v-ellipsis-title
                                        vusion-slot-name="cell"
                                        :key="columnIndex"
                                        :vusion-next="true"
                                        :vusion-disabled-move="columnVM.$attrs['vusion-disabled-move']"
                                        :vusion-disabled-duplicate="columnVM.$attrs['vusion-disabled-duplicate']"
                                        :vusion-disabled-cut="columnVM.$attrs['vusion-disabled-cut']"
                                        :vusion-node-tag="columnVM.$attrs['vusion-node-tag']"
                                        :vusion-template-cell-node-path="columnVM.$attrs['vusion-template-cell-node-path']"
                                        :vusion-template-editcell-node-path="columnVM.$attrs['vusion-template-editcell-node-path']"
                                        :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                                        :vusion-node-path="columnVM.$attrs['vusion-node-path']"
                                        :vusion-disabled-selected="rowIndex !== 0"
                                        :style="getStyle(columnIndex, columnVM)"
                                        :last-left-fixed="isLastLeftFixed(columnVM, columnIndex)"
                                        :first-right-fixed="isFirstRightFixed(columnVM, columnIndex)"
                                        :shadow="(isLastLeftFixed(columnVM, columnIndex) && !scrollXStart) || (isFirstRightFixed(columnVM, columnIndex) && !scrollXEnd)">
                                        <div :class="$style.tdmask" v-if="rowIndex !== 0"></div>
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
                                            <template v-if="treeDisplay && item.tableTreeItemLevel !== undefined && columnIndex === treeColumnIndex">
                                                <span :class="$style.indent" :style="{ paddingLeft: number2Pixel(20 * item.tableTreeItemLevel) }"></span>
                                                <span :class="$style.tree_expander" v-if="$at(item, hasChildrenField)" :expanded="item.expanded" @click="toggleTreeExpanded(item)" :loading="item.loading"></span>
                                                <span :class="$style.tree_placeholder" v-else></span>
                                            </template>
                                            <!-- Normal text -->
                                            <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                            </f-slot>
                                            <!-- type === 'dragHandler' -->
                                            <span v-if="columnVM.type === 'dragHandler'">
                                                <i-ico :class="$style.dragHandler" name="dragHandler" :draggable="handlerDraggable?handlerDraggable:undefined"></i-ico>
                                            </span>
                                        </div>
                                        <div v-if="columnVM.type === 'editable'" vusion-slot-name="editcell" :plus-empty="columnVM.$attrs['editcell-plus-empty']" style="margin-top:10px">
                                            <f-slot name="editcell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                            </f-slot>
                                        </div>
                                    </td>
                                </template>
                                <template v-else>
                                    <td ref="td" :class="$style.cell" v-for="(columnVM, columnIndex) in visibleColumnVMs"
                                        :ellipsis="columnVM.ellipsis && columnVM.type !== 'editable'"
                                        v-ellipsis-title
                                        :key="columnIndex"
                                        :vusion-scope-id="columnVM.$vnode.context.$options._scopeId"
                                        :vusion-disabled-move="columnVM.$attrs['vusion-disabled-move']"
                                        :vusion-disabled-duplicate="columnVM.$attrs['vusion-disabled-duplicate']"
                                        :vusion-disabled-cut="columnVM.$attrs['vusion-disabled-cut']"
                                        :vusion-node-path="columnVM.$attrs['vusion-node-path']"
                                        :style="getStyle(columnIndex, columnVM)"
                                        :last-left-fixed="isLastLeftFixed(columnVM, columnIndex)"
                                        :first-right-fixed="isFirstRightFixed(columnVM, columnIndex)"
                                        :shadow="(isLastLeftFixed(columnVM, columnIndex) && !scrollXStart) || (isFirstRightFixed(columnVM, columnIndex) && !scrollXEnd)">
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
                                            <span :class="$style.expander" v-if="columnVM.type === 'expander'" :expanded="item.expanded" :disabled="item.disabled" @click="toggleExpanded(item)"></span>
                                            <template v-if="treeDisplay && item.tableTreeItemLevel !== undefined && columnIndex === treeColumnIndex">
                                                <span :class="$style.indent" :style="{ paddingLeft: number2Pixel(20 * item.tableTreeItemLevel) }"></span>
                                                <span :class="$style.tree_expander" v-if="$at(item, hasChildrenField)" :expanded="item.expanded" @click="toggleTreeExpanded(item)" :loading="item.loading"></span>
                                                <span :class="$style.tree_placeholder" v-else></span>
                                            </template>
                                            <!-- type === 'dragHandler' -->
                                            <span v-if="columnVM.type === 'dragHandler'">
                                                <i-ico :class="$style.dragHandler" name="dragHandler" :draggable="handlerDraggable?handlerDraggable:undefined"></i-ico>
                                            </span>
                                            <!-- Normal text -->
                                            <template v-if="columnVM.type === 'editable'">
                                                <div @dblclick="onSetEditing(item, columnVM)" :class="$style.editablewrap"
                                                    :ellipsis="columnVM.ellipsis"
                                                    :style="{width:getEditablewrapWidth(item, columnIndex, treeColumnIndex)}"
                                                    :editing="item.editing === columnVM.field">
                                                    <div>
                                                        <template v-if="item.editing === columnVM.field">
                                                            <f-slot name="editcell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                                <span v-if="columnVM.field" vusion-slot-name="editcell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                            </f-slot>
                                                        </template>
                                                        <template v-else>
                                                            <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                            </f-slot>
                                                        </template>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <f-slot name="cell" :vm="columnVM" :props="{ item, value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
                                                    <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                </f-slot>
                                            </template>

                                    </td>
                                </template>
                            </tr>
                            <template v-if="$env.VUE_APP_DESIGNER && expanderColumnVM && rowIndex===0">
                                <tr :class="$style['expand-content']">
                                    <f-collapse-transition>
                                        <td :colspan="visibleColumnVMs.length" :class="$style['expand-td']"
                                        vusion-slot-name="expand-content"
                                        :vusion-disabled-selected="true"
                                        :vusion-node-tag="expanderColumnVM.$attrs['vusion-node-tag']"
                                        :vusion-template-expand-content-node-path="expanderColumnVM.$attrs['vusion-template-expand-content-node-path']"
                                        :vusion-scope-id="expanderColumnVM.$vnode.context.$options._scopeId"
                                        :vusion-node-path="expanderColumnVM.$attrs['vusion-node-path']"
                                        style="background: #F7F8FA;">
                                            <div :plus-empty="expanderColumnVM.$attrs['expand-content-plus-empty']" color="inverse"></div>
                                            <f-slot name="expand-content" :vm="expanderColumnVM" :props="{ item, value: $at(item, expanderColumnVM.field), columnVM: expanderColumnVM, rowIndex, index: rowIndex }">
                                            </f-slot>
                                        </td>
                                    </f-collapse-transition>
                                </tr>
                            </template>
                            <template v-else>
                                <tr :class="$style['expand-content']" v-if="expanderColumnVM && item.expanded">
                                    <f-collapse-transition>
                                        <td :colspan="visibleColumnVMs.length" :class="$style['expand-td']" v-show="item.expanded">
                                            <f-slot name="expand-content" :vm="expanderColumnVM" :props="{ item, value: $at(item, expanderColumnVM.field), columnVM: expanderColumnVM, rowIndex, index: rowIndex }"></f-slot>
                                        </td>
                                    </f-collapse-transition>
                                </tr>
                            </template>
                        </template>
                    </template>
                    <tr key="no-data-source" v-if="currentData === undefined && !currentError && $env.VUE_APP_DESIGNER">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            请绑定数据源
                        </td>
                    </tr>
                    <tr key="loading" v-else-if="(currentData === undefined && !currentError) || currentLoading"><!-- 初次加载与加载更多 loading 合并在一起 -->
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="loading">
                            <slot name="loading"><u-spinner :class="$style.spinner"></u-spinner> {{ loadingText }}</slot>
                        </td>
                    </tr>
                    <tr key="error" v-else-if="currentData === null || currentError">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="error">
                            <slot name="error">
                                <u-image v-if="errorImage" :src="errorImage" fit="contain"></u-image>
                                <u-linear-layout layout="block" justify="center">
                                    {{ errorText }}
                                </u-linear-layout>
                            </slot>
                        </td>
                    </tr>
                    <tr key="loadMore" v-else-if="pageable === 'load-more' && currentDataSource.hasMore()">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            <u-link @click="load(true)">{{ $t('loadMore') }}</u-link>
                        </td>
                    </tr>
                    <tr key="noMore" v-else-if="((pageable === 'auto-more' && hasScroll) || pageable === 'load-more') && !currentDataSource.hasMore() && (currentData && currentData.length)">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            {{ $t('noMore') }}
                        </td>
                    </tr>
                    <tr key="empty" v-else-if="!currentData.length">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="empty">
                            <slot name="empty">
                                <u-image v-if="errorImage" :src="errorImage" fit="contain"></u-image>
                                <u-linear-layout layout="block" justify="center">
                                    {{ emptyText }}
                                </u-linear-layout>
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </u-table>
            </f-scroll-view>
        </div>
    </div>
    <u-table-view-drop-ghost :data="dropData"></u-table-view-drop-ghost>
    <u-pagination :class="$style.pagination" ref="pagination" v-if="(pageable === true || pageable === 'pagination') && currentDataSource"
        :total-items="currentDataSource.total" :page="currentDataSource.paging.number"
        :page-size="currentDataSource.paging.size" :page-size-options="pageSizeOptions" :show-total="showTotal" :show-sizer="showSizer" :show-jumper="showJumper"
        :size="paginationSize"
        @change="page($event.page)" @change-page-size="page(1, $event.pageSize)">
    </u-pagination>
    <div><slot></slot></div>
    <div v-if="draggable" ref="dragGhost" :class="$style.dragGhost" :designer="$env.VUE_APP_DESIGNER">
        <u-text color="secondary" :class="$style.text" v-if="$env.VUE_APP_DESIGNER">拖拽缩略图配置区域</u-text>
        <slot name="dragGhost" :item="dragState.source"></slot>
        <div vusion-slot-name="dragGhost" v-if="$env.VUE_APP_DESIGNER">
            <s-empty v-if="!$slots.dragGhost
                && $scopedSlots
                && !($scopedSlots.dragGhost && $scopedSlots.dragGhost())
                && !!$attrs['vusion-node-path']">
            </s-empty>
        </div>
    </div>
    <div v-if="draggable" :class="$style.dragGhost">
        <div :class="$style.trdragGhost" ref="trDragGhost"></div>
    </div>
</div>
</template>

<script>
import DataSource from '../../utils/DataSource';
import { addResizeListener, removeResizeListener, findScrollParent, getRect } from '../../utils/dom';
import { format } from '../../utils/date';
import MEmitter from '../m-emitter.vue';
import debounce from 'lodash/debounce';
import isNumber from 'lodash/isNumber';
import i18n from './i18n';
import UTableViewDropGhost from './drop-ghost.vue';
import SEmpty from '../../components/s-empty.vue';

export default {
    name: 'u-table-view',
    components: {
        UTableViewDropGhost,
        SEmpty,
    },
    mixins: [MEmitter],
    i18n,
    props: {
        boldHeader: {
            type: Boolean,
            default: true,
        },
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
        paginationSize: { type: String, default: 'normal' },
        sorting: Object,
        defaultOrder: { type: String, default: 'desc' },
        sortTrigger: { type: String, default: 'head' },
        filtering: Object,
        remotePaging: { type: Boolean, default: false },
        remoteSorting: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        title: { type: String, default: '' },
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        line: { type: Boolean, default: false },
        striped: { type: Boolean, default: false },
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
        errorImage: {
            type: String,
            default: '',
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
        stickHead: { type: Boolean, default: false },
        stickHeadOffset: { type: Number, default: 0 },
        color: String,
        treeDisplay: { type: Boolean, default: false },
        childrenField: { type: String, default: 'children' },
        hasChildrenField: { type: String, default: 'hasChildren' },
        treeDataSource: [Function],
        minColumnWidth: { type: Number, default: 44 },
        extraParams: Object,
        defaultColumnWidth: [String, Number],
        filterMultiple: { type: Boolean, default: false },
        filterMax: Number,
        resizeBodyHeight: { type: Boolean, default: true },
        stickFixed: { type: Boolean, default: true },
        draggable: { type: Boolean, default: false }, // 是否可拖拽
        treeCheckType: { type: String, default: 'up+down' }, // 树型数据关联选中类型
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
            exportData: undefined,
            checkedItems: {}, // 暂存选中行
            stickingHead: false,
            stickingHeadHeight: 0,
            stickingHeadTop: 0,
            useStickyFixed: this.stickFixed,
            fixedLeftList: [],
            fixedRightList: [],
            dragState: {
                dragging: false,
                source: {},
            },
            dropData: undefined,
            rowDraggable: false,
            handlerDraggable: false,
            hasScroll: false, // 作为下拉加载是否展示"没有更多"的依据。第一页不满，没有滚动条的情况下，不展示
        };
    },
    computed: {
        currentData() {
            if (this.exportData)
                return this.exportData;

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
            return this.columnVMs.filter((columnVM) => !columnVM.currentHidden);
        },
        expanderColumnVM() {
            return this.columnVMs.find((columnVM) => columnVM.type === 'expander');
        },
        paging() {
            if (this.pageable) {
                const paging = {};
                paging.size = this.pageSize === '' ? 20 : this.pageSize;
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
        treeColumnIndex() {
            const vms = this.columnVMs.filter((columnVM) => !columnVM.currentHidden);
            let treeColumnIndex = vms.findIndex((columnVM) => columnVM.type === 'tree');
            if (treeColumnIndex === -1) {
                treeColumnIndex = vms.findIndex((columnVM) => !['index', 'radio', 'checkbox', 'expander', 'dragHandler'].includes(columnVM.type));
                if (treeColumnIndex === -1) {
                    return 0;
                } else {
                    return treeColumnIndex;
                }
            } else {
                return treeColumnIndex;
            }
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
                return;

            // 拖拽树数据改变的时候，会进入这里的watch，数据会不一致，所以阻止进入
            if (this.preventDatasourceWatch) {
                return;
            }

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
            this.$nextTick(() => {
                this.watchValues(values);
            });
        },
        currentValues(values, oldValues) {
            const checkedItems = this.getCheckedItems();
            this.$emit('change', { values, oldValues, items: checkedItems });
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
        stickFixed(value) {
            this.useStickyFixed = value;
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
            if (this.currentDataSource && this.currentDataSource.paging.number !== number)
                this.page(number);
        });
        this.debouncedLoad = debounce(this.load, 300);
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        if (this.pageNumber && this.pageable) {
            this.initialLoad && this.page(this.pageNumber);
        } else {
            this.initialLoad && this.load();
        }
    },
    mounted() {
        if (this.data)
            this.processData(this.data);

        this.watchCurrentData();
        this.watchValue(this.value);
        this.watchValues(this.values);
        this.handleResize();
        addResizeListener(this.$el, this.handleResize);

        if (this.stickHead) {
            this.scrollParentEl = findScrollParent(this.$el);
            this.scrollParentEl && this.scrollParentEl.addEventListener('scroll', this.onScrollParentScroll);
        }
    },
    destroyed() {
        removeResizeListener(this.$el, this.handleResize);
        if (this.stickHead) {
            this.scrollParentEl && this.scrollParentEl.removeEventListener('scroll', this.onScrollParentScroll);
        }
        this.clearTimeout();
    },
    methods: {
        typeCheck(type) {
            return ['index', 'radio', 'checkbox', 'expander'].includes(type);
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
            const editable = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'editable');
            // 拖拽设置
            const dragHandler = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'dragHandler');
            if (!this.$env.VUE_APP_DESIGNER) {
                this.rowDraggable = this.draggable && !dragHandler;
                this.handlerDraggable = this.draggable && dragHandler;
            }
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
            if (editable) {
                data.forEach((item) => {
                    if (!item.hasOwnProperty('editing'))
                        this.$set(item, 'editing', '');
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
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        },
        getExtraParams() {
            return this.extraParams;
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
                filterMultiple: this.filterMultiple,
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
                options.load = function load(params, extraParams) {
                    const result = dataSource(params, extraParams);
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
        handleResize() {
            if (this.resizeBodyHeight) {
                this.bodyHeight = undefined;
            }
            this.clearTimeout();
            this.timer = setTimeout(() => {
                this.timer = undefined;

                let rootWidth = this.$el.offsetWidth;
                // 放在线性布局flex下，或者某些设置了fit-content，table-width会缓慢增长，导致表格一直动
                if (rootWidth > this.tableWidth && rootWidth - this.tableWidth <= 5) {
                    rootWidth = this.tableWidth;
                }
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
                let defaultColumnWidth = this.defaultColumnWidth;
                if (String(defaultColumnWidth).endsWith('%')) {
                    defaultColumnWidth = (parseFloat(defaultColumnWidth) * rootWidth) / 100;
                }
                defaultColumnWidth = defaultColumnWidth || 0;
                this.visibleColumnVMs.forEach((columnVM, index) => {
                    if (!columnVM.currentWidth) {
                        noWidthColumnVMs.push(columnVM);
                    } else if (String(columnVM.currentWidth).endsWith('%'))
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
                    const finalWidth = averageWidth > defaultColumnWidth ? averageWidth : defaultColumnWidth;
                    noWidthColumnVMs.forEach((columnVM) => columnVM.computedWidth = finalWidth);
                } else if (remainingWidth > 0 && valueWidthSum !== 0) {
                    const averageWidth = remainingWidth / valueColumnVMs.length;
                    valueColumnVMs.forEach((columnVM) => columnVM.computedWidth = columnVM.computedWidth + averageWidth);
                } else if (remainingWidth < 0 && noWidthColumnVMs.length) {
                    noWidthColumnVMs.forEach((columnVM) => columnVM.computedWidth = defaultColumnWidth || 100);
                }

                // 如果所有列均有值，则总宽度有超出的可能。否则总宽度为根节点的宽度。
                let tableWidth = '';
                if (this.visibleColumnVMs.some((columnVM) => columnVM.currentWidth) || defaultColumnWidth) {
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
                tableMetaList[0].width = rootWidth;
                if (!this.useStickyFixed) {
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
                } else {
                    this.fixedLeftList = [];
                    this.fixedRightList = [];
                    if (fixedLeftCount) {
                        this.visibleColumnVMs.slice(0, fixedLeftCount)
                            .reduce((prev, columnVM) => {
                                this.fixedLeftList.push(prev);
                                return prev + columnVM.computedWidth;
                            }, 0);
                    }
                    if (fixedRightCount && tableWidth > rootWidth) {
                        // 表格太短时，不固定右侧列
                        this.visibleColumnVMs.slice(-fixedRightCount)
                            .reduce((prev, columnVM) => {
                                this.fixedRightList.push(prev);
                                return prev + columnVM.computedWidth;
                            }, 0);
                    }
                }

                // 当设置line的时候，会有1px的偏差，导致出现滚动条，这里暂时将最后一列的width减1
                // 需要在总width计算完后处理，要不然总width会少1，导致自后一列的右侧线条看不见
                if (this.line) {
                    const lastColumnVM = this.visibleColumnVMs[this.visibleColumnVMs.length - 1];
                    lastColumnVM.computedWidth = lastColumnVM.computedWidth - 1;
                }

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
                        const paginationHeight = this.getPaginationHeight();
                        this.bodyHeight = rootHeight - titleHeight - headHeight - paginationHeight;
                    }
                } else {
                    this.bodyHeight = undefined;
                }

                // 当 root 设置了 height，设置 table 的 height，避免隐藏列时的闪烁
                if (this.$el.style.height !== '' && this.$el.style.height !== 'auto') {
                    const paginationHeight = this.getPaginationHeight();
                    this.tableHeight = this.$el.offsetHeight - paginationHeight;
                } else {
                    this.tableHeight = undefined;
                }

                this.$emit('resize', undefined, this);
                this.$nextTick(() => {
                    this.$refs.scrollView[0] && this.$refs.scrollView[0].handleResize();
                });
            });
        },
        onResizerDragStart($event, columnVM) {
            this.visibleColumnVMs.forEach((columnVM) => {
                columnVM.currentWidth = columnVM.computedWidth;
                columnVM.oldWidth = columnVM.computedWidth;
            });
        },
        onResizerDrag($event, columnVM, index) {
            const minWidth = this.minColumnWidth;
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
            this.stickingHead && this.syncHeadScroll();
        },
        syncBodyScroll(scrollTop, target) {
            if (!this.useStickyFixed) {
                this.$refs.body[0]
                    && this.$refs.body[0] !== target
                    && (this.$refs.body[0].scrollTop = scrollTop);
                this.$refs.body[1]
                    && this.$refs.body[1] !== target
                    && (this.$refs.body[1].scrollTop = scrollTop);
                this.$refs.body[2]
                    && this.$refs.body[2] !== target
                    && (this.$refs.body[2].scrollTop = scrollTop);
            }
        },
        syncHeadScroll() {
            // this.$refs.head[0].scrollLeft = this.$refs.head[0].parentElement.scrollLeft;
        },
        onBodyScroll(e) {
            this.syncBodyScroll(e.target.scrollTop, e.target); // this.throttledVirtualScroll(e);
            this.$refs.head[0].scrollLeft = e.target.scrollLeft;
            this.scrollXStart = e.target.scrollLeft === 0;
            this.scrollXEnd = e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth;
            if (this.pageable !== 'auto-more' || this.currentLoading)
                return;
            const el = e.target;
            if (el.scrollHeight === el.scrollTop + el.clientHeight && this.currentDataSource && this.currentDataSource.hasMore())
                this.debouncedLoad(true);
        },
        onScrollParentScroll(e) {
            const rect = getRect(this.$el);
            const bodyRect = getRect(this.$refs.body[0]);
            const parentRect = this.scrollParentEl === window ? { top: 0, bottom: window.innerHeight } : getRect(this.scrollParentEl);
            const headHeight = this.$refs.head[0].offsetHeight;

            parentRect.top += this.stickHeadOffset;
            bodyRect.bottom -= headHeight;

            this.stickingHead = rect.top < parentRect.top && bodyRect.bottom > parentRect.top;
            this.stickingHeadTop = parentRect.top;
            this.stickingHeadHeight = headHeight;
            this.syncHeadScroll();
        },
        onScrollView(data) {
            this.hasScroll = true;
            if (!this.useStickyFixed) {
                this.syncScrollViewScroll(data.scrollTop, data.target);
            }
            if (this.$refs.scrollView[0].$refs.wrap === data.target) {
                this.$refs.head[0].scrollLeft = data.scrollLeft;
                this.scrollXStart = data.scrollLeft === 0;
                this.scrollXEnd = data.scrollLeft >= data.scrollWidth - data.clientWidth;
                if (this.pageable !== 'auto-more' || this.currentLoading)
                    return;
                if (data.scrollHeight === data.scrollTop + data.clientHeight && this.currentDataSource && this.currentDataSource.hasMore())
                    this.debouncedLoad(true);
            }
        },
        syncScrollViewScroll(scrollTop, target) {
            this.$refs.scrollView[0]
                && this.$refs.scrollView[0].$refs.wrap !== target
                && (this.$refs.scrollView[0].$refs.wrap.scrollTop = scrollTop);
            this.$refs.scrollView[1]
                && this.$refs.scrollView[1].$refs.wrap !== target
                && (this.$refs.scrollView[1].$refs.wrap.scrollTop = scrollTop);
            this.$refs.scrollView[2]
                && this.$refs.scrollView[2].$refs.wrap !== target
                && (this.$refs.scrollView[2].$refs.wrap.scrollTop = scrollTop);
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
        async exportExcel(page = 1, size = 2000, filename, sort, order, excludeColumns = []) {
            if (this.currentDataSource.sorting && this.currentDataSource.sorting.field) {
                const { sorting } = this.currentDataSource;
                sort = sort || sorting.field;
                order = order || sorting.order;
            }
            if (typeof page !== 'number') {
                page = 1;
            }
            if (typeof size !== 'number') {
                size = 2000;
            }
            if (!(typeof page === 'number' && page > 0)) {
                this.$toast.show('页数page必须大于0');
                return;
            }
            if (!(typeof size === 'number' && size > 0 && size <= 200000)) {
                this.$toast.show('数据条数size必须在1-200000之间');
                return;
            }
            const fn = (event) => {
                event.stopPropagation();
                event.preventDefault();
            };
            document.addEventListener('click', fn, true);
            document.addEventListener('keydown', fn, true);
            // 空值和boolean值时到处默认文件名
            if (!filename || filename === true) {
                filename = document.title.split(' ').shift() || 'Export';
                filename += format(new Date(), '_YYYYMMDD_HHmmss');
            }
            try {
                const hasHeader = !!this.$el.querySelector('[position=static] thead tr');

                let content = [];
                if (!this.currentDataSource._load) {
                    content = await this.getRenderResult(this.currentDataSource.data, excludeColumns, hasHeader);
                } else {
                    // console.time('加载数据');
                    let res = await this.currentDataSource._load({ page, size, filename, sort, order });
                    // console.timeEnd('加载数据');
                    if (res instanceof Object) {
                        if (res.hasOwnProperty('content'))
                            res = res.content;
                        else if (res.hasOwnProperty('data'))
                            res = res.data;
                    }

                    if (!(res instanceof Array)) {
                        this.$toast.show('数据格式不是数组');
                        return;
                    }

                    content = await this.getRenderResult(res, excludeColumns, hasHeader);
                }

                // console.time('生成文件');
                const columns = this.visibleColumnVMs.length;
                const sheetData = this.getSheetData(content, hasHeader, columns);
                const sheetTitle = this.title || undefined;
                const { exportExcel } = await import(/* webpackChunkName: 'xlsx' */ '../../utils/xlsx');
                exportExcel(sheetData, 'Sheet1', filename, sheetTitle, columns, hasHeader);
                // console.timeEnd('生成文件');
            } catch (err) {
                console.error(err);
            }

            await new Promise((res) => {
                setTimeout(res);
            });
            document.removeEventListener('click', fn, true);
            document.removeEventListener('keydown', fn, true);
        },
        async getRenderResult(arr = [], excludeColumns = [], hasHeader = true) {
            if (arr.length === 0) {
                if (!hasHeader)
                    return [];

                let res = Array.from(this.$el.querySelectorAll('[position=static] thead tr')).map((tr) => Array.from(tr.querySelectorAll('th')).map((node) => node.innerText));
                res[1] = res[0].map((item) => '');
                res = this.removeExcludeColumns(res, excludeColumns);
                return res;
            }

            // console.time('渲染数据');
            const startIndexes = [];
            for (let i = 0; i < this.visibleColumnVMs.length; i++) {
                const vm = this.visibleColumnVMs[i];
                if (vm.type === 'index')
                    startIndexes[i] = +vm.startIndex;
            }

            let res = [];
            // this.currentDataSource.paging.size 会受可分页选项影响，直接改成pageSize
            const page = this.pageSize;
            for (let i = 0; i < arr.length; i += page) {
                this.exportData = arr.slice(i, i + page);
                await new Promise((res) => {
                    this.$once('hook:updated', res);
                });
                const res1 = Array.from(this.$el.querySelectorAll(i === 0 ? '[position=static] tr' : '[position=static] tbody tr')).map((tr) => Array.from(tr.querySelectorAll('th, td')).map(
                    (node) => {
                        // 如果列表里是输入框，拿框里的结果填入excel
                        const inputElement = node.getElementsByTagName('input');
                        const placeholderElement = Array.from(node.getElementsByTagName('span')).filter((item) => item.className.includes('u-select_placeholder'));
                        if (inputElement.length !== 0) {
                            return inputElement[0].value;
                        } else {
                            // 下拉框未选则时，placeholder内容不显示
                            if (placeholderElement.length !== 0 && placeholderElement[0].innerText === node.innerText) {
                                return '';
                            }
                            return node.innerText;
                        }
                    },
                ));
                res = res.concat(res1);
            }

            for (let rowIndex = hasHeader ? 1 : 0; rowIndex < res.length; rowIndex++) {
                const item = res[rowIndex];
                for (let j = 0; j < item.length; j++) {
                    if (startIndexes[j] !== undefined)
                        item[j] = startIndexes[j] + (hasHeader ? rowIndex - 1 : rowIndex);
                }
            }

            res = this.removeExcludeColumns(res, excludeColumns);

            // console.timeEnd('渲染数据');

            // console.time('复原表格');
            this.exportData = undefined;
            await new Promise((res) => {
                this.$once('hook:updated', res);
            });
            // console.timeEnd('复原表格');

            return res;
        },
        removeExcludeColumns(data, excludeColumns) {
            const excludeIndex = [];
            // 如果表头加了其他组件，如筛选下拉框，可能后面会有空格，把空格去掉
            const titles = (data[0] || []).map((title) => title.trim());
            // 过滤掉title为空的，如多选列等
            titles.forEach((title, index) => {
                if (title === '') {
                    excludeIndex.push(index);
                }
            });
            for (const title of excludeColumns) {
                const titleTemp = title.trim();
                const pos = titles.indexOf(titleTemp);
                if (pos >= 0)
                    excludeIndex.push(pos);
            }

            return data.map((arr) => arr.filter((item, index) => !excludeIndex.includes(index)));
        },
        getSheetData(arr, hasHeader = true, columns) {
            const titles = hasHeader ? arr[0] : Array.from({ length: columns }, (item, index) => index);
            const sheetData = [];
            for (let i = hasHeader ? 1 : 0; i < arr.length; i++) {
                const item = {};
                for (let j = 0; j < titles.length; j++) {
                    item[titles[j]] = arr[i][j];
                }
                sheetData.push(item);
            }
            return sheetData;
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
            this.$emit('update:page-number', number, this);
            this.$emit('page', paging, this);
            this.load();
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
            // const filtering = $event.value || $event.value === 0 ? { [field]: $event.value } : undefined;
            const filtering = { [field]: $event.value };
            this.filter(filtering);
        },
        getFiltersValue(field) {
            const filtering = this.currentDataSource && this.currentDataSource.filtering;
            if (!filtering)
                return undefined;
            // const filterField = Object.keys(filtering)[0];
            // if (filterField !== field)
            //     return undefined;
            // else
            //     return this.$at(filtering, field);
            return this.$at(filtering, field);
        },
        isFilterActive(field) {
            const filtering = this.currentDataSource && this.currentDataSource.filtering;
            if (!filtering)
                return undefined;
            const value = this.$at(filtering, field);
            return value !== undefined && value !== 'ALL' && value !== 'all';
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
            const mergedFiltering = this.currentDataSource && this.currentDataSource.filtering || {};
            Object.assign(mergedFiltering, filtering);
            this.currentDataSource.filter(mergedFiltering);
            this.load();
            this.$emit('filter', mergedFiltering, this);
            this.$emit('update:filtering', mergedFiltering, this);
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
            // 暂存选中行
            if (this.currentData) {
                this.currentData.forEach((item) => {
                    if (item.checked) {
                        const label = this.$at(item, this.valueField);
                        this.checkedItems[label] = item;
                    }
                });
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
        check(item, checked, isContinue) {
            // Check if enabled
            if (this.readonly || this.disabled || item.disabled)
                return; // Method overloading
            if (checked === undefined)
                checked = !item.checked; // Prevent replication
            if (item.checked === checked && !isContinue)
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
            if (this.treeDisplay) {
                this.checkRecursively(item, checked);
                this.getTreeCheckedValues(item, checked);
            } else {
                this.getCheckedValues(item, checked);
            }
            const checkedItems = this.getCheckedItems();
            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', { values: this.currentValues, oldValues, item, checked, items: checkedItems }, this);
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
                if (this.treeDisplay) {
                    this.checkRecursively(item, checked);
                    this.getTreeCheckedValues(item, checked);
                } else {
                    this.getCheckedValues(item, checked);
                }
            });
            const checkedItems = this.getCheckedItems();
            this.$emit('update:values', this.currentValues, this);
            this.$emit('check', { values: this.currentValues, oldValues, checked, items: checkedItems }, this);
        },
        checkRecursively(item, checked) {
            if (this.treeCheckType.includes('down')) {
                const children = this.$at(item, this.childrenField);
                if (children && children.length) {
                    children.forEach((citem) => {
                        citem.checked = checked;
                        this.checkRecursively(citem, checked);
                    });
                }
            }
            if (this.treeCheckType.includes('up')) {
                if (item.parentPointer) {
                    const parentItem = this.currentData.find((citem) => citem === item.parentPointer);
                    if (parentItem) {
                        const children = this.$at(parentItem, this.childrenField) || [];
                        let checkedLength = 0;
                        children.forEach((item) => {
                            if (item.checked)
                                checkedLength++;
                        });
                        if (checkedLength === 0)
                            parentItem.checked = false;
                        else if (checkedLength === children.length)
                            parentItem.checked = true;
                        else
                            parentItem.checked = null;
                    }
                }
            }
        },
        getCheckedValues(item, checked) {
            if (this.valueField) {
                const label = this.$at(item, this.valueField);
                if (checked && !this.currentValues.includes(label))
                    this.currentValues.push(label);
                else if (!checked && this.currentValues.includes(label))
                    this.currentValues.splice(this.currentValues.indexOf(label), 1);
                if (checked) {
                    this.checkedItems[label] = item;
                } else {
                    delete this.checkedItems[label];
                }
            }
        },
        /**
         * 获取树形选中值
         */
        getTreeCheckedValues(item, checked) {
            this.getCheckedValues(item, checked);
            const children = this.$at(item, this.childrenField);
            if (children && children.length) {
                children.forEach((citem) => {
                    if (this.treeCheckType.includes('down')) {
                        this.getTreeCheckedValues(citem, checked);
                    }
                });
            }
            if (item.parentPointer) {
                const parentItem = this.currentData.find((citem) => citem === item.parentPointer);
                if (parentItem) {
                    if (this.treeCheckType.includes('up')) {
                        this.getCheckedValues(parentItem, checked);
                    }
                }
            }
        },
        /**
         * 获取所有选中行
         */
        getCheckedItems() {
            const items = [];
            Object.keys(this.checkedItems).forEach((itemKey) => {
                const inValues = this.currentValues.find((value) => '' + value === itemKey);
                if (inValues) {
                    items.push(this.checkedItems[itemKey]);
                }
            });
            return items;
        },
        toggleExpanded(item, expanded) {
            if (item.disabled)
                return;
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
        /**
         * 转换成平铺型数据
         */
        processTreeData(data, level = 0, parent) {
            let newData = [];
            for (const item of data) {
                item.tableTreeItemLevel = level;
                item.parentPointer = parent;
                if (this.$at(item, this.childrenField) && this.$at(item, this.childrenField).length) {
                    this.$setAt(item, this.hasChildrenField, true);
                    item.expanded = item.expanded || false;
                }
                if (parent) {
                    this.$set(item, 'display', parent.expanded ? '' : 'none');
                }
                if (!item.hasOwnProperty('loading')) {
                    this.$set(item, 'loading', false);
                }
                newData.push(item);
                if (this.$at(item, this.childrenField) && this.$at(item, this.childrenField).length) {
                    newData = newData.concat(this.processTreeData(this.$at(item, this.childrenField), level + 1, item));
                }
            }
            return newData;
        },
        toggleTreeExpanded(item, expanded) {
            if (item.loading)
                return;
            if (expanded === undefined)
                expanded = !item.expanded;
            if (this.$emitPrevent('before-tree-toggle-expanded', { item, oldExpanded: !expanded, expanded }, this))
                return;
            this.$set(item, 'expanded', expanded);
            this.$emit('tree-toggle-expanded', { item, expanded }, this);
            if (!this.$at(item, this.childrenField) && (typeof this.dataSource === 'function')) {
                this.$set(item, 'loading', true);
                this.$forceUpdate();
                // 第一个参数是为了兼容laod的参数
                this.dataSource({ page: this.page, size: this.size }, { item }).then((res) => {
                    let result = [];
                    if (Array.isArray(res)) {
                        result = res;
                    } else if (typeof res === 'object') { // 特殊处理
                        Object.keys(res).forEach((key) => {
                            if (Array.isArray(res[key])) {
                                result = res[key];
                            }
                        });
                    }
                    this.processData(result);
                    this.$setAt(item, this.childrenField, result);
                    if (item.checked) {
                        this.check(item, item.checked, true);
                    }
                    // 促使currentData更新
                    const index = this.currentData.findIndex((currentData) => this.$at(currentData, this.valueField) === this.$at(item, this.valueField));
                    const newDataIndex = this.currentData.findIndex((currentData) => this.$at(currentData, this.valueField) === this.$at(result[0], this.valueField));
                    if (index !== -1 && newDataIndex === -1) {
                        const treeData = this.processTreeData(result, item.tableTreeItemLevel + 1, item);
                        this.currentData.splice(index + 1, 0, ...treeData);
                    }
                    this.updateTreeExpanded(item, expanded);
                    this.$set(item, 'loading', false);
                });
            } else {
                this.updateTreeExpanded(item, expanded);
            }
        },
        /**
         * 递归处理children情况
         */
        traverse(node, func) {
            const list = node && this.$at(node, this.childrenField);
            if (!list)
                return;
            for (let index = 0; index < list.length; index++) {
                const child = list[index];
                if (!child)
                    continue;
                func(child, node);
                this.traverse(child, func);
            }
        },
        updateTreeExpanded(expandNode, expanded) {
            this.traverse(expandNode, (node, parent) => {
                this.currentData.forEach((itemData) => {
                    if (itemData.parentPointer !== undefined && itemData.parentPointer === parent) {
                        if (expanded) {
                            if (parent.expanded) {
                                this.$set(itemData, 'display', '');
                            } else {
                                this.$set(itemData, 'display', 'none');
                            }
                        } else {
                            this.$set(itemData, 'display', 'none');
                        }
                    }
                });
            });
            this.$forceUpdate(); // 有loading的情况下，forceUpdate才会更新
        },
        onSetEditing(item, columnVM) {
            const fieldName = columnVM.field;
            item.editing = fieldName;
            if (columnVM.dblclickHandler) {
                columnVM.dblclickHandler({ item, columnVM });
            }
        },
        getStyle(index, columnVM) {
            const style = columnVM.$vnode.data && columnVM.$vnode.data.style || {};
            const staticStyle = columnVM.$vnode.data && columnVM.$vnode.data.staticStyle || {};
            if (this.useStickyFixed) {
                if (this.fixedLeftList && this.fixedLeftList.length) {
                    const left = this.fixedLeftList[index];
                    if (left !== undefined) {
                        return Object.assign(staticStyle, style, {
                            position: 'sticky',
                            left: left + 'px',
                            zIndex: 1,
                        });
                    }
                }
                if (this.fixedRightList && this.fixedRightList.length) {
                    const tempIndex = this.visibleColumnVMs.length - index - 1;
                    const right = this.fixedRightList[tempIndex];
                    if (right !== undefined) {
                        return Object.assign(staticStyle, style, {
                            position: 'sticky',
                            right: right + 'px',
                            zIndex: 1,
                        });
                    }
                }
            }
            return Object.assign(staticStyle, style);
        },
        isLastLeftFixed(columnVM, columnIndex) {
            return columnVM.fixed && columnIndex === this.fixedLeftList.length - 1 ? true : undefined;
        },
        isFirstRightFixed(columnVM, columnIndex) {
            return columnVM.fixed && this.fixedRightList.length && columnIndex === this.visibleColumnVMs.length - this.fixedRightList.length ? true : undefined;
        },
        /**
         * 拖拽开始
         */
        onDragStart(e, item, rowIndex) {
            e.dataTransfer.setDragImage(this.getDragImage(e), 0, 0);
            this.dragState = {
                dragging: true,
                source: item,
                sourcePath: rowIndex, // 这里需要是表格中的具体行值，用于drop的时候判断
                sourceData: {
                    item,
                    parent: item.parentPointer,
                    level: item.tableTreeItemLevel,
                    index: this.findItemIndex(item),
                },
            };
            // 该节点下的所有子节点不要响应dragover
            this.currentData.forEach((citem) => {
                citem.draggoverDisabled = this.isSubNode(citem, item);
                citem.disabledDrop = this.treeDisplay ? citem.disabled || citem.dropDisabled : true;
            });
            // 本身不要线
            item.draggoverDisabled = true;
            this.$emit('dragstart', {
                source: this.dragState.sourceData,
            });
        },
        /**
         * 拖拽经过行
         */
        onDragOver(e, item, rowIndex) {
            e.preventDefault();
            if (!this.dragState.dragging)
                return;
            if (item.draggoverDisabled) {
                return;
            }
            // 查找到tr行
            const target = this.getTrEl(e);
            const trRect = target.getBoundingClientRect();
            // 让展示线缩进
            let left = 0;
            let indentElRect = {};
            let placeholderWith = 0;
            if (this.treeDisplay) {
                const indentEl = target.querySelector('[class^="u-table-view_indent__"]');
                if (indentEl) {
                    indentElRect = indentEl.getBoundingClientRect();
                }
                const treePlaceholderEl = target.querySelector('[class^="u-table-view_tree_placeholder"]');
                const treeExpanderEl = target.querySelector('[class^="u-table-view_tree_expander"]');
                placeholderWith = treePlaceholderEl && treePlaceholderEl.offsetWidth;
                if (treePlaceholderEl) {
                    placeholderWith = treePlaceholderEl.offsetWidth;
                }
                if (treeExpanderEl) {
                    placeholderWith = treeExpanderEl.offsetWidth;
                }
                console.log('placeholderWith', placeholderWith, treePlaceholderEl, treeExpanderEl);
            }

            const disabledDrop = item.disabledDrop || item.draggoverDisabled;
            const splitValue = disabledDrop ? 2 : 4;
            const upArea = trRect.top + trRect.height / splitValue;
            const downArea = trRect.top + trRect.height / splitValue * (splitValue - 1);
            let position = '';
            if (e.y <= upArea && !item.draggoverDisabled) {
                // 在上部
                position = 'insertBefore';
                left = item.tableTreeItemLevel ? indentElRect.left - trRect.left : 0;
                placeholderWith = item.tableTreeItemLevel ? placeholderWith : 0;
                left = left + (item.tableTreeItemLevel || 0) * 20 + placeholderWith;
            } else if (e.y >= downArea) {
                // 在下部
                position = 'insertAfter';
                let level = (item.tableTreeItemLevel || 0);
                if (item.expanded && item.children.length) {
                    level = level + 1;
                }
                left = level ? indentElRect.left - trRect.left : 0;
                placeholderWith = level ? placeholderWith : 0;
                left = left + level * 20 + placeholderWith;
            } else {
                // 在中间
                if (!disabledDrop) {
                    position = 'append';
                }
            }

            // 如果一直更新会卡顿，这里设置有不一样的时候才更新
            if (!this.dropData
                || JSON.stringify(this.dropData.dragoverElRect) !== JSON.stringify(trRect)
                || this.dropData.position !== position) {
                this.dropData = {
                    dragoverElRect: trRect,
                    parentElRect: this.$refs.root.getBoundingClientRect(),
                    position,
                    left,
                };
                this.dragState.target = item;
                this.dragState.targetPath = rowIndex; // 这里需要是表格中的具体行值，用于drop的时候判断
                this.dragState.targetData = {
                    item,
                    parent: item.parentPointer,
                    level: item.tableTreeItemLevel,
                    index: this.findItemIndex(item),
                };
                this.$emit('dragover', {
                    target: this.dragState.targetData,
                });
            }
        },
        /**
         * 拖拽结束状态处理
         */
        onDragEnd(e) {
            if (!this.subTreeLoading)
                this.clearDragState();
            this.$emit('dragend');
        },
        /**
         * 拖拽放置
         */
        onDrop(e) {
            if (this.dragState
                && this.dragState.dragging
                && this.dragState.sourcePath !== this.dragState.targetPath
                && this.dropData) {
                this.preventDatasourceWatch = true;
                const originalList = this.currentDataSource ? this.currentDataSource.arrangedData.filter((item) => !!item) : this.currentDataSource;
                let targetPath = this.dragState.targetPath;
                let targetParentItem;
                let dropList = originalList;
                // 树型展示的处理
                if (this.treeDisplay) {
                    this.findItem(originalList, this.dragState.source.parentPointer, (node, index, list, parentNode) => {
                        if (this.dragState.source === node) {
                            this.removeData = {
                                parentList: list,
                                index,
                                parentNode,
                            };
                        }
                    });
                    if (this.removeData) {
                        this.removeData.parentList.splice(this.removeData.index, 1);
                        if (!this.removeData.parentList.length) {
                            this.$set(this.removeData.parentNode, this.hasChildrenField, false);
                        }
                    }
                    this.findItem(originalList, this.dragState.target.parentPointer, (node, index, list, parentNode) => {
                        if (this.dragState.target === node) {
                            this.insetData = {
                                parentList: list,
                                index,
                                parentNode,
                            };
                        }
                    });
                    if (this.dropData.position === 'append') {
                        const parentNode = this.insetData.parentList[this.insetData.index];
                        // 异步加载子树的情况
                        if (!this.$at(parentNode, this.childrenField)
                            && this.$at(parentNode, this.hasChildrenField)
                            && (typeof this.dataSource === 'function')) {
                            this.subTreeLoading = true; // 阻止dragEnd清除数据
                            this.$set(parentNode, 'loading', true);
                            return this.dataSource({ page: this.page, size: this.size }, { item: parentNode }).then((res) => {
                                let result = [];
                                if (Array.isArray(res)) {
                                    result = res;
                                } else if (typeof res === 'object') { // 特殊处理
                                    Object.keys(res).forEach((key) => {
                                        if (Array.isArray(res[key])) {
                                            result = res[key];
                                        }
                                    });
                                }
                                // 加在数据的最后一个
                                result.push(this.dragState.source);
                                targetPath = result.length - 1;
                                this.processData(result);
                                this.$setAt(parentNode, this.childrenField, result);
                                if (parentNode.checked) {
                                    this.check(parentNode, parentNode.checked, true);
                                }
                                this.$set(parentNode, 'loading', false);
                                this.$set(parentNode, 'expanded', true);
                                this.subTreeLoading = false;
                                this.currentDataSource.arrangedData = originalList;
                                const level = (parentNode.tableTreeItemLevel || 0) + 1;
                                const finalSource = {
                                    item: this.dragState.source,
                                    parent: parentNode,
                                    index: targetPath,
                                    level,
                                };
                                this.$emit('drop', {
                                    source: this.dragState.sourceData,
                                    target: this.dragState.targetData,
                                    position: this.dropData.position,
                                    finalSource,
                                    updateData: {
                                        sourceList: this.removeData.parentList,
                                        targetList: result,
                                    },
                                });
                                this.clearDragState();
                            }).catch((err) => {
                                this.subTreeLoading = false;
                                this.clearDragState();
                            });
                        } else {
                            // 子树数据是同步的情况
                            if (!this.$at(parentNode, this.hasChildrenField) && !this.$at(parentNode, this.childrenField)) {
                                this.setAtWithoutSync(parentNode, this.childrenField, []);
                            }
                            parentNode.expanded = true;
                            const children = this.$at(parentNode, this.childrenField) || [];
                            children.push(this.dragState.source);
                            targetPath = children.length - 1;
                            targetParentItem = parentNode;
                            dropList = children;
                        }
                    } else {
                        const insertIndex = this.dropData.position === 'insertBefore' ? this.insetData.index : this.insetData.index + 1;
                        this.insetData && this.insetData.parentList.splice(insertIndex, 0, this.dragState.source);
                        targetPath = insertIndex;
                        targetParentItem = this.insetData.parentNode;
                        dropList = this.insetData.parentList;
                    }
                    this.currentDataSource.arrangedData = originalList;
                } else {
                    // 普通表格的处理
                    originalList.splice(this.dragState.sourcePath, 1);
                    originalList.splice(this.dragState.targetPath, 0, this.dragState.source);
                    this.currentDataSource.arrangedData = originalList;
                    targetPath = this.dragState.targetPath;
                    dropList = originalList;
                }
                const level = targetParentItem ? (targetParentItem.tableTreeItemLevel || 0) + 1 : 0;
                const finalSource = {
                    item: this.dragState.source,
                    parent: targetParentItem,
                    index: targetPath,
                    level,
                };
                this.$emit('drop', {
                    source: this.dragState.sourceData,
                    target: this.dragState.targetData,
                    position: this.dropData.position,
                    finalSource,
                    updateData: {
                        sourceList: this.removeData && this.removeData.parentList || originalList,
                        targetList: dropList,
                    },
                });
                this.clearDragState();
            }
        },
        onRootDragover(e) {
            e.preventDefault();
        },
        /**
         * 查找数据在数组的哪个位置
         */
        // findItem(list, parentNode, func) {
        //     list.forEach((item, index) => {
        //         func(item, index, list, parentNode);
        //         const childList = item && this.$at(item, this.childrenField);
        //         if (!childList)
        //             return;
        //         this.findItem(childList, item, func);
        //     });
        // },
        findItem(list, parentNode, func) {
            let tempList = list;
            if (parentNode) {
                tempList = this.$at(parentNode, this.childrenField);
            }
            tempList.forEach((item, index) => {
                func(item, index, tempList, parentNode);
            });
        },
        findItemIndex(item) {
            let list = this.currentDataSource ? this.currentDataSource.arrangedData.filter((item) => !!item) : this.currentDataSource;
            if (item.parentPointer) {
                list = this.$at(item.parentPointer, this.childrenField);
            }
            return list.findIndex((litem) => litem === item);
        },
        /**
         * 清除拖拽数据
         */
        clearDragState() {
            this.dropData = undefined;
            this.dragState = {
                dragging: false,
                source: {},
            };
            this.$nextTick(() => {
                this.preventDatasourceWatch = false;
            });
        },
        isSubNode(item, sourceNode) {
            if (item.parentPointer !== undefined) {
                if (item.parentPointer === sourceNode) {
                    return true;
                }
                const parentNode = this.currentData.find((citem) => citem === item.parentPointer);
                if (parentNode) {
                    return this.isSubNode(parentNode, sourceNode);
                }
                return false;
            }
            return false;
        },
        /**
         * 判断节点拖拽状态
         */
        isDragging(item) {
            if (this.dragState && this.dragState.dragging) {
                const sourceNode = this.dragState.source;
                if (!sourceNode)
                    return false;
                if (item === sourceNode)
                    return true;
                else if (item.parentPointer !== undefined) {
                    return this.isSubNode(item, sourceNode);
                } else {
                    return false;
                }
            }
        },
        setAtWithoutSync(obj, propertyPath, value) {
            const lastIndex = propertyPath.lastIndexOf('.');
            if (lastIndex === -1)
                obj[propertyPath] = value;
            else {
                const prepath = propertyPath.slice(0, lastIndex);
                const subpath = propertyPath.slice(lastIndex + 1);
                const item = this.$at(obj, prepath);
                item[subpath] = value;
            }
        },
        /**
         * 获取拖拽image ghost
         */
        getDragImage(e) {
            const dragGhostEl = this.$refs.dragGhost;
            if (dragGhostEl.children.length) {
                return dragGhostEl;
            } else {
                // 表格有滚动条、固定列的情况下，拖拽出来的image会有滚动条或断层，需要处理
                const trEl = this.getTrEl(e);
                const crt = trEl.cloneNode(true);
                Array.from(crt.children).forEach((td) => {
                    td.style.position = 'static'; // 去除sticky的情况
                });
                const tableEl = this.$refs.bodyTable[0].$el;
                const tableElCrt = tableEl.cloneNode(true);
                const tbody = tableElCrt.getElementsByTagName('tbody')[0];
                tbody.innerHTML = '';
                tbody.appendChild(crt);
                this.$refs.trDragGhost.innerHTML = '';
                this.$refs.trDragGhost.appendChild(tableElCrt);
                this.$refs.trDragGhost.style.width = this.$refs.root.clientWidth + 'px';
                return this.$refs.trDragGhost;
            }
        },
        /**
         * 获取行节点
         */
        getTrEl(e) {
            // 查找到tr行
            let target = e.target;
            while (target) {
                if (target.tagName !== 'TR') {
                    target = target.parentElement;
                } else {
                    break;
                }
            }
            return target;
        },
        getEditablewrapWidth(item, columnIndex, treeColumnIndex) {
            if (this.treeDisplay && item.tableTreeItemLevel !== undefined && columnIndex === treeColumnIndex) {
                let width = 20 * item.tableTreeItemLevel + 10;
                if (this.$at(item, this.hasChildrenField)) {
                    width = width + 20;
                }
                return `calc(100% - ${width}px)`;
            }
            return '100%';
        },
        getPaginationHeight() {
            let paginationHeight = 0;
            if (this.$refs.pagination) {
                paginationHeight = this.$refs.pagination.$el.offsetHeight;
                const paginationStyle = getComputedStyle(this.$refs.pagination.$el);
                const marginTop = +(paginationStyle.marginTop || '').replace(/px/, '') || 0;
                const marginBottom = +(paginationStyle.marginBottom || '').replace(/px/, '') || 0;
                paginationHeight = paginationHeight + marginTop + marginBottom;
            }
            return paginationHeight;
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    /* 不能加这句，会使分页器的 Select 无法显示！ overflow: hidden; */
}

.root[editable] td{
    padding-top: 4px;
    padding-bottom: 4px;
    min-height: var(--table-view-editable-td-min-height);
    height: 1px;
}
.editablewrap{
    display: table;
    width: 100%;
    height: 100%;
    table-layout: fixed;
    min-height: var(--table-view-editable-td-min-height);
}
.editablewrap > div {
    display: table-cell;
    vertical-align: middle;
}
.editablewrap[ellipsis] > div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.editablewrap[ellipsis]:not([editing]) > div div {
    display: inline;
}
.title {
    text-align: center;
    margin-bottom: var(--table-view-title-space);
}

.table {
    overflow-x: var(--table-view-overflow-x);
    overflow-y: hidden;
    max-height: inherit;
    position: relative;
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

.table[position="right"] > *,
.table[position="right"] .head-table {
    float: right;
}

.head {
    width: 100%;
    overflow-x:hidden;
    overflow-y: hidden;
}
.head::-webkit-scrollbar {
    height: 0;
}

.head[stickingHead] {
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 200;
    box-shadow: var(--table-view-table-top-shadow);
}

.headPlaceholder {
    width: 100%;
}

.head-title {
    position: relative;
}

.head-title[sortable]:hover {
    background: var(--table-view-head-title-sortable-hover);
    cursor: pointer;
}
.head-title[sortable]:hover .sort{
    color: var(--table-view-sort-color-hover);
}

.head-title.boldHeader {
    font-weight: bold;
}
.head-title[last-left-fixed]::after,
.head-title[first-right-fixed]::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: -1px;
    width: 6px;
    pointer-events: none;
    transform: translateX(-100%);
    transition: box-shadow .1s linear;
    box-shadow: none;
    display:block;
}
.head-title[last-left-fixed]::after {
    left: unset;
    transform: translateX(100%);
    right: 0;
}
.head-title[shadow][last-left-fixed]::after {
    box-shadow: inset 3px 0 5px -3px rgb(0 0 0 / 15%);
}
.head-title[shadow][first-right-fixed]::after {
    box-shadow: inset -3px 0 5px -3px rgb(0 0 0 / 15%);
}

.extra {
    float: right;
}

.body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.body[sticky-fixed] {
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.center {
    text-align: center;
    color: #999 !important;
}

.sort {
    position: relative;
    display: inline-block;
    width: var(--table-view-sort-size);
    height: var(--table-view-sort-size);
    vertical-align: -1px;
    color: var(--table-view-sort-color);
    cursor: var(--cursor-pointer);
    margin-left: 5px;
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
    cursor: var(--cursor-pointer);
    padding-bottom: 6px;
    margin-bottom: -6px;
    color: var(--table-view-sort-color);
    margin-left: 5px;
}
.filter-wrap:hover{
    color: var(--table-view-filter-color-hover);
}

.filter-wrap::before {
    icon-font: url('../i-icon.vue/assets/filter.svg');
    color: inherit;
    font-size: var(--font-size-small);
}
.filter-wrap[active] {
    color: var(--table-view-filter-color-active);
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
.cell[last-left-fixed]::after,
.cell[first-right-fixed]::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: -1px;
    width: 6px;
    pointer-events: none;
    transform: translateX(-100%);
    transition: box-shadow .1s linear;
    box-shadow: none;
    display:block;
}
.cell[last-left-fixed]::after {
    left: unset;
    transform: translateX(100%);
    right: 0;
}
.cell[shadow][last-left-fixed]::after {
    box-shadow: inset 3px 0 5px -3px rgb(0 0 0 / 15%);
}
.cell[shadow][first-right-fixed]::after {
    box-shadow: inset -3px 0 5px -3px rgb(0 0 0 / 15%);
}

.pagination {
    text-align: right;
    margin-top: var(--table-view-pagination-space);
}

.row[selected],
.row[selected] td {
    background: var(--table-view-row-selected-background) !important;
}
.row[selected] td{
    box-shadow: inset 0px 1px 0px 0px var(--table-view-row-selected-border-color),
        inset 0px -1px 0px 0px var(--table-view-row-selected-border-color);
}
.row[selected] td:first-child{
    box-shadow: inset 0px 1px 0px 0px var(--table-view-row-selected-border-color),
        inset 0px -1px 0px 0px var(--table-view-row-selected-border-color),
        inset 1px 0px 0px 0px var(--table-view-row-selected-border-color);
}
.row[selected] td:last-child{
    box-shadow: inset 0px 1px 0px 0px var(--table-view-row-selected-border-color),
        inset 0px -1px 0px 0px var(--table-view-row-selected-border-color),
        inset -1px 0px 0px 0px var(--table-view-row-selected-border-color);
}
.row[draggable] {
    cursor: var(--table-view-drag-cursor);
}
.row[dragging] td {
    background: var(--table-view-row-background-dragging);
}
.row[dragging][subrow] td {
    background: var(--table-view-subrow-background-dragging);
}
.dragHandler {
    cursor: var(--table-view-drag-cursor);
}

.expander {
    user-select: none;
    display: inline-block;
    width: var(--table-view-expander-size);
    height: var(--table-view-expander-size);
    line-height: var(--table-view-expander-size);
    vertical-align: -2px;
    /* text-align: center;
    transform: rotate(-180deg); */
    position: relative;
    background-color: var(--table-view-expander-background);
    cursor: pointer;
    border: 1px solid var(--table-view-expander-border-color);
    border-radius: var(--table-view-expander-border-radius);
}
.expander:hover{
    background-color: var(--table-view-expander-background-hover);
    border-color: var(--table-view-expander-border-color-hover);
}
.expander::before,
.expander::after {
    position: absolute;
    background: currentcolor;
    content: "";
    background: var(--table-view-expander-color);
    transition: transform .2s ease-out;
}
.expander:hover::before,
.expander:hover::after{
    background: var(--table-view-expander-color-hover);
}

.expander::before {
    top: 6px;
    right: 3px;
    left: 3px;
    height: 2px;
    transform: rotate(-180deg);
}
.expander::after {
    top: 3px;
    bottom: 3px;
    left: 6px;
    width: 2px;
    transform: rotate(0deg);
}

.expander[expanded]::after {
   transform: rotate(90deg);
}
.expander[disabled] {
    border: 1px solid var(--table-view-expander-border-color-disabled);
    background: var(--table-view-expander-background-disabled);
    cursor: not-allowed;
}
.expander[disabled]::before,
.expander[disabled]::after{
    background: var(--table-view-expander-color-disabled);
}

.expand-td {
    /* transition: $transition-duration height ease-in-out, $transition-duration padding-top ease-in-out, $transition-duration padding-bottom ease-in-out; */
    background-color: var(--table-view-expand-td-background);
}

.column-title {
    font-size: var(--table-view-head-item-size);
    color: var(--table-view-head-item-color);
}

.column-field {}

.tree_expander {
    display: inline-block;
    width: var(--table-view-tree-expander-size);
    height: var(--table-view-tree-expander-size);
    line-height: var(--table-view-tree-expander-size);
    transition: transform var(--transition-duration-base);
    margin-right: var(--table-view-tree-expander-margin);
    text-align: center;
    vertical-align: middle;
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
    margin-right: var(--table-view-tree-expander-margin);
}
.tree_expander[loading]{
    margin-right: calc(4px + var(--table-view-tree-expander-margin));
}
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

.tree_expander + div,
.tree_placeholder + div
{
    display: inline-flex;
    align-items: center;
    width: auto;
}

.indent {}

.tdmask {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
}
.spinner {
    margin-right: 4px;
}

.scrollcview {
    width: 100%;
    height: 100%;
}
.scrollcview[native="true"][hide-scroll] [class^="f-scroll-view_wrap__"]{
    overflow-x: hidden;
}
.scrollcview[native="true"][hide-scroll] [class^="f-scroll-view_wrap__"]::-webkit-scrollbar {
    width: 0;
}

.dropghost {
    position: absolute;
}
.dropghost .line {
    position: absolute;
    border: 1px solid red;
    width: 100%;
}
.dragGhost {
    position: absolute;
    z-index: -999;
    left: -9999px;
    top: -9999px;
}
.trdragGhost{
    overflow: clip;
}
.dragGhost[designer] {
    position: static;
    padding: 5px;
    background: rgb(250, 250, 250);
    border: 1px dashed rgb(195, 195, 195);
}
.dragGhost[designer] .text {
    display: block;
    margin-bottom: 5px;
}

@keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}
</style>
