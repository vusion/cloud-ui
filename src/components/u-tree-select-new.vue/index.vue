<template>
    <div :class="$style.root"
        :color="color"
        :readonly="readonly"
        :disabled="currentDisabled"
        :opened="popperOpened"
        :clearable="clearable && !!currentText"
        :tabindex="readonly || currentDisabled ? '' : 0"
        @click="focus"
        @keydown.up.prevent="$refs.popper.currentOpened ? shift(-1) : open()"
        @keydown.down.prevent="$refs.popper.currentOpened ? shift(+1) : open()"
        @keydown.enter.stop.prevent="onEnter"
        @keydown.esc.stop="close(), (filterText = '')"
        @blur="onRootBlur">
        <!-- 用于基线对齐 -->
        <span :class="$style.baseline">b</span>
        <span v-if="!filterText && !selectedItem"
            :class="$style.placeholder">
            {{ placeholder }}
        </span>
        <div :class="$style.text" v-ellipsis-title>
            <template v-if="selectedItem">
                <f-slot v-if="$scopedSlots.selected"
                    name="selected"
                    :vm="this"
                    :props="{
                        text: $at(selectedItem, this.textField) || selectedItem.text,
                        node: selectedItem.node,
                        parent: selectedItem.parent,
                    }">
                    <span>
                        {{ $at(selectedItem, this.textField) || selectedItem.text }}
                    </span>
                </f-slot>
                <f-slot v-else-if="$scopedSlots.text"
                    name="text"
                    :vm="this"
                    :props="{
                        text: $at(selectedItem, this.textField) || selectedItem.text,
                        node: selectedItem.node,
                        parent: selectedItem.parent,
                    }">
                    <span>
                        {{ $at(selectedItem, this.textField) || selectedItem.text }}
                    </span>
                </f-slot>
                <span v-else>
                    {{ $at(selectedItem, this.textField) || selectedItem.text }}
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
        <span v-if="clearable && !!currentText"
            :class="$style.clearable"
            @click="clear">
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
            @click.stop>
            <!-- 目前只支持单选 -->
            <u-tree-view-new v-if="popperOpened" ref="treeView"
                :ifExpanded="ifExpanded"
                style="border: none; min-width: 100%; display: inline-block"
                :value="value"
                :data="dataSource"
                :data-source="dataSource"
                :text-field="textField"
                :value-field="valueField"
                :is-leaf-field="isLeafField"
                :children-field="childrenField"
                :more-children-fields="moreChildrenFields"
                :exclude-fields="excludeFields"
                :checkable="checkable"
                :cancelable="cancelable"
                :accordion="accordion"
                :expand-trigger="expandTrigger"
                :initial-load="initialLoad"
                :readonly="readonly"
                :disabled="disabled"
                :expanderWidth="expanderWidth"
                :filterable="filterable"
                :filterText="filterText"
                :filterFields="filterFields"
                @change="$emit('change', $event, this)"
                @before-select="$emit('before-select', $event, this)"
                @select="$emit('select', $event, this) && close()"
                @input="$emit('input', $event, this)"
                @update:value="onUpdateValue"
                @toggle="$emit('toggle', $event, this)"
                @check="$emit('check', $event, this)">
                <template #text="props">
                    <slot name="text" v-bind="props">{{ props.text }}</slot>
                </template>
                <slot></slot>
            </u-tree-view-new>
        </m-popper>
    </div>
</template>

<script>
import MField from "../m-field.vue";
import UTreeViewNodeNew from "../u-tree-view-new.vue/node.vue";

