### 基本用法

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1" text="指南"></u-sidebar-item>
    <u-sidebar-item value="2" text="概念"></u-sidebar-item>
    <u-sidebar-item value="3" text="组件"></u-sidebar-item>
</u-sidebar>
```

### 折叠功能

``` html
<u-sidebar collapsible style="width: 200px;">
    <u-sidebar-group title="Basic">
        <u-sidebar-item text="链接"></u-sidebar-item>
        <u-sidebar-item text="按钮"></u-sidebar-item>
        <u-sidebar-item text="标签"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation" expanded disabled>
        <u-sidebar-item text="导航栏"></u-sidebar-item>
        <u-sidebar-item text="标签页"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form" :collapsible="false">
        <u-sidebar-item text="单行输入"></u-sidebar-item>
        <u-sidebar-item text="多行输入"></u-sidebar-item>
        <u-sidebar-item text="选择框"></u-sidebar-item>
        <u-sidebar-item text="表单"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```


### 分组

``` html
<u-sidebar style="width: 200px;">
    <u-sidebar-group title="Basic">
        <u-sidebar-item text="链接"></u-sidebar-item>
        <u-sidebar-item text="按钮"></u-sidebar-item>
        <u-sidebar-item text="标签"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation">
        <u-sidebar-item text="导航栏"></u-sidebar-item>
        <u-sidebar-item text="标签页"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form">
        <u-sidebar-item text="单行输入"></u-sidebar-item>
        <u-sidebar-item text="多行输入"></u-sidebar-item>
        <u-sidebar-item text="选择框"></u-sidebar-item>
        <u-sidebar-item text="表单"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

### 手风琴模式

```html
<u-sidebar collapsible accordion style="width: 200px;">
    <u-sidebar-group title="Basic">
        <u-sidebar-item text="链接"></u-sidebar-item>
        <u-sidebar-item text="按钮"></u-sidebar-item>
        <u-sidebar-item text="标签"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation">
        <u-sidebar-item text="导航栏"></u-sidebar-item>
        <u-sidebar-item text="标签页"></u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form">
        <u-sidebar-item text="单行输入"></u-sidebar-item>
        <u-sidebar-item text="多行输入"></u-sidebar-item>
        <u-sidebar-item text="选择框"></u-sidebar-item>
        <u-sidebar-item text="表单"></u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```
