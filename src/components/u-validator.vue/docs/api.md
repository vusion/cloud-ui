## UValidator API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称，用于选择表单的模型数据和验证规则 |
| label | String | | 标签 |
| label-size | String | `'normal'` | 单独设置表单项的标签大小 |
| field-size | String | `'normal'` | 单独设置表单项的内容大小。可选值：`'full'` |
| rules | Array | | 表单项的验证规则。如果没有则会根据`name`属性从表单的`rules`中获取。 |
| ignore-rules | Boolean | `false` | 忽略验证规则。 |
| message | String | | 默认提示信息 |
| required | Boolean | `false` | 是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。 |
| description | String | | 添加描述内容 |
| placement | String | | 值为`'bottom'`时提示信息在底部显示，改变提示信息显示位置 |
| layout | String |  | 布局方式，可选值：`'block'` |

### Slots

#### (default)

插入文本或 HTML。

#### label

插入自定义标签标题，且 `FormItem` 中 `label`属性失效。

#### description

插入自定义描述内容，且 `FormItem` 中 `description`属性失效。

#### extra

自定义标签插入内容。

### Methods

#### validate(trigger, slient)

验证此表单项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| silent | Boolean | `false` | 是否仅验证无提示。 |
