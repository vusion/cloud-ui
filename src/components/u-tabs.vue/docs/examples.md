### 基本用法

``` html
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="模板" value="A">模板内容</u-tab>
    <u-tab title="样式" value="B">样式内容</u-tab>
    <u-tab title="逻辑" value="C">逻辑内容</u-tab>
</u-tabs>
```

### 只读和禁用

``` html
<u-tabs readonly>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
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
<u-tabs closable>
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
<u-tabs>
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

        return { list };
    },
    methods: {
        addTab() {
            this.list.push('新标签页 ' + (this.list.length + 1));
        },
    },
};
</script>
```

### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="/components/u-button"></u-tab>
    <u-tab title="Input" to="/components/u-input"></u-tab>
    <u-tab title="Tabs" to="/components/u-tabs"></u-tab>
</u-tabs>
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
