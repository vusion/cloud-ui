## UDynamicCards

继承 [MDynamic](#/components/m-dynamic)，[UValidator](#/components/u-validator)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | 数据 |
| dynamic | Boolean | `true` | 是否可以动态添加/删除项 |
| get-default-item | Function | | 传入获取默认项的方法 |
| initial-add | Boolean | `true` | 是否自动补充项，如果初始时`data`中的项目数少于`min-count` |
| min-count | Number | `1` | 最小项目数 |
| max-count | Number | `Infinity` | 最大项目数 |
| text-field | String | `'title'` | 用于 mini 显示的字段 |
| index.sync | Number | `0` | 当前展开项的索引 |
| add-button-text | String | `'添加'` | 添加按钮的文本 |
| mini-formatter | Function | | mini 显示时的格式器 |

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

展开区域的内容

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| item | Object | | 项目 |
| index | Number | | 索引 |

#### mini

收起时 mini 显示区的内容

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| item | Object | | 项目 |
| index | Number | | 索引 |

### Events

#### @before-add

添加前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 添加的项 |
| $event.index | Number | 添加的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止添加流程 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 添加的项 |
| $event.index | Number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 变更的项 |
| $event.index | Number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UDynamicCards | 发送事件实例 |

#### @validate

验证时触发，或内部验证时冒泡触发

对于第一个 Field 或者所有子 UValidator：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | Boolean | 验证是否通过 |
| $event.touched | Boolean | 用户是否触碰 |
| $event.dirty | Boolean | 用户是否修改值 |
| $event.firstError | String | 第一个错误提示消息 |
| senderVM | UDynamicCards | 发送事件实例 |

### Methods

#### validate(trigger, muted)

手动验证。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `'submit'` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| muted | Boolean | `false` | 是否验证后无提示 |
