### 基本用法

``` html
<f-dragger>
    <u-block size="normal" style="position: relative;">拖我</u-block>
</f-dragger>
```

### 轴向约束

``` html
<f-dragger axis="horizontal">
    <u-block size="normal" inline style="position: relative;">水平</u-block>
</f-dragger>
<f-dragger axis="vertical">
    <u-block size="normal" inline style="position: relative;">垂直</u-block>
</f-dragger>
```

### 网格约束

``` html
<f-dragger :grid="{ x: 40, y: 30 }">
    <u-block size="normal" color="primary" inline style="position: relative;">网格</u-block>
</f-dragger>
```

### 范围约束

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger :range="{ left: 0, top: 0, right: 200, bottom: 200 }">
            <u-block :class="$style.block" size="normal" color="primary" inline>object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent">
            <u-block :class="$style.block" size="normal" color="primary" inline>offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}
</style>
```

### 范围约束模式

``` vue
<template>
<div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="inside">
            <u-block :class="$style.block" size="normal" color="primary" inline>object</u-block>
        </f-dragger>
    </div>
    <div :class="$style.well">
        <f-dragger range="offset-parent" range-mode="center">
            <u-block :class="$style.block" range-mode="center" size="normal" color="primary" inline>offset-parent</u-block>
        </f-dragger>
    </div>
</div>
</template>

<style module>
.well {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 300px;
    height: 300px;
    padding: 20px;
    background: #f4f4f4;
    border: 2px solid #ccc;
}

.block {
    position: absolute;
}

.block[range-mode="center"] {
    margin-left: -32px;
    margin-top: -32px;
}
</style>
```
