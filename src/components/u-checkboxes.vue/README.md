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
    - [Events](#events)
    - [Methods](#methods)
- [UCheckbox API](#ucheckbox-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)

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

使用`converter`。
``` vue
<template>
<div>
    <u-checkboxes v-model="checkedList" converter="join">
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
            checkedList: '毛巾,沙发',
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
| data-source | Array\<Item\> \| Function |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| text-field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 用于标识选中值的字段 |
| value.sync, v-model | Array |  | `[]` | 当前选中的值 |
| min | number |  | `0` | 可以勾选多选框的最小数量 |
| max | number |  |  | 可以勾选多选框的最大数量 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `''` | 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

### Slots

#### (default)

插入`<checkbox>`子组件。

#### item

自定义选项的结构和样式

### Events

#### @input

切换选项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array\<string\> | 切换后的选中值 |
| senderVM | UCheckbox | 发送事件实例 |

#### @check

切换选项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | Array\<string\> | 切换后的选中值 |
| senderVM | UCheckboxes | 发送事件实例 |

#### @change

选中状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | Array\<string\> | 选中状态 |
| $event.oldValue | Array\<string\> | 旧的选中状态 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

Methods

#### reload()

清除缓存，重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

## UCheckbox API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| value.sync, v-model | boolean, null |  | `false` | 当前选中的值 |
| label | any |  |  | 用于标识选项的值 |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |

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

