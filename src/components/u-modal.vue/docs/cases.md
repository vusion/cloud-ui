### 基本用法

``` vue
<template>
<div>
    <u-modal ref="modal" title="标题">
        这是一段文字内容。
    </u-modal>
    <u-linear-layout>
        <u-button @click="$refs.modal.open()">Modal</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>
```

### 基本用法

``` html
<u-modal ref="modal1" visible icon="success">
    <template #title>
        <div>自定义</div>
    </template>
    <template #body>
        <div>内容</div>
    </template>
    <template #foot>
        <u-linear-layout>
            <u-button color="primary">确定</u-button>
            <u-button>取消</u-button>
        </u-linear-layout>
    </template>
</u-modal>
```
