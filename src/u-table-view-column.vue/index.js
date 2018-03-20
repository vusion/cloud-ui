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
        timeFormat: {
            type: String,
            default: 'YYYY-MM-DD HH:mm:ss',
        },
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
        };
    },
    watch: {
        value(newValue) {
            this.selectValue = newValue;
        },
        width(newValue) {
            this.currentWidth = this.getWidth(newValue);
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
            else
                return value || this.width;
        },
    },
    destroyed() {
        this.$parent.remove(this);
    },
};
