<template>
    <div>
        <h1>高级列表</h1>
        <p>在一些复杂的场景下，基础的表单无法满足我们的需求，需要在基础表单的基础上添加一些自定义的功能或者样式</p>
        <div>
            <h3>作用域插槽的方式</h3>
            <u-table-view :data="tdata">
                <u-table-view-column title="日期" width="20%" label="date" sortable :formatter="dateFormat"></u-table-view-column>
                <u-table-view-column title="姓名" width="10%" label="name" ></u-table-view-column>
                <u-table-view-column title="地址" width="15%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="10%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="20%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="10%" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="性别" width="15%" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
                <u-table-view-column title="占比" width="200">
                    <template slot-scope="scope">
                        <u-button @click="click(scope.row)">配置</u-button>
                    </template>
                </u-table-view-column>
            </u-table-view>
            <u-modal :visible.sync="visible">
                <div>
                    <span>{{ current.name }}</span>
                    <span style="margin-left:10px;">{{ current.address }}</span>
                </div>
            </u-modal>
        </div>
        <!-- <div>
            <h3>表格行可展开</h3>
            <u-table-view :data="tdata">
                <u-table-view-column type="expand">
                    <template slot-scope="scope">
                        <u-info-list style="overflow:hidden;text-align:left;white-space:initial;">
                            <u-info-list-group title="基本信息">
                                <u-info-list-item label="VPC名称">{{scope.row.name}}</u-info-list-item>
                                <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                                <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
                                <u-info-list-item label="默认VPC">是</u-info-list-item>
                                <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
                            </u-info-list-group>
                            <u-info-list-group title="基本信息">
                                <u-info-list-item label="VPC名称">defaultVPC</u-info-list-item>
                                <u-info-list-item label="UUID">152f36a3cfff4572a3a35</u-info-list-item>
                                <u-info-list-item label="网段">10.3.0.4/16</u-info-list-item>
                                <u-info-list-item label="默认VPC">是</u-info-list-item>
                                <u-info-list-item label="创建时间">2018-02-22</u-info-list-item>
                            </u-info-list-group>
                        </u-info-list>
                    </template>
                </u-table-view-column>
                <u-table-view-column width="200" title="日期" label="date" sortable type="time" time-format="YYYY-MM-DD"></u-table-view-column>
                <u-table-view-column title="姓名" width="200" label="name" ></u-table-view-column>
                <u-table-view-column title="地址" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="地址" width="200" label="address" tooltip></u-table-view-column>
                <u-table-view-column title="性别" width="200" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
                <u-table-view-column title="操作" width="150">
                    <template slot-scope="scope">
                        <u-button @click="click(scope.row)">配置</u-button>
                    </template>
                </u-table-view-column>
            </u-table-view>
            <u-modal :visible.sync="visible">
                <div>
                    <span>{{current.name}}</span>
                    <span style="margin-left:10px;">{{current.address}}</span>
                </div>
            </u-modal>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            tdata: [{
                date: 1501977600000,
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '女',
                use: 12,
                total: 20,
            }],
            options: [
                {
                    name: '全部',
                    value: '',
                },
                {
                    name: '男',
                    value: '男',
                },
                {
                    name: '女',
                    value: '女',
                },
            ],
            value: '',
            current: {},
            visible: false,
            show: false,
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        dateFormat(row) {
            const value = row.date;
            const year = new Date(value).getFullYear();
            let month = new Date(value).getMonth() + 1;
            month += '';
            if (month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = true;
        },
    },
};
</script>

<style module>

</style>
