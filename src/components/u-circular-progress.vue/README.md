<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCircularProgress 圆形进度条

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

## 示例
### 基本用法

``` html
<u-circular-progress :percent="36"></u-circular-progress>
```

```html
<u-circular-progress :percent="10">
    <div>VCPU</div>
</u-circular-progress>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| percent | number |  | `0` | 百分比 |

### Slots

#### (default)

插入文本或 HTML。

