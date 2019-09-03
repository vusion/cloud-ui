## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | | 输入框的类型，目前支持两种：默认和`'searchInput'` |
| value.sync, v-model | Array | `[]` | 输入框的内容 |
| placeholder | String | | 原生属性。对 IE9 做了兼容。 |
| disabled | Boolean | `false` | 是否禁用 |
| rules | Array |  | 对于每一个输入字符串的验证规则 |
| list-rules | Array |  | 对于chips的验证规则，如数量范围、是否允许重复项等 |
| separators | String | `'all'` | 指定输入的分隔符。当设置为`'comma'`或`'space'`时，分别指定逗号或空格为分隔符 |


### Events

#### @change

chip数量变化时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |
| senderVM | UInput | 发送事件实例 |

#### @validate

验证时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.isValid | Boolean | 当前内容是否合法 |
| $event.errMessage | String | 当前错误提示 |
| $event.value | String | 当前校验内容 |
| $event.current | Number | 当前项目的索引 |