<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCollapse 折叠面板

- [示例](#示例)
    - [基本用法](#基本用法)
    - [手风琴模式](#手风琴模式)
    - [触发方式](#触发方式)
- [UCollapse API](#ucollapse-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [UCollapseItem API](#ucollapseitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
    - [Events](#events-2)

**块级展示**

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

## UCollapse API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| accordion | boolean |  | `false` | 是否每次只会展开一个面板 |
| expand-trigger | string |  | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-collapse-item>`子组件。

### Events

#### @toggle

展开/折叠某面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.itemVM | UCollapseItem | 面板组件 |

Methods

#### toggleAll(expanded)

展开/折叠所有面板

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean |  | 展开/折叠 |

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

#### @before-toggle

展开/折叠此面板前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.itemVM | UCollapseItem | 面板组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

展开/折叠某面板时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.itemVM | UCollapseItem | 面板组件 |
| senderVM | Vue | 发送事件实例 |

