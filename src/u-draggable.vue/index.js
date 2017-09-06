import EventUtil from '../util/event.js';
import { getPosition, getSize, getComputedStyle, manager } from '../util/style.js';
export default {
    name: 'u-draggable',
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
        restrict: {
            type: Function,
            // 设置默认值比较特殊
            // default() {
            //     return (params) => ({
            //         left: manager.startLeft + manager.dragX,
            //         top: manager.startTop + manager.dragY,
            //     });
            // },
        },
        // 暂不确定是否添加这个属性
        // cancel: {
        //     type: Function,
        // },
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
            },
        }, children);
    },
    methods: {
        getProxy() {
            let proxy;
            const source = this.$el;

            if (typeof this.proxy === 'function')
                proxy = this.proxy();
            else if (this.proxy instanceof Element)
                proxy = this.proxy;
            else if (this.proxy === 'self')
                proxy = source;
            else if (this.proxy === 'clone') {
                proxy = source.cloneNode(true);
                this.setProxyFixed(proxy, getPosition(source));
                const size = getSize(source);
                proxy.style.width = size.width + 'px';
                proxy.style.height = size.height + 'px';
                source.parentElement.appendChild(proxy);
            }

            proxy && this.initProxy(proxy);
            return proxy;
        },
        initProxy(proxy) {
            // 如果position为static，则设置为relative，保证可以移动
            if (getComputedStyle(proxy, 'position') === 'static')
                proxy.style.position = 'relative';
        },
        setProxyFixed(proxy, position = { left: 0, top: 0 }) {
            proxy.style.left = position.left + 'px';
            proxy.style.top = position.top + 'px';
            proxy.style.zIndex = '9999';
            proxy.style.position = 'fixed';
            proxy.style.display = '';
        },
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
        onMouseMove(event) {
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
        onMouseUp(event) {
            EventUtil.removeHandler(document, 'mousemove', this.onMouseMove);
            EventUtil.removeHandler(document, 'mouseup', this.onMouseUp);

            if (manager.dragging) {
                manager.droppable && manager.droppable.drop(this);
                this.cancel();
            }
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

            !override && this.dragStart();
        },
        onMouseMoving(event) {
            // 拖拽约束
            // const next = this.restrict(manager);
            let next;
            if (this.restrict)
                next = this.restrict(manager);
            else
                next = this.limit(manager);
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
                    droppable.$el === pointElement);

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
                manager.droppable = pointDroppable;
            }

            // dragEnter之后也要dragOver
            pointDroppable && pointDroppable.dragOver(this);
        },
        limit(params) {
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
                proxy: undefined,
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
            const source = this.$el;
            this.$emit('dragstart', Object.assign({
                sender: this,
                origin: this,
                source,
                cancel: this.cancel,
            }, manager));
        },
        /**
         * @private
         */
        drag() {
            this.$emit('drag', Object.assign({
                sender: this,
                origin: this,
                source: this.$el,
                cancel: this.cancel,
            }, manager));
        },
        /**
         * @private
         */
        dragEnd() {
            const source = this.$el;

            /**
             * @event dragend 拖拽结束时触发
             * @property {object} sender 事件发送对象，为当前draggable
             * @property {object} origin 拖拽源，为当前draggable
             * @property {object} source 拖拽起始元素
             * @property {object} proxy 拖拽代理元素
             * @property {var} value 拖拽时需要传递的值
             */
            this.$emit('dragend', Object.assign({
                sender: this,
                origin: this,
                source,
            }, manager));

            if (manager.proxy) {
                if (this.proxy === 'clone')
                    manager.proxy.parentElement.removeChild(manager.proxy);
            }
        },
    },
};
