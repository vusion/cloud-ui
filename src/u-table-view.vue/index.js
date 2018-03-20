import { getStyle, getScrollSize } from '../base/utils/style';
import { ellipsisTitle } from 'proto-ui.vusion/src/base/directives';

export default {
    name: 'u-table-view',
    props: {
        title: String,
        data: Array,
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
        noDataText: { type: String, default: '暂无数据' },
        loading: { type: Boolean, default: false },
        height: [String, Number],
        layout: {
            type: String,
            default: 'fixed',
        },
        border: { type: Boolean, default: false },
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
            copyTdata: [], // tdata的复制版本主要用来过滤
            tableWidth: undefined, // display值为none的时候需要特殊处理这个值
            bodyHeight: undefined,
            bodyWidth: undefined, // 当出现垂直滚动条的时候，需要减去滚动条的宽度，确保不会出现水平滚动条
            scrollWidth: undefined,
        };
    },
    directives: { ellipsisTitle },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.columns.push(itemVM);
        });
    },
    mounted() {
        this.tdata = this.initTableData();
        this.copyTdata = this.initTableData();
        this.fixedHeader();
        this.handleResize();
        window.addEventListener('resize', this.onResize, false);
    },
    watch: {
        data(newValue) {
            this.tdata = this.initTableData();
            this.copyTdata = this.initTableData();
            this.handleResize();
        },
        allChecked(newValue) {
            this.allSel = newValue;
        },
    },
    methods: {
        remove(item) {
            const index = this.columns.indexOf(item);
            ~index && this.columns.splice(index, 1);
        },
        setCellWidth(column, index) {
            let width = '';
            if (column.currentWidth)
                width = column.currentWidth;
            else if (this.columnsWidth[index])
                width = this.columnsWidth[index].width;

            // when browser has scrollBar,set a width to resolve scroll position bug
            if (width === '0')
                width = '';
            return width;
        },
        handleSort(column) {
            if (column.sortable) {
                if (column.title === this.defaultSort.title)
                    this.defaultSort.order = this.defaultSort.order === 'asc' ? 'desc' : 'asc';
                else {
                    this.defaultSort.title = column.title;
                    this.defaultSort.order = 'desc';
                }
                const order = this.defaultSort.order === 'asc' ? -1 : 1;
                const label = column.label;
                if (column.sortMethod)
                    this.tdata.sort((value1, value2) => column.sortMethod(value1[label], value2[label]) ? order : -order);
                else {
                    this.tdata.sort((value1, value2) => {
                        if (value1[label] === value2[label])
                            return 0;
                        return value1[label] < value2[label] ? order : -order;
                    });
                }
                this.$emit('sort-change', {
                    column,
                    label,
                    order: this.defaultSort.order,
                });
            }
        },
        getSelection() {
            const selectionIndexes = [];
            this.tdata.forEach((row, index) => {
                if (row.selected)
                    selectionIndexes.push(index);
            });
            if (selectionIndexes.length === this.tdata.length)
                this.allSel = true;
            else
                this.allSel = false;
            this.$emit('update:allChecked', this.allSel);
            return this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1);
        },
        allSelected() {
            const flag = this.allSel;
            const copydata = this.tdata.concat();
            copydata.forEach((item) => {
                item.selected = flag;
            });
            this.tdata = copydata;
            const selection = this.getSelection();
            if (flag)
                this.$emit('select-all', selection);

            this.$emit('selection-change', selection);
        },
        initTableData() {
            const tdata = [];
            const selection = this.columns && this.columns.some((item) => item.type && item.type === 'selection');
            if (selection) {
                this.data.forEach((item) => {
                    item.selected = false;
                    tdata.push(item);
                });
            } else {
                this.data.forEach((item) => {
                    tdata.push(item);
                });
            }
            if (!this.data.length)
                this.allSel = false;
            return tdata;
        },
        handleResize() {
            if (this.layout !== 'auto') {
                this.$nextTick(() => {
                    if (getStyle(this.$el, 'width') === 'auto') {
                        let parentNode = this.$el.parentNode;
                        while (getStyle(parentNode, 'width') === 'auto')
                            parentNode = parentNode.parentNode;
                        this.tableWidth = parseInt(getStyle(parentNode, 'width')) + 'px';
                    } else
                        this.tableWidth = parseInt(getStyle(this.$el, 'width')) + 'px';

                    if (this.height) {
                        this.scrollWidth = getScrollSize();
                        this.bodyWidth = parseInt(this.tableWidth) - this.scrollWidth;
                    } else
                        this.bodyWidth = this.tableWidth;

                    this.columnsWidth = [];
                    this.$nextTick(() => {
                        let tdColls = [];
                        if (this.data.length) {
                            tdColls = this.$refs.body.querySelectorAll('tbody tr:first-child td');
                            for (let i = 0; i < tdColls.length; i++) {
                                const column = this.columns[i];
                                let width;
                                if (column.currentWidth)
                                    width = column.currentWidth;
                                else
                                    width = getStyle(tdColls[i], 'width') && getStyle(tdColls[i], 'width') !== 'auto' && getStyle(tdColls[i], 'width') !== null ? parseInt(getStyle(tdColls[i], 'width')) : '';

                                if (this.height && i === (this.columns.length - 1))
                                    this.columns[i].currentWidth = width - this.scrollWidth;

                                this.columnsWidth.push(width);
                            }
                        }
                    });
                });
            }
        },
        select(option, column, index) {
            column.selectValue = option.value;
            this.tdata = this.copyTdata.filter((item) => column.filterMethod(option.value, item[column.label], item, column));
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
        fixedHeader() {
            if (this.height) {
                this.$nextTick(() => {
                    const titleHeight = parseInt(getStyle(this.$refs.title, 'height')) || 0;
                    const headHeight = parseInt(getStyle(this.$refs.head, 'height')) || 0;
                    this.bodyHeight = this.height - titleHeight - headHeight;
                });
            }
        },
        rowClick(row, index) {
            this.$emit('row-click', {
                data: row,
                index,
            });
        },
        onResize() {
            this.fixedHeader();
            this.handleResize();
        },
        translateTime(value, format) {
            const maps = {
                YYYY: (date) => date.getFullYear(),
                MM: (date) => this.fix(date.getMonth() + 1),
                DD: (date) => this.fix(date.getDate()),
                HH: (date) => this.fix(date.getHours()),
                mm: (date) => this.fix(date.getMinutes()),
                ss: (date) => this.fix(date.getSeconds()),
            };

            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            format = format || 'YYYY-MM-DD HH:mm:ss';
            value = new Date(value);

            return format.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        fix(value) {
            value = '' + value;
            return value.length <= 1 ? '0' + value : value;
        },
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize, false);
    },
};
