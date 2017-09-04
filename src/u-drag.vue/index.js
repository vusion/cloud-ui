import EventUtil from '../util/event.js';
import { manager } from '../util/style.js';
export default {
    name: 'u-drag',
    props: {
        proxy: {
            type: String,
            default: 'clone',
        },
        value: String,
        element: {
            type: String,
            default: 'div',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        cancel: Function,
    },
    render(h) {
        const slots = this.$slots.default;
        let children = slots;
        const { footer } = this.$slots;
        if (footer)
            children = slots ? [...slots, ...footer] : [...footer];
        return h(this.element, {
            class: 'root',
            attrs: {
                disabled: this.disabled,
            },
            style: {
                position: 'absolute',
            },
            on: {
                mousedown: this.onMousedown,
                mousemove: this.onMousemove,
                mouseup: this.onmouseup,
            },
        }, children);
    },
    methods: {
        onMousedown(event) {
            if (this.disabled)
                return false;

            event.preventDefault();

            Object.assign(manager, {
                screenX: event.screenX,
                screenY: event.screenY,
                clientX: event.clientX,
                clientY: event.clientY,
                pageX: event.pageX,
                pageY: event.pageY,
                startX: event.clientX,
                startY: event.clientY,
                dragX: 0,
                dragY: 0,
            });

            EventUtil.on(document, 'mousemove', this.onMousemove);
            EventUtil.on(document, 'mouseup', this.onmouseup);
        },
        onMousemove(event) {
            event.preventDefault();
            Object.assign(manager, {
                screenX: event.screenX,
                screenY: event.screenY,
                clientX: event.clientX,
                clientY: event.clientY,
                pageX: event.pageX,
                pageY: event.pageY,
                dragX: event.clientX - manager.startX,
                dragY: event.clientY - manager.startY,
            });

            if (manager.dragging === false)
                this.onMouseMoveStart(event);
            else
                this.onMouseMoving(event);
        },
        onmouseup(event) {
            // console.log(event);
        },
        onMouseMoveStart(event, override) {
            const proxy = this.getProxy();

            // 代理元素的位置从MouseMoveStart开始算，这样在MouseDown中也可以预先处理位置
            // 获取初始的left和top值
            const computedStyle = proxy ? window.getComputedStyle(proxy) : {};
            if (!computedStyle.left || computedStyle.left === 'auto')
                computedStyle.left = '0px';
            if (!computedStyle.top || computedStyle.top === 'auto')
                computedStyle.top = '0px';

            Object.assign(manager, {
                dragging: true,
                proxy,
                value: this.value,
                startLeft: +computedStyle.left.slice(0, -2),
                startTop: +computedStyle.top.slice(0, -2),
                droppable: undefined,
            });

            manager.left = manager.startLeft;
            manager.top = manager.startTop;

            !override && this._dragStart();
        },
        onMouseMoving(event) {
            // 拖拽约束
            const next = this.restrict(manager);
            // 设置位置
            if (manager.proxy) {
                manager.proxy.style.left = next.left + 'px';
                manager.proxy.style.top = next.top + 'px';
            }
            // 更新当前位置
            manager.left = next.left;
            manager.top = next.top;

            this.drag();
            if (!manager.dragging)
                return;

            // for Droppable
            let pointElement = null;
            if (manager.proxy) {
                manager.proxy.style.display = 'none';
                pointElement = document.elementFromPoint(event.clientX, event.clientY);
                manager.proxy.style.display = '';
            } else
                pointElement = document.elementFromPoint(event.clientX, event.clientY);

            let pointDroppable = null;
            while (pointElement) {
                pointDroppable = manager.droppables.find((droppable) =>
                    droppable === pointElement);

                if (pointDroppable)
                    break;
                else
                    pointElement = pointElement.parentElement;
            }

            if (manager.droppable !== pointDroppable) {
                manager.droppable && manager.droppable.dragLeave(this);
                if (!manager.dragging)
                    return;
                pointDroppable && pointDroppable.dragEnter(this);
                if (!manager.dragging)
                    return;
                manager.droppable = pointDroppable;
            }

            // dragEnter之后也要dragOver
            pointDroppable && pointDroppable.dragOver(this);
        },
    },
};
