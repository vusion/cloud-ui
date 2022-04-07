<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URegionSelect 地区选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [Placeholder](#placeholder)
    - [仅显示什么区](#仅显示什么区)
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
    <u-region-select defaultValue="浙江 / 杭州 / 滨江区"></u-region-select>
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
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> |  |  | 数据列表 |
| placeholder | string |  | `'请选择'` | 搜索框为空时提示文本 |
| trigger | string | `[object Object]`<br/>`[object Object]` |  | 触发方式 |
| v-model | String |  |  | 双向绑定 |
| join | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `' / '` | 将选中的值以选择的符号作为连接符，转为字符串格式,不可为空值 |
| field | string |  | `'text'` | 显示文本字段 |
| filterable | boolean |  | `false` | 是否可以过滤（搜索），开启将会显示搜索框。 |
| clearable | boolean |  | `false` | 开启并在输入框有内容时会显示清除按钮。 |
| showFinalValue | boolean |  | `false` | 定义是否显示完整的路径，ture时只显示最后一项 |
| disabled | boolean |  | `false` |  |

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

