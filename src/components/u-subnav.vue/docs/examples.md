### 基本用法

``` html
<div style="width:960px;">
    <u-subnav usage="tabs">
        <u-subnav-item title="设置带宽">设置带宽</u-subnav-item>
        <u-subnav-item title="调整配额">调整配额</u-subnav-item>
        <u-subnav-item title="灰度测试">灰度测试</u-subnav-item>
    </u-subnav>
</div>
```

#### 路由模式

``` html
<u-subnav>
    <u-subnav-item>指南</u-subnav-item>
    <u-subnav-item>概念</u-subnav-item>
    <u-subnav-item to="/proto-ui">组件</u-subnav-item>
</u-subnav>
```

#### value模式

``` html
<u-subnav value="3" :router="false">
    <u-subnav-item value="1">指南</u-subnav-item>
    <u-subnav-item value="2">概念</u-subnav-item>
    <u-subnav-item value="3">组件</u-subnav-item>
</u-subnav>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout direction="vertical">
    <u-subnav disabled>
        <u-subnav-item>指南</u-subnav-item>
        <u-subnav-item>概念</u-subnav-item>
        <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    </u-subnav>
    <u-subnav>
        <u-subnav-item>指南</u-subnav-item>
        <u-subnav-item disabled>概念</u-subnav-item>
        <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    </u-subnav>
</u-linear-layout>
```

### 分隔符

``` html
<u-subnav>
    <u-subnav-item>指南</u-subnav-item>
    <u-subnav-item>概念</u-subnav-item>
    <u-subnav-item>配置</u-subnav-item>
    <u-subnav-divider></u-subnav-divider>
    <u-subnav-item to="/proto-ui">组件</u-subnav-item>
    <u-subnav-item to="/libraries">组件库</u-subnav-item>
</u-subnav>
```
