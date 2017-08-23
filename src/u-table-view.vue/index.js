import Style from '../util/style.js';
import Utils from '../util/utils.js';
import uPopover from '../u-popover.vue';

export default {
    name: 'u-table-view',
    props: {
        title: String,
        data: Array,
        allChecked: { type: Boolean, default: false },
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
            popvisible: false,
            copyTdata: [], // tdata的复制版本主要用来过滤
        };
    },
    mounted() {
        this.tdata = this.initTableData();
        this.copyTdata = this.initTableData();
        this.handleResize();
        // this.setScopeSlot();
    },
    watch: {
        data(newValue) {
            this.tdata = this.initTableData();
            this.copyTdata = this.initTableData();
            this.handleResize();
            // this.setScopeSlot();
        },
    },
    components: {
        uPopover,
    },
    methods: {
        add(item) {
            this.columns.push(item);
        },
        remove(item) {
            const index = this.columns.indexOf(item);
            ~index && this.columns.splice(index, 1);
        },
        setCellWidth(column, index) {
            // debugger;
            // console.log(index);
            let width = '';
            if (column.width)
                width = column.width;
            else if (this.columnsWidth[index])
                width = this.columnsWidth[index].width;

            // when browser has scrollBar,set a width to resolve scroll position bug
            if (width === '0')
                width = '';
            return width;
        },
        handleSort(type, column) {
            // console.log(type);
            // debugger;
            const order = type === 'asc' ? -1 : 1;
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
            column.sortoperate = type;
        },
        allSelected() {
            const flag = this.allSel;
            const copydata = this.tdata.concat();
            copydata.forEach((item) => {
                item.selected = flag;
            });
            this.tdata = copydata;
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
            return tdata;
        },
        handleResize() {
            this.$nextTick(() => {
                const allWidth = !this.columns.some((cell) => !cell.width); // each column set a width
                if (allWidth)
                    this.tableWidth = this.columns.map((cell) => cell.width).reduce((a, b) => a + b);
                else
                    this.tableWidth = parseInt(Style.getStyle(this.$el, 'width')) - 1;
                this.columnsWidth = [];
                this.$nextTick(() => {
                    if (this.data.length) {
                        const $td = this.$refs.body.querySelectorAll('tbody tr')[0].querySelectorAll('td');
                        for (let i = 0; i < $td.length; i++) {
                            const column = this.columns[i];
                            let width;
                            if (column.width)
                                width = column.width;
                            else
                                width = parseInt(Style.getStyle($td[i], 'width'));

                            this.columnsWidth.push(width);
                            // this.columnsWidth[i].width = width;
                        }
                    }
                });
            });
        },
        select(option, column) {
            column.selectValue = option.value;
            this.popvisible = false;
            this.tdata = this.copyTdata.filter((item) => column.filterMethod(option.value, item[column.label], item, column));
        },
        setScopeSlot(column, row) {
            column.row = row;
            if (column.$slots && column.$slots.default) {
                column.$slots.default(row);
                return column.$slots;
            } else if (column.$scopedSlots && column.$scopedSlots.default) {
                column.$scopedSlots.default(row);
                return column.$scopedSlots;
            }
        },
    },
};
