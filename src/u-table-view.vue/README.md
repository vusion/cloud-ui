# 表格视图 TableView

## 示例
### 基本形式
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border>
            <u-table-view-column title="日期" label="date"></u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name"></u-table-view-column>
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
    },
};
</script>
```


#### 默认显示limit条行数据

表格列`pattern`属性设置为`limit`值即可，可通过设置`limit`属性控制显示条数
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

#### 在u-subtabs中使用表格组件
``` vue
<template>
    <u-subtabs value="B">
        <u-subtab title="模板" value="A">
            <u-table-view :data="list">
                <u-table-view-column title="名称" width="30%" label="name">
                </u-table-view-column>
                <u-table-view-column ellipsis title="可用区" label="region"></u-table-view-column>
                <u-table-view-column title="IP" label="IP" width="200px" sortable></u-table-view-column>
            </u-table-view>
        </u-subtab>
        <u-subtab title="样式" value="B">
            <u-table-view :data="tdata">
                <u-table-view-column label="date">
                    <div slot="headerTitle">
                        日期
                    </div>
                </u-table-view-column>
                <u-table-view-column ellipsis title="姓名" label="name"></u-table-view-column>
                <u-table-view-column title="地址" label="address" width="200px" sortable></u-table-view-column>
            </u-table-view>
        </u-subtab>
    </u-subtabs>
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
            list: [
                {
                    name: 'dash',
                    region: '可用区 A',
                    IP: '私有网 10.18.203.14',
                },
                {
                    name: 'asdf',
                    region: '可用区 B',
                    IP: '私有网 10.177.0.2',
                },
                {
                    name: 'wert',
                    region: '可用区 A',
                    IP: '私有网 10.18.203.10',
                },
                {
                    name: 'fghh',
                    region: '可用区 A',
                    IP: '私有网 10.18.203.9',
                },
                {
                    name: 'zxcv',
                    region: '可用区 B',
                    IP: '私有网 10.18.203.8',
                },
            ],
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

