<template>
<div :class="$style.root" :readonly="readonly" :disabled="currentDisabled" :opened="popperOpened"
    :clearable="clearable && !!currentText" :multiple="multiple" :multiple-tags="multiple && this.multipleAppearance === 'tags'"
    :tabindex="readonly || currentDisabled ? '' : 0"
    @click="focus"
    @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
    @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
    @keydown.enter.stop="onEnter"
    @keydown.esc.stop="close(), filterText = ''">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span v-show="!filterText && (multiple ? !selectedVMs.length : !selectedVM)" :class="$style.placeholder">{{ placeholder }}</span>
    <div :class="$style.text" v-ellipsis-title :tags-overflow="tagsOverflow" :style="{direction: ellipsisDirection}">
        <!-- @override: 添加了flag功能 -->
        <slot name="flag">
            <span v-if="selectedVM && selectedVM.flag !== undefined" :class="$style.flag" :layer="selectedVM && selectedVM.layer" v-tooltip.top="selectedVM && selectedVM.flag"></span>
        </slot>
        <span :class="$style.label" v-if="label || $slots.label">
            {{ label }}
            <slot name="label"></slot>
        </span>
        <f-render v-if="!multiple && !filterable" :vnode="selectedVM && selectedVM.$slots.default"></f-render>
        <span v-else-if="this.multipleAppearance === 'text'">{{ currentText }}</span>
        <template v-else-if="this.multipleAppearance === 'tags'">
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
        </template>
        <u-input v-if="filterable" :class="$style.input" ref="input" :readonly="readonly" :disabled="currentDisabled"
            :placeholder="multiple && selectedVMs.length ? '' : placeholder" :filterable="filterable" :multiple-tags="multiple && this.multipleAppearance === 'tags'"
            :value="filterText" @input="onInput" @focus="onFocus" @blur="onBlur"
            @keydown.enter.stop="onInputEnter" @keydown.delete.stop="onInputDelete"
            :style="{ width: multiple && (inputWidth + 'px') }">
        </u-input>
    </div>
    <span v-if="clearable && !!currentText" :class="$style.clearable" @click="clear"></span>
    <m-popper :class="$style.popper" ref="popper" append-to="reference" :disabled="readonly || currentDisabled"
        @update:opened="$emit('update:opened', $event, this)"
        @before-open="$emit('before-open', $event, this)"
        @before-close="$emit('before-close', $event, this)"
        @open="onOpen"
        @close="onClose"
        @before-toggle="$emit('before-toggle', $event, this)"
        @toggle="$emit('toggle', $event, this)"
        @click.stop @scroll.stop="onScroll">
        <slot></slot>
        <template v-if="currentData">
            <component :is="ChildComponent"
                v-for="(item, index) in currentData"
                v-if="item"
                :key="filterable ? item[valueField] + '_' + index : item[valueField]"
                :value="item[valueField]"
                :disabled="item.disabled || disabled"
                :item="item">
            <slot name="text" :item="item" :text="item[field || textField]" :value="item[valueField]" :disabled="item.disabled || disabled">{{ item[field || textField] }}</slot>
            </component>
        </template>
        <div :class="$style.status" status="loading" v-if="currentLoading">
            <slot name="loading"><u-spinner></u-spinner> {{ loadingText }}</slot>
        </div>
    </m-popper>
</div>
</template>

<script>
import { UListView } from '../u-list-view.vue';
import { ellipsisTitle } from '../../directives';
import i18n from './i18n';

