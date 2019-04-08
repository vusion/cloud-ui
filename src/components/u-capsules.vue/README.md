# Capsules 胶囊

## 示例
### 基本样式

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule>Banana</u-capsule>
    <u-capsule>Cake</u-capsule>
</u-capsules>
```

### 选择值

``` html
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-capsules value="C" readonly>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<u-capsules value="C" disabled>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B" disabled>Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
</u-linear-layout>
```

### 可切换状态

点击两次同一项，可切换选择状态

``` html
<u-capsules value="C" cancelable>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 可多选

``` html
<u-capsules value="C" multiple>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 胶囊组

``` html
<u-capsules>
    <u-capsule-group>
        <u-capsule>Apple</u-capsule>
        <u-capsule>Banana</u-capsule>
        <u-capsule>Cake</u-capsule>
    </u-capsule-group>
    <u-capsule-group>
        <u-capsule>Apple</u-capsule>
        <u-capsule>Banana</u-capsule>
        <u-capsule>Cake</u-capsule>
    </u-capsule-group>
</u-capsules>
```


### Flag

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule flag>Banana</u-capsule>
    <u-capsule flag="">Cake</u-capsule>
</u-capsules>
```

### 标签

``` vue
<template>
<u-capsules @change="test">
    <u-capsule value="6" size="small">6</u-capsule>
    <u-capsule value="7" size="small" label="88折">7</u-capsule>
    <u-capsule value="8" size="small" label="88折">8</u-capsule>
    <u-capsule value="9" size="small" label="88折">9</u-capsule>
    <u-capsule value="10" size="small" label="88折">1年</u-capsule>
    <u-capsule value="11" size="small" label="80折">2年</u-capsule>
</u-capsules>
</template>
<script>
export default {
    methods:{
        test(e) {
            console.log(e)
        }
    }
}
</script>
```

## Capsules API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-capsule>` 或 `<u-capsule-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | ListViewItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<ListViewItem\> | 多选模式中，所有选中项子组件的数组 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | ListViewItem |  单选模式中，选择项子组件 |

## Capsule API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| size | String | | 胶囊大小，可选值：`'small'` |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| label | String | `''` | 顶部自定义提示文本 |
| flag | Any |  | 是否右上角有flag标志 |

### Slots

#### (default)

插入文本或`HTML`。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

## CapsuleGroup API

无

