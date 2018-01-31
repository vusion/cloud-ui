# 表格 Table

## 示例
### 基本形式



### demo1 排序和格式化
``` vue
<template>
    <div>
        <u-table-view :data="tdata" height="300" border>
            <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="地址" label="address" sortable></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
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
            }, {
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
        };
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
    <u-table-view :data="tdata" @sort-change="sortChange">
        <u-table-view-column title="日期" label="date" sortable :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" width="200"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
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
        };
    },
    methods: {
        sortMethod(a, b) {
            let va = new Date(a).getTime();
            let vb = new Date(b).getTime();
            if (va -vb < 0)
                return true;
            else
                return false;
        },
        sortChange(value) {
            console.log(value.column, value.label, value.order);
        },
    }
};
</script>
```

### demo3 全选
``` vue
<template>
    <div>
        <u-button color="primary" @click="delData">删除</u-button>
        <u-table-view :data="tdata" :all-checked.sync="allChecked" @selection-change="selectionChange($event)">
            <u-table-view-column type="selection"></u-table-view-column>
            <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
            <u-table-view-column title="姓名" label="name" ></u-table-view-column>
            <u-table-view-column title="地址" label="address" ></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
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
            allChecked: false,
        };
    },
    watch: {
        allChecked(newValue) {
            console.log(newValue);
        },
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        selectionChange(data) {
            console.log(data);
        },
        delData() {
            this.tdata = [];
        },
    }
};
</script>
```

### demo4 select
``` vue
<template>
    <u-table-view :data="tdata" @filter-change="filterChange">
        <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
        <u-table-view-column title="性别" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
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
                    value: '男'
                },
                {
                    name: '女',
                    value: '女'
                },
            ],
            value: ''
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        filterChange(data){
            console.log(data);
        }
    }
};
</script>
```
### demo5 作用域插槽方式
``` vue
<template>
    <div>
        <u-table-view :data="tdata" v-show="show">
            <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
            <u-table-view-column title="姓名" label="name" ></u-table-view-column>
            <u-table-view-column title="地址" label="address" tooltip></u-table-view-column>
            <u-table-view-column title="性别" width="30%" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
            <u-table-view-column title="占比">
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
        <u-button @click="tableShow"> show </u-button>
    </div>
</template>
<script>
export default {
    data: function () {
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
                    value: '男'
                },
                {
                    name: '女',
                    value: '女'
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
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        },
        tableShow() {
            this.show = true;
        }
    }
};
</script>
```

### demo6 loading 加载中的状态
``` vue
<template>
<div>
    <u-table-view :data="tdata" loading>
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name" :formatter="formatter"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</div>
</template>
<script>
export default {
    data: function () {
        return {
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
        };
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

### demo7 data为空数组自定义显示文本
``` vue
<template>
<div>
    <u-table-view :data="tdata" >
        <u-table-view-column type="selection"></u-table-view-column>
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name" :formatter="formatter"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
        <div slot="no-data-text">
            <span style="margin-right:10px">暂无数据,</span>
            <u-link>请刷新页面</u-link>
        </div>
    </u-table-view>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [],
        };
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


## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | '' | 表格默认要显示的数据 |
| title | String | '' | 表格的标题 |
| allChecked.sync | Boolean | false | 默认是否全部选中 |
| defaultSort | Object | '' | 默认的排序列和顺序值，其prop属性指定默认排序的列，order指定默认排序的顺序 |
| noDataText | String | '' | 当data为空数组时，展示的信息 |
| loading| Boolean | false | 是否展示加载中的状态信息 |
| height| Integer/String |  | 表格组件的高度 |
| layout| String | fixed | 表格的布局方式, 可选值有fixed, auto两种 |

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

## TableViewItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `` | 列的标题 |
| sortable | Boolean | `false` | 列是否可排序 |
| filter | Boolean | `false` | 列是否可过滤 |
| options | Array\{name, value} | `` | 过滤项列表 |
| value | String | `` | 默认过滤项选中的值 |
| label | String | `` | 对象data中对象的属性 |
| type | String | `` | 表示此列是否是可选择的，如果是值为selection |
| label | String | `` | 对象data中对象的属性 |
| width | String | `` | 是指列的宽度值 |
| formatter | Function | `` | 自定义列的值 |
| sortMethod | Function | `` | 自定义排序方法 |
| filterMethod | Function | `` | 自定义过滤方法 |
| ellipsis | Boolean | `false` | 是否换行，默认换行，值为true则开启不换行，超出部分显示为省略号 |
| border | Boolean | `false` | 是否有边框，默认无 |