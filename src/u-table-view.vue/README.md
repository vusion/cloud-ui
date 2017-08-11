# 表格（Table）

## 示例
### 基本形式



### 方法
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-column title="日期" label="date" ></u-table-column>
        <u-table-column title="姓名" label="name" ></u-table-column>
        <u-table-column title="地址" label="address" ></u-table-column>
    </u-table-view>
</template>
<script>
export default {
    data: {
        tdata: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
    },
};
</script>
```
