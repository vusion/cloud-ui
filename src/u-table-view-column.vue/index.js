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
    },
    mixins: [Emitter],
    data() {
        return {
            index: 0,
            sortoperate: '',
            selectValue: this.value,
            row: {},
            visible: false,
            parentVM: undefined,
        };
    },
    watch: {
        value(newValue) {
            this.selectValue = newValue;
        },
    },
    // beforeCreate() {
    //     this.$parent.add(this);
    // },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    mounted() {
        this.index = this.$parent.columns.indexOf(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
};
