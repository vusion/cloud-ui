<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FDroppable 放置

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

## 示例
### 基本用法

``` vue
<template>
<div>
    <f-draggable value="primary">
        <u-block size="normal" color="primary" inline>拖我</u-block>
    </f-draggable>
    <f-draggable value="success">
        <u-block size="normal" color="success" inline>拖我</u-block>
    </f-draggable>
    <f-draggable value="error">
        <u-block size="normal" color="error" inline>拖我</u-block>
    </f-draggable>
    <p></p>
    <f-droppable @drop="color = $event.value">
        <u-block size="normal" :color="color">放到这里</u-block>
    </f-droppable>
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

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入可以放置的元素，仅一个。

### Events

#### @transfer

自定义的移动元素。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @dragenter

拖拽进入该元素时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
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
| senderVM | FDroppable | 发送事件实例 |

#### @dragleave

拖拽离开该元素时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
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
| senderVM | FDroppable | 发送事件实例 |

#### @dragover

拖拽在该元素上方时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | any | 需要传递的值 |
| $event.ratioX | number | 鼠标指针相对于接收元素所占的长度比 |
| $event.ratioY | number | 鼠标指针相对于接收元素所占的高度比 |
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
| senderVM | FDroppable | 发送事件实例 |

#### @drop

拖拽放置时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.targetEl | Element | 放置目标元素 |
| $event.value | any | 需要传递的值 |
| $event.ratioX | number | 鼠标指针相对于接收元素所占的长度比 |
| $event.ratioY | number | 鼠标指针相对于接收元素所占的高度比 |
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
| senderVM | FDroppable | 发送事件实例 |

Methods

#### cancel()

取消拖拽。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

