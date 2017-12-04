import Vue from 'vue';
import { getPosition, getSize, getComputedStyle } from '../base/style';
import manager from './manager';

export default {
    name: 'u-draggable',
    props: {
        value: null,
        transfer: { type: [String, Element], default: 'clone' },
        disabled: { type: Boolean, default: false },
        constraint: Function,
    },
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    watch: {
        disabled(disabled) {
            this.watchDisabled(disabled);
        },
    },
    mounted() {
        // 创建VNode
        /* eslint-disable consistent-this */
        const parentVM = this;
        this.childVM = new Vue({
            name: 'u-draggable-child',
            render(h) { return parentVM.$slots.transfer && parentVM.$slots.transfer[0]; },
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        this.$nextTick(() => this.watchDisabled(this.disabled));
        this.$el.addEventListener('mousedown', this.onMouseDown);
    },
    updated() {
        this.childVM.$forceUpdate();
    },
    destroyed() {
        this.childVM && this.childVM.destroy && this.childVM.destroy();
        this.childVM = undefined;
    },
    methods: {
        watchDisabled(disabled) {
            if (disabled)
                this.$el.removeAttribute && this.$el.removeAttribute('draggable');
            else
                this.$el.setAttribute && this.$el.setAttribute('draggable', 'draggable');
        },
        getTransferEl() {
            let transferEl;
            const sourceEl = this.$el;

            if (this.$slots.transfer)
                transferEl = this.childVM.$el;
            else if (this.transfer instanceof Element)
                transferEl = this.transfer;
            else if (this.transfer === 'self')
                transferEl = sourceEl;
            else if (this.transfer === 'clone')
                transferEl = sourceEl.cloneNode(true);

            if (this.$slots.transfer || this.transfer === 'clone') {
                this.setTransferFixed(transferEl, getPosition(sourceEl));
                const size = getSize(sourceEl);
                transferEl.style.width = size.width + 'px';
                transferEl.style.height = size.height + 'px';
                sourceEl.parentElement.appendChild(transferEl);
            }

            transferEl && this.initTransfer(transferEl);
            return transferEl;
        },
        initTransfer(transfer) {
            // 如果position为static，则设置为relative，保证可以移动
            if (getComputedStyle(transfer, 'position') === 'static')
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
            let computedStyle = transferEl ? window.getComputedStyle(transferEl) : {};
            computedStyle = {
                left: computedStyle.left,
                top: computedStyle.top,
            };

            if (!computedStyle.left || computedStyle.left === 'auto')
                computedStyle.left = '0px';
            if (!computedStyle.top || computedStyle.top === 'auto')
                computedStyle.top = '0px';

            Object.assign(manager, {
                dragging: true,
                transferEl,
                value: this.value,
                startLeft: +computedStyle.left.slice(0, -2),
                startTop: +computedStyle.top.slice(0, -2),
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
            const sourceEl = this.$el;
            sourceEl.setAttribute('draggable-source', 'draggable-source');
            manager.transferEl && manager.transferEl.setAttribute('draggable-transfer', 'draggable-transfer');

            let cancel = false;
            this.$emit('dragstart', Object.assign({
                originVM: this,
                sourceEl,
                preventDefault: () => cancel = true,
            }, manager));

            if (cancel)
                return this.cancel();
        },
        drag() {
            this.$emit('drag', Object.assign({
                originVM: this,
                sourceEl: this.$el,
            }, manager));
        },
        dragEnd() {
            const sourceEl = this.$el;
            sourceEl && sourceEl.removeAttribute('draggable-source');

            this.$emit('dragend', Object.assign({
                originVM: this,
                sourceEl,
            }, manager));

            if (manager.transferEl) {
                if (this.$slots.transfer || this.transfer === 'clone')
                    manager.transferEl.parentElement.removeChild(manager.transferEl);

                manager.transferEl.removeAttribute('draggable-transfer');
            }
        },
    },
};
