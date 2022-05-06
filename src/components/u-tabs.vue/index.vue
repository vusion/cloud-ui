<template>
    <div :class="$style.root" :disabled="disabled" :appear="direction === 'vertical'? undefined: appear" :size="size" :item-width="itemWidth" :direction="direction">
        <div :class="$style.head">
            <span :class="[$style.extra, $env.VUE_APP_DESIGNER ? $style.gap : null]" vusion-slot-name="extra">
                <slot name="extra"></slot>
            </span>
            <nav :class="$style.nav" :scrollable="showScrollButtons === 'always' || (showScrollButtons === 'auto' && scrollable)">
                <span :class="$style.prev" @click="scrollPrev"></span>
                <div ref="scrollView" :class="$style['scroll-view']">
                    <div :class="$style.scroll" ref="scrollPanel">
                        <template v-for="(itemVM, index) in itemVMs">
                            <f-dragger :key="index" :axis="direction" 
                                @drag="onDrag" 
                                @dragstart="onDragstart(itemVM, index, $event)" 
                                @dragend="onDragEnd"
                                @mousedown="onMouseDown(itemVM, index, $event)"
                                :range="dragRange">
                                <a v-show="!itemVM.hidden" :class="$style.item"
                                    ref="item"
                                    :key="index"
                                    :is-sub="itemVM.$attrs['is-sub']"
                                    :vusion-scope-id="itemVM.$vnode.context.$options._scopeId"
                                    :vusion-node-path="itemVM.$attrs['vusion-node-path']"
                                    :vusion-node-tag="itemVM.$attrs['vusion-node-tag']"
                                    :vusion-disabled-move="itemVM.$attrs['vusion-disabled-move']"
                                    :vusion-disabled-duplicate="itemVM.$attrs['vusion-disabled-duplicate']"
                                    :vusion-disabled-cut="itemVM.$attrs['vusion-disabled-cut']"
                                    :href="itemVM.currentHref" :target="itemVM.target" :title="showTitle ? itemVM.title : null"
                                    :selected="router ? itemVM.active : itemVM === selectedVM"
                                    :disabled="itemVM.disabled || disabled"
                                    :style="{ width: currentItemWidth }"
                                    :width-fixed="!!currentItemWidth"
                                    :alignment="itemAlign"
                                    @click="onClick(itemVM, $event)">
                                    <span :class="$style.title" vusion-slot-name="title">
                                        <f-slot
                                            :vm="itemVM"
                                            name="title"
                                            :props="{ selected: router ? itemVM.active : itemVM === selectedVM }">
                                            {{ itemVM.title }}
                                        </f-slot>
                                    </span>
                                    <span v-if="closable" :class="$style.close" @click.stop="close(itemVM)"></span>
                                </a>
                            </f-dragger>
                        </template>
                    </div>
                </div>
                <span :class="$style.next" @click="scrollNext"></span>
            </nav>
        </div>
        <div :class="$style.body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { MSinglex } from '../m-singlex.vue';
import { scrollTo } from '../../utils/dom';

