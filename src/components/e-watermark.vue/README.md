<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# EWatermark 水印

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)

**Effects**

在页面显示水印

## 示例
### 基本用法

``` html
<e-watermark text="Watermark"></e-watermark>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  | `'水印'` | 水印文本 |
| image | CanvasImageSource |  |  | 水印图案。如果没有，则默认按文本绘制 |
| opacity | number |  | `0.1` | 0-1之间的小数，0代表完全透明，1代表完全不透明 |

