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
