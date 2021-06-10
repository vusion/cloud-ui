<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';

export default {
    name: 'u-split-layout',
    childName: 'u-split-layout-item',
    mixins: [MParent],
    props: {
        direction: {
            default: 'horizontal',
            validator: (value) => ['horizontal', 'vertical'].includes(value),
        },
        minSize: { type: Number, default: 100 },
        resizable: { type: Boolean, default: false },
        resizeRemaining: { type: String, default: 'sequence' },
    },
    watch: {
        itemVMs() {
            this.handleResize();
        },
    },
    mounted() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        /**
         * 处理大小
         * 与表格组件的计算类似
         */
        handleResize() {
            let rootSize;
            if (this.direction === 'horizontal') {
                rootSize = this.$el.clientWidth;
                if (!rootSize) {
                    // 初始表格隐藏时，上面的值为0，需要特殊处理
                    let parentEl = this.$el && this.$el.parentElement;
                    while (parentEl && !parentEl.clientWidth)
                        parentEl = parentEl.parentElement;
                    rootSize = parentEl ? parentEl.clientWidth : 0;
                }
            } else {
                rootSize = this.$el.clientHeight;
                if (!rootSize) {
                    // 初始表格隐藏时，上面的值为0，需要特殊处理
                    let parentEl = this.$el && this.$el.parentElement;
                    while (parentEl && !parentEl.clientHeight)
                        parentEl = parentEl.parentElement;
                    rootSize = parentEl ? parentEl.clientHeight : 0;
                }
            }

            // 分别获取有百分比、具体数值和无 size 的列
            const percentItemVMs = [];
            const valueItemVMs = [];
            const noSizeItemVMs = []; // 统计固定列的数量
            this.itemVMs.forEach((itemVM, index) => {
                if (!itemVM.currentSize)
                    noSizeItemVMs.push(itemVM);
                else if (String(itemVM.currentSize).endsWith('%'))
                    percentItemVMs.push(itemVM);
                else
                    valueItemVMs.push(itemVM);
            });

            // 全部都是百分数的情况，按比例缩小
            if (percentItemVMs.length === this.itemVMs.length) {
                const sumSize = percentItemVMs.reduce((prev, itemVM) => prev + parseFloat(itemVM.currentSize), 0);
                if (sumSize !== 100) {
                    percentItemVMs.forEach((itemVM) => {
                        itemVM.currentSize = (parseFloat(itemVM.currentSize) / sumSize) * 100 + '%';
                    });
                }
            }

            // 全部都是数值的情况，按实际大小
            const percentSizeSum = percentItemVMs.reduce((prev, itemVM) => {
                itemVM.computedSize = (parseFloat(itemVM.currentSize) * rootSize) / 100;
                return prev + itemVM.computedSize;
            }, 0);
            const valueSizeSum = valueItemVMs.reduce((prev, itemVM) => {
                itemVM.computedSize = parseFloat(itemVM.currentSize);
                return prev + itemVM.computedSize;
            }, 0);
            const remainingSize = rootSize - percentSizeSum - valueSizeSum;
            if (remainingSize > 0 && noSizeItemVMs.length) {
                const averageSize = remainingSize / noSizeItemVMs.length;
                noSizeItemVMs.forEach((itemVM) => itemVM.computedSize = averageSize);
            } else if (remainingSize > 0 && valueSizeSum !== 0) {
                const averageSize = remainingSize / valueItemVMs.length;
                valueItemVMs.forEach((itemVM) => itemVM.computedSize = itemVM.computedSize + averageSize);
            }

            // 如果所有列均有值，则总宽度有超出的可能。否则总宽度为根节点的宽度。
            let finalSize = '';
            if (this.itemVMs.every((itemVM) => itemVM.currentSize)) {
                finalSize = this.itemVMs.reduce((prev, itemVM) => {
                    if (String(itemVM.currentSize).endsWith('%')) {
                        return (prev + (parseFloat(itemVM.currentSize) * rootSize) / 100);
                    } else
                        return prev + itemVM.computedSize;
                }, 0);

                const diffSize = finalSize - rootSize;
                if (Math.abs(diffSize) > 1)
                    this.itemVMs.forEach((itemVM) => itemVM.computedSize -= diffSize * itemVM.computedSize / rootSize);
                // this.itemVMs[this.itemVMs.length - 1].computedSize -= finalSize - rootSize;
                // this.finalSize = finalSize;
            } // else
            // this.finalSize = finalSize = rootSize; // @important: Work with overflow-x: hidden to prevent two horizontal scrollbar

            setTimeout(() => this.$emit('resize', {}, this));
        },
        onResizerDragStart($event, itemVM) {
            this.itemVMs.forEach((itemVM) => {
                itemVM.currentSize = itemVM.computedSize;
                itemVM.oldSize = itemVM.computedSize;
            });

            this.$emit('drag-start', $event, this);
        },
        onResizerDrag($event, itemVM) {
            const index = this.itemVMs.indexOf(itemVM);

            const minSize = this.minSize;
            const rootSize = this.direction === 'horizontal' ? this.$el.clientWidth : this.$el.clientHeight;
            let beforeSize = 0;
            for (let i = 0; i < index; i++)
                beforeSize += this.itemVMs[i].computedSize;

            const maxSize = rootSize - beforeSize - (this.itemVMs.length - 1 - index) * minSize;
            const size = Math.max(minSize, Math.min(itemVM.oldSize + (this.direction === 'horizontal' ? $event.dragX : $event.dragY), maxSize));

            let remainingSize = size - itemVM.computedSize;
            itemVM.currentSize = itemVM.computedSize = size;

            if (this.resizeRemaining === 'sequence') {
                for (let i = index + 1; i < this.itemVMs.length; i++) {
                    if (remainingSize === 0)
                        break;
                    const itemVM = this.itemVMs[i];
                    if (itemVM.computedSize - remainingSize >= minSize) {
                        itemVM.currentSize = itemVM.computedSize -= remainingSize;
                        remainingSize = 0;
                    } else {
                        remainingSize -= itemVM.computedSize - minSize;
                        itemVM.currentSize = itemVM.computedSize = minSize;
                    }
                }
            } else if (this.resizeRemaining === 'average') {
                /* eslint-disable no-inner-declarations */
                function distributeInAverage(itemVMs) {
                    const averageSize = remainingSize / itemVMs.length;
                    const wideitemVMs = [];
                    itemVMs.forEach((itemVM) => {
                        if (itemVM.computedSize - averageSize >= minSize) {
                            itemVM.currentSize = itemVM.computedSize -= averageSize;
                            remainingSize -= averageSize;
                            wideitemVMs.push(itemVM);
                        } else {
                            remainingSize -= itemVM.computedSize - minSize;
                            itemVM.currentSize = itemVM.computedSize = minSize;
                        }
                    });
                    if (Math.abs(remainingSize) >= 1 && wideitemVMs.length)
                        distributeInAverage(wideitemVMs);
                }
                distributeInAverage(this.itemVMs.slice(index + 1));
                itemVM.currentSize = itemVM.computedSize -= remainingSize;
            }
            $event.transferEl.style.left = '';
            $event.transferEl.style.top = '';

            this.$emit('drag', $event, this);
        },
        onResizerDragEnd($event, itemVM) {
            const index = this.itemVMs.indexOf(itemVM);

            this.handleResize();
            this.$emit('resize', {
                itemVM,
                index,
                size: itemVM.computedSize,
                oldSize: itemVM.oldSize,
            }, this);

            this.$emit('drag-end', $event, this);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.root::before,
.root::after {
    display: block;
    content: '.';
    clear: both;
    height: 0;
    visibility: hidden;
}
</style>
