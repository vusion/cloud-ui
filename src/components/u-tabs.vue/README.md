<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTabs 标签页

**UI 组件**, **路由链接**, **块级展示**

## 示例
### 基本用法

``` html
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="模板" value="A">模板内容</u-tab>
    <u-tab title="样式" value="B">样式内容</u-tab>
    <u-tab title="逻辑" value="C">逻辑内容</u-tab>
</u-tabs>
```

### 只读和禁用

``` html
<u-tabs readonly>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式" disabled>样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 可关闭

``` html
<u-tabs closable>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
    <u-tab title="文档">文档内容</u-tab>
    <u-tab title="资源">资源内容</u-tab>
</u-tabs>
```

### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
```

### 插槽扩展

- 在`<u-tabs>`上可以使用`extra`插槽，在右侧添加额外的内容；
- 在`<u-tab>`上可以使用`title`插槽，自定义标签页的标题。

<p></p>

``` html
<u-tabs value="1">
    <u-tab value="0">
        <span slot="title">模板 <u-label>1</u-label></span>
        模板内容
    </u-tab>
    <u-tab value="1">
        <span slot="title">样式 <u-label>6</u-label></span>
        样式内容
    </u-tab>
    <u-tab value="2">
        <span slot="title">逻辑 <u-label>3</u-label></span>
        逻辑内容
    </u-tab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-tabs>
```

## UTabs API
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
| $event.itemVM | UTab | 选中标签页实例 |
| $event.oldVM | UTab | 旧的选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTabs | 发送事件实例 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选中标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTab | 选中标签页实例 |
| $event.oldVM | UTab | 旧的选中标签页实例 |
| senderVM | UTabs | 发送事件实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 待关闭标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UTabs | 发送事件实例 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 关闭的标签页的值 |
| $event.oldValue | any | 旧的值 |
| $event.itemVM | UTabs | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |
| senderVM | UTabs | 发送事件实例 |

## UTab API
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
