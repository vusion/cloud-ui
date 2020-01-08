<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTooltip 工具提示

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-button>
        直接插入
        <u-tooltip>直接插入<u-link>文本</u-link>或<u-link>HTML</u-link></u-tooltip>
    </u-button>
    <u-button v-tooltip="'指令中只能插入文本'">指令</u-button>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-button>
        hover（默认）
        <u-tooltip trigger="hover">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        click
        <u-tooltip trigger="click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        right-click
        <u-tooltip trigger="right-click">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        double-click
        <u-tooltip trigger="double-click">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">hover（默认）</u-button>
    <u-button v-tooltip.click="'Tooltip'">click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">right-click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">double-click</u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发工具提示的弹出/关闭：

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? '隐藏' : '弹出' }}
    <u-tooltip trigger="manual" :opened.sync="opened">Tooltip</u-tooltip>
</u-button>
</template>

<script>
export default {
    data() {
        return {
            opened: false,
        };
    },
};
</script>
```

### 弹出位置

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <u-tooltip placement="top-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            top
            <u-tooltip placement="top">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            top-end
            <u-tooltip placement="top-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <u-tooltip placement="left-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            left
            <u-tooltip placement="left">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            left-end
            <u-tooltip placement="left-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <u-tooltip placement="right-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            right
            <u-tooltip placement="right">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            right-end
            <u-tooltip placement="right-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <u-tooltip placement="bottom-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            bottom
            <u-tooltip placement="bottom">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            bottom-end
            <u-tooltip placement="bottom-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button v-tooltip.top-start="'Tooltip'">top-start</u-button>
        <u-button v-tooltip.top="'Tooltip'">top</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">top-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.left-start="'Tooltip'">left-start</u-button>
        <u-button v-tooltip.left="'Tooltip'">left</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">left-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.right-start="'Tooltip'">right-start</u-button>
        <u-button v-tooltip.right="'Tooltip'">right</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">right-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.bottom-start="'Tooltip'">bottom-start</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">bottom</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">bottom-end</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <u-tooltip placement="top-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            top
            <u-tooltip placement="top" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            top-end
            <u-tooltip placement="top-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <u-tooltip placement="left-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            left
            <u-tooltip placement="left" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            left-end
            <u-tooltip placement="left-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <u-tooltip placement="right-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            right
            <u-tooltip placement="right" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            right-end
            <u-tooltip placement="right-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <u-tooltip placement="bottom-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            bottom
            <u-tooltip placement="bottom" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            bottom-end
            <u-tooltip placement="bottom-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Hover 时延迟消失

``` html
<u-linear-layout>
    <u-button>Hover Delay
        <u-tooltip trigger="hover" :hide-delay="300">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

### 禁用

``` html
<u-button disabled>
    disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| opened.sync | boolean |  | `false` | 弹出/关闭状态 |
| trigger | string |  | `'hover'` | 工具提示的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | string |  | `'bottom'` | 工具提示的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hide-delay | number |  | `0` | 提示内容消失延迟时间，单位是 ms |
| offset | string |  | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | boolean, number, object |  | `false` | 是否跟随鼠标 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入需要弹出的内容。

#### popper

自定义整个弹出层。

#### body

自定义滚动区域。

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

### Methods

#### open()

弹出实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### toggle(opened?)

切换弹出/关闭状态。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| opened? | boolean |  | 可选。弹出/关闭状态 |

#### update()

更新 popper 实例。参考 [Popper.update()](https://popper.js.org/popper-documentation.html#Popper.update)。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### scheduleUpdate()

在下次 UI 渲染时一块更新 popper 实例，比`update()`性能要好。参考 [Popper.scheduleUpdate()](https://popper.js.org/popper-documentation.html#Popper.scheduleUpdate)。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
