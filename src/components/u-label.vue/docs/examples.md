### 基本用法

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-label text="Label"></u-label>
    <u-label color="primary" text="Primary"></u-label>
    <u-label color="success" text="Success"></u-label>
    <u-label color="normal" text="Normal"></u-label>
    <u-label color="warning" text="Warning"></u-label>
    <u-label color="error" text="Error"></u-label>
    <u-label style="background: #c461fb; color: white;" text="Custom"></u-label>
</u-linear-layout>
```

### 可删除标签

添加属性`removable`可以删除标签。

点击删除标签时，会触发`remove`事件，需要自己实现删除逻辑。

``` html
<u-linear-layout gap="small">
    <u-label removable text="Label"></u-label>
    <u-label removable color="primary" text="Primary"></u-label>
    <u-label removable color="success" text="Success"></u-label>
    <u-label removable color="normal" text="Normal"></u-label>
    <u-label removable color="warning" text="Warning"></u-label>
    <u-label removable color="error" text="Error"></u-label>
</u-linear-layout>
```

### 设置尺寸

标签有小、正常、中、大四种尺寸，通过`size`属性设置。

``` html
<u-linear-layout gap="small">
    <u-label size="small" text="Small"></u-label>
    <u-label size="small" color="primary" removable text="Small"></u-label>
    <u-label text="Normal"></u-label>
    <u-label color="primary" removable text="Normal"></u-label>
    <u-label size="large" text="Large"></u-label>
    <u-label size="large" color="primary" removable text="Large"></u-label>
    <u-label size="huge" text="Huge"></u-label>
    <u-label size="huge" color="primary" removable text="Huge"></u-label>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="mini" style="width: 120px;">
    <u-label display="block" text="日常工作"></u-label>
    <u-label display="block" color="primary" text="重要任务"></u-label>
    <u-label display="block" text="质量效率"></u-label>
    <u-label display="block" text="学习分享"></u-label>
</u-linear-layout>
```

### 线性标签

通过`type="line"`属性设置。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout gap="small">
        <u-label text="Label" type="line"></u-label>
        <u-label color="primary" text="Primary" type="line"></u-label>
        <u-label color="success" text="Success" type="line"></u-label>
        <u-label color="normal" text="Normal" type="line"></u-label>
        <u-label color="warning" text="Warning" type="line"></u-label>
        <u-label color="error" text="Error" type="line"></u-label>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-label removable text="Label" type="line"></u-label>
        <u-label removable color="primary" text="Primary" type="line"></u-label>
        <u-label removable color="success" text="Success" type="line"></u-label>
        <u-label removable color="normal" text="Normal" type="line"></u-label>
        <u-label removable color="warning" text="Warning" type="line"></u-label>
        <u-label removable color="error" text="Error" type="line"></u-label>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-label size="small" text="Small" type="line"></u-label>
        <u-label size="small" color="primary" removable text="Small" type="line"></u-label>
        <u-label text="Normal" type="line"></u-label>
        <u-label color="primary" removable text="Normal" type="line"></u-label>
        <u-label size="large" text="Large" type="line"></u-label>
        <u-label size="large" color="primary" removable text="Large" type="line"></u-label>
        <u-label size="huge" text="Huge" type="line"></u-label>
        <u-label size="huge" color="primary" removable text="Huge" type="line"></u-label>
    </u-linear-layout>
</u-linear-layout>
```
