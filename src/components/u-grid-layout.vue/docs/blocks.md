### 基本用法

定义栅格系统，用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2"></u-grid-layout-column>
        <u-grid-layout-column :span="4"></u-grid-layout-column>
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="10"></u-grid-layout-column>
    </u-grid-layout-row>
	<u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2"></u-grid-layout-column>
        <u-grid-layout-column :span="4"></u-grid-layout-column>
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="10"></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 列偏移

```html
<u-grid-layout>
    <u-grid-layout-row :repeat="12">
        <u-grid-layout-column :span="4"></u-grid-layout-column>
        <u-grid-layout-column :span="4" :offset="4"></u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row :repeat="12">
        <u-grid-layout-column :span="3" :offset="3"></u-grid-layout-column>
        <u-grid-layout-column :span="3" :offset="3"></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
