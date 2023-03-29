<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled"
    :counter="counter" :layout="layout" :size="size" :direction="direction">
    <nav :class="$style.head">
        <a :class="$style.item"
            v-for="(itemVM, index) in itemVMs"
            ref="item"
            :vusion-scope-id="itemVM.$vnode.context.$options._scopeId"
            :vusion-node-path="itemVM.$attrs['vusion-node-path']"
            :vusion-node-tag="itemVM.$attrs['vusion-node-tag']"
            :vusion-disabled-move="itemVM.$attrs['vusion-disabled-move']"
            :vusion-disabled-duplicate="itemVM.$attrs['vusion-disabled-duplicate']"
            :vusion-disabled-cut="itemVM.$attrs['vusion-disabled-cut']"
            :passed="selectedVM && index < selectedVM.index || value >= itemVMs.length && index <= value"
            :selected="selectedVM && index === selectedVM.index"
            :disabled="itemVM.disabled || disabled"
            :desc="!!(itemVM.desc || itemVM.$slots.desc)"
            v-show="!itemVM.hidden"
            :style="getItemStyle(itemVM)"
            :vusion-template-title-node-path="itemVM.$attrs['vusion-template-title-node-path']"
            :vusion-template-desc-node-path="itemVM.$attrs['vusion-template-desc-node-path']">
            <div :class="$style['item-body']" :title="itemVM.title">
                <span :class="$style.radio" @click="select(itemVM)"></span>
                <span :class="$style.title" @click="select(itemVM)"
                    vusion-slot-name="title"><f-slot :vm="itemVM" name="title">
                    {{ itemVM.title }}
                    <s-empty v-if="!itemVM.title && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
                </f-slot></span>
                <u-tooltip v-if="itemVM.tooltip || itemVM.$slots.tooltip">
                    <f-slot name="tooltip" :vm="itemVM">{{ itemVM.tooltip }}</f-slot>
                </u-tooltip>
            </div>
            <span :class="$style.desc"
                vusion-slot-name="desc"><f-slot name="desc" :vm="itemVM">
                {{ itemVM.desc }}
                <s-empty v-if="!itemVM.desc && $env.VUE_APP_DESIGNER && !!$attrs['vusion-node-path']"></s-empty>
            </f-slot></span>
        </a>
    </nav>
    <div :class="$style.body">
        <slot></slot>
    </div>
</div>
</template>

<script>
import { UTabs } from '../u-tabs.vue';

export default {
    name: 'u-steps',
    childName: 'u-step',
    extends: UTabs,
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: true },
        layout: { type: String, default: 'block' },
        size: String,
        counter: { type: Boolean, default: true },
        // direction暂时只支持USelectableSteps组件
        direction: { type: String, default: 'horizontal' },
    },
    computed: {
        currentItemWidth() {
            if (this.size === 'auto')
                return (1 / this.itemVMs.length) * 100 + '%';
            else
                return undefined;
        },
    },
    watch: {
        // This method just run once after pushing many itemVMs
        itemVMs: {
            override: true,
            handler(itemVMs) {
                // 更新列表之后，原来的选择可以已不存在，这里暂存然后重新查找一遍
                const value = this.selectedVM ? this.selectedVM.index : this.value;
                this.selectedVM = undefined;
                this.watchValue(value);
                this.$nextTick(() => {
                    this.$refs.item
                        && this.$refs.item.forEach((itemEl, index) => {
                            itemEl.__vue__ = itemVMs[index];
                        });
                });
            },
        },
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.index === value)
                return;
            if (value === undefined)
                this.selectedVM = this.autoSelect ? this.itemVMs[0] : undefined;
            else {
                this.selectedVM = this.itemVMs.find(
                    (itemVM) => itemVM.index === value,
                );
                this.selectedVM
                    && this.selectedVM.groupVM
                    && this.selectedVM.groupVM.toggle(true);
            }
        },
        select(itemVM) {
            if (this.readonly || this.disabled || (itemVM && itemVM.disabled))
                return;
            const oldValue = this.value;
            if (
                this.$emitPrevent(
                    'before-select',
                    {
                        value: itemVM && itemVM.index,
                        oldValue,
                        item: itemVM && itemVM.item,
                        itemVM,
                    },
                    this,
                )
            )
                return;
            if (this.cancelable && this.selectedVM === itemVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = itemVM;
            const value = this.selectedVM && this.selectedVM.index;
            const item = this.selectedVM && this.selectedVM.item;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit(
                'select',
                { value, oldValue, item, itemVM: this.selectedVM },
                this,
            );
        },
        getItemStyle(itemVm) {
            const itemStyle = Object.assign({}, itemVm.$vnode.data && itemVm.$vnode.data.style);
            const itemstaticStyle = Object.assign({}, itemVm.$vnode.data && itemVm.$vnode.data.staticStyle);
            return Object.assign({ width: this.currentItemWidth }, itemstaticStyle, itemStyle);
        },
    },
};
</script>

<style module>
.root {
}

.head {
    text-align: center;
}

.item {
    display: inline-block;
    position: relative;
    width: var(--steps-item-width);
    vertical-align: top;
}

.item-body {
    display: inline-block;
    color: #666;
    cursor: var(--cursor-pointer);
    position: relative;
    z-index: 2;
}

.root[readonly] .item-body {
    cursor: default;
}

.item[disabled] .item-body {
    color: var(--steps-item-color-disabled);
    cursor: var(--cursor-not-allowed);
}

.radio {
    display: inline-block;
    content: "";
    width: var(--steps-item-radio-size);
    height: var(--steps-item-radio-size);
    line-height: var(--steps-item-radio-size);
    font-size: 12px;
    border-radius: 100%;
    margin-left: -5px;
    background: var(--steps-item-radio-background);
    color: var(--color-light);
}

.root[shape-size="large"] .radio {
    width: var(--steps-item-radio-size-large);
    height: var(--steps-item-radio-size-large);
    line-height: var(--steps-item-radio-size-large);
}

.title {
    display: block;
    padding-top: 4px;
    line-height: var(--steps-item-radio-size);
}

.item::after {
    display: block;
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 12px;
    height: 1px;
    width: 100%;
    background-color: var(--steps-item-radio-background);
}

.item[passed]::after {
    background-color: var(--steps-item-radio-background-passed);
}

.item:last-child::after {
    display: none;
}

.item[passed] .radio {
    background-color: var(--steps-item-radio-background-passed);
    color: var(--steps-item-radio-color-passed);
}

.body {
    margin-top: 20px;
}

.root[counter] .head {
    counter-reset: stop;
}

.root[counter] .item {
    counter-increment: step;
}

.root[counter] .radio::before {
    content: counter(step);
}

.root[layout="block"] .title {
    display: block;
}

.root[layout="inline"] .title {
    display: inline-block;
    padding: 0 4px;
    vertical-align: -1px;
}
</style>
