## USubtabs
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 选中标签页的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| closable | Boolean | `false` | 是否可以关闭 |
| router | Boolean | `false` | 是否根据 vue-router 来控制选择哪个标签页 |

### Slots

#### (default)

插入`<u-tab>`子组件。

#### extra

在标签右侧可以附加组件。

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中标签页的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | USubtab | 选中标签页实例 |
| $event.oldVM | USubtab | 旧的选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USubtabs | 发送事件实例 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中标签页的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | USubtab | 选中标签页实例 |
| $event.oldVM | USubtab | 旧的选中标签页实例 |
| senderVM | USubtabs | 发送事件实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 待关闭标签页的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | USubtab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | USubtabs | 发送事件实例 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 关闭的标签页的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | USubtabs | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |
| senderVM | USubtabs | 发送事件实例 |

## USubtab
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标签页标题 |
| value | Any | | 标签页的值 |
| disabled | Boolean | `false` | 是否禁用此标签页 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String, Location |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
