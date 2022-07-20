### 基本用法

大部分属性与原生`<input>`控件一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

将`type`属性设置为`password`可以加密显示，`password` 属性增加密码显示按钮。

``` html
<u-input type="password" password maxlength="12" placeholder="请输入密码"></u-input>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

提示：如果需要绑定的值自动转换为 number 类型，可以使用`number`修饰符。

``` vue
<template>
<u-linear-layout>
    <u-input v-model="value" maxlength="12" placeholder="请输入端口号"></u-input>
    <u-input :value.sync="value" maxlength="12" placeholder="请输入端口号"></u-input>
    <u-input v-model.number="numberValue" maxlength="12" placeholder="请输入端口号"></u-input>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '3306',
            numberValue: 3306,
        };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-input value="只读" readonly></u-input>
    <u-input value="禁用" disabled></u-input>
</u-linear-layout>
```

### 可清除

开启`clearable`属性，在输入框有内容时会显示清空按钮。

``` html
<u-input value="可清除" clearable></u-input>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-input maxlength="12" placeholder="行内展示（默认）"></u-input> 与文字对齐
    <u-input display="block" maxlength="12" placeholder="块级展示"></u-input>
</u-linear-layout>
```

### 大小扩展

由`width`和`height`设置输入框宽高，默认值为`normal`，候选值包括：`mini`、`small`、`normal`、`medium`、`large`、`huge`、`full`。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input width="mini" height="mini" value="width: mini, height:mini" readonly></u-input>
        <u-input width="small" height="mini" value="width: small, height: mini" readonly></u-input>
        <u-input width="normal" height="mini" value="width: normal, height: mini" readonly></u-input>
        <u-input width="medium" height="mini" value="width: medium, height: mini" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="mini" height="small" value="width: mini, height:small" readonly></u-input>
        <u-input width="small" height="small" value="width: small, height: small" readonly></u-input>
        <u-input width="normal" height="small" value="width: normal, height: small" readonly></u-input>
        <u-input width="medium" height="small" value="width: medium, height: small" readonly></u-input>
    </u-linear-layout>
   <u-linear-layout>
        <u-input width="mini" height="normal" value="width: mini, height:normal" readonly></u-input>
        <u-input width="small" height="normal" value="width: small, height: normal" readonly></u-input>
        <u-input width="normal" height="normal" value="width: normal, height: normal" readonly></u-input>
        <u-input width="medium" height="normal" value="width: medium, height: normal" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="mini" height="medium" value="width: mini, height:medium" readonly></u-input>
        <u-input width="small" height="medium" value="width: small, height: medium" readonly></u-input>
        <u-input width="normal" height="medium" value="width: normal, height: medium" readonly></u-input>
        <u-input width="medium" height="medium" value="width: medium, height: medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="large" height="large" value="width: large, height: large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="huge" height="huge" value="width: huge, height: huge" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input width="full" height="full" value="width: full, height: full" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

### 添加图标

```html
<u-linear-layout>
    <!-- <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input> -->
    <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input prefix="https://static-vusion.nos-eastchina1.126.net/h5-template/svgviewer-output.svg" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input suffix="https://static-vusion.nos-eastchina1.126.net/h5-template/svgviewer-output.svg" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input suffix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
</u-linear-layout>
```
