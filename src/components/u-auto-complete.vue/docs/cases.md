### 基本用法

大部分属性与原生`<input>`控件一致。

``` html
<u-auto-complete maxlength="12" placeholder="请输入" autofocus></u-auto-complete>
```

### 加密

将`type`属性设置为`password`用于加密显示。

``` html
<u-auto-complete type="password" maxlength="12" placeholder="请输入密码"></u-auto-complete>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

提示：如果需要绑定的值自动转换为 number 类型，可以使用`number`修饰符。

``` vue
<template>
<u-linear-layout>
    <u-auto-complete v-model="value" maxlength="12" placeholder="请输入端口号"></u-auto-complete>
    <u-auto-complete :value.sync="value" maxlength="12" placeholder="请输入端口号"></u-auto-complete>
    <u-auto-complete v-model.number="numberValue" maxlength="12" placeholder="请输入端口号"></u-auto-complete>
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
    <u-auto-complete value="只读" readonly></u-auto-complete>
    <u-auto-complete value="禁用" disabled></u-auto-complete>
</u-linear-layout>
```

### 可清空

开启`clearable`属性，在输入框有内容时会显示清空按钮。

``` html
<u-auto-complete value="可清空" clearable></u-auto-complete>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-auto-complete maxlength="12" placeholder="行内展示（默认）"></u-auto-complete> 与文字对齐
    <u-auto-complete display="block" maxlength="12" placeholder="块级展示"></u-auto-complete>
</u-linear-layout>
```

### 自定义样式

``` vue
<template>
<u-linear-layout>
    <u-auto-complete :class="$style.custom" maxlength="12" placeholder="class"></u-auto-complete>
    <u-auto-complete style="background: #f7f8fc; width: 200px;" maxlength="12" placeholder="style"></u-auto-complete>
</u-linear-layout>
</template>

<style module>
.custom {
    background: #f7f8fc;
    width: 60px;
}
</style>
```

### 自动扩展大小

``` vue
<template>
<u-linear-layout>
    <u-auto-complete v-model="value" auto-size="horizontal"></u-auto-complete>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: 'abc',
        };
    },
};
</script>

<style module>
.custom {
    background: #f7f8fc;
    width: 60px;
}
</style>
```

### @deprecated 搜索图标

```html
<u-linear-layout>
    <u-auto-complete search="left" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-auto-complete>
    <u-auto-complete search="right" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-auto-complete>
</u-linear-layout>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-auto-complete maxlength="12" placeholder="行内展示（默认）"></u-auto-complete> 与文字对齐
    <u-auto-complete display="block" maxlength="12" placeholder="块级展示"></u-auto-complete>
</u-linear-layout>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-auto-complete size="mini" value="mini" readonly></u-auto-complete>
        <u-auto-complete size="mini small" value="mini small" readonly></u-auto-complete>
        <u-auto-complete size="mini normal" value="mini normal" readonly></u-auto-complete>
        <u-auto-complete size="mini medium" value="mini medium" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="small mini" value="small mini" readonly></u-auto-complete>
        <u-auto-complete size="small" value="small" readonly></u-auto-complete>
        <u-auto-complete size="small normal" value="small normal" readonly></u-auto-complete>
        <u-auto-complete size="small medium" value="small medium" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="normal mini" value="normal mini" readonly></u-auto-complete>
        <u-auto-complete size="normal small" value="normal small" readonly></u-auto-complete>
        <u-auto-complete value="normal" readonly></u-auto-complete>
        <u-auto-complete size="normal medium" value="normal medium" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="medium mini" value="medium mini" readonly></u-auto-complete>
        <u-auto-complete size="medium small" value="medium small" readonly></u-auto-complete>
        <u-auto-complete size="medium normal" value="medium normal" readonly></u-auto-complete>
        <u-auto-complete size="medium" value="medium" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="large" value="large" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="huge" value="huge" readonly></u-auto-complete>
    </u-linear-layout>
    <u-linear-layout>
        <u-auto-complete size="huge full" value="huge full" readonly></u-auto-complete>
    </u-linear-layout>
</u-linear-layout>
```

### 添加图标

```html
<u-linear-layout>
    <u-auto-complete prefix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-auto-complete>
    <u-auto-complete suffix="search" clearable size="normal medium" placeholder="1~12位小写字母" autofocus></u-auto-complete>
</u-linear-layout>
```
