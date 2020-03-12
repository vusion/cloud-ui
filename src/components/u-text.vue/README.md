<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UText 文本

**行内展示**

用于在业务中快速调整文本尺寸、颜色等特性。

## 示例
### 设置尺寸

通过`size`属性设置尺寸。

``` html
<u-linear-layout>
    <u-text size="small">小号文本</u-text>
    <u-text size="normal">正常文本</u-text>
    <u-text size="large">大号文本</u-text>
    <u-text size="huge">特大号文本</u-text>
    <u-text style="font-size: 26px;">自定义大小</u-text>
</u-linear-layout>
```

### 设置颜色

通过`color`属性设置颜色。

``` html
<u-linear-layout>
    <u-text>默认颜色</u-text>
    <u-text color="primary">主要文本</u-text>
    <u-text color="secondary">二级文本</u-text>
    <u-text color="success">成功文本</u-text>
    <u-text color="warning">警告文本</u-text>
    <u-text color="error">错误文本</u-text>
    <u-text color="disabled">禁默文本</u-text>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-text color="secondary">行内文本</u-text>与周围其他文字保持在同一行。
<u-text display="block" color="secondary">块级文本</u-text>宽度充满整行。
```

### 文本换行

``` html
<u-linear-layout direction="vertical">
    <u-text display="block" wrap="ellipsis" style="width: 200px; background: var(--background-color-base);">围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。</u-text>
    <u-text display="block" wrap="break" style="width: 200px; background: var(--background-color-base);">围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。</u-text>
    <u-text display="block" wrap="nowrap" style="width: 200px; background: var(--background-color-base);">围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。</u-text>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| color | enum | `'default'`, `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'error'`, `'disabled'` | `'default'` | 设置颜色。 |
| size | enum | `'small'`, `'normal'`, `'large'`, `'huge'` | `'normal'` | 设置尺寸。 |
| display | string | `'inline'`, `'block'` | `'inline'` | 展示方式。 |
| wrap | string | `'normal'`, `'ellipsis'`, `'break'`, `'nowrap'` | `'normal'` | 换行方式。`'normal'`表示默认方式，`'ellipsis'`表示多余的文本省略，`'break'`表示强制换行且英文自动添加换行符，`'nowrap'`表示始终不换行。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |
