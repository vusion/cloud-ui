import i18n from './i18n';

export const UPagination = {
    name: 'u-pagination',
    i18n,
    props: {
        total: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value >= 0 },
        page: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value > 0 },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        totalItems: Number,
        pageSize: { type: Number, default: 20 },
        pageSizeOptions: { type: Array, default() { return [10, 20, 50]; } },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: false },
        showJumper: { type: Boolean, default: false },
        simple: { type: Boolean, default: false },
    },
    data() {
        return {
            currentPage: this.page,
            currentPageSize: this.pageSize,
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
        pages() {
            const pages = [];

            const part = this.around >> 1;
            let start = this.currentPage - part;
            let end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.currentTotalPage) {
                start -= end - this.currentTotalPage;
                end = this.currentTotalPage;
            }

            start = Math.max(1, Math.min(start, this.currentTotalPage - this.side + 1));
            end = Math.min(this.currentTotalPage, Math.max(end, this.side));

            let page = 1;
            while (page <= this.currentTotalPage) {
                if (page <= this.side || (page >= start && page <= end) || page > this.currentTotalPage - this.side)
                    pages.push(page);
                else {
                    pages.push(undefined);

                    if (page < start)
                        page = start - 1;
                    if (page > end)
                        page = this.currentTotalPage - this.side;
                }

                page++;
            }

            return pages;
        },
        currentTotalPage() {
            if (this.totalItems)
                return Math.ceil(this.totalItems / this.currentPageSize);
            else
                return this.total;
        },
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.currentTotalPage || page === this.currentPage)
                return;

            const oldPage = this.currentPage;

            let cancel = false;
            this.$emit('before-select', {
                page,
                oldPage,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentPage = page;

            this.$emit('update:page', page, this);
            this.$emit('select', {
                page,
                oldPage,
            }, this);
        },
        onChange(page, oldPage) {
            if (this.readonly || this.disabled)
                return;
            // if (page === oldPage)
            //     return;

            this.currentPage = page;
        },
        onSelectPageSize($event) {
            if (this.readonly || this.disabled)
                return;

            this.$emit('update:page-size', $event.value, this);
            this.$emit('change-page-size', {
                pageSize: $event.value,
                oldPageSize: $event.oldValue,
                pageSizeOptions: this.pageSizeOptions,
            }, this);
        },
    },
};

export default UPagination;
