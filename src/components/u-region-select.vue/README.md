<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URegionSelect 地区选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [Placeholder](#placeholder)
    - [仅显示什么区](#仅显示什么区)
    - [过滤（可搜索）](#过滤可搜索)
    - [转换为地区名格式](#转换为地区名格式)
    - [转换为地区码格式](#转换为地区码格式)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Selector**

该组件从 UCascader 继承，仅填充了中国的行政区数据，其他功能与 UCascader 相同。

## 示例
### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select defaultValue="浙江省 / 杭州市 / 滨江区"></u-region-select>
</u-linear-layout>
```

### 双向绑定

使用`v-model`进行双向绑定。

```vue
<template>
    <u-region-select v-model="address"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '',
        };
    },
};
</script>
```

### Placeholder

``` html
<u-region-select placeholder='请选择省份' ></u-region-select>
```


### 仅显示什么区

只想输入框中显示最后一项时，使用showFinalValue

``` html
<u-region-select showFinalValue trigger="hover"></u-region-select>
```

### 过滤（可搜索）

设置filterable属性即可开启过滤功能,解锁手动输入,用于快速查找选项。

``` html
<u-region-select filterable trigger="hover"></u-region-select>
```

### 转换为地区名格式

将值转换为地区名称。

```vue
<template>
    <u-region-select v-model="address" converter="name" @change="onChange"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '浙江省/杭州市/滨江区',
        };
    },
    methods: {
        onChange({ value }) {
            console.log(value)
        }
    }
};
</script>
```

### 转换为地区码格式

将值转换为地区码。

```vue
<template>
    <u-region-select v-model="address" converter="code" @change="onChange"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '330108',
        };
    },
    methods: {
        onChange(event) {
            console.log(event)
        }
    }
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| join | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `' / '` | 将选中的值以选择的符号作为连接符，转为字符串格式,不可为空值 |
| converter | string | `[object Object]`<br/>`[object Object]` |  | 选择地区名称，返回：浙江省/杭州市/滨江区（不加空格）；选择地区码，返回：330108 |
| data | Array\<{ text, value }\> |  |  | 支持动态绑定集合类型变量（List\<T>）或输出参数为集合类型的逻辑。 |
| value.sync, v-model | any |  |  |  |
| field | string |  | `'text'` |  |
| filterable | boolean |  | `false` | 设置是否可以筛选，开启将会显示搜索框。 |
| placeholder | string |  | `'请选择'` | 为空时显示的占位符文本 |
| showFinalValue | boolean |  | `false` | 定义是否显示完整的路径，ture时只显示最后一项 |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| trigger | string | `[object Object]`<br/>`[object Object]` | `'click'` |  |
| clearable | boolean |  | `false` | 设置是否可以清空搜索框，开启后将在有内容时显示清除按钮。 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| opened | boolean |  | `false` | 弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出” |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | UCascader | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.level | number | 选择的层级 |
| $event.value | any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| senderVM | UCascader | 发送事件实例 |

#### @focus

获得焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @clear

清空后触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

Methods

#### open()

弹出实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

清空输入框。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