export default {
    name: 'u-tabs',
    childName: 'u-tab',
    extends: MSinglex,
    props: {
        autoSelect: { type: Boolean, default: true },
        closable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
        showScrollButtons: { type: [String, Boolean], default: 'auto' },
        appear: { type: String, default: 'square' },
        size: { type: String, default: 'normal' },
        itemWidth: { type: String, default: 'auto' },
        itemAlign: { type: String, default: 'center' },
        showTitle: { type: Boolean, default: false },
        direction: { type: String, default: 'horizontal' },
    },
    data() {
        return {
            scrollable: false,
            dragRange: undefined,
        };
    },
    computed: {
        currentItemWidth() {
            if (this.itemWidth === 'full')
                return (1 / this.itemVMs.length) * 100 + '%';
            else if (this.itemWidth === 'auto')
                return undefined;
            else
                return this.itemWidth;
        },
    },
    watch: {
        itemVMs(itemVMs) {
            this.$nextTick(() => {
                const threshold = 1;  // IE 浏览器缩放时，scrollWidth 可能会比 clientWidth 大 1 像素
                if (this.direction === 'vertical') {
                    this.scrollable = this.$refs.scrollView.scrollHeight - this.$refs.scrollView.clientHeight > threshold;
                } else {
                    this.scrollable = this.$refs.scrollView.scrollWidth - this.$refs.scrollView.clientWidth > threshold;
                }
                this.$refs.item
                    && this.$refs.item.forEach((itemEl, index) => {
                        itemEl.__vue__ = itemVMs[index];
                    });
                this.scrollToSelectedVM();
            });
        },
        selectedVM: {
            immediate: true,
            handler() {
                this.scrollToSelectedVM();
            }
        }
    },
    methods: {
        onClick(itemVM, e) {
            if (this.drop) {
                this.drop = false;
                return;
            }
            this.click(itemVM);
            this.select(itemVM); // 为了兼容
            if (this.router) {
                if (itemVM.disabled)
                    return e.preventDefault();
                itemVM.$emit('click', e, itemVM);
                if (itemVM.target !== '_self')
                    return; // 使用`to`的时候走`$router`，否则走原生
                if (itemVM.href === undefined) {
                    // 使用浏览器的一些快捷键时，走原生
                    // @TODO: 考虑使用快捷键抛出事件，阻止流程的需求
                    if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey)
                        return;
                    e.preventDefault();
                    itemVM.navigate();
                }
            }
        },
        close(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled)
                return;
            const oldValue = this.value;
            let cancel = false;
            this.$emit('before-close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;
            itemVM.parentVM = undefined;
            const index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);
            cancel = false;
            this.$emit('close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;
            if (this.selectedVM === itemVM) {
                this.selectedVM
                    = this.itemVMs[index] || this.itemVMs[index - 1];
                const value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        },
        scrollToSelectedVM() {
            const scrollViewEl = this.$refs.scrollView;
            const children = this.$refs.item;
            if (this.direction === 'vertical') {
                if(scrollViewEl && this.selectedVM && Array.isArray(children)) {
                    const index = this.itemVMs.indexOf(this.selectedVM);
                    if(index !== -1) {
                        // 选中节点的上侧距离
                        let activeMin = 0;
                        for(let i = 0; i < index; i++) {
                            const itemEl = children[i] || {};
                            activeMin += itemEl.offsetHeight || 0;
                        }
                        const activeMax = activeMin + ((children[index] || {}).offsetHeight || 0) ;
                        // 可视区高度
                        const scrollHeight = scrollViewEl.clientHeight;
                        // 可视区域上侧
                        const scrollMin = scrollViewEl.scrollTop;
                        // 可视区域下侧
                        const scrollMax = scrollMin + scrollHeight;
                        let accHeight = scrollMin;
                        // 至少有一部分在可视区域上侧
                        if(scrollMax < activeMax) {
                            accHeight = activeMax - scrollHeight;
                        } else if (activeMin < scrollMin) { // 至少有一部分在可视区域下侧
                            accHeight = activeMin;
                        }
                        if(accHeight !== scrollMin) {
                            scrollTo(scrollViewEl, { top: accHeight, duration: 1000 });
                        }
                    }
                }
            } else {
                if(scrollViewEl && this.selectedVM && Array.isArray(children)) {
                    const index = this.itemVMs.indexOf(this.selectedVM);
                    if(index !== -1) {
                        // 选中节点的右侧距离
                        let activeMin = 0;
                        for(let i = 0; i < index; i++) {
                            const itemEl = children[i] || {};
                            activeMin += itemEl.offsetWidth || 0;
                        }
                        const activeMax = activeMin + ((children[index] || {}).offsetWidth || 0) ;
                        // 可视区宽度
                        const scrollWidth = scrollViewEl.clientWidth;
                        // 可视区域左侧
                        const scrollMin = scrollViewEl.scrollLeft;
                        // 可视区域右侧
                        const scrollMax = scrollMin + scrollWidth;
                        let accWidth = scrollMin;
                        // 至少有一部分在可视区域右侧
                        if(scrollMax < activeMax) {
                            accWidth = activeMax - scrollWidth;
                        } else if (activeMin < scrollMin) { // 至少有一部分在可视区域左侧
                            accWidth = activeMin;
                        }
                        if(accWidth !== scrollMin) {
                            scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
                        }
                    }
                }
            }
        },
        scrollPrev() {
            const scrollViewEl = this.$refs.scrollView;
            const children = this.$refs.item; // 查找第一个不截断的项
            if (this.direction === 'vertical') {
                let accHeight = 0;
                if (scrollViewEl.scrollTop - scrollViewEl.clientHeight > 0) {
                    for (let i = 0; i < children.length; i++) {
                        const itemEl = children[i];
                        accHeight += itemEl.offsetHeight;
                        if (accHeight + itemEl.offsetHeight > scrollViewEl.scrollTop - scrollViewEl.clientHeight)
                            break;
                    }
                }
                scrollTo(scrollViewEl, { top: accHeight, duration: 1000 });
            } else {
                let accWidth = 0;
                if (scrollViewEl.scrollLeft - scrollViewEl.clientWidth > 0) {
                    for (let i = 0; i < children.length; i++) {
                        const itemEl = children[i];
                        accWidth += itemEl.offsetWidth;
                        if (accWidth + itemEl.offsetWidth > scrollViewEl.scrollLeft - scrollViewEl.clientWidth)
                            break;
                    }
                }
                scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
            }
        },
        scrollNext() {
            const scrollViewEl = this.$refs.scrollView;
            const children = this.$refs.item; // 查找第一个不截断的项
            if (this.direction === 'vertical') {
                let accHeight = 0;
                for (let i = 0; i < children.length; i++) {
                    const itemEl = children[i];
                    if (accHeight + itemEl.offsetHeight > scrollViewEl.scrollTop + scrollViewEl.clientHeight)
                        break;
                    accHeight += itemEl.offsetHeight;
                }
                scrollTo(scrollViewEl, { top: accHeight, duration: 1000 });
            } else {
                let accWidth = 0;
                for (let i = 0; i < children.length; i++) {
                    const itemEl = children[i];
                    if (accWidth + itemEl.offsetWidth > scrollViewEl.scrollLeft + scrollViewEl.clientWidth)
                        break;
                    accWidth += itemEl.offsetWidth;
                }
                scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
            }
        },
        onDrag(event) {
            let moveIndex = this.moveIndex;
            let left = +event.sourceEl.style.left.slice(0, -2);
            if(this.startLeft - left >= 0) { //往左移
                let preIndex = moveIndex - 1;
                if(preIndex < 0)
                    return;
                const preLeft = this.manager[preIndex].accOffsetWidth;
                const preLeftHalf = this.manager[preIndex].accOffsetWidth + this.manager[moveIndex].offsetWidth / 2;
                if(left>=preLeft && left<=preLeftHalf){
                    this.moveIndex = preIndex;
                    this.$refs.scrollPanel.insertBefore(this.newItem, this.$refs.item[this.moveIndex]);
                }
            } else { // 往右移
                left = left + this.manager[this.dragIndex].offsetWidth;
                let nextIndex = moveIndex + 1;
                if(nextIndex > this.$refs.item.length)
                    return;
                const preLeft = this.manager[nextIndex].accOffsetWidth + this.manager[nextIndex].offsetWidth / 2;
                const preLeftHalf = this.manager[nextIndex].accOffsetWidth + this.manager[nextIndex].offsetWidth;
                if(left>=preLeft && left<=preLeftHalf){
                    this.moveIndex = nextIndex;
                    this.$refs.scrollPanel.insertBefore(this.newItem, this.$refs.item[this.moveIndex].nextSibling);
                }
            }
            this.startLeft = left;
        },
        onDragstart(itemVm, itemIndex, event) {
            this.dragIndex = itemIndex;
            this.moveIndex = itemIndex;
            this.startLeft = +event.sourceEl.style.left.slice(0, -2);
            event.sourceEl.style.position = 'absolute';
            this.newItem.style.opacity = '0';
            this.newItem.style.position = 'relative';
            this.$refs.scrollPanel.insertBefore(this.newItem, this.$refs.item[itemIndex]);
        },
        onDragEnd(event) {
            console.log('this.moveIndex', this.moveIndex);
            const dragItem = this.itemVMs[this.dragIndex];
            this.itemVMs.splice(this.dragIndex, 1);
            if (this.moveIndex === 0) {
                this.itemVMs.unshift(dragItem);
            } else {
                this.itemVMs.splice(this.moveIndex, 0, dragItem);
            }
            this.$refs.scrollPanel.removeChild(this.newItem);
            this.resetStyle(this.$refs.item[this.dragIndex]);
            // setTimeout(() => {
            //     this.select(dragItem);
            // }, 0);
            this.drop = true;
        },
        onMouseDown(itemVm, itemIndex, event) {
            this.select(itemVm);
            this.manager = [];
            this.$refs.item.forEach((item, index)=>{
                this.resetStyle(item);
                const pre = this.manager[index - 1];
                this.manager[index] = {
                    accOffsetWidth: pre ? pre.accOffsetWidth + item.offsetWidth : 0,
                    offsetWidth: item.offsetWidth
                }
            });
            const moveItem = this.$refs.item[itemIndex];
            this.newItem = moveItem.cloneNode(true);
            moveItem.style.position = 'static';
            moveItem.style.zIndex = 111;
            moveItem.style.left = this.manager[itemIndex].accOffsetWidth + 'px';
            let right = this.manager[this.manager.length - 1].accOffsetWidth + this.manager[this.manager.length - 1].offsetWidth;
            if(itemIndex !== this.manager.length - 1) {
                right = right + this.manager[itemIndex].offsetWidth;
            }
            this.dragRange = {left: 0, right: right};
        },
        resetStyle(item) {
            item.style.position = '';
            item.style.left = '';
            item.style.top = '';
            item.style.zIndex = '';
        }
    },
};
</script>

<style module src="./index.css"></style>
