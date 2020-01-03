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
