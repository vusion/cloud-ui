### 基本用法

除了`<a>`标签的`href`和`target`基础属性，增加了类似`<router-link>`的`to`、`replace`和`append`属性等。

``` html
<u-link href="https://vusion.github.io" target="_blank">普通链接</u-link>&nbsp;<u-link to="/cloud-ui/u-button">路由链接</u-link>
```

### 设置颜色

用`color`属性修改颜色。

``` html
<u-link href="#">默认颜色</u-link>&nbsp;
<u-link href="#" color="light">
    浅色链接<u-tooltip>
        <u-link href="#" color="light">浅色链接</u-link>一般用于深色背景
    </u-tooltip>
</u-link>&nbsp;
<u-link color="success">成功链接</u-link>&nbsp;
<u-link color="warning">警告链接</u-link>&nbsp;
<u-link color="error">错误链接</u-link>&nbsp;
```

### 禁用状态

链接在禁用状态下，不会响应点击事件。

``` html
<u-link href="https://vusion.github.io" target="_blank" disabled>禁用链接</u-link>
```

### 块级展示

使用`display="block"`可以快速将链接宽度充满整行。

``` html
<u-link color="secondary">行内链接</u-link>与周围其他文字保持在同一行。
<u-link display="block" color="secondary">块级链接</u-link>宽度充满整行。
```
