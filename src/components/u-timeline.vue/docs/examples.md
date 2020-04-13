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

``` html
<u-timeline>
    <u-timeline-item color="black">
        <div>black</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-20</div>
    </u-timeline-item>
    <u-timeline-item color="success">
        <div>success</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item color="warning">
        <div>warning</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-21</div>
    </u-timeline-item>
    <u-timeline-item color="error">
        <div>error</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-22</div>
    </u-timeline-item>
    <u-timeline-item>
        <div>默认颜色: primary</div>
        <div style="font-size: var(--font-size-small); color: var(--color-light)">2020-01-23</div>
    </u-timeline-item>
</u-timeline>
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

### 交替展示

``` html
<u-timeline alternate>
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
