### 基本用法

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

``` html
<u-linear-layout>
    <u-button color="primary">Primary</u-button>
    <u-button>Default</u-button>
    <u-button dashed>Dashed</u-button>
    <u-button color="danger">Danger</u-button>
</u-linear-layout>
```

### 设置形状

按钮有四种形状：默认、圆角、方形、圆形，使用`shape`属性来设置。

``` html
<u-linear-layout gap="small">
    <u-button color="primary">Primary</u-button>
    <u-button color="primary" shape="round">Round</u-button>
    <u-button color="primary" shape="square" icon="refresh"></u-button>
    <u-button color="primary" shape="circle" icon="refresh"></u-button>
    <u-button>Default</u-button>
    <u-button shape="round">Round</u-button>
    <u-button shape="square" icon="refresh"></u-button>
    <u-button shape="circle" icon="refresh"></u-button>
</u-linear-layout>
```

### 禁用状态

按钮在禁用状态下，不会响应点击事件。

``` html
<u-linear-layout>
    <u-button color="primary" disabled>Primary</u-button>
    <u-button disabled>Default</u-button>
    <u-button dashed disabled>Dashed</u-button>
    <u-button color="danger" disabled>Danger</u-button>
</u-linear-layout>
```

### 设置尺寸

按钮有最小、小、正常、大四种尺寸，通过`size`属性设置。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout gap="small">
        <u-button size="mini" color="primary">Primary</u-button>
        <u-button size="mini" color="primary" shape="round">Round</u-button>
        <u-button size="mini" shape="square" icon="refresh"></u-button>
        <u-button size="mini" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="small" color="primary">Primary</u-button>
        <u-button size="small" color="primary" shape="round">Round</u-button>
        <u-button size="small" shape="square" icon="refresh"></u-button>
        <u-button size="small" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="normal" color="primary">Primary</u-button>
        <u-button size="normal" color="primary" shape="round">Round</u-button>
        <u-button size="normal" shape="square" icon="refresh"></u-button>
        <u-button size="normal" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
    <u-linear-layout gap="small">
        <u-button size="large" color="primary">Primary</u-button>
        <u-button size="large" color="primary" shape="round">Round</u-button>
        <u-button size="large" shape="square" icon="refresh"></u-button>
        <u-button size="large" shape="circle" icon="refresh"></u-button>
    </u-linear-layout>
</u-linear-layout>
```

<!-- <u-linear-layout gap="small">
    <u-button size="huge" color="primary">Primary</u-button>
    <u-button size="huge" color="primary" shape="round">Round</u-button>
    <u-button size="huge" shape="square" icon="refresh"></u-button>
    <u-button size="huge" shape="circle" icon="refresh"></u-button>
</u-linear-layout> -->

### 块级展示

使用`display="block"`可以快速将按钮宽度充满整行。

``` html
<u-linear-layout direction="vertical" gap="small">
    <u-button display="block">Default</u-button>
    <u-button display="block" color="primary">Primary</u-button>
    <u-button display="block" dashed>Dashed</u-button>
    <u-button display="block" color="danger">Danger</u-button>
</u-linear-layout>
```

### 图标

使用`icon`属性添加图标。

``` html
<u-linear-layout>
    <u-button color="primary" icon="create">创建实例</u-button>
    <u-button color="primary" icon="create" disabled>创建实例</u-button>
    <u-button color="primary" icon="success">创建成功</u-button>
    <u-button shape="square" icon="refresh"></u-button>
</u-linear-layout>
```

### 加载中

通过设置`loading`属性让按钮处于加载状态。

``` vue
<template>
<u-linear-layout>
    <u-button color="primary" loading>创建实例</u-button>
    <u-button color="primary" icon="create" loading disabled>创建实例</u-button>
    <u-button color="primary" shape="square" icon="refresh"
        :loading="loading" :disabled="loading"
        @click="loading = true">
    </u-button>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
};
</script>
```

### 链接

在按钮上可以方便添加链接或路由，类似`<router-link>`。具有 href、target、to 等属性。

``` html
<u-linear-layout>
    <u-button color="primary" href="https://vusion.github.io" target="_blank">打开新窗口</u-button>
    <u-button to="/cloud-ui/components/u-link">路由跳转</u-button>
    <u-button color="primary" href="https://vusion.github.io" disabled>禁用链接</u-button>
</u-linear-layout>
```
