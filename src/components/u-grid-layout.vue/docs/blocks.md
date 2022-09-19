### 3列样式（8:8:8）

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="8"></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 4列样式（2:4:8:10）

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2"></u-grid-layout-column>
        <u-grid-layout-column :span="4"></u-grid-layout-column>
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="10"></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 2列样式（8:16）

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="8"></u-grid-layout-column>
        <u-grid-layout-column :span="16"></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
