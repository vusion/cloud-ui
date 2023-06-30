<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTooltip 工具提示

- [示例](#示例)
    - [基本用法](#基本用法)
    - [触发方式](#触发方式)
    - [弹出方位](#弹出方位)
    - [禁用状态](#禁用状态)
    - [设置尺寸](#设置尺寸)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Feedback**

工具提示

## 示例
### 基本用法

将需要弹出的内容用`<u-tooltip>`包裹起来，并插入到触发事件的元素中。

也可以直接使用指令的方式。

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

使用`trigger`属性设置触发方式。

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

### 弹出方位

使用`placement`属性控制弹出方位。

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button>
            上左
            <u-tooltip placement="top-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            上边
            <u-tooltip placement="top">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            上右
            <u-tooltip placement="top-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button>
            左上
            <u-tooltip placement="left-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            左边
            <u-tooltip placement="left">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            左下
            <u-tooltip placement="left-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button>
            右上
            <u-tooltip placement="right-start">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            右边
            <u-tooltip placement="right">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            右下
            <u-tooltip placement="right-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both">
        <u-button>
            下左
            <u-tooltip placement="bottom-start">这是下左的Tooltip这是下左的Tooltip</u-tooltip>
        </u-button>
        <u-button>
            下边
            <u-tooltip placement="bottom">Tooltip</u-tooltip>
        </u-button>
        <u-button>
            下右
            <u-tooltip placement="bottom-end">Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button v-tooltip.top-start="'Tooltip'">上左</u-button>
        <u-button v-tooltip.top="'Tooltip'">上边</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">上右</u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button v-tooltip.left-start="'Tooltip'">左上</u-button>
        <u-button v-tooltip.left="'Tooltip'">左边</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">左下</u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button v-tooltip.right-start="'Tooltip'">右上</u-button>
        <u-button v-tooltip.right="'Tooltip'">右边</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">右下</u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both">
        <u-button v-tooltip.bottom-start="'Tooltip'">下左</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">下边</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">下右</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 跟随鼠标

开启`follow-cursor`属性可以让弹出层跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button>
            上左
            <u-tooltip placement="top-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            上边
            <u-tooltip placement="top" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            上右
            <u-tooltip placement="top-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button>
            左上
            <u-tooltip placement="left-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            左边
            <u-tooltip placement="left" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            左下
            <u-tooltip placement="left-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button>
            右上
            <u-tooltip placement="right-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            右边
            <u-tooltip placement="right" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            右下
            <u-tooltip placement="right-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both">
        <u-button>
            下左
            <u-tooltip placement="bottom-start" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            下边
            <u-tooltip placement="bottom" follow-cursor>Tooltip</u-tooltip>
        </u-button>
        <u-button>
            下右
            <u-tooltip placement="bottom-end" follow-cursor>Tooltip</u-tooltip>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 显隐延时

使用`hover-delay`属性和`hide-delay`属性控制显隐的延时。

``` html
<u-linear-layout>
    <u-button>Hover Delay
        <u-tooltip trigger="hover" :hide-delay="300">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

### 禁用状态

给工具提示添加`disabled`属性可以禁止弹出效果，但需要手动设置外层元素的状态。

``` html
<u-button disabled>
    disabled
    <u-tooltip content="Tooltip" disabled>disabled</u-tooltip>
</u-button>
```

### 设置尺寸

``` vue
<template>
<u-linear-layout>
        <u-button>small
            <u-tooltip size="small">{{ content }}</u-tooltip>
        </u-button>
        <u-button>normal
            <u-tooltip>{{ content }}</u-tooltip>
        </u-button>
        <u-button>large
            <u-tooltip size="large">{{ content }}</u-tooltip>
        </u-button>
        <u-button>auto
            <u-tooltip size="auto">{{ content }}</u-tooltip>
        </u-button>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力地刺去。那猹却将身一扭，反从他的胯下逃走了。',
        };
    },
};
</script>
```

#### 指令形式

``` vue
<template>
<u-linear-layout>
    <u-button v-tooltip.small="content">small</u-button>
    <u-button v-tooltip="content">normal</u-button>
    <u-button v-tooltip.large="content">large</u-button>
    <u-button v-tooltip.auto="content">auto</u-button>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            content: '深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力地刺去。那猹却将身一扭，反从他的胯下逃走了。',
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| opened.sync | boolean |  | `false` | 弹出/关闭状态 |
| trigger | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'hover'` | 工具提示的触发方式 |
| placement | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'bottom'` | 工具提示的弹出方向 |
| hide-delay | number |  | `200` | 提示内容消失延迟时间，单位是 ms |
| offset | string |  | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | boolean, number, object |  | `false` | 是否跟随鼠标 |
| disabled | boolean |  | `false` | 是否禁用 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 大小扩展，支持一个值或两个值的组合，前者表示高度，后者表示宽度 |

### Slots

#### (default)

插入需要弹出的内容。

#### popper

自定义整个弹出层。

#### body

自定义滚动区域。

#### content

自定义内容文本。

### Events

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
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
| $event | object | 自定义事件对象 |
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

