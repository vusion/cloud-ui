## UCapsules API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| values.sync | Any | | 多项选择的值 |
| auto-select | Boolean | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-capsule>`或`<u-capsules-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | UCapsule | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UCapsules | 发送事件实例 |

#### @input

选择某一项时触发，仅在单选模式中生效

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | UCapsules | 发送事件实例 |

#### @select

选择某一项时触发

单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.oldItem | Object | 旧的选择项相关对象 |
| $event.itemVM | UCapsule | 选择项子组件 |
| $event.oldVM | UCapsule | 旧的选择项子组件 |
| senderVM | UCapsules | 发送事件实例 |

多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | Boolean | 选中还是取消 |
| $event.item | Boolean | 该选中项相关对象 |
| $event.itemVM | Boolean | 该选中项子组件 |
| $event.values | Array | 改变后的值 |
| $event.oldValues | Array | 旧的值 |
| $event.items | Array\<Object\> | 所有选中项相关对象的数组 |
| $event.oldItems | Array\<Object\> | 旧的所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UCapsule\> | 所有选中项子组件的数组 |
| $event.oldVMs | Array\<UCapsule\> | 旧的所有选中项子组件的数组 |
| senderVM | UCapsules | 发送事件实例 |

#### @change

选择值改变时触发

单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.oldItem | Object | 旧的选择项相关对象 |
| $event.itemVM | UCapsule | 选择项子组件 |
| $event.oldVM | UCapsule | 旧的选择项子组件 |
| senderVM | UCapsules | 发送事件实例 |

多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.values | Array | 所有选中项的值 |
| $event.items | Array\<Object\> | 所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UCapsule\> | 所有选中项子组件的数组 |
| senderVM | UCapsules | 发送事件实例 |

## UCapsule API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| size | String | | 胶囊大小，可选值：`'small'` |
| selected | Boolean | `false` | 是否选中此项 |
| disabled | Boolean | `false` | 禁用此项 |
| label | String | `''` | 顶部自定义提示文本 |
| flag | Any |  | 是否右上角有flag标志 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | UCapsule | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | UCapsule | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UCapsule | 发送事件实例 |


## CapsuleGroup API

无
