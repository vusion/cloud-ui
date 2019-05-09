# UText 文本

用于在业务中临时快速调整文本大小、颜色等特性。不建议在封装基础组件时使用。

## 示例
### 大小扩展

``` html
<u-linear-layout>
    <u-text size="small">小号文本</u-text>
    <u-text size="normal">正常文本</u-text>
    <u-text size="large">大号文本</u-text>
</u-linear-layout>
```

### 颜色扩展

``` html
<u-linear-layout>
    <u-text>默认颜色</u-text>
    <u-text color="primary">主要文本</u-text>
    <u-text color="secondary">二级文本</u-text>
    <u-text color="error">错误文本</u-text>
    <u-text color="disabled">禁默文本</u-text>
</u-linear-layout>
```

### 展示方式

``` html
<u-text display="block">这是几个</u-text>
<u-text display="block">块级</u-text>
<u-text display="block">文本组件</u-text>
<u-text display="inline">这是几个</u-text>
<u-text>行内（默认）</u-text>
<u-text display="inline">文本组件</u-text>
```

### 文本换行

``` html
<u-linear-layout direction="vertical">
    <u-text display="block" wrap="ellipsis" style="width: 120px; background: #f2f3f8;">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
    <u-text display="block" wrap="break" style="width: 120px; background: #f2f3f8;">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
    <u-text display="block" wrap="nowrap" style="width: 120px; background: #f2f3f8;">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | String | `'normal'` | 大小扩展。可选值：`'small'`, `'normal'`, `'large'` |
| color | String | `'default'` | 颜色扩展。可选值：`'default'`, `'primary'`, `'error'`, `'disabled'` |
| display | String | `'inline'` | 展示方式。可选值：`'inline'`, `'block'` |
| wrap | String | `false` | 换行方式。可选值：`'normal'`表示默认方式，`'ellipsis'`表示多余的文本省略，`'break'`表示强制换行且英文自动添加换行符，`'nowrap'`表示始终不换行。 |
