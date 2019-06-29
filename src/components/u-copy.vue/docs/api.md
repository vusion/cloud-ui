## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | 需要复制的值 |
| placement | String | `'bottom'` | popper提示框位置，`'top'` `'right'` `'left'` |
| successText | String | `'已复制'` | 复制成功提示文本 |
| disabled | Boolean | `false` | 是否禁止复制 |
| hideDelay | Number | `3000` | popper提示框影藏消失时间 |
| modalType | String | `'popper'` | 复制提示弹窗类型`'popper'` `'toast'` `'none'` |

### Slots

#### (default)

插入  HTML或 `Component`, 可展示额外内容。

### Events

#### @copy

内容复制成功后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 复制的内容 |

