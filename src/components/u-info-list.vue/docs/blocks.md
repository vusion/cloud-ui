### 基本用法

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="名称">张三</u-info-list-item>
        <u-info-list-item label="ID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="名称">张三</u-info-list-item>
        <u-info-list-item label="ID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 栅格分列

类似`<u-grid-layout>`组件，在`<u-info-list>`或`<u-info-list-group>`组件上使用`repeat`属性来定义栅格列数，用`span`属性来设置列跨越的栅格数。`repeat`默认为`3`列。

``` html
<u-info-list :repeat="2">
    <u-info-list-group title="基本信息">
        <u-info-list-item label="名称">张三</u-info-list-item>
        <u-info-list-item label="ID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
    <u-info-list-group title="基本信息">
        <u-info-list-item label="名称">张三</u-info-list-item>
        <u-info-list-item label="ID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 额外插槽

对于一些操作项，可以使用`extra`插槽添加在详情列表组的右上角。

``` html
<u-info-list>
    <u-info-list-group title="基本信息">
        <template #extra>
            <u-link>设置</u-link>
        </template>
        <u-info-list-item label="名称">张三</u-info-list-item>
        <u-info-list-item label="ID">152f36a3cfff4572a3a35</u-info-list-item>
        <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
    </u-info-list-group>
</u-info-list>
```
