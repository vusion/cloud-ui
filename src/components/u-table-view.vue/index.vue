<template>
<div :class="$style.root" ref="root" :border="border"
    @dragend="onDragEnd($event)"
    @drop="onDrop($event)"
    @dragover="onRootDragover($event)"
    @dragleave="onRootDragleave($event)"
    @dragenter="onRootDragenter($event)">
    <div v-if="title" :class="$style.title" ref="title" :style="{ textAlign: titleAlignment }" vusion-slot-name="title" vusion-slot-name-edit="title">
        <slot name="title">{{ title }}</slot>
    </div>
    <slot name="config-columns"></slot>
    <div :class="$style.table" v-for="(tableMeta, tableMetaIndex) in tableMetaList" :key="tableMeta.position" :position="tableMeta.position"
        :style="{ width: tableMeta.position !== 'static' && number2Pixel(tableMeta.width), height: number2Pixel(tableHeight)}"
        @scroll="onTableScroll" :shadow="(tableMeta.position === 'left' && !scrollXStart) || (tableMeta.position === 'right' && !scrollXEnd)">
        <div v-if="showHead" :class="$style.head" ref="head" :stickingHead="stickingHead" :style="{ width: stickingHead ? number2Pixel(tableMeta.width) : '', top: number2Pixel(stickingHeadTop) }">
            <u-table :class="$style['head-table']" :color="color" :line="line" :striped="striped" :sticky-fixed="useStickyFixed" :style="{ width: number2Pixel(tableWidth)}">
                <colgroup>
                    <col v-for="(columnVM, columnIndex) in visibleColumnVMs" :key="columnIndex" :width="columnVM.computedWidth">
                </colgroup>
                <thead :grouped="hasGroupedColumn">
                    <tr v-for="(headTr, trIndex) in visibleTableHeadTrArr">
                        <template v-for="(columnVM, columnIndex) in headTr">
                        <th
                            v-if="columnVM&&columnVM.colSpan !== 0"
                            ref="th"
                            :class="[$style['head-title'], boldHeader ? $style.boldHeader : null]"
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
                            :style="getStyle('th', columnVM)"
                            :last-left-fixed="isLastLeftFixed(columnVM, columnIndex, headTr)"
                            :first-right-fixed="isFirstRightFixed(columnVM, columnIndex, headTr)"
                            :shadow="(isLastLeftFixed(columnVM, columnIndex, headTr) && (!scrollXStart || $env.VUE_APP_DESIGNER)) || (isFirstRightFixed(columnVM, columnIndex, headTr) && (!scrollXEnd || $env.VUE_APP_DESIGNER))"
                            :disabled="$env.VUE_APP_DESIGNER && columnVM.currentHidden"
                            :colspan="columnVM.colSpan"
                            :rowspan="columnVM.rowSpan">
                            <!-- type === 'checkbox' -->
                            <span v-if="columnVM.type === 'checkbox'">
                                <u-checkbox :value="allChecked" @check="checkAll($event.value)" :disabled="disabled" :readonly="readonly"></u-checkbox>
                            </span>
                            <!-- Normal title -->
                            <template>
                                <span vusion-slot-name="title" vusion-slot-name-edit="title" :class="$style['column-title']">
                                    <f-slot name="title" :vm="columnVM" :props="{ columnVM, columnIndex, columnItem: columnVM.columnItem }">
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
                            <f-dragger v-if="resizable && columnIndex !== headTr.length - 1" axis="horizontal"
                                @dragstart="onResizerDragStart($event, columnVM)"
                                @drag="onResizerDrag($event, columnVM, columnIndex)"
                                @dragend="onResizerDragEnd($event, columnVM, columnIndex)">
                                <div :class="$style.resizer" @click.stop></div>
                            </f-dragger>
                        </th>
                        </template>
                    </tr>
                </thead>
            </u-table>
        </div>
        <div v-if="stickingHead" :class="$style.headPlaceholder" ref="headPlaceholder" :style="{ height: number2Pixel(stickingHeadHeight) }"></div>
        <div :class="$style.body" ref="body" :style="{ height: number2Pixel(bodyHeight) }" @scroll="onBodyScroll"
            :sticky-fixed="useStickyFixed">
            <f-scroll-view :class="$style.scrollcview" @scroll="onScrollView" ref="scrollView" :native="!!tableMetaIndex || $env.VUE_APP_DESIGNER" :hide-scroll="!!tableMetaIndex">
            <u-table ref="bodyTable" :class="$style['body-table']" :line="line" :striped="striped" :sticky-fixed="useStickyFixed" :style="{ width: number2Pixel(tableWidth)}">
                <colgroup>
                    <col v-for="(columnVM, columnIndex) in visibleColumnVMs" :key="columnIndex" :width="columnVM.computedWidth">
                </colgroup>
                <tbody ref="virtual">
                    <template v-if="(!currentLoading && !currentError && !currentEmpty || pageable === 'auto-more' || pageable === 'load-more') && currentData && currentData.length">
                        <template v-for="(item, rowIndex) in virtualList">
                            <tr :key="getKey(item, rowIndex)" :class="[$style.row, ($env.VUE_APP_DESIGNER && rowIndex !== 0) ? $style.trmask : '']" :color="item.rowColor" :selected="selectable && selectedItem === item"
                            v-if="item.display !== 'none'"
                            :draggable="rowDraggable && item.draggable || undefined"
                            :dragging="isDragging(item)"
                            :subrow="!!item.tableTreeItemLevel"
                            @dragstart="onDragStart($event, item, rowIndex + virtualIndex)"
                            @dragover="onDragOver($event, item, rowIndex + virtualIndex)"
                            @click="onClickRow($event, item, rowIndex + virtualIndex)"
                            @dblclick="onDblclickRow($event, item, rowIndex + virtualIndex)">
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
                                        :style="getStyle('td', columnVM)"
                                        :last-left-fixed="isLastLeftFixed(columnVM, columnIndex, visibleColumnVMs)"
                                        :first-right-fixed="isFirstRightFixed(columnVM, columnIndex, visibleColumnVMs)"
                                        :shadow="(isLastLeftFixed(columnVM, columnIndex, visibleColumnVMs)) || (isFirstRightFixed(columnVM, columnIndex, visibleColumnVMs))"
                                        :disabled="columnVM.currentHidden">
                                        <!-- <div :class="$style.tdmask" v-if="rowIndex !== 0"></div> -->
                                        <!--可视化占据的虚拟填充区域-->
                                        <div vusion-slot-name="cell" :plus-empty="typeCheck(columnVM.type) ? false : columnVM.$attrs['plus-empty']">
                                            <!-- type === 'index' -->
                                            <span v-if="columnVM.type === 'index'">{{ (columnVM.startIndex - 0) + rowIndex }}</span>
                                            <!-- type === 'radio' -->
                                            <span v-if="columnVM.type === 'radio'">
                                                <u-radio :value="selectedItem === item" :disabled="item.disabled" @click.native="select(item)" :readonly="readonly"></u-radio>
                                            </span>
                                            <!-- type === 'checkbox' -->
                                            <span v-if="columnVM.type === 'checkbox'">
                                                <u-checkbox :value="item.checked" :label="$at(item, valueField)" :disabled="item.disabled || disabled" @check="check(item, $event.value)" :readonly="readonly"></u-checkbox>
                                            </span>

                                            <!-- type === 'expander' left -->
                                            <f-slot
                                                v-if="columnVM.type === 'expander' && columnVM.expanderPosition === 'left'"
                                                name="expander"
                                                :vm="columnVM"
                                                :props="{
                                                    item: getRealItem(item, rowIndex + virtualIndex),
                                                    value: $at(item, columnVM.field),
                                                    columnVM,
                                                    rowIndex,
                                                    columnIndex,
                                                    index: rowIndex,
                                                    columnItem: columnVM.columnItem,
                                                }">
                                                <u-table-view-expander
                                                    :item="getRealItem(item, rowIndex + virtualIndex)"
                                                    @toggle="() => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))">
                                                </u-table-view-expander>
                                            </f-slot>

                                            <template v-if="treeDisplay && item.tableTreeItemLevel !== undefined && columnIndex === treeColumnIndex">
                                                <span :class="$style.indent" :style="{ paddingLeft: number2Pixel(20 * item.tableTreeItemLevel) }"></span>
                                                <span :class="$style.tree_expander" v-if="$at(item, hasChildrenField)" :expanded="item.treeExpanded" @click.stop="toggleTreeExpanded(item)" :loading="item.loading"></span>
                                                <span :class="$style.tree_placeholder" v-else></span>
                                            </template>
                                            <!-- Normal text -->
                                            <f-slot name="cell" :vm="columnVM" :props="{ item: getRealItem(item, rowIndex + virtualIndex), value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex, columnItem: columnVM.columnItem }">
                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field) || item) }}</span>
                                            </f-slot>
                                            <!-- type === 'dragHandler' -->
                                            <span v-if="columnVM.type === 'dragHandler'">
                                                <i-ico :class="$style.dragHandler" name="dragHandler" :draggable="handlerDraggable && item.draggable || undefined" :disabled="!(handlerDraggable && item.draggable)"></i-ico>
                                            </span>

                                            <!-- type === 'expander' right -->
                                            <f-slot
                                                v-if="columnVM.type === 'expander' && columnVM.expanderPosition === 'right'"
                                                name="expander"
                                                :vm="columnVM"
                                                :props="{
                                                    item: getRealItem(item, rowIndex + virtualIndex),
                                                    value: $at(item, columnVM.field),
                                                    columnVM,
                                                    rowIndex,
                                                    columnIndex,
                                                    index: rowIndex,
                                                    columnItem: columnVM.columnItem,
                                                }">
                                                <u-table-view-expander
                                                    :item="getRealItem(item, rowIndex + virtualIndex)"
                                                    @toggle="() => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))">
                                                </u-table-view-expander>
                                            </f-slot>
                                        </div>
                                        <div v-if="columnVM.type === 'editable'" vusion-slot-name="editcell" :plus-empty="columnVM.$attrs['editcell-plus-empty']" style="margin-top:10px">
                                            <f-slot name="editcell" :vm="columnVM" :props="{ item: getRealItem(item, rowIndex + virtualIndex), value: $at(item, columnVM.field), columnVM, rowIndex, columnIndex, index: rowIndex }">
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
                                        :style="getStyle('td', columnVM)"
                                        :last-left-fixed="isTdLastLeftFixed(columnVM, columnIndex, visibleColumnVMs, item, rowIndex)"
                                        :first-right-fixed="isFirstRightFixed(columnVM, columnIndex, visibleColumnVMs)"
                                        :shadow="(isTdLastLeftFixed(columnVM, columnIndex, visibleColumnVMs, item, rowIndex) && !scrollXStart) || (isFirstRightFixed(columnVM, columnIndex, visibleColumnVMs) && !scrollXEnd)"
                                        v-if="getItemColSpan(item, rowIndex, columnIndex) !== 0 && getItemRowSpan(item, rowIndex, columnIndex) !== 0"
                                        :colspan="getItemColSpan(item, rowIndex, columnIndex)"
                                        :rowspan="getItemRowSpan(item, rowIndex, columnIndex)"
                                        :disabled="item.disabled || disabled"
                                        >
                                            <!-- type === 'index' -->
                                            <span v-if="columnVM.type === 'index'">
                                                <template v-if="columnVM.autoIndex && usePagination && currentDataSource">{{ 1 + ((currentDataSource.paging.number - 1) * currentDataSource.paging.size) + rowIndex + virtualIndex }}</template>
                                                <template v-else>{{ (columnVM.startIndex - 0) + rowIndex + virtualIndex }}</template>
                                            </span>
                                            <!-- type === 'radio' -->
                                            <span v-if="columnVM.type === 'radio'">
                                                <u-radio :value="selectedItem === item" :disabled="item.disabled" @click.native="select(item)" :readonly="readonly"></u-radio>
                                            </span>
                                            <!-- type === 'checkbox' -->
                                            <span v-if="columnVM.type === 'checkbox'">
                                                <u-checkbox :value="item.checked" :label="$at(item, valueField)" :disabled="item.disabled || disabled" @check="check(item, $event.value)" :readonly="readonly"></u-checkbox>
                                            </span>
                                            <!-- type === 'expander' left -->
                                            <f-slot
                                                v-if="columnVM.type === 'expander' && columnVM.expanderPosition === 'left'"
                                                name="expander"
                                                :vm="columnVM"
                                                :props="{
                                                    item: getRealItem(item, rowIndex + virtualIndex),
                                                    value: $at(item, columnVM.field),
                                                    columnVM,
                                                    rowIndex,
                                                    columnIndex,
                                                    index: rowIndex,
                                                    columnItem: columnVM.columnItem,
                                                    toggle: () => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))
                                                }">
                                                <u-table-view-expander
                                                    :item="getRealItem(item, rowIndex + virtualIndex)"
                                                    @toggle="() => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))">
                                                </u-table-view-expander>
                                            </f-slot>
                                            <template v-if="treeDisplay && item.tableTreeItemLevel !== undefined && columnIndex === treeColumnIndex">
                                                <span :class="$style.indent" :style="{ paddingLeft: number2Pixel(20 * item.tableTreeItemLevel) }"></span>
                                                <span :class="$style.tree_expander" v-if="$at(item, hasChildrenField)" :expanded="item.treeExpanded" @click.stop="toggleTreeExpanded(item)" :loading="item.loading"></span>
                                                <span :class="$style.tree_placeholder" v-else></span>
                                            </template>
                                            <!-- type === 'dragHandler' -->
                                            <span v-if="columnVM.type === 'dragHandler'">
                                                <i-ico :class="$style.dragHandler" name="dragHandler" :draggable="handlerDraggable && item.draggable || undefined" :disabled="!(handlerDraggable && item.draggable)"></i-ico>
                                            </span>
                                            <!-- Normal text -->
                                            <template v-if="columnVM.type === 'editable'">
                                                <div @dblclick.stop="onSetEditing(item, columnVM)" :class="$style.editablewrap"
                                                    :ellipsis="columnVM.ellipsis"
                                                    :style="{width:getEditablewrapWidth(item, columnIndex, treeColumnIndex)}"
                                                    :editing="item.editing === columnVM.field">
                                                    <div>
                                                        <template v-if="item.editing === columnVM.field">
                                                            <f-slot name="editcell" :vm="columnVM" :props="{ item: getRealItem(item, rowIndex + virtualIndex), value: $at(item, columnVM.field), columnVM, rowIndex: rowIndex + virtualIndex, columnIndex, index: rowIndex + virtualIndex }">
                                                                <span v-if="columnVM.field" vusion-slot-name="editcell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                            </f-slot>
                                                        </template>
                                                        <template v-else>
                                                            <f-slot name="cell" :vm="columnVM" :props="{ item: getRealItem(item, rowIndex + virtualIndex), value: $at(item, columnVM.field), columnVM, rowIndex: rowIndex + virtualIndex, columnIndex, index: rowIndex + virtualIndex, columnItem: columnVM.columnItem }">
                                                                <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                            </f-slot>
                                                        </template>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <f-slot name="cell" :vm="columnVM" :props="{ item: getRealItem(item, rowIndex + virtualIndex), value: $at(item, columnVM.field), columnVM, rowIndex: rowIndex + virtualIndex, columnIndex, index: rowIndex + virtualIndex, columnItem: columnVM.columnItem }">
                                                    <span v-if="columnVM.field" vusion-slot-name="cell" :class="$style['column-field']">{{ columnVM.currentFormatter.format($at(item, columnVM.field)) }}</span>
                                                </f-slot>
                                            </template>

                                            <!-- type === 'expander' right -->
                                            <f-slot
                                                v-if="columnVM.type === 'expander' && columnVM.expanderPosition === 'right'"
                                                name="expander"
                                                :vm="columnVM"
                                                :props="{
                                                    item: getRealItem(item, rowIndex + virtualIndex),
                                                    value: $at(item, columnVM.field),
                                                    columnVM,
                                                    rowIndex,
                                                    columnIndex,
                                                    index: rowIndex,
                                                    columnItem: columnVM.columnItem,
                                                    toggle: () => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))
                                                }">
                                                <u-table-view-expander
                                                    :item="getRealItem(item, rowIndex + virtualIndex)"
                                                    @toggle="() => toggleExpanded(getRealItem(item, rowIndex + virtualIndex))">
                                                </u-table-view-expander>
                                            </f-slot>
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
                                            <f-slot name="expand-content" :vm="expanderColumnVM" :props="{ item, value: $at(item, expanderColumnVM.field), columnVM: expanderColumnVM, rowIndex: rowIndex + virtualIndex, index: rowIndex + virtualIndex }"></f-slot>
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
                            <s-empty v-if="$env.VUE_APP_DESIGNER
                                && !$slots.loading
                                && $scopedSlots
                                && !($scopedSlots.loading && $scopedSlots.loading())
                                && !!$attrs['vusion-node-path']">
                            </s-empty>
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
                            <s-empty v-if="$env.VUE_APP_DESIGNER
                                && !$slots.error
                                && $scopedSlots
                                && !($scopedSlots.error && $scopedSlots.error())
                                && !!$attrs['vusion-node-path']">
                            </s-empty>
                        </td>
                    </tr>
                    <tr key="loadMore" v-else-if="pageable === 'load-more' && currentDataSource.hasMore()">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            <u-link @click="load(true)">{{ $tt('loadMore') }}</u-link>
                        </td>
                    </tr>
                    <tr key="noMore" v-else-if="((pageable === 'auto-more' && hasScroll) || pageable === 'load-more') && !currentDataSource.hasMore() && (currentData && currentData.length)">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length">
                            {{ $tt('noMore') }}
                        </td>
                    </tr>
                    <tr key="empty" v-else-if="!currentData.length || currentEmpty">
                        <td :class="$style.center" :colspan="visibleColumnVMs.length" vusion-slot-name="empty">
                            <slot name="empty">
                                <u-image v-if="errorImage" :src="errorImage" fit="contain"></u-image>
                                <u-linear-layout layout="block" justify="center">
                                    {{ emptyText }}
                                </u-linear-layout>
                            </slot>
                            <s-empty v-if="$env.VUE_APP_DESIGNER
                                && !$slots.empty
                                && $scopedSlots
                                && !($scopedSlots.empty && $scopedSlots.empty())
                                && !!$attrs['vusion-node-path']">
                            </s-empty>
                        </td>
                    </tr>
                </tbody>
            </u-table>
            <div ref="virtualPlaceholder" v-if="virtual"></div>
            </f-scroll-view>
        </div>
    </div>
    <u-table-view-drop-ghost :data="dropData"></u-table-view-drop-ghost>
    <u-pagination :class="$style.pagination" ref="pagination" v-if="usePagination && currentDataSource"
        :total-items="currentDataSource.total" :page="currentDataSource.paging.number"
        :page-size="currentDataSource.paging.size" :page-size-options="pageSizeOptions" :show-total="showTotal" :show-sizer="showSizer" :show-jumper="showJumper"
        :size="paginationSize"
        @change="page($event.page)" @change-page-size="page(1, $event.pageSize)">
    </u-pagination>
    <div><slot></slot></div>
    <div v-if="draggable || acrossTableDrag" ref="dragGhost" :class="$style.dragGhost" :designer="$env.VUE_APP_DESIGNER">
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
    <div v-if="draggable || acrossTableDrag" :class="$style.dragGhost">
        <div :class="$style.trdragGhost" ref="trDragGhost"></div>
    </div>
