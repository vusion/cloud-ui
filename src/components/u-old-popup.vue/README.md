# 弹出框 Popup

弹出层的设计思路请参阅[设计思路——弹出层系列](/ui-design/popper)。

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-old-popup content="使用 content 属性添加内容">
        <u-button>内容</u-button>
    </u-old-popup>
    <u-old-popup title="标题" content="使用 title 属性添加标题">
        <u-button>标题</u-button>
    </u-old-popup>
    <u-old-popup>
        <u-button>使用 slot</u-button>
        <span slot="title">标题 <u-badge :value="3"></u-badge></span>
        <span slot="content">使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
    </u-old-popup>
</u-linear-layout>
```

### 自定义

``` html
<u-linear-layout>
    <u-old-popup>
        <u-button>Dropdown</u-button>
        <u-menu slot="popper" value="3" :router="false">
            <u-menu-item value="1">指南</u-menu-item>
            <u-menu-item value="2">概念</u-menu-item>
            <u-menu-item value="3">组件</u-menu-item>
        </u-menu>
    </u-old-popup>
    <u-old-popup>
        <u-button>Textarea</u-button>
        <u-textarea slot="popper"></u-textarea>
    </u-old-popup>
    <u-old-popup>
        <u-button>TreeView</u-button>
        <u-tree-view slot="popper">
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
    </u-old-popup>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-old-popup content="Popup" trigger="hover">
        <u-button>hover</u-button>
    </u-old-popup>
    <u-old-popup content="Popup" trigger="click">
        <u-button>click（默认）</u-button>
    </u-old-popup>
    <u-old-popup content="Popup" trigger="right-click">
        <u-button>right-click</u-button>
    </u-old-popup>
    <u-old-popup content="Popup" trigger="double-click">
        <u-button>double-click</u-button>
    </u-old-popup>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出框的弹出/隐藏：

``` vue
<template>
<u-old-popup content="Popup" trigger="manual" :open.sync="open">
    <u-button @click="open = !open">{{ open ? '隐藏' : '弹出' }}</u-button>
</u-old-popup>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        };
    },
};
</script>
```

### 弹出位置

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-old-popup content="Popup" placement="top-start">
            <u-button>top-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="top">
            <u-button>top</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="top-end">
            <u-button>top-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="left-start">
            <u-button>left-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="left">
            <u-button>left</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="left-end">
            <u-button>left-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="right-start">
            <u-button>right-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="right">
            <u-button>right</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="right-end">
            <u-button>right-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="bottom-start">
            <u-button>bottom-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="bottom">
            <u-button>bottom</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="bottom-end">
            <u-button>bottom-end</u-button>
        </u-old-popup>
    </u-linear-layout>
</u-linear-layout>
```

<!-- `-`-` html

#### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-old-popup content="Popup" placement="top-start" follow-cursor>
            <u-button>top-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="top" follow-cursor>
            <u-button>top</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="top-end" follow-cursor>
            <u-button>top-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="left-start" follow-cursor>
            <u-button>left-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="left" follow-cursor>
            <u-button>left</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="left-end" follow-cursor>
            <u-button>left-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="right-start" follow-cursor>
            <u-button>right-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="right" follow-cursor>
            <u-button>right</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="right-end" follow-cursor>
            <u-button>right-end</u-button>
        </u-old-popup>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popup content="Popup" placement="bottom-start" follow-cursor>
            <u-button>bottom-start</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="bottom" follow-cursor>
            <u-button>bottom</u-button>
        </u-old-popup>
        <u-old-popup content="Popup" placement="bottom-end" follow-cursor>
            <u-button>bottom-end</u-button>
        </u-old-popup>
    </u-linear-layout>
</u-linear-layout>
`-`-` -->

### 禁用

``` html
<u-old-popup content="Popup" disabled>
    <u-button disabled>disabled</u-button>
</u-old-popup>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| content | String | `'提示内容'` | 提示内容 |
| open.sync | Boolean | `false` | 弹出/隐藏状态 |
| trigger | String | `'click'` | 弹出框的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 弹出框的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hideDelay | Number | `0` | 提示内容消失延迟时间，单位是`'ms'` |
| offset | String | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | Boolean, Number, Object | `false` | 是否跟随鼠标 |
| disabled | Boolean | `false` | 是否禁用 |
| merge-borders | Boolean | `true` | 是否自动合并内外边框 |

### Slots

#### (default)

触发节点，该 slot 只能插入一个节点。Tooltip 除了会给该节点绑定触发事件，不会对它做任何事情。

#### popper

自定义整个弹出层。

#### head

自定义头部。

#### body

自定义中部。

#### foot

自定义尾部。

#### title

自定义标题文本。

#### content

自定义内容文本。

### Events

#### @before-toggle

弹出/隐藏前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | 弹出/隐藏状态 |
| $event.preventDefault | Function | 阻止弹出/隐藏流程 |

#### @toggle

弹出/隐藏时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出/隐藏状态 |
