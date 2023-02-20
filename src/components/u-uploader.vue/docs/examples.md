### 基本用法

下面的例子为单文件上传。

``` vue
<template>
<u-uploader v-model="files" url="/gateway/lowcode/api/v1/app/upload">
    <u-button color="primary">Upload</u-button>
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

### 基本用法simple

下面的例子为单文件上传。

``` vue
<template>
<u-uploader v-model="files" converter="simple" list-type="card" url="/gateway/lowcode/api/v1/app/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: "",
        };
    },
}
</script>
```
### 开启图片编辑(只支持单文件上传)

下面的例子为单文件上传。

```vue
<template>
    <div>
    <u-uploader v-model="files" converter="simple" list-type="card" url="/gateway/lowcode/api/v1/app/upload" :openCropper="true">
        <u-button color="primary">Upload</u-button>
    </u-uploader>
    <u-uploader converter="simple" url="/gateway/lowcode/api/v1/app/upload" :openCropper="true" :showErrorMessage="false" :showFileList="false">
        <u-button color="primary">Upload</u-button>
    </u-uploader>
    </div>
</template>
<script>
export default {
    data() {
        return {
            files: "",
        };
    },
}
</script>
```
### 图片编辑器自定义(只支持单文件上传)
```vue
<template>
    <div>
    <u-uploader v-model="files" 
                converter="simple" 
                list-type="card" 
                url="/gateway/lowcode/api/v1/app/upload" 
                :openCropper="true"
                :fixedCropper="true"
                :cropperBoxWidth="150"
                :cropperBoxHeight="250"
                cropperTitle="头像裁剪"
                cropperPreviewShape="square"
    >
        <u-button color="primary">Upload</u-button>
    </u-uploader>
    </div>
</template>
<script>
export default {
    data() {
        return {
            files: "",
        };
    },
}
</script>
```

### 多文件上传

设置`multiple`可以选择多个文件，通过`value`属性可以设置已上传的文件。

``` vue
<template>
<u-uploader v-model="files" multiple url="/gateway/lowcode/api/v1/app/upload">
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

### 多文件上传simple

设置`multiple`可以选择多个文件，通过`value`属性可以设置已上传的文件。

``` vue
<template>
<u-uploader v-model="files" converter="simple" multiple list-type="card" url="/gateway/lowcode/api/v1/app/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: 'https://static-vusion.163yun.com/assets/breakfast.png,https://static-vusion.163yun.com/assets/salad.png',
        };
    },
};
</script>
```

### 列表类型

通过`list-type`设置列表类型。

#### 图片列表

``` vue
<template>
<u-uploader v-model="files" multiple list-type="image"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
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

#### 图片列表simple

``` vue
<template>
<u-uploader v-model="files" converter="simple" multiple list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: 'https://static-vusion.163yun.com/assets/breakfast.png,https://static-vusion.163yun.com/assets/salad.png',
        };
    },
};
</script>
```

#### 卡片列表

``` vue
<template>
<u-uploader v-model="files" multiple list-type="card"
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

#### 单文件卡片

不使用`multiple`属性时，仅会显示一个卡片。可以用于头像上传、身份证上传等场景。

``` vue
<template>
<u-uploader v-model="files" list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [],
        };
    },
};
</script>
```

### 拖拽和粘贴上传

开启`draggable`和`pastable`属性，可以使用拖拽上传。使用插槽可以自定义文字内容。

``` vue
<template>
<u-uploader v-model="files" url="/gateway/lowcode/api/v1/app/upload" draggable pastable></u-uploader>
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

### 禁用状态

``` html
<u-uploader url="/gateway/lowcode/api/v1/app/upload" disabled>
    <u-button color="primary" disabled>Upload</u-button>
</u-uploader>
```


#### 只读

只读可以用于预览图片。

``` vue
<template>
<u-uploader v-model="files" readonly multiple list-type="card"
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

#### 检查文件格式等

``` vue
<template>
<u-uploader v-model="files" multiple list-type="card"
    url="http://localhost:7000/api/library/upload"
    :check-file="checkFile">
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
    methods: {
        checkFile(file) {
            const fileName = file.name;
            if(fileName.includes('&')) {
                return `${fileName} 文件名不能包含&字符`;
            } else if (fileName.length > 20) {
                return `${fileName} 文件名长度不能大于20`;
            } else {
                return '';
            }
        }
    }
};
</script>
```
