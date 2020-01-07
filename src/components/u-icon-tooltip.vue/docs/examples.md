图标与`<u-tooltip>`的组合。

### 基本用法

``` html
文字旁的提示 <u-icon-tooltip>这是提示内容</u-icon-tooltip>
```

### 切换类型

``` html
信息 <u-icon-tooltip>这是提示内容</u-icon-tooltip><br>
帮助 <u-icon-tooltip type="help">这是提示内容</u-icon-tooltip><br>
详情 <u-icon-tooltip type="detail">这是提示内容</u-icon-tooltip>
```

### 弹出位置

``` html
<u-linear-layout>
    <span>
        top
        <u-icon-tooltip placement="top">Tooltip</u-icon-tooltip>
    </span>
    <span>
        left
        <u-icon-tooltip placement="left">Tooltip</u-icon-tooltip>
    </span>
    <span>
        right
        <u-icon-tooltip placement="right">Tooltip</u-icon-tooltip>
    </span>
    <span>
        bottom
        <u-icon-tooltip placement="bottom">Tooltip</u-icon-tooltip>
    </span>
</u-linear-layout>
```
