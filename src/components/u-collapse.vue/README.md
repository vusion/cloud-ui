<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCollapse 折叠面板

- [示例](#示例)
    - [基本用法](#基本用法)
    - [手风琴模式](#手风琴模式)
    - [面板嵌套](#面板嵌套)
    - [使用插槽](#使用插槽)
    - [填充模式](#填充模式)
    - [简洁模式](#简洁模式)
    - [触发方式](#触发方式)
    - [设置尺寸](#设置尺寸)
- [UCollapse API](#ucollapse-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UCollapseItem API](#ucollapseitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

**Container**

可以折叠/展开的内容区域。

## 示例
### 基本用法

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3" disabled>Content3</u-collapse-item>
</u-collapse>
```

### 手风琴模式

``` html
<u-collapse accordion>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 面板嵌套

折叠面板可以进行嵌套。

``` html
<u-collapse>
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        <u-collapse>
            <u-collapse-item title="面板1">Content1</u-collapse-item>
            <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
            <u-collapse-item title="面板3">Content3</u-collapse-item>
        </u-collapse>
    </u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 使用插槽

``` html
<u-collapse>
    <u-collapse-item title="面板1">
        <u-link slot="extra">设置</u-link>
        Content1
    </u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        <u-collapse>
            <u-collapse-item title="面板1">Content1</u-collapse-item>
            <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
            <u-collapse-item title="面板3">Content3</u-collapse-item>
        </u-collapse>
    </u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 填充模式

内容填充

``` html
<u-collapse fill="content">
    <u-collapse-item title="面板1" expanded>Content1</u-collapse-item>
    <u-collapse-item title="面板2">Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

无填充

``` html
<u-collapse fill="none">
    <u-collapse-item title="面板1" expanded>Content1</u-collapse-item>
    <u-collapse-item title="面板2">Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 简洁模式

``` html
<u-collapse appear="simple">
    <u-collapse-item title="面板1">
        <u-link slot="extra">设置</u-link>
        Content1
    </u-collapse-item>
    <u-collapse-item title="面板2" expanded>
        Content2
    </u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>
```

### 触发方式

#### 整行点击均可触发（默认）

<u-collapse expand-trigger="click">
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2">Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>

#### 仅点击小箭头时触发

<u-collapse expand-trigger="click-expander">
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2">Content2</u-collapse-item>
    <u-collapse-item title="面板3">Content3</u-collapse-item>
</u-collapse>

### 设置尺寸

``` html
<u-collapse size="small">
    <u-collapse-item title="面板1">Content1</u-collapse-item>
    <u-collapse-item title="面板2" expanded>Content2</u-collapse-item>
    <u-collapse-item title="面板3" disabled>Content3</u-collapse-item>
</u-collapse>
```

## UCollapse API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| accordion | boolean |  | `false` | 是否每次只会展开一个面板 |
| expand-trigger | string | `[object Object]`<br/>`[object Object]` | `'click'` | 展开/折叠的触发方式 |
| appear | string | `[object Object]`<br/>`[object Object]` | `'default'` |  |
| disabled | boolean |  | `false` | 不可点击展开/折叠 |
| fill | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'head'` | 填充位置 |

### Slots

#### (default)

插入`<u-collapse-item>`子组件。

### Events

#### @expand

展开此面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.itemVM | UCollapseItem | 面板组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | Vue | 发送事件实例 |

#### @collapse

折叠某面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.itemVM | UCollapseItem | 面板组件 |
| senderVM | Vue | 发送事件实例 |

## UCollapseItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |
| expanded.sync | boolean |  | `false` | 展开/折叠状态 |
| disabled | boolean |  | `false` | 是否禁用。禁用时无法展开/折叠 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

### Events

#### @expand

展开此面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.itemVM | UCollapseItem | 面板组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | Vue | 发送事件实例 |

#### @collapse

折叠某面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.itemVM | UCollapseItem | 面板组件 |
| senderVM | Vue | 发送事件实例 |

