# 表格 TableView

## 示例
### 基本形式

layout布局方式，支持auto,fixed两种布局，默认是fixed布局, auto布局一个缺点是数据发生变化各列对应的宽度可能发生变化，取决于内容宽度，推荐使用fixed布局
``` vue
<template>
    <div>
        <u-table-view :data="tdata" layout="auto" border>
            <u-table-view-column type="expand" title="序列" default-text="">
                <template slot="expandContent">
                    <span>11</span>
                </template>
            </u-table-view-column>
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
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
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

默认显示指定limit条行数据，pattern属性设置为limit值即可
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border pattern="limit" :limit="4">
            <u-table-view-column type="expand" default-text="">
                <template slot="expandContent">
                    <span>11</span>
                </template>
            </u-table-view-column>
            <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column ellipsis title="地址" label="address" sortable>
                <template slot-scope="scope">
                    {{scope.row.address}}
                </template>
            </u-table-view-column>
            <u-table-view-column title="性别" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
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


排序和格式化
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border max-height="400">
            <u-table-view-column label="date">
                <div slot="header-title">
                    日期
                </div>
            </u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="地址" label="address" width="200px" sortable></u-table-view-column>
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
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
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


自定义排序方法
``` vue
<template>
    <u-table-view :data="tdata" @sort-change="sortChange">
        <u-table-view-column type="expand" default-text="">
            <template slot="expandContent">
                <span>11</span>
            </template>
        </u-table-view-column>
        <u-table-view-column title="日期" label="date" sortable width="500" :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" width="50%"></u-table-view-column>
        <u-table-view-column title="地址" label="address" width="1000" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
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

删除选中行 对于type类型为selection的表格列，可以控制checkbox的选择状态，传入data中每个对象中属性selected属性表示默认是否处于选中状态，disabled表示是否可选择
``` vue
<template>
    <u-linear-layout direction="vertical">
            <u-button color="primary" style="width:160px;" :disabled="checkedData.length === 0" @click="delData">删除</u-button>
            <u-table-view :data="tdata" @selection-change="selectionChange($event)">
                <u-table-view-column type="selection"></u-table-view-column>
                <u-table-view-column title="日期" label="date" type="time"></u-table-view-column>
                <u-table-view-column title="姓名" label="name" ></u-table-view-column>
                <u-table-view-column title="地址" label="address" ></u-table-view-column>
            </u-table-view>
    </u-linear-layout>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1521551897133,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                selected: true,
            }, {
                date: 1521551897133,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                disabled: true,
            }, {
                date: 1521551897133,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: 1521551897133,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                disabled: true,
            }],
            allChecked: false,
            checkedData: [],
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
            this.checkedData = data;
        },
        delData() {
            let indexs = undefined;
            this.checkedData.forEach((item) => {
                this.tdata.some((checked, index) => {
                    if (item.name === checked.name) {
                        indexs = index;
                        return true;
                    }
                });
                if (indexs !== undefined)
                    this.tdata.splice(indexs, 1);
            });
            this.checkedData = [];
        },
    }
};
</script>
```

有标题的selection
``` vue
<template>
    <u-linear-layout direction="vertical">
            <u-table-view :data="tdata" @selection-change="selectionChange($event)">
                <u-table-view-column type="selection"></u-table-view-column>
                <u-table-view-column title="日期" label="date" type="time"></u-table-view-column>
                <u-table-view-column title="姓名" label="name" ></u-table-view-column>
                <u-table-view-column title="地址" label="address" ></u-table-view-column>
            </u-table-view>
    </u-linear-layout>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1521551897133,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                selected: true,
            }, {
                date: 1521551897133,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                disabled: true,
            }, {
                date: 1521551897133,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: 1521551897133,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                disabled: true,
            }],
            allChecked: false,
            checkedData: [],
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
            this.checkedData = data;
        },
    }
};
</script>
```

带有过滤数据功能的表格，如果要实现过滤异步加载数据，请监听`filter-change`方法，并发送异步请求获取数据，更改tdata即可
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
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
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
 作用域插槽方式
``` vue
<template>
    <div>
        <u-table-view :data="tdata" v-show="show">
            <u-table-view-column title="日期" width="20%" label="date" sortable :formatter="dateFormat"></u-table-view-column>
            <u-table-view-column title="姓名" width="10%" label="name" ></u-table-view-column>
            <u-table-view-column title="地址" width="15%" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="10%" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="20%" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="10%" label="address"></u-table-view-column>
            <u-table-view-column title="性别" width="15%" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
            <u-table-view-column title="占比" width="200">
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
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
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
            this.show = !this.show;
        }
    }
};
</script>
```

 loading 加载中的状态
