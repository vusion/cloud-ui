<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UText 文本

- [示例](#示例)
    - [设置尺寸](#设置尺寸)
    - [设置颜色](#设置颜色)
    - [块级展示](#块级展示)
    - [文本过长](#文本过长)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Display**

用于展示文字或表达式

## 示例
### 设置尺寸

通过`size`属性设置尺寸。

``` html
<u-linear-layout gap="small">
    <u-text size="small" text="小号文本"></u-text>
    <u-text size="normal" text="正常文本"></u-text>
    <u-text size="large" text="大号文本"></u-text>
    <u-text size="huge" text="特大号文本"></u-text>
    <u-text style="font-size: 26px;" text="自定义大小"></u-text>
</u-linear-layout>
```

### 设置颜色

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-text text="默认颜色"></u-text>
    <u-text color="primary" text="主要文本"></u-text>
    <u-text color="secondary" text="次要文本"></u-text>
    <u-text color="success" text="成功文本"></u-text>
    <u-text color="warning" text="警告文本"></u-text>
    <u-text color="error" text="错误文本"></u-text>
    <u-text color="disabled" text="禁默文本"></u-text>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-text color="secondary" text="行内文本"></u-text>与周围其他文字保持在同一行。
<u-text display="block" color="secondary" text="块级文本"></u-text>宽度充满整行。
```

### 文本过长

使用`overflow`处理文本过长的问题。

``` html
<u-linear-layout direction="vertical">
    <u-text display="block" overflow="ellipsis" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
    <u-text display="block" overflow="break" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
    <u-text display="block" overflow="nowrap" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 显示文本内容 |
| color | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'default'` | 设置文本颜色 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置文本大小 |
| display | string | `[object Object]`<br/>`[object Object]` | `'inline'` | 行内展示，或块级换行展示 |
| overflow | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 文本过长的处理方式 |

### Events

#### @$listeners

监听所有`<span>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

