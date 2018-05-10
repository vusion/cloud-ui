<template>
    <div>
        <h1>基础表格</h1>
        <p>基础表格主要是用于信息的展示，以及一些常用的功能，如全选、排序、筛选等</p>
        <div>
            <u-table-view :data="tdata" border>
                <u-table-view-column type="selection"></u-table-view-column>
                <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
                <u-table-view-column :formatter="formatter" ellipsis title="姓名" label="name"></u-table-view-column>
                <u-table-view-column title="地址" label="address" sortable></u-table-view-column>
                <u-table-view-column :options="options" :value="value" :filter-method="filterMethod" title="性别" label="female" filter></u-table-view-column>
        </u-table-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '女',
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
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
    },
};
</script>
