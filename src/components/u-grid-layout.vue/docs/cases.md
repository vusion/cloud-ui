``` html
<u-grid-layout>
	<u-grid-layout-row :repeat="4">
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="1"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
<u-table-view :data-source="[]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
<u-grid-layout>
	<u-grid-layout-row :repeat="12">
		<u-grid-layout-column :span="12"><u-block>none</u-block></u-grid-layout-column>
		<u-grid-layout-column :span="12"><u-block>none</u-block></u-grid-layout-column>
	</u-grid-layout-row>
</u-grid-layout>
```