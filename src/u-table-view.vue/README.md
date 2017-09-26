# 表格（Table）

## 示例
### 基本形式



### demo1 排序和格式化
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name" :formatter="formatter"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
        tdata: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王大虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '天王盖地虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '小鸡炖蘑菇',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        }
    }
};
</script>
```

### demo2 自定义排序方法
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="姓名" label="name"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
        tdata: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王大虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '天王盖地虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '小鸡炖蘑菇',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
    },
    methods: {
        sortMethod(a, b) {
            let va = new Date(a).getTime();
            let vb = new Date(b).getTime();
            if (va -vb < 0)
                return true;
            else
                return false;
        }
    }
};
</script>
```

### demo3 全选
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column type="selection"></u-table-view-column>
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
        tdata: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2016-05-04',
            name: '王大虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '天王盖地虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '小鸡炖蘑菇',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        }
    }
};
</script>
```

### demo4 select
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
        <u-table-view-column title="性别" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
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
                value: '男'
            },
            {
                name: '女',
                value: '女'
            },
        ],
        value: ''
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
    }
};
</script>
```
### demo5 作用域插槽方式
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
        <u-table-view-column title="性别" width="30%" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
        <u-table-view-column title="占比">
            <template scope="scope">
                <u-button @click="click(scope.row)">配置</u-button>
            </template>
        </u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
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
                value: '男'
            },
            {
                name: '女',
                value: '女'
            },
        ],
        value: ''
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
        }
    }
};
</script>
```


