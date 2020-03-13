<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULabel 标签

**行内展示**

对事物进行标记和分类。

## 示例
### 基本用法

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-label>Label</u-label>
    <u-label color="primary">Primary</u-label>
    <u-label color="success">Success</u-label>
    <u-label color="warning">Warning</u-label>
    <u-label color="error">Error</u-label>
    <u-label style="background: #c461fb; color: white;">Custom</u-label>
</u-linear-layout>
```

### 可删除标签

添加属性`removable`可以删除标签。

点击删除标签时，会触发`remove`事件，需要自己实现删除逻辑。

``` html
<u-linear-layout gap="small">
    <u-label removable>Label</u-label>
    <u-label removable color="primary">Primary</u-label>
    <u-label removable color="success">Success</u-label>
    <u-label removable color="warning">Warning</u-label>
    <u-label removable color="error">Error</u-label>
</u-linear-layout>
```

### 设置尺寸

标签有正常、中、大三种尺寸，通过`size`属性设置。

``` html
<u-linear-layout gap="small">
    <u-label>Normal</u-label>
    <u-label size="large">Large</u-label>
    <u-label size="large" color="primary" removable>Large</u-label>
    <u-label size="huge">Huge</u-label>
    <u-label size="huge" color="primary" removable>Huge</u-label>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="mini" style="width: 120px;">
    <u-label display="block">日常工作</u-label>
    <u-label display="block" color="primary">重要任务</u-label>
    <u-label display="block">质量效率</u-label>
    <u-label display="block">学习分享</u-label>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| color | enum | `'default'`, `'primary'`, `'success'`, `'warning'`, `'error'` | `'default'` | 设置颜色。 |
| size | enum | `'normal'`, `'large'`, `'huge'` | `'normal'` | 设置尺寸。 |
| removable | boolean |  | `false` | 是否可删除。开启时可以通过删除按钮触发`remove`事件，需要自己实现删除逻辑。 |
| display | enum | `'inline'`, `'block'` | `'inline'` | 展示方式。`'inline'`表示行内展示, `'block'`表示块级展示，宽度会充满父元素。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @$listeners

监听所有`<span>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | ULabel | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无参数 |
| senderVM | ULabel | 发送事件实例 |
