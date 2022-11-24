<script>
export default {
    name: 'f-slot',
    functional: true,
    props: {
        vm: null,
        name: String,
        props: Object,
        catchError: { type: Boolean, default: true },
    },
    render(h, context) {
        let { vm, name, props, catchError } = context.props;
        vm = vm || vm.context.parent; // @TODO: 可能不太对，需要验证一下
        const scopedSlot = vm.$scopedSlots[name];
        const slot = vm.$slots[name];
        if (scopedSlot) {
            try {
                // u-table-view-coloumn的scope插槽里再放入u-table-view-coloumn
                // u-tree-view-node的text scope 插槽里再放入u-tree-view-node
                // 会导致死循环，增加过滤判断
                const scopedSlotValues = scopedSlot(props);
                const newScopeValue = [];
                scopedSlotValues.forEach((scopeValue) => {
                    if (scopeValue.tag !== vm.$vnode.tag) {
                        newScopeValue.push(scopeValue);
                    }
                });
                return newScopeValue;
            } catch (e) {
                if (catchError)
                    return h('div', e.message || e);
                else
                    throw e;
            }
        } else if (slot)
            return slot;
        else
            return context.children;
    },
};
</script>
