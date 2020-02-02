### 基本用法

除了`<a>`标签基础的`href`和`target`属性，增加了类似`<router-link>`的`to`、`replace`和`append`属性等。

``` html
<u-link href="https://vusion.github.io" target="_blank">普通链接</u-link>&nbsp;<u-link to="/cloud-ui/u-button">路由链接</u-link>
```

### 禁用状态

链接在禁用状态下，不会响应点击事件。

``` html
<u-link href="https://vusion.github.io" target="_blank" disabled>禁用链接</u-link>
```

### 设置颜色

在深色背景下，可以用`color`属性修改颜色。

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

### 块级展示

使用`display="block"`可以快速将链接宽度充满整行。

``` html
<u-link color="secondary">行内链接</u-link>与周围其他文字保持在同一行。
<u-link display="block" color="secondary">块级链接</u-link>宽度充满整行。
```
