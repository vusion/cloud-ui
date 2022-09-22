<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDivider 分隔线

- [示例](#示例)
    - [基本用法](#基本用法)
    - [左](#左)
    - [竖向](#竖向)
    - [竖向](#竖向-2)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Display**

用于将内容分隔为多个区域

## 示例
### 基本用法

``` html
<u-divider title="内容"></u-divider>
```

### 左

``` html
<u-divider dashed="b" content-position="left" title="左">
</u-divider>
```

### 竖向

``` html
<u-divider dashed="b" content-position="left" title="左" direction="column">
</u-divider>
```

### 竖向

``` html
<u-divider content-position="center" title="中" direction="column">
</u-divider>
```
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| dashed | string | `[object Object]`<br/>`[object Object]` | `'a'` | 线条类型 |
| content-position | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'center'` | 内容位置 |
| title | string |  |  | 文本 |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` | undefined |

### Slots

#### (default)

显示的文本

### Events

