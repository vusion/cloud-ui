<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULinearProgress 线型进度条

- [示例](#示例)
    - [基本用法](#基本用法)
    - [高度扩展](#高度扩展)
    - [范围限制](#范围限制)
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
    <u-linear-layout>
        <u-linear-progress :percent="36" size="small">small</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :percent="36" size="normal">normal</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="large">large</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress size="huge">huge</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```

### 范围限制
``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-progress :range="[20]" :percent="36">20</u-linear-progress>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-progress :range="[20,50]" :percent="36">20,50</u-linear-progress>
    </u-linear-layout>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| percent | number |  | `0` | 百分比，0-100 之间的数字 |
| size | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 高度扩展 |
| range | array\<number\> |  | `[0, 100]` | 百分比范围限制 |

### Slots

#### (default)

插入文本或HTML。

