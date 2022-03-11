### 基本用法

``` html
<u-crumb>
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item type="text">Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/cloud-ui/u-crumb">面包屑</u-crumb-item>
</u-crumb>
<u-crumb>
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item disabled>Navigation</u-crumb-item>
    <u-crumb-item type="text" to="/cloud-ui/u-crumb">面包屑</u-crumb-item>
</u-crumb>
```

### 分隔符

``` html
<u-crumb separator="slash">
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui">原型组件</u-crumb-item>
    <u-crumb-item disabled>Navigation</u-crumb-item>
</u-crumb>
```

### 带图标面包屑

``` html
<u-crumb icon>
    <u-crumb-item to="/" icon="home">首页</u-crumb-item>
    <u-crumb-item to="/cloud-ui" icon="file">原型组件</u-crumb-item>
    <u-crumb-item disabled icon="task">Navigation</u-crumb-item>
</u-crumb>
```
