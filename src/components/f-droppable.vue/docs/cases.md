``` vue
<template>
<div>
    <f-droppable @drop="value1++">
        <f-draggable>
            <u-block size="normal" color="primary" inline>{{ value1 }}</u-block>
        </f-draggable>
    </f-droppable>
    <f-droppable @drop="value2++">
        <f-draggable>
            <u-block size="normal" color="error" inline>{{ value2 }}</u-block>
        </f-draggable>
    </f-droppable>
</div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 0,
        };
    },
};
</script>
```
