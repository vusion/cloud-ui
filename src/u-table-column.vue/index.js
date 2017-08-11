export default {
    name: 'u-table-column',
    props: {
        title: String,
        sortable: { type: Boolean, default: false },
        selectable: { type: Boolean, default: false },
        options: Array,
        value: [String, Number, Boolean],
        label: String,
        type: String,
        width: String,
        minWidth: { type: [String, Number], default: '80' },
    },
    data() {
        return {
            index: 0,
        };
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
