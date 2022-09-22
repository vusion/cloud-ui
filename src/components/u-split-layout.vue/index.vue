<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import { MParent } from '../m-parent.vue';
import { addResizeListener, removeResizeListener } from '../../utils/dom';

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
        addResizeListener(this.$el, this.handleResize);
    },
    destroyed() {
        removeResizeListener(this.$el, this.handleResize);
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
            this.itemVMs.forEach((itemVM) => {
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
            const percentSizeSum = percentItemVMs.reduce((prev, itemVM) => {
                itemVM.computedSize = (parseFloat(itemVM.currentSize) * rootSize) / 100;
                return prev + itemVM.computedSize;
            }, 0);

            // 全部都是数值的情况，按实际大小
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
            if (this.itemVMs.every((itemVM) => itemVM.computedSize)) {
                this.itemVMs.forEach((itemVM) => {
                    itemVM.computedSize = Math.max(itemVM.computedSize, itemVM.minSize || this.minSize);
                });

                finalSize = this.itemVMs.reduce((prev, itemVM) => {
                    if (String(itemVM.currentSize).endsWith('%')) {
                        return (prev + (parseFloat(itemVM.currentSize) * rootSize) / 100);
                    } else
                        return prev + itemVM.computedSize;
                }, 0);
                const diffSize = finalSize - rootSize;

                if (Math.abs(diffSize) > 1) {
                    let fixedSize = 0;
                    let adjustableItems = []
                    let hasValueSize = 0;
                    const hasValueItems = [];
                    this.itemVMs.forEach((itemVM) => {
                        const minSize = itemVM.minSize || this.minSize
                        if(diffSize > 0  &&  itemVM.computedSize === minSize) { // 如果已经是最小值，不能再缩小
                            fixedSize += minSize;
                        } else if(itemVM.currentSize) { // 已经设过值的模块理论上不改变大小，如果没有地方能变，再来改这部分的大小
                            hasValueSize += minSize;
                            hasValueItems.push(itemVM);
                        } else {
                            adjustableItems.push(itemVM);
                        }
                    });
                    // 如果大家都不能调整，则整体都按相同比例调整
                    if(!adjustableItems.length) {
                        // 没有可以调整的区域
                        if(!!hasValueItems.length) {
                            hasValueSize = 0;
                            adjustableItems = [...hasValueItems];
                        } else {
                            adjustableItems = [...this.itemVMs];
                        }
                    }
                    adjustableItems.forEach((itemVM) => itemVM.computedSize = itemVM.computedSize *  (rootSize - fixedSize - hasValueSize) / (finalSize - fixedSize - hasValueSize));
                }
                this.itemVMs.forEach((itemVM) => {
                    if(!!itemVM.currentSize) {
                        itemVM.currentSize = itemVM.computedSize;
                    }
                })
            }
            setTimeout(() => this.$emit('resize', {}, this));
        },
        onResizerDragStart($event, itemVM) {
            this.itemVMs.forEach((itemVM) => {
                itemVM.oldSize = itemVM.computedSize;
            });
            this.$emit('drag-start', $event, this);
        },
        onResizerDrag($event, itemVM) {
            const index = this.itemVMs.indexOf(itemVM);
            const rootSize = this.direction === 'horizontal' ? this.$el.clientWidth : this.$el.clientHeight;
            // 当前元素之前的元素所占的空间大小
            let beforeSize = 0;
            for (let i = 0; i < index; i++)
                beforeSize += this.itemVMs[i].computedSize;
            
            // 可以调整的最大大小
            let maxSize = rootSize - beforeSize;
            for(let i=index+1;i<this.itemVMs.length;i++) {
                maxSize -= this.itemVMs[i].minSize || this.minSize;
            }

            const size = Math.max(
                itemVM.minSize || this.minSize,
                Math.min(
                    itemVM.oldSize + (this.direction === 'horizontal' ? $event.dragX : $event.dragY), 
                    maxSize
                )
            );

            let remainingSize = size - itemVM.computedSize;
            itemVM.computedSize = size;

            if (this.resizeRemaining === 'sequence') {
                for (let i = index + 1; i < this.itemVMs.length; i++) {
                    if (remainingSize === 0)
                        break;
                    const itemVM = this.itemVMs[i];
                    const minSize = itemVM.minSize || this.minSize;
                    if (itemVM.computedSize - remainingSize >= minSize) {
                        itemVM.computedSize -= remainingSize;
                        remainingSize = 0;
                    } else {
                        remainingSize -= itemVM.computedSize - minSize;
                        itemVM.computedSize = minSize;
                    }
                }
            } else if (this.resizeRemaining === 'average') {
                /* eslint-disable no-inner-declarations */
                function distributeInAverage(itemVMs) {
                    const averageSize = remainingSize / itemVMs.length;
                    const wideitemVMs = [];
                    itemVMs.forEach((itemVM) => {
                        const minSize = itemVM.minSize || this.minSize;
                        if (itemVM.computedSize - averageSize >= minSize) {
                            itemVM.computedSize -= averageSize;
                            remainingSize -= averageSize;
                            wideitemVMs.push(itemVM);
                        } else {
                            remainingSize -= itemVM.computedSize - minSize;
                            itemVM.computedSize = minSize;
                        }
                    });
                    if (Math.abs(remainingSize) >= 1 && wideitemVMs.length)
                        distributeInAverage(wideitemVMs);
                }
                distributeInAverage(this.itemVMs.slice(index + 1));
                itemVM.computedSize -= remainingSize;
            }
            $event.transferEl.style.left = '';
            $event.transferEl.style.top = '';
            if(!!itemVM.currentSize) {
                itemVM.currentSize = itemVM.computedSize;
            }
            this.$emit('drag', $event, this);
        },
        onResizerDragEnd($event, itemVM) {
            const index = this.itemVMs.indexOf(itemVM);
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