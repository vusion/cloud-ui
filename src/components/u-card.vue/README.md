<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCard 卡片

- [示例](#示例)
    - [基本用法](#基本用法)
    - [卡片分组](#卡片分组)
- [UCard API](#ucard-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [UCardGroup API](#ucardgroup-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Layout**

用于快速布局

## 示例
### 基本用法

``` html
<u-card title="卡片">
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
| width | string |  |  | 卡片宽度 |
| shadow | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'always'` | 卡片阴影显示时机 |
| border | boolean |  | `true` | 是否展示卡片边框 |

### Slots

#### (default)



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

