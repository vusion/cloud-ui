<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# USkeleton 骨架屏

- [示例](#示例)
    - [基本用法](#基本用法)
    - [修改段落行数](#修改段落行数)
    - [图片类型](#图片类型)
- [API]()
    - [Props/Attrs](#propsattrs)

加载内容时的占位图形。

## 示例
### 基本用法

最简单的占位效果。

``` html
<u-skeleton></u-skeleton>
```

### 修改段落行数

通过`paragraph`属性可以设置行数。

``` html
<u-skeleton :paragraph="5"></u-skeleton>
```

### 图片类型

``` html { width: 50% }
<u-skeleton type="image"></u-skeleton>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | enum | `'paragraph'`<br/>`'image'` | `'paragraph'` | 骨架屏类型 |
| paragraph | boolean \| number |  | `true` | 默认为 3 行。可以修改行数，或者设置`false`关闭段落显示。 |

