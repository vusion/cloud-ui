<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UUploader 文件上传

- [示例](#示例)
    - [基本用法](#基本用法)
    - [基本用法simple](#基本用法simple)
    - [开启图片编辑(只支持单文件上传)](#开启图片编辑只支持单文件上传)
    - [图片编辑器自定义(只支持单文件上传)](#图片编辑器自定义只支持单文件上传)
    - [多文件上传](#多文件上传)
    - [多文件上传simple](#多文件上传simple)
    - [列表类型](#列表类型)
    - [拖拽和粘贴上传](#拖拽和粘贴上传)
    - [禁用状态](#禁用状态)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Form**

通过点击或者拖拽上传文件。

## 示例
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array |  | `'\[\]'` | 当前文件列表 |
| url | string |  |  | 上传的 URL 地址 |
| name | string |  | `'file'` | 上传的文件字段名，后端需要这个字段获取 |
| accept | string |  |  | 若要限制上传文件类型，请输入类型名称，格式为“.后缀名”，多个文件类型时使用英文逗号隔开。例如“.jpeg,.png,.gif” |
| headers | Object |  |  |  |
| with-credentials | boolean |  | `false` | 通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略 |
| multiple | boolean |  | `false` |  |
| multiple-once | boolean |  | `false` | 利用原生 multipart/form-data 传输多个文件的能力，一次性上传多个文件 |
| open-cropper | boolean |  | `false` | 设置是否开启图片裁剪，只对单文件上传有效 |
| fixedCropper | boolean |  | `false` | 设置是否固定裁剪框比例 |
| cropperBoxWidth | number |  | `200` | 设置裁剪框宽度 |
| cropperBoxHeight | number |  | `200` | 设置裁剪框高度 |
| cropperTitle | string |  | `'图片裁剪'` | 设置裁剪框标题 |
| cropperPreviewShape | string | `[object Object]`<br/>`[object Object]` | `'circle'` | 设置裁剪框预览形状 |
| data-type | string |  | `'json'` | 接收数据类型。可选值：`text`、`xml`、`json` |
| data | object |  |  |  |
| limit | number |  |  |  |
| max-size | string |  |  | 可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`KB`、`MB`、`GB` |
| list-type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'text'` | 列表展示类型 |
| url-field | string |  | `'url'` | 请求返回的 URL 字段名 |
| auto-upload | boolean |  | `true` |  |
| draggable | boolean |  | `false` |  |
| pastable | boolean |  | `false` |  |
| show-file-list | boolean |  | `true` |  |
| converter | string | `[object Object]`<br/>`[object Object]` | `'json'` |  |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| display | string | `[object Object]`<br/>`[object Object]` | `'block'` | 行内展示，或块级换行展示 |
| description | string |  |  | 在上传组件下方展示一些提示信息，如上传的数量、大小等 |
| showErrorMessage | boolean |  | `true` | 是否展示上传时的出错信息，如超出数量、大小 |
| dragDescription | string |  | `'点击/拖动/粘贴文件到这里'` | 拖拽描述信息 |
| check-file | Function |  |  | 文件校验函数，可自定义校验规则，入文件名称包含特殊字符等，返回string类型的出错信息 |
| access | string | `[object Object]`<br/>`[object Object]` |  | undefined |
| ttl | boolean |  |  | 是否开启文件有效期控制 |
| ttlValue | number |  |  | 文件有效期天数 |

### Slots

#### (default)

插入文本 或 HTML。

### Events

#### @before-upload

上传前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.file | File | 待上传的文件 |
| $event.preventDefault | Function | 阻止上传流程 |
| senderVM | UUploader | 发送事件对象 |

#### @progress

发送进度改变时触发，在上传进度条时使用

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.data | object | 进度相关信息 |
| senderVM | UUploader | 发送事件对象 |

#### @count-exceed

文件数量超额时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.xml | string | 服务器回传信息 |
| senderVM | UUploader | 发送事件对象 |

#### @size-exceed

文件大小超额时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.xml | string | 服务器回传信息 |
| senderVM | UUploader | 发送事件对象 |

#### @success

上传成功时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.data | object | 服务器回传信息对象 |
| $event.file | object | 上传文件信息，不包含文件主体内容 |
| senderVM | UUploader | 发送事件对象 |

#### @error

上传报错时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.name | string | 错误名 |
| $event.message | string | 错误描述 |
| $event.extensions | string | 限制类型 |
| $event.maxSize | number | 限制大小 |
| $event.size | number | 当前大小 |
| senderVM | UUploader | 发送事件对象 |

#### @remove

点击删除按钮时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | object | 当前展示项的数据信息 |
| $event.item | object | 删除项的数据信息 |
| $event.index | number | 删除项在数据列表中的索引 |

Methods

#### select()

选择文件上传

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

