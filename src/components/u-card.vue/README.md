<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCard 卡片

- [示例](#示例)
    - [基本用法](#基本用法)
    - [带分割线样式](#带分割线样式)
    - [带图片样式](#带图片样式)
    - [卡片分组](#卡片分组)
- [UCard API](#ucard-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UCardGroup API](#ucardgroup-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Container**

用于快速布局

## 示例
### 基本用法

``` html
<u-card title="卡片">
    <u-skeleton></u-skeleton>
</u-card>
```

### 带分割线样式

``` html
<u-card title="卡片" split>
    <u-skeleton></u-skeleton>
</u-card>
```

### 带图片样式

``` html
<u-card title="卡片" style="width: 280px">
    <u-image slot="cover" src="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg" fit="contain"></u-image>
    <u-skeleton></u-skeleton>
</u-card>
```


### 卡片分组

``` html
<u-card title="卡片">
    <u-card-group title="卡片分组">
        <u-skeleton></u-skeleton>
    </u-card-group>
    <u-card-group title="卡片分组">
        <u-skeleton></u-skeleton>
    </u-card-group>
</u-card>
```

## UCard API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 卡片标题 |
| width | string |  |  | 卡片宽度：像素或百分比 |
| shadow | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'always'` | 卡片阴影显示时机 |
| border | boolean |  | `true` | 是否显示卡片边框 |
| split | boolean |  | `false` | 是否显示分割线 |

### Slots

#### (default)

插入默认的元素

#### cover

插入图片

### Events

#### @$listeners

监听所有事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

## UCardGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 卡片组的标题 |

### Slots

#### (default)

插入默认的元素

#### cover

插入图片

