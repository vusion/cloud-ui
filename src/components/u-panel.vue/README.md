<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UPanel 面板

- [示例](#示例)
    - [基本用法](#基本用法)
- [UPanel API](#upanel-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
- [UPanelGroup API](#upanelgroup-api)
    - [Props/Attrs](#propsattrs-2)

**Layout**

用于快速布局

## 示例
### 基本用法

``` html
<u-panel title="任务总览">
    <u-skeleton></u-skeleton>
</u-panel>
```

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

### Slots

#### (default)

插入`<u-panel-group>`子组件。

## UPanelGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 面板项的标题 |

