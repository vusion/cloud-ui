### 基本用法

`'u-action'`实际使用组件`'u-link'`进行渲染，所以具备`'u-link'`的所有功能，不需要再其内部使用`'u-link'`组件实现跳转等功能

``` html
<u-actions>
        <u-action disabled>设置</u-action>
        <u-action to="/components/u-navbar">跳转到 Navbar</u-action>
        <u-action>重启</u-action>
        <u-action disabled>保存为镜像</u-action>
        <u-action to="/components/u-select">跳转到 Select</u-action>
    </u-actions>
```
