### 基本用法

``` html
<u-panel><template #title><u-text>任务总览</u-text></template>任务内容</u-panel>
```

### 面板分组

``` html
<u-panel title="服务">
    <template #title><u-text>任务总览</u-text></template>
    <u-panel-group><template #title><u-text text="当天概览"></u-text></template>概览内容</u-panel-group>
    <u-panel-group><template #title><u-text text="事务分组"></u-text></template>事务内容</u-panel-group>
</u-panel>
```
