### 基本用法

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-label>Label</u-label>
    <u-label color="primary">Primary</u-label>
    <u-label color="success">Success</u-label>
    <u-label color="warning">Warning</u-label>
    <u-label color="error">Error</u-label>
    <u-label style="background: #c461fb;">Custom</u-label>
</u-linear-layout>
```

### 可关闭标签

添加属性`closable`可以关闭标签。

点击关闭标签时，会触发`close`事件，需要自己实现关闭逻辑。

``` html
<u-linear-layout gap="small">
    <u-label closable>Label</u-label>
    <u-label closable color="primary">Primary</u-label>
    <u-label closable color="success">Success</u-label>
    <u-label closable color="warning">Warning</u-label>
    <u-label closable color="error">Error</u-label>
</u-linear-layout>
```

### 设置尺寸

标签有正常、中、大三种尺寸，通过`size`属性设置。

``` html
<u-linear-layout gap="small">
    <u-label>Normal</u-label>
    <u-label size="large">Large</u-label>
    <u-label size="large" color="primary" closable>Large</u-label>
    <u-label size="huge">Huge</u-label>
    <u-label size="huge" color="primary" closable>Huge</u-label>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="mini" style="width: 120px;">
    <u-label display="block">日常工作</u-label>
    <u-label display="block" color="primary">重要任务</u-label>
    <u-label display="block">质量效率</u-label>
    <u-label display="block">学习分享</u-label>
</u-linear-layout>
```
