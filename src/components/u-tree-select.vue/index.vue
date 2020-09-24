<template>
<div :class="$style.root" :readonly="readonly" :disabled="currentDisabled" :opened="popperOpened"
    :clearable="clearable && !!currentText" :multiple="multiple" :multiple-tags="multiple && multipleAppearance === 'tags'"
    :tabindex="readonly || currentDisabled ? '' : 0"
    @click="focus"
    @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
    @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
    @keydown.enter.stop="onEnter"
    @keydown.esc.stop="close(), filterText = ''"
    @blur="onRootBlur">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span v-show="!filterText && (!($refs.treeView && $refs.treeView.selectedVM))" :class="$style.placeholder">{{ placeholder }}</span>
    <div :class="$style.text" v-ellipsis-title :tags-overflow="tagsOverflow">
        <f-slot v-if="$refs.treeView && $refs.treeView.selectedVM" name="text" :vm="this" :props="{
            text: $refs.treeView.selectedVM.text,
            node: $refs.treeView.selectedVM.node,
            parent: $refs.treeView.selectedVM.parent,
        }">
            <span>{{ $refs.treeView.selectedVM.text }}</span>
        </f-slot>
        <!-- <div>{{ $refs.treeView && $refs.treeView.selectedVM && $refs.treeView.selectedVM.text }}</div> -->
        <span v-if="multipleAppearance === 'text'">{{ currentText }}</span>
        <!-- <template v-else-if="multipleAppearance === 'tags'">
            <template v-if="tagsOverflow === 'hidden' || tagsOverflow === 'visible'">
                <span :class="$style.tag" v-for="(itemVM, index) in selectedVMs" :key="duplicated ? itemVM.value + '_' + index : itemVM.value">
                    <span :class="$style['tag-text']">{{ itemVM.currentText }}</span>
                    <span :class="$style['tag-remove']" @click.stop="select(itemVM, false)"></span>
                </span>
            </template>
            <template v-else-if="tagsOverflow === 'collapse'">
                <span :class="$style.tag" v-if="selectedVMs[0]" :key="selectedVMs[0].value">
                    <span :class="$style['tag-text']">{{ selectedVMs[0].currentText }}</span>
                    <span :class="$style['tag-remove']" @click.stop="select(selectedVMs[0], false)"></span>
                </span>
                <span :class="$style.tag" v-if="selectedVMs.length > 1">
                    <span :class="$style['tag-text']">+{{ selectedVMs.length - 1 }}</span>
                </span>
            </template>
        </template> -->
        <!-- <u-input v-if="filterable" :class="$style.input" ref="input" :readonly="readonly" :disabled="currentDisabled"
            :placeholder="multiple && selectedVMs.length ? '' : placeholder" :filterable="filterable" :multiple-tags="multiple && this.multipleAppearance === 'tags'"
            :value="filterText" @input="onInput" @focus="onFocus" @blur="onBlur"
            @keydown.enter.stop="onInputEnter" @keydown.delete.stop="onInputDelete"
            :style="{ width: multiple && (inputWidth + 'px') }">
        </u-input> -->
    </div>
    <span v-if="clearable && !!currentText" :class="$style.clearable" @click="clear"></span>
    <m-popper :class="$style.popper" ref="popper" append-to="reference" :disabled="readonly || currentDisabled"
        @update:opened="$emit('update:opened', $event, this)"
        @before-open="$emit('before-open', $event, this)"
        @before-close="$emit('before-close', $event, this)"
        @open="onOpen"
        @close="onClose"
        @click.stop>
        <u-tree-view ref="treeView" style="border: none; min-width: 300px;"
            :value="value"
            :values="values"
            :data="data"
            :data-source="dataSource"
            :text-field="textField"
            :value-field="valueField"
            :is-leaf-field="isLeafField"
            :children-field="childrenField"
            :more-children-fields="moreChildrenFields"
            :cancelable="cancelable"
            :checkable="cancelable"
            :accordion="accordion"
            :expand-trigger="expandTrigger"
            :initial-load="initialLoad"
            :readonly="readonly"
            :disabled="disabled"
            @change="$emit('change', $event, this)"
            @before-select="$emit('before-select', $event, this)"
            @input="$emit('input', $event, this)"
            @update:value="$emit('update:value', $event, this)"
            @toggle="$emit('toggle', $event, this)"
            @check="$emit('check', $event, this)"
            >
            <template #text="props"><slot name="text" v-bind="props">{{ props.text }}</slot></template>
            <slot></slot>
        </u-tree-view>
    </m-popper>
</div>
</template>

<script>
import MField from '../m-field.vue';

