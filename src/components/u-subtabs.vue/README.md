<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USubtabs 子标签页

## 示例
### 基本用法

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

## USubtabs API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 选中标签页的值 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| closable | boolean |  | `false` | 是否可以关闭 |
| router | boolean |  | `false` | 是否根据 vue-router 来控制选择哪个标签页 |

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
| $event.value | any | 选中标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | USubtab | 选中标签页实例 |
| $event.oldVM | USubtab | 旧的选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | USubtabs | 发送事件实例 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选中标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | USubtab | 选中标签页实例 |
| $event.oldVM | USubtab | 旧的选中标签页实例 |
| senderVM | USubtabs | 发送事件实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 待关闭标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | USubtab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | USubtabs | 发送事件实例 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 关闭的标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | USubtabs | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |
| senderVM | USubtabs | 发送事件实例 |

## USubtab API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 标签页标题 |
| value | any |  |  | 标签页的值 |
| disabled | boolean |  | `false` | 是否禁用此标签页 |
| href | string |  |  | 链接地址 |
| target | string |  |  | 打开方式 |
| to | string, Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
