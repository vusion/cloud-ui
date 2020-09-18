### 基本用法

``` html
<u-sidebar value="3" :router="false" style="width: 200px;">
    <u-sidebar-item value="1">指南</u-sidebar-item>
    <u-sidebar-item value="2">概念</u-sidebar-item>
    <u-sidebar-item value="3">组件</u-sidebar-item>
</u-sidebar>
```

### 折叠功能

``` html
<u-sidebar collapsible>
    <u-sidebar-group title="Basic">
        <u-sidebar-item>链接</u-sidebar-item>
        <u-sidebar-item>按钮</u-sidebar-item>
        <u-sidebar-item>标签</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation" expanded disabled>
        <u-sidebar-item>导航栏</u-sidebar-item>
        <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
        <u-sidebar-item>标签页</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form" :collapsible="false">
        <u-sidebar-item>单行输入</u-sidebar-item>
        <u-sidebar-item>多行输入</u-sidebar-item>
        <u-sidebar-item>选择框</u-sidebar-item>
        <u-sidebar-item>表单</u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```


### 分组

``` html
<u-sidebar>
    <u-sidebar-group title="Basic">
        <u-sidebar-item>链接</u-sidebar-item>
        <u-sidebar-item>按钮</u-sidebar-item>
        <u-sidebar-item>标签</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation">
        <u-sidebar-item>导航栏</u-sidebar-item>
        <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
        <u-sidebar-item>标签页</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form">
        <u-sidebar-item>单行输入</u-sidebar-item>
        <u-sidebar-item>多行输入</u-sidebar-item>
        <u-sidebar-item>选择框</u-sidebar-item>
        <u-sidebar-item>表单</u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```

### 手风琴模式

```html
<u-sidebar collapsible accordion>
    <u-sidebar-group title="Basic">
        <u-sidebar-item>链接</u-sidebar-item>
        <u-sidebar-item>按钮</u-sidebar-item>
        <u-sidebar-item>标签</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Navigation">
        <u-sidebar-item>导航栏</u-sidebar-item>
        <u-sidebar-item to="/cloud-ui/u-sidebar">侧边栏</u-sidebar-item>
        <u-sidebar-item>标签页</u-sidebar-item>
    </u-sidebar-group>
    <u-sidebar-group title="Form">
        <u-sidebar-item>单行输入</u-sidebar-item>
        <u-sidebar-item>多行输入</u-sidebar-item>
        <u-sidebar-item>选择框</u-sidebar-item>
        <u-sidebar-item>表单</u-sidebar-item>
    </u-sidebar-group>
</u-sidebar>
```