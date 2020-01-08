### 相同的文件

``` vue
<template>
<u-uploader url="/api/upload" @before-send.prevent="onBeforeSend">
    <u-button>upload</u-button>
</u-uploader>
</template>

<script>
export default {
    methods: {
        onBeforeSend($event) {
            console.info($event);
        },
    },
};
</script>
```