export default {
    name: 'u-tree-select',
    mixins: [MField],
    props: {
        value: null,
        values: Array,
        field: String,
        data: Array,
        dataSource: [Array, Object, Function],
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        isLeafField: { type: String, default: 'isLeaf' },
        childrenField: { type: String, default: 'children' },
        moreChildrenFields: Array,
        cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        initialLoad: { type: Boolean, default: true },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        duplicated: { type: Boolean, default: false },
        multipleAppearance: { type: String, default: 'tags' },
        tagsOverflow: { type: String, default: 'visible' },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        opened: { type: Boolean, default: false },
    },
    data() {
        return {
            focusedVM: undefined, // @inherit: currentMultiple: this.multiple,
            // @inherit: currentDataSource: undefined,
            // @inherit: currentLoading: false,
            currentText: '', // 显示文本
            filterText: '', // 过滤文本，只有 input 时会改变它
            preventBlur: false,
            inputWidth: 20,
            popperOpened: false,
        };
    },
    computed: {
        currentDisabled() {
            if (this.disabled)
                return true;
            else if (this.emptyDisabled)
                return this.currentData ? !this.currentData.length : !this.itemVMs.length;
            else
                return false;
        },
    },
    watch: {
        filterText(filterText) {
            this.inputWidth = filterText.length * 12 + 20;
        },
        opened(opened) {
            if (opened === this.popperOpened)
                return;
            this.toggle(opened);
        },
    },
    mounted() {
        this.autofocus && this.$el.focus();
        this.toggle(this.opened);
        setTimeout(() => this.$forceUpdate());
    },
    methods: {
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onOpen($event) {
            this.popperOpened = true; // 刚打开时，除非是没有加载，否则保留上次的 filter 过的数据
            // if (this.filterable && !this.currentDataSource.initialLoaded) {
            //     this.load().then(() => {
            //         this.ensureFocusedInView(true);
            //         this.$refs.input.focus();
            //     });
            // } else
            //     setTimeout(() => this.ensureFocusedInView(true));
            this.$emit('open', $event, this);
            this.$emit('update:opened', true);
        },
        onClose($event) {
            this.popperOpened = false;
            this.focusedVM = undefined;
            this.$emit('close', $event, this);
            this.$emit('update:opened', false);
        },
        onFocus() {
            // @disabled
        },
        onInput(value) {
            if (!this.filterable)
                return;
            this.currentText = value; // value.split(',')
            if (this.$emitPrevent('before-filter', { filterText: value }, this))
                return;
            this.filterText = value;
            this.fastLoad(false, true);
            this.open();
        },
        onBlur() {
            // if (!this.filterable)
            //     return; // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            // setTimeout(() => {
            //     if (this.preventBlur)
            //         return (this.preventBlur = false);
            //     this.selectByText(this.filterText);
            // }, 200);
            // this.close();
        },
        onRootBlur() {
            // this.close();
        },
        focus() {
            if (this.filterable)
                this.$refs.input.focus();
        },
        blur() {
            if (this.filterable)
                this.$refs.input.blur();
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    position: relative;
    user-select: none;
    max-width: 100%;
    cursor: var(--cursor-pointer);
    width: var(--select-width);
    height: var(--select-height);
    line-height: calc(var(--select-height) - var(--select-border-width) * 2);
    padding: 0 var(--select-padding-x);
    padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x));
    background: var(--select-background);
    border: var(--select-border-width) solid var(--select-border-color);
    color: var(--select-color);
    border-radius: var(--border-radius-base);
}

.root:focus {
    outline: var(--focus-outline);
    box-shadow: var(--select-box-shadow-focus);
}

.baseline {
    visibility: hidden;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

.placeholder {
    color: var(--select-placeholder-color);
    position: absolute;
    left: 0;
    top: 0;
    padding: inherit;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.clearable::before {
    display: block;
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    z-index: 1;
    line-height: 1;
    height: 1em;
    margin: auto;
    icon-font: url('../i-icon.vue/assets/close-solid.svg');
    cursor: var(--cursor-pointer);
    color: #a7afbb;
}

.root[filterable] {
    cursor: text;
}

.root::after {
    position: absolute;
    icon-font: url('../i-icon.vue/icons/keyboard-arrow-down.svg');
    font-size: var(--select-arrow-size);
    right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x));
    top: 0;
    bottom: 0;
    line-height: 1.2;
    height: 1em;
    margin: auto;
    color: var(--select-arrow-color);
    transition: transform var(--transition-duration-base);
}
.root[opened]::after {
    transform: rotate(-180deg);
}

.root[clearable]::after {
    display: none;
}

.root[readonly] {
    cursor: default;
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--select-background-disabled);
    color: var(--select-color-disabled);
    border: 1px solid var(--brand-disabled);
}

.text {
    display: block;
    float: left;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: inherit;
}

.root[multiple-tags], .root[multiple-tags][size] {
    height: auto;
    padding: var(--select-tags-padding);
    line-height: var(--select-tags-line-height);
}

.root[multiple-tags] .text[tags-overflow="visible"] {
    overflow: visible;
    white-space: normal;
}

.tag {
    display: inline-block;
    padding: var(--select-tag-padding);
    font-size: var(--font-size-small);
    line-height: var(--select-tag-line-height);
    vertical-align: 1px;
    background: var(--select-tag-background);
    border-radius: 2px;
}

.tag:not(:last-child) {
    margin-right: var(--select-tag-margin-x);
}

.tag-remove {
    margin-left: var(--select-tag-margin-x);
    color: var(--select-tag-remove-color);
}

