### 基本用法

下面展示了导航条的一些基本特性，如配置链接、添加分隔线、禁用选项等。

``` html
<u-navbar style="background: #4289db;">
    <u-navbar-item href="https://github.com/vusion/cloud-ui" text="GitHub"></u-navbar-item>
    <u-navbar-item disabled text="指令"></u-navbar-item>
    <u-navbar-divider></u-navbar-divider>
    <u-navbar-item text="配置"></u-navbar-item>
</u-navbar>
```

### 选择控制

``` html
<u-navbar value="3" :router="false" style="background: #4289db;">
    <u-navbar-item value="1" text="组件"></u-navbar-item>
    <u-navbar-item value="2" text="备案管理"></u-navbar-item>
    <u-navbar-item value="3" text="帮助"></u-navbar-item>
    <u-navbar-item value="4" text="GitHub"></u-navbar-item>
</u-navbar>
```
