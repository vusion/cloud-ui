# 可变化宽度表格 ResizeTable

## 示例
### 基本形式

``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" icon="help" icon-content="提示" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
    }
};
</script>
```

### 加载状态表格
``` vue
<template>
    <u-resize-table :data="tdata" :loading="loading" load-text="加载中…">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }],
            loading: true,
        };
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    },
};
</script>
```

### 空数据状态表格
``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female" ></u-resize-table-column>
        <div slot="no-data-text">
            暂无数据，你可以手动添加数据，请点击<u-link>这里！</u-link>
        </div>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [],
        };
    },
};
</script>
```

### 带复选框的表格
``` vue
<template>
    <u-resize-table :data="tdata" @selection-change="selectionChange" :all-checked.sync="allChecked">
        <u-resize-table-column type="selection"></u-resize-table-column>
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" max-width="180" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: '',
            allChecked: false,
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        selectionChange(value) {
            console.log(value);
        },
    },
    watch: {
        allChecked(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 自定义表格内容显示
``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="姓名" label="name" :min-width="86">
            <template slot-scope="scope">
                <u-status-icon name="success"></u-status-icon>
                <span style="display:inline-block;margin-left: 10px;overflow: hidden;max-width: calc(100% - 42px);text-overflow: ellipsis;white-space: nowrap;vertical-align: middle;">{{ scope.row.name}}</span>
            </template>
        </u-resize-table-column>
        <u-resize-table-column title="日期" label="date" type="time"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address">
            <template slot-scope="scope">
                {{ scope.row.address && scope.row.address.slice(0, 10) }}
            </template>
        </u-resize-table-column>
        <u-resize-table-column title="操作" label="female" min-width="135">
            <template slot-scope="scope">
                <u-link-list>
                    <u-link-list-item>设置</u-link-list-item>
                    <u-link-list-item>删除</u-link-list-item>
                    <u-link-list-item>更改规格</u-link-list-item>
                    <u-link-list-item>转包年包月</u-link-list-item>
                </u-link-list>
            </template>
        </u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1533427200000,
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: 'male',
            }, {
                date: 1533340800000,
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
            }, {
                date: 1533254400000,
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: 'female',
            }, {
                date: 1533168000000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: 'male',
            }, {
                date: 1533081600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'female',
            } ],
            value: ''
        };
    },
    methods: {
        filter(value, row, column) {
            console.log(value, row, column);
            if (value === 'male')
                return '男';
            else if(value === 'female')
                return '女';
        },
    }
};
</script>
```

### 排序表格
``` vue
<template>
    <u-resize-table :data="tdata" :default-sort="defaultSort" @sort-change="sortChange">
        <u-resize-table-column title="日期" type="sortable" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" type="sortable" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" max-width="180" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: '',
            defaultSort: {
                title: '姓名',
                order: 'desc',
            }
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        sortChange(value) {
            console.log(value);
        },
    }
};
</script>
```

### 过滤表格
``` vue
<template>
    <u-resize-table :data="tdata" @filter-change="filterChange">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" max-width="180" type="filter" :options="options" :value="value" filter-max-width="180px" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        filterChange(value) {
            console.log(value);
        },
    }
};
</script>
```

### 扩展显示表格
``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
        <u-resize-table-column title="日期" label="date" type="time"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female" :filter="filter"></u-resize-table-column>
        <u-resize-table-column title="详细信息" expand-class="infoIcon" type="expand" label="listlogs" default-text="" expand-strict expand-icon="up-down">
            <template slot="expandContent" slot-scope="scope">
                <div>
                    <p v-for="item in scope.row.listlogs" v-text="item"></p>
                </div>
            </template>
        </u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1533427200000,
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: 'male',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            }, {
                date: 1533340800000,
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            }, {
                date: 1533254400000,
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: 'female',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            }, {
                date: 1533168000000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: 'male',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            }, {
                date: 1533081600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'female',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            } ],
            value: ''
        };
    },
    methods: {
        filter(value, row, column) {
            console.log(value, row, column);
            if (value === 'male')
                return '男';
            else if(value === 'female')
                return '女';
        },
    }
};
</script>
```


### 自定义表头
``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="姓名" label="name">
            <template slot="headerTitle">
            <u-tooltip content="身份证上的姓名">
                <span>姓名</span>
            </u-tooltip>
            </template>
        </u-resize-table-column>
        <u-resize-table-column title="日期" label="date" type="time"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female" :filter="filter"></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1533427200000,
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: 'male',
            }, {
                date: 1533340800000,
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
            }, {
                date: 1533254400000,
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: 'female',
            }, {
                date: 1533168000000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: 'male',
            }, {
                date: 1533081600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'female',
            } ],
            value: ''
        };
    },
    methods: {
        filter(value, row, column) {
            console.log(value, row, column);
            if (value === 'male')
                return '男';
            else if(value === 'female')
                return '女';
        },
    }
};
</script>
```

### 表格显示/隐藏切换
``` vue
<template>
    <div>
        <u-button @click="toggle">toggle</u-button>
        <u-resize-table style="marginTop: 20px;" :data="tdata" :visible="visible">
            <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
            <u-resize-table-column title="日期" label="date" type="time"></u-resize-table-column>
            <u-resize-table-column title="地址" label="address"></u-resize-table-column>
            <u-resize-table-column title="性别" label="female" :filter="filter"></u-resize-table-column>
        </u-resize-table>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1533427200000,
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: 'male',
            }, {
                date: 1533340800000,
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
            }, {
                date: 1533254400000,
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: 'female',
            }, {
                date: 1533168000000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: 'male',
            }, {
                date: 1533081600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'female',
            } ],
            value: '',
            visible: false,
        };
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        filter(value, row, column) {
            console.log(value, row, column);
            if (value === 'male')
                return '男';
            else if(value === 'female')
                return '女';
        },
    }
};
</script>
```

