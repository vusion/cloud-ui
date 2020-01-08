<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MDynamic 动态列表

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array |  |  | 数据 |
| dynamic | boolean |  | `true` | 是否可以动态添加/删除项 |
| get-default-item | Function |  |  | 传入获取默认项的方法 |
| initial-add | boolean |  | `true` | 是否自动补充项，如果初始时`data`中的项目数少于`min-count` |
| min-count | number |  | `1` | 最小项目数 |
| max-count | number |  | `Infinity` | 最大项目数 |

### Slots

#### (default)

添加文本或 HTML。

### Events

#### @before-add

添加前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止添加流程 |
| senderVM | MDynamic | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 添加的项 |
| $event.index | number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | MDynamic | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 删除的项 |
| $event.index | number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | any | 变更的项 |
| $event.index | number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |
