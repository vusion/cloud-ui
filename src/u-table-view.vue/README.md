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
