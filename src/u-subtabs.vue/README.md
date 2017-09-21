# 子标签页（subtabs）

## 示例
### 基本形式

``` html
<u-subtabs>
    <u-subtab title="未使用">Content1</u-subtab>
    <u-subtab title="使用中">Content2</u-subtab>
    <u-subtab title="已过期">Content3</u-subtab>
</u-subtabs>
```

### 索引

``` html
<u-subtabs :index="2">
    <u-subtab title="未使用">Content1</u-subtab>
    <u-subtab title="使用中">Content2</u-subtab>
    <u-subtab title="已过期">Content3</u-subtab>
</u-subtabs>
```

### 只读和禁用

``` html
<u-subtabs readonly>
    <u-subtab title="未使用">部分禁用</u-subtab>
    <u-subtab title="使用中" disabled>部分禁用</u-subtab>
    <u-subtab title="已过期">部分禁用</u-subtab>
</u-subtabs>
<u-subtabs disabled>
    <u-subtab title="未使用">全部禁用</u-subtab>
    <u-subtab title="使用中">全部禁用</u-subtab>
    <u-subtab title="已过期">全部禁用</u-subtab>
</u-subtabs>
<u-subtabs>
    <u-subtab title="未使用">部分禁用</u-subtab>
    <u-subtab title="使用中" disabled>部分禁用</u-subtab>
    <u-subtab title="已过期">部分禁用</u-subtab>
</u-subtabs>
```

### 隐藏部分项

``` html
<u-subtabs :index="2">
    <u-subtab title="未使用">隐藏部分项</u-subtab>
    <u-subtab title="使用中" hidden>隐藏部分项</u-subtab>
    <u-subtab title="已过期">隐藏部分项</u-subtab>
</u-subtabs>
```

## Subtabs API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| index.sync | Number | `0` | 选中的标签页索引 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| router | Boolean | `false` | 是否根据vue-router对应的路由进行高亮显示 |

### Slots

#### (default)

在插槽中插入`<u-subtab>`子组件

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

## Subtab API
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
