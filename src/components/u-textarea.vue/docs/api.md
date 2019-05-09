## UTextarea
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | 输入框的值 |
| value.sync, v-model | String | | 输入框的值 |
| default-value.sync, v-model | String | | 默认值。即 reset 方法恢复的值。 |
| clearable | Boolean | | 是否可清空。开启并在输入框有内容时会显示清空按钮。 |
| placeholder | String | | 原生属性。对 IE9 做了兼容。 |
| minlength | Number | | 原生属性 |
| maxlength | Number | | 原生属性 |
| spellcheck | Boolean | | 原生属性 |
| autofocus | Boolean | | 是否自动获取焦点 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| resize | String | `'none'` | 是否可以调整大小。可选值：`'none'`、`'both'`、`'horizontal'`、`'vertical'` |

<!-- | autosize | String | `'none'` | 自适应内容宽高。可选值：`none`、`both`、`horizontal`、`vertical` | -->

### Events
#### @input

输入时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @focus

获得焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UTextarea | 发送事件实例 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UTextarea | 发送事件实例 |

#### @before-clear

清空前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UTextarea | 发送事件实例 |

#### @clear

清空时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

#### @before-reset

重置前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 待重置的值 |
| $event.preventDefault | Function | 阻止重置流程 |
| senderVM | UTextarea | 发送事件实例 |

#### @reset

重置时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UTextarea | 发送事件实例 |

### Methods

#### focus()

让输入框获取焦点。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### blur()

让输入框失去焦点。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### clear()

清空输入框。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reset()

重置输入框。

| Param | Type | Description |
| ----- | ---- | ----------- |
