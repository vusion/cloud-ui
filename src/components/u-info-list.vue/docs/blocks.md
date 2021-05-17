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
