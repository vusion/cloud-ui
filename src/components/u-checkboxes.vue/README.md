<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCheckboxes 多选组

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [只读和禁用](#只读和禁用)
    - [不确定状态](#不确定状态)
    - [多选组](#多选组)
    - [数量限制](#数量限制)
    - [全选](#全选)
    - [autofocus](#autofocus)
- [UCheckboxes API](#ucheckboxes-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UCheckbox API](#ucheckbox-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events)

**Form**

多项中选择多个时使用

## 示例
### 基本用法

``` html
<u-checkbox>多选框</u-checkbox>
```

### 双向绑定

``` vue
<template>
<u-linear-layout>
    <u-checkbox v-model="value">{{ value }}</u-checkbox>
    <u-checkbox :value.sync="value">{{ value }}</u-checkbox>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>只读</u-checkbox>
    <u-checkbox :value="true" disabled>禁用</u-checkbox>
</u-linear-layout>
```

### 不确定状态

``` html
<u-checkbox :value="null">不确定</u-checkbox>
```

### 多选组

``` vue
<template>
<div>
    <u-checkboxes v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
};
</script>
```

### 数量限制

使用`min`和`max`属性可以限制选择项的数量。

``` vue
<template>
<div>
    <u-checkboxes :min="1" :max="2" v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
    methods: {
        add() {
            this.checkedList.push('水杯');
        },
    },
};
</script>
```

### 全选

``` vue
<template>
<div>
    <u-checkbox v-model="allChecked" @check="checkAll($event.value)">全选</u-checkbox>
    <u-checkboxes v-model="checkedList" @check="onCheck($event.value)">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            allChecked: false,
            checkedList: [],
        };
    },
    methods: {
        checkAll(checked) {
            this.checkedList = checked ? ['水杯', '坚果', '毛巾', '沙发'] : [];
        },
        onCheck(value) {
            if (this.checkedList.length === 4)
                this.allChecked = true;
            else if (this.checkedList.length === 0)
                this.allChecked = false;
            else
                this.allChecked = null;
        },
    },
};
</script>
```

### autofocus

``` html
<u-checkboxes>
    <u-checkbox label="水杯">水杯</u-checkbox>
    <u-checkbox label="坚果" autofocus>坚果</u-checkbox>
    <u-checkbox label="毛巾">毛巾</u-checkbox>
    <u-checkbox label="沙发">沙发</u-checkbox>
</u-checkboxes>
```

## UCheckboxes API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | Array |  | `[]` | 多选组的选中项 |
| min | number |  | `0` | 可以勾选多选框的最小数量 |
| max | number |  | `Infinity` | 可以勾选多选框的最大数量 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<checkbox>`子组件。

## UCheckbox API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | boolean, null |  | `false` | 选中状态，`null`表示不确定状态 |
| label | any |  |  | 多选框标签。用于关联多选组的值 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| autofocus | boolean |  | `false` | 自动获取焦点 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-check

切换选中状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean, null | 选中状态 |
| $event.oldValue | boolean, null | 旧的选中状态 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | UCheckbox | 发送事件实例 |

#### @input

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | boolean, null | 切换后的选中状态 |
| senderVM | UCheckbox | 发送事件实例 |

#### @check

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean, null | 选中状态 |
| $event.oldValue | boolean, null | 旧的选中状态 |
| $event.label | any | 此选框的标签 |
| senderVM | UCheckbox | 发送事件实例 |

#### @change

选中状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | boolean, null | 选中状态 |
| $event.oldValue | boolean, null | 旧的选中状态 |
| senderVM | UCheckbox | 发送事件实例 |

