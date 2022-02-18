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
