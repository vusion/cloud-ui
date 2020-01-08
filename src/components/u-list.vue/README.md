<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UList 列表

**UI 组件**, **块级展示**

对列表样式做了简单的修饰。如果需要选择、分页等更多的功能，请使用 [UListView](../u-list-view)。

## 示例
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

## UList API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| type | string |  |  | 列表前缀，如：`'disc'`, `'circle'`, `'decimal'`，与原生样式属性`list-style-type`的值对应。 |
| line | string |  |  | 列表行之间显示分隔线条。可选值：`'both'`, `'horizontal'`, `'vertical'` |
| striped | boolean |  | `false` | 列表行是否按斑马线条纹显示 |
| hover | boolean |  | `false` | 列表行在悬浮时是否高亮显示 |

### Slots

#### (default)

在表格中插入`<u-list-item>`标签。

## UListItem API

暂无