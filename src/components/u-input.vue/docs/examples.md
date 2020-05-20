### 基本用法

大部分属性与原生`<input>`控件一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

将`type`属性设置为`password`可以加密显示。

``` html
<u-input type="password" maxlength="12" placeholder="请输入密码"></u-input>
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

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input size="mini" value="mini" readonly></u-input>
        <u-input size="mini small" value="mini small" readonly></u-input>
        <u-input size="mini normal" value="mini normal" readonly></u-input>
        <u-input size="mini medium" value="mini medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="small mini" value="small mini" readonly></u-input>
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small medium" value="small medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal mini" value="normal mini" readonly></u-input>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal medium" value="normal medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="medium mini" value="medium mini" readonly></u-input>
        <u-input size="medium small" value="medium small" readonly></u-input>
        <u-input size="medium normal" value="medium normal" readonly></u-input>
        <u-input size="medium" value="medium" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge" value="huge" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="huge full" value="huge full" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

### 添加图标

```html
<u-linear-layout>
    <u-input prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input suffix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-input>
</u-linear-layout>
```
