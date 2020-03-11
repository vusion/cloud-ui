import { ellipsisTitle } from '../../directives';
import { getStyle, getScrollSize } from '../../utils/style';
import { format } from '../../utils/date';
// import { deepCopy } from '../../utils/index';
import cloneDeep from 'lodash/cloneDeep';
import i18n from './i18n';

export const UResizeTable = {
    name: 'u-resize-table',
    i18n,
    props: {
        showHeader: { type: Boolean, default: true },
        data: { type: Array, default() {
            return [];
        } },
        // minWidth: { type: Number, default: 46 },
        color: { type: String, default: '' },
        ellipsis: { type: Boolean, default: true },
        // 应该支持多选的形式 暂未支持 应用场景不多
        defaultSort: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    order: undefined,
                };
            },
        },
        width: [String, Number], // 宽度设置
        height: [String, Number], // 高度设置
        maxHeight: [String, Number],
        minHeight: [String, Number],
        pattern: { type: String, default: 'normal' },
        limit: { type: [String, Number], default: 5 }, // 配合 pattern 值是limit使用
        limitText: { type: String, default() { return this.$t('limitText'); } },
        allText: { type: String, default() { return this.$t('allText'); } },
        allChecked: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        loadText: { type: String, default: '' }, // 加载状态显示的文本
        noDataText: { type: String, default() { return this.$t('noDataText'); } }, // 无数据时的提示文案
        border: { type: Boolean, default: false }, // 显示边框
        defaultText: { type: String, default: '-' }, // 无数据显示内容
        visible: { type: Boolean, default: true },
        sortMethod: Function, // 排序自定义
        sortRemoteMethod: Function, // 异步排序自定义
        filterMethod: Function, // 过滤自定义
        rowClassName: { type: Function, default() { return ''; } }, // 自定义表格单行的样式
    },
    data() {
        return {
            itemColumns: [],
            initPoint: {
                pageX: 0,
                pageY: 0,
            },
            currentDiff: {
                offsetX: 0,
                offsetY: 0,
            },
            currentIndex: undefined,
            isDown: false, // 判断是否mousedown
            direction: undefined, // 移动的方向
            minIndexs: [], // 存放列的宽度达到最小宽度限制列的索引
            sumOffset: 0,
            bodyTableHeight: undefined,
            scrollWidth: undefined,
            isYScroll: false,
            tdata: [],
            copyData: [],
            filterData: [],
            allSel: this.allChecked, // type类型是selection
            currentSortColumn: undefined, // 表示当前排序列，目前支持单选
            currentSort: this.defaultSort,
            copyTdata: [], // tdata的复制版本主要用来过滤
            filterTdata: undefined, // 用来记录当前filter列过滤后符合条件的所有数据
            currentFilter: {
                title: undefined,
                value: undefined,
                column: undefined,
            },
            maxBodyHeight: undefined,
            minBodyHeight: undefined,
            scrollDiff: false,
        };
    },
    directives: { ellipsisTitle },
    created() {
        this.timers = [];
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemColumns.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemColumns.splice(this.itemColumns.indexOf(itemVM), 1);
        });
        // 使用document.body可能会影响对document事件的监听
        document.addEventListener('mousemove', this.onMouseMove, false);
        document.addEventListener('mouseup', this.onMouseUp, false);
    },
    mounted() {
        // 需要在没有给表格列赋值初始化的情况下 获取每列的宽度
        if (this.pattern === 'limit')
            this.tdata = this.initTableData(this.limit);
        else
            this.tdata = this.initTableData();
        window.addEventListener('resize', this.onResize, false);
        this.timers[0] = setTimeout(() => {
            this.showColumns.forEach((item, index) => {
                if (!item.digitWidth && item.visible) {
                    item.copyWidth = item.currentWidth = item.digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width'));
                }
            });
        });
        this.handleSize(); // 计算样式
    },
    watch: {
        defaultSort(newValue) {
            this.currentSort = newValue;
        },
        data: {
            deep: true,
            handler(newValue) {
                if (this.pattern === 'limit')
                    this.tdata = this.initTableData(this.limit);
                else
                    this.tdata = this.initTableData();

                const flag = this.showColumns.some((column) => column.type === 'filter');
                if (flag) {
                    // 在有filter列的情况下  数据如果发生变化是需要对数据进行过滤显示的
                    if (this.currentFilter.title === undefined) {
                        this.showColumns.some((item, index) => {
                            if (item.filter) {
                                this.currentFilter.title = item.title;
                                this.currentFilter.value = item.value;
                                this.currentFilter.column = item;
                                return true;
                            }
                            return false;
                        });
                    } else {
                        this.showColumns.some((column, index) => {
                            if (column.title === this.currentFilter.title) {
                                this.currentFilter.column = column;
                                return true;
                            }
                            return false;
                        });
                    }
                    const column = this.currentFilter.column;
                    const value = this.currentFilter.value;
                    this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                        if (this.filterMethod || column.filterMethod) {
                            const filterMethod = this.filterMethod || column.filterMethod;
                            return filterMethod(value, item[column.label], item, column);
                        } else
                            return item[column.label] === value;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.tdata.slice(0, this.limit);

                if (this.currentSortColumn && (!this.currentSortColumn.sortRemoteMethod || !this.sortRemoteMethod)) {
                    const order = this.defaultSort.order === 'asc' ? -1 : 1;
                    this.sortData(this.currentSortColumn, order, 'change');
                }
                this.handleSize();
            },
        },
        visible() {
            this.handleSize();
        },
        loading() {
            // 比较复杂情况下，可能会先赋值data，再将loading设为false
            this.handleSize();
        },
        itemColumns() {
            // 列表的列修改会导致变化 列表设置
            this.handleSize();
        },
        showColumns(newValue) {
            this.timers[1] = setTimeout(() => {
                newValue.forEach((item, index) => {
                    if (index === newValue.length - 1 && this.isYScroll)
                        item.copyWidth = item.currentWidth = item.digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width')) - (this.scrollWidth || 0);
                    else
                        item.copyWidth = item.currentWidth = item.digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width'));
                });
            });
        },
    },
    computed: {
        expandedColumn() {
            return this.itemColumns.filter((column) => column.type === 'expand' && column.visible)[0];
        },
        allDisabled() {
            return this.tdata.every((item) => item.disabled);
        },
        showColumns() {
            // 原来分配的宽度会影响现有新增或删除列 显示
            this.itemColumns.forEach((item) => {
                item.currentWidth = item.copyWidth = item.getWidth();
            });
            return this.itemColumns.filter((column) => column.visible);
        },
    },
    methods: {
        rowClsName(index) {
            return this.rowClassName && this.rowClassName(index, this.tdata[index]);
        },
        onMouseDown(e, index) {
            //
            this.pauseEvent(e);
            this.isDown = true;
            this.initPoint.pageX = e.clientX;
            this.initPoint.pageY = e.clientY;
            this.currentIndex = index;
            if (!this.showColumns[index].digitWidth)
                this.showColumns[index].digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width'));

            this.showColumns.forEach((item) => item.currentWidth = item.digitWidth);
        },
        onMouseMove(e) {
            // 指定位置点击 才能触发move事件
            // 移动规则： 如果移动的距离不能被右边的列均分，则优先将移动距离给靠近移动列的其他列 例如右边有3列，移动距离2，则右边的移动距离是1，1，0
            if (this.isDown && this.currentIndex !== undefined) {
                this.pauseEvent(e);
                this.currentDiff.offsetX = e.clientX - this.initPoint.pageX;
                this.$nextTick(() => {
                    // changeLen 表示当前列右边还剩下几个可以改变宽度的列
                    let changeLen = this.showColumns.length - this.currentIndex - 1;
                    this.direction = this.currentDiff.offsetX < 0 ? 'left' : 'right';
                    if (this.direction === 'left') {
                        if (this.showColumns[this.currentIndex].digitWidth <= this.showColumns[this.currentIndex].currentMinWidth)
                            return false;
                    } else {
                        for (let i = this.currentIndex + 1; i < this.showColumns.length; i++) {
                            if (this.minIndexs.indexOf(i) !== -1)
                                changeLen += -1;
                        }
                    }
                    if (changeLen === 0)
                        return false;
                    // 为了防止抖动的出现，需要用 Math.floor 函数特殊处理下 满足最小宽度限制
                    // 向左右移动会出现距离不能完全被列整除的情况 为保证均匀需要找出列最大最小加上多余的宽度
                    // 向左移动需要特殊处理下移动距离导致currentIndex列的宽度小于最小宽度
                    // 向左移动 距离增加的时候 有最大宽度限制
                    let averageOffset = 0;
                    let remainder = 0;
                    let amendRight = 0; // 会出现向右移动
                    let amendLeft = 0; // 会出现向左移动导致当前列最小宽度小于46， 需要特殊处理
                    if (this.direction === 'left' && (this.showColumns[this.currentIndex].digitWidth + this.currentDiff.offsetX < this.showColumns[this.currentIndex].currentMinWidth)) {
                        amendLeft = this.showColumns[this.currentIndex].digitWidth - this.showColumns[this.currentIndex].currentMinWidth;
                        averageOffset = Math.floor(amendLeft / changeLen);
                        remainder = Math.abs(amendLeft - averageOffset * changeLen);
                    } else {
                        averageOffset = Math.floor(Math.abs(this.currentDiff.offsetX) / changeLen);
                        remainder = Math.abs(Math.abs(this.currentDiff.offsetX) - averageOffset * changeLen);
                    }
                    let changColumnIndex;
                    // let maxOffset;
                    if (this.direction === 'left') {
                        changColumnIndex = this.getColumnIndex(this.currentIndex + 1, 'min');
                    } else {
                        changColumnIndex = this.getColumnIndex(this.currentIndex + 1, 'max');
                    }
                    this.showColumns.forEach((item, index) => {
                        if (index > this.currentIndex) {
                            if (this.direction === 'left') {
                                item.digitWidth += averageOffset;
                                if (index === changColumnIndex)
                                    item.digitWidth += remainder;
                                item.copyWidth = item.currentWidth = item.digitWidth;
                            } else if (this.direction === 'right' && item.digitWidth > item.currentMinWidth) {
                                // 向右移动会导致列宽度小于最小宽度 需要手动修正误差操作
                                item.digitWidth -= averageOffset;
                                if (index === changColumnIndex)
                                    item.digitWidth -= remainder;
                                if (item.digitWidth < item.currentMinWidth)
                                    amendRight = amendRight + parseFloat(item.currentMinWidth) - item.digitWidth;

                                item.currentWidth = item.digitWidth = item.digitWidth < item.currentMinWidth ? parseFloat(item.currentMinWidth) : item.digitWidth;
                            }
                            // 有滚动条的情况下 最后一列需要特殊处理
                            if (index === this.showColumns.length - 1 && this.isYScroll)
                                item.copyWidth = item.digitWidth - this.scrollWidth;
                            else
                                item.copyWidth = item.digitWidth;
                        }
                    });
                    this.sumOffset += this.currentDiff.offsetX;
                    this.minIndexs = [];
                    this.showColumns.forEach((item, index) => {
                        if (item.digitWidth <= item.currentMinWidth)
                            this.minIndexs.push(index);
                    });
                    if (this.direction === 'right') {
                        // 必须确保减去和增加的长度一样 向右移动 满足条件是右边的列不能全部为最小值
                        this.showColumns[this.currentIndex].digitWidth = this.showColumns[this.currentIndex].digitWidth + this.currentDiff.offsetX - amendRight;
                        this.showColumns[this.currentIndex].copyWidth = this.showColumns[this.currentIndex].currentWidth = this.showColumns[this.currentIndex].digitWidth;
                    } else if (this.showColumns[this.currentIndex].digitWidth > this.showColumns[this.currentIndex].currentMinWidth && this.direction === 'left') {
                        this.showColumns[this.currentIndex].digitWidth += this.currentDiff.offsetX;
                        // 需要特殊处理小于 this.showColumns[this.currentIndex].currentMinWidth的情况
                        if (this.showColumns[this.currentIndex].digitWidth < this.showColumns[this.currentIndex].currentMinWidth)
                            this.showColumns[this.currentIndex].digitWidth = parseFloat(this.showColumns[this.currentIndex].currentMinWidth);
                        this.showColumns[this.currentIndex].copyWidth = this.showColumns[this.currentIndex].currentWidth = this.showColumns[this.currentIndex].digitWidth;
                    }
                    this.initPoint.pageX = e.clientX;
                });
            }
        },
        onMouseUp(e) {
            if (this.isDown && this.currentIndex !== undefined) {
                // 释放
                this.pauseEvent(e);
                this.isDown = false;
                this.currentIndex = undefined;
                this.initPoint.pageX = undefined;
                this.currentDiff.offsetX = undefined;
            }
        },
        pauseEvent(e) {
            if (e.stopPropagation)
                e.stopPropagation();
            if (e.preventDefault)
                e.preventDefault();

            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        },
        // 获取列宽度最大值和最小值 满足缓慢移动过程中没有平均分配移动距离
        // 加入自定义最小值，会存在自定义最小值大于46，反而成为最大的值
        getColumnIndex(index, type) {
            let columnIndex = 0;
            let m = this.showColumns.slice(index)[0].digitWidth;
            this.showColumns.slice(index).forEach((item, kindex) => {
                if (type === 'max') {
                    if (item.digitWidth > m && item.digitWidth > item.currentMinWidth) {
                        m = item.digitWidth;
                        columnIndex = kindex;
                    }
                } else {
                    if (item.digitWidth < m) {
                        m = item.digitWidth;
                        columnIndex = kindex;
                    }
                }
            });
            return columnIndex + index;
        },
        handleSize() {
            clearTimeout(this.timers[2]);
            this.timers[2] = setTimeout(() => {
                const headHeight = parseFloat(getStyle(this.$refs.tableHead, 'height')) || 0;
                const tableHeight = this.$refs.tableBody && this.$refs.tableBody.offsetHeight;
                this.bodyTableHeight = parseFloat(this.height) - headHeight;
                if (this.height) {
                    if (tableHeight > this.bodyTableHeight) {
                        this.isYScroll = true;
                        // this.showColumns[this.showColumns.length - 1].copyWidth = this.showColumns[this.showColumns.length - 1].digitWidth - this.scrollWidth;
                    } else
                        this.isYScroll = false;
                } else if (this.maxHeight && !this.loading && this.data.length) {
                    // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                    this.maxBodyHeight = parseFloat(this.maxHeight) - headHeight;
                    this.isYScroll = tableHeight > this.maxBodyHeight;
                } else if (this.minHeight && !this.loading && this.data.length) {
                    // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                    this.minBodyHeight = parseFloat(this.minHeight) - headHeight;
                }
                if (this.isYScroll && !this.scrollDiff) {
                    this.scrollWidth = getScrollSize();
                    // 有滚动条 特殊处理
                    this.showColumns[this.showColumns.length - 1].copyWidth = this.showColumns[this.showColumns.length - 1].digitWidth - this.scrollWidth;
                    this.scrollDiff = true;
                }
            });
        },
        select(option, column, index) {
            this.$refs.popper && this.$refs.popper.forEach((item) => item.toggle(false));
            column.selectValue = option.value;
            this.currentFilter.title = column.title;
            this.currentFilter.value = option.value;
            this.currentFilter.column = column;
            // 需要考虑数据为空 进行过滤 异步加载数据的情况
            this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                if (this.filterMethod || column.filterMethod) {
                    const filterMethod = this.filterMethod || column.filterMethod;
                    return filterMethod(option.value, item[column.label], item, column);
                } else
                    return !option.value ? true : item[column.label] === option.value;
            });
            if (this.pattern === 'limit')
                this.tdata = this.tdata.slice(0, this.limit);

            this.$emit('filter-change', {
                value: option.value,
                column,
                index,
            });
        },
        initTableData(value) {
            let tdata = [];
            const copyData = cloneDeep(this.data);
            this.copyTdata = copyData;
            copyData.forEach((item, index) => {
                /* eslint-disable */
                item.original_data = this.data[index];
                item.original_index = index;
            });
            const selection = this.showColumns && this.showColumns.some((item) => item.type && item.type === 'selection');
            const expand = this.showColumns && this.showColumns.some((item) => item.type && item.type === 'expand');
            if (selection && expand) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (selection) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        item.selected = false;
                    if (item.disabled === undefined)
                        item.disabled = false;
                    tdata.push(item);
                });
            } else if (expand) {
                copyData.forEach((item) => {
                    if (item.expanded === undefined)
                        item.expanded = false;
                    if (item.iconName === undefined)
                        item.iconName = 'right';
                    tdata.push(item);
                });
            } else {
                copyData.forEach((item) => {
                    tdata.push(item);
                });
            }
            if (!copyData.length)
                this.allSel = false;
            // // 固定左右列同步阴影实现方案
            // if (this.fixedLeftColumns.length > 0 || this.fixedRightColumns.length > 0)
            //     tdata.forEach((item) => item.hover = false);

            if (value)
                tdata = tdata.slice(0, value);

            const selectionArr = this.getSelection(this.data);
            this.$emit('selection-change', selectionArr);

            return tdata;
        },
        getSelection(value) {
            const data = value || this.tdata;
            const selectionIndexes = [];
            let noDisabledCount = 0;
            data.forEach((row, index) => {
                if (row.selected)
                    selectionIndexes.push(index);
                if (!row.disabled)
                    noDisabledCount++;
            });
            // 这里有坑 行数据的checkbox有disabled状态 点击全选 可以是全选的
            if (selectionIndexes.length === noDisabledCount && selectionIndexes.length !== 0)
                this.allSel = true;
            else
                this.allSel = false;
            this.$emit('update:allChecked', this.allSel);
            // return this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1);
            return {
                selected: this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1),
                selectedIndexs: selectionIndexes,
            };
        },
        onResize() {
            // 需要特殊处理selection expand类型的列
            this.showColumns.forEach((item) => {
                if (item.type === 'selection')
                    item.currentWidth = item.digitWidth = item.width || 46;
                else if (item.type === 'expand')
                    item.currentWidth = item.digitWidth = item.width || 50;
                else if (!item.width)
                    item.currentWidth = item.digitWidth = '';
                else if (item.width)
                    item.currentWidth = item.width;
            });
            this.handleSize();
            this.timers[3] = setTimeout(() => {
                this.showColumns.forEach((item, index) => {
                    if (index === this.showColumns.length - 1 && this.isYScroll)
                        item.copyWidth = item.currentWidth = item.digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width')) - (this.scrollWidth || 0);
                    else
                        item.copyWidth = item.currentWidth = item.digitWidth = parseFloat(getStyle(this.$refs.thColumn[index], 'width'));
                });
            });
        },
        changeSelect(row) {
            const selection = this.getSelection();
            if (row.selected)
                this.$emit('select', selection);
            else
                this.$emit('select-cancel', selection);

            this.$emit('selection-change', selection);
        },
        allSelected() {
            this.$nextTick(() => {
                const flag = this.allSel;
                const copydata = this.tdata.concat();
                copydata.forEach((item) => {
                    if (!item.disabled)
                        item.selected = flag;
                });
                this.tdata = copydata;
                const selection = this.getSelection();
                if (flag)
                    this.$emit('select-all', selection);

                this.$emit('selection-change', selection);
            });
        },
        handleSort(e, index, column) {
            // 点击mousedown事件会触发此事件 需要特殊处理
            if (e.target === this.$refs.carve[index])
                return false;
            if (column.type === 'sortable') {
                if (column.title === this.currentSort.title)
                    this.currentSort.order = this.currentSort.order === 'asc' ? 'desc' : 'asc';
                else {
                    this.currentSort.title = column.title;
                    this.currentSort.order = 'desc';
                }
                this.currentSortColumn = column;
                const order = this.currentSort.order === 'asc' ? -1 : 1;
                this.sortData(column, order);
                this.$emit('update:defaultSort', this.currentSort);
            }
        },
        sortData(column, order, type) {
            // type 字段在data发生变化时传入，此时不能抛sort-change方法，防止死循环
            const label = column.label;
            if (this.sortRemoteMethod || column.sortRemoteMethod) {
                // 异步执行排序方法
                const sortRemoteMethod = this.sortRemoteMethod || column.sortRemoteMethod;
                sortRemoteMethod(label, this.currentSort.order, column);
            } else {
                if (this.sortMethod || column.sortMethod) {
                    const sortMethod = this.sortMethod || column.sortMethod;
                    this.copyTdata.sort((value1, value2) => sortMethod(value1[label], value2[label]) ? order : -order);
                } else {
                    this.copyTdata.sort((value1, value2) => {
                        if (value1[label] === value2[label])
                            return 0;
                        return value1[label] < value2[label] ? order : -order;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.copyTdata.slice(0, this.limit);
                else
                    this.tdata = this.copyTdata;
            }

            if (!type) {
                this.$emit('sort-change', {
                    order: this.currentSort.order,
                    label,
                    column,
                });
            }
        },
        translateTime(value, formatType) {
            return format(value, formatType) || this.defaultText;
        },
        showExpandIcon(column, value) {
            if (column.expandStrict) {
                if (!value)
                    return false;
                if (Array.isArray(value))
                    return value.length;
                if (typeof value === 'object')
                    return Object.keys(value).length;
                return value;
            }
            return true;
        },
        // 展示表格单元格具体内容函数 现在规则是row[column.label]是对象，数组全部不展示内容，只展示基本类型
        showContent(column, value) {
            if (value === 0)
                return value;
            else if (!value && column.defaultText === '')
                return '';
            else {
                if (Array.isArray(value) || typeof value === 'object' && column.defaultText === '')
                    return column.defaultText;
                if (Array.isArray(value) || typeof value === 'object')
                    return column.defaultText || this.defaultText;
                return value || column.defaultText || this.defaultText;
            }
        },
        toggleExpand(index) {
            if (this.expandPattern === 'toggle') {
                this.tdata.forEach((item, kindex) => {
                    if (kindex !== index) {
                        item.expanded = false;
                        item.iconName = 'right';
                    }
                });
            }
            const copyRowData = this.tdata[index];
            copyRowData.expanded = !copyRowData.expanded;
            if (!copyRowData.expanded)
                copyRowData.iconName = 'right';
            else
                copyRowData.iconName = 'down';
            this.tdata.splice(index, 1, copyRowData);
            // 由于点击会导致页面出现滚动条 表格fixed布局不会有变化导致表格显示有问题 需要重新计算下布局
            this.handleSize();
            this.$emit('toggle-expand', {
                index,
                direction: copyRowData.iconName,
                row: copyRowData.iconName,
            });
        },
        showAll() {
            const filterValue = this.currentFilter.value;
            if (this.currentFilter.value) {
                this.tdata = this.copyTdata.filter((item) => {
                    const filterColumn = this.currentFilter.column;
                    if (this.filterMethod || filterColumn.filterMethod) {
                        const filterMethod = this.filterMethod || filterColumn.filterMethod;
                        return filterMethod(filterValue, item[filterColumn.label], item, filterColumn);
                    } else
                        return item[filterColumn.label] === filterValue;
                });
            } else
                this.tdata = this.copyTdata;
        },
        showLimit() {
            this.tdata = this.tdata.slice(0, this.limit);
        },
        rowClick(row, index, event) {
            this.$emit('row-click', {
                data: row,
                index,
                event,
            });
        },
    },
    destroyed() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });
        window.removeEventListener('resize', this.onResize, false);
        document.removeEventListener('mousemove', this.onMouseMove, false);
        document.removeEventListener('mouseup', this.onMouseUp, false);
    },
};

export { UResizeTableColumn } from './column.vue';

export default UResizeTable;
