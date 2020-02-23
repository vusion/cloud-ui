### 基本用法

下面的例子为单文件上传。

``` vue
<template>
<u-uploader v-model="files" url="http://localhost:7000/api/library/upload">
    <u-button>Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [],
        };
    },
}
</script>
```

> 注意：在IE中实现上传功能时，需要将响应头的`Content-Type`设置为`text/plain`或`text/html`，而不能是`application/json`，否则IE会提示用户下载返回的数据。

### 多文件上传

设置`multiple`可以选择多个文件，通过`value`属性可以设置已上传的文件。

``` vue
<template>
<u-uploader v-model="files" multiple url="http://localhost:7000/api/library/upload">
    <u-button>Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            }, {
                uid: '2',
                name: 'xxx2.png',
                status: 'success',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            }],
        };
    },
};
</script>
```

### 文件类型限制

``` html
<u-uploader url="http://localhost:7000/api/library/upload" extensions="jpg,gif,png">
    <u-button>upload</u-button>
</u-uploader>
```

### 文件大小限制

``` html
<u-uploader url="http://localhost:7000/api/library/upload" max-size="10kB">
    <u-button>upload</u-button>
</u-uploader>
```

### 禁用

``` html
<u-uploader url="http://localhost:7000/api/library/upload" disabled>
    <u-button disabled>upload</u-button>
</u-uploader>
```
