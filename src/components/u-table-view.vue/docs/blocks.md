### 普通数据表格

``` html
<u-table-view :data-source="[{name: '张三', phone: '13000000000', address: '浙江省杭州市滨江区'}]">
    <u-table-view-column title="用户名" width="20%">
        <template #cell="scope">
            {{ scope.item.name }}
        </template>
    </u-table-view-column>
    <u-table-view-column title="手机号码" width="20%">
        <template #cell="scope">
            {{ scope.item.phone }}
        </template>
    </u-table-view-column>
    <u-table-view-column title="地址" >
        <template #cell="scope">
            {{ scope.item.address }}
        </template>
    </u-table-view-column>
</u-table-view>
```
