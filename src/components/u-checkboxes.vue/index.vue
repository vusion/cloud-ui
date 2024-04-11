<template>
<div :class="$style.root">
  <u-loading v-if="loading" size="small"></u-loading>
  <template v-else>
    <u-checkbox
      v-if="checkAll"
      label="check-all"
      :value="all"
      :disabled="disabled"
      :readonly="readonly"
      :style="{ display: checkAllDisplay }"
    >
      <slot name="check-all">
        <u-text :text="checkAllText"></u-text>
      </slot>
    </u-checkbox>
    <u-checkbox
      v-for="(node, index) in currentDataSource.data"
      :key="index"
      :text="$at2(node, textField)"
      :label="$at2(node, valueField)"
      :disabled="node.disabled"
      :readonly="node.readonly"
      :designer="$env.VUE_APP_DESIGNER"
      :node="node"
    >
      <template #item="item">
        <slot name="item" v-bind="item" :index="index">
          {{ $at2(node, textField) }}
        </slot>
      </template>
    </u-checkbox>
    <u-preview v-if="isPreview" :text="currentText"></u-preview>
  </template>
  <template v-if="$env.VUE_APP_DESIGNER && !dataSource && !$slots.default">
    <span :class="$style.loadContent">{{ treeSelectTip }}</span>
  </template>
  <slot></slot>
</div>
</template>

<script>
import { MParent } from "../m-parent.vue";
import MField from "../m-field.vue";
import MConverter from "../m-converter.vue";
import SupportDataSource from "../../mixins/support.datasource";
import UCheckbox from "../u-checkbox.vue";
import MPreview from '../u-text.vue/preview';
import UPreview from '../u-text.vue/preview.vue';

