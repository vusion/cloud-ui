import manager from '../f-draggable.vue/manager';

export const FDroppable = {
    name: 'f-droppable',
    props: {
        target: { type: [String, HTMLElement, Function], default: 'self', validator: (value) => {
            if (typeof value !== 'string')
                return true;
            else
                return ['self', 'parent', '$parent', 'context-parent', 'prev', 'next'].includes(value);
        } },
        disabled: { type: Boolean, default: false },
    },
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    data() {
        return {
            targetEl: undefined,
        };
    },
    watch: {
        disabled(disabled) {
            this.watchDisabled(disabled);
        },
    },
    created() {
        manager.droppables.push(this);
    },
    mounted() {
        this.targetEl = this.getTargetEl();
        this.watchDisabled(this.disabled);
    },
    destroyed() {
        manager.droppables.splice(manager.droppables.indexOf(this), 1);
    },
    methods: {
        watchDisabled(disabled) {
            if (disabled)
                this.targetEl.removeAttribute && this.targetEl.removeAttribute('droppable');
            else
                this.targetEl.setAttribute && this.targetEl.setAttribute('droppable', 'droppable');
        },
        getTargetEl() {
            if (this.target instanceof HTMLElement)
                return this.target;
            else if (this.target instanceof Function)
                return this.target(this.$el);
            else if (this.$el) {
                if (this.target === 'self')
                    return this.$el;
                else if (this.target === 'parent')
                    return this.$el.parentElement;
                else if (this.target === '$parent')
                    return this.$parent.$el;
                else if (this.target === 'offset-parent')
                    return this.$el.offsetParent;
                else if (this.target === 'context-parent') {
                    // 求上下文中的 parent
                    if (this.$parent === this.$vnode.context)
                        return this.$el.parentElement;

                    // Vue 的 vnode.parent 没有连接起来，需要自己找，不知道有没有更好的方法
                    let parentVNode = this.$parent._vnode;
                    while (parentVNode && !parentVNode.children.includes(this.$vnode))
                        parentVNode = parentVNode.children.find((child) => child.elm.contains(this.$el));
                    // if (!parentVNode)
                    if (parentVNode.context === this.$vnode.context)
                        return parentVNode.elm;

                    // 否则，找第一个上下文一致的组件
                    let parentVM = this.$parent;
                    while (parentVM && parentVM.$vnode.context !== this.$vnode.context)
                        parentVM = parentVM.$parent;
                    return parentVM.$el;
                } else if (this.target === 'prev')
                    return this.$el.previousElementSibling;
                else if (this.target === 'next')
                    return this.$el.nextElementSibling;
            }
        },
        dragEnter(originVM) {
            const targetEl = this.targetEl;
            targetEl.setAttribute('droppable-target', 'droppable-target');

            let cancel = false;
            this.$emit('dragenter', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                preventDefault: () => cancel = true,
            }, manager), this);

            if (cancel)
                return originVM.cancel();
        },
        dragLeave(originVM) {
            const targetEl = this.targetEl;
            targetEl.removeAttribute('droppable-target');

            let cancel = false;
            this.$emit('dragleave', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                preventDefault: () => cancel = true,
            }, manager), this);

            if (cancel)
                return originVM.cancel();
        },
        dragOver(originVM) {
            const targetEl = this.targetEl;
            const rect = targetEl.getBoundingClientRect();

            let cancel = false;
            this.$emit('dragover', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                ratioX: (manager.clientX - rect.left) / rect.width,
                ratioY: (manager.clientY - rect.top) / rect.height,
                preventDefault: () => cancel = true,
            }, manager), this);

            if (cancel)
                return originVM.cancel();
        },
        drop(originVM) {
            const targetEl = this.targetEl;
            targetEl.removeAttribute('droppable-target');
            const rect = targetEl.getBoundingClientRect();

            this.$emit('drop', Object.assign({
                originVM,
                sourceEl: originVM.$el,
                targetEl,
                ratioX: (manager.clientX - rect.left) / rect.width,
                ratioY: (manager.clientY - rect.top) / rect.height,
            }, manager), this);
        },
    },
};

export default FDroppable;
