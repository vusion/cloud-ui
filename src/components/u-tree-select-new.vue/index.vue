<template>
    <div :class="$style.root"
        :color="color || formItemVM && formItemVM.color"
        :readonly="readonly"
        :disabled="currentDisabled"
        :opened="popperOpened"
        :clearable="clearable && (!!checkableValue || !!selectedItem)"
        :tabindex="readonly || currentDisabled ? '' : 0"
        @click="focus"
        @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
        @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
        @keydown.enter.stop.prevent="onEnter"
        @keydown.esc.stop="close(), (filterText = '')"
        @blur="onRootBlur">
        <!-- 用于基线对齐 -->
        <span :class="$style.baseline">b</span>
        <span v-if="(!filterText && !selectedItem && !checkable) || (checkable && !checkableValue)"
            :class="$style.placeholder">
            {{ placeholder }}
        </span>
        <div :class="$style.text" v-ellipsis-title>
            <template v-if="checkable">
                <f-slot name="text" :vm="this">
                    <span>
                        {{ checkableValue }}
                    </span>
                </f-slot>
            </template>
            <template v-else-if="selectedItem">
                <f-slot v-if="$scopedSlots.selected"
                    name="selected"
                    :vm="this"
                    :props="{
                        text: $at(selectedItem, textField) || selectedItem.text,
                        node: selectedItem.node,
                        parent: selectedItem.parent,
                    }">
                    <span>
                        {{ $at(selectedItem, textField) || selectedItem.text }}
                    </span>
                </f-slot>
                <f-slot v-else-if="$scopedSlots.text"
                    name="text"
                    :vm="this"
                    :props="{
                        text: $at(selectedItem, textField) || selectedItem.text,
                        node: selectedItem.node,
                        parent: selectedItem.parent,
                    }">
                    <span>
                        {{ $at(selectedItem, textField) || selectedItem.text }}
                    </span>
                </f-slot>
                <span v-else>
                    {{ $at(selectedItem, textField) || selectedItem.text }}
                </span>
            </template>
            <u-input
              v-if="filterable"
              v-show="filtering"
              ref="input"
              :class="$style.input"
              :value="filterText"
              @click.stop
              @input="onInput">
          </u-input>
        </div>
        <span v-if="clearable && (!!checkableValue || !!selectedItem)"
            :class="$style.clearable"
            @click.stop="clear">
        </span>
        <m-popper ref="popper"
            :class="$style.popper"
            :placement="placement"
            :append-to="appendTo"
            :color="color"
            :disabled="readonly || currentDisabled"
            @update:opened="$emit('update:opened', $event, this)"
            @before-open="$emit('before-open', $event, this)"
            @before-close="$emit('before-close', $event, this)"
            @open="onOpen"
            @close="onClose"
            @click.stop
            :style="getPopperStyle()">
            <!-- 目前只支持单选 -->
            <u-tree-view-new v-if="popperOpened" ref="treeView"
                :renderOptimize="renderOptimize"
                :if-expanded="ifExpanded"
                style="border: none; min-width: 100%; display: inline-block"
                :value="value"
                :data="dataSource"
                :data-source="dataSource"
                :text-field="textField"
                :value-field="valueField"
                :parent-field="parentField"
                :is-leaf-field="isLeafField"
                :children-field="childrenField"
                :disabled-field="disabledField"
                :expanded-field="expandedField"
                :more-children-fields="moreChildrenFields"
                :exclude-fields="excludeFields"
                :checkable="checkable"
                :cancelable="cancelable"
                :accordion="accordion"
                :check-controlled="checkControlled"
                :tree-select-tip="treeSelectTip"
                :expand-trigger="!checkable ? 'click-expander': expandTrigger"
                :initial-load="initialLoad"
                :readonly="readonly"
                :disabled="disabled"
                :expander-width="expanderWidth"
                :filterable="filterable"
                :filter-text="filterText"
                :filter-fields="filterFields"
                @change="$emit('change', $event, this)"
                @before-select="$emit('before-select', $event, this)"
                @select="$emit('select', $event, this)"
                @input="onUpdateValue"
                @update:value="onUpdateValue"
                @toggle="$emit('toggle', $event, this)"
                @check="$emit('check', $event, this)"
                @before-load="onBeforeLoad"
                @load="onLoad">
                <template #item="item">
                    <slot name="item" v-bind="item">{{ item.text }}</slot>
                    <s-empty v-if="(!$slots.item) && $env.VUE_APP_DESIGNER "></s-empty>
                </template>
                <slot></slot>
            </u-tree-view-new>
        </m-popper>
    </div>
