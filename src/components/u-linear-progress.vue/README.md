<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULinearProgress 线型进度条

- [示例](#示例)
    - [基本用法](#基本用法)
    - [高度扩展](#高度扩展)
    - [范围限制](#范围限制)
    - [颜色属性](#颜色属性)
    - [垂直方向](#垂直方向)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**chart**

以线条的形式描述当前进度

## 示例
### 基本用法

``` html
<u-linear-progress :percent="36"></u-linear-progress>
```

### 高度扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    <u-linear-progress :percent="36" size="large">large</u-linear-progress>
    <u-linear-progress :percent="36" size="huge">huge</u-linear-progress>
</u-linear-layout>
```

### 范围限制

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :range="[20]" :percent="36">20</u-linear-progress>
    <u-linear-progress :range="[20,50]" :percent="36">20,50</u-linear-progress>
</u-linear-layout>
```

### 颜色属性

``` html
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="36"></u-linear-progress>
    <u-linear-progress :percent="36" color="error"></u-linear-progress>
    <u-linear-progress :percent="36" color="success"></u-linear-progress>
</u-linear-layout>
```

### 垂直方向

``` html
<u-linear-layout>
    <u-linear-progress :percent="36" direction="vertical" size="small">small</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="normal" >normal</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="large" color="error" :range="[20]">large</u-linear-progress>
    <u-linear-progress :percent="36" direction="vertical" size="huge" color="success" :range="[20,50]">huge</u-linear-progress>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| percent | number |  | `0` | 进度条显示的进度百分比，1-100之间的数字 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 进度条高度大小 |
| range | array\<number\> |  | `[0, 100]` | 百分比范围限制 |
| direction | string | `[object Object]`<br/>`[object Object]` | `'horizontal'` | undefined |

### Slots

#### (default)

插入文本或HTML。

