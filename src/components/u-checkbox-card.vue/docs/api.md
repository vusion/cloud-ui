## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | array | `[]` | 可供选择的数据 |
| value.sync, v-model | Array | | 被选中数据 |
| placeholder | String | | 没有数据时的占位显示 |
| size | String | `'normal'`| 卡片尺寸 |
| column | Number | | 一行固定多少个选择项，如果不传则固定单项宽度为158px，每行个数自适应行宽 |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

#### placeholder

空数据占位显示内容

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

