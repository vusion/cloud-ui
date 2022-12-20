### 基本用法

``` html
<u-collapse>
    <u-collapse-item><template #title><u-text text="面板1"></u-text></template>Content1</u-collapse-item>
    <u-collapse-item expanded><template #title><u-text text="面板2"></u-text></template>Content2</u-collapse-item>
    <u-collapse-item><template #title><u-text text="面板3"></u-text></template>Content3</u-collapse-item>
</u-collapse>
```

### 额外插槽

对于一些操作项，可以使用 `extra` 插槽添加在详情列表组的右上角。

``` html
<u-collapse show-extra-empty-slot>
    <u-collapse-item><template #title><u-text text="面板1"></u-text></template><template #extra><u-link>设置</u-link></template>Content1</u-collapse-item>
    <u-collapse-item expanded><template #title><u-text text="面板2"></u-text></template><template #extra></template>Content2</u-collapse-item>
    <u-collapse-item><template #title><u-text text="面板3"></u-text></template><template #extra></template>Content3</u-collapse-item>
</u-collapse>
```