#### 自定义列显/隐
在业务中经常出现某一列的显/隐是依据某个变量来的，为了保证列顺序不会出现变更，使用`visible`属性来控制列的显/隐
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border max-height="400">
            <u-table-view-column :visible="isShow" label="date">
                <div slot="headerTitle">
                    日期
                </div>
            </u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="地址" label="address" width="200px" sortable></u-table-view-column>
        </u-table-view>
        <u-button style="margin-top: 10px;" @click="toggle">toggle</u-button>
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
            isShow: false,
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        toggle() {
            this.isShow = !this.isShow;
        },
    }
};
</script>
```

#### 排序和格式化
某一列进行排序，需要为此列中设置`sortable`属性，自定义表头传入`slot='headerTitle'`，对于显示日期列，可通过给`u-table-view-column`标签添加`type="time"`属性来实现时间戳转换成YYYY-MM-DD HH:mm:ss格式，如果想自定义日期显示格式，可以通过传入`timeFormat="YYYY-MM-DD"`属性来自定义日期格式
``` vue
<template>
    <div>
        <u-table-view :data="tdata" border max-height="400">
            <u-table-view-column label="date">
                <div slot="headerTitle">
                    日期
                </div>
            </u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="地址" label="address" width="200" sortable></u-table-view-column>
            <u-table-view-column title="出生年月" label="date" type="time"></u-table-view-column>
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
                date: 728524800000,
            }, {
                date: '2016-05-04',
                name: '王大虎ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                date: 696902400000,
            }, {
                date: '2016-05-01',
                name: '天王盖地虎dddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                address: '浙江省杭州市滨江区 西可科技园',
                date: 665366400000,
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                date: 665366400000,
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                date: 665366400000,
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                date: 728524800000,
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                date: 696902400000,
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                date: 665366400000,
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                date: 760060800000,
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                date: 728524800000,
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                date: 665366400000,
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                date: 760060800000,
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


#### 自定义排序方法
同步方式自定义排序方法传入`sortMethod`属性即可，点击排序，异步获取后端数据需要传入`sortRemoteMethod`方法即可，点击排序会自动执行`sortRemoteMethod`方法，默认让某一列处于排序状态，需要在`u-table-view`上添加`defaultSort`属性即可
``` vue
<template>
    <u-table-view :data="tdata" :default-sort="defaultSort" @sort-change="sortChange">
        <u-table-view-column title="日期" label="date" sortable :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="姓名" label="name"></u-table-view-column>
        <u-table-view-column title="地址" label="address"></u-table-view-column>
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
            defaultSort: {
                title: '日期',
                order: 'asc',
            },
        };
    },
    methods: {
        sortMethod(a, b) {
            console.log(arguments)
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

#### 删除选中行

对于`type`类型为`selection`的表格列，可以控制`checkbox`的选择状态，传入`data`中每个对象中属性`selected`属性表示默认是否处于选中状态，`disabled`表示是否可选择

同时也可在表格列规定`headSelection`属性，来控制列表是否可以全选。

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

#### 有标题的selection
给`type='selection'`列正常添加`title`属性即可
``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-table-view :data="tdata" @selection-change="selectionChange($event)">
            <u-table-view-column type="selection" title="选择" width="100"></u-table-view-column>
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

#### 单选
自定义表格第一列是单选按钮，设置`type='radio'`即可
``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-table-view :data="tdata" show-color radio-value-field="id" :radioValue.sync="radioValue" @radio-change="selectionChange($event)">
            <u-table-view-column type="radio" ellipsis width="56"></u-table-view-column>
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
                id: '1',
            }, {
                date: 1521551897133,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                id: '2',
            }, {
                date: 1521551897133,
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                id: '3',
            }, {
                date: 1521551897133,
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园',
                id: '4',
            }],
            allChecked: false,
            checkedData: [],
            radioValue: '1',
        };
    },
    watch: {
        allChecked(newValue) {
            console.log(newValue);
        },
        radioValue(newValue) {
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

#### 过滤异步数据
带有过滤数据功能的表格，如果要实现过滤异步加载数据，请监听`filter-change`方法，并发送异步请求获取数据，更改`tdata`即可

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
#### 作用域插槽方式
为了满足自定义单元格的内容显示，可以通过作用域插槽的方式，在`u-table-view-column`标签内通过`slot-scope="{row}"`来获取当前行内容，自定义单元格内容显示
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
                <template slot-scope="{row}">
                    <u-button @click="click(row)">配置</u-button>
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

#### loading 加载中的状态
给组件设置`loading`属性即可显示加载状态，自定义加载文字传入`loadText`属性
``` vue
<template>
<div>
    <u-table-view :data="tdata" loading load-text="正在加载中…">
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园'
            }],
        };
    }
};
</script>
```

#### data为空数组自定义显示文本
自定义表格空态显示文案是通过属性`noDataText`或者自定义具名插槽`slot="no-data-text"`
``` vue
<template>
<div>
    <u-table-view :data="tdata" >
        <u-table-view-column type="selection"></u-table-view-column>
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name"></u-table-view-column>
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
    }
};
</script>
```

#### 表格行可展开

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
            <u-table-view-column title="日期" label="date" sortable type="time" time-format="YYYY-MM-DD"></u-table-view-column>
            <u-table-view-column title="姓名" label="name" ></u-table-view-column>
            <u-table-view-column title="性别" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
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

#### expand 的高级用法
默认只会展开一个icon中的内容，如果不想有此限制，请给`u-table-view`传入`expandPattern`属性，只要值不等于`'toggle'`就可以，建议传入`'normal'`，默认要展开第一行，需要在第一行数据中设置`'expanded'`值为`true`
```vue
<template>
    <u-table-view :show-header="false" expand-pattern="normal" :data="tdata" :row-class-name="rowClassName" @toggle-expand="toggleExpand" border>
        <u-table-view-column title="日期" label="date"></u-table-view-column>
        <u-table-view-column title="详细信息" column-class="info" label="info"></u-table-view-column>
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
                    expanded: true,
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
:global(.info){
    text-align: center;
}
</style>
```

#### 固定左右列

使用场景：表格列过多
``` vue
<template>
    <div>
        <u-table-view :data="tdata" width="800" border :loading="loading">
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
            tdata: [],
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
            loading: false,
        };
    },
    created() {
        this.loading= true;
        setTimeout(() => {
            this.loading = false;
            this.tdata= [
                {
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
            ]
        }, 2000);
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

#### 懒加载方式加载表格数据
``` vue
<template>
    <div>
        <u-table-view :data="tdata" max-height="500" @scroll-end="scrollEnd">
            <u-table-view-column title="日期" label="date"></u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name"></u-table-view-column>
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
    data() {
        return {
            tdata: [],
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
    created() {
        for(let i=0; i<20; i++) {
            this.tdata.push({
                date: 1503964800000,
                name: '令狐冲',
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            });
        }
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
        scrollEnd() {
            setTimeout(() => {
                for(let i=0;i<10;i++) {
                    this.tdata.push({
                        date: 1502236800000,
                        name: '方世玉',
                        address: '浙江省杭州市滨江区',
                        female: '女',
                        use: 12,
                        total: 20,
                    });
                }
            }, 1000);
        },
    },
};
</script>
```

#### 虚拟滚动方式加载表格数据
设置`pattern`属性的值为`'virtual'`, 如果不需要数据进行深拷贝，可以将`dataPattern`属性设置为`'normal'`
``` vue
<template>
    <div>
        <u-table-view :data="tdata" max-height="500" data-pattern="normal" pattern="virtual">
            <u-table-view-column title="日期" label="date"></u-table-view-column>
            <u-table-view-column ellipsis title="姓名" label="name"></u-table-view-column>
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
    data() {
        return {
            tdata: [],
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
    created() {
        for(let i=0; i<5000; i++) {
            this.tdata.push({
                date: 1503964800000,
                name: '令狐冲' + i,
                address: '浙江省杭州市滨江区',
                female: '女',
                use: 12,
                total: 20,
            });
        }
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
    },
};
</script>
```

## TableView API
### Attrs/Props

#### 视图相关属性

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| color | String |  | 值为`'light'`的时，表格头背景是`#fff` |
| visible| Boolean | `true` | 表格是否可见 |
| showHeader| Boolean | `true` | 是否展示表格头 |
| layout| String | `'fixed'` | 表格的布局方式, 可选值: `'fixed'`, `'auto'` |
| border | Boolean | `'false'` | 是否展示表格边框 |
| width | Integer/String |  | 表格组件的宽度 |
| height| Integer/String |  | 表格组件的高度 |
| maxHeight| Integer/String |  | 表格组件的最大高度 |
| minHeight| Integer/String |  | 表格组件的最小高度 |
| radioTextField | String |`'radioText'`| 单选按钮 文案字段key |
| radioValueField | String/Number |`'radioLabel'`| 单选按钮值key |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置整个表格 |
| loading| Boolean | `false` | 是否展示加载中的状态信息 |
| loadText| String | `''` | 加载中的文字信息提示 |
| noDataText | String | `''` | 当`data`属性为空数组时，展示的信息 |
| pattern| String | `'normal'` | 值设置为`'limit'`可支持显示指定数目的数据，可选值: `'normal'`, `'limit'` |
| limit| String, Number | `5` | 在`pattern`属性值为`'limit'`时，默认显示数据的数目 |
| limitText| String | `'查看更多'` | 在`pattern`属性值为`'limit'`时，数据的数目大于`'limit'`属性 的值时默认在表格最后一行显示的提示内容 |
| allText| String | `'收起'`| 在`pattern`属性值为`'limit'`时，显示所有数据后默认在表格最后一行显示的提示内容 |
| expandPattern | String | `'toggle'` | 规定`type`属性值为`'expand'`列的展开行为，可选值: `'toggle'`，`'normal'`。值为`'toggle'`时，展开一行后其他行将收回。 值为`'normal'`时，每行都可以展开。|
| rowClassName | Function |  | 给表格行添加自定义class函数，第一个参数表示索引，即在第几行中，第二个参数是表格当前行数据 |
| xScroll | Boolean | `false` | 鼠标滚动时表格是否可以横向滚动 |
| showColor | Boolean | `false` | 单选选中行是否显示背景颜色 |

#### 数据相关属性

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 表格的标题 |
| data | Array |  | 表格默认要显示的数据 |
| dataPattern | String | `'copy'` | 默认数据是否采用深拷贝模式，默认是采取的，在大数据量展示情形中请将此值置为`'normal'` |
| allChecked.sync | Boolean | `false` | 默认是否全部选中 |
| defaultSort | Object\< title, order \> |  | 默认的排序列和顺序值，其中`title`属性指定默认排序的列。`order`指定默认排序的顺序，可选值: `'desc'`,`'asc'`。 |
| defaultFilter | Object\< title, value, column \> |  | 默认采用某列进行过滤，其中`title`属性指定默认过滤的列，`value`指定默认过滤的值，在存在多个过滤列的时候可以使用此属性指定，当前只有一个列的时候可以不指定，默认会使用第一个filter列 |
| forceFilter | Boolean | `false` | 数据发生变化时，存在数据过滤列，是否需要进行过滤，默认是不需要的 |
| forceSort | Boolean | `false` | 数据发生变化时，存在数据排序，是否需要进行排序，默认是不需要的 |
| sortMethod | Function |  | 自定义排序方法，第一个参数为该列前一行数据，第二个参数为该列后一行数据，方法需要返回值，返回类型为`Boolean`|
| sortRemoteMethod | Function|  | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod | Function |  | 自定义过滤方法，第一个参数为该列数据，第二个参数为列实例 |


### Slots

#### (default)

插入`<u-table-view-column>`子组件。

#### title

自定义表格标题

#### limit-text

在`pattern`属性值为`'limit'`时，数据的数目大于`'limit'`属性 的值时默认在表格最后一行显示的提示内容

#### all-text

在`pattern`属性值为`'limit'`时，显示所有数据后默认在表格最后一行显示的提示内容

#### no-data-text

数据为空时自定义显示文本

#### expandIcon

在列中`type`属性值为`'expand'`时，替换默认的切换图标

### Events
#### @sort-change

点击排序标签触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | 当前列`column`的实例，含有当前列的所有信息，实质是`table-view-column`实例 |
| $event.label | String  | 当前列的标签值  |
| $event.order | String  | 当前列排序值： `'asc'`或`'desc'`  |

#### @filter-change

点击过滤标签触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.column | Object | 当前列`column`的实例，含有当前列的所有信息，实质是`table-view-column`实例 |
| $event.value | String  | 选中的标签值  |
| $event.index | Number  | 当前列的索引值  |


#### @selection-change

点击checkbox触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array | 选中的行的数据集合 |

#### @radio-change

点击radio触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 选中的行的单选值 |
| $event.row | Object | 选中的行的值 |
| $event.index | Number | 选中的行的索引 |

#### @row-click

点击表格行触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | 选中的行的数据集合 |
| $event.index | Int | 行数据所在的索引值 |

#### @toggle-expand

列展开或收回时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | 选中的行的数据索引 |
| $event.direction | String | icon的方向，向哪个方向展开或收起 |
| $event.row | Object | 选中行的数据 |

#### @mouseenter

表格某行数据上的鼠标处于mouseenter

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | 行数据索引 |

#### @mouseleave

表格某行数据鼠标处于mouseleave

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.index | Int | 行数据索引 |

## TableViewColumn API
### Props/Attrs

#### 视图相关属性

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| width | String |  | 是指列的宽度值 |
| border | Boolean | `false` | 是否有边框，默认无 |
| fixed | String | | 将列固定在左边或右边，参见例子`固定左右列`，可选值：`'left'`,`'right'`,`''` |
| ellipsis | Boolean | `false` | 是否换行，默认换行，值为`true`则开启不换行，超出部分显示为省略号 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置某一列的显示 |
| headClass | String | `''` | 给表格头部`'th'`添表格内容过多加自定义`'class'`名称，方便对表格头部自定义样式 |
| placement | String | `'bottom-start'` | 可过滤列选项弹出层的弹出方向，可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start'`,`'left-end'`, `'right-start'`, `'right-end'` |
| expandIcon | String | `'right-down'` | `icon`的图标展开方向，提供两种类型，一种是默认向右点击向下`'right-down'`，另一种是默认向下点击向上`'up-down'` |
| expandStrict | Boolean | `false` | 当`type`属性值为`'expand'`时，开启`'expand'`严格匹配模式， 只有对应的`label`字段有值才显示`icon` |
| expandLabel | String |  | 当`type`属性值为`'expand'`时，当出现组合形式的时候，使用此字段指定`icon`展开依赖的属性字段 |
| expandClass | String |  | 当`type`属性值为`'expand'`时，定义`icon`的样式 |
| visible | Boolean | `true` | 控制列的显示/隐藏 |
| horizontal | String | `` | 控制列的对齐方式 默认是左对齐 |
| columnClass | String | `` | 自定义列样式,给某一列添加class |

#### 数据相关属性

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 列的标题 |
| value | String |  | 默认过滤项选中的值 |
| label | String |  | 对象data中对象的属性 |
| type | String |  | 可选值：`'selection'`,`'expand'`,`'time'`。值为`'selection'`,表示此列是否是可选择的， 对于日期类型的值可以设置值为`'time'`,配合`timeFormat`属性，转换成想要的日期格式, `'expand'`表示在当前行出现icon标识，点击icon当前行下新增新一行数据 |
| timeFormat | String | `'YYYY-MM-DD HH:mm:ss'` | 定义`type`属性值为`'time'`时，返回的指定日期格式的值 |
| sortable | Boolean | `false` | 列是否可排序 |
| filter | Boolean | `false` | 列是否可过滤 |
| headSelection | Boolean | `true` | 列表是否可全选 |
| options | Array\{name, value} |  | 过滤项列表 |
| formatter | Function |  | 自定义格式化列数据，第一个参数是含有该行数据的对象，第二个参数是列实例 |
| sortMethod（准备废弃，提升到父元素上） | Function |  | 自定义排序方法，第一个参数为该列前一行数据，第二个参数为该列后一行数据，方法需要返回值，返回类型为`Boolean`|
| sortRemoteMethod（准备废弃，提升到父元素上） | Function|  | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod（准备废弃，提升到父元素上） | Function |  | 自定义过滤方法，第一个参数为该列数据，第二个参数为列实例 |

### Slots

#### headerTitle

插入自定义`th`标签内容。

#### expandContent

插入自定义`icon`展开的内容。
