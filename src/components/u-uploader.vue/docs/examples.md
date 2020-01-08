### 基本用法

``` html
<u-uploader url="/api/upload">
    <u-button>upload</u-button>
</u-uploader>
```

> 注意：在IE中实现上传功能时，需要将响应头的`Content-Type`设置为`text/plain`或`text/html`，而不能是`application/json`，否则IE会提示用户下载返回的数据。

### 文件类型限制

``` html
<u-uploader url="/api/upload" extensions="jpg,gif,png">
    <u-button>upload</u-button>
</u-uploader>
```

### 文件大小限制

``` html
<u-uploader url="/api/upload" max-size="10kB">
    <u-button>upload</u-button>
</u-uploader>
```

### 禁用

``` html
<u-uploader url="/api/upload" disabled>
    <u-button disabled>upload</u-button>
</u-uploader>
```
