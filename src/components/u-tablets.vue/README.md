<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTablets 药片

- [示例](#示例)
    - [基本样式](#基本样式)
    - [选择值](#选择值)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
    - [可取消](#可取消)
    - [多项选择](#多项选择)
- [UTablets API](#utablets-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UTablet API](#utablet-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

## 示例
### 基本样式

``` html
<u-tablets>
    <u-tablet>Apple</u-tablet>
    <u-tablet>Banana</u-tablet>
    <u-tablet>Cake</u-tablet>
</u-tablets>
```

### 选择值

``` html
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-tablets value="C" readonly>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<u-tablets value="C" disabled>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B" disabled>Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
</u-linear-layout>
```

### 可取消

点击两次同一项，可取消状态

``` html
<u-tablets value="C" cancelable>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### 多项选择

绑定`value`属性，可以用`v-model`或`:value.sync`。

``` html
<u-tablets :value="['B', 'C']" multiple>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

## UTablets API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |
| auto-select | boolean |  | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | boolean |  | `false` | 是否可以取消选择 |
| multiple | boolean |  | `false` | 是否可以多选 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-tablet>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | UTablet | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTablets | 发送事件实例 |

#### @input

选择某一项时触发，仅在单选模式中生效

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | UTablets | 发送事件实例 |

#### @select

选择某一项时触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | UTablet | 选择项子组件 |
| $event.oldVM | UTablet | 旧的选择项子组件 |
| senderVM | UTablets | 发送事件实例 |

#### @select

选择某一项时触发。多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | 选中还是取消 |
| $event.item | boolean | 该选中项相关对象 |
| $event.itemVM | boolean | 该选中项子组件 |
| $event.value | Array | 改变后的值 |
| $event.oldValue | Array | 旧的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.oldItems | Array\<object\> | 旧的所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UTablet\> | 所有选中项子组件的数组 |
| $event.oldVMs | Array\<UTablet\> | 旧的所有选中项子组件的数组 |
| senderVM | UTablets | 发送事件实例 |

#### @change

选择值改变时触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | UTablet | 选择项子组件 |
| $event.oldVM | UTablet | 旧的选择项子组件 |
| senderVM | UTablets | 发送事件实例 |

#### @change

选择值改变时触发。多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | 所有选中项的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UTablet\> | 所有选中项子组件的数组 |
| senderVM | UTablets | 发送事件实例 |

## UTablet API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any |  |  | 此项的值 |
| selected | boolean |  | `false` | 是否选中此项 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | UTablet | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | UTablet | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTablet | 发送事件实例 |

