### 基本用法

#### 使用 value 控制

``` html
<u-tabs value="B">
    <u-tab title="模板" value="A">模板内容</u-tab>
    <u-tab title="样式" value="B">样式内容</u-tab>
    <u-tab title="逻辑" value="C">逻辑内容</u-tab>
</u-tabs>
```

### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
```

### 外观

#### 方形卡片（默认）

``` html
<u-tabs appear="square">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 圆形卡片（默认）

``` html
<u-tabs appear="round" size="small">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 线条导航

``` html
<u-tabs appear="line">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 胶囊导航

``` html
<u-tabs appear="capsule">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

#### 文本形态

``` html
<u-tabs appear="text" size="mini">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 禁用状态

``` html
<u-tabs disabled>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式" disabled>样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 可关闭

``` html
<u-tabs closable item-width="90px" item-align="left">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
    <u-tab title="文档">文档内容</u-tab>
    <u-tab title="资源">资源内容</u-tab>
</u-tabs>
```

### 标签页较多的情形

``` vue
<template>
<u-tabs v-model="value">
    <u-tab v-for="title in list" :key="title" :title="title" :value="title">{{ title }} 的内容</u-tab>
    <u-button size="small" slot="extra" @click="addTab">添加</u-button>
</u-tabs>
</template>
<script>
export default {
    data() {
        const list = [];
        for (let i = 0; i < 20; i++)
            list.push('标签页 ' + (i + 1));

        return { 
            value: '标签页 7',
            list 
        };
    },
    methods: {
        addTab() {
            this.list.push('新标签页 ' + (this.list.length + 1));
        },
    },
};
</script>
```

### 插槽扩展

- 在`<u-tabs>`上可以使用`extra`插槽，在右侧添加额外的内容；
- 在`<u-tab>`上可以使用`title`插槽，自定义标签页的标题。

<p></p>

``` html
<u-tabs value="1">
    <u-tab value="0">
        <span slot="title">模板 <u-label>1</u-label></span>
        模板内容
    </u-tab>
    <u-tab value="1">
        <span slot="title">样式 <u-label>6</u-label></span>
        样式内容
    </u-tab>
    <u-tab value="2">
        <span slot="title">逻辑 <u-label>3</u-label></span>
        逻辑内容
    </u-tab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-tabs>
```

### 垂直排列

``` html
<div style="height: 400px">
    <u-tabs direction="vertical">
        <u-tab title="模板">模板内容</u-tab>
        <u-tab title="样式">样式内容</u-tab>
        <u-tab title="逻辑">逻辑内容</u-tab>
        <u-tab title="文档">文档内容</u-tab>
        <u-tab title="资源1">资源内容1</u-tab>
        <u-tab title="资源2">资源内容2</u-tab>
        <u-tab title="资源3">资源内容3</u-tab>
        <u-tab title="资源4">资源内容4</u-tab>
        <u-tab title="资源5">资源内容5</u-tab>
        <u-tab title="资源6">资源内容6</u-tab>
    </u-tabs>
</div>
```

### 垂直排列-右侧

``` html
<u-tabs direction="vertical" position="right">
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
    <u-tab title="文档">文档内容</u-tab>
</u-tabs>
```
