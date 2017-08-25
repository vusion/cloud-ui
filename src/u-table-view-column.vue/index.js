export default {
    name: 'u-table-view-column',
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
            default: 'bottom-end',
        },
    },
    data() {
        return {
            index: 0,
            sortoperate: '',
            selectValue: this.value,
            row: {},
        };
    },
    methods: {
        renderCell(row) {
            if (this.$scopedSlots.default)
                return `<div>${this.$scopedSlots.default(row)}</div>`;
            else
                return `<div>${this.$slots.default()}</div>`;
        },
    },
    watch: {
        value(newValue) {
            this.selectValue = newValue;
        },
    },
    beforeCreate() {
        this.$parent.add(this);
    },
    mounted() {
        this.index = this.$parent.columns.indexOf(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
};
