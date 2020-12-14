<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UImage 图片展示

- [示例](#示例)
    - [图片拉伸完全填充父元素](#图片拉伸完全填充父元素)
    - [图片缩放比例完全填充父元素](#图片缩放比例完全填充父元素)
    - [图片按比例尽可能大的填充父元素](#图片按比例尽可能大的填充父元素)
    - [图片以原尺寸填充父元素](#图片以原尺寸填充父元素)
    - [取 contain、none 中较小的](#取-contain-none-中较小的)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

可以用来展示一张图片，支持设置图片地址。

## 示例
### 图片拉伸完全填充父元素

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" fit="fill"></u-image>
```

### 图片缩放比例完全填充父元素

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" fit="contain"></u-image>
```

### 图片按比例尽可能大的填充父元素

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" fit="cover"></u-image>
```

### 图片以原尺寸填充父元素

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" fit="none"></u-image>
```

### 取 contain、none 中较小的

``` html
<u-image src="https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg" fit="scale-down"></u-image>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | image |  | `''` | 图片地址 |
| fit | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'contain'` | 图片地址 |

### Events

#### @load

网页加载完成时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