</template>

<script>
import MField from '../m-field.vue';
// import UTreeViewNodeNew from '../u-tree-view-new.vue/node.vue';
import SEmpty from '../s-empty.vue';

export default {
    name: 'u-tree-select-new',
    childName: 'u-tree-view-node-new',
    components: { SEmpty },
    mixins: [MField],
    props: {
        value: null,
        field: String,
        data: Array,
        dataSource: [Array, Object, Function],
        dataSchema: { type: String, default: 'entity' },
        textField: { type: String, default: 'text' },
        valueField: { type: String, default: 'value' },
        parentField: { type: String, default: '' },
        isLeafField: { type: String, default: 'isLeaf' },
        childrenField: { type: String, default: 'children' },
        disabledField: { type: String, default: 'disabled' },
        expandedField: { type: String, default: 'expanded' },
        moreChildrenFields: Array,
        excludeFields: { type: Array, default: () => [] },
        checkable: { type: Boolean, default: false },
        checkControlled: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        initialLoad: { type: Boolean, default: true },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        duplicated: { type: Boolean, default: false },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        opened: { type: Boolean, default: false },
        placement: {
            type: String,
            validator: (value) =>
                /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        appendTo: {
            type: String,
            default: 'reference', // readme: 为了支持插槽拖入，必须作为UTreeSelectNew的子元素。
            validator: (value) => ['body', 'reference'].includes(value),
        },
        color: String,
        expanderWidth: {
            type: Number,
            default: 30,
        },
        filterFields: { type: Array, default: () => ['text'] },
        ifExpanded: { type: Boolean, default: false },
        renderOptimize: { type: Boolean, default: false },
    },
    data() {
        return {
            focusedVM: undefined,
            // @inherit: currentDataSource: undefined,
            // @inherit: currentLoading: false,
            currentText: '', // 显示文本
            filterText: '', // 过滤文本，只有 input 时会改变它
            preventBlur: false,
            inputWidth: 20,
            popperOpened: false,
            vnodes: [],
            dataSourceObj: {},
            actualValue: this.value,
            filtering: false,
            treeSelectTip: '请绑定数据源或插入树选择器节点',
            virtualNodeList: [],
            dataSourceNodeList: [],
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
        selectedItem() {
            if (this.actualValue === undefined || this.actualValue === null) {
                return;
            }
            if (this.$at(this.dataSourceObj, this.actualValue)) {
                return this.$at(this.dataSourceObj, this.actualValue);
            } else {
                return this.$at(this.dataSourceNodeList, this.actualValue);
            }
        },
        checkableValue() {
            if (this.actualValue === undefined || this.actualValue === null || this.actualValue === '') {
                return '';
            } else if (Array.isArray(this.actualValue)) {
                const textNode = [];
                // 返现选项的字段从value转化为text
                this.actualValue.forEach((item) => {
                    if (this.$at(this.dataSourceObj, item)) {
                        textNode.push(this.$at(this.dataSourceObj, item) && this.$at(this.dataSourceObj, item).text);
                    } else {
                        textNode.push(this.$at(this.dataSourceNodeList, item) && this.$at(this.dataSourceNodeList, item).text);
                    }
                });
                return textNode.join('、');
            } else {
                return '';
            }
        },
    },
    watch: {
        value() {
            this.actualValue = this.value;
            // 在验证器里，当初始value是异步接口获取的时候，没有触发验证机制，增加update事件触发。
            this.$emit('update', this.value, this);
        },
        actualValue() {
            this.loadUntilSelectedItem();
        },
        data() {
            this.handleData();
        },
        dataSource(dataSource, oldDataSource) {
            if (typeof dataSource === 'function' && String(dataSource) === String(oldDataSource))
                return;
            this.handleData();
        },
        filterText(filterText) {
            this.inputWidth = filterText.length * 12 + 20;
        },
        opened(opened) {
            if (opened === this.popperOpened)
                return;
            this.toggle(opened);
        },
    },
    // dirty hack：每次插槽变化时，vue都会将实例上的$slots对象重新赋值，因此只要比较上一次和现在的slots引用是否改变，就能判断出
    // 当前插槽内容是否发生变化
    updated() {
        if (this.slots !== this.$slots) {
            this.collectFromVNodes();
        }
    },
    mounted() {
        console.log(123456789, 987654321)
        this.collectFromVNodes();
        this.handleData();
        this.autofocus && this.$el.focus();
        this.toggle(this.opened);
        setTimeout(() => this.$forceUpdate());
    },
    methods: {
        handleDataSourceObj(list, type) {
            if (Array.isArray(list) && list.length) {
                this.dataSourceObj = {};
                this.trans2Obj(this.dataSourceObj, list, undefined, type);
            }
            this.loadUntilSelectedItem();
            return this.dataSourceObj;
        },
        // 从虚拟节点中收集数据
        collectFromVNodes() {
            // dirty hack：每次插槽变化时，vue都会将实例上的$slots对象重新赋值
            this.slots = this.$slots;
            this.vnodes = this.collectTreeNode(this.$slots.default);
            this.virtualNodeList = this.handleDataSourceObj(this.vnodes, 'virtual');
        },
        // 收集节点数据
        collectTreeNode(vnodes) {
            if (Array.isArray(vnodes) && vnodes.length) {
                return vnodes.map((vnode) => {
                    // 从虚拟节点上获取组件信息
                    const { componentOptions } = vnode || {};
                    const { Ctor, tag } = componentOptions || {};
                    const { options: CtorOptions } = Ctor || {};
                    const { name } = CtorOptions || {};
                    // 获取组件名
                    const componentName = name || tag;
                    if (componentName === this.$options.childName) {
                        const { propsData, children: childrenVNodes } = componentOptions || {};
                        const {
                            text,
                            value,
                            node,
                            childrenField: propsChildrenField,
                            moreChildrenFields: propsMoreChildrenFields,
                        } = propsData || {};
                        const {
                            childrenField: nodeChildrenField,
                            moreChildrenFields: nodeMoreChildrenFields,
                        } = node || {};
                        const currentChildrenField = propsChildrenField || nodeChildrenField || this.childrenField;
                        const currentMoreChildrenFields = propsMoreChildrenFields || nodeMoreChildrenFields || this.moreChildrenFields;
                        const item = {
                            text,
                            value,
                            childrenField: currentChildrenField,
                            moreChildrenFields: currentMoreChildrenFields,
                        };
                        if (node) {
                            Object.assign(item, node);
                        } else {
                            const children = this.collectTreeNode(childrenVNodes);
                            if (Array.isArray(children) && children.length) {
                                this.$setAt(item, currentChildrenField, children);
                            }
                        }
                        return item;
                    }
                    return null;
                }).filter((item) => !!item);
            }
        },
        trans2Obj(obj, list, parent, type) {
            if (Array.isArray(list)) {
                list.forEach((item) => {
                    const { childrenField, moreChildrenFields } = item;
                    // 静态节点数据写死字段，防止value和text取值相同时，导致value错误
                    if (type === 'virtual') {
                        if (item.value !== undefined || item.value !== null) {
                            obj[item.value] = {
                                parent,
                                node: item,
                                text: item.text,
                            };
                        }
                    } else {
                        if (this.$at2(item, this.valueField) !== undefined) {
                            obj[this.$at2(item, this.valueField)] = {
                                parent,
                                node: item,
                                text: this.$at2(item, this.textField),
                            };
                        }
                    }
                    let currentChildrenField = childrenField || this.childrenField;
                    if (this.parentField) {
                        currentChildrenField = 'children';
                    }
                    this.trans2Obj(obj, this.$at(item, currentChildrenField), item, type);
                    let currentMoreChildrenFields = moreChildrenFields || this.moreChildrenFields;
                    if (this.parentField) {
                        currentMoreChildrenFields = 'children';
                    }
                    if (Array.isArray(currentMoreChildrenFields)) {
                        currentMoreChildrenFields.forEach((subField) => {
                            this.trans2Obj(obj, this.$at(item, subField), item, type);
                        });
                    }
                });
            }
        },
        onUpdateValue($event) {
            this.actualValue = $event;
            this.$emit('update:value', $event, this);
            this.$emit('input', $event, this);
            this.$nextTick(() => {
                if ($event !== null && $event !== undefined && !this.checkable) {
                    this.close();
                }
            });
            if (this.filterable) {
                this.filterText = '';
                this.filtering = false;
            }
        },
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.dataSourceNodeList = this.handleDataSourceObj(this.currentDataSource.data, 'dataSource');
            this.dataSourceObj = { ...this.dataSourceNodeList, ...this.virtualNodeList };
        },
        // 如果有选中值，且没有被查到，且数据可以加载
        loadUntilSelectedItem() {
            const { load, data } = this.currentDataSource || {};
            // 如果有选中值，且没有被查到，且数据可以加载
            if (this.actualValue !== undefined && this.actualValue !== null && !this.selectedItem && load) {
                if (Array.isArray(data) && data.length) {
                    const item = this.loadChildren(data);
                    if (item) {
                        this.load({
                            node: item,
                        });
                    }
                } else {
                    this.load();
                }
            }
        },
        loadChildren(list) {
            let item;
            if (Array.isArray(list) && list.length) {
                for (let i = 0; i < list.length; i++) {
                    const { childrenField, isLoaded } = list[i];
                    const children = this.$at(list[i], childrenField);
                    if (Array.isArray(children) && children.length) {
                        item = this.loadChildren(children);
                    } else if (childrenField && !isLoaded) {
                        item = list[i];
                    }
                    if (item) {
                        break;
                    }
                }
            }
            return item;
        },
        normalizeDataSource(dataSource) {
            const final = {
                data: [],
                load: undefined,
            };
            const createLoad = (rawLoad) => async (params = {}) => {
                const result = await rawLoad(params);
                if (result) {
                    const { node } = params || {};
                    if (node) {
                        const { childrenField } = node;
                        this.$setAt(node, childrenField, result);
                        node.isLoaded = true;
                    } else {
                        if (Array.isArray(result)) {
                            final.data = result;
                        } else {
                            final.data = (result && result.list) || [];
                        }
                    }
                }
            };

            if (Array.isArray(dataSource)) {
                final.data = dataSource;
            } else if (typeof dataSource === 'function') {
                final.load = createLoad(dataSource);
            } else if (typeof dataSource === 'object') {
                const data = dataSource.data || dataSource.list;

                final.data = data;
                final.load = dataSource.load && createLoad(dataSource.load);
            }
            return final;
        },
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        designerControl() {
            this.toggle();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onOpen($event) {
            this.popperOpened = true; // 刚打开时，除非是没有加载，否则保留上次的 filter 过的数据
            this.$emit('open', $event, this);
            this.$emit('update:opened', true);
            if (this.filterable) {
                this.filtering = true;
                setTimeout(() => {
                    this.$refs.input.focus();
                });
            }
        },
        onClose($event) {
            this.popperOpened = false;
            this.focusedVM = undefined;
            this.$emit('close', $event, this);
            this.$emit('update:opened', false);
            if (this.filterable) {
                this.filtering = false;
                this.$refs.input.blur();
                this.filterText = '';
            }
        },
        onFocus() {
            // @disabled
        },
        onInput(value) {
            if (!this.filterable) {
                return;
            }
            this.currentText = value;
            if (this.$emitPrevent('before-filter', {
                filterText: value,
            }, this)) {
                return;
            }
            this.filterText = value;
            // this.fastLoad(false, true);
            this.open();
        },
        onBlur() {
            // Todo: onBlur
        },
        onRootBlur() {
            // Todo: onRootBlur
        },
        focus() {
            if (this.filterable)
                this.$refs.input.focus();
        },
        blur() {
            if (this.filterable)
                this.$refs.input.blur();
        },
        load(params) {
            if (!this.currentDataSource.load)
                return;
            this.currentDataSource.load(params).then(() => {
                this.dataSourceNodeList = this.handleDataSourceObj(this.currentDataSource.data, 'dataSource');
                this.dataSourceObj = { ...this.dataSourceNodeList, ...this.virtualNodeList };
            });
        },
        reload() {
            this.load();
            this.$refs.treeView && this.$refs.treeView.reload();
        },
        onBeforeLoad() {
            this.$emit('before-load');
        },
        onLoad() {
            this.$emit('load', undefined, this);
        },
        clear() {
            const oldValue = this.actualValue;
            const itemInfo = {
                oldValue,
                value: undefined,
                valid: true,
            };
            if (this.$refs.treeView && this.$refs.treeView.selectedVM && this.$refs.treeView.selectedVM.$options.propsData) {
                itemInfo.label = this.$refs.treeView.selectedVM.$options.propsData.text;
            }
            if (this.checkable) {
                itemInfo.value = [];
                itemInfo.values = [];
                itemInfo.oldValue = [...oldValue];
                itemInfo.oldValues = [...oldValue];
            }
            if (this.$emitPrevent('before-clear', { ...itemInfo }, this)) {
                return;
            }
            if (this.$refs.treeView) {
                this.$refs.treeView.checkAll(false);
            } else {
                this.onUpdateValue(itemInfo.value);
            }

            this.$emit('clear', { ...itemInfo }, this);
        },
        getPopperStyle() {
            if (this.appendTo === 'body') {
                const style = Object.assign({}, this.$vnode.data && this.$vnode.data.style);
                const staticStyle = Object.assign({}, this.$vnode.data && this.$vnode.data.staticStyle);
                const newStyle = Object.assign({}, style, staticStyle);
                const popperStyle = {};
                Object.keys(newStyle).forEach((key) => {
                    if (key.startsWith('--tree-select-new-popper') || key.startsWith('--tree-view')) {
                        popperStyle[key] = newStyle[key];
                    }
                });
                return popperStyle;
            }
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
  width: var(--tree-select-new-width);
  height: var(--tree-select-new-height);
  line-height: calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x)
  ) 0 var(--tree-select-new-padding-x);
  background: var(--tree-select-new-background);
  border: var(--tree-select-new-border-width) solid var(--tree-select-new-border-color);
  color: var(--tree-select-new-color);
  border-radius: var(--tree-select-new-border-radius-base);
}
.root:hover {
  border-color: var(--tree-select-new-border-color-hover);
}

.root:focus {
  outline: var(--tree-select-new-focus-outline);
  box-shadow: var(--tree-select-new-box-shadow-focus);
  border-color: var(--tree-select-new-border-color-hover);
}

.baseline {
  visibility: hidden;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.placeholder {
  color: var(--tree-select-new-placeholder-color);
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
  opacity: 0;
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  z-index: 1;
  line-height: 1;
  height: 1em;
  margin: auto;
  icon-font: url("../i-icon.vue/assets/close-solid.svg");
  cursor: var(--cursor-pointer);
  color: #a7afbb;
}

.root[clearable]:hover .clearable::before {
  opacity: 1;
}

.root[filterable] {
  cursor: text;
}

.root::after {
  position: absolute;
  icon-font: url("../i-icon.vue/icons/keyboard-arrow-down.svg");
  font-size: var(--tree-select-new-arrow-size);
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x));
  top: 0;
  bottom: 0;
  line-height: 1.2;
  height: 1em;
  margin: auto;
  color: var(--tree-select-new-arrow-color);
  transition: transform var(--tree-select-new-transition-duration-base);
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
  background: var(--tree-select-new-background-disabled);
  color: var(--tree-select-new-color-disabled);
  border: 1px solid var(--tree-select-new-border-color-disabled);
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

.tag {
  display: inline-block;
  padding: var(--tree-select-new-tag-padding);
  font-size: var(--tree-select-new-tag-font-size-small);
  line-height: var(--tree-select-new-tag-line-height);
  vertical-align: var(--tree-select-new-tag-vertical-align);
  background: var(--tree-select-new-tag-background);
  border-radius: var(--tree-select-new-tag-border-radius);
}

.tag:not(:last-child) {
  margin-right: var(--tree-select-new-tag-margin-x);
}

.tag-remove {
  margin-left: var(--tree-select-new-tag-margin-x);
  color: var(--tree-select-new-tag-remove-color);
}

.tag-remove::before {
  icon-font: url("../i-icon.vue/assets/close.svg");
}

.tag-remove:hover {
  color: var(--tree-select-new-tag-remove-color-hover);
}

.input {
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #212121;
}

.popper {
  position: absolute;
  box-sizing: content-box;
  line-height: var(--tree-select-new-popper-line-height);
  max-height: var(--tree-select-new-popper-max-height);
  overflow: auto;
  background: var(--tree-select-new-popper-background);
  border: 1px solid var(--tree-select-new-popper-border-color);
  z-index: var(--tree-select-new-z-index-popper);
  margin-top: 1px;
  border-radius: var(--tree-select-new-border-radius-base);
  box-shadow: var(--tree-select-new-popper-box-shadow);
  padding: 0;
  min-width: var(--tree-select-new-popper-min-width);
  width: var(--tree-select-new-popper-width);
}

.root[size$="mini"] {
  width: var(--tree-select-new-width-mini);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-mini)
  ) 0 var(--tree-select-new-padding-x-mini);
}
.root[size$="mini"] .item {
  padding: 0 var(--tree-select-new-padding-x-mini);
}
.root[size$="mini"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-mini));
}
.root[size^="mini"] {
  height: var(--tree-select-new-height-mini);
  line-height: calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2);
}
.root[size^="mini"] .item {
  line-height: calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2);
}
.root[size^="mini"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="small"] {
  width: var(--tree-select-new-width-small);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-small)
  ) 0 var(--tree-select-new-padding-x-small);
}
.root[size$="small"] .item {
  padding: 0 var(--tree-select-new-padding-x-small);
}
.root[size$="small"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-small));
}
.root[size^="small"] {
  height: var(--tree-select-new-height-small);
  line-height: calc(
    var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="small"] .item {
  line-height: calc(
    var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="small"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="normal"] {
  width: var(--tree-select-new-width);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x)
  ) 0 var(--tree-select-new-padding-x);
}
.root[size$="normal"] .item {
  padding: 0 var(--tree-select-new-padding-x);
}
.root[size$="normal"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x));
}
.root[size^="normal"] {
  height: var(--tree-select-new-height);
  line-height: calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2);
}
.root[size^="normal"] .item {
  line-height: calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2);
}
.root[size^="normal"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="medium"] {
  width: var(--tree-select-new-width-medium);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-medium)
  ) 0 var(--tree-select-new-padding-x-medium);
}
.root[size$="medium"] .item {
  padding: 0 var(--tree-select-new-padding-x-medium);
}
.root[size$="medium"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-medium));
}
.root[size^="medium"] {
  height: var(--tree-select-new-height-medium);
  line-height: calc(
    var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="medium"] .item {
  line-height: calc(
    var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="medium"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="large"] {
  width: var(--tree-select-new-width-large);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-large)
  ) 0 var(--tree-select-new-padding-x-large);
}
.root[size$="large"] .item {
  padding: 0 var(--tree-select-new-padding-x-large);
}
.root[size$="large"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-large));
}
.root[size^="large"] {
  height: var(--tree-select-new-height-large);
  line-height: calc(
    var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="large"] .item {
  line-height: calc(
    var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2
  );
}
.root[size^="large"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="huge"] {
  width: var(--tree-select-new-width-huge);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-huge)
  ) 0 var(--tree-select-new-padding-x-huge);
}
.root[size$="huge"] .item {
  padding: 0 var(--tree-select-new-padding-x-huge);
}
.root[size$="huge"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-huge));
}
.root[size^="huge"] {
  height: var(--tree-select-new-height-huge);
  line-height: calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2);
}
.root[size^="huge"] .item {
  line-height: calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2);
}
.root[size^="huge"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2)
  );
}

