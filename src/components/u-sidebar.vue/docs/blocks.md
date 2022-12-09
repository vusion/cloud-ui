### 基本用法

``` html
<u-sidebar value="3" :router="true">
    <u-sidebar-item value="1"><u-text text="导航一"></u-text></u-sidebar-item>
    <u-sidebar-item value="2"><u-text text="导航二"></u-text></u-sidebar-item>
    <u-sidebar-item value="3"><u-text text="导航三"></u-text></u-sidebar-item>
</u-sidebar>
```

### 折叠功能

``` html
<u-sidebar collapsible :router="true">
    <u-sidebar-group expanded>
        <template #title><u-text text="导航一"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group expanded disabled>
        <template #title><u-text text="导航二"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```


### 分组

``` html
<u-sidebar :router="true">
    <u-sidebar-group expanded>
        <template #title><u-text text="导航一"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group expanded>
        <template #title><u-text text="导航二"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

### 手风琴模式

```html
<u-sidebar collapsible accordion :router="true">
    <u-sidebar-group>
        <template #title><u-text text="导航一"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group>
        <template #title><u-text text="导航二"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group>
        <template #title><u-text text="导航三"></u-text></template>
        <u-sidebar-item><u-text text="选项一"></u-text></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```
