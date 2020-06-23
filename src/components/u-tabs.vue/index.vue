<template>
<div :class="$style.root" :disabled="disabled" :appear="appear" :size="size">
    <div :class="$style.head">
        <span :class="$style.extra"><slot name="extra"></slot></span>
        <nav :class="$style.nav" :scrollable="showScrollButtons === 'always' || (showScrollButtons === 'auto' && scrollable)">
            <span :class="$style.prev" @click="scrollPrev"></span>
            <div ref="scrollView" :class="$style['scroll-view']">
                <div :class="$style.scroll">
                    <a :class="$style.item" ref="item"
                        v-for="itemVM in itemVMs"
                        :vusion-scope-id="itemVM.$vnode.context.$options._scopeId"
                        :vusion-node-path="itemVM.$attrs['vusion-node-path']"
                        :href="itemVM.currentHref" :target="itemVM.target" :title="itemVM.title"
                        :selected="router ? itemVM.active : itemVM === selectedVM"
                        :disabled="itemVM.disabled || disabled"
                        v-show="!itemVM.hidden"
                        :style="{ width: currentItemWidth }"
                        :width-fixed="!!currentItemWidth"
                        @click="onClick(itemVM, $event)">
                        <span :class="$style.title"><f-slot :vm="itemVM" name="title">{{ itemVM.title }}</f-slot></span>
                        <span v-if="closable" :class="$style.close" @click.stop="close(itemVM)"></span>
                    </a>
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
import { scrollTo } from '../../utils/style';

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
    },
    data() {
        return { scrollable: false };
    },
    watch: {
        itemVMs(itemVMs) {
            this.$nextTick(() => {
                this.scrollable =
                    this.$refs.scrollView.scrollWidth >
                    this.$refs.scrollView.clientWidth;
                this.$refs.item &&
                    this.$refs.item.forEach((itemEl, index) => {
                        itemEl.__vue__ = itemVMs[index];
                    });
            });
        },
    },
    computed: {
        currentItemWidth() {
            if (this.itemWidth === 'full')
                return (1 / this.itemVMs.length) * 100 + '%';
            else if (this.itemWidth === 'auto') return undefined;
            else return this.itemWidth;
        },
    },
    methods: {
        onClick(itemVM, e) {
            this.select(itemVM); // 为了兼容
            if (this.router) {
                if (itemVM.disabled) return e.preventDefault();
                itemVM.$emit('click', e, itemVM);
                if (itemVM.target !== '_self') return; // 使用`to`的时候走`$router`，否则走原生
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
            if (this.readonly || this.disabled || itemVM.disabled) return;
            const oldValue = this.value;
            let cancel = false;
            this.$emit(
                'before-close',
                {
                    value: itemVM && itemVM.value,
                    oldValue,
                    itemVM,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel) return;
            itemVM.parentVM = undefined;
            const index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);
            cancel = false;
            this.$emit(
                'close',
                {
                    value: itemVM && itemVM.value,
                    oldValue,
                    itemVM,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel) return;
            if (this.selectedVM === itemVM) {
                this.selectedVM =
                    this.itemVMs[index] || this.itemVMs[index - 1];
                const value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        },
        scrollPrev() {
            const scrollViewEl = this.$refs.scrollView;
            const children = scrollViewEl.children[0].children; // 查找第一个不截断的项
            let accWidth = 0;
            if (scrollViewEl.scrollLeft - scrollViewEl.clientWidth > 0) {
                for (let i = 0; i < children.length; i++) {
                    const itemEl = children[i];
                    accWidth += itemEl.offsetWidth;
                    if (
                        accWidth + itemEl.offsetWidth >
                        scrollViewEl.scrollLeft - scrollViewEl.clientWidth
                    )
                        break;
                }
            }
            scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
        },
        scrollNext() {
            const scrollViewEl = this.$refs.scrollView;
            const children = scrollViewEl.children[0].children; // 查找第一个不截断的项
            let accWidth = 0;
            for (let i = 0; i < children.length; i++) {
                const itemEl = children[i];
                if (
                    accWidth + itemEl.offsetWidth >
                    scrollViewEl.scrollLeft + scrollViewEl.clientWidth
                )
                    break;
                accWidth += itemEl.offsetWidth;
            }
            scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
        },
    },
};
</script>

<style module>
.root {}

.head {
    user-select: none;
    background: var(--tabs-head-background);
}

.root[appear="square"] .head,
.root[appear="round"] .head,
.root[appear="line"] .head {
    border-bottom: var(--tabs-border-width) solid var(--tabs-border-color);
}

.extra {
    float: right;
    margin-left: 5px;
    line-height: calc(var(--tabs-item-height) - var(--tabs-border-width) * 2);
}

.nav {
    position: relative;
    overflow: hidden;
    height: var(--tabs-item-height);
    margin-bottom: -1px;
}

.scroll-view {
    overflow-x: auto;
    overflow-y: hidden;
}

.scroll {
    white-space: nowrap;
}

.prev, .next {
    position: absolute;
    display: none;
    cursor: pointer;
    height: var(--tabs-item-height);
    width: var(--tabs-item-height);
    line-height: var(--tabs-item-height);
    text-align: center;
    font-size: 22px;
    bottom: 2px;
    color: rgba(0, 0, 0, 0.25);
    transition: color var(--transition-duration-base);
}

.prev:hover, .next:hover {
    color: rgba(0, 0, 0, 0.65);
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.prev::before {
    icon-font: url('../i-icon.vue/assets/angle-left.svg');
}

.next::before {
    icon-font: url('../i-icon.vue/assets/angle-right.svg');
}

.nav[scrollable] .scroll-view {
    margin: 0 var(--tabs-item-height);
}

.nav[scrollable] .prev, .nav[scrollable] .next {
    display: block;
}

.item {
    position: relative;
    z-index: 1;
    display: inline-block;
    user-select: none;
    cursor: var(--cursor-pointer);
    line-height: var(--tabs-item-height);
    padding: 0 var(--tabs-item-padding-x);
    transition: color var(--transition-duration-base);
}

.item[disabled] {
    cursor: var(--cursor-not-allowed);
}

.root[appear="text"] .item {
    color: var(--tabs-item-color);
}

.root[appear="text"] .item:hover {
    background: var(--tabs-item-background-hover);
    color: var(--tabs-item-color-hover);
}

.root[appear="text"] .item[selected] {
    background: var(--tabs-item-background-selected);
    color: var(--tabs-item-color-selected);
}

.root[appear="capsule"] .item {
    margin-right: -1px;
    line-height: calc(var(--tabs-item-height) - var(--tabs-border-width) * 2);
    border: var(--tabs-border-width) solid var(--tabs-border-color);
}

.root[appear="capsule"] .item:hover {
    color: var(--tabs-item-color-hover);
}

.root[appear="capsule"] .item[selected] {
    z-index: 2;
    background: var(--tabs-item-background-selected-capsule);
    color: var(--tabs-item-color-selected-capsule);
    border-color: var(--tabs-item-border-color-selected-capsule);
}

.root[appear="square"] .item {
    box-sizing: content-box;
    height: var(--tabs-item-height);
    line-height: var(--tabs-item-height);
    border: var(--tabs-border-width) solid transparent;
    border-bottom: none;
}

.root[appear="square"] .item:hover {
    background: var(--tabs-item-background-hover);
}

.root[appear="square"] .item[selected] {
    background: var(--tabs-item-background-selected);
    color: var(--tabs-item-color-selected);
    border-color: var(--tabs-item-border-color-selected);
    border-bottom-color: transparent;
    padding-bottom: var(--tabs-border-width);
    border-top: var(--tabs-item-line-width) solid var(--brand-primary);
}

.root[appear="square"] .item[disabled] {
    background: var(--tabs-item-background-disabled);
    color: var(--tabs-item-color-disabled);
}

.root[appear="square"] .item[selected][disabled] {
    background: var(--tabs-item-background-selected-disabled);
}

.root[appear="round"] .item {
    box-sizing: content-box;
    line-height: var(--tabs-item-height);
    border: var(--tabs-border-width) solid transparent;
    border-bottom: none;
}

.root[appear="round"] .item:hover {
    background: var(--tabs-item-background-hover);
}

.root[appear="round"] .item[selected] {
    background: var(--tabs-item-background-selected);
    color: var(--tabs-item-color-selected);
    border-color: var(--tabs-item-border-color-selected);
    border-bottom-color: transparent;
    padding-bottom: var(--tabs-border-width);
    border-radius: var(--tabs-item-border-radius-round) var(--tabs-item-border-radius-round) 0 0;
}

.root[appear="round"] .item[disabled] {
    background: var(--tabs-item-background-disabled);
    color: var(--tabs-item-color-disabled);
}

.root[appear="round"] .item[selected][disabled] {
    background: var(--tabs-item-background-selected-disabled);
}

.root[appear="line"] .item {
    padding-bottom: var(--tabs-item-line-width);
}

.root[appear="line"] .item:hover {
    background: none;
    color: var(--color-dark);
}

.root[appear="line"] .item[selected] {
    color: var(--brand-primary);
}


.root[appear="line"] .item::after {
    display: block;
    content: '';
    position: absolute;
    height: var(--tabs-item-line-width);
    bottom: 0;
    background: var(--brand-primary);
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width var(--transition-duration-base);
}

.root[appear="line"] .item[selected]::after {
    width: 100%;
}

.close {
    vertical-align: middle;
    margin-left: 2px;
}

.close::before {
    icon-font: url('i-material-design.vue/assets/filled/close.svg');
}

.close:hover {
    color: var(--color-light);
}

.body {
    margin-top: var(--tabs-body-space);
}

.root[size="small"] .body {
    margin-top: var(--tabs-body-space-small);
}

.root[size="mini"] .body {
    margin-top: var(--tabs-body-space-mini);
}

.root[size="small"] .nav {
    height: var(--tabs-item-height-small);
}

.root[size="mini"] .nav {
    height: var(--tabs-item-height-mini);
}

.root[appear="round"] .nav,
.root[appear="line"] .nav {
    height: calc(var(--tabs-item-height) + var(--tabs-item-line-width));
}

.root[size="small"][appear="round"] .nav,
.root[size="small"][appear="line"] .nav {
    height: calc(var(--tabs-item-height-small) + var(--tabs-item-line-width));
}

.root[size="mini"][appear="round"] .nav,
.root[size="mini"][appear="line"] .nav {
    height: calc(var(--tabs-item-height-mini) + var(--tabs-item-line-width));
}

.root[appear="square"] .nav {
    height: calc(var(--tabs-item-height) + var(--tabs-border-width) + var(--tabs-item-line-width));
}

.root[size="small"][appear="square"] .nav {
    height: calc(var(--tabs-item-height-small) + var(--tabs-border-width) + var(--tabs-item-line-width));
}

.root[size="mini"][appear="square"] .nav {
    height: calc(var(--tabs-item-height-mini) + var(--tabs-border-width) + var(--tabs-item-line-width));
}

.root[appear="square"] .item,
.root[appear="round"] .item {
    height: var(--tabs-item-height);
}

.root[size="small"] .item {
    line-height: var(--tabs-item-height-small);
    padding: 0 var(--tabs-item-padding-x-small);
}

.root[size="small"][appear="square"] .item,
.root[size="small"][appear="round"] .item {
    height: var(--tabs-item-height-small);
}

.root[size="mini"] .item {
    line-height: var(--tabs-item-height-mini);
    padding: 0 var(--tabs-item-padding-x-mini);
}

.root[size="mini"][appear="square"] .item,
.root[size="mini"][appear="round"] .item {
    height: var(--tabs-item-height-mini);
}

.item[width-fixed] {
    text-align: center;
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.root[display="full"] {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.root[display="filled"] {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.root[display="filled"] .head {
    flex: none;
}

.root[display="filled"] .body {
    flex: auto;
    overflow: hidden;
}
</style>
