# 弹出层 Popper

弹出层的设计思路请参阅[设计思路——弹出层系列](/ui-design/popper)。

## 示例
### 基本形式

可以用一个 popper slot 来设置弹出元素，并用 default slot 来设置触发元素，这个触发元素通常也作为参照元素。由于 Vue 的限制，每个 slot 中只能有一个根节点。

``` html
<u-old-popper>
    <u-button>click</u-button>
    <div slot="popper">
        <u-block>popper</u-block>
    </div>
</u-old-popper>
```

### 触发方式

``` html
<u-linear-layout>
    <u-old-popper trigger="click">
        <u-button>click（默认）</u-button>
        <div slot="popper">
            <u-block>popper</u-block>
        </div>
    </u-old-popper>
    <u-old-popper trigger="hover">
        <u-button>hover</u-button>
        <div slot="popper">
            <u-block>popper</u-block>
        </div>
    </u-old-popper>
    <u-old-popper trigger="right-click">
        <u-button>right-click</u-button>
        <div slot="popper">
            <u-block>popper</u-block>
        </div>
    </u-old-popper>
    <u-old-popper trigger="double-click">
        <u-button>double-click</u-button>
        <div slot="popper">
            <u-block>popper</u-block>
        </div>
    </u-old-popper>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出层的弹出/隐藏：

``` vue
<template>
<u-old-popper trigger="manual" :open.sync="open">
    <u-button @click="open = !open">{{ open ? '隐藏' : '弹出' }}</u-button>
    <div slot="popper">
        <u-block>popper</u-block>
    </div>
</u-old-popper>
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
        <u-old-popper placement="top-start">
            <u-button>top-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="top">
            <u-button>top</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="top-end">
            <u-button>top-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper placement="left-start">
            <u-button>left-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="left">
            <u-button>left</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="left-end">
            <u-button>left-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper placement="right-start">
            <u-button>right-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="right">
            <u-button>right</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="right-end">
            <u-button>right-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper placement="bottom-start">
            <u-button>bottom-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="bottom">
            <u-button>bottom</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper placement="bottom-end">
            <u-button>bottom-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
</u-linear-layout>
```

### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-old-popper trigger="hover" placement="top-start" follow-cursor>
            <u-button>top-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="top" follow-cursor>
            <u-button>top</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="top-end" follow-cursor>
            <u-button>top-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper trigger="hover" placement="left-start" follow-cursor>
            <u-button>left-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="left" follow-cursor>
            <u-button>left</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="left-end" follow-cursor>
            <u-button>left-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper trigger="hover" placement="right-start" follow-cursor>
            <u-button>right-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="right" follow-cursor>
            <u-button>right</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="right-end" follow-cursor>
            <u-button>right-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper trigger="hover" placement="bottom-start" follow-cursor>
            <u-button>bottom-start</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="bottom" follow-cursor>
            <u-button>bottom</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
        <u-old-popper trigger="hover" placement="bottom-end" follow-cursor>
            <u-button>bottom-end</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
    <u-linear-layout>
        <u-old-popper trigger="hover" placement="bottom-start" :follow-cursor="50">
            <u-button>custom</u-button>
            <div slot="popper">
                <u-block>popper</u-block>
            </div>
        </u-old-popper>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-old-popper disabled>
    <u-button disabled>disabled</u-button>
</u-old-popper>
```

## Popper API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| open.sync | Boolean | `false` | 弹出/隐藏状态 |
| trigger | String | `'click'` | 弹出层的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 弹出层的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| offset | String | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | Boolean, Number, Object | `false` | 是否跟随鼠标 |
| hover-delay | Number | `0` | trigger 为 'hover' 时的延迟时间 |
| hide-delay | Number | `0` | trigger 为 'hover' 时提示隐藏的延迟时间 |
| append-to | String | `'body'` | 指示添加到哪个元素 |
| boundaries-element | Element, String | `'window'` | 弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素 |
| escape-with-reference | Boolean | `true` | 当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内 |
| options | Object | `{ modifiers: {} }` | 补充 popper.js 的选项 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

触发节点，该 slot 只能插入一个节点。Popper 除了会给该节点绑定触发事件，不会对它做任何事情。

#### popper

弹出节点，该 slot 只能插入一个节点，作为弹出层的根节点。

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

### Methods

#### update

更新 popper 实例

| Param | Type | Description |
| ----- | ---- | ----------- |

#### toggle

切换弹出/隐藏状态

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | 弹出/隐藏状态 |
