``` html
<u-table-view :data-source="data.tableView">
    <u-table-view-column
        title="用户名"
        field="name"
        width="20%">
    </u-table-view-column>
    <u-table-view-column
        title="手机号码"
        field="phone"
        width="20%">
    </u-table-view-column>
    <u-table-view-column
        title="地址"
        field="address">
    </u-table-view-column>
    <u-table-view-column
        title="最近登录时间"
        field="loginTime"
        formatter="placeholder | date"
        width="20%">
    </u-table-view-column>
</u-table-view>
```