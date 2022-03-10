<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UImage 图片展示

- [示例](#示例)
    - [适应](#适应)
    - [适应（图片小于父元素时以原尺寸展示）](#适应图片小于父元素时以原尺寸展示)
    - [拉伸](#拉伸)
    - [填充](#填充)
    - [原尺寸](#原尺寸)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

可以用来展示一张图片，支持设置图片地址。

## 示例
### 适应

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="contain"></u-image>
```

### 适应（图片小于父元素时以原尺寸展示）

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="scale-down"></u-image>
```

### 拉伸

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="fill"></u-image>
```

### 填充

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="cover"></u-image>
```

### 原尺寸

``` html
<u-image src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" style="width: 300px; height: 150px;" fit="none"></u-image>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | image |  | `''` | 图片地址 |
| fit | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'contain'` | 图片填充方式 |
| circle | boolean |  | `false` | 是否开启圆形遮罩 |
| horizontalCenter | string | `'左对齐'` ()<br/>`'居中对齐'` ()<br/>`'右对齐'` () | `'center'` | 图片水平对齐方式 |
| verticalCenter | string | `'顶部对齐'` ()<br/>`'居中对齐'` ()<br/>`'底部对齐'` () | `'center'` | 图片垂直对齐方式 |
| convertSrcFn | Function |  | `'(src) =\> {  try { const tempSrc = JSON.parse(src); const tempItem = tempSrc\[0\]; return tempItem.url; } catch (e) { return src;}}'` | 将传入的src转换为符合要求的字符串 |

### Events

#### @load

网页加载完成时触发

| Param | Type | Description |
| ----- | ---- | ----------- |

