<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UUploader 文件上传

- [示例](#示例)
    - [基本用法](#基本用法)
    - [多文件上传](#多文件上传)
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array |  | `'\[\]'` | 当前文件列表 |
| url | string |  |  | 上传的地址 |
| name | string |  | `'file'` | 上传的文件字段名，后端需要这个字段获取 |
| accept | string |  |  | 接受的上传类型 |
| headers | Object |  |  | 请求 headers |
| with-credentials | boolean |  | `false` | 通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略 |
| multiple | boolean |  | `false` | 多文件上传 |
| data-type | string |  | `'json'` | 接收数据类型。可选值：`text`、`xml`、`json` |
| data | object |  |  | 附加数据 |
| limit | number |  | `999` | 列表数量上限 |
| max-size | string |  | `'50MB'` | 可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`kB`、`MB`、`GB` |
| list-type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'text'` | 列表展示类型 |
| url-field | string |  | `'url'` | 请求返回的 URL 字段名 |
| auto-upload | boolean |  | `true` | 是否自动上传 |
| draggable | boolean |  | `false` | 是否可以拖拽上传 |
| pastable | boolean |  | `false` | 是否可以粘贴 |
| show-file-list | boolean |  | `true` | 是否显示文件列表 |
| converter | string | `[object Object]` | `'json'` | 转换器 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| display | string | `[object Object]`<br/>`[object Object]` | `'block'` | 展示方式 |

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

Methods

#### select()

选择文件上传

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

