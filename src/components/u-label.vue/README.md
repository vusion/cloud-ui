<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULabel 标签

- [示例](#示例)
    - [基本用法](#基本用法)
    - [可删除标签](#可删除标签)
    - [设置尺寸](#设置尺寸)
    - [块级展示](#块级展示)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

用于展示状态、标签、分类等

## 示例
### 基本用法

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-label text="Label"></u-label>
    <u-label color="primary" text="Primary"></u-label>
    <u-label color="success" text="Success"></u-label>
    <u-label color="normal" text="Normal"></u-label>
    <u-label color="warning" text="Warning"></u-label>
    <u-label color="error" text="Error"></u-label>
    <u-label style="background: #c461fb; color: white;" text="Custom"></u-label>
</u-linear-layout>
```

### 可删除标签

添加属性`removable`可以删除标签。

点击删除标签时，会触发`remove`事件，需要自己实现删除逻辑。

``` html
<u-linear-layout gap="small">
    <u-label removable text="Label"></u-label>
    <u-label removable color="primary" text="Primary"></u-label>
    <u-label removable color="success" text="Success"></u-label>
    <u-label removable color="normal" text="Normal"></u-label>
    <u-label removable color="warning" text="Warning"></u-label>
    <u-label removable color="error" text="Error"></u-label>
</u-linear-layout>
```

### 设置尺寸

标签有小、正常、中、大四种尺寸，通过`size`属性设置。

``` html
<u-linear-layout gap="small">
    <u-label size="small" text="Small"></u-label>
    <u-label size="small" color="primary" removable text="Small"></u-label>
    <u-label text="Normal"></u-label>
    <u-label color="primary" removable text="Normal"></u-label>
    <u-label size="large" text="Large"></u-label>
    <u-label size="large" color="primary" removable text="Large"></u-label>
    <u-label size="huge" text="Huge"></u-label>
    <u-label size="huge" color="primary" removable text="Huge"></u-label>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="mini" style="width: 120px;">
    <u-label display="block" text="日常工作"></u-label>
    <u-label display="block" color="primary" text="重要任务"></u-label>
    <u-label display="block" text="质量效率"></u-label>
    <u-label display="block" text="学习分享"></u-label>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| color | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'default'` | 设置文本颜色 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置标签大小 |
| removable | boolean |  | `false` |  |
| display | string | `[object Object]`<br/>`[object Object]` | `'inline'` | 行内展示，或块级换行展示 |

### Events

#### @$listeners

监听所有`<span>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | trigger | 自定义事件对象 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | ULabel | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无参数 |
| senderVM | ULabel | 发送事件实例 |