export default {
    name: "u-tree-select-new",
    childName: 'u-tree-view-node-new',
    mixins: [MField],
    components: { UTreeViewNodeNew },
    props: {
        value: null,
        field: String,
        data: Array,
        dataSource: [Array, Object, Function],
        dataSchema: { type: String, default: "entity" },
        textField: { type: String, default: "text" },
        valueField: { type: String, default: "value" },
        isLeafField: { type: String, default: "isLeaf" },
        childrenField: { type: String, default: "children" },
        moreChildrenFields: Array,
        excludeFields: { type: Array, default: () => [] },
        checkable: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: "click" },
        initialLoad: { type: Boolean, default: true },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        duplicated: { type: Boolean, default: false },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: "请选择" },
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
            default: "reference",
            validator: (value) => ["body", "reference"].includes(value),
        },
        color: String,
        expanderWidth: {
            type: Number,
            default: 30
        },
        filterFields: { type: Array, default: () => ['text'] },
        ifExpanded: { type: Boolean, default: true },
    },
    data() {
        return {
            focusedVM: undefined,
            // @inherit: currentDataSource: undefined,
            // @inherit: currentLoading: false,
            currentText: "", // 显示文本
            filterText: "", // 过滤文本，只有 input 时会改变它
            preventBlur: false,
            inputWidth: 20,
            popperOpened: false,
            vnodes: [],
            dataSourceObj: {},
            actualValue: this.value,
            filtering: false,
        };
    },
    computed: {
        currentDisabled() {
            if (this.disabled)
                return true;
            else if (this.emptyDisabled)
                return this.currentData? !this.currentData.length : !this.itemVMs.length;
            else
                return false;
        },
        selectedItem() {
            return this.$at(this.dataSourceObj, this.actualValue);
        },
        scopeItem() {
            return `scope.${this.dataSchema}.${this.valueField}`;
        },
    },
    watch: {
        value() {
            this.actualValue = this.value
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
        if(this.slots !== this.$slots) {
            this.collectFromVNodes();
        }
    },
    mounted() {
        this.collectFromVNodes();
        this.handleData();
        this.autofocus && this.$el.focus();
        this.toggle(this.opened);
        setTimeout(() => this.$forceUpdate());
    },
    methods: {
        handleDataSourceObj(list) {
            if(Array.isArray(list) && list.length) {
                this.dataSourceObj = {};
                this.trans2Obj(this.dataSourceObj, list);
            }
            this.loadUntilSelectedItem();
        },
        // 从虚拟节点中收集数据
        collectFromVNodes() {
            // dirty hack：每次插槽变化时，vue都会将实例上的$slots对象重新赋值
            this.slots = this.$slots;
            this.vnodes = this.collectTreeNode(this.$slots.default);
            this.handleDataSourceObj(this.vnodes);
        },
        // 收集节点数据
        collectTreeNode(vnodes) {
            if(Array.isArray(vnodes) && vnodes.length) {
               return vnodes.map((vnode) => {
                    // 从虚拟节点上获取组件信息
                    const { componentOptions } = vnode || {};
                    const { Ctor, tag } = componentOptions || {};
                    const { options: CtorOptions } = Ctor || {};
                    const { name } = CtorOptions || {};
                    // 获取组件名
                    const componentName = name || tag;
                    if(componentName === this.$options.childName) {
                        const { propsData, children: childrenVNodes } = componentOptions || {};
                        const {
                            text,
                            value,
                            node,
                            childrenField: propsChildrenField,
                            moreChildrenFields: propsMoreChildrenFields
                        } = propsData || {};
                        const {
                          childrenField: nodeChildrenField,
                          moreChildrenFields: nodeMoreChildrenFields
                        } = node || {};
                        const currentChildrenField = propsChildrenField || nodeChildrenField || this.childrenField;
                        const currentMoreChildrenFields = propsMoreChildrenFields || nodeMoreChildrenFields || this.moreChildrenFields;
                        const item = {
                            text,
                            value,
                            childrenField: currentChildrenField,
                            moreChildrenFields: currentMoreChildrenFields
                        };
                        if(node) {
                            Object.assign(item, node);
                        } else {
                            const children = this.collectTreeNode(childrenVNodes);
                            if(Array.isArray(children) && children.length) {
                                this.$setAt(item, currentChildrenField, children);
                            }
                        }
                        return item;
                    }
                }).filter((item) => {
                    return !!item;
                });
            }
        },
        trans2Obj(obj, list, parent) {
            if(Array.isArray(list)) {
                list.forEach((item) => {
                    const { childrenField, moreChildrenFields } = item;
                    if(this.$at(item, this.valueField) != undefined) {
                        obj[this.$at(item, this.valueField)] = {
                          parent,
                          node: item,
                          text: this.$at(item, this.textField)
                      };
                    }
                    const currentChildrenField = childrenField || this.childrenField;
                    this.trans2Obj(obj, this.$at(item, currentChildrenField), item);
                    const currentMoreChildrenFields = moreChildrenFields || this.moreChildrenFields;
                    if(Array.isArray(currentMoreChildrenFields)) {
                      currentMoreChildrenFields.forEach((subField) => {
                        this.trans2Obj(obj, this.$at(item, subField), item);
                      });
                    }
                });
            }
        },
        onUpdateValue($event) {
            this.actualValue = $event;
            this.$emit('update:value', $event, this)
            if(this.filterable) {
              this.filterText = '';
              this.filtering = false;
            }
        },
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.handleDataSourceObj(this.currentDataSource.data);
        },
        // 如果有选中值，且没有被查到，且数据可以加载
        loadUntilSelectedItem() {
            const { load, data } = this.currentDataSource || {};
            // 如果有选中值，且没有被查到，且数据可以加载
            if(this.actualValue && !this.selectedItem && load) {
                if(Array.isArray(data) && data.length) {
                    const item = this.loadChildren(data);
                    if(item) {
                        this.load({
                            node: item
                        });
                    }
                } else {
                    this.load();
                }
            }
        },
        loadChildren(list) {
            let item;
            if(Array.isArray(list) && list.length) {
                for(let i = 0; i < list.length; i++) {
                    const { childrenField, isLoaded } = list[i];
                    const children = this.$at(list[i], childrenField);
                    if(Array.isArray(children) && children.length) {
                        item = this.loadChildren(children);
                    } else if(childrenField && !isLoaded) {
                        item = list[i];
                    }
                    if(item) {
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
            const createLoad = (rawLoad) => {
                return async (params = {}) => {
                    const result = await rawLoad(params);
                    if (result) {
                        const { node } = params || {};
                        if (node) {
                            const { childrenField } = node;
                            this.$setAt(node, childrenField, result);
                            node.isLoaded = true;
                        } else {
                            final.data = result;
                        }
                    }
                };
            };
            if (Array.isArray(dataSource))
                final.data = dataSource;
            else if (typeof dataSource === 'function') {
                final.load = createLoad(dataSource);
            } else if (typeof dataSource === 'object') {
                final.data = dataSource.data;
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
            this.$emit("open", $event, this);
            this.$emit("update:opened", true);
            if(this.filterable) {
              this.filtering = true;
              setTimeout(() => {
                this.$refs.input.focus();
              });
            }
        },
        onClose($event) {
            this.popperOpened = false;
            this.focusedVM = undefined;
            this.$emit("close", $event, this);
            this.$emit("update:opened", false);
            if(this.filterable) {
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
            if (this.$emitPrevent("before-filter", {
                filterText: value
            }, this)) {
                return;
            }
            this.filterText = value;
            // this.fastLoad(false, true);
            this.open();
        },
        onBlur() { },
        onRootBlur() { },
        focus() {
            if (this.filterable)
                this.$refs.input.focus();
        },
        blur() {
            if (this.filterable)
                this.$refs.input.blur();
        },
        load(params) {
            this.currentDataSource.load(params).then(() => {
              this.handleDataSourceObj(this.currentDataSource.data);
            });
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
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x)
  );
  background: var(--select-background);
  border: var(--select-border-width) solid var(--select-border-color);
  color: var(--select-color);
  border-radius: var(--border-radius-base);
}
.root:hover {
  border-color: var(--select-border-color-hover);
}

.root:focus {
  outline: var(--focus-outline);
  box-shadow: var(--select-box-shadow-focus);
  border-color: var(--select-border-color-hover);
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
  icon-font: url("../i-icon.vue/assets/close-solid.svg");
  cursor: var(--cursor-pointer);
  color: #a7afbb;
}

.root[filterable] {
  cursor: text;
}

.root::after {
  position: absolute;
  icon-font: url("../i-icon.vue/icons/keyboard-arrow-down.svg");
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
  icon-font: url("../i-icon.vue/assets/close.svg");
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
  background-color: #fff;
  color: #212121;
}

.popper {
  position: absolute;
  box-sizing: content-box;
  line-height: var(--select-popper-line-height);
  max-height: var(--select-popper-max-height);
  overflow: auto;
  background: var(--select-popper-background);
  border: 1px solid var(--select-popper-border-color);
  z-index: var(--z-index-popper);
  margin-top: 1px;
  border-radius: var(--border-radius-base);
  box-shadow: var(--select-popper-box-shadow);
  padding: var(--select-popper-padding);
  min-width: var(--select-popper-min-width);
  width: var(--select-popper-width);
}

.root[size$="mini"] {
  width: var(--select-width-mini);
  padding: 0 var(--select-padding-x-mini);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-mini)
  );
}
.root[size$="mini"] .item {
  padding: 0 var(--select-padding-x-mini);
}
.root[size$="mini"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-mini));
}
.root[size^="mini"] {
  height: var(--select-height-mini);
  line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2);
}
.root[size^="mini"] .item {
  line-height: calc(var(--select-height-mini) - var(--select-border-width) * 2);
}
.root[size^="mini"] .popper {
  max-height: calc(
    6 * calc(var(--select-height-mini) - var(--select-border-width) * 2)
  );
}

