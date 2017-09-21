# 标签页（Tabs）

## 示例
### 基本形式

``` html
<u-tabs>
    <u-tab title="详细信息">ContentA</u-tab>
    <u-tab title="性能监控">ContentB</u-tab>
    <u-tab title="操作日志">ContentC</u-tab>
</u-tabs>
```

### 索引

``` html
<u-tabs :index="2">
    <u-tab title="详细信息">ContentA</u-tab>
    <u-tab title="性能监控">ContentB</u-tab>
    <u-tab title="操作日志">ContentC</u-tab>
</u-tabs>
```

### 只读和禁用

``` html
<u-tabs readonly>
    <u-tab title="详细信息">Readonly</u-tab>
    <u-tab title="性能监控">Readonly</u-tab>
    <u-tab title="操作日志">Readonly</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="详细信息">Disabled All</u-tab>
    <u-tab title="性能监控">Disabled All</u-tab>
    <u-tab title="操作日志">Disabled All</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="详细信息">Disabled Partially</u-tab>
    <u-tab title="性能监控" disabled>Disabled Partially</u-tab>
    <u-tab title="操作日志">Disabled Partially</u-tab>
</u-tabs>
```

### 隐藏部分项

``` html
<u-tabs :index="2">
    <u-tab title="详细信息">ContentA</u-tab>
    <u-tab title="性能监控" hidden>ContentB</u-tab>
    <u-tab title="操作日志">ContentC</u-tab>
</u-tabs>
```

## Tabs API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| index.sync | Number | `0` | 选中的标签页索引 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| router | Boolean | `false` | 是否根据vue-router对应的路由进行高亮显示 |

### Slots

#### (default)

在插槽中插入`<u-tab>`子组件

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| index | Number | 选中的标签页索引 |
| oldIndex | Number | 旧的标签页索引 |
| tabVM | Tab | tab组件实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| index | Number | 选中的标签页索引 |
| oldIndex | Number | 旧的标签页索引 |
| tabVM | Tab | tab组件实例 |

#### @change

标签页索引改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| index | Number | 当前标签页索引 |
| oldIndex | Number | 旧的标签页索引 |

## Tab API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标签页标题 |
| hidden | Boolean | `false` | 是否隐藏此标签页 |
| disabled | Boolean | `false` | 是否禁用此标签页 |
| to | String \| Object | | vue-router的目标链接 |
| replace | Boolean | `false` | 当切换路由时，调用`router.replace()`，而不是`router.push()` |
| exact | Boolean | `false` | 是否精确匹配 |

### Slots

#### (default)

在插槽中插入文本或HTML
