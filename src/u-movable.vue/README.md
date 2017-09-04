# 拖移（Movable）

## 示例
### 基本形式


``` html
<div style="position: relative;height:150px;">
    <u-movable axis="horizontal">
        <div style="width:128px;height:128px;line-height:128px;background:#3c8dbc;">水平</div>
    </u-movable>
</div>
```

``` html
<div style="position: relative;height:150px;">
    <u-movable axis="vertical">
        <div style="width:128px;height:128px;line-height:128px;background:#3c8dbc;">垂直</div>
    </u-movable>
</div>
```



## 案例
### 网格形式
```vue
<template>
<div style="position: relative;height:150px;">
    <u-movable :grid="grid">
        <div style="width:128px;height:128px;line-height:128px;background:#3c8dbc;">拖</div>
    </u-movable>
</div>
</template>
<script>
export default {
   data() {
    return {
        grid: { x: 40, y: 30, },
    }
   }
};
</script>
```

### 方法调用

```vue
<template>
<div style="position: relative;height:150px;">
    <u-movable @dragstart="dragStart" @drag="drag" @dragend="dragend">
        <div style="width:128px;height:128px;line-height:128px;background:#3c8dbc;">拖</div>
    </u-movable>
</div>
</template>
<script>
export default {
    methods: {
        dragStart(e) {
            console.log('dragstart');
        },
        drag(e) {
            console.log('drag');
        },
        dragend(e) {
            console.log('dragend');
        },
    }
};
</script>
```
## API
### Attrs/Props
