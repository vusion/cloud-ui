export default {
    name: 'u-table-view-cell',
    props: {
        row: Object,
        column: Object,
    },
    render(h) {
        return h('div', [
            this.column.$scopedSlots.default({
                row: this.row,
            }),
        ]);
    },
};
