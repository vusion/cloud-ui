<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UPopup 弹出框

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自定义](#自定义)
    - [触发方式](#触发方式)
    - [弹出位置](#弹出位置)
    - [禁用](#禁用)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-button>
        内容
        <u-popup>使用 content 属性添加内容</u-popup>
    </u-button>
    <u-button>
        标题
        <u-popup title="标题">使用 title 属性添加标题</u-popup>
    </u-button>
    <u-button>
        使用 slot
        <u-popup>
            <span slot="title">标题 <u-badge :value="3"></u-badge></span>
            <span>使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### 自定义

``` html
<u-linear-layout>
    <u-button>
        Dropdown
        <u-popup>
            <u-menu slot="root" value="3" :router="false">
                <u-menu-item value="1">指南</u-menu-item>
                <u-menu-item value="2">概念</u-menu-item>
                <u-menu-item value="3">组件</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Textarea
        <u-popup>
            <u-textarea slot="root"></u-textarea>
        </u-popup>
    </u-button>
    <u-button>
        TreeView
        <u-popup>
            <u-tree-view slot="root">
                <u-tree-view-node text="节点1">
                    <u-tree-view-node text="节点1.1"></u-tree-view-node>
                    <u-tree-view-node text="节点1.2">
                        <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
                        <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
                    </u-tree-view-node>
                    <u-tree-view-node text="节点1.3"></u-tree-view-node>
                    <u-tree-view-node text="节点1.4"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="节点2"></u-tree-view-node>
                <u-tree-view-node text="节点3">
                    <u-tree-view-node text="节点3.1"></u-tree-view-node>
                    <u-tree-view-node text="节点3.2"></u-tree-view-node>
                </u-tree-view-node>
            </u-tree-view>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-button>
        hover
        <u-popup trigger="hover">Popup</u-popup>
    </u-button>
    <u-button>
        click（默认）
        <u-popup trigger="click">Popup</u-popup>
    </u-button>
    <u-button>
        right-click
        <u-popup trigger="right-click">Popup</u-popup>
    </u-button>
    <u-button>
        double-click
        <u-popup trigger="double-click">Popup</u-popup>
    </u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出框的弹出/关闭：

``` vue
<template>
<u-button @click="opened = !opened">
    {{ opened ? '隐藏' : '弹出' }}
    <u-popup trigger="manual" :opened.sync="opened">Popup</u-popup>
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
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button>
            上左
            <u-popup placement="top-start">Popup</u-popup>
        </u-button>
        <u-button>
            上边
            <u-popup placement="top">Popup</u-popup>
        </u-button>
        <u-button>
            上右
            <u-popup placement="top-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button>
            左上
            <u-popup placement="left-start">Popup</u-popup>
        </u-button>
        <u-button>
            左边
            <u-popup placement="left">Popup</u-popup>
        </u-button>
        <u-button>
            左下
            <u-popup placement="left-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button>
            右上
            <u-popup placement="right-start">Popup</u-popup>
        </u-button>
        <u-button>
            右边
            <u-popup placement="right">Popup</u-popup>
        </u-button>
        <u-button>
            右下
            <u-popup placement="right-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both;">
        <u-button>
            下左
            <u-popup placement="bottom-start">Popup</u-popup>
        </u-button>
        <u-button>
            下边
            <u-popup placement="bottom">Popup</u-popup>
        </u-button>
        <u-button>
            下右
            <u-popup placement="bottom-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button>
            上左
            <u-popup placement="top-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            上边
            <u-popup placement="top" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            上右
            <u-popup placement="top-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button>
            左上
            <u-popup placement="left-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            左边
            <u-popup placement="left" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            左下
            <u-popup placement="left-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button>
            右上
            <u-popup placement="right-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            右边
            <u-popup placement="right" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            右下
            <u-popup placement="right-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both;">
        <u-button>
            下左
            <u-popup placement="bottom-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            下边
            <u-popup placement="bottom" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            下右
            <u-popup placement="bottom-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-button disabled>
    disabled
    <u-popup disabled>Popup</u-popup>
</u-button>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  | `'标题'` | 弹出框标题 |
| opened.sync | boolean |  | `false` | 弹出/关闭状态 |
| trigger | string |  | `'click'` | 弹出框的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | string |  | `'bottom'` | 弹出框的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hideDelay | number |  | `0` | 提示内容消失延迟时间，单位是`'ms'` |
| offset | string |  | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | boolean, number, object |  | `false` | 是否跟随鼠标 |
| disabled | boolean |  | `false` | 是否禁用 |
| merge-borders | boolean |  | `true` | 是否自动合并内外边框 |

### Slots

#### (default)

自定义弹出的内容。

#### root

自定义整个弹出层。

#### head

自定义头部。

#### body

自定义中部。

#### foot

自定义尾部。

#### title

自定义标题文本。

### Events

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止弹出流程 |
| senderVM | UPopup | 发送事件实例 |

#### @open

弹出时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | UPopup | 发送事件实例 |

#### @before-close

隐藏前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止隐藏流程 |
| senderVM | UPopup | 发送事件实例 |

#### @close

隐藏时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event |  | 空 |
| senderVM | UPopup | 发送事件实例 |

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

