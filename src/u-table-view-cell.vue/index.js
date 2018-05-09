export default {
    name: 'u-table-view-cell',
    props: {
        row: Object,
        column: Object,
        expand: { type: Boolean, default: false },
    },
    render(h) {
        let vnode = null;
        if (this.expand) {
            if (this.column.$slots.expandContent)
                vnode = this.column.$slots.expandContent;
            else if (this.column.$scopedSlots.expandContent)
                vnode = this.column.$scopedSlots.expandContent;
        } else {
            if (this.column.$scopedSlots.default)
                vnode = this.column.$scopedSlots.default;
            else
                vnode = this.column.$slots.default;
        }
        return h('div', {
            class: {
                expand: this.expand,
            },
        }, [
            typeof vnode === 'object' ? vnode : vnode({
                row: this.row,
            }),
        ]);
    },
};
