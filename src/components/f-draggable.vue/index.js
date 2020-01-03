import Vue from 'vue';
import manager from './manager';

export const FDraggable = {
    name: 'f-draggable',
    props: {
        value: null,
        source: { type: [String, HTMLElement, Function], default: 'self', validator: (value) => {
            if (typeof value !== 'string')
                return true;
            else
                return ['self', 'parent', '$parent', 'offset-parent', 'context-parent', 'prev', 'next'].includes(value);
        } },
        transfer: { type: [String, HTMLElement], default: 'clone', validator: (value) => {
            if (typeof value !== 'string')
                return true;
            else
                return ['self', 'parent', 'clone'].includes(value);
        } },
        immediate: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        constraint: Function,
    },
    render(h) {
        return this.$slots.default ? this.$slots.default[0] : h('div');
    },
    data() {
        return {
            sourceEl: undefined,
        };
    },
    watch: {
        disabled(disabled) {
            this.watchDisabled(disabled);
        },
    },
    mounted() {
        this.sourceEl = this.getSourceEl();

        // 虽然 Vue 中一般子组件比父组件先 mounted，
        // 但这里必须放到 mounted。不然可能在 v-if 的情况下出不来。。
        /* eslint-disable consistent-this */
        const parentVM = this;
        this.childVM = new Vue({
            name: 'f-draggable-child',
            parent: parentVM,
            render(h) { return parentVM.$slots.transfer && parentVM.$slots.transfer[0]; },
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        this.watchDisabled(this.disabled);
        this.sourceEl.addEventListener('mousedown', this.onMouseDown);
    },
    beforeUpdate() {
        this.childVM.$forceUpdate();
    },
    beforeDestroy() {
        this.sourceEl && this.sourceEl.removeEventListener('mousedown', this.onMouseDown);
        this.childVM = this.childVM && this.childVM.$destroy();
    },
    methods: {
        watchDisabled(disabled) {
            if (disabled)
                this.sourceEl.removeAttribute && this.sourceEl.removeAttribute('draggable');
            else
                this.sourceEl.setAttribute && this.sourceEl.setAttribute('draggable', 'draggable');
        },
        getSourceEl() {
            if (this.source instanceof HTMLElement)
                return this.source;
            else if (this.source instanceof Function)
                return this.source(this.$el);
            else if (this.$el) {
                if (this.source === 'self')
                    return this.$el;
                else if (this.source === 'parent')
                    return this.$el.parentElement;
                else if (this.source === '$parent')
                    return this.$parent.$el;
                else if (this.source === 'offset-parent')
                    return this.$el.offsetParent;
                else if (this.source === 'context-parent') {
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
                } else if (this.source === 'prev')
                    return this.$el.previousElementSibling;
                else if (this.source === 'next')
                    return this.$el.nextElementSibling;
            }
        },
        getTransferEl() {
            let transferEl;
            const sourceEl = this.sourceEl;

            if (this.$slots.transfer)
                transferEl = this.childVM.$el;
            else if (this.transfer instanceof HTMLElement)
                transferEl = this.transfer;
            else if (this.transfer === 'self')
                transferEl = this.$el;
            else if (this.transfer === 'source')
                transferEl = sourceEl;
            else if (this.transfer === 'clone')
                transferEl = sourceEl.cloneNode(true);

            if (this.$slots.transfer || this.transfer === 'clone') {
                const rect = sourceEl.getBoundingClientRect();
                this.setTransferFixed(transferEl, rect);
                transferEl.style.width = rect.width + 'px';
                transferEl.style.height = rect.height + 'px';
                sourceEl.parentElement.appendChild(transferEl);
            }

            transferEl && this.initTransfer(transferEl);
            return transferEl;
        },
        initTransfer(transfer) {
            // 如果position为static，则设置为relative，保证可以移动
            if (window.getComputedStyle(transfer, 'position') === 'static')
                transfer.style.position = 'relative';
        },
        setTransferFixed(transfer, position = { left: 0, top: 0 }) {
            transfer.style.left = position.left + 'px';
            transfer.style.top = position.top + 'px';
            transfer.style.zIndex = '9999';
            transfer.style.position = 'fixed';
            transfer.style.display = '';
        },
        onMouseDown(e) {
            if (this.disabled)
                return;

            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                startX: e.clientX,
                startY: e.clientY,
                dragX: 0,
                dragY: 0,
            });

            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp);

            this.immediate && this.onMouseMoveStart(e);
        },
        onMouseMove(e) {
            e.preventDefault();

            Object.assign(manager, {
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                dragX: e.clientX - manager.startX,
                dragY: e.clientY - manager.startY,
            });

            manager.dragging === false ? this.onMouseMoveStart(e) : this.onMouseMoving(e);
        },
        onMouseMoveStart(e, override) {
            const transferEl = this.getTransferEl();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            let style = transferEl ? window.getComputedStyle(transferEl) : {};
            style = { left: style.left, top: style.top };
            if (!style.left || style.left === 'auto')
                style.left = '0px';
            if (!style.top || style.top === 'auto')
                style.top = '0px';
            style.left = +style.left.slice(0, -2);
            style.top = +style.top.slice(0, -2);

            Object.assign(manager, {
                dragging: true,
                transferEl,
                value: this.value,
                startLeft: style.left,
                startTop: style.top,
                droppable: undefined,
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            !override && this.dragStart();
        },
        onMouseMoving(e) {
            // 拖拽约束
            const next = (this.constraint || this.defaultConstraint)(manager);

            // 设置位置
            if (manager.transferEl) {
                manager.transferEl.style.left = next.left + 'px';
                manager.transferEl.style.top = next.top + 'px';
            }

            // 更新当前位置
            manager.left = next.left;
            manager.top = next.top;

            this.drag();
            if (!manager.dragging)
                return;

            // for Droppable
            let pointEl = null;
            if (manager.transferEl) {
                manager.transferEl.style.display = 'none';
                pointEl = document.elementFromPoint(e.clientX, e.clientY);
                manager.transferEl.style.display = '';
            } else
                pointEl = document.elementFromPoint(e.clientX, e.clientY);

            let pointDroppable = null;
            // while (pointEl) {
            pointDroppable = manager.droppables.find((droppable) => droppable.$el && droppable.$el.contains(pointEl));

            // if (pointDroppable)
            //     break;
            // else
            //     pointEl = pointEl.parentElement;
            // }

            if (manager.droppable !== pointDroppable) {
                manager.droppable && manager.droppable.dragLeave(this);
                if (!manager.dragging)
                    return;
                pointDroppable && pointDroppable.dragEnter(this);
                manager.droppable = pointDroppable;
            }

            // dragEnter之后也要dragOver
            pointDroppable && pointDroppable.dragOver(this);
        },
        onMouseUp(e) {
            window.removeEventListener('mousemove', this.onMouseMove);
            window.removeEventListener('mouseup', this.onMouseUp);

            if (manager.dragging) {
                manager.droppable && manager.droppable.drop(this);
                this.cancel();
            }
        },
        defaultConstraint(params) {
            return {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY,
            };
        },
        cancel() {
            this.dragEnd();

            Object.assign(manager, {
                dragging: false,
                value: undefined,
                transferEl: undefined,
                range: undefined,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                startX: 0,
                startY: 0,
                dragX: 0,
                dragY: 0,
                startLeft: 0,
                startTop: 0,
                left: 0,
                top: 0,
                droppable: undefined,
            });
        },
        dragStart() {
            const sourceEl = this.sourceEl;
            sourceEl.setAttribute('draggable-source', 'draggable-source');
            manager.transferEl && manager.transferEl.setAttribute('draggable-transfer', 'draggable-transfer');

            let cancel = false;
            this.$emit('dragstart', Object.assign({
                originVM: this,
                sourceEl,
                preventDefault: () => cancel = true,
            }, manager), this);

            if (cancel)
                return this.cancel();
        },
        drag() {
            this.$emit('drag', Object.assign({
                originVM: this,
                sourceEl: this.sourceEl,
            }, manager), this);
        },
        dragEnd() {
            const sourceEl = this.sourceEl;
            sourceEl && sourceEl.removeAttribute('draggable-source');

            this.$emit('dragend', Object.assign({
                originVM: this,
                sourceEl,
            }, manager), this);

            if (manager.transferEl) {
                if (this.$slots.transfer || this.transfer === 'clone')
                    manager.transferEl.parentElement.removeChild(manager.transferEl);

                manager.transferEl.removeAttribute('draggable-transfer');
            }
        },
    },
};

export default FDraggable;
