### 基础按钮样式

``` html
<u-dropdown>
    <template #title><u-text text="下拉菜单"></u-text></template>
    <u-dropdown-item><u-text text="选项一"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项二"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项三"></u-text></u-dropdown-item>
</u-dropdown>
```

### 主要按钮样式

``` html
<u-dropdown type="primary">
    <template #title><u-text text="下拉按钮"></u-text></template>
    <u-dropdown-item><u-text text="选项一"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项二"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项三"></u-text></u-dropdown-item>
</u-dropdown>
```

### 更多按钮样式

``` html
<u-dropdown type="more">
    <template #title><u-text text="下拉按钮"></u-text></template>
    <u-dropdown-item><u-text text="选项一"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项二"></u-text></u-dropdown-item>
    <u-dropdown-item><u-text text="选项三"></u-text></u-dropdown-item>
</u-dropdown>
```

### 列表含图标样式

``` html
<u-dropdown>
    <template #title><u-text text="下拉按钮"></u-text></template>
    <u-dropdown-item icon="menu"><u-text text="选项一"></u-text></u-dropdown-item>
    <u-dropdown-item icon="menu"><u-text text="选项二"></u-text></u-dropdown-item>
    <u-dropdown-item icon="menu"><u-text text="选项三"></u-text></u-dropdown-item>
</u-dropdown>
```
