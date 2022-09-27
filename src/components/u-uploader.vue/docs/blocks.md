### 单个文件按钮

下面的例子为单文件上传。

``` html
<u-uploader display="inline"
    url="/upload" url-field="result"
    :limit="999"
    max-size="50MB"
    converter="json">
    <u-button color="primary" icon="upload">上传</u-button>
</u-uploader>
```

### 单文件卡片

不使用`multiple`属性时，仅会显示一个卡片。可以用于头像上传、身份证上传等场景。

``` html
<u-uploader list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="/upload" url-field="result"
    :limit="999"
    max-size="50MB"
    converter="json">
</u-uploader>
```

### 多图片按钮

``` html
<u-uploader multiple list-type="image"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="/upload" url-field="result"
    :limit="999"
    max-size="50MB"
    converter="json">
    <u-button color="primary" icon="upload">上传</u-button>
</u-uploader>
```
