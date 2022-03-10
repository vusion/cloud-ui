<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URegionSelect 地区选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [Placeholder](#placeholder)
    - [隐藏空列表](#隐藏空列表)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

该组件从 UCascadeSelect 继承，仅填充了中国的行政区数据，其他功能与 UCascadeSelect 相同。

## 示例
### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select value="浙江,杭州,滨江区"></u-region-select>
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
<u-region-select :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```

### 隐藏空列表

``` html
<u-region-select hide-empty :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> |  | `'数据'` | 数据列表，当前地区数据集合不满足需求，可以重设此数据 |
| value.sync, v-model | any |  |  |  |
| categories | Array\<{ label, key, placeholder }\> |  | `'数据'` | 多级分类 |
| hide-empty | boolean |  | `false` | 是否隐藏空列表 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'join'` | 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式 |
| field | string |  | `'value'` | 显示文本字段 |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | URegionSelect | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.level | number | 选择的层级 |
| $event.value | any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |
| senderVM | URegionSelect | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.oldValues | Array | 旧的每项值的数组 |
| senderVM | URegionSelect | 发送事件实例 |

