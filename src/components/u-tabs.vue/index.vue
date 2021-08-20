<template>
<div :class="$style.root" :disabled="disabled" :appear="appear" :size="size">
    <div :class="$style.head">
        <span :class="[$style.extra, $env.VUE_APP_DESIGNER ? $style.gap : null]" vusion-slot-name="extra">
            <slot name="extra"></slot>
        </span>
        <nav :class="$style.nav" :scrollable="showScrollButtons === 'always' || (showScrollButtons === 'auto' && scrollable)">
            <span :class="$style.prev" @click="scrollPrev"></span>
            <div ref="scrollView" :class="$style['scroll-view']">
                <div :class="$style.scroll">
                    <a :class="$style.item" ref="item"
                        v-for="(itemVM, index) in itemVMs"
                        :is-sub="itemVM.$attrs['is-sub']"
                        :vusion-scope-id="itemVM.$vnode.context.$options._scopeId"
                        :vusion-node-path="itemVM.$attrs['vusion-node-path']"
                        :vusion-node-tag="itemVM.$attrs['vusion-node-tag']"
                        :href="itemVM.currentHref" :target="itemVM.target" :title="itemVM.title"
                        :selected="router ? itemVM.active : itemVM === selectedVM"
                        :disabled="itemVM.disabled || disabled"
                        v-show="!itemVM.hidden"
                        :style="{ width: currentItemWidth }"
                        :width-fixed="!!currentItemWidth"
                        :alignment="itemAlign"
                        @click="onClick(itemVM, $event)">
                        <span :class="$style.title" vusion-slot-name="title"><f-slot :vm="itemVM" name="title">{{ itemVM.title }}</f-slot></span>
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
    },
    data() {
        return { scrollable: false };
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
                this.scrollable
                    = this.$refs.scrollView.scrollWidth
                        > this.$refs.scrollView.clientWidth;
                this.$refs.item
                    && this.$refs.item.forEach((itemEl, index) => {
                        itemEl.__vue__ = itemVMs[index];
                    });
            });
        },
    },
    methods: {
        onClick(itemVM, e) {
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
        scrollPrev() {
            const scrollViewEl = this.$refs.scrollView;
            const children = scrollViewEl.children[0].children; // 查找第一个不截断的项
            let accWidth = 0;
            if (scrollViewEl.scrollLeft - scrollViewEl.clientWidth > 0) {
                for (let i = 0; i < children.length; i++) {
                    const itemEl = children[i];
                    accWidth += itemEl.offsetWidth;
                    if (
                        accWidth + itemEl.offsetWidth
                        > scrollViewEl.scrollLeft - scrollViewEl.clientWidth
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
                    accWidth + itemEl.offsetWidth
                    > scrollViewEl.scrollLeft + scrollViewEl.clientWidth
                )
                    break;
                accWidth += itemEl.offsetWidth;
            }
            scrollTo(scrollViewEl, { left: accWidth, duration: 1000 });
        },
    },
};
</script>

<style module src="./index.css"></style>
