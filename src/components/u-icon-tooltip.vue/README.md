<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UIconTooltip 图标提示

- [示例](#示例)
    - [基本用法](#基本用法)
    - [切换类型](#切换类型)
    - [弹出位置](#弹出位置)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**弹出层**, **行内展示**

图标与`<u-tooltip>`的组合。

## 示例
图标与`<u-tooltip>`的组合。

### 基本用法

``` html
文字旁的提示 <u-icon-tooltip>这是提示内容</u-icon-tooltip>
```

### 切换类型

``` html
信息 <u-icon-tooltip>这是提示内容</u-icon-tooltip><br>
帮助 <u-icon-tooltip type="help">这是提示内容</u-icon-tooltip><br>
详情 <u-icon-tooltip type="detail">这是提示内容</u-icon-tooltip>
```

### 弹出位置

``` html
<u-linear-layout>
    <span>
        top
        <u-icon-tooltip placement="top">Tooltip</u-icon-tooltip>
    </span>
    <span>
        left
        <u-icon-tooltip placement="left">Tooltip</u-icon-tooltip>
    </span>
    <span>
        right
        <u-icon-tooltip placement="right">Tooltip</u-icon-tooltip>
    </span>
    <span>
        bottom
        <u-icon-tooltip placement="bottom">Tooltip</u-icon-tooltip>
    </span>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string |  | `'info'` | 图标类型。可选值：`'info'`, `'help'`, `'detail'` |
| size | string |  | `'normal'` | 提示大小。可选值：`'mini'`, `'normal'`, `'large'` |
| opened.sync | boolean |  | `false` | 弹出/关闭状态 |
| trigger | string |  | `'hover'` | 工具提示的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | string |  | `'bottom'` | 工具提示的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hide-delay | number |  | `200` | 提示内容消失延迟时间，单位是 ms |
| offset | string |  | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | boolean, number, object |  | `false` | 是否跟随鼠标 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入需要弹出的内容。

### Events

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止弹出流程 |
| senderVM | UTooltip | 发送事件实例 |

#### @open

弹出时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | UTooltip | 发送事件实例 |

#### @before-close

隐藏前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止隐藏流程 |
| senderVM | UTooltip | 发送事件实例 |

#### @close

隐藏时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | UTooltip | 发送事件实例 |

#### @before-toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @toggle

@deprecated

| Param | Type | Description |
| ----- | ---- | ----------- |

Methods

#### open()

弹出实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

