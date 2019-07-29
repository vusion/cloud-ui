import { getStyle, getScrollSize } from '../../utils/style';
import { ellipsisTitle } from 'proto-ui.vusion/src/directives';
import { deepCopy } from '../../utils/index';
import i18n from './i18n';
import throttle from 'lodash/throttle';

export const UOldTableView = {
    name: 'u-old-table-view',
    i18n,
    props: {
        title: String,
        data: {
            type: Array,
            default: () => ([]),
        },
        allChecked: { type: Boolean, default: false },
        defaultSort: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    order: undefined,
                };
            },
        },
        defaultFilter: {
            type: Object,
            default() {
                return {
                    title: undefined,
                    value: undefined,
                    column: undefined,
                };
            },
        },
        radioTextField: {
            type: String,
            default: 'radioText',
        },
        radioValueField: {
            type: String,
            default: 'radioLabel',
        },
        radioValue: [String, Number],
        noDataText: { type: String, default() { return this.$t('noDataText'); } },
        loading: { type: Boolean, default: false },
        height: [String, Number],
        maxHeight: [String, Number],
        minHeight: [String, Number],
        layout: {
            type: String,
            default: 'fixed',
        },
        border: { type: Boolean, default: false },
        xScroll: { type: Boolean, default: false }, // 用来处理当表格出现水平滚动条时，默认scroll事件走表格的水平滚动
        width: [String, Number],
        visible: { type: Boolean, default: true },
        dataPattern: { type: String, default: 'copy' }, // 默认数据是通过深拷贝复制 保证对源数据不会产生任何影响 但是当在表格中需要修改数据的场景下不合适
        pattern: { type: String, default: 'normal' }, // 特殊显示内容情形 limit normal virtual
        limit: { type: Number, default: 5 }, // 用来默认显示limit条数据
        limitText: { type: String, default() { return this.$t('limitText'); } },
        allText: { type: String, default() { return this.$t('allText'); } },
        defaultText: { type: String, default: '-' },
        expandPattern: { type: String, default: 'toggle' },
        // mode: { type: String, default: 'self' }, // fixed布局的时候计算方式是走原生表格的还是走自定义计算规则配置项
        showHeader: { type: Boolean, default: true }, // 展示表格头部
        loadText: { type: String, default: '' }, // 加载状态显示的文字
        rowClassName: { type: Function, default() { return ''; } }, // 自定义表格单行的样式
        color: String,
        forceFilter: { type: Boolean, default: false }, // 用来强制在数据源发生变化情况下就进行过滤
        forceSort: { type: Boolean, default: false }, // 用来强制在数据源发生变化的情况下进行排序
        showColor: {
            type: Boolean,
            default: false,
        },
        sortMethod: Function,
        sortRemoteMethod: Function,
        filterMethod: Function,
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
            currentRadioValue: this.radioValue,
            fixedRightWidth: [],
            copyTdata: [], // tdata的复制版本主要用来过滤
            tableWidth: undefined, // display值为none的时候需要特殊处理这个值
            bodyHeight: undefined,
            maxBodyHeight: undefined,
            minBodyHeight: undefined,
            fixedTableHeight: undefined, // 当固定列和表格的高度一起使用的时候
            fixedMaxTableHeight: undefined,
            fixedMinTableHeight: undefined,
            bodyWidth: undefined, // 当出现垂直滚动条的时候，需要减去滚动条的宽度，确保不会出现水平滚动条
            scrollWidth: undefined,
            over: false, // 当mouseover在表格时，此值为true
            fixedHeight: [], // 当fixed时表格行的高度值
            fixedLeftWidth: null, // fixed 时表格左部分宽度和的值
            rightColumns: [], // fixed值是right时需要重构columns顺序
            rightColumnsWidth: [], // fixed值是right时需要重构columnsWidth顺序
            isXScroll: false, // 判断是否会出现水平滚动条的情况
            isYScroll: false, // 判断添加height属性后，垂直方向是否应该添加滚动条
            fixedHover: false, // 用来实现党左右列固定的时候，hover到左右列的时候，阴影效果能够同步实现
            // filterValue: undefined, // 用来记录当前filter选项的值，方便在过滤的时候点击更多显示正确的数据
            // filterColumn: undefined, // 用来记录当前filter列，方便在过滤的时候点击更多显示正确的数据
            filterTdata: undefined, // 用来记录当前filter列过滤后符合条件的所有数据
            currentSortColumn: undefined, // 表示当前排序列
            currentSort: this.defaultSort,
            // scrollDiff: false,
            rootBottomBorder: false, // 解决tr加border-bottom带来样式上的异常问题，采用给根元素添加伪元素的方式实现
            headHeight: 0,
            titleHeight: 0,
            maxSize: 0, // 当出现滚动条 可视区可显示的最大行数
            currentSize: 3, // 当前显示几倍最大可视区行数的数据
            estimatedItemHeight: 51,
            virtualTop: 0,
            virtualBottom: 0,
            startIndex: 0,
            estimatedTotalHeight: undefined,
        };
    },
    directives: { ellipsisTitle },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.columns.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.columns.splice(this.columns.indexOf(itemVM), 1);
        });
        // this.throttleScroll = throttle(this.bodyScroll, 200);
    },
    mounted() {
        if (this.pattern === 'limit')
            this.tdata = this.initTableData(this.limit);
        else
            this.tdata = this.initTableData();
        // this.copyTdata = this.initTableData();
        this.handleResize();
        window.addEventListener('resize', this.onResize, false);
        if (this.xScroll) {
            this.addMousewheel = true;
            document.addEventListener('mousewheel', this.onMouseWheel, false);
        }
    },
    computed: {
        fixedLeftColumns() {
            return this.columns.filter((column) => column.fixed === 'left' && column.visible);
        },
        fixedRightColumns() {
            const rightCols = [];
            const other = [];
            this.columns.forEach((col) => {
                if (col.fixed && col.fixed === 'right' && col.visible) {
                    rightCols.push(col);
                } else if (col.visible) {
                    other.push(col);
                }
            });
            this.rightColumns = rightCols.concat(other);
            return rightCols;
        },
        expandedColumn() {
            return this.columns.filter((column) => column.type === 'expand' && column.visible)[0];
        },
        allDisabled() {
            return this.tdata.every((item) => item.disabled);
        },
        showColumns() {
            // visible属性为true的列集合
            return this.columns.filter((column) => column.visible);
        },
        radioColumn() {
            return this.columns.filter((column) => column.type === 'radio' && column.visible)[0];
        },
    },
    watch: {
        data: {
            deep: true,
            handler(newValue) {
                if (this.pattern === 'limit')
                    this.tdata = this.initTableData(this.limit);
                else
                    this.tdata = this.initTableData();

                // this.copyTdata = this.initTableData();
                const flag = this.showColumns.some((column) => column.filter);
                if (flag && this.forceFilter) {
                    // 在有filter列的情况下  数据如果发生变化是需要对数据进行过滤显示的
                    let columnIndex;
                    if (this.defaultFilter.title === undefined) {
                        this.showColumns.some((item, index) => {
                            if (item.filter) {
                                this.defaultFilter.title = item.title;
                                this.defaultFilter.value = item.value;
                                this.defaultFilter.column = item;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    } else {
                        this.showColumns.some((column, index) => {
                            if (column.title === this.defaultFilter.title) {
                                this.defaultFilter.column = column;
                                columnIndex = index;
                                return true;
                            }
                            return false;
                        });
                    }
                    const column = this.defaultFilter.column;
                    const value = this.defaultFilter.value;
                    this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                        if (column.filterMethod)
                            return column.filterMethod(value, item[column.label], item, column);
                        else
                            return item[column.label] === value;
                    });
                }
                if (this.pattern === 'limit')
                    this.tdata = this.tdata.slice(0, this.limit);

                if (this.currentSortColumn && this.forceSort) {
                    const order = this.currentSort.order === 'asc' ? -1 : 1;
                    // 此处有问题 异步执行 数据改变不希望我们在执行排序操作
                    this.sortData(this.currentSortColumn, order, 'change');
                }
                this.handleResize();
            },
        },
        allChecked(newValue) {
            this.allSel = newValue;
        },
        columnsWidth(newValue) {
            const leftIndexs = [];
            const rightIndexs = [];
            this.rightColumnsWidth = [];
            this.fixedLeftColumns && this.fixedLeftColumns.forEach((item) => {
                const index = this.showColumns.indexOf(item);
                leftIndexs.push(index);
            });
            this.fixedRightColumns && this.fixedRightColumns.forEach((item) => {
                const index = this.showColumns.indexOf(item);
                rightIndexs.push(index);
                newValue[index] && this.rightColumnsWidth.push(newValue[index]);
            });
            this.showColumns.forEach((item, index) => {
                if (rightIndexs.indexOf(index) === -1 && newValue[index]) {
                    this.rightColumnsWidth.push(newValue[index]);
                }
            });
            this.fixedLeftWidth = null;
            this.fixedRightWidth = null;
            leftIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedLeftWidth += parseFloat(newValue[item]);
            });
            rightIndexs.forEach((item) => {
                if (newValue[item])
                    this.fixedRightWidth += parseFloat(newValue[item]);
            });

            if (this.isYScroll) {
                this.fixedRightWidth -= this.scrollWidth;
            }
        },
        visible(newValue) {
            this.handleResize();
        },
        loading(newVal) {
            // 比较复杂情况下，可能会先赋值data，再将loading设为false
            this.handleResize();
        },
        columns() {
            // 列表的列修改会导致变化 列表设置
            this.handleResize();
        },
        showColumns() {
            this.handleResize();
        },
        radioValue(value) {
            this.currentRadioValue = value;
        },
        currentRadioValue(value) {
            let row;
            let sindex;
            this.data.some((item, index) => {
                if (item[this.radioValueField] === value) {
                    row = item;
                    sindex = index;
                    return true;
                }
                return false;
            });
            this.$emit('update:radioValue', value);
            this.$emit('radio-change', {
                value,
                row,
                index: sindex,
            });
            if (sindex === this.data.length - 1)
                this.rootBottomBorder = true;
            else
                this.rootBottomBorder = false;
        },
    },
    methods: {
        rowClsName(index) {
            return this.rowClassName(index, this.tdata[index]);
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
        handleSort(column) {
            if (column.sortable) {
                if (column.title === this.currentSort.title)
                    this.currentSort.order = this.currentSort.order === 'asc' ? 'desc' : 'asc';
                else {
                    this.currentSort.title = column.title;
                    this.currentSort.order = 'desc';
                }
                this.currentSortColumn = column;
                const order = this.currentSort.order === 'asc' ? -1 : 1;
                this.sortData(column, order);
            }
        },
        sortData(column, order, type) {
            // type 字段在data发生变化时传入，此时不能抛sort-change方法，防止死循环
            const label = column.label;
            const sortRemoteMethod = this.sortRemoteMethod || column.sortRemoteMethod;
            const sortMethod = this.sortMethod || column.sortMethod;
            if (sortRemoteMethod) {
                // 异步执行排序方法
                sortRemoteMethod(label, this.currentSort.order, column);
            } else {
                if (sortMethod)
                    this.copyTdata.sort((value1, value2) => sortMethod(value1[label], value2[label]) ? order : -order);
                else {
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
                    column,
                    label,
                    order: this.currentSort.order,
                });
            }
        },
        getSelection(value) {
            const data = value || this.copyTdata;
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
            return this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1);
        },
        allSelected() {
            this.$nextTick(() => {
                const flag = this.allSel;
                // const copydata = this.tdata.concat();
                this.copyTdata.forEach((item) => {
                    if (!item.disabled)
                        item.selected = flag;
                });
                // this.tdata = copydata;
                const selection = this.getSelection();
                if (flag)
                    this.$emit('select-all', selection);

                this.$emit('selection-change', selection);
            });
        },
        initTableData(value) {
            let tdata = [];
            // 现在是将原始数据进行了深拷贝操作 现在的原因是不进行深拷贝会影响到原始数据，会添加一些新的属性，导致原始数据的变化
            // 1 需不需要进行深拷贝（如何解决影响原始数据变化的问题）2 进行深拷贝，数据变化需不需要$emit事件
            if (this.pattern === 'virtual')
                this.estimatedTotalHeight = this.data.length * this.estimatedItemHeight + 'px';
            if (this.maxHeight || this.height) {
                this.titleHeight = parseFloat(getStyle(this.$refs.title, 'height')) || 0;
                this.headHeight = parseFloat(getStyle(this.$refs.head, 'height')) || 0;
                this.maxSize = Math.ceil((parseFloat(this.height || this.maxHeight) - this.titleHeight - this.headHeight) / this.estimatedItemHeight);
            }
            const copyData = deepCopy([], this.data, this.dataPattern === 'copy');
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
                        this.$set(item, 'selected', false);
                    if (item.expanded === undefined)
                        this.$set(item, 'expanded', false);
                    if (item.iconName === undefined)
                        this.$set(item, 'iconName', 'right');
                    if (item.disabled === undefined)
                        this.$set(item, 'disabled', false);
                    tdata.push(item);
                });
            } else if (selection) {
                copyData.forEach((item) => {
                    if (item.selected === undefined)
                        this.$set(item, 'selected', false);
                    if (item.disabled === undefined)
                        this.$set(item, 'disabled', false);
                    tdata.push(item);
                });
            } else if (expand) {
                copyData.forEach((item) => {
                    if (item.expanded === undefined)
                        this.$set(item, 'expanded', false);
                    if (item.iconName === undefined)
                        this.$set(item, 'iconName', 'right');
                    tdata.push(item);
                });
            } else {
                copyData.forEach((item) => {
                    tdata.push(item);
                });
            }
            if (!copyData.length)
                this.allSel = false;
            // 固定左右列同步阴影实现方案
            if (this.fixedLeftColumns.length > 0 || this.fixedRightColumns.length > 0)
                tdata.forEach((item) => item.hover = false);

            if (value)
                tdata = tdata.slice(0, value);

            if (this.maxSize) {
                tdata = tdata.slice(this.startIndex, this.currentSize * this.maxSize);
                if (this.pattern === 'virtual')
                    this.virtualBottom = parseFloat(this.estimatedTotalHeight) - this.virtualTop;
            }

            const selectionArr = this.getSelection(this.data);
            // if (selectionArr.length !== 0)
            this.$emit('selection-change', selectionArr);

            return tdata;
        },
        handleResize() {
            if (this.layout !== 'auto') {
                setTimeout(() => {
                    // 判断是否会出现水平滚动条
                    let parentWidth;
                    parentWidth = this.$el.offsetWidth;
                    let tableWidth = this.$refs.body && this.$refs.body.offsetWidth;
                    if (parentWidth === 0) {
                        // 初始表格是隐藏的需要特殊处理的，此时上面两个值默认是0
                        let parentNode = this.$refs.root.parentNode;
                        while (parentNode && parentNode.offsetWidth === 0)
                            parentNode = parentNode.parentNode;
                        parentWidth = tableWidth = parentNode && parentNode.offsetWidth || 0;
                    }

                    // 分别获取有百分比 具体数值 和无width的column集合
                    // 获取具体数值和非数值的列集合
                    const percentColumns = [];
                    const valueColumns = [];
                    const noWidthColumns = [];
                    this.showColumns.forEach((item) => {
                        const width = item.copyWidth ? item.copyWidth + '' : undefined;
                        if (width && width.indexOf('%') !== -1)
                            percentColumns.push(item);
                        else if (width)
                            valueColumns.push(item);
                        else if (!width)
                            noWidthColumns.push(item);
                    });

                    let leaveWidth = 0;

                    // 全部都是百分数
                    if (percentColumns.length === this.showColumns.length) {
                        let sumWidth = 0;
                        this.showColumns.forEach((item) => {
                            sumWidth += parseFloat(item.copyWidth);
                        });
                        if (sumWidth !== 100) {
                            percentColumns.forEach((item) => {
                                item.currentWidth = item.copyWidth = parseFloat(item.copyWidth) / sumWidth * 100 + '%';
                            });
                        }
                    }

                    // 全部是数值的情况 并且和是小于当前的总宽度 特殊情况
                    let isAutoWidthChange = false;
                    if (valueColumns.length === this.showColumns.length) {
                        let sumWidth = 0;
                        this.showColumns.forEach((item) => {
                            sumWidth += parseFloat(item.currentWidth);
                        });
                        if (tableWidth > 0 && sumWidth < tableWidth)
                            isAutoWidthChange = true;
                    }

                    let percentWidthSum = 0;
                    percentColumns.forEach((item) => {
                        const width = parseFloat(item.copyWidth) * parentWidth / 100;
                        item.currentWidth = width;
                        percentWidthSum += width;
                    });
                    let valueWidthSum = 0;
                    valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

                    leaveWidth = parentWidth - percentWidthSum - valueWidthSum;

                    if (leaveWidth > 0 && noWidthColumns.length > 0) {
                        const width = leaveWidth / noWidthColumns.length;
                        noWidthColumns.forEach((item) => item.currentWidth = width);
                    }

                    const allWidth = !this.showColumns.some((cell) => !cell.copyWidth); // each column set a width

                    if (allWidth) {
                        this.tableWidth = this.showColumns.map((cell) => {
                            if ((cell.copyWidth + '').indexOf('%') !== -1)
                                return parseFloat(cell.copyWidth) * parentWidth / 100;
                            else{
                                cell.currentWidth = parseFloat(cell.copyWidth);
                                return parseFloat(cell.currentWidth);
                            }
                        }).reduce((a, b) => a + b, 0);
                    } else if (getStyle(this.$el, 'width') === 'auto') {
                        let parentNode = this.$el.parentNode;
                        while (getStyle(parentNode, 'width') === 'auto')
                            parentNode = parentNode.parentNode;
                        this.tableWidth = parseFloat(getStyle(parentNode, 'width')) + 'px';
                    } else
                        this.tableWidth = parseFloat(getStyle(this.$el, 'width')) + 'px';
                    // 由于百分数可能带来小数点问题，引起浮点数精度问题 典型的0.2+0.1不等于0.3问题，需要特殊处理这里的比较

                    if (parseFloat(this.tableWidth) - parentWidth <= 0) {
                        this.tableWidth = parentWidth;
                        this.isXScroll = false;
                    } else
                        this.isXScroll = Math.abs(parseFloat(this.tableWidth) - parentWidth) > 0.001;

                    this.scrollWidth = getScrollSize();
                    this.titleHeight = parseFloat(getStyle(this.$refs.title, 'height')) || 0;
                    this.headHeight = parseFloat(getStyle(this.$refs.head, 'height')) || 0;
                    const tableHeight = this.$refs.body.offsetHeight;
                    if (this.height && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.bodyHeight = this.height - this.titleHeight - this.headHeight;
                        this.isYScroll = tableHeight > this.bodyHeight;
                    } else {
                        this.bodyWidth = this.tableWidth;
                        // this.bodyHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                    }
                    if (this.maxHeight && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.fixedMaxTableHeight = this.maxBodyHeight = this.maxHeight - this.titleHeight - this.headHeight;
                        this.isYScroll = tableHeight > this.maxBodyHeight;
                    }
                    if (this.minHeight && !this.loading && this.data.length) {
                        // this.bodyWidth = parseFloat(this.tableWidth) - this.scrollWidth;
                        this.fixedMinTableHeight = this.minBodyHeight = this.minHeight - this.titleHeight - this.headHeight;
                    }
                    if (this.isXScroll)
                        this.fixedMaxTableHeight = this.fixedMaxTableHeight - this.scrollWidth;

                    if (this.loading && tableWidth > parentWidth) {
                        this.fixedTableHeight = parseFloat(getStyle(this.$refs.body, 'height')) || 0;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else if (tableWidth > parentWidth && this.bodyHeight) {
                        this.fixedTableHeight = this.bodyHeight - this.scrollWidth;
                        // this.$refs.body.parentNode.scrollLeft = (tableWidth - parentWidth) / 2;
                    } else
                        this.fixedTableHeight = this.bodyHeight;

                    this.columnsWidth = [];

                    // 在点击排序和过滤的时候 不需要再减去一次滚动条的宽度
                    // 处理有滚动条的情况下 宽度问题
                    this.showColumns.forEach((item, index) => {
                        // 存储item.currentWidth可能变化前的值，是由于如果出现水平滚动条，会导致item.currentWidth的值发生变化，
                        // 这时候，组成tbody的表格对应的col最后一个的宽度应该是本身宽度减去滚动条的宽度，不然会导致对不齐的问题出现
                        this.columnsWidth.push(item.currentWidth);
                        if (this.height && index === (this.showColumns.length - 1) && this.isYScroll) {
                            item.currentWidth = parseFloat(item.currentWidth) - this.scrollWidth;
                            item.fixedWidth = item.currentWidth;
                        }
                        if (this.maxHeight && index === (this.showColumns.length - 1) && this.isYScroll) {
                            item.currentWidth = parseFloat(item.currentWidth) - this.scrollWidth;
                            item.fixedWidth = item.currentWidth;
                        }
                    });
                });
            }
        },
        select(option, column, index) {
            this.$refs.popper && this.$refs.popper.forEach((item) => item.toggle(false));
            column.selectValue = option.value;
            this.defaultFilter.title = column.title;
            this.defaultFilter.value = option.value;
            this.defaultFilter.column = column;
            // 需要考虑数据为空 进行过滤 异步加载数据的情况
            this.filterTdata = this.tdata = this.copyTdata.filter((item) => {
                if (column.filterMethod)
                    return column.filterMethod(option.value, item[column.label], item, column);
                else
                    return item[column.label] === option.value;
            });
            if (this.pattern === 'limit')
                this.tdata = this.tdata.slice(0, this.limit);

            this.$emit('filter-change', {
                column,
                value: option.value,
                index,
            });
        },
        /**
         * 选中或者取消事件
         * @param {row} 当前选中行数据
         */
        changeSelect(row) {
            const selection = this.getSelection();
            if (row.selected)
                this.$emit('select', selection);
            else
                this.$emit('select-cancel', selection);

            this.$emit('selection-change', selection);
        },
        rowClick(row, index) {
            if (this.radioColumn && !row.disabled) {
                // 单选按钮存在的情况下要满足点击行能整个选中
                this.currentRadioValue = row[this.radioValueField];
            }
            this.$emit('row-click', {
                data: row,
                index,
            });
        },
        onResize() {
            this.handleResize();
        },
        translateTime(value, format) {
            if (!value)
                return this.defaultText;
            const self = this;
            const maps = {
                YYYY(date) {
                    return date.getFullYear();
                },
                MM(date) {
                    return self.fixDate(date.getMonth() + 1);
                },
                DD(date) {
                    return self.fixDate(date.getDate());
                },
                HH(date) {
                    return self.fixDate(date.getHours());
                },
                mm(date) {
                    return self.fixDate(date.getMinutes());
                },
                ss(date) {
                    return self.fixDate(date.getSeconds());
                },
            };
            const date = new Date(value);
            const pattern = new RegExp(Object.keys(maps).join('|'), 'g');
            return format.replace(pattern, (capture) => maps[capture] ? maps[capture](date) : '');
        },
        fixDate(value) {
            value = '' + value;
            return value.length <= 1 ? '0' + value : value;
        },
        onMouseWheel(e) {
            const direction = e.wheelDelta / 120 > 0 ? -1 : 1;
            const parentWidth = this.$refs.root.offsetWidth;
            const tableWidth = this.$refs.body.offsetWidth;
            const diffWidth = tableWidth - parentWidth;
            if (tableWidth > parentWidth && this.over) {
                e.preventDefault();
                if (this.$refs.body.parentNode.scrollLeft >= diffWidth && direction === 1)
                    this.$refs.body.parentNode.scrollLeft = diffWidth;
                else if (this.$refs.body.parentNode.scrollLeft < 0 && direction === -1)
                    this.$refs.body.parentNode.scrollLeft = 0;
                else if (direction === -1)
                    this.$refs.body.parentNode.scrollLeft += -50;
                else
                    this.$refs.body.parentNode.scrollLeft += 50;
            }
        },
        mouseenter() {
            this.over = true;
        },
        mouseleave() {
            this.over = false;
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
            this.handleResize();
            this.$emit('toggle-expand', {
                index,
                direction: copyRowData.iconName,
                row: copyRowData,
            });
        },
        bodyScroll(e) {
            this.$refs.head.scrollLeft = e.target && e.target.scrollLeft;
            if (this.fixedLeftColumns.length > 0)
                this.$refs.lefttable.scrollTop = e.target.scrollTop;
            if (this.fixedRightColumns.length > 0)
                this.$refs.righttable.scrollTop = e.target.scrollTop;
            this.$refs.popper && this.$refs.popper[0] && this.$refs.popper[0].toggle(false);
            if (this.maxSize) {
                const scrollTop = +e.target.scrollTop;
                const clientHeight = +e.target.clientHeight;
                const scrollHeight = +e.target.scrollHeight;
                if (this.pattern === 'virtual') {
                    // 虚拟滚动模式加载表格数据
                    const distanceItem = Math.floor(scrollTop / this.estimatedItemHeight);
                    this.startIndex = distanceItem > 2 * this.maxSize ? distanceItem - 2 * this.maxSize : 0;
                    let endIndex = this.startIndex + distanceItem + this.maxSize * this.currentSize + 1;
                    endIndex = endIndex > this.data.length ? this.data.length : endIndex;
                    this.virtualTop = this.startIndex * this.estimatedItemHeight;
                    this.virtualBottom = this.estimatedTotalHeight > this.virtualTop ? parseFloat(this.estimatedTotalHeight) - this.virtualTop : 0;
                    this.tdata = this.copyTdata.slice(this.startIndex, endIndex);
                    console.log(this.startIndex, distanceItem, endIndex, this.virtualBottom);
                } else {
                    // 懒加载模式加载表格数据
                    if (scrollTop + clientHeight >= scrollHeight) {
                        this.currentSize += 2;
                        this.tdata = this.copyTdata.slice(0, this.maxSize * this.currentSize);
                        this.$emit('scroll-end');
                    }
                }
            }
        },
        fixmouseenter(value) {
            if (value === -1) {
                this.fixedHover = true;
                this.$emit('mouseenter', {
                    index: 0,
                });
            } else {
                const obj = this.tdata[value];
                obj.hover = true;
                this.tdata.splice(value, 1, obj);
                this.$emit('mouseenter', {
                    index: value,
                });
            }
        },
        fixmouseleave(value) {
            if (value === -1) {
                this.fixedHover = false;
                this.$emit('mouseleave', {
                    index: 0,
                });
            } else {
                const obj = this.tdata[value];
                obj.hover = false;
                this.tdata.splice(value, 1, obj);
                this.$emit('mouseleave', {
                    index: value,
                });
            }
        },
        showAll() {
            const filterValue = this.defaultFilter.value;
            if (this.defaultFilter.value) {
                this.tdata = this.copyTdata.filter((item) => {
                    const filterColumn = this.defaultFilter.column;
                    if (filterColumn.filterMethod)
                        return filterColumn.filterMethod(filterValue, item[filterColumn.label], item, filterColumn);
                    else
                        return item[filterColumn.label] === filterValue;
                });
            } else
                this.tdata = this.copyTdata;
        },
        showLimit() {
            this.tdata = this.tdata.slice(0, this.limit);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize, false);
        if (this.addMousewheel)
            document.removeEventListener('mousewheel', this.onMouseWheel, false);
    },
};

export { UOldTableViewCell } from './cell.vue';
export { UOldTableViewColumn } from './column.vue';

export default UOldTableView;
