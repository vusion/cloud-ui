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
        <template #title>
            <span >Step <u-label>1</u-label></span>
        </template>
        Content1
    </u-selectable-step>
    <u-selectable-step>
        <template #title>
            <span >Step <u-label>2</u-label></span>
        </template>
        Content2
    </u-selectable-step>
    <u-selectable-step>
        <template #title>
            <span >Step <u-label>3</u-label></span>
        </template>
        Content3
    </u-selectable-step>
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
