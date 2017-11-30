import Draggable from '../u-draggable.vue';
import { getSize, getComputedStyle, manager } from '../base/style';
export default {
    name: 'u-movable',
    mixins: [Draggable],
    props: {
        axis: {
            default: 'both',
            validator(value) {
                return ['both', 'horizontal', 'vertical'].includes(value);
            },
        },
        grid: {
            type: Object,
            default() {
                return {
                    x: 0,
                    y: 0,
                };
            },
        },
        range: [String, Object, Function],
        rangeMode: {
            type: String,
            default: 'inside',
            validator(value) {
                return ['inside', 'center', 'outside'].includes(value);
            },
        },
        proxy: {
            type: [String, Object, Function],
            default: 'self',
        },
    },
    methods: {
        getRange(proxy) {
            let range;

            if (typeof this.range === 'object')
                range = this.range;
            else if (typeof this.range === 'function')
                range = this.range();
            else if (this.range === 'offsetParent') {
                if (getComputedStyle(proxy, 'position') !== 'absolute')
                    proxy.style.position = 'absolute';

                const offsetParent = proxy.offsetParent;
                range = Object.assign({ left: 0, top: 0 }, getSize(offsetParent, this.rangeMode));
            } else if (this.range === 'window') {
                if (getComputedStyle(proxy, 'position') !== 'fixed')
                    proxy.style.position = 'fixed';

                range = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
            }

            if (range) {
                if (range.width !== undefined && range.height !== undefined) {
                    range.right = range.left + range.width;
                    range.bottom = range.top + range.height;
                } else if (range.right !== undefined && range.bottom !== undefined) {
                    range.width = range.right - range.left;
                    range.height = range.bottom - range.top;
                }
            }

            return range;
        },
        /**
         * @method _onMouseMoveStart(e) 处理第一次鼠标移动事件
         * @private
         * @override
         * @param  {MouseEvent} e 鼠标事件
         * @return {void}
         */
        onMouseMoveStart(e) {
            const proxy = this.getProxy();
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

            if (manager.proxy)
                manager.range = this.getRange(manager.proxy);
            this.dragStart();
        },
        /**
         * @protected
         * @override
         */
        limit(params) {
            const next = {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY,
            };

            // 范围约束
            if (params.range) {
                if (this.rangeMode === 'inside') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - manager.proxy.offsetWidth);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - manager.proxy.offsetHeight);
                } else if (this.rangeMode === 'center') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
                } else if (this.rangeMode === 'outside') {
                    next.left = Math.min(Math.max(params.range.left - manager.proxy.offsetWidth, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top - manager.proxy.offsetHeight, next.top), params.range.bottom);
                }
            }

            // 网格约束
            const grid = this.grid;
            grid.x && (next.left = Math.round(next.left / grid.x) * grid.x);
            grid.y && (next.top = Math.round(next.top / grid.y) * grid.y);

            // 轴向约束
            if (this.axis === 'vertical')
                next.left = params.startLeft;
            if (this.axis === 'horizontal')
                next.top = params.startTop;

            return next;
        },
    },
};
