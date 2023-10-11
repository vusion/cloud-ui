### 单个文件按钮

下面的例子为单文件上传。

``` html
<u-uploader display="inline"
    url="/upload" url-field="filePath"
    :limit="999"
    max-size="50MB"
    converter="json">
    <u-button color="primary" icon="upload">上传</u-button>
    <template #file-list>
        <i-ico style="margin: 0px 8px 0px 0px;" flag="file-icon" name="file-default" icotype="only"></i-ico>
        <u-text style="margin: 0px 8px 0px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inherit;" flag="file-name" text="文件名称"></u-text>
        <u-text style="margin: 0px 8px 0px 0px;" flag="file-size" text="文件大小"></u-text>
        <i-ico style="margin: 0px 8px 0px 0px;" flag="download-icon" name="download" icotype="only"></i-ico>
    </template>
</u-uploader>
```

### 单文件卡片

不使用`multiple`属性时，仅会显示一个卡片。可以用于头像上传、身份证上传等场景。

``` html
<u-uploader list-type="card"
    accept=".png,.jpg,.jpeg,.gif,.bmp"
    url="/upload" url-field="filePath"
    :limit="999"
    max-size="50MB"
    converter="json">
</u-uploader>
```

### 多图片按钮

``` html
<u-uploader multiple list-type="image"
    accept=".png,.jpg,.jpeg,.gif,.bmp"
    url="/upload" url-field="filePath"
    :limit="999"
    max-size="50MB"
    converter="json">
    <u-button color="primary" icon="upload">上传</u-button>
</u-uploader>
```
