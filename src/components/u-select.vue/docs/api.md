## USelect
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| values.sync | Any | | 多项选择的值 |
| field | String | `'text'` | 显示文本字段 |
| data | Array\<{ text, value }\> | | 列表数据 |
| data-source | Object, Function, DataSource | | 多功能数据源 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| placeholder | Boolean | `'请选择'` | 选择框的占位符 |
| loading-text | String | `'加载中...'` | 加载时的文字。使用分页加载时才会出现 |
| empty-text | String | `'加载中...'` | 没有匹配时的文字 |
| initial-load | Boolean | `true` | 是否在初始时立即加载 |
| pageable | Boolean | `false` | 是否需要分页 |
| page-size | Number | `50` | 分页大小 |
| remote-paging | Boolean | `false` | 是否使用后端分页 |
| clearable | Boolean | `false` | 是否有清除按钮 |
| filterable | Boolean | `false` | 是否使用输入框进行过滤 |
| match-method | String, Function | `includes` | 过滤时的匹配方法 |
| case-sensitive | String, Function | `includes` | 过滤时大小写是否敏感 |
| remote-filtering | Boolean | `false` | 是否使用后端过滤 |
| auto-complete | Boolean | `false` | 是否开启自动补充模式，用于增加列表中没有的项 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| opened.sync | Boolean | `false` | 弹出/关闭状态 |
| ellipsisDirection | String| `'ltr'` | 控制文本省略方向，其值和原生`css`属性`'direction'`值保持一致 |
| size | String | `'normal normal'` | 控制宽高属性，第一个值表示高度属性，第二值表示宽度，可选值: `mini`,`small`,`normal`,`medium`,`large`,`huge`,`full`,可以互相组合 |

### Slots

#### (default)

插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USelect | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | USelect | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| senderVM | USelect | 发送事件实例 |

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止弹出流程 |
| senderVM | USelect | 发送事件实例 |

#### @open

弹出时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | USelect | 发送事件实例 |

#### @before-close

隐藏前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止隐藏流程 |
| senderVM | USelect | 发送事件实例 |

#### @close

隐藏时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | USelect | 发送事件实例 |

#### @before-toggle

@deprecated

#### @toggle

@deprecated

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | UTableView | 发送事件实例 |

### Methods

#### open()

弹出选择框。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### close()

关闭选择框。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### toggle(opened?)

切换弹出/关闭状态。

| Param | Type | Description |
| ----- | ---- | ----------- |
| opened? | Boolean | 可选。弹出/关闭状态 |

#### load()

带缓存地加载

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reload()

清除缓存，重新加载

| Param | Type | Description |
| ----- | ---- | ----------- |

## USelectItem
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SelectItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USelectItem | 发送事件实例 |

## USelectGroup

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## USelectDivider

无
