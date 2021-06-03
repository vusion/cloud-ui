### 基本用法

``` html
<u-timeline>
    <u-timeline-item>提交 2020-01-20</u-timeline-item>
    <u-timeline-item>预审核 2020-01-21</u-timeline-item>
    <u-timeline-item>
        <div>权限 2020-01-22</div>
        <div>审批人：张三</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>财务 2020-01-22</div>
        <div>审批人：李四</div>
    </u-timeline-item>
    <u-timeline-item>完成</u-timeline-item>
</u-timeline>
```

### 修改颜色

``` vue
<template>
<u-timeline>
    <u-timeline-item color="black">
        <div>black</div>
        <div :class="$style.time">2020-01-20</div>
    </u-timeline-item>
    <u-timeline-item color="success">
        <div>success</div>
        <div :class="$style.time">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item color="warning">
        <div>warning</div>
        <div :class="$style.time">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item color="error">
        <div>error</div>
        <div :class="$style.time">2020-01-22</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>默认颜色: primary</div>
        <div :class="$style.time">2020-01-23</div>
    </u-timeline-item>
</u-timeline>
</template>
<style module>
.time {
    font-size: var(--font-size-small);
    color: var(--color-light)
}
</style>
```

### 自定义图标

``` html
<u-timeline>
    <u-timeline-item>
        <div slot="dot" style="width: 0; height: 0; border: 8px solid transparent; border-top: 8px solid blue; position: relative; top: 4px;" ></div>
        <div>开始</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>处理中</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>完成</div>
    </u-timeline-item>
</u-timeline>
```

### 使用label单独展示时间

``` vue
<template>
<u-timeline mode="label">
    <u-timeline-item label="2020-01-20">
        服务测试数据1
        <div :class="$style.sub">这是一段测试文案1</div>
    </u-timeline-item>
    <u-timeline-item label="2020-01-21">
        服务测试数据2
        <div :class="$style.sub">这是一段测试文案2</div>
    </u-timeline-item>
    <u-timeline-item label="2020-01-22">
        服务测试数据3
        <div :class="$style.sub">这是一段测试文案3</div>
    </u-timeline-item>
    <u-timeline-item label="2020-01-23">
        服务测试数据4
        <div :class="$style.sub">这是一段测试文案4</div>
    </u-timeline-item>
    <u-timeline-item label="2020-01-24">
        服务测试数据5
        <div :class="$style.sub">这是一段测试文案5</div>
    </u-timeline-item>
</u-timeline>
</template>
<style module>
.sub {
    font-size: var(--font-size-small);
    color: var(--color-light)
}
</style>
```

### 交替展示

``` html
<u-timeline mode="alternate">
    <u-timeline-item position="left">
        2020-01-20 注册
    </u-timeline-item>
    <u-timeline-item position="right">
        2020-01-21 验证
    </u-timeline-item>
    <u-timeline-item position="left">
        2020-01-22 审核
    </u-timeline-item>
    <u-timeline-item position="right">
        2020-01-23 修改
    </u-timeline-item>
    <u-timeline-item position="left">
        2020-01-24 完成
    </u-timeline-item>
</u-timeline>
```

### 幽灵节点

``` html
<u-timeline pending>
    <u-timeline-item>
        <div>提交审批</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-20</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>验证通过</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>预审核通过</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item>
        人工审核
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-22</div>
    </u-timeline-item>
    <u-timeline-item>
        处理中
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-22</div>
    </u-timeline-item>
</u-timeline>
```
