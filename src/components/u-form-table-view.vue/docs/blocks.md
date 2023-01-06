### 基本用法

``` html
<u-form-table-view :data="[{
    url: 'xxx',
    service: 'abc',
    port: 8000,
    description: '',
}, {
    url: 'xxx',
    service: 'abc',
    port: 8000,
    description: '',
}]">
    <u-form-table-view-column title="URL" width="20%">
        <template #cell="current">
            {{ scope.item.url }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%">
        <template #cell="current">
            {{ scope.item.service }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template #cell="current">
            {{ scope.item.port }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template #cell="current">
            {{ scope.item.description }}
        </template>
    </u-form-table-view-column>
</u-form-table-view>
```
