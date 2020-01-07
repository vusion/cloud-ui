import i18n from './i18n';
import UPagination from '../u-pagination.vue';
export const UComboPagination = {
    name: 'u-combo-pagination',
    i18n,
    props: {
        ...UPagination.props,
        totalItems: Number,
        pageSize: { type: Number, default: 20 },
        pageSizeOptions: { type: Array, default() { return [10, 20, 50]; } },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: false },
        showJumper: { type: Boolean, default: false },
    },
    data() {
        return {
            currentPage: this.page,
        };
    },
    watch: {
        page(page) {
            this.currentPage = page;
        },
        currentPage(page, oldPage) {
            this.$emit('change', { page, oldPage }, this);
        },
    },
    computed: {
        currentTotalPage() {
            if (this.totalItems)
                return Math.ceil(this.totalItems / this.pageSize);
            else
                return this.total;
        },
    },
    methods: {
        onChange(page, oldPage) {
            if (page === oldPage)
                return;

            this.currentPage = page;
        },
        onSelectPageSize($event) {
            this.$emit('update:page-size', $event.value, this);
            this.$emit('change-page-size', {
                pageSize: $event.value,
                oldPageSize: $event.oldValue,
                pageSizeOptions: this.pageSizeOptions,
            }, this);
        },
    },
};

export default UComboPagination;
