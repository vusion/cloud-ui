``` html
 <u-form-table-view :data="data.formTableView">
    <u-form-table-view-column title="URL" width="20%">
        <template slot="cell" slot-scope="{ item }">
            {{ item.url }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="20%">
        <template slot="cell" slot-scope="{ item }">
            {{ item.service }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template slot="cell" slot-scope="{ item }">
            {{ item.port }}
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template slot="cell" slot-scope="{ item }">
            {{ item.description }}
        </template>
    </u-form-table-view-column>
</u-form-table-view>
```