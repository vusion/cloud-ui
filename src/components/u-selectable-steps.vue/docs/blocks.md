### 基本用法

步骤从`0`开始

```html
<u-selectable-steps :value="1">
    <u-selectable-step title="Step1"></u-selectable-step>
    <u-selectable-step title="Step2"></u-selectable-step>
    <u-selectable-step title="Step3"></u-selectable-step>
</u-selectable-steps>
```

### 禁用

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step title="Step1"></u-selectable-step>
    <u-selectable-step title="Step2" disabled></u-selectable-step>
    <u-selectable-step title="Step3"></u-selectable-step>
</u-selectable-steps>
```