</div>
</template>

<script>
import DataSource from '../../utils/DataSource';
import DataSourceNew from '../../utils/DataSource/new';
import { addResizeListener, removeResizeListener, findScrollParent, getRect } from '../../utils/dom';
import { format } from '../../utils/date';
import KeyMap from '../../utils/keyMap';
import MEmitter from '../m-emitter.vue';
import debounce from 'lodash/debounce';
import isNumber from 'lodash/isNumber';
import i18n from './i18n';
import UTableViewDropGhost from './drop-ghost.vue';
import SEmpty from '../../components/s-empty.vue';
import throttle from 'lodash/throttle';
import FVirtualTable from './f-virtual-table.vue';
import i18nMixin from '../../mixins/i18n';
import flatMap from 'lodash/flatMap';
import { createTableHeaderExportHelper } from './createTableHeadExporter';

export default {
    name: 'u-table-view',
    components: {
        UTableViewDropGhost,
        SEmpty,
    },
    mixins: [MEmitter, i18nMixin('u-table-view'), FVirtualTable],
    // i18n,
    props: {
        boldHeader: {
            type: Boolean,
            default: true,
        },
        data: Array,
        dataSource: [DataSource, DataSourceNew, Function, Object, Array],
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
                return this.$tt('loading');
            },
        },
        error: Boolean,
        errorText: {
            type: String,
            default() {
                return this.$tt('error');
            },
        },
        emptyText: {
            type: String,
            default() {
                return this.$tt('empty');
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
        designerMode: { type: String, default: 'success' }, // 编辑器展示不同表单状态

        // 新增用来分页
        pagination: { type: Boolean, default: undefined },
        parentField: { type: String },
        configurable: { type: Boolean, default: false }, // 是否配置显隐列
        canDragableHandler: Function,
        canDropinHandler: Function,
        acrossTableDrag: { type: Boolean, default: false }, // 是否跨表格拖拽
        virtual: { type: Boolean, default: false },
        // @inherit: virtualCount: { type: Number, default: 60 },
        // @inherit: throttle: { type: Number, default: 60 },
        listKey: { type: String, default: 'currentData' },
    },
    data() {
        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined, // currentData: this.data && Array.from(this.data),
            currentDataSource: undefined,
            currentLoading: this.loading || false,
            currentError: this.error,
            currentEmpty: false,
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
            configColumnVM: undefined,
            dynamicColumnVMs: [], // 用于记录动态列
            dynamicColumnVMsMap: {}, // 用于记录动态列
            columnGroupVMs: {}, // 用于记录分组列
            slots: this.$slots,
            keyMap: new KeyMap(),
            autoColSpan: [], // 用于记录自动的的列合并
            autoRowSpan: [], // 用于记录自动的的行合并
            columnVMsMap: {},
            tableHeadTrArr: [],
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
                this.currentDataSource.rawTreeDisplayOnlyForNotice = true;
                data = this.processTreeData(data);
            }
            return data;
        },
        visibleColumnVMs() {
            if (this.$env.VUE_APP_DESIGNER) {
                return this.columnVMs;
            }
            return this.columnVMs.filter((columnVM) => columnVM && !columnVM.currentHidden);
        },
        visibleTableHeadTrArr() {
            if (this.$env.VUE_APP_DESIGNER) {
                return this.tableHeadTrArr;
            }
            const result = [];
            this.tableHeadTrArr.forEach((headTr, index) => {
                result[index] = headTr.filter((columnVM) => columnVM && !columnVM.currentHidden);
            });
            return result;
        },
        expanderColumnVM() {
            return this.columnVMs.find((columnVM) => columnVM.type === 'expander');
        },
        paging() {
            if (this.usePagination) {
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

            if (this.values === undefined) {
                this.currentData.forEach((item) => {
                    if (item.checked)
                        checkedLength++;
                });
            } else {
                if (this.valueField) {
                    const hashSet = new Set();
                    this.currentData.forEach((item) => {
                        const id = this.$at(item, this.valueField);
                        hashSet.add(id);
                    });

                    checkedLength = this.currentValues.filter((v) => hashSet.has(v)).length;
                } else {
                    checkedLength = this.currentValues.length;
                }
            }

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
        usePagination() {
            if (typeof this.pagination === 'undefined') {
                return this.pageable === true || this.pageable === 'pagination';
            }

            return !!this.pagination;
        },
        hasGroupedColumn() {
            return !!Object.keys(this.columnGroupVMs).length;
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
        currentData(currentData, oldCurrentData) {
            if (currentData !== oldCurrentData) {
                this.selectedItem = undefined;
            }
            this.watchValue(this.value);
            this.watchValues(this.values);
        },
        loading(loading) {
            if (this.$env.VUE_APP_DESIGNER && this.designerMode !== 'success')
                return;
            this.currentLoading = loading;
            this.reHandleResize();
        },
        error(error) {
            if (this.$env.VUE_APP_DESIGNER && this.designerMode !== 'success')
                return;
            this.currentError = error;
            this.reHandleResize();
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
                this.$forceUpdate();
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
            if (this.configColumnVM) {
                this.configColumnVM.handleColumnsData();
            }
        },
        visibleColumnVMs() {
            this.reHandleResize();
        },
        stickFixed(value) {
            this.useStickyFixed = value;
        },
        designerMode: {
            handler(designerMode) {
                if (!this.$env.VUE_APP_DESIGNER)
                    return;
                switch (designerMode) {
                    case 'loading':
                        this.currentLoading = true;
                        this.currentError = false;
                        this.currentEmpty = false;
                        break;
                    case 'error':
                        this.currentLoading = false;
                        this.currentError = true;
                        this.currentEmpty = false;
                        break;
                    case 'empty':
                        this.currentLoading = false;
                        this.currentError = false;
                        this.currentEmpty = true;
                        break;
                    default:
                        this.currentLoading = this.loading;
                        this.currentError = this.error;
                        this.currentEmpty = false;
                }
                this.reHandleResize();
            },
            immediate: true,
        },
        configurable() {
            if (this.configColumnVM) {
                this.configColumnVM.handleColumnsData();
            }
        },
        draggable() {
            this.processTableDraggable(true);
        },
        acrossTableDrag() {
            this.processTableDraggable(true);
        },
        virtualTop() {
            this.$refs.virtualPlaceholder[0].style.height = this.virtualTop + this.virtualBottom + 'px';
            this.$refs.bodyTable[0].$el.style.transform = `translateY(${this.virtualTop}px)`;
        },
        virtualBottom() {
            this.$refs.virtualPlaceholder[0].style.height = this.virtualTop + this.virtualBottom + 'px';
        },
    },
    created() {
        this.$on('handle-columns', this.handleColumns);
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
        if (this.pageNumber && this.usePagination) {
            this.initialLoad && this.page(this.pageNumber);
        } else {
            this.initialLoad && this.load();
        }
        this.throttledDragover = throttle(this.handleDragOver, 50, {
            leading: false,
            trailing: true,
        });
    },
    updated() {
        if (this.$env.VUE_APP_DESIGNER && this.slots !== this.$slots && !this.data && !this.dataSource) {
            this.slots = this.$slots;
            this.$forceUpdate();
        }
    },
    mounted() {
        if (this.data)
            this.processData(this.data);

        this.watchCurrentData();
        this.watchValue(this.value);
        this.watchValues(this.values);
        this.reHandleResize();
        addResizeListener(this.$el, this.handleResizeListener);

        if (this.stickHead) {
            this.scrollParentEl = findScrollParent(this.$el);
            this.scrollParentEl && this.scrollParentEl.addEventListener('scroll', this.onScrollParentScroll);
        }
    },
    destroyed() {
        removeResizeListener(this.$el, this.handleResizeListener);
        if (this.stickHead) {
            this.scrollParentEl && this.scrollParentEl.removeEventListener('scroll', this.onScrollParentScroll);
        }
        this.clearTimeout();
        this.enterTarget = null;
    },
    methods: {
        getKey(item, index) {
            typeof item === 'object' ? this.keyMap.getKey(item) : index;
        },
        isSimpleArray(arr) {
            if (!Array.isArray(arr)) {
                return false; // 如果不是数组类型，则不满足条件，直接返回 false
            }
            return arr.every((item) =>
                typeof item !== 'object', // 使用 typeof 判断是否为简单数据类型
            );
        },
        getRealItem(item, rowIndex) {
            const data = (this.isSimpleArray(this.currentDataSource.data) && this.currentDataSource.data.length > 0) ? (this.currentDataSource.arrangedData[rowIndex] && this.currentDataSource.arrangedData[rowIndex].simple) : item;
            // 给u-table-view-expander用
            try {
                data.toggle = () => this.toggleExpanded(data);
            } catch (error) {
                console.warn('当前data不是一个对象');
            }
            return data;
        },
        typeCheck(type) {
            return [
                'index',
                'radio',
                'checkbox',
                'expander',
            ].includes(type);
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
            this.processTableDraggable();
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
            if (this.draggable || this.acrossTableDrag) {
                data.forEach((item) => {
                    this.canDraggable(item);
                });
            }
            return data;
        },
        handleData() {
            if (typeof this.data === 'function' || (this.data instanceof Object && !Array.isArray(this.data)))
                throw new Error(`[cloud-ui] Don't assign a function or object to 'data' prop. Try to use 'data-source' prop.`);
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            // fix 2637418667735552 添加编辑行时已经添加的下拉框还是会重新load数据
            // 原因：list添加了一项，进入了dataSource的watch，该函数会进来，调用了load方法，会设置loading状态，导致表格重新渲染
            this.initialLoad && (typeof this.dataSource === 'function') && this.load();
            this.reHandleResize();
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        },
        getExtraParams() {
            return this.extraParams;
        },
        getDataSourceOptions() {
            const options = {
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

            if (this.treeDisplay && this.valueField && this.parentField && this.childrenField) {
                options.treeDisplay = {
                    valueField: this.valueField,
                    parentField: this.parentField,
                    childrenField: this.childrenField,
                };
            }

            return options;
        },
        normalizeDataSource(dataSource) {
            const options = this.getDataSourceOptions();
            const isNew = typeof this.pagination !== 'undefined';
            const Constructor = isNew ? DataSourceNew : DataSource;

            if (dataSource instanceof DataSource || dataSource instanceof DataSourceNew)
                return dataSource;
            else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                // 使用了新的分页, 数组肯定不是后端数据
                if (isNew) {
                    options.remotePaging = false;
                    options.remoteSorting = options.remotePaging;
                }
                return new Constructor({ ...options, tag: 'u-table-view' });
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
                // 使用了新的分页, 函数类型先当做后端数据
                if (isNew) {
                    // 树形展示且配置了父节点时只能前端分页
                    options.remotePaging = (this.treeDisplay && this.parentField) ? false : !!this.pagination;
                    options.remoteSorting = !!options.remotePaging;
                }
                return new Constructor({ ...options, tag: 'u-table-view' });
            } else if (dataSource instanceof Object) {
                if (dataSource.hasOwnProperty('list') && Array.isArray(dataSource.list))
                    return new DataSource(Object.assign(options, dataSource, {
                        data: dataSource.list,
                    }));
                return new DataSource(Object.assign(options, dataSource));
            } else
                return dataSource;
        },
        number2Pixel(value) {
            return isNumber(value) ? value + 'px' : '';
        },
        handleResize(reComputedWidth = true) {
            if (this.resizeBodyHeight) {
                this.bodyHeight = undefined;
            }
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

                // 重新计算列宽等，会导致表格重新渲染，如果组件因为重新渲染而加载，会导致宽高变化，导致handleResize再次触发
                // 如果是监听Resize事件进来的，如果reComputedWidth是false，就不要重复计算
                if (reComputedWidth) {
                    this.preRootWidth = rootWidth;
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
                        // 当右侧有fixed，到当前列的时候却是非fixed，fixedRightCount置为0
                        if (fixedRightCount && !columnVM.fixed) {
                            fixedRightCount = 0;
                        }
                        if (columnVM.fixed) {
                            if (index === 0)
                                fixedLeftCount = 1;
                            else if (fixedLeftCount === index && lastIsFixed)
                                fixedLeftCount++;
                            else if (!lastIsFixed) {
                                fixedRightCount = 1;
                            } else
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
                                    this.fixedLeftList.push({
                                        columnVM,
                                        left: prev,
                                    });
                                    this.setColumnVMsMap(columnVM._uid, { left: prev });
                                    return prev + columnVM.computedWidth;
                                }, 0);
                        }
                        if (fixedRightCount && tableWidth > rootWidth) {
                            // 表格太短时，不固定右侧列
                            const visibleColumnVMs = this.visibleColumnVMs.slice(-fixedRightCount);
                            visibleColumnVMs.reverse()
                                .reduce((prev, columnVM) => {
                                    this.fixedRightList.push({
                                        columnVM,
                                        right: prev,
                                    });
                                    this.setColumnVMsMap(columnVM._uid, { right: prev });
                                    return prev + columnVM.computedWidth;
                                }, 0);
                        }
                    }
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
                        const headHeight = (this.$refs.head && this.$refs.head[0]) ? this.$refs.head[0].offsetHeight : 0;
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
            const rootWidth = this.$refs.head[0].children[0].offsetWidth;
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
            this.reHandleResize();
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
            if (this.virtual)
                this.throttledVirtualScroll(data);
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

            const autoStatus = this.loading === undefined && !(this.$env.VUE_APP_DESIGNER && this.designerMode !== 'success');
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

                    if (this.usePagination) {
                        if (this.currentDataSource.paging && this.currentDataSource.paging.number > this.currentDataSource.totalPage)
                            this.page(1); // 数据发生变更时，回归到第 1 页
                    } // auto-more 状态的 resize 会频闪。
                    this.pageable !== 'auto-more' && this.reHandleResize();
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
            this.clearDragState();
            this.load();
            console.log('table reload');
            if (this.dynamicColumnVMs.length) {
                this.dynamicColumnVMs.forEach((vm) => vm.reload());
            }
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
                let mergesMap = [];
                if (!this.currentDataSource._load) {
                    const result = await this.getRenderResult(this.currentDataSource.data, excludeColumns, hasHeader);
                    content = result[0];
                    mergesMap = result[1];
                } else {
                    // console.time('加载数据');
                    let res = await this.currentDataSource._load({ page, size, filename, sort, order });
                    // console.timeEnd('加载数据');
                    if (res instanceof Object) {
                        if (res.hasOwnProperty('list'))
                            res = res.list;
                        else if (res.hasOwnProperty('content'))
                            res = res.content;
                        else if (res.hasOwnProperty('data'))
                            res = res.data;
                    }

                    if (!(res instanceof Array)) {
                        this.$toast.show('数据格式不是数组');
                        return;
                    }

                    const result = await this.getRenderResult(res, excludeColumns, hasHeader);
                    content = result[0];
                    mergesMap = result[1];
                }

                // console.time('生成文件');
                const sheetTitle = this.title || undefined;
                const { exportExcel } = require('../../utils/xlsx');
                exportExcel(content, 'Sheet1', filename, sheetTitle, (content[0] || []).length, hasHeader, mergesMap);
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
            let mergesMap = [];
            if (arr.length === 0) {
                if (!hasHeader)
                    return [];
            }

            const titleColIndexRelations = [];
            const headRows = Array.from(this.$el.querySelectorAll('[position=static] thead tr'));
            const helper = createTableHeaderExportHelper(headRows.length);
            headRows.map((tr, rowIndex) => Array.from(tr.childNodes).map((node, colIndex, currentArr) => {
                if (node.nodeName === 'TH') {
                    const rowspan = parseInt(node.getAttribute('rowspan')) || 1;
                    const colspan = parseInt(node.getAttribute('colspan')) || 1;
                    let title = '';

                    // 如果列表里是输入框，拿框里的结果填入excel
                    const inputElement = node.getElementsByTagName('input');
                    const placeholderElement = Array.from(node.getElementsByTagName('span')).filter((item) => item.className.includes('u-select_placeholder'));
                    if (inputElement.length !== 0) {
                        title = inputElement[0].value;
                    } else {
                        // 下拉框未选则时，placeholder内容不显示
                        if (placeholderElement.length !== 0 && placeholderElement[0].innerText === node.innerText) {
                            title = '';
                        } else {
                            title = node.innerText;
                        }
                    }
                    const cols = helper.setCell(title, colIndex + 1 === currentArr.length, rowspan, colspan);
                    const realColIndex = cols[0];
                    if (rowspan !== 1 || colspan !== 1) {
                        mergesMap.push({
                            col: realColIndex,
                            row: rowIndex,
                            rowspan,
                            colspan,
                        });
                    }
                    titleColIndexRelations.push([title, cols]);
                    return title;
                } else {
                    return null;
                }
            }));
            // console.time('渲染数据');
            let res = helper.eject();
            const startIndexes = [];
            for (let i = 0; i < this.visibleColumnVMs.length; i++) {
                const vm = this.visibleColumnVMs[i];
                if (vm.type === 'index')
                    startIndexes[i] = +vm.startIndex;
            }

            // this.currentDataSource.paging.size 会受可分页选项影响，直接改成pageSize
            const page = this.pageSize;
            const headerRowCount = res.length;

            for (let i = 0; i < arr.length; i += page) {
                this.exportData = arr.slice(i, i + page);
                await new Promise((res) => {
                    this.$once('hook:updated', res);
                });
                const res1 = Array.from(this.$el.querySelectorAll('[position=static] tbody tr')).map((tr, rowIndex) => Array.from(tr.childNodes).map(
                    (node, colIndex) => {
                        if (node.nodeName === 'TD' || node.nodeName === 'TH') {
                            let title = '';
                            const inputElement = node.getElementsByTagName('input');
                            const placeholderElement = Array.from(node.getElementsByTagName('span')).filter((item) => item.className.includes('u-select_placeholder'));
                            if (inputElement.length !== 0) {
                                title = inputElement[0].value;
                            } else {
                                // 下拉框未选则时，placeholder内容不显示
                                if (placeholderElement.length !== 0 && placeholderElement[0].innerText === node.innerText) {
                                    title = '';
                                } else {
                                    title = node.innerText;
                                }
                            }
                            const rowspan = parseInt(node.getAttribute('rowspan')) || 1;
                            const colspan = parseInt(node.getAttribute('colspan')) || 1;

                            if (rowspan !== 1 || colspan !== 1) {
                                mergesMap.push({
                                    col: colIndex,
                                    row: rowIndex + i + headerRowCount,
                                    rowspan,
                                    colspan,
                                });
                            }
                            return title;
                        } else {
                            return null;
                        }
                    },
                ));
                res = res.concat(res1);
            }

            for (let rowIndex = hasHeader ? headerRowCount : 0; rowIndex < res.length; rowIndex++) {
                const item = res[rowIndex];
                for (let j = 0; j < item.length; j++) {
                    if (startIndexes[j] !== undefined)
                        item[j] = startIndexes[j] + (hasHeader ? rowIndex - headerRowCount : rowIndex);
                }
            }

            const newResult = this.removeExcludeColumns(res, excludeColumns, mergesMap, titleColIndexRelations);
            res = newResult[0];
            mergesMap = newResult[1];

            // console.timeEnd('渲染数据');

            // console.time('复原表格');
            this.exportData = undefined;
            await new Promise((res) => {
                try {
                    mergesMap.length > 0 ? this.$once('hook:updated', res): res();
                } catch (error) {
                    console.log('mergeMap格式不正确', error)
                    this.$once('hook:updated', res)
                }
            });
            // console.timeEnd('复原表格');

            return [res, mergesMap];
        },
        removeExcludeColumns(data, excludeColumns, merges, titleColIndexRelations) {
            const excludeIndexMap = {};
            const excludeColumnsMap = excludeColumns.reduce((acc, title) => ({
                ...acc,
                [title]: true,
            }), {});

            titleColIndexRelations.forEach(([titleRaw, colIndexs]) => {
                const title = titleRaw.trim();
                if (title === '' || excludeColumnsMap[title]) { // 过滤掉title为空字符串和命中excludeColumns
                    colIndexs.forEach((index) => {
                        excludeIndexMap[index] = true;
                    });
                }
            });

            let removeColCount = 0;
            const removeColHelperArr = Array.from({ length: (data[0] || []).length }).map((_, index) => {
                if (excludeIndexMap[index]) {
                    ++removeColCount;
                }
                return removeColCount;
            });
            const newMerges = merges.map((merge) => {
                const colStart = merge.col;
                const colEnd = merge.col + merge.colspan - 1;
                if (merge.colspan === 1 && excludeIndexMap[colStart]) {
                    return null;
                }
                const newColStart = Math.max(colStart - removeColHelperArr[colStart], 0);
                const newColEnd = colEnd - removeColHelperArr[colEnd];
                const newColspan = newColEnd - newColStart + 1;
                if (newColspan <= 0 || newColspan === 1 && merge.rowspan === 1) {
                    return null;
                }
                return {
                    ...merge,
                    col: newColStart,
                    colspan: newColspan,
                };
            }).filter(Boolean);

            return [data.map((arr) => arr.filter((item, index) => !excludeIndexMap[index])), newMerges];
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
            if (!(this.currentDataSource && this.currentDataSource.paging))
                return;
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
                    // 处理自动合并逻辑前恢复默认值
                    this.autoRowSpan = [];
                    this.autoColSpan = [];
                    this.autoMergeRow(currentData);
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
        onClickRow(e, item, rowIndex) {
            this.$emit('click-row', { item, index: rowIndex });

            if (this.selectable) {
                this.select(item);
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
            this.$forceUpdate();
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
        processTreeData(data, level = 0, parent, ancestors = []) {
            let newData = [];
            for (const item of data) {
                item.tableTreeItemLevel = level;
                item.parentPointer = parent;
                if (this.$at(item, this.childrenField) && this.$at(item, this.childrenField).length) {
                    this.$setAt(item, this.hasChildrenField, true);
                    item.expanded = item.expanded || false;
                    item.treeExpanded = item.treeExpanded || false;
                }
                if (parent) {
                    this.$set(item, 'display', needHidden(ancestors) ? 'none' : '');
                }
                if (!item.hasOwnProperty('loading')) {
                    this.$set(item, 'loading', false);
                }
                newData.push(item);
                if (this.$at(item, this.childrenField) && this.$at(item, this.childrenField).length) {
                    newData = newData.concat(this.processTreeData(this.$at(item, this.childrenField), level + 1, item, ancestors.concat(item)));
                }
            }
            return newData;

            // 只要任意祖先节点的treeExpanded为false,当前节点都不显示。
            function needHidden(ancestors) {
                for (const item of ancestors) {
                    if (!item.treeExpanded) {
                        return true;
                    }
                }
                return false;
            }
        },
        toggleTreeExpanded(item, expanded) {
            if (item.loading)
                return;
            if (expanded === undefined)
                expanded = !item.treeExpanded;
            if (this.$emitPrevent('before-tree-toggle-expanded', { item, oldExpanded: !expanded, expanded }, this))
                return;
            this.$set(item, 'treeExpanded', expanded);
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
            if (this.virtual) {
                this.throttledVirtualScroll({ target: this.$refs.scrollView[0].$refs.wrap });
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
                            if (parent.treeExpanded) {
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
            expandNode.expanded = expanded;
            this.$forceUpdate(); // 有loading的情况下，forceUpdate才会更新
        },
        onSetEditing(item, columnVM) {
            const fieldName = columnVM.field;
            item.editing = fieldName;
            if (columnVM.dblclickHandler) {
                columnVM.dblclickHandler({ item, columnVM });
            }
        },
        resetEdit(item) {
            item.editing = '';
        },
        getStyle(type, columnVM) {
            const style = Object.assign({}, columnVM.$vnode.data && columnVM.$vnode.data.style);
            const staticStyle = Object.assign({}, columnVM.$vnode.data && columnVM.$vnode.data.staticStyle);
            if (this.useStickyFixed) {
                const elZIndex = +this.$el.style.zIndex;
                // --z-index-layout: 100, 可能用于导航栏fixed，不能大于它
                const zIndex = elZIndex > 99 ? elZIndex : 99;
                if (this.fixedLeftList && this.fixedLeftList.length) {
                    const columnData = this.columnVMsMap[columnVM._uid];
                    if (columnData) {
                        const inFixedLeftList = this.isInFixedList(columnVM, this.fixedLeftList);
                        if (inFixedLeftList) {
                            let left = columnData.left;
                            if (type === 'th') {
                                left = this.getFixedWidth(columnVM, 'left');
                            }
                            if (left !== undefined) {
                                return Object.assign(staticStyle, style, {
                                    position: 'sticky',
                                    left: left + 'px',
                                    zIndex,
                                    overflow: 'hidden',
                                });
                            }
                        }
                    }
                }
                if (this.fixedRightList && this.fixedRightList.length) {
                    const columnData = this.columnVMsMap[columnVM._uid];
                    if (columnData) {
                        const inFixedRightList = this.isInFixedList(columnVM, this.fixedRightList);
                        if (inFixedRightList) {
                            let right = columnData.right;
                            if (type === 'th') {
                                right = this.getFixedWidth(columnVM, 'right');
                            }
                            if (right !== undefined) {
                                return Object.assign(staticStyle, style, {
                                    position: 'sticky',
                                    right: right + 'px',
                                    zIndex,
                                    overflow: 'hidden',
                                });
                            }
                        }
                    }
                }
            }
            return Object.assign(staticStyle, style);
        },
        isLastLeftFixed(columnVM, columnIndex, list) {
            if (!columnVM)
                return undefined;
            const inFixedLeftList = this.isInFixedList(columnVM, this.fixedLeftList);
            let isLastInList = list[columnIndex + 1] && !list[columnIndex + 1].fixed;
            if (columnVM.$parent.isGroup) {
                const groupList = this.visibleTableHeadTrArr.find((tableHeadTr) => tableHeadTr.includes(columnVM.$parent));
                if (groupList) {
                    const groupVMIndex = groupList.findIndex((groupVM) => groupVM === columnVM.$parent);
                    const isGroupInLast = this.isLastLeftFixed(columnVM.$parent, groupVMIndex, groupList);
                    isLastInList = isLastInList && isGroupInLast;
                }
            }
            return inFixedLeftList && isLastInList ? true : undefined;
        },
        isTdLastLeftFixed(columnVM, columnIndex, columnVMList, item, rowIndex) {
            if (!columnVM)
                return undefined;
            const colSpan = this.getItemColSpan(item, rowIndex, columnIndex);
            if (colSpan > 1) {
                const lastColumnVM = columnVMList[columnIndex + colSpan - 1];
                return this.isLastLeftFixed(lastColumnVM, columnIndex + colSpan - 1, columnVMList);
            }
            return this.isLastLeftFixed(columnVM, columnIndex, columnVMList);
        },
        isFirstRightFixed(columnVM, columnIndex, list) {
            const inFixedRightList = this.isInFixedList(columnVM, this.fixedRightList);
            let isLastInList = list[columnIndex - 1] && !list[columnIndex - 1].fixed;
            if (columnVM.$parent.isGroup) {
                const groupList = this.visibleTableHeadTrArr.find((tableHeadTr) => tableHeadTr.includes(columnVM.$parent));
                if (groupList) {
                    const groupVMIndex = groupList.findIndex((groupVM) => groupVM === columnVM.$parent);
                    const isGroupInLast = this.isFirstRightFixed(columnVM.$parent, groupVMIndex, groupList);
                    isLastInList = isLastInList && isGroupInLast;
                }
            }
            return inFixedRightList && isLastInList ? true : undefined;
        },
        /**
         * 拖拽开始
         */
        async onDragStart(e, item, rowIndex) {
            // 当不可拖拽节点里的文字双击选中时再拖拽，会触发dragstart事件，这里需要屏蔽
            await this.canDraggable(item);
            if (item.draggable === false) {
                return;
            }
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
                if (this.treeDisplay) {
                    this.canDropin(citem);
                } else {
                    citem.disabledDrop = true;
                }
            });
            // 本身不要线
            item.draggoverDisabled = true;
            this.$emit('dragstart', {
                source: this.dragState.sourceData,
            });
            this.currentDragoverItem = null;
            if (this.acrossTableDrag) {
                const dragStartData = {
                    source: item,
                    sourcePath: rowIndex, // 这里需要是表格中的具体行值，用于drop的时候判断
                    sourceData: {
                        item,
                        level: item.tableTreeItemLevel,
                        index: this.findItemIndex(item),
                    },
                };
                e.dataTransfer.setData('application/json', JSON.stringify(dragStartData));
                // 当不可拖拽节点里的文字双击选中时再拖拽，会触发dragstart事件，dragover的时候也会响应
                // 这里增加信息，dragover的时候可以处理是否响应
                e.dataTransfer.setData('info/acrosstabledrag', '');
            }
        },
        /**
         * 拖拽经过行
         */
        onDragOver(e, item, rowIndex) {
            e.preventDefault();
            // 表格内部或者跨表格可拖拽，其他屏蔽
            if (!this.dragState.dragging && !this.acrossTableDrag)
                return;
            if (item.draggoverDisabled) {
                return;
            }
            if (this.acrossTableDrag) {
                const types = (e.dataTransfer && e.dataTransfer.types) || [];
                const isAcrossTableDrag = types.find((type) => type === 'info/acrosstabledrag');
                if (!isAcrossTableDrag)
                    return;
            }
            // 行之间可以放
            if (this.draggable) {
                this.currentDragoverItem = item;
                // 快速移动的时候不要计算
                this.dragoverTimer = setTimeout(() => {
                    if (this.currentDragoverItem === item) {
                        this.throttledDragover(e, item, rowIndex);
                    } else {
                        clearTimeout(this.dragoverTimer);
                        this.throttledDragover.cancel();
                    }
                }, 200);
            } else if (this.acrossTableDrag) {
                // 只能放入整个表格，并且是拖拽节点所在表格外的其他表格展示放置样式，拖拽节点所在的表格不展示放置样式
                // this.dragState.sourcePath === undefined，表示是拖拽节点所在表格外的其他表格，因为其他表格没有响应dragstart事件，所以sourcePath为undefined
                if (!this.dropData && this.dragState.sourcePath === undefined) {
                    this.dropData = {
                        dragoverElRect: this.$refs.body[0].getBoundingClientRect(),
                        parentElRect: this.$refs.root.getBoundingClientRect(),
                        position: 'append',
                        left: 0,
                    };
                }
            }
        },
        handleDragOver(e, item, rowIndex) {
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
            } else {
                item.disabledDrop = true;
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
                if (item.expanded) {
                    const childList = this.$at(item, this.childrenField);
                    if (childList && childList.length)
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
            if (!!this.currentDragoverItem && (!this.dropData
                || JSON.stringify(this.dropData.dragoverElRect) !== JSON.stringify(trRect)
                || this.dropData.position !== position)) {
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
            this.cleartDragoverTimer();
            // item里添加的辅助拖拽字段需要删除，不然跨表格拖拽时会影响下一次的拖拽
            this.clearDragItemData();
        },
        /**
         * 拖拽放置
         */
        onDrop(e) {
            // 跨表格与表格内拖拽的drop处理区分开来
            if (this.acrossTableDrag && this.dropData) {
                const dragStartData = JSON.parse(e.dataTransfer.getData('application/json') || '{}');
                ['disabledDrop', 'draggoverDisabled'].forEach((key) => {
                    if (dragStartData.sourceData && dragStartData.sourceData.item) {
                        delete dragStartData.sourceData.item[key];
                    }
                    if (dragStartData.targetData && dragStartData.targetData.item) {
                        delete this.dragState.targetData.item[key];
                    }
                });
                // 如果当前表格内部没有开启拖拽，那么放置到当前表格不应该有drop事件
                if (!this.draggable && this.dragState.sourcePath === undefined) {
                    this.$emit('drop', {
                        source: dragStartData.sourceData,
                        target: this.dragState.targetData,
                        position: this.dropData && this.dropData.position || 'append',
                        finalSource: null,
                    });
                } else if (this.draggable) {
                    // 表格内拖拽，sourcePath和targetPath不一样的时候才emit事件
                    // 当元素被移除的时候可能不会触发dragend，结合判断数据是否在table里
                    const inTable = this.valueField ? dragStartData.sourceData && dragStartData.sourceData.item && !!this.currentData.find((titem) => this.$at(titem, this.valueField) === this.$at(dragStartData.sourceData.item, this.valueField)) : true;
                    const inTheSameTable = this.dragState.sourcePath !== undefined && inTable;
                    const finalSource = Object.assign({}, dragStartData.sourceData);
                    finalSource.index = this.dragState.targetPath;
                    this.$emit('drop', {
                        source: dragStartData.sourceData,
                        target: this.dragState.targetData,
                        position: this.dropData && this.dropData.position || 'append',
                        finalSource: inTheSameTable ? finalSource : null,
                    });
                }
            } else if (this.dragState
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
                            this.toggleTreeExpanded(parentNode, true);
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
            }
            this.clearDragState();
            this.cleartDragoverTimer();
            this.clearDragItemData();
        },
        onRootDragover(e) {
            e.preventDefault();
            // 当表格为空时，没有行的dragover事件，所以需要在这里处理
            if (this.currentData.length === 0) {
                if (!this.acrossTableDrag)
                    return;
                if (this.draggable || this.acrossTableDrag) {
                    this.dropData = {
                        dragoverElRect: this.$refs.body[0].getBoundingClientRect(),
                        parentElRect: this.$refs.root.getBoundingClientRect(),
                        position: 'append',
                        left: 0,
                    };
                }
            }
        },
        /**
         * 拖拽离开，每个tr都会触发该事件，所以需要判断是否是真正的离开
         * 结合dragleave和dragenter来判断
         */
        onRootDragleave(e) {
            if (this.enterTarget === e.target) {
                e.stopPropagation();
                e.preventDefault();
                this.dropData = undefined;
                this.cleartDragoverTimer();
                this.enterTarget = null;
            }
        },
        onRootDragenter(e) {
            this.enterTarget = e.target;
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
            this.enterTarget = null;
        },
        /**
         * 清除拖拽计时器
         */
        cleartDragoverTimer() {
            clearTimeout(this.dragoverTimer);
            this.currentDragoverItem = null;
        },
        /**
         * 清除拖拽item的辅助数据，draggoverDisabled、disabledDrop
         */
        clearDragItemData() {
            this.currentData.forEach((item) => {
                delete item.draggoverDisabled;
                delete item.disabledDrop;
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
                tableElCrt.style.transform = 'none';
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
        autoMergeRow(currentData = this.currentData) {
            // 这里要再重置一下，因为表格列也会调用这个方法
            this.autoRowSpan = [];
            this.visibleColumnVMs && this.visibleColumnVMs.forEach((columnVM, columnIndex) => {
                if (columnVM.autoRowSpan && columnVM.field && Array.isArray(currentData)) {
                    let count = 0;
                    for (let i = currentData.length - 1; i >= 0; i--) {
                        const item = currentData[i];
                        const itemValue = this.$at(item, columnVM.field);
                        if (itemValue !== undefined && itemValue === this.$at(currentData[i - 1], columnVM.field)) {
                            if (!this.autoRowSpan[i]) {
                                this.autoRowSpan[i] = [];
                            }
                            this.autoRowSpan[i][columnIndex] = 0;
                            count++;
                        } else if (count) {
                            if (!this.autoRowSpan[i]) {
                                this.autoRowSpan[i] = [];
                            }
                            this.autoRowSpan[i][columnIndex] = count + 1;
                            count = 0;
                        }
                    }
                }
            });
            this.$forceUpdate();
        },
        getItemColSpan(item, rowIndex, columnIndex) {
            if (Array.isArray(item.colSpan)) {
                const config = item.colSpan.find((configItem) => configItem[0] === columnIndex);
                if (config) {
                    for (let i = 1; i < config[1]; i++) {
                        if (!this.autoColSpan[rowIndex]) {
                            this.autoColSpan[rowIndex] = [];
                        }
                        this.autoColSpan[rowIndex][columnIndex + i] = 0;
                    }
                    return config[1];
                }
            }
            if (this.autoColSpan[rowIndex] && this.autoColSpan[rowIndex][columnIndex] !== undefined) {
                return this.autoColSpan[rowIndex][columnIndex];
            }
        },
        getItemRowSpan(item, rowIndex, columnIndex) {
            if (Array.isArray(item.rowSpan)) {
                const config = item.rowSpan.find((configItem) => configItem[0] === columnIndex);
                if (config) {
                    for (let i = 1; i < config[1]; i++) {
                        if (!this.autoRowSpan[rowIndex + i]) {
                            this.autoRowSpan[rowIndex + i] = [];
                        }
                        this.autoRowSpan[rowIndex + i][columnIndex] = 0;
                    }
                    return config[1];
                }
            }
            if (this.autoRowSpan[rowIndex] && this.autoRowSpan[rowIndex][columnIndex] !== undefined) {
                return this.autoRowSpan[rowIndex][columnIndex];
            }
        },
        /**
         * IDE 里生成的事async函数，所以需要await处理
         */
        async canDraggable(item) {
            if (this.canDragableHandler && (this.canDragableHandler instanceof Promise || typeof this.canDragableHandler === 'function')) {
                const canDraggableResult = await this.canDragableHandler(item);
                this.$set(item, 'draggable', canDraggableResult);
            } else {
                this.$set(item, 'draggable', true);
            }
        },
        async canDropin(item) {
            if (this.canDropinHandler && (this.canDropinHandler instanceof Promise || typeof this.canDropinHandler === 'function')) {
                const canDropinResult = await this.canDropinHandler(item);
                item.disabledDrop = item.disabledDrop || !canDropinResult;
            } else {
                item.disabledDrop = item.disabled;
            }
        },
        onDblclickRow(e, item, rowIndex) {
            this.$emit('dblclick-row', { item, index: rowIndex });
        },
        processTableDraggable(needProcessData) {
            // 拖拽设置
            const dragHandler = this.visibleColumnVMs.some((columnVM) => columnVM.type === 'dragHandler');
            if (!this.$env.VUE_APP_DESIGNER) {
                this.rowDraggable = (this.draggable || this.acrossTableDrag) && !dragHandler;
                this.handlerDraggable = (this.draggable || this.acrossTableDrag) && dragHandler;
            }
            if (needProcessData) {
                if (this.draggable || this.acrossTableDrag) {
                    this.currentData.forEach((item) => {
                        this.canDraggable(item);
                    });
                }
            }
        },
        handleResizeListener() {
            const rootWidth = this.$refs.root.offsetWidth;
            // 放在线性布局flex下，或者某些设置了fit-content，table-width会缓慢增长，导致表格一直动
            // 如果两次width变化不大，不要重新计算每列的computedWidth等
            const reComputedWidth = !this.preRootWidth || Math.abs(this.preRootWidth - rootWidth) > 8;
            this.handleResize(reComputedWidth);
        },
        reHandleResize() {
            this.preRootWidth = null;
            this.handleResize(true);
        },
        /**
         * 普通列、分组、动态列等增删时统一处理
         * 处理表格slots变化时，columnVMs数组、分组处理
         */
        handleColumns() {
            const slotVMs = this.$slots.default || [];
            let columnVMs = [];
            // 根据u-table-view里的$slots顺序，把columnVM放置到columnVMs里
            Object.keys(this.columnVMsMap).forEach((key) => {
                const columnVMMap = this.columnVMsMap[key];
                if (!columnVMMap)
                    return;
                const columnVM = columnVMMap.columnVM;
                if (!columnVM)
                    return;
                const vnode = columnVM.$vnode;
                const index = slotVMs.findIndex((slotVm) => slotVm === vnode);
                if (index !== -1) {
                    if (this.columnGroupVMs[columnVM._uid]) {
                        if (columnVM.$children.length) {
                            columnVMs[index] = columnVM;
                        }
                    } else {
                        columnVMs[index] = columnVM;
                    }
                }
            });
            columnVMs = columnVMs.filter((columnVm) => !!columnVm);

            // 先替换动态列
            const dynamicColumnVMs = [];
            Object.keys(this.dynamicColumnVMsMap).forEach((dkey) => {
                const dynamicColumnItem = this.dynamicColumnVMsMap[dkey];
                if (!dynamicColumnItem)
                    return;
                const index = columnVMs.findIndex((columnVm) => columnVm === dynamicColumnItem.columnVM);
                if (index !== -1 && dynamicColumnItem.vms) {
                    columnVMs.splice(index, 1, ...dynamicColumnItem.vms);
                }
                dynamicColumnVMs.push(dynamicColumnItem.columnVM);
            });
            this.dynamicColumnVMs = dynamicColumnVMs;

            // 再替换分组
            const finalColumnVms = [...columnVMs];
            // result 记录分组数据
            const result = [];
            const groupColumnVMs = columnVMs.filter((columnVm) => columnVm.isGroup);
            groupColumnVMs.forEach((groupVM) => {
                if (groupVM.$children.length) {
                    const columnsInGroup = this.setGroupData(groupVM);
                    const index = finalColumnVms.findIndex((columnVm) => columnVm === groupVM);
                    if (index !== -1) {
                        finalColumnVms.splice(index, 1, ...columnsInGroup);
                    }
                    result[0] = result[0] || [];
                    result[0].push(groupVM);
                    this.getColumnChildren(groupVM, 0, result);
                }
            });
            // finalColumnVms 是最终展示的列，赋值this.columnVMs，用于visibleColumnVMs的计算
            this.columnVMs = finalColumnVms;

            // 计算表头
            let tableHeadTrArr = [[]];
            //需要处理下列设置了colSpan的情况
            finalColumnVms.forEach((columnVM) => {
                tableHeadTrArr[0].push(columnVM);
            });
            tableHeadTrArr[0].forEach((columnVM, index) => {
                this.setColumnColSpanData(columnVM, index, tableHeadTrArr[0]);
            });
            if (result.length) {
                result[0] = columnVMs;
                for (let i = 0; i < result.length; i++) {
                    result[i].forEach((columnVm, index) => {
                        if (!columnVm)
                            return;
                        if (!columnVm.isGroup && i !== result.length - 1) {
                            columnVm.rowSpan = result.length - i;
                        }
                        this.setColumnColSpanData(columnVm, index, result[i]);
                    });
                }
                tableHeadTrArr = result;
            }
            this.tableHeadTrArr = tableHeadTrArr;
        },
        /**
         * 设置分组数据
         */
        setGroupData(groupVM) {
            const columnsInGroup = this.getContainColumns(groupVM);
            groupVM.colSpan = columnsInGroup.filter((columnVM) => !columnVM.currentHidden).length;
            // 自节点fixed的情况下，group也fixed
            const hasFixed = columnsInGroup.some((columnInGroup) => columnInGroup.fixed);
            groupVM.fixed = hasFixed || groupVM.fixed;
            if (groupVM.fixed) {
                columnsInGroup.forEach((columnInGroup) => columnInGroup.fixed = groupVM.fixed);
            }
            this.setColumnVMsMap(groupVM._uid, { columnsInGroup });
            return columnsInGroup;
        },
        /**
         * 设置colSpan数据
         * @param {*} columnVM 当前列
         * @param {*} index 当前列的索引
         * @param {*} list 当前列所在的数组
         */
        setColumnColSpanData(columnVM, index, list) {
            if (columnVM && columnVM.colSpan > 1 && !columnVM.isGroup) {
                // 如果当前列有合并，那么后面的列自动覆盖不显示
                const cloumnsForColSpanHidden = [];
                for (let j = index + 1; j < index + columnVM.colSpan && j < list.length; j++) {
                    list[j].fixed = columnVM.fixed;
                    cloumnsForColSpanHidden.push(list[j]);
                    list[j].currentHidden = columnVM.currentHidden;
                    list.splice(j, 1, null);
                }
                this.setColumnVMsMap(columnVM._uid, { cloumnsForColSpanHidden });
            }
        },
        /**
         * 得到group下最终的叶子结点
         * @param {*} column
         */
        getContainColumns(column) {
            if (column.$children.length) {
                const children = column.$children.filter((childrenVM) => this.isColumnVM(childrenVM));
                return flatMap(children, this.getContainColumns);
            } else {
                return this.isColumnVM(column) ? [column] : [];
            }
        },
        /**
         * group下的children计算
         */
        getColumnChildren(column, level, result) {
            level = level + 1;
            if (column.$children.length) {
                result[level] = result[level] || [];
                const slotVMs = column.$slots.default || [];
                // 使用v-if后，$children里的顺序会变化，与$slots里的顺序不一样，这里需要重新排序
                column.$children.sort((column1, column2) => {
                    const index1 = slotVMs.findIndex((slotVm) => slotVm === column1.$vnode);
                    const index2 = slotVMs.findIndex((slotVm) => slotVm === column2.$vnode);
                    return index1 - index2;
                });
                column.$children.forEach((columnVM) => {
                    if (!columnVM)
                        return;
                    if (!this.isColumnVM(columnVM))
                        return;
                    // group才需要设置信息
                    if (columnVM.$vnode && columnVM.$vnode.tag && columnVM.isGroup) {
                        this.setGroupData(columnVM);
                    }
                    result[level].push(columnVM);
                    this.getColumnChildren(columnVM, level, result);
                });
            }
        },
        /**
         * map存放数据
         */
        setColumnVMsMap(key, valueObj) {
            this.columnVMsMap[key] = this.columnVMsMap[key] || {};
            Object.assign(this.columnVMsMap[key], valueObj);
        },
        /**
         * 表头固定列需要重新计算左、右距离
         * @param {*} columnVM 表格列
         * @param {*} type left｜ right
         */
        getFixedWidth(columnVM, type) {
            const columnData = this.columnVMsMap[columnVM._uid];
            if (columnData) {
                let width = columnData[type];
                // 分组或者有合并列的情况处理
                if (columnData.columnsInGroup || columnData.cloumnsForColSpanHidden) {
                    const columnsInGroupWidth = (columnData.columnsInGroup || []).map((columnVM) => {
                        const columnData = this.columnVMsMap[columnVM._uid];
                        return columnData[type];
                    });
                    const cloumnsForColSpanHiddenWidth = (columnData.cloumnsForColSpanHidden || []).map((columnVM) => {
                        const columnData = this.columnVMsMap[columnVM._uid];
                        return columnData[type];
                    });
                    const tempWidth = Math.min(...columnsInGroupWidth.concat(cloumnsForColSpanHiddenWidth));
                    if (type === 'left' && width !== undefined) {
                        width = Math.min(width, tempWidth);
                    } else {
                        width = tempWidth;
                    }
                }
                return width;
            }
        },
        /**
         * 判断是否在固定列里
         * @param {*} columnVM
         * @param {*} list lef｜rightFixedList
         */
        isInFixedList(columnVM, list) {
            const columnData = this.columnVMsMap[columnVM._uid];
            if (columnData) {
                if (columnData.columnsInGroup) {
                    return columnData.columnsInGroup.some((columnVM1) => {
                        const index = list.findIndex((data) => data.columnVM === columnVM1);
                        return index !== -1;
                    });
                } else {
                    const index = list.findIndex((data) => data.columnVM === columnVM);
                    return index !== -1;
                }
            }
        },
        /**
         * column列里会有u-table-view-expander子组件，需要过滤掉
         */
        isColumnVM(columnVM) {
            return columnVM && columnVM.$vnode && columnVM.$vnode.tag && columnVM.$vnode.tag.includes('-column');
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
    left: 6px;
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
    right: 6px;
}
.head-title[shadow][last-left-fixed]::after {
    box-shadow: inset -4px 0 5px -3px rgb(0 0 0 / 15%);
}
.head-title[shadow][first-right-fixed]::after {
    box-shadow: inset 3px 0 5px -3px rgb(0 0 0 / 15%);
}

.head-title[disabled] {
    color: var(--text-color-disabled);
    background-color: var(--table-view-expander-background-disabled);
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
.cell[ellipsis] > div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cell[last-left-fixed]::after,
.cell[first-right-fixed]::after{
    content: "";
    position: absolute;
    top: 0;
    left: 6px;
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
    right: 6px;
}
.cell[shadow][last-left-fixed]::after {
    box-shadow: inset -4px 0 5px -3px rgb(0 0 0 / 15%);
}
.cell[shadow][first-right-fixed]::after {
    box-shadow: inset 3px 0 5px -3px rgb(0 0 0 / 15%);
}

.cell[disabled] {
    color: var(--text-color-disabled);
    background-color: var(--table-view-expander-background-disabled);
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
.row[draggable="true"] {
    cursor: var(--table-view-drag-cursor);
}
.row[dragging="true"] td {
    background: var(--table-view-row-background-dragging);
}
.row[dragging="true"][subrow] td {
    background: var(--table-view-subrow-background-dragging);
}
.dragHandler {
    cursor: var(--table-view-drag-cursor);
}
.dragHandler[disabled] {
    cursor: var(--table-view-drag-cursor-disabled);
    color: var(--table-view-drag-color-disabled);
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

.tree_expander[loading]::before {
    border-top-color: transparent;
}

.indent {}

.trmask {
    position: relative;
}
.trmask::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
}

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
