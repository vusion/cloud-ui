### 基本用法

``` html
<u-info-list>
    <u-info-list-group>
        <template #title><u-text text="基本信息"></u-text></template>
        <u-info-list-item><template #label><u-text text="名称"></u-text></template><u-text text="张三"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="ID"></u-text></template><u-text text="152f36a3cfff4572a3a35"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="创建时间"></u-text></template><u-text text="2018-02-22"></u-text></u-info-list-item>
    </u-info-list-group>
    <u-info-list-group>
        <template #title><u-text text="基本信息"></u-text></template>
        <u-info-list-item><template #label><u-text text="名称"></u-text></template><u-text text="张三"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="ID"></u-text></template><u-text text="152f36a3cfff4572a3a35"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="创建时间"></u-text></template><u-text text="2018-02-22"></u-text></u-info-list-item>
    </u-info-list-group>
</u-info-list>
```

### 额外插槽

对于一些操作项，可以使用`extra`插槽添加在详情列表组的右上角。

``` html
<u-info-list>
    <u-info-list-group>
        <template #title><u-text text="基本信息"></u-text></template>
        <template #extra>
            <u-link>设置</u-link>
        </template>
        <u-info-list-item><template #label><u-text text="名称"></u-text></template><u-text text="张三"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="ID"></u-text></template><u-text text="152f36a3cfff4572a3a35"></u-text></u-info-list-item>
        <u-info-list-item><template #label><u-text text="创建时间"></u-text></template><u-text text="2018-02-22"></u-text></u-info-list-item>
    </u-info-list-group>
</u-info-list>
```
