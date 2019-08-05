## UForm
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| model | Object | | 表单数据模型 |
| rules | Object | | 表单所有域的验证规则，已废弃，推荐在各`<u-form-item>`中自行添加 rules。 |
| layout | String | `block` | 表单布局方式。可选值：`block`、`inline`。 |
| label-size | String | `normal` | 标签大小。可选值：`small`、`normal`、`large`。 |

### Computed

对于表单内所有项：

| Computed | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| touched | Boolean | | 用户是否触碰 |
| dirty | Boolean | | 用户是否修改值 |
| valid | Boolean | | 验证是否通过 |
| firstError | String | | 第一个错误提示消息 |

### Slots

#### (default)

插入`<u-form-item>`子组件。

### Events

#### @validate

验证时触发

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


#### validateItem(name, trigger, slient)

验证表单中的某一项，已废弃。表单中的项是嵌套的，用 name 层级较深，而且可能有重名。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| name | String | | 表单项的 name |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | Boolean | `false` | 是否验证后无提示 |

## FormItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称。已废弃 |
| label | String | | 标签。用于左侧显示，同时用于提示消息的合成 |
| label-size | String | `'normal'` | 单独设置表单项的标签大小 |
| field-size | String | `'normal'` | 单独设置表单项的内容大小。可选值：`'full'` |
| required | Boolean | `false` | 是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。 |
| message | String | | 默认提示消息 |
| muted | String | | 验证时是否静默。可选值：`'message'`表示只静默消息提示，`'all'`同时静默消息提示和红框提示 |
| description | String | | 添加描述内容 |
| placement | String | | 值为`'bottom'`时提示信息在底部显示，改变提示信息显示位置 |
| layout | String |  | 布局方式，可选值：`'block'` |
| **Validation Props/Attrs** |
| rules | String, Array | | 验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型 |
| ignore-validation | Boolean | `false` | 忽略验证 |
| ignore-rules | Boolean | `false` | 忽略验证规则。已废弃，同`ignore-validation` |
| validating-options | Object | | 验证辅助对象。在 Rule 的 `validate` 方法中使用 |
| validating-value | Any | | 临时修改验证值 |
| validating-process | Function | | 验证前对值进行预处理 |

### Slots

#### (default)

插入文本或 HTML。

#### label

插入自定义标签标题，代替`label`属性。

#### description

插入自定义描述内容，代替`description`属性。

#### extra

自定义标签右侧额外内容。

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

验证此表单项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `'submit'` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | Boolean | `false` | 是否验证后无提示 |
