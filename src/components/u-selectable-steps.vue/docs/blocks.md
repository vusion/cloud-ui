### 基本用法

步骤从`0`开始

```html
<u-selectable-steps :value="1">
    <u-selectable-step><template #title><u-text text="步骤1"></u-text></template></u-selectable-step>
    <u-selectable-step><template #title><u-text text="步骤2"></u-text></template></u-selectable-step>
    <u-selectable-step><template #title><u-text text="步骤3"></u-text></template></u-selectable-step>
</u-selectable-steps>
```

### 禁用

``` html
<u-selectable-steps :value="0" :readonly="false">
    <u-selectable-step><template #title><u-text text="步骤1"></u-text></template></u-selectable-step>
    <u-selectable-step disabled><template #title><u-text text="步骤2"></u-text></template></u-selectable-step>
    <u-selectable-step><template #title><u-text text="步骤3"></u-text></template></u-selectable-step>
</u-selectable-steps>
```
