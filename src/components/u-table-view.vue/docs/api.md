## UTableView

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 表格标题 |
| title-alignment | String | `'center'` | 表格标题对齐方式 |
| border | Boolean | | 是否显示边框 |
| line | Boolean | `false` | 单元格之间是否显示分隔线条 |
| striped | Boolean | `false` | 表格行是否按斑马线条纹显示 |
| hover | Boolean | `false` | 表格行在悬浮时是否高亮显示 |
| show-head | Boolean | `true` | 是否显示表格头部 |
| loading | Boolean | | 手动设置是否正在加载中 |
| loading-text | String | `'正在加载中'` | 正在加载中的文字 |
| error | Boolean | | 手动设置是否加载失败 |
| error-text | String | `'加载失败，请重试'` | 加载失败时的文字 |
| empty-text | String | `'暂无数据'` | 暂无数据时的文字 |
| **Data Props/Attrs** |
| data | Array\<{ \[field\]: string, ... }\> | | 表格数据 |
| data-source | Object, Function, DataSource | | 多功能数据源 |
| initial-load | Boolean | `true` | 是否在初始时立即加载 |
| pageable | Boolean | `false` | 是否需要分页 |
| page-size.sync | Number | `20` | 分页大小 |
| page-size-options | Array | `[10, 20, 50]` | 每页大小选项列表 |
| show-total | Boolean | `false` | 是否显示总条目数 |
| show-sizer | Boolean | `false` | 是否显示切换每页大小选项 |
| show-jumper | Boolean | `false` | 是否显示页面跳转输入框 |
| sorting.sync | Object<{ field: string, order: string, compare: Function }> | `{ field: undefined, order: 'desc' }` | 当前排序字段和顺序 |
| default-order | String | `'asc'` | 所有列首次点击时的排序顺序 |
| filtering.sync | Object | | 过滤项 |
| remote-paging | Boolean | `false` | 是否使用后端分页 |
| remote-sorting | Boolean | `false` | 是否使用后端排序 |
| remote-filtering | Boolean | `false` | 是否使用后端过滤 |
| **Selection Props/Attrs** |
| value-field | String | | 在单选和多选操作中，指定数据唯一值的字段 |
| value.sync, v-model | Any | | 当前选择的值 |
| values.sync | Array | | 多项选择的值 |
| selectable | Boolean | `false` | 是否可以选择行 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| **Other Props/Attrs** |
| accordion | Boolean | `false` | 在有`expander`列的情况下，展开一行的同时，是否收起其它行 |
| resizable | Boolean | `false` | 是否可以调整列宽 |
| resize-remaining | Boolean | `'sequence'` | 调整列宽效果。可选值：`sequence`表示保持总宽不变，优先后一列弥补宽度；`average`表示保持总宽不变，后面所有列平均弥补宽度；`none`表示不做任何处理，表格宽度变化。 |


### Slots

#### (default)

在表格中插入`<u-table-view-column>`子组件。

#### loading

自定义加载中。

#### error

自定义错误。

#### empty

自定义空态。

### Data Events

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

#### @before-page

切换分页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | 分页大小 |
| $event.oldSize | Number | 分页大小 |
| $event.number | Number | 当前页数 |
| $event.oldNumber | Number | 旧的页数 |
| $event.preventDefault | Function | 阻止切换分页流程 |
| senderVM | UTableView | 发送事件实例 |

#### @page

切换分页或改变分页大小时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | 分页大小 |
| $event.oldSize | Number | 分页大小 |
| $event.number | Number | 当前页数 |
| $event.oldNumber | Number | 旧的页数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-sort

排序前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | 排序顺序 |
| $event.order | String | 排序字段 |
| $event.compare | Function | 排序比较函数 |
| $event.preventDefault | Function | 阻止排序流程 |
| senderVM | UTableView | 发送事件实例 |

#### @sort

排序时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | 排序顺序 |
| $event.order | String | 排序字段 |
| $event.compare | Function | 排序比较函数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-filter

过滤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | Object | 过滤筛选对象 |
| $event.preventDefault | Function | 阻止过滤流程 |
| senderVM | UTableView | 发送事件实例 |

#### @filter

过滤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 过滤筛选对象 |
| senderVM | UTableView | 发送事件实例 |

### Selection Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择行的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择行相关对象 |
| $event.oldItem | Object | 旧的选择行相关对象 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTableView | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择行的值 |
| senderVM | UTableView | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择行相关对象 |
| $event.oldItem | Object | 旧的选择行相关对象 |
| $event.selectedItem | Object | 最终选择行的对象。在`cancelable`的情况下，与`$event.item`不同 |
| senderVM | UTableView | 发送事件实例 |

#### @check

多选模式中，选中节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | 选中状态 |
| $event.values | Array | 选择后的值 |
| $event.oldValues | Array | 旧的值 |
| $event.item | Object | 选择行相关对象 |
| senderVM | UTableView | 发送事件实例 |

#### @change

选择值改变时触发

单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择行的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择行相关对象 |
| $event.oldItem | Object | 旧的选择行相关对象 |
| senderVM | UTableView | 发送事件实例 |

多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.values | Array | 改变后的值 |
| $event.oldValues | Array | 旧的值 |
| senderVM | UTableView | 发送事件实例 |

#### @resize

调整列宽时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.columnVM | UTableColumnVM | 调整的列实例 |
| $event.index | Number | 列索引 |
| width | Number | 调整后的宽度 |
| oldWidth | Number | 调整前的宽度 |

### Methods

#### load()

带缓存地加载

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reload()

清除缓存，重新加载

| Param | Type | Description |
| ----- | ---- | ----------- |

## UTableViewColumn

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 列标题 |
| field | String | | data 中的字段名 |
| width | String, Number | | 给列指定宽度，可以为数字或百分比 |
| ellipsis | Boolean | `false` | 是否省略显示。默认文字超出时会换行 |
| formatter | String, Object, Function, Formatter | `'placeholder'` | 格式器 |
| - |
| sortable | Boolean | `false` | 该列是否可以排序 |
| default-order | String | `'asc'` | 该列首次点击时的排序顺序 |
| filters | Array\<{ text: string, value: any }\> | `'asc'` | 该列首次点击时的排序顺序 |
| hidden | Boolean | `false` | 是否隐藏 |
| type | String | | 列类型。可选值：`index`表示序号列，`radio`表示单选列，`checkbox`表示多选列，`expander`表示展开列。 |
| start-index | Number | `1` | 当`type="index"`时的起始序号 |

### Slots

#### (default)

在表格列中插入`<u-table-view-filters>`子组件。

#### cell

对单元格数据展示进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | 循环中的当前项 |
| value | Any | item 中 field 字段对应的值 |
| columnVM | String | 该列组件实例 |
| rowIndex | Number | 行的索引 |
| columnIndex | Number | 列的索引 |

#### title

对标题进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| columnVM | String | 该列组件实例 |
| columnIndex | Number | 列的索引 |

#### expand-content

展开列的内容

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | 循环中的当前项 |
| value | Any | item 中 field 字段对应的值 |
| columnVM | String | 该列组件实例 |
| rowIndex | Number | 行的索引 |