.root[size$="small"] {
  width: var(--select-width-small);
  padding: 0 var(--select-padding-x-small);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-small)
  );
}
.root[size$="small"] .item {
  padding: 0 var(--select-padding-x-small);
}
.root[size$="small"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-small));
}
.root[size^="small"] {
  height: var(--select-height-small);
  line-height: calc(
    var(--select-height-small) - var(--select-border-width) * 2
  );
}
.root[size^="small"] .item {
  line-height: calc(
    var(--select-height-small) - var(--select-border-width) * 2
  );
}
.root[size^="small"] .popper {
  max-height: calc(
    6 * calc(var(--select-height-small) - var(--select-border-width) * 2)
  );
}

.root[size$="normal"] {
  width: var(--select-width);
  padding: 0 var(--select-padding-x);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x)
  );
}
.root[size$="normal"] .item {
  padding: 0 var(--select-padding-x);
}
.root[size$="normal"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x));
}
.root[size^="normal"] {
  height: var(--select-height);
  line-height: calc(var(--select-height) - var(--select-border-width) * 2);
}
.root[size^="normal"] .item {
  line-height: calc(var(--select-height) - var(--select-border-width) * 2);
}
.root[size^="normal"] .popper {
  max-height: calc(
    6 * calc(var(--select-height) - var(--select-border-width) * 2)
  );
}