.tag-remove::before {
    icon-font: url('../i-icon.vue/assets/close.svg');
}

.tag-remove:hover {
    color: var(--select-tag-remove-color-hover);
}

.input {
    position: absolute;
    border: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.input[multiple-tags][filterable] {
    position: relative;
    display: inline-block;
    width: var(--select-tags-filterable-width);
    line-height: var(--select-tags-line-height);
    padding: 0;
}

.popper {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    line-height: var(--select-popper-line-height);
    max-height: var(--select-popper-max-height);
    overflow: auto;
    background: var(--select-popper-background);
    border: 1px solid var(--select-popper-border-color);
    z-index: var(--z-index-popper);
    margin-top: 1px;
    border-radius: var(--border-radius-base);
    box-shadow: var(--select-popper-box-shadow);
}

.status {
    color: var(--select-status-color);
    text-align: center;
    padding: var(--list-view-item-padding);
}

.label {
    padding-right: 10px;
    color: var(--select-color-disabled);
}

.flag {
    position: absolute;
    top: 0;
    left: 0;
    border: 7px solid;
    border-color: #4ec9ab transparent transparent #4ec9ab;
}

.flag[layer="high"] {
    width: 14px;
    height: 14px;
    border: none;
    background-image: url("../../assets/images/high.png");
}

.root[size$="mini"] { width: var(--select-width-mini); padding: 0 var(--select-padding-x-mini); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-mini)); }
.root[size$="mini"] .item { padding: 0 var(--select-padding-x-mini); }
.root[size$="mini"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-mini)); }
.root[size^="mini"] { height: var(--select-height-mini); line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2); }
.root[size^="mini"] .item { line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2); }
.root[size^="mini"] .popper { max-height: calc(6 * calc(var(--select-height-mini) - var(--select-border-width) * 2)); }

.root[size$="small"] { width: var(--select-width-small); padding: 0 var(--select-padding-x-small); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-small)); }
.root[size$="small"] .item { padding: 0 var(--select-padding-x-small); }
.root[size$="small"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-small)); }
.root[size^="small"] { height: var(--select-height-small); line-height: calc(var(--select-height-small) - var(--select-border-width) * 2); }
.root[size^="small"] .item { line-height: calc(var(--select-height-small) - var(--select-border-width) * 2); }
.root[size^="small"] .popper { max-height: calc(6 * calc(var(--select-height-small) - var(--select-border-width) * 2)); }

.root[size$="normal"] { width: var(--select-width); padding: 0 var(--select-padding-x); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x)); }
.root[size$="normal"] .item { padding: 0 var(--select-padding-x); }
.root[size$="normal"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x)); }
.root[size^="normal"] { height: var(--select-height); line-height: calc(var(--select-height) - var(--select-border-width) * 2); }
.root[size^="normal"] .item { line-height: calc(var(--select-height) - var(--select-border-width) * 2); }
.root[size^="normal"] .popper { max-height: calc(6 * calc(var(--select-height) - var(--select-border-width) * 2)); }

.root[size$="medium"] { width: var(--select-width-medium); padding: 0 var(--select-padding-x-medium); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-medium)); }
.root[size$="medium"] .item { padding: 0 var(--select-padding-x-medium); }
.root[size$="medium"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-medium)); }
.root[size^="medium"] { height: var(--select-height-medium); line-height: calc(var(--select-height-medium) - var(--select-border-width) * 2); }
.root[size^="medium"] .item { line-height: calc(var(--select-height-medium) - var(--select-border-width) * 2); }
.root[size^="medium"] .popper { max-height: calc(6 * calc(var(--select-height-medium) - var(--select-border-width) * 2)); }

.root[size$="large"] { width: var(--select-width-large); padding: 0 var(--select-padding-x-large); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-large)); }
.root[size$="large"] .item { padding: 0 var(--select-padding-x-large); }
.root[size$="large"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-large)); }
.root[size^="large"] { height: var(--select-height-large); line-height: calc(var(--select-height-large) - var(--select-border-width) * 2); }
.root[size^="large"] .item { line-height: calc(var(--select-height-large) - var(--select-border-width) * 2); }
.root[size^="large"] .popper { max-height: calc(6 * calc(var(--select-height-large) - var(--select-border-width) * 2)); }

.root[size$="huge"] { width: var(--select-width-huge); padding: 0 var(--select-padding-x-huge); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-huge)); }
.root[size$="huge"] .item { padding: 0 var(--select-padding-x-huge); }
.root[size$="huge"]::after { right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-huge)); }
.root[size^="huge"] { height: var(--select-height-huge); line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2); }
.root[size^="huge"] .item { line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2); }
.root[size^="huge"] .popper { max-height: calc(6 * calc(var(--select-height-huge) - var(--select-border-width) * 2)); }

.root[size$="full"] { width: 100%; padding: 0 var(--select-padding-x-full); padding-right: calc(var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) * var(--select-padding-x-full)); }
.root[size$="full"] .item { padding: 0 var(--select-padding-x-full); }
.root[size^="full"] { height: 100%; }
</style>
