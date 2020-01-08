### 基本用法

``` html
<u-link href="#">链接</u-link>&nbsp;<u-link href="#">查看详情</u-link>
```

### 禁用

``` html
<u-link href="#" disabled>禁用</u-link>
```

### 目标

使用`href`和`target`属性，可以直接实现`<a>`元素对应的功能。使用`to`、`replace`和`append`需要引入vue-router，它们与`<router-link>`组件中对应属性的功能相同。

``` html
<u-link href="https://vusion.github.io" target="_blank">href</u-link>&nbsp;
<u-link to="/cloud-ui/u-button">router</u-link>
```

### 颜色扩展

``` html
<u-link href="#">
    默认颜色
    <u-tooltip>
        <u-link href="#">默认颜色</u-link>
    </u-tooltip>
</u-link>
<u-link href="#" color="light">
    浅色
    <u-tooltip>
        <u-link href="#" color="light">浅色</u-link>
    </u-tooltip>
</u-link>
<u-link href="#" color="white" style="background: #a7afbb;">
    白色
    <u-tooltip>
        <u-link href="#" color="white">白色</u-link>
    </u-tooltip>
</u-link>
```

### 展示方式

``` html
<u-link href="#" display="block">这是几个</u-link>
<u-link href="#" display="block">块级</u-link>
<u-link href="#" display="block">链接组件</u-link>
<u-link href="#" display="inline">这是几个</u-link>
<u-link href="#">行内（默认）</u-link>
<u-link href="#" display="inline">链接组件</u-link>
```
