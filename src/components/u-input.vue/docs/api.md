## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | 输入框的类型，目前支持两种：`'text'`和`'password'` |
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
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| search | String | | 搜索标志，支持位置自定义，默认搜索标志在最右边，值为`left`即表示搜索标志在左边 |
| maxlengthMessage | String | | 输入内容达到上限时的错误提示，且被 [FormItem](#/components/u-form) 包裹时生效 |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

### Events

#### @input

输入时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |
| senderVM | UInput | 发送事件实例 |

#### @change

值变化时触发。（注意：与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UInput | 发送事件实例 |

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

#### @before-clear

清空前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 待清空的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UInput | 发送事件实例 |

#### @clear

清空时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 清空后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UInput | 发送事件实例 |

#### @before-reset

重置前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 待重置的值 |
| $event.preventDefault | Function | 阻止重置流程 |
| senderVM | UInput | 发送事件实例 |

#### @reset

重置时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 重置后的值 |
| $event.oldValue | String | 旧的值 |
| senderVM | UInput | 发送事件实例 |

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
