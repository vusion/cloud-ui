### 单个按钮

下面的例子为单文件上传。

``` html
<u-uploader display="inline"
    url="/gateway/lowcode/api/v1/app/upload" url-field="result"
    converter="json">
    <u-button color="primary">Upload</u-button>
</u-uploader>
```

### 多文件上传

设置`multiple`可以选择多个文件，通过`value`属性可以设置已上传的文件。

``` html
<u-uploader multiple
    url="/gateway/lowcode/api/v1/app/upload" url-field="result"
    converter="json">
    <u-button color="primary">Upload</u-button>
</u-uploader>
```

### 图片列表

``` html
<u-uploader multiple list-type="image"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="/gateway/lowcode/api/v1/app/upload" url-field="result"
    converter="json">
    <u-button color="primary">Upload</u-button>
</u-uploader>
```

### 卡片列表

``` html
<u-uploader multiple list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="/gateway/lowcode/api/v1/app/upload" url-field="result"
    converter="json">
</u-uploader>
```

### 单文件卡片

不使用`multiple`属性时，仅会显示一个卡片。可以用于头像上传、身份证上传等场景。

``` html
<u-uploader list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="/gateway/lowcode/api/v1/app/upload" url-field="result"
    converter="json">
</u-uploader>
```