export default {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    isSelect: true,
    directives: { ellipsisTitle },
    extends: UListView,
    i18n,
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: value: Array,
        // @inherit: field: String,
        // @inherit: textField: { type: String, default: 'text' },
        // @inherit: valueField: { type: String, default: 'value' },
        // @inherit: data: Array,
        // @inherit: dataSource: [DataSource, Function, Object],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        duplicated: { type: Boolean, default: false },
        multipleAppearance: { type: String, default: 'tags' },
        tagsOverflow: { type: String, default: 'visible' },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false }, // @inherit: loadingText: { type: String, default: '加载中...' },
        emptyText: {
            type: String,
            default() {
                return this.$t('emptyText');
            },
        },
        emptyDisabled: { type: Boolean, default: false }, // @inherit: initialLoad: { type: Boolean, default: true },
        // @inherit: pageable: { type: Boolean, default: false },
        // @inherit: pageSize: { type: Number, default: 50 },
        // @inherit: remotePaging: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        autoComplete: { type: Boolean, default: false },
        opened: { type: Boolean, default: false },
        label: { type: String, default: '' },
        ellipsisDirection: { type: String, default: 'ltr' },
    },
    data() {
        return {
            // @inherit: ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
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
        filtering() {
            return {
                [this.field || this.textField]: {
                    operator: this.matchMethod,
                    value: this.filterText,
                    caseInsensitive: !this.caseSensitive,
                },
            };
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
    created() {
        this.$watch('selectedVM', (selectedVM, oldVM) => {
            if (
                selectedVM
                && oldVM
                && selectedVM.currentText === oldVM.currentText
            )
                return;
            if (this.filterable)
                this.filterText = this.selectedVM ? this.selectedVM.currentText : '';
            else
                this.currentText = this.selectedVM ? this.selectedVM.currentText : '';
        });
        this.$watch('selectedVMs', (selectedVMs) => {
            this.currentText = selectedVMs
                .map((itemVM) => itemVM.currentText)
                .join(', ');
            const popperVM = this.$refs.popper;
            popperVM && popperVM.currentOpened && popperVM.scheduleUpdate();
        });
        this.$on('select', ($event) => {
            if (!this.multiple)
                this.close();
            if (this.filterable) {
                this.filterText = this.selectedVM ? this.selectedVM.currentText : '';
                setTimeout(() => {
                    this.$refs.input.focus();
                    setTimeout(() => {
                        const inputEl = this.$refs.input.$refs.input;
                        inputEl.setSelectionRange(
                            inputEl.value.length,
                            inputEl.value.length,
                        );
                    });
                });
            }
        });
    },
    mounted() {
        this.toggle(this.opened);
    },
    methods: {
        getExtraParams() {
            return { filterText: this.filterText };
        },
        getDataSourceOptions() {
            return {
                viewMode: 'more',
                paging: this.paging,
                remotePaging: this.remotePaging,
                filtering: this.filtering,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
            };
        },
        shift(count) {
            let focusedIndex = this.itemVMs.indexOf(
                this.focusedVM || this.selectedVM,
            );
            if (count > 0) {
                for (
                    let i = focusedIndex + count;
                    i < this.itemVMs.length;
                    i++
                ) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit(
                            'shift',
                            {
                                focusedIndex,
                                focusedVM: itemVM,
                                value: itemVM.value,
                            },
                            this,
                        );
                        this.ensureFocusedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (focusedIndex === -1)
                    focusedIndex = this.itemVMs.length;
                for (let i = focusedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit(
                            'shift',
                            {
                                focusedIndex,
                                focusedVM: itemVM,
                                value: itemVM.value,
                            },
                            this,
                        );
                        this.ensureFocusedInView();
                        break;
                    }
                }
            }
        },
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
            if (this.filterable && !this.currentDataSource.initialLoaded) {
                this.load().then(() => {
                    this.ensureFocusedInView(true);
                    this.$refs.input.focus();
                });
            } else
                setTimeout(() => this.ensureFocusedInView(true));
            this.$emit('open', $event, this);
            this.$emit('update:opened', true);
        },
        onClose($event) {
            this.popperOpened = false;
            this.focusedVM = undefined;
            this.$emit('close', $event, this);
            this.$emit('update:opened', false);
        },
        fastLoad(more, keep) {
            if (!this.currentDataSource)
                return;
            this.currentDataSource.filter(this.filtering);
            return this.currentDataSource.mustRemote() ? this.debouncedLoad(more, keep) : this.load(more, keep);
        },
        load(more, keep) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;
            if (this.currentLoading)
                return Promise.resolve(); // @TODO: dataSource 的多次 promise 必须串行
            // return this.promiseSequence = this.promiseSequence.then(() => {
            this.currentLoading = true;
            return dataSource[more ? 'loadMore' : 'load']()
                .then((data) => {
                    this.currentLoading = false;
                    this.ensureSelectedInItemVMs();
                    this.$refs.popper.currentOpened
                        && this.$refs.popper.scheduleUpdate();
                    return data;
                })
                .catch(() => (this.currentLoading = false)); // });
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
            if (!this.filterable)
                return; // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            setTimeout(() => {
                if (this.preventBlur)
                    return (this.preventBlur = false);
                this.selectByText(this.filterText);
            }, 200);
        },
        selectByText(text) {
            if (this.multiple) {
                const oldVMs = this.selectedVMs;
                const selectedVM = this.itemVMs.find(
                    (itemVM) => itemVM.currentText === text,
                ); // 如果没有匹配项则恢复到上一个状态
                if (!selectedVM && text) {
                    if (this.autoComplete) {
                        this.prependItem(text);
                        this.$nextTick(() =>
                            this.select(this.itemVMs[0], true),
                        );
                    } else {
                        this.filterText = '';
                        this.fastLoad(); // ensure
                    }
                } else {
                    if (oldVMs.some((itemVM) => itemVM.currentText === text)) {
                        this.filterText = '';
                        this.fastLoad(); // ensure
                        return;
                    }
                    this.select(selectedVM, true);
                }
            } else {
                const oldVM = this.selectedVM;
                if (!oldVM && !text)
                    return;
                else if (oldVM && text === oldVM.currentText)
                    return this.ensureSelectedInItemVMs();
                const selectedVM = this.itemVMs.find(
                    (itemVM) => itemVM.currentText === text,
                ); // 如果没有匹配项则恢复到上一个状态
                if (!selectedVM && text) {
                    if (this.autoComplete) {
                        this.prependItem(text);
                        this.$nextTick(() =>
                            this.select(this.itemVMs[0], false),
                        );
                    } else {
                        this.filterText = oldVM ? oldVM.currentText : '';
                        this.fastLoad(); // ensure
                    }
                } else
                    this.select(selectedVM, false);
            }
        },
        prependItem(text) {
            this.currentDataSource.prepend({ text, value: text });
        },
        onEnter() {
            if (this.focusedVM)
                this.select(this.focusedVM);
            this.close();
        },
        onInputEnter() {
            if (this.focusedVM)
                this.select(this.focusedVM);
            else
                this.selectByText(this.filterText);
            this.close();
        },
        onInputDelete() {
            if (this.filterable && this.filterText === '') {
                if (!this.selectedVMs.length)
                    return;
                const lastItemVM = this.selectedVMs[
                    this.selectedVMs.length - 1
                ];
                this.select(lastItemVM, false);
            }
        },
        clear() {
            this.preventBlur = true;
            if (this.multiple) {
                const oldValue = this.value;
                const value = [];
                if (
                    this.$emitPrevent('before-clear', { oldValue, value }, this)
                )
                    return;
                this.selectedVMs.forEach(
                    (itemVM) => (itemVM.currentSelected = false),
                );
                this.selectedVMs = [];
                this.filterText = '';
                this.fastLoad();
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
                this.$emit('clear', { oldValue, value }, this);
            } else {
                const oldValue = this.value;
                const value = undefined;
                if (
                    this.$emitPrevent('before-clear', { oldValue, value }, this)
                )
                    return;
                this.selectedVM = undefined;
                this.filterText = '';
                this.fastLoad();
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
                this.$emit('clear', { oldValue, value }, this);
            }
            this.focus();
            this.close();
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

.root[multiple-tags] {
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
