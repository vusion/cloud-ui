# 标签页 Subtabs

## 示例
### 基本形式

``` html
<u-subtabs>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
```

### Value

``` html
<u-subtabs value="B">
    <u-subtab title="模板" value="A">模板内容</u-subtab>
    <u-subtab title="样式" value="B">样式内容</u-subtab>
    <u-subtab title="逻辑" value="C">逻辑内容</u-subtab>
</u-subtabs>
```

### 只读和禁用

``` html
<u-subtabs readonly>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
<u-subtabs disabled>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
<u-subtabs>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式" disabled>样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
</u-subtabs>
```

### 隐藏部分项

``` html
<u-subtabs value="2">
    <u-subtab title="模板" value="0">模板内容</u-subtab>
    <u-subtab title="样式" value="1" hidden>样式内容</u-subtab>
    <u-subtab title="逻辑" value="2">逻辑内容</u-subtab>
</u-subtabs>
```

### 可关闭

``` html
<u-subtabs closable>
    <u-subtab title="模板">模板内容</u-subtab>
    <u-subtab title="样式">样式内容</u-subtab>
    <u-subtab title="逻辑">逻辑内容</u-subtab>
    <u-subtab title="文档">文档内容</u-subtab>
    <u-subtab title="资源">资源内容</u-subtab>
</u-subtabs>
```


### 路由

``` html
<u-subtabs router>
    <u-subtab title="Button" to="u-button"></u-subtab>
    <u-subtab title="Checkbox" to="u-checkbox"></u-subtab>
    <u-subtab title="Tabs" to="u-subtabs"></u-subtab>
</u-subtabs>
```

### 额外的

``` html
<u-subtabs value="1">
    <u-subtab title="模板" value="0">模板内容</u-subtab>
    <u-subtab title="样式" value="1">样式内容</u-subtab>
    <u-subtab title="逻辑" value="2">逻辑内容</u-subtab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-subtabs>
```

## Tabs API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 选中标签页的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| closable | Boolean | `false` | 是否可以关闭 |
| router | Boolean | `false` | 是否根据vue-router来控制选择哪个标签页 |

### Slots

#### (default)

插入`<u-subtab>`子组件。

#### extra

在标签右侧可以附加组件。

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 待关闭标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 关闭的标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |

## Tab API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标签页标题 |
| value | Any | | 标签页的值 |
| hidden | Boolean | `false` | 是否隐藏此标签页 |
| disabled | Boolean | `false` | 是否禁用此标签页 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String,  Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或HTML。

#### title

自定义标题文本。