### 指定显示行数据表格

``` vue
<template>
    <u-resize-table :data="tdata" pattern="limit" :limit="5">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" type="filter" :options="options" :value="value" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            } ],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
    }
};
</script>
```

### 指定表格高度

``` vue
<template>
    <u-resize-table :data="tdata" max-height="300">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" type="filter" :options="options" :value="value" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '浙江省杭州市滨江区网商路 599号 11111111111111111111111111111111',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '女',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
            } ],
            options: [
                {
                    text: '全部',
                    value: '',
                },
                {
                    text: '男',
                    value: '男'
                },
                {
                    text: '女',
                    value: '女'
                },
            ],
            value: ''
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
    }
};
</script>
```

## ResizeTable API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | '' | 表格默认要显示的数据 |
| allChecked.sync | Boolean | false | 默认是否全部选中 |
| defaultSort | Object | '' | 默认的排序列和顺序值，其title属性指定默认排序的列，order指定默认排序的顺序 |
| noDataText | String | '' | 当data为空数组时，展示的信息 |
| loading| Boolean | false | 是否展示加载中的状态信息 |
| loadText| String | `` | 加载中的文字信息提示 |
| showHeader| Boolean | `true` | 是否展示表格头 |
| rowClassName | Function | `` | 给表格行添加自定义class函数，第一个参数表示索引，即在第几行中，第二个参数是表格当前行数据
| height| Integer/String |  | 表格组件的高度 |
| maxHeight| Integer/String |  | 表格组件的最大高度 |
| minHeight| Integer/String |  | 表格组件的最小高度 |
| visible| Boolean | true | 默认显示 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置整个表格 |
| color | String | `` | 值为light的时，表格头背景是#fff |
| expandPattern | String | `'toggle'` | 规定expand中icon每次展开数量的限制，默认只能展开一个，传入`'normal'`可取消此限制 |
| ellipsis | Boolean | `false` | 是否换行，默认换行，值为true则开启不换行，超出部分显示为省略号 |
| sortMethod | Function | `` | 自定义排序方法 |
| sortRemoteMethod | Funtion| `` | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod | Function | `` | 自定义过滤方法 |
### Slots

#### (default)

插入`<u-resize-table-column>`子组件。


#### limit-text

在pattern属性值为limit时，数据的数目大于limit的值时默认在表格最后一行显示的提示内容

#### all-text

在pattern属性值为limit时，显示所有数据后默认在表格最后一行显示的提示内容

#### no-data-text

数据为空时自定义显示文本

### Events
#### @sort-change

点击排序标签触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | 当前列column的实例，含有当前列的所有信息，实质是table-view-column实例 |
| $event.label | String  | 当前列的标签值  |
| $event.order | String  | 当前列排序值： 'asc'或'desc'  |

#### @filter-change

点击过滤标签触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | 当前列column的实例，含有当前列的所有信息，实质是table-view-column实例 |
| $event.value | String  | 选中的标签值  |
| $event.index | Number  | 当前列的索引值  |


#### @selection-change

点击checkbox触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array | 选中的行的数据集合 |

#### @row-click

点击表格行触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | 选中的行的数据集合 |
| $event.index | Int | 行数据所在的索引值 |

### @toggle-expand
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | 选中的行的数据索引 |
| $event.direction | String | icon的方向，向哪个方向展开或收起 |
| $event.row | Object | 选中行的数据 |

## TableViewColumn API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `` | 列的标题 |
| options | Array\{name, value} | `` | 过滤项列表 |
| value | String | `` | 默认过滤项选中的值 |
| label | String | `` | 对象data中对象的属性 |
| type | String | `` | 可选值有`'selection'`,`'expand'`,`'time'`,`'sortable'`,`'filter'`,,值为`'selection'`,表示此列是否是可选择的， 对于日期类型的值可以设置值为`'time'`,配合timeFormat属性，转换成想要的日期格式, `'expand'`表示在当前行出现icon标识，点击icon当前行下新增新一行数据 |
| width | String | `` | 是指列的宽度值 |
| filter | Function | `` | 自定义列的值 |
| sortMethod | Function | `` | 自定义排序方法 |
| sortRemoteMethod | Funtion| `` | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod | Function | `` | 自定义过滤方法 |
| timeFormat | String | `'YYYY-MM-DD HH:mm:ss'` | 定义type值为time时，返回的指定日期格式的值 |
| expandIcon | String | `'right-down'` | icon的图标展开方向，提供两种类型，一种是默认向右点击向下`'right-down'`，另一种是默认向下点击向上`'up-down'` |
| expandStrict | Boolean | `false` | 开启expand严格匹配模式， 只有对应的label字段有值才显示icon |
| expandLabel | String | `` | expand模式下使用，当出现组合形式的时候，使用此字段指定icon展开依赖的属性字段 |
| expandClass | String | `` | 定义expand的icon的样式 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置某一列的显示 |
| headClass | String | `''` | 给表格头部`'th'`添加自定义`'class'`名称，方便对表格头部自定义样式 |

### Slots

 | Slot | Description |
 | ---- | ----------- |
 | headerTitle | 插入自定义`th`标签内容 |
 | expandContent | 插入自定义icon展开的内容 |
