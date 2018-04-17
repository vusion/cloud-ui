import { Emitter } from 'proto-ui.vusion';
export default {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    props: {
        title: String,
        sortable: { type: Boolean, default: false },
        filter: { type: Boolean, default: false },
        options: Array,
        value: [String, Number, Boolean],
        label: String,
        type: String,
        width: String,
        minWidth: { type: [String, Number], default: '80' },
        formatter: Function,
        sortMethod: Function,
        filterMethod: Function,
        placement: {
            type: String,
            default: 'bottom-start',
        },
        // tooltip: { type: Boolean, default: false },
        ellipsis: { type: Boolean, default: false },
        timeFormat: { type: String, default: 'YYYY-MM-DD HH:mm:ss' },
        fixed: { type: String, validator: (value) => ['left', 'right'].includes(value) },
    },
    mixins: [Emitter],
    data() {
        return {
            // index: 0,
            // sortoperate: '',
            selectValue: this.value,
            row: {},
            visible: false,
            parentVM: undefined,
            currentWidth: this.getWidth(),
            copyWidth: this.getWidth(),
            widthPercent: undefined, // 用来处理resize情况下 已经有currentWidth 不会变化的情况
            fixedWidth: undefined, // 当表格高度固定和表格列固定一起使用的时候，这时候有的列的宽度需要特殊做处理，这时候在固定右列的时候，宽度需要时原来的正常宽度，不能减去滚动条的宽度
        };
    },
    watch: {
        value(newValue) {
            this.selectValue = newValue;
        },
        width(newValue) {
            this.currentWidth = this.copyWidth = this.getWidth(newValue);
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    mounted() {
        this.index = this.$parent.columns.indexOf(this);
    },
    methods: {
        getWidth(value) {
            if (this.type === 'selection')
                return value || this.width || 35;
            else if (this.type === 'expand')
                return value || this.width || 50;
            else if (this.type === 'time')
                return value || this.width || 160;
            else
                return value || this.width;
        },
    },
    destroyed() {
        this.$parent.remove(this);
    },
};
