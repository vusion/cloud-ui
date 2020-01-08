export const UTreeViewText = {
    name: 'u-tree-view-text',
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object,
    },
    render(h) {
        const rootVM = this.$parent.rootVM;
        if (rootVM.$scopedSlots.text) {
            return rootVM.$scopedSlots.text({
                data: this.data,
                text: this.text,
                value: this.value,
                expanded: this.expanded,
                checked: this.checked,
                disabled: this.disabled,
                node: this.node,
            });
        } else if (rootVM.$slots.text)
            return rootVM.$slots.text[0];
        else
            return h('span', this.text);
    },
};

export default UTreeViewText;
