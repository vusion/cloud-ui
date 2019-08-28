## UValidator
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称。已废弃 |
| label | String | | 标签。在 UValidator 用于提示消息的合成，在 UFormItem 等其他组件用于显示标签 |
| rules | String, Array | | 验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型 |
| message | String | | 默认提示消息 |
| muted | String | | 验证时是否静默。可选值：`'message'`表示只静默消息提示，`'all'`同时静默消息提示和红框提示 |
| ignore-validation | Boolean | `false` | 忽略验证 |
| ignore-rules | Boolean | `false` | 忽略验证规则。已废弃，同`ignore-validation` |
| validating-options | Object | | 验证辅助对象。在 Rule 的 `validate` 方法中使用 |
| validating-value | Any | | 临时修改验证值 |
| validating-process | Function | | 验证前对值进行预处理 |
| manual | Boolean | `false` | 是否采取手动验证。如果为`true`，则 UValidator 将不会在监听到子组件的`input`、`change`和`blur`事件后进行相应的验证。 |

### Computed

对于第一个 Field 或者所有子 UValidator：

| Computed | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| touched | Boolean | | 用户是否触碰 |
| dirty | Boolean | | 用户是否修改值 |
| valid | Boolean | | 验证是否通过 |
| firstError | String | | 第一个错误提示消息 |

### Slots

#### (default)

插入继承了 MField 的组件，或子 UValidator，或其他 HTML 和文本。

### Events

#### @validate

验证时触发，或内部验证时冒泡触发

对于第一个 Field 或者所有子 UValidator：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | Boolean | 验证是否通过 |
| $event.touched | Boolean | 用户是否触碰 |
| $event.dirty | Boolean | 用户是否修改值 |
| $event.firstError | String | 第一个错误提示消息 |
| senderVM | UValidator | 发送事件实例 |

### Methods

#### validate(trigger, muted)

手动验证。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `'submit'` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | Boolean | `false` | 是否验证后无提示 |
