### 基本用法

``` vue
<template>
<u-footbar :position="position">
    <u-linear-layout>
        <u-button color="primary" @click="position='fixed'">切换底部</u-button>
        <u-button @click="position='static'">取消</u-button>
    </u-linear-layout>
</u-footbar>
</template>
<script>
export default {
    data() {
        return {
            position: 'fixed',
        };
    },
};
</script>
```
