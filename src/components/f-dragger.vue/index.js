import { getSize } from '../../utils';
import FDraggable from '../f-draggable.vue';
import manager from '../f-draggable.vue/manager';

export const FDragger = {
    name: 'f-dragger',
    extends: FDraggable,
    props: {
        axis: { type: String, default: 'both', validator: (value) => ['both', 'horizontal', 'vertical'].includes(value) },
        grid: { type: Object, default: () => ({ x: 0, y: 0 }) },
        range: [String, Object],
        rangeMode: { type: String, default: 'inside', validator: (value) => ['inside', 'center', 'outside'].includes(value) },
        transfer: { type: [String, Element], default: 'self' },
    },
    methods: {
        getRange(transferEl) {
            let range;

            if (typeof this.range === 'object')
                range = this.range;
            else if (this.range === 'offset-parent') {
                if (window.getComputedStyle(transferEl, 'position') !== 'absolute')
                    transferEl.style.position = 'absolute';

                const offsetParent = transferEl.offsetParent;
                range = Object.assign({ left: 0, top: 0 }, getSize(offsetParent, this.rangeMode));
            } else if (this.range === 'window') {
                if (window.getComputedStyle(transferEl, 'position') !== 'fixed')
                    transferEl.style.position = 'fixed';

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
        onMouseMoveStart(e) {
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

            if (transferEl) {
                manager.range = this.getRange(transferEl);

                const rect = transferEl.getBoundingClientRect();

                if (this.axis === 'both' || this.axis === 'horizontal') {
                    if (!(rect.left <= e.clientX && e.clientX < rect.left + rect.width))
                        style.left += e.clientX - rect.left - rect.width / 2;
                }
                if (this.axis === 'both' || this.axis === 'vertical') {
                    if (!(rect.top <= e.clientY && e.clientY < rect.top + rect.height))
                        style.top += e.clientY - rect.top - rect.height / 2;
                }

                const next = (this.constraint || this.defaultConstraint)({
                    startLeft: style.left,
                    startTop: style.top,
                    dragX: 0,
                    dragY: 0,
                });

                transferEl.style.left = next.left + 'px';
                transferEl.style.top = next.top + 'px';
            }

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

            this.dragStart();
        },
        defaultConstraint(params) {
            const next = {
                left: params.startLeft + params.dragX,
                top: params.startTop + params.dragY,
            };

            // 范围约束
            if (params.range) {
                if (this.rangeMode === 'inside') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right - manager.transferEl.offsetWidth);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom - manager.transferEl.offsetHeight);
                } else if (this.rangeMode === 'center') {
                    next.left = Math.min(Math.max(params.range.left, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top, next.top), params.range.bottom);
                } else if (this.rangeMode === 'outside') {
                    next.left = Math.min(Math.max(params.range.left - manager.transferEl.offsetWidth, next.left), params.range.right);
                    next.top = Math.min(Math.max(params.range.top - manager.transferEl.offsetHeight, next.top), params.range.bottom);
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

export default FDragger;
