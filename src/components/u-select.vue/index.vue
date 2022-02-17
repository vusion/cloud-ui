<template>
<div :class="$style.root" :color="color" :readonly="readonly" :disabled="currentDisabled" :opened="popperOpened"
    :clearable="clearable && !!(filterable ? filterText : currentText)" :multiple="multiple" :multiple-tags="multiple && multipleAppearance === 'tags'"
    :prefix="prefix" :suffix="suffix"
    :start="!!prefix"
    :tabindex="readonly || currentDisabled ? '' : 0"
    @click="focus"
    @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
    @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
    @keydown.enter.stop.prevent="onEnter"
    @keydown.esc.stop="close(), filterText = ''"
    @keydown.delete.stop="clearable && clear()"
    @blur="onRootBlur">
    <span :class="$style.baseline">b</span><!-- 用于基线对齐 -->
    <span v-show="!filterText && (multiple ? !selectedVMs.length : !selectedVM)" :class="$style.placeholder">{{ placeholder }}</span>
    <span v-if="prefix" :class="$style.prefix" :name="prefix" @click="$emit('click-prefix', $event, this)"><slot name="prefix"></slot></span>
    <div :class="$style.text" v-ellipsis-title :tags-overflow="tagsOverflow" :style="{direction: ellipsisDirection}">
        <!-- @override: 添加了flag功能 -->
        <slot name="flag">
            <span v-if="selectedVM && selectedVM.flag !== undefined" :class="$style.flag" :layer="selectedVM && selectedVM.layer" v-tooltip.top="selectedVM && selectedVM.flag"></span>
        </slot>
        <span :class="$style.label" v-if="label || $slots.label">
            {{ label }}
            <slot name="label"></slot>
        </span>
        <f-render v-if="!multiple && !filterable" :vnode="selectedVM && (selectedVM.$slots.default ? selectedVM.$slots.default : [$at(selectedVM, field || textField)])"></f-render>
        <span v-else-if="multipleAppearance === 'text'">{{ currentText }}</span>
        <template v-else-if="multipleAppearance === 'tags'">
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
            :placeholder="multiple && selectedVMs.length ? '' : placeholder" :filterable="filterable" :multiple-tags="multiple && multipleAppearance === 'tags'"
            :value="filterText" @input="onInput" @focus="onFocus" @blur="onBlur"
            @keydown.enter.stop.prevent="onInputEnter" @keydown.delete.stop="onInputDelete"
            :style="{ width: multiple && (inputWidth + 'px') }">
        </u-input>
    </div>
    <span v-if="suffix" v-show="!(clearable && !!(filterable ? filterText : currentText))" :class="$style.suffix" :name="suffix"
        @click="$emit('click-suffix', $event, this)"><slot name="suffix"></slot></span>
    <span v-if="clearable && !!(filterable ? filterText : currentText)" :class="$style.clearable" @click="clear"></span>
    <m-popper :class="$style.popper" ref="popper" :color="color" :placement="placement" :append-to="appendTo" :disabled="readonly || currentDisabled"
        :style="{ width: currentPopperWidth }"
        @update:opened="$emit('update:opened', $event, this)"
        @before-open="$emit('before-open', $event, this)"
        @before-close="$emit('before-close', $event, this)"
        @open="onOpen"
        @close="onClose"
        @before-toggle="$emit('before-toggle', $event, this)"
        @toggle="$emit('toggle', $event, this)"
        @click.stop @scroll.stop="onScroll" @mousedown.stop>
        <slot></slot>
        <template v-if="currentData">
            <component :is="ChildComponent"
                v-for="(item, index) in currentData"
                v-if="item"
                :key="filterable ? $at(item, valueField) + '_' + index : $at(item, valueField)"
                :value="$at(item, valueField)"
                :disabled="item.disabled || disabled"
                :item="item">
            <slot name="text" :item="item" :text="$at(item, field || textField)" :value="$at(item, valueField)" :disabled="item.disabled || disabled">{{ $at(item, field || textField) }}</slot>
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
        autofocus: { type: Boolean, default: false },
        duplicated: { type: Boolean, default: false },
        multipleAppearance: { type: String, default: 'tags' },
        tagsOverflow: { type: String, default: 'visible' },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false }, // @inherit: loadingText: { type: String, default: '加载中...' },
        placement: { type: String, validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value) },
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
        prefix: String,
        suffix: String,
        label: { type: String, default: '' },
        ellipsisDirection: { type: String, default: 'ltr' },
        appendTo: {
            type: String,
            default: 'reference',
            validator: (value) => ['body', 'reference'].includes(value),
        },
        color: String,
        popperWidth: { type: String, default: '' },
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
            currentPopperWidth: this.popperWidth || '100%',
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
        appendTo(appendTo) {
            this.setPopperWidth();
        },
    },
    created() {
        this.$watch('selectedVM', (selectedVM, oldVM) => {
            if (selectedVM && oldVM && selectedVM.currentText === oldVM.currentText)
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
            if (!this.multiple) {
                this.close();
            } else {
                this.preventBlur = true;
                if (this.appendTo === 'body') {
                    this.preventRootBlur = true;
                }
            }
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
        this.autofocus && this.$el.focus();
        this.toggle(this.opened);
        this.setPopperWidth();
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
            let focusedIndex = this.itemVMs.indexOf(this.focusedVM || this.selectedVM);
            if (count > 0) {
                for (let i = focusedIndex + count; i < this.itemVMs.length; i++) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit('shift', { focusedIndex, focusedVM: itemVM, value: itemVM.value }, this);
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
        designerControl() {
            this.toggle();
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
            this.preventRootBlur = false;
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
        onBlur(e) {
            if (!this.filterable)
                return; // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            setTimeout(() => {
                if (this.preventBlur)
                    return (this.preventBlur = false);
                this.selectByText(this.filterText);
                this.close();
            }, 200);
        },
        onRootBlur(e) {
            setTimeout(() => {
                if (this.$refs.input && this.$refs.input.focused || this.preventBlur)
                    return;
                if (this.preventRootBlur)
                    return (this.preventRootBlur = false);
                this.close();
                this.$emit('blur', e);
            }, 400);
        },
        selectByText(text) {
            if (!text)
                return;
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
            this.popperOpened ? this.close() : this.open();
        },
        onInputEnter() {
            if (this.focusedVM)
                this.select(this.focusedVM);
            else
                this.selectByText(this.filterText);
            this.popperOpened ? this.close() : this.open();
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
            this.preventBlur = true;
            if (this.filterable)
                this.$refs.input.focus();
        },
        blur() {
            if (this.filterable)
                this.$refs.input.blur();
        },
        setPopperWidth() {
            if (this.appendTo === 'body') {
                this.currentPopperWidth = this.popperWidth ? this.popperWidth : this.$el && (this.$el.offsetWidth + 'px');
            } else {
                this.currentPopperWidth = this.popperWidth || '100%';
            }
        },
        rootFocus() {
            this.$el.focus();
        },
    },
};
</script>

<style module src="./index.css"></style>
