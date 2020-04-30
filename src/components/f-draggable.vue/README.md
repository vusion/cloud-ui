<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FDraggable 拖拽

- [示例](#示例)
    - [基本用法](#基本用法)
    - [移动自身](#移动自身)
    - [自定义移动元素](#自定义移动元素)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

## 示例
### 基本用法

``` html
<f-draggable>
    <u-block size="normal">拖我</u-block>
</f-draggable>
```

### 移动自身

如果元素CSS的`position`属性为`static`，则在拖拽时会自动设置为`relative`；`position`属性为`absolute`，则会直接修改`left`和`top`数值。

``` html
<f-draggable transfer="self">
    <u-block size="normal" color="primary" style="position: relative;">static</u-block>
</f-draggable>
<div style="width: 200px; height: 200px; border: 1px solid #ccc; position: relative; overflow: auto; margin: 10px 0;">
<f-draggable transfer="self">
    <u-block size="normal" color="primary" style="position: absolute; top: 50px; left: 50px;">absolute</u-block>
</f-draggable>
</div>
```

### 自定义移动元素

``` html
<f-draggable>
    <u-block size="normal" color="primary">transfer</u-block>
    <u-block slot="transfer" size="normal" color="error">transfer</u-block>
</f-draggable>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | any |  |  | 需要传递的值 |
| transfer | string, Element | `'clone'`, `'self'` | `'clone'` | 拖拽时的移动元素。可选值：`'clone'`表示拖拽时拖起自身的一个拷贝，`'self'`表示拖拽时拖起自身，也可以直接传入一个元素，或者用slot来设置。 |
| immediate | boolean |  | `false` | 是否在鼠标按下时立即拖拽。默认为`false`，是为了防止鼠标单击等事件频繁触发拖拽操作。 |
| disabled | boolean |  | `false` | 是否禁用 |
| constraint | function |  | `'...'` | 拖拽时移动路径的约束函数。需要传入一个对象，至少要包含：`startLeft`、`startTop`、`dragX`、`dragY`几个字段 |

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
| senderVM | FDraggable | 发送事件实例 |

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
| senderVM | FDraggable | 发送事件实例 |

#### @dragend

拖拽结束时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.originVM | VueComponent | 拖拽源，为当前的`<f-draggable>` |
| $event.sourceEl | Element | 拖拽起始元素 |
| $event.transferEl | Element | 拖拽移动元素 |
| $event.value | any | 需要传递的值 |
| senderVM | FDraggable | 发送事件实例 |

Methods

#### cancel()

取消拖拽。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

