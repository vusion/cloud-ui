处理页面中各组件之间的间距，方法有很多，但经常会出现捉襟见肘的情况。

比如一种常见的方法是，给一些默认组件如按钮之间添加`margin`样式。这种方法的问题在于，有时会出现间距多余的情况，使得之后样式处理常常要作一些减法，而且按钮周围的组件不一定继续是按钮，组件之间间距有n^2种情况，到最后开发者自己也摸不清处理了多少。另一种方法是，使用一些类似`margin-sm`简单的 class 来控制间距。它的典型问题是，class 经常会被滥用，而且污染了 html 结构，因为处理间距本来是一个样式问题，现在却要经常声明在 html 中，另一个问题是经常第一项或最后一项不加，缺乏一种对称性的美感。

考虑到以上各种问题，我们参考一些 native 开发如 Android 的布局方式，总结出这个简单易用的布局组件——线性布局。

### 基本用法

一般具有`inline`特性的组件，可以直接在外面套一个`<u-linear-layout>`，就会拉开间隔。

``` vue
<template>
<div>
    <u-linear-layout 
        :loadingIconRotate="false"
        style="height: 200px; border: 1px solid #aaa; padding: 20px; margin: 20px;" ref="linearLayout">
        测试加载中
    </u-linear-layout>
    <u-button @click="onOpen">打开加载</u-button>
    <u-button @click="onClose">关闭加载</u-button>
</div>
</template>

<script>
export default {
    methods: {
        onOpen() {
            this.$refs.linearLayout.openLoading();
        },
        onClose() {
            this.$refs.linearLayout.closeLoading();
        }
    }
}
</script>
```

### 方向

默认方向为`horizontal`，它只处理具有`inline`特性的组件，拉开横向的间隔；方向也可以设置为`vertical`，它只处理具有`block`特性的组件。

``` html
<u-linear-layout type="root" direction="horizontal">
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
<p></p>
<u-linear-layout direction="vertical">
    <u-linear-progress :percent="25"></u-linear-progress>
    <u-linear-progress :percent="50"></u-linear-progress>
    <u-linear-progress :percent="75"></u-linear-progress>
</u-linear-layout>
```

### 展示方式与布局方式

展示方式`display`用于控制`<u-linear-layout>`本身是否为块级元素或行内元素，而布局方式`layout`用于迅速调整子元素或组件的展示方式。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-layout display="inline">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <span><code>&lt;u-linear-layout&gt;</code>本身为<code>&lt;block&gt;</code>类型，修改<code>display</code>可以拥有行内的特性。</span>
    </u-linear-layout>
    <u-linear-layout direction="vertical" layout="block">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <span>这个<code>&lt;u-linear-layout&gt;</code>中的元素本来都是行内元素，添加<code>layout</code>属性后可全部变成块级元素。</span>
    </u-linear-layout>
</u-linear-layout>
```

### 间距

水平和垂直方向都可以通过设置`gap`属性，调整间距大小。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-linear-layout display="inline" gap="small">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout display="inline" gap="none">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout display="inline" gap="shrink">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
    </u-linear-layout>
    <u-linear-layout direction="vertical" gap="large">
        <u-linear-layout gap="normal">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
        <u-linear-layout gap="large">
            <u-button>Button</u-button>
            <u-button>Button</u-button>
            <u-button>Button</u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
```

### 水平分布方式

考虑到兼容 IE9，普通的分布方式是用`inline-block`与`text-align`两个特性实现的，只支持水平方向。

> 没有用`float`的主要原因是：1. 需要外加父元素或后继元素清除浮动，2. 浮动之后`vertial-align`对齐不太可控。
>
> 但`text-align`也有个坑，就是会影响子元素默认的对齐方式。如果有更好的解决方案，欢迎提供。

如果想使用没有坑、更灵活的分布方式，请使用后面的 Flex 模式，但要确保你的浏览器支持该功能。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout justify="space-between">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

> `space-between`目前只支持左右两个元素，为了兼容没办法。

请不要忘记，`<u-linear-layout>`可以很方便的嵌套使用。

``` html
<u-linear-layout justify="space-between">
    <u-linear-layout>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout gap="shrink">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### Flex模式
#### 主轴分布方式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" justify="start">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="center">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="end">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-between">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
    <u-linear-layout type="flex" justify="space-around">
        <u-button>Button</u-button>
        <u-button>Button</u-button>
        <u-button>Button</u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 交叉轴对齐方式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout type="flex" alignment="start">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="center">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="end">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="baseline">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
    <u-linear-layout type="flex" alignment="stretch">
        <u-block>Block</u-block>
        <u-block size="normal auto">Block</u-block>
        <u-block size="large auto">Block</u-block>
    </u-linear-layout>
</u-linear-layout>
```
