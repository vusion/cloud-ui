<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# Loading 加载中

## 示例
### 基本用法
```html
<u-loading></u-loading>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <div><u-loading size="small"></u-loading> small </div>
    <div><u-loading></u-loading> normal </div>
    <div><u-loading size="large"></u-loading> large </div>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| size | string |  | `'normal'` | 图标的大小。可选值：`'small'`, `'normal'`, `'large'` |
