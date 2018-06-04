export default {
    name: 'u-table',
    props: {
        page: {
            type: Boolean,
            default: false,
        },
        total: { type: Number, default: 1 },
        pageNum: { type: Number, default: 1 },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        align: { type: String, default: 'right' },
    },
    data() {
        return {
            currentPage: this.pageNum,
        };
    },
    watch: {
        pageNum(value) {
            this.currentPage = value;
        },
        currentPage(value) {
            this.$emit('change', value);
        },
    },
};
