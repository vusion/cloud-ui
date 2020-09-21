### 基本用法

定义栅格系统，用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2"><u-label display="block">2/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="4"><u-label display="block">4/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="8"><u-label display="block">8/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="10"><u-label display="block">10/24</u-label></u-grid-layout-column>
    </u-grid-layout-row>
	<u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2"><u-label display="block">2/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="4"><u-label display="block">4/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="8"><u-label display="block">8/24</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="10"><u-label display="block">10/24</u-label></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 间隙

```html
<u-grid-layout gap="small normal">
    <u-grid-layout-row :repeat="4">
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
    </u-grid-layout-row>
	<u-grid-layout-row :repeat="4">
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="1"><u-label display="block">small normal</u-label></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 列偏移

```html
<u-grid-layout>
    <u-grid-layout-row :repeat="12">
        <u-grid-layout-column :span="4"><u-label display="block">4/12</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="4" :offset="4"><u-label display="block">4/12 offset=4</u-label></u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row :repeat="12">
        <u-grid-layout-column :span="3" :offset="3"><u-label display="block">3/12 offset=3</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="3" :offset="3"><u-label display="block">3/12 offset=3</u-label></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 列排序

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="10">
        <u-grid-layout-column :span="4" :push="6"><u-label display="block">4/10 push=6</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="6" :pull="4"><u-label display="block">6/10 pull=4</u-label></u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row :repeat="10">
        <u-grid-layout-column :span="2" :push="8"><u-label display="block">2/10 push=8</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="3" :push="3"><u-label display="block">3/10 push=5</u-label></u-grid-layout-column>
        <u-grid-layout-column :span="5" :pull="5"><u-label display="block">5/10 push=5</u-label></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```


