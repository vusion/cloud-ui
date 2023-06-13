### 基本用法

步骤从`0`开始

```html
<u-selectable-steps :value="1">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 自定义标题

``` html
<u-selectable-steps :value="1">
    <u-selectable-step>
        <span slot="title">Step <u-label>1</u-label></span>
        Content1
    </u-selectable-step>
    <u-selectable-step>
        <span slot="title">Step <u-label>2</u-label></span>
        Content2
    </u-selectable-step>
    <u-selectable-step>
        <span slot="title">Step <u-label>3</u-label></span>
        Content3
    </u-selectable-step>
</u-selectable-steps>
```

### 宽度自适应

``` html
<u-selectable-steps :value="1" size="auto">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
    <u-selectable-step title="Step4">Content4</u-selectable-step>
    <u-selectable-step title="Step5">Content5</u-selectable-step>
</u-selectable-steps>
```

### 禁用

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2" disabled>Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 只读

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Readonly" readonly>Readonly</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```

### 指定状态

``` html
<u-selectable-steps :value="0" :readonly="false" size="auto">
    <u-selectable-step title="Step1" status="passed" >Content1</u-selectable-step>
    <u-selectable-step title="Step2" status="failed" >Content2</u-selectable-step>
    <u-selectable-step title="Step3" status="selected" >Content3</u-selectable-step>
    <u-selectable-step title="Step4" status="pending" >Content4</u-selectable-step>
</u-selectable-steps>
```

### 自定义图标

```html
<u-selectable-steps :value="1">
    <u-selectable-step title="Step1" icon="find">Content1</u-selectable-step>
    <u-selectable-step title="Step2" icon="task-done">Content2</u-selectable-step>
    <u-selectable-step title="Step3" icon="notice">Content3</u-selectable-step>
</u-selectable-steps>
```

### 竖向步骤条

``` html
<u-selectable-steps :value="0" direction="vertical">
    <u-selectable-step title="Step1">Content1</u-selectable-step>
    <u-selectable-step title="Step2">Content2</u-selectable-step>
    <u-selectable-step title="Step3">Content3</u-selectable-step>
</u-selectable-steps>
```
