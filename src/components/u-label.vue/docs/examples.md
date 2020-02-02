### 基本用法

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
