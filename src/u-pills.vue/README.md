# 药丸 Pills

## 示例
### 基本形式

``` html
<u-pills>
    <u-pill>Apple</u-pill>
    <u-pill>Banana</u-pill>
    <u-pill>Cake</u-pill>
</u-pills>
```

### 选择值

``` html
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-pills value="C" readonly>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<u-pills value="C" disabled>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B" disabled>Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
</u-linear-layout>
```

### 可切换状态

点击两次同一项，可切换选择状态

``` html
<u-pills value="C" cancelable>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

## Pills API
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

插入`<u-pill>`子组件。

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

## Pill API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

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