``` vue
<template>
<div>
    <u-table-view :data="tdata" loading load-text="正在加载中…">
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
                address: '浙江省杭州市滨江区网商路 599号',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
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

data为空数组自定义显示文本
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

### 对于表格内容过多的情况，提供以下两种解决方案，可以任选一种合适的方式使用

表格行可展开
使用场景：表格的内容过多，展示不下，需要注意的是expand中自定义的内容会受到表格添加的样式对其产生的影响，比如说不换行，居中等，如果不是需要的效果，需要自己自定义消除父元素对其自定义元素内容样式的影响
``` vue
<template>
    <div>
        <u-table-view :data="tdata">
            <u-table-view-column type="expand" default-text="">
                <template slot="expandContent" slot-scope="scope">
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
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
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
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
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

固定左右列
使用场景：表格的内容过多，展示不下，可以通过制定表格的宽度和单元列的宽度来展示
``` vue
<template>
    <div>
        <u-table-view :data="tdata" width="800" height="400" border>
            <u-table-view-column width="200" fixed="left" title="日期" label="date" sortable type="time" time-format="YYYY-MM-DD"></u-table-view-column>
            <u-table-view-column title="姓名" width="200" label="name" ></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="地址" width="200" label="address"></u-table-view-column>
            <u-table-view-column title="性别" width="200" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
            <u-table-view-column title="操作" fixed="right" width="150">
                <template slot-scope="scope">
                    <u-button @click="click(scope.row)">配置</u-button>
                </template>
            </u-table-view-column>
            <div slot="no-data-text">
                <span style="margin-right:10px">暂无数据,</span>
                <u-link>请刷新页面</u-link>
            </div>
        </u-table-view>
        <u-modal :visible.sync="visible">
            <div>
                <span>{{current.name}}</span>
                <span style="margin-left:10px;">{{current.address}}</span>
            </div>
        </u-modal>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            },
            {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            },
            {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            },
            {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            },
            {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            },
        ],
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

### expand 的高级用法
默认只会展开一个icon中的内容，如果不想有此限制，请给`u-table-view`传入`expandPattern`属性，只要值不等于`'toggle'`就可以，建议传入`'normal'`
```vue
<template>
    <u-table-view :show-header="false" expand-pattern="normal" :data="tdata" :row-class-name="rowClassName" @toggle-expand="toggleExpand" border>
        <u-table-view-column title="日期" label="date"></u-table-view-column>
        <u-table-view-column title="详细信息" label="info"></u-table-view-column>
        <u-table-view-column title="icon" expand-class="infoIcon" type="expand" label="listlogs" default-text="" expand-strict expand-icon="up-down">
            <template slot="expandContent" slot-scope="scope">
                <div>
                    <p v-for="item in scope.row.listlogs" v-text="item"></p>
                </div>
            </template>
        </u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data() {
        return {
            tdata:  [
                {
                    date: '2018-04-19 14:54:02',
                    info: '创建实例完成',
                    listlogs:[
                        '2018-04-19 14:52:49实例开始创建..',
                        '2018-04-19 14:52:49云主机开始创建...',
                        '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-04-19 14:53:20云硬盘开始创建...',
                    ],
                },
                {
                    date: '2018-05-19 14:54:02',
                    info: '创建实例完成',
                    listlogs:[
                        '2018-05-19 14:52:49实例开始创建..',
                        '2018-05-19 14:52:49云主机开始创建...',
                        '2018-05-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-05-19 14:53:20云硬盘开始创建...',
                    ],
                },
                {
                    date: '2018-06-19 14:54:02',
                    info: '创建实例完成',
                    listlogs:[
                        '2018-06-19 14:52:49实例开始创建..',
                        '2018-06-19 14:52:49云主机开始创建...',
                        '2018-06-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                        '2018-06-19 14:53:20云硬盘开始创建...',
                    ],
                },
                {
                    date: '2018-07-19 14:54:02',
                    info: '创建实例完成',
                },
            ],
            currentIndex: 0,
            direction: '',        }
    },
    methods: {
        toggleExpand(e) {
            // {index, direction, row} index 表示第几行，direction表示方向， row表示当前行的所有数据对象
            this.currentIndex = e.index;
            this.direction = e.direction;
        },
        rowClassName (index, row) {
            if (index === this.currentIndex && this.direction === 'down') {
                return 'infoRow';
            }
            return '';
        }
    }
}
</script>
<style module>
:global(.infoRow)[class]{
    background: #d8d8d8;
}
:global(.infoIcon){
    margin-left: 5px;
}
</style>
```

## TableView API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | '' | 表格默认要显示的数据 |
| title | String | '' | 表格的标题 |
| allChecked.sync | Boolean | false | 默认是否全部选中 |
| defaultSort | Object | '' | 默认的排序列和顺序值，其prop属性指定默认排序的列，order指定默认排序的顺序 |
| defaultFilter | Object | '' | 默认采用某列进行过滤，其title属性指定默认过滤的列，value指定默认过滤的值，在存在多个过滤列的时候可以使用此属性指定，当前只有一个列的时候可以不指定，默认会使用第一个filter列 |
| noDataText | String | '' | 当data为空数组时，展示的信息 |
| loading| Boolean | false | 是否展示加载中的状态信息 |
| loadText| String | `` | 加载中的文字信息提示 |
| showHeader| Boolean | `true` | 是否展示表格头 |
| rowClassName | Function | `` | 给表格行添加自定义class函数，第一个参数表示索引，即在第几行中，第二个参数是表格当前行数据 |
| height| Integer/String |  | 表格组件的高度 |
| maxHeight| Integer/String |  | 表格组件的最大高度 |
| minHeight| Integer/String |  | 表格组件的最小高度 |
| layout| String | fixed | 表格的布局方式, 可选值有fixed, auto两种 |
| visible| Boolean | true | 默认显示 |
| pattern| String | `'normal'` | 支持显示指定数目的数据，值设置为limit即可 |
| limit| String, Number | `5` | 在pattern属性值为limit时，默认显示数据的数目 |
| limitText| String | `'查看更多'` | 在pattern属性值为limit时，数据的数目大于limit的值时默认在表格最后一行显示的提示内容 |
| allText| String | `'收起'`| 在pattern属性值为limit时，显示所有数据后默认在表格最后一行显示的提示内容 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置整个表格 |
| color | String | `` | 值为light的时，表格头背景是#fff |
| forceFilter | Boolean | `true` | 数据发生变化是，存在数据过滤列，是否需要进行过滤，默认是需要的，但是异步获取的情况下，会出现死循环，需要将此值置为`false` |
| expandPattern | String | `'toggle'` | 规定expand中icon每次展开数量的限制，默认只能展开一个，传入`'normal'`可取消此限制 |
### Slots

#### (default)

插入`<u-table-view-column>`子组件。

#### title

自定义表格标题

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
| sortable | Boolean | `false` | 列是否可排序 |
| filter | Boolean | `false` | 列是否可过滤 |
| options | Array\{name, value} | `` | 过滤项列表 |
| value | String | `` | 默认过滤项选中的值 |
| label | String | `` | 对象data中对象的属性 |
| type | String | `` | 可选值有`'selection'`,`'expand'`,`'time'`,值为`'selection'`,表示此列是否是可选择的， 对于日期类型的值可以设置值为`'time'`,配合timeFormat属性，转换成想要的日期格式, `'expand'`表示在当前行出现icon标识，点击icon当前行下新增新一行数据 |
| label | String | `` | 对象data中对象的属性 |
| width | String | `` | 是指列的宽度值 |
| formatter | Function | `` | 自定义列的值 |
| sortMethod | Function | `` | 自定义排序方法 |
| sortRemoteMethod | Funtion| `` | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod | Function | `` | 自定义过滤方法 |
| ellipsis | Boolean | `false` | 是否换行，默认换行，值为true则开启不换行，超出部分显示为省略号 |
| border | Boolean | `false` | 是否有边框，默认无 |
| timeFormat | String | `'YYYY-MM-DD HH:mm:ss'` | 定义type值为time时，返回的指定日期格式的值 |
| expandIcon | String | `'right-down'` | icon的图标展开方向，提供两种类型，一种是默认向右点击向下`'right-down'`，另一种是默认向下点击向上`'up-down'` |
| expandStrict | Boolean | `false` | 开启expand严格匹配模式， 只有对应的label字段有值才显示icon |
| expandLabel | String | `` | expand模式下使用，当出现组合形式的时候，使用此字段指定icon展开依赖的属性字段 |
| expandClass | String | `` | 定义expand的icon的样式 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置某一列的显示 |
| headClass | String | `''` | 给表格头部`'th'`添加自定义`'class'`名称，方便对表格头部自定义样式 |

### Slots

#### header-title

自定义表格`th`标签中的内容
