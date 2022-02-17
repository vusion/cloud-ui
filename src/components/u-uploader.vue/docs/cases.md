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

### 单文件只读

``` vue
<template>
<u-uploader v-model="files" readonly list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'breakfast.png',
                status: 'success',
                url: 'https://static-vusion.163yun.com/assets/breakfast.png',
            }],
        };
    },
};
</script>
```

### 一次性上传多文件

设置`multiple-once`可以一次性上传多个文件。

``` vue
<template>
<u-uploader v-model="files" multiple multiple-once url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'breakfast.png',
                status: 'success',
                url: 'https://static-vusion.163yun.com/assets/breakfast.png',
            }, {
                uid: '2',
                name: 'salad.png',
                status: 'success',
                url: 'https://static-vusion.163yun.com/assets/salad.png',
            }],
        };
    },
};
</script>
```