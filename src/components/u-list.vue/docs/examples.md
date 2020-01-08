### 基本用法

``` html
<u-list>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### 列表前缀

添加`type`属性，可以快速设置列表前缀。

``` html
<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-list type="disc">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-list type="circle">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-list type="decimal">
                <u-list-item>List Item 1</u-list-item>
                <u-list-item>List Item 2</u-list-item>
                <u-list-item>List Item 3</u-list-item>
                <u-list-item>List Item 4</u-list-item>
                <u-list-item>List Item 5</u-list-item>
            </u-list>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 列表线条

添加`line`属性，使列表各项之间由线条隔开。

``` html
<u-list line>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### 条纹展示

添加`striped`属性，使列表行具有斑马线条纹样式。

``` html
<u-list striped>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### 悬浮高亮

添加`hover`属性，使列表行在悬浮时能够高亮显示。

``` html
<u-list hover>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```

### 组合修饰

列表组件的修饰属性可以组合使用。

``` html
<u-list line hover striped>
    <u-list-item>List Item 1</u-list-item>
    <u-list-item>List Item 2</u-list-item>
    <u-list-item>List Item 3</u-list-item>
    <u-list-item>List Item 4</u-list-item>
    <u-list-item>List Item 5</u-list-item>
</u-list>
```
