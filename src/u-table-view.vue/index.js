import Utils from '../util/style.js';

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
        };
    },
    mounted() {
        this.tdata = this.initTableData();
        this.handleResize();
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
                    this.tableWidth = parseInt(Utils.getStyle(this.$el, 'width')) - 1;
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
                                width = parseInt(Utils.getStyle($td[i], 'width'));

                            this.columnsWidth.push(width);
                            // this.columnsWidth[i].width = width;
                        }
                    }
                });
            });
        },
    },
};
