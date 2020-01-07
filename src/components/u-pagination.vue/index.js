export const UPagination = {
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11, validator: (value) => Number.isInteger(value) && value >= 0 },
        page: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value > 0 },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
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
        pages() {
            const pages = [];

            const part = this.around >> 1;
            let start = this.currentPage - part;
            let end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.total) {
                start -= end - this.total;
                end = this.total;
            }

            start = Math.max(1, Math.min(start, this.total - this.side + 1));
            end = Math.min(this.total, Math.max(end, this.side));

            let page = 1;
            while (page <= this.total) {
                if (page <= this.side || (page >= start && page <= end) || page > this.total - this.side)
                    pages.push(page);
                else {
                    pages.push(undefined);

                    if (page < start)
                        page = start - 1;
                    if (page > end)
                        page = this.total - this.side;
                }

                page++;
            }

            return pages;
        },
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.total || page === this.currentPage)
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
    },
};

export default UPagination;
