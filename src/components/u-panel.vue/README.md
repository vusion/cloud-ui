<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UPanel 面板

- [示例](#示例)
    - [基本用法](#基本用法)
    - [面板分组](#面板分组)
- [UPanel API](#upanel-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UPanelGroup API](#upanelgroup-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)

**Container**

用于快速布局

## 示例
### 基本用法

一直显示阴影：

``` html
<u-panel title="任务总览" shadow="always">
    <u-skeleton></u-skeleton>
</u-panel>
```

鼠标 `hover` 时显示阴影：

``` html
<u-panel title="任务总览" shadow="hover">
    <u-skeleton></u-skeleton>
</u-panel>
```

不显示阴影：

``` html
<u-panel title="任务总览" shadow="never">
    <u-skeleton></u-skeleton>
</u-panel>
```

不显示边框：

``` html
<u-panel title="任务总览" :bordered="false">
    <u-skeleton></u-skeleton>
</u-panel>
```

### 面板分组

``` html
<u-panel title="服务">
    <u-panel-group title="当天概览">
        <u-skeleton></u-skeleton>
    </u-panel-group>
    <u-panel-group title="事务分组">
        <u-skeleton></u-skeleton>
    </u-panel-group>
</u-panel>
```

## UPanel API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 面板项的标题 |
| content | string |  | `''` | 面板内容 |
| bordered | boolean |  | `true` | 显示/隐藏边框 |
| shadow | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'always'` | 阴影显示方式 |

### Slots

#### (default)

插入`<u-panel-group>`子组件。

## UPanelGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 面板项的标题 |

### Slots

#### (default)

插入默认的元素