.root[size$="medium"] {
  width: var(--select-width-medium);
  padding: 0 var(--select-padding-x-medium);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-medium)
  );
}
.root[size$="medium"] .item {
  padding: 0 var(--select-padding-x-medium);
}
.root[size$="medium"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-medium));
}
.root[size^="medium"] {
  height: var(--select-height-medium);
  line-height: calc(
    var(--select-height-medium) - var(--select-border-width) * 2
  );
}
.root[size^="medium"] .item {
  line-height: calc(
    var(--select-height-medium) - var(--select-border-width) * 2
  );
}
.root[size^="medium"] .popper {
  max-height: calc(
    6 * calc(var(--select-height-medium) - var(--select-border-width) * 2)
  );
}

.root[size$="large"] {
  width: var(--select-width-large);
  padding: 0 var(--select-padding-x-large);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-large)
  );
}
.root[size$="large"] .item {
  padding: 0 var(--select-padding-x-large);
}
.root[size$="large"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-large));
}
.root[size^="large"] {
  height: var(--select-height-large);
  line-height: calc(
    var(--select-height-large) - var(--select-border-width) * 2
  );
}
.root[size^="large"] .item {
  line-height: calc(
    var(--select-height-large) - var(--select-border-width) * 2
  );
}
.root[size^="large"] .popper {
  max-height: calc(
    6 * calc(var(--select-height-large) - var(--select-border-width) * 2)
  );
}

.root[size$="huge"] {
  width: var(--select-width-huge);
  padding: 0 var(--select-padding-x-huge);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-huge)
  );
}
.root[size$="huge"] .item {
  padding: 0 var(--select-padding-x-huge);
}
.root[size$="huge"]::after {
  right: calc(var(--select-arrow-right-ratio) * var(--select-padding-x-huge));
}
.root[size^="huge"] {
  height: var(--select-height-huge);
  line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2);
}
.root[size^="huge"] .item {
  line-height: calc(var(--select-height-huge) - var(--select-border-width) * 2);
}
.root[size^="huge"] .popper {
  max-height: calc(
    6 * calc(var(--select-height-huge) - var(--select-border-width) * 2)
  );
}

.root[size$="full"] {
  width: 100%;
  padding: 0 var(--select-padding-x-full);
  padding-right: calc(
    var(--select-arrow-size) * 7 / 9 + var(--select-arrow-right-ratio) *
      var(--select-padding-x-full)
  );
}
.root[size$="full"] .item {
  padding: 0 var(--select-padding-x-full);
}
.root[size^="full"] {
  height: 100%;
}

.root[color="inverse"] {
  background: var(--select-background-inverse);
  border-color: var(--select-border-color-inverse);
  color: var(--select-color-inverse);
}

.popper[color="inverse"] {
  background: var(--select-popper-background-inverse);
  color: var(--select-popper-color-inverse);
  border-color: var(--select-popper-border-color-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"]:hover {
  background: var(--tree-view-node-background-active-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"]:focus {
  background: var(--tree-view-node-background-active-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][selected] {
  background: var(--tree-view-node-background-selected-inverse);
}

.popper[color="inverse"]
  [class^="u-tree-view_node_item"][selected]
  [class^="u-tree-view_node_text"] {
  color: var(--tree-view-node-color-selected-inverse);
}

.popper[color="inverse"]
  [class^="u-tree-view_node_item"][selected]
  [class^="u-tree-view_node_expander"] {
  color: var(--tree-view-node-expander-color-selected-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][disabled] {
  color: var(--tree-view-node-color-disabled-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][disabled] {
  background: var(--tree-view-node-background-disabled-inverse);
}

.popper[color="inverse"] [class^="u-tree-view_node_item"][selected][disabled] {
  background: var(--tree-view-node-background-selected-disabled-inverse);
}
</style>
