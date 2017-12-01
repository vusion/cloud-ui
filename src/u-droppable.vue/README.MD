# 放置 Draggable

## 示例
### 基本形式

``` vue
<template>
<div>
    <u-draggable value="primary">
        <u-block size="normal" color="primary" inline>拖我</u-block>
    </u-draggable>
    <u-draggable value="success">
        <u-block size="normal" color="success" inline>拖我</u-block>
    </u-draggable>
    <u-draggable value="error">
        <u-block size="normal" color="error" inline>拖我</u-block>
    </u-draggable>
    <p></p>
    <u-droppable @drop="color = $event.value">
        <u-block size="normal" :color="color">放到这里</u-block>
    </u-droppable>
</div>
</template>

<script>
export default {
    data() {
        return {
            color: '',
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入可以放置的元素，仅一个。

#### transfer

自定义的移动元素。

#### @dragenter

拖拽进入该元素时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<u-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | Any | 需要传递的值 |
| $event.screenX | Number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | Number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | Number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | Number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | Number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | Number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | Number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | Number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | Number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | Number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | Number | 拖拽开始时代理元素的left值 |
| $event.startTop | Number | 拖拽开始时代理元素的top值 |
| $event.left | Number | 拖拽时代理元素的left值 |
| $event.top | Number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |

#### @dragleave

拖拽离开该元素时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<u-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | Any | 需要传递的值 |
| $event.screenX | Number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | Number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | Number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | Number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | Number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | Number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | Number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | Number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | Number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | Number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | Number | 拖拽开始时代理元素的left值 |
| $event.startTop | Number | 拖拽开始时代理元素的top值 |
| $event.left | Number | 拖拽时代理元素的left值 |
| $event.top | Number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |

#### @dragover

拖拽在该元素上方时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<u-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | Any | 需要传递的值 |
| $event.ratioX | Number | 鼠标指针相对于接收元素所占的长度比 |
| $event.ratioY | Number | 鼠标指针相对于接收元素所占的高度比 |
| $event.screenX | Number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | Number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | Number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | Number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | Number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | Number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | Number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | Number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | Number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | Number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | Number | 拖拽开始时代理元素的left值 |
| $event.startTop | Number | 拖拽开始时代理元素的top值 |
| $event.left | Number | 拖拽时代理元素的left值 |
| $event.top | Number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |

#### @drop

拖拽放置时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<u-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | Any | 需要传递的值 |
| $event.ratioX | Number | 鼠标指针相对于接收元素所占的长度比 |
| $event.ratioY | Number | 鼠标指针相对于接收元素所占的高度比 |
| $event.screenX | Number | 鼠标指针相对于屏幕的水平坐标 |
| $event.screenY | Number | 鼠标指针相对于屏幕的垂直坐标 |
| $event.clientX | Number | 鼠标指针相对于浏览器的水平坐标 |
| $event.clientY | Number | 鼠标指针相对于浏览器的垂直坐标 |
| $event.pageX | Number | 鼠标指针相对于页面的水平坐标 |
| $event.pageY | Number | 鼠标指针相对于页面的垂直坐标 |
| $event.startX | Number | 拖拽开始时鼠标指针的水平坐标 |
| $event.startY | Number | 拖拽开始时鼠标指针的垂直坐标 |
| $event.dragX | Number | 拖拽时鼠标指针相对于起始坐标的水平位移 |
| $event.dragY | Number | 拖拽时鼠标指针相对于起始坐标的垂直位移 |
| $event.startLeft | Number | 拖拽开始时代理元素的left值 |
| $event.startTop | Number | 拖拽开始时代理元素的top值 |
| $event.left | Number | 拖拽时代理元素的left值 |
| $event.top | Number | 拖拽时代理元素的top值 |
| $event.preventDefault | Function | 阻止拖拽流程 |

### Methods

#### cancel()

取消拖拽。
