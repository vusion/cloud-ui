export default {
    name: 'u-table-cell',
    props: {
        row: Object,
    },
    render(h) {
        return h('div', this.$slots.default);
    },
};
