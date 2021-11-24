<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FScrollView 滚动视图

- [示例](#示例)
    - [基本用法](#基本用法)
    - [原生滚动条](#原生滚动条)
- [API]()
    - [Props/Attrs](#propsattrs)

## 示例
### 基本用法

```html
<f-scroll-view color="light" style="display:inline-block;height:300px;width:200px;">
    <div style="display:inline-block;height:600px;width:400px;"></div>
</f-scroll-view>
```

### 原生滚动条

```html
<f-scroll-view native color="light" style="display:inline-block;height:300px;width:200px;">
    <div style="display:inline-block;height:600px;width:400px;"></div>
</f-scroll-view>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| native | Boolean |  | `false` | 是否启用原生滚动条 |

