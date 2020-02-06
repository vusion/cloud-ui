## USteps
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 当前步骤数 |
| shape-size | String | `'normal'` | 图形大小 |
| readonly | Boolean | `false` | 是否只读。非只读的情况下可以选择 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-step>`子组件。

### Events

#### @before-select

选择某一步骤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中步骤的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | UStep | 选中步骤实例 |
| $event.oldVM | UStep | 旧的选中步骤实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USteps | 发送事件实例 |

#### @select

选择某一步骤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中步骤的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | UStep | 选中步骤实例 |
| $event.oldVM | UStep | 旧的选中步骤实例 |
| senderVM | USteps | 发送事件实例 |

## UStep
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 步骤名 |
| disabled | Boolean | `false` | 是否禁用此标签页 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
