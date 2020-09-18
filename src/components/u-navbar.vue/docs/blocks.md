### 基本用法

下面展示了导航条的一些基本特性，如配置链接、添加分隔线、禁用选项等。

``` html
<u-navbar style="background: #4289db;">
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item>概念</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item>配置</u-navbar-item>
    <u-navbar-item href="https://github.com/vusion/cloud-ui">GitHub</u-navbar-item>
</u-navbar>
```

### 选择控制

``` html
<u-navbar value="3" :router="false" style="background: #4289db;">
    <u-navbar-item value="1">组件</u-navbar-item>
    <u-navbar-item value="2">备案管理</u-navbar-item>
    <u-navbar-item value="3">帮助</u-navbar-item>
    <u-navbar-item value="4">GitHub</u-navbar-item>
</u-navbar>
```


### 布局
#### 左右插槽

导航条内容有左中右三块区域。

通过`left`和`right`两个 slot，可以快速进行布局。

``` html
<u-navbar>
    <s-logo slot="left"></s-logo>
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item>概念</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
</u-navbar>
```

#### 对齐方式

通过设置`alignment`属性，可以调整中部区域的对齐方式。

``` html
<u-linear-layout direction="vertical">
    <u-navbar alignment="left">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="center">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
    <u-navbar alignment="right">
        <s-logo slot="left"></s-logo>
        <u-navbar-item>指南</u-navbar-item>
        <u-navbar-item>概念</u-navbar-item>
        <u-navbar-item to="/cloud-ui">组件</u-navbar-item>
        <u-navbar-item slot="right" href="https://github.com/vusion/cloud-ui" target="_blank"><i-icon name="github"></i-icon></u-navbar-item>
    </u-navbar>
</u-linear-layout>
```

### 下拉菜单与选择

使用`<u-navbar-menu>`搭配`<u-navbar-dropdown>`来实现下拉菜单，使用`<u-navbar-select>`来实现下拉选择。

``` html
<u-navbar>
    <u-navbar-item to="/components">组件</u-navbar-item>
    <u-navbar-item disabled>指令</u-navbar-item>
    <u-navbar-dropdown title="下拉菜单">
        <u-navbar-menu>
            <u-navbar-menu-item>Basic</u-navbar-menu-item>
            <u-navbar-menu-item>Layout</u-navbar-menu-item>
            <u-navbar-menu-item>Navigation
                <u-navbar-menu slot="sub">
                    <u-navbar-menu-item>Navbar</u-navbar-menu-item>
                    <u-navbar-menu-item>Sidebar</u-navbar-menu-item>
                    <u-navbar-menu-item>Menu</u-navbar-menu-item>
                </u-navbar-menu>
            </u-navbar-menu-item>
        </u-navbar-menu>
    </u-navbar-dropdown>
    <u-navbar-select>
        <u-navbar-select-item>请选择</u-navbar-select-item>
        <u-navbar-select-item>中文</u-navbar-select-item>
        <u-navbar-select-item>English</u-navbar-select-item>
        <u-navbar-select-item>Français</u-navbar-select-item>
        <u-navbar-select-item>Русский</u-navbar-select-item>
    </u-navbar-select>
</u-navbar>
```
