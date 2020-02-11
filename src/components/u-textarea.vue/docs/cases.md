### 基本用法

大部分属性与`<textarea>`元素一致。

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### 双向绑定

使用`v-model`或`:value.sync`进行双向绑定。

``` vue
<template>
<u-linear-layout>
    <u-textarea v-model="value" placeholder="请输入"></u-textarea>
    <u-textarea :value.sync="value" placeholder="请输入"></u-textarea>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '一段很长很长的文本',
        };
    },
};
</script>
```

### 只读与禁用

``` html
<u-linear-layout>
    <u-textarea value="只读" readonly></u-textarea>
    <u-textarea value="禁用" disabled></u-textarea>
</u-linear-layout>
```

### 调整大小

通过设置`resize`属性，决定水平垂直方向是否可以调整大小。

``` html
<u-linear-layout direction="vertical">
    <div><u-textarea placeholder="none" resize="none"></u-textarea></div>
    <div><u-textarea placeholder="vertical（默认）" resize="vertical"></u-textarea></div>
    <div><u-textarea placeholder="horizontal" resize="horizontal"></u-textarea></div>
    <div><u-textarea placeholder="both" resize="both"></u-textarea></div>
</u-linear-layout>
```

### 可清空

开启`clearable`属性，在输入框有内容时会显示清空按钮。

``` html
<u-textarea value="可清空" clearable></u-textarea>
```

### 展示方式

默认为行内展示，可以将`display`设置为块级展示。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-textarea placeholder="行内展示（默认）"></u-textarea> 与文字对齐
    <u-textarea display="block" placeholder="块级展示"></u-textarea>
</u-linear-layout>
```

### 自定义样式

``` vue
<template>
<u-linear-layout>
    <u-textarea :class="$style.custom" placeholder="class"></u-textarea>
    <u-textarea style="background: #f7f8fc; width: 200px;" placeholder="style"></u-textarea>
</u-linear-layout>
</template>

<style module>
.custom {
    background: #f7f8fc;
    width: 60px;
}
</style>
```


### 自动调整

``` vue
<template>
<u-linear-layout>
    <u-textarea v-model="value" auto-size="both"></u-textarea>
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
```
