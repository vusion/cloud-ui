import { MEmitter } from 'proto-ui.vusion';

export const UResizeTableColumn = {
    name: 'u-resize-table-column',
    parentName: 'u-resize-table',
    mixins: [MEmitter],
    props: {
        move: {
            type: Boolean,
            default: true,
        },
        title: String,
        label: String,
        width: [Number, String],
        // 最小宽度是指 移动时候列的最小宽度
        minWidth: {
            type: [Number, String],
            default: 46,
        },
        filterMaxWidth: [String, Number], // 列的最大宽度是指移动的时候列的最大宽度 并不是指列的最大宽度，含义有缺别 设置列的最大宽度，暂时只支持数字形式
        headSelection: { type: Boolean, default: true }, // 可以实现表格头部没有checkbox的特殊需求
        ellipsis: { type: Boolean, default: false },
        type: { type: String, default: 'normal' }, // 表格列的类型有selection,filter,sortable,normal,time,expand 6种类型
        timeFormat: { type: String, default: 'YYYY-MM-DD HH:mm:ss' }, // 自定义日期显示格式
        options: Array,
        value: [String, Number, Boolean],
        field: { type: String, default: 'text' },
        filter: Function, // 定义过滤器函数
        icon: String, // 表头有提示信息的
        iconContent: String,
        iconPlacement: {
            type: String,
            default: 'bottom',
        },
        expandIcon: { type: String, default: 'right-down', validator: (value) => ['up-down', 'right-down'].includes(value) },
        expandStrict: { type: Boolean, default: false }, // 开启expand严格匹配模式， 只有对应的label字段有值才显示icon
        expandLabel: String, // 配合expand模式使用，可能出现字段组合的情况
        expandClass: String, // 自定义expand的icon样式
        defaultText: { type: String, default: '-' }, // 无数据显示内容
        sortMethod: Function,
        sortRemoteMethod: Function,
        filterMethod: Function,
        visible: { type: Boolean, default: true }, // 特殊业务场景下某些列的展示需要根据条件来判断
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    data() {
        return {
            currentWidth: this.getWidth(),
            copyWidth: this.getWidth(), // 在第二个表格中由于滚动条的原因 需要有一个特殊的值表示其宽度区别于第一个表格
            digitWidth: undefined, // 数值宽度，会在resizetable mounted钩子函数中计算
            parentVM: null,
            selectValue: this.value,
            row: {},
        };
    },
    computed: {
        currentEllipsis() {
            return this.parentVM.ellipsis || this.ellipsis;
        },
        currentMinWidth() {
            if ((this.type === 'sortable' || this.type === 'filter' || this.icon) && this.minWidth === 46)
                return 66;
            else
                return parseFloat(this.minWidth);
        },
    },
    watch: {
        width(newValue) {
            this.currentWidth = this.digitWidth = newValue;
            // 触发resizeTable重新计算布局
            this.parentVM.handleSize();
        },
        value(newValue) {
            this.selectValue = newValue;
        },
        selectValue(newValue) {
            this.$emit('update:value', newValue);
        },
        type() {
            // 使用v-if的时候会复用现有的元素，这时候会存在类型变化的情况，导致宽度变化，需要特殊处理初始化宽度大小
            this.currentWidth = this.copyWidth = this.getWidth();
        },
    },
    methods: {
        getWidth(value) {
            if (this.type === 'selection' && !this.title)
                return value || this.width || 46;
            else if (this.type === 'expand')
                return value || this.width || 50;
            else
                return value || this.width;
        },
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};

export default UResizeTableColumn;