.root[size$="full"] {
  width: 100%;
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-full)
  ) 0 var(--tree-select-new-padding-x-full);
}
.root[size$="full"] .item {
  padding: 0 var(--tree-select-new-padding-x-full);
}
.root[size^="full"] {
  height: 100%;
}

.root[color="error"] {
    border-color: var(--tree-select-new-input-border-color-error);
}

.root[color="inverse"] {
  background: var(--tree-select-new-background-inverse);
  border-color: var(--tree-select-new-border-color-inverse);
  color: var(--tree-select-new-color-inverse);
}

.popper[color="inverse"] {
  background: var(--tree-select-new-popper-background-inverse);
  color: var(--tree-select-new-popper-color-inverse);
  border-color: var(--tree-select-new-popper-border-color-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"]:hover {
  background: var(--tree-select-new-tree-view-node-background-active-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"]:focus {
  background: var(--tree-select-new-tree-view-node-background-active-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][selected] {
  background: var(--tree-select-new-tree-view-node-background-selected-inverse);
}

.popper[color="inverse"]
  [class^="u-tree-view_node_item"][selected]
  [class^="u-tree-view_node_text"] {
  color: var(--tree-select-new-tree-view-node-color-selected-inverse);
}

.popper[color="inverse"]
  [class^="u-tree-view_node_item"][selected]
  [class^="u-tree-view_node_expander"] {
  color: var(--tree-select-new-tree-view-node-expander-color-selected-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][disabled] {
  color: var(--tree-select-new-tree-view-node-color-disabled-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][disabled] {
  background: var(--tree-select-new-tree-view-node-background-disabled-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][selected][disabled] {
  background: var(--tree-select-new-tree-view-node-background-selected-disabled-inverse);
}


.root[width="mini"] {
  width: var(--tree-select-new-width-mini);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-mini)
  ) 0 var(--tree-select-new-padding-x-mini);
}
.root[width="mini"] .item {
  padding: 0 var(--tree-select-new-padding-x-mini);
}
.root[width="mini"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-mini));
}
.root[height="mini"] {
  height: var(--tree-select-new-height-mini);
  line-height: calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2);
}
.root[height="mini"] .item {
  line-height: calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2);
}
.root[height="mini"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-mini) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="small"] {
  width: var(--tree-select-new-width-small);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-small)
  ) 0 var(--tree-select-new-padding-x-small);
}
.root[width="small"] .item {
  padding: 0 var(--tree-select-new-padding-x-small);
}
.root[width="small"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-small));
}
.root[height="small"] {
  height: var(--tree-select-new-height-small);
  line-height: calc(
    var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="small"] .item {
  line-height: calc(
    var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="small"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-small) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="normal"] {
  width: var(--tree-select-new-width);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x)
  ) 0 var(--tree-select-new-padding-x);
}
.root[width="normal"] .item {
  padding: 0 var(--tree-select-new-padding-x);
}
.root[width="normal"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x));
}
.root[height="normal"] {
  height: var(--tree-select-new-height);
  line-height: calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2);
}
.root[height="normal"] .item {
  line-height: calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2);
}
.root[height="normal"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="medium"] {
  width: var(--tree-select-new-width-medium);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-medium)
  ) 0 var(--tree-select-new-padding-x-medium);
}
.root[width="medium"] .item {
  padding: 0 var(--tree-select-new-padding-x-medium);
}
.root[width="medium"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-medium));
}
.root[height="medium"] {
  height: var(--tree-select-new-height-medium);
  line-height: calc(
    var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="medium"] .item {
  line-height: calc(
    var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="medium"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-medium) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="large"] {
  width: var(--tree-select-new-width-large);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-large)
  ) 0 var(--tree-select-new-padding-x-large);
}
.root[width="large"] .item {
  padding: 0 var(--tree-select-new-padding-x-large);
}
.root[width="large"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-large));
}
.root[height="large"] {
  height: var(--tree-select-new-height-large);
  line-height: calc(
    var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="large"] .item {
  line-height: calc(
    var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2
  );
}
.root[height="large"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-large) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="huge"] {
  width: var(--tree-select-new-width-huge);
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-huge)
  ) 0 var(--tree-select-new-padding-x-huge);
}
.root[width="huge"] .item {
  padding: 0 var(--tree-select-new-padding-x-huge);
}
.root[width="huge"]::after {
  right: calc(var(--tree-select-new-arrow-right-ratio) * var(--tree-select-new-padding-x-huge));
}
.root[height="huge"] {
  height: var(--tree-select-new-height-huge);
  line-height: calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2);
}
.root[height="huge"] .item {
  line-height: calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2);
}
.root[height="huge"] .popper {
  max-height: calc(
    6 * calc(var(--tree-select-new-height-huge) - var(--tree-select-new-border-width) * 2)
  );
}

.root[width="full"] {
  width: 100%;
  padding: 0 calc(
    var(--tree-select-new-arrow-size) * 7 / 9 + var(--tree-select-new-arrow-right-ratio) *
      var(--tree-select-new-padding-x-full)
  ) 0 var(--tree-select-new-padding-x-full);
}
.root[width="full"] .item {
  padding: 0 var(--tree-select-new-padding-x-full);
}
.root[height="full"] {
  height: 100%;
}

</style>