export default {
  name: "u-checkboxes",
  childName: "u-checkbox",
  components: {
    UCheckbox,
    UPreview
  },
  mixins: [MParent, MField, MConverter, SupportDataSource, MPreview],
  props: {
    value: [Array, String],
    min: { type: Number, default: 0 },
    max: { type: Number, default: Infinity },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    checkAll: { type: Boolean, default: false },
    checkAllDisplay: { type: String, default: "inline" },
    checkAllText: { type: String, default: "全选" },
    preview: { type: Boolean, default: false },
  },
  data() {
    return {
      currentValue: null,
      itemVMs: [],
      all: false,
      currentText : null
    };
  },
  watch: {
    value(value) {
      this.watchValue(value);
      this.setCheckAll();
    },
    currentValue(value, oldValue) {
      if (this.converter) {
        value = this.currentConverter.get(value);
        oldValue = this.currentConverter.get(oldValue);
      }

      // currentText
      let texts = [];
      this.itemVMs.forEach(it => {
          if (it?.status == 'true') {
              texts.push(it.$slots.item?.[0].componentOptions.propsData.text);
          }
      });
      if (texts.length > 0)
        this.currentText = texts.join(',');
      this.$emit("change", { value, oldValue });
    },
    itemVMs() {
      this.watchValue(this.value);
      this.setCheckAll();
    },
  },
  computed: {
    // 除了全选checkbox以外的子实例
    itemVMsExcludesCheckAll() {
      return this.itemVMs.filter((vm) => vm.label !== "check-all");
    },
    // 是否被全选
    isCheckAll() {
      // 这样判断是为了兼容用户传入的value要比静态设置的子项数目多的场景
      return this.itemVMsExcludesCheckAll.every((vm) =>
        this.currentValue.includes(vm.label)
      );
    },
  },
  mounted() {
    // 修复bug：多选组，多选项值设为true，如果不操作拿不到值
    this.initSyncValue(this.value);
    this.watchValue(this.currentValue);
  },
  methods: {
    watchValue(value) {
      // 修复bug ide环境 传进来 {{ variable1 }} 处理成 []
      if (this.$env.VUE_APP_DESIGNER) {
        value = [];
      }

      if (value) {
        if (this.converter) value = this.currentConverter.set(value);
        this.currentValue = value;
        this.itemVMsExcludesCheckAll.forEach((itemVM) => {
          itemVM.currentValue = value.includes(itemVM.label);
        });
      } else {
        const value = [];
        this.itemVMsExcludesCheckAll.forEach((itemVM) => {
          itemVM.currentValue = value.includes(itemVM.label);
          // itemVM.currentValue && value.push(itemVM.label);
        });
        this.currentValue = value;
      }
    },
    canCheck($event) {
      if (this.readonly || this.disabled) return false;
      const value = $event.value;
      const label = $event.itemVM.label;
      if (label === "check-all") return true;
      if (value && !this.currentValue.includes(label)) {
        const length = this.currentValue.length + 1;
        return length <= this.max;
      } else if (!value && this.currentValue.includes(label)) {
        const length = this.currentValue.length - 1;
        return length >= this.min;
      }
      return true;
    },
    toggleCheckAll(all) {
      this.all = all;
      if (all) {
        this.itemVMsExcludesCheckAll.forEach((vm) => {
          if (!this.currentValue.includes(vm.label)) {
            this.currentValue.push(vm.label);
          }
        });
      } else {
        this.itemVMsExcludesCheckAll.forEach(({ label }) => {
          const index = this.currentValue.indexOf(label);
          if (index === -1) return;
          this.currentValue.splice(index, 1);
        });
      }
    },
    togglePrimaryCheckBox(value, label) {
      if (value && !this.currentValue.includes(label)) {
        this.currentValue.push(label);
      } else if (!value && this.currentValue.includes(label)) {
        this.currentValue.splice(this.currentValue.indexOf(label), 1);
      }
      // 先给默认值兜底，下一帧更新成正确的数据，保证全选状态的正确性。
      this.all = false;
      this.$nextTick(() => {
        this.all = this.itemVMsExcludesCheckAll.some((vm) => vm.currentValue)
          ? null
          : false;
        if (this.isCheckAll) {
          this.all = true;
        }
      });
    },
    onCheck($event) {
      const value = $event.value;
      const label = $event.itemVM.label;
      if (label !== "check-all") {
        this.togglePrimaryCheckBox(value, label);
      } else {
        this.toggleCheckAll(value);
      }

      let currentValue = this.currentValue;
      if (this.converter) {
        currentValue = this.currentConverter.get(currentValue);
      }
      this.$emit("input", currentValue);
      this.$emit("update:value", currentValue);
      this.$emit("check", {
        value: currentValue,
        itemVM: $event.itemVM,
      });
    },
    exceedMax() {
      return (
        Array.isArray(this.currentValue) && this.currentValue.length >= this.max
      );
    },
    initSyncValue(value) {
      if (value === "" || (Array.isArray(value) && !value.length)) {
        const values = [];
        this.itemVMs.forEach(
          (itemVM) => itemVM.currentValue && values.push(itemVM.label)
        );
        this.currentValue = values;
        let currentValue = values;
        if (this.converter)
          currentValue = this.currentConverter.get(currentValue);

        // 有可能使用方在使用组件的时候，初始双向绑定的value值是空的，等接口返回后去设置value值。有些在使用该组件的时候会监听input方法，这里抛出事件后会导致使用方的值变空
        // 所有如果得到的值和value值一样（可能都是空），就不抛出事件
        if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
          this.$emit("input", currentValue);
          this.$emit("update:value", currentValue);
        }
      }
    },
    setCheckAll() {
      // 不开启全选就直接return
      if (!this.checkAll) return;
      if (this.isCheckAll) {
        this.all = true;
        // 这里不能这样判断：this.currentValue.length === 0，这里子项全部为false不代表currentValue.length === 0
      } else if (
        !this.currentValue.some((item) =>
          this.itemVMsExcludesCheckAll.some((vm) => vm.label === item)
        )
      ) {
        this.all = false;
      } else {
        // 半选兜底
        this.all = null;
      }

    }
  },
};
</script>

<style module>
.root {
}

.root > *:not(:last-child) {
  margin-right: var(--checkbox-space-x);
}

.root .loadContent {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
