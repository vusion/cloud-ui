<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FDragger 拖拽器

## 示例
### 基本用法

``` html
<f-dragger>
    <u-block size="normal" style="position: relative;">拖我</u-block>
</f-dragger>
```

### 轴向约束

``` html
<f-dragger axis="horizontal">
    <u-block size="normal" inline style="position: relative;">水平</u-block>
</f-dragger>
<f-dragger axis="vertical">
    <u-block size="normal" inline style="position: relative;">垂直</u-block>
</f-dragger>
```

### 网格约束

``` html
<f-dragger :grid="{ x: 40, y: 30 }">
    <u-block size="normal" color="primary" inline style="position: relative;">网格</u-block>
</f-dragger>
```

### 范围约束

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger :range="{ left: 0, top: 0, right: 200, bottom: 200 }">
            <u-block :class="$style.block" size="normal" color="primary" inline>object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent">
            <u-block :class="$style.block" size="normal" color="primary" inline>offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}
</style>
```

### 范围约束模式

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="inside">
            <u-block :class="$style.block" size="normal" color="primary" inline>object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="center">
            <u-block :class="$style.block" range-mode="center" size="normal" color="primary" inline>offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}

.block[range-mode="center"] {
    margin-left: -32px;
    margin-top: -32px;
}
</style>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| axis | string |  | `'both'` | 拖拽时移动路径的约束轴向。可选值：`both`表示可以在任意方向上移动、`horizontal`表示限制在水平方向上移动、`vertical`表示限制在垂直方向上移动。 |
| grid | object |  | `'{ x: 0, y: 0 }'` | f拖拽时移动路径的约束网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。 |
| range | string, object |  |  | 拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界。当值为`offset-parent`，代理元素限制在offsetParent中移动，仅适用于`position`为`absolute`的情况。 |
| range-mode | string |  | `'inside'` | 拖拽范围模式。可选值：`inside`表示在拖拽范围内侧移动，`center`表示在拖拽范围边缘及内侧移动，`outside`表示在拖拽范围外侧及内侧移动。 |
| value | any |  |  | 需要传递的值 |
| transfer | string, Element |  | `'self'` | 拖拽时的移动元素。可选值：`'clone'`表示拖拽时拖起自身的一个拷贝，`'self'`表示拖拽时拖起自身，也可以直接传入一个元素，或者用slot来设置。 |
| immediate | boolean |  | `false` | 是否在鼠标按下时立即拖拽。默认为`false`，是为了防止鼠标单击等事件频繁触发拖拽操作。 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入需要拖拽的元素，仅一个。

#### transfer

自定义的移动元素。

### Events

#### @dragstart

拖拽开始时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.value | any | 需要传递的值 |
| $event.screenX | number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | number | 拖拽开始时代理元素的left值 |
| $event.startTop | number | 拖拽开始时代理元素的top值 |
| $event.left | number | 拖拽时代理元素的left值 |
| $event.top | number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |
| senderVM | FDragger | 发送事件实例 |

#### @drag

正在拖拽时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.value | any | 需要传递的值 |
| $event.screenX | number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | number | 拖拽开始时代理元素的left值 |
| $event.startTop | number | 拖拽开始时代理元素的top值 |
| $event.left | number | 拖拽时代理元素的left值 |
| $event.top | number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |
| senderVM | FDragger | 发送事件实例 |

#### @dragend

拖拽结束时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.value | any | 需要传递的值 |
| senderVM | FDragger | 发送事件实例 |

### Methods

#### cancel()

取消拖拽。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
