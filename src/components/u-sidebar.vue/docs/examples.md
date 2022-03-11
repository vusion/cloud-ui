### 基本用法

``` html
<u-sidebar value="3" :router="false">
    <u-sidebar-item icon="calendar" value="1" text="导航一"></u-sidebar-item>
    <u-sidebar-item value="2" text="导航二"></u-sidebar-item>
    <u-sidebar-item value="3" text="导航三"></u-sidebar-item>
</u-sidebar>
```

### 折叠功能

``` html
<u-sidebar collapsible>
    <u-sidebar-group title="导航一" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二" expanded disabled>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```


### 分组

``` html
<u-sidebar>
    <u-sidebar-group title="导航一" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二" expanded>
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

### 手风琴模式

```html
<u-sidebar collapsible accordion>
    <u-sidebar-group title="导航一">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航二">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="导航三">
        <u-sidebar-item text="选项一"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```
