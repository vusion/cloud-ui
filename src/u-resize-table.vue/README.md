# UResizeTable 可变化宽度表格

## 示例

### 基本形式

下面是表格视图组件中的基本用法。

以列的视角对数据进行配置，`title`为列的标题，`label`是数据中作为唯一识别的字段名。

列宽默认会平均分配，可以使用`width`对列宽进行适当调整，支持数值和百分比两种格式。

``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
        <u-resize-table-column title="地址" icon="help" icon-placement="bottom-end" label="address">
            <template slot="iconContent">
                自定义提示内容
            </template>
        </u-resize-table-column>
        <u-resize-table-column title="性别" label="female" ></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
            }, ],
        };
    },
};
</script>
```

### 状态

#### 加载中

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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
            } ],
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

#### 空态
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

### 格式器

在表格的列组件中可以配置`formatter`属性，会自动将该列数据做一个格式化处理，类似于 Vue 的 filter，目前仅支持传入函数形式。

``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
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
                name: '王虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '王虎威',
                address: '浙江省杭州市滨江区 东忠科技园',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            } ],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '段子手';
            else
                return row.name;
        },
    }
};
</script>
```

### 列插槽

如果需要对数据进行更加自定义的展示，可以使用列的默认插槽，定制想要的格式。

这个插槽为一个作用域插槽，会传入三个参数`row`、`column`。

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
                <u-actions>
                    <u-action>设置</u-action>
                    <u-action>删除</u-action>
                    <u-action>更改规格</u-action>
                    <u-action>转包年包月</u-action>
                </u-actions>
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'male',
            }, {
                date: 1533340800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
            }, {
                date: 1533254400000,
                name: '天王盖地虎',
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

### 垂直数据过多

#### 表头固定

通过给`<u-resize-table>`的样式设置`height`或`max-height`属性，可以限制表格高度。在数据较多的情况下，会自动固定表头。

``` vue
<template>
    <u-resize-table :data="tdata" max-height="360">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
        };
    },
};
</script>
```

### 水平内容过长

#### 默认单行省略显示

某些情况下，我们会遇到文字过长的问题，默认单行省略显示。

``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name"></u-resize-table-column>
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼 滨安路江虹路口',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '浙江省杭州市滨江区 西可科技园 秋溢路606号',
                female: '女',
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '浙江省杭州市滨江区 东忠科技园 长河路590号',
                female: '男',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 699号 网易园区二期',
                female: '男',
            } ],
        };
    },
};
</script>
```


### 隐藏部分列
``` vue
<template>
    <div>
        <u-checkboxes v-model="checkedList">
            <u-checkbox label="isShow">日期</u-checkbox>
            <u-checkbox label="isNameShow">姓名</u-checkbox>
            <u-checkbox label="isAddressShow">地址</u-checkbox>
            <u-checkbox label="isFemaleShow">性别</u-checkbox>
        </u-checkboxes>
        <u-resize-table :data="tdata">
            <u-resize-table-column :visible="checkedList.includes('isShow')" title="日期" label="date"></u-resize-table-column>
            <u-resize-table-column :visible="checkedList.includes('isNameShow')" title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
            <u-resize-table-column :visible="checkedList.includes('isAddressShow')" title="地址" label="address"></u-resize-table-column>
            <u-resize-table-column :visible="checkedList.includes('isFemaleShow')" title="性别" max-width="180" label="female" ></u-resize-table-column>
        </u-resize-table>
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
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
            } ],
            checkedList: ['isShow', 'isNameShow', 'isAddressShow', 'isFemaleShow'],
        };
    },
};
</script>
```

### 特殊列

UResizeTable 中内置了一些特殊的列，通过设置`type`来开启。

#### 多选列
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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

### 其他用法

#### 排序表格
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
            } ],
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

#### 过滤表格
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
        filterChange(value) {
            console.log(value);
        },
    }
};
</script>
```

#### 扩展显示表格
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'male',
                listlogs:[
                    '2018-04-19 14:52:49实例开始创建..',
                    '2018-04-19 14:52:49云主机开始创建...',
                    '2018-04-19 14:53:20云主机创建完成，云主机 UUID：05ab50b1-a981-492d-bfac-ebbbf94cea5e',
                    '2018-04-19 14:53:20云硬盘开始创建...',
                ],
            }, {
                date: 1533340800000,
                name: '王大虎',
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
                name: '天王盖地虎',
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


#### 自定义表头
``` vue
<template>
    <u-resize-table :data="tdata">
        <u-resize-table-column title="姓名" label="name">
            <template slot="headerTitle">
                <span>
                    姓名
                    <u-tooltip content="身份证上的姓名"></u-tooltip>
                </span>
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
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: 'male',
            }, {
                date: 1533340800000,
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: 'male',
            }, {
                date: 1533254400000,
                name: '天王盖地虎',
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

#### 指定显示行数据表格

``` vue
<template>
    <u-resize-table :data="tdata" pattern="limit" :limit="5">
        <u-resize-table-column title="日期" label="date"></u-resize-table-column>
        <u-resize-table-column title="姓名" label="name" :formatter="formatter"></u-resize-table-column>
        <u-resize-table-column title="地址" label="address"></u-resize-table-column>
        <u-resize-table-column title="性别" label="female"></u-resize-table-column>
    </u-resize-table>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '浙江省杭州市滨江区网商路 599号',
                female: '男',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '浙江省杭州市滨江区英飞特 D栋3楼',
                female: '男',
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
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
            } ],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
    }
};
</script>
```

## ResizeTable API
### Attrs/Props

#### 视图相关属性

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| color | String |  | 值为`'light'`的时，表格头背景是`#fff` |
| visible| Boolean | `true` | 表格是否可见 |
| showHeader| Boolean | `true` | 是否展示表格头 |
| border | Boolean | `'false'` | 是否展示表格边框 |
| width | Integer/String |  | 表格组件的宽度 |
| height| Integer/String |  | 表格组件的高度 |
| maxHeight| Integer/String |  | 表格组件的最大高度 |
| minHeight| Integer/String |  | 表格组件的最小高度 |
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
| sortMethod | Function |  | 自定义排序方法，第一个参数为该列前一行数据，第二个参数为该列后一行数据，方法需要返回值，返回类型为`Boolean`|
| sortRemoteMethod | Function|  | 异步执行排序传入的方法，第一个参数是列字段，第二个参数是排序顺序，第三个参数是列对象 |
| filterMethod | Function |  | 自定义过滤方法，第一个参数为该列数据，第二个参数为列实例 |

#### 数据相关属性

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array |  | 表格默认要显示的数据 |
| allChecked.sync | Boolean | `false` | 默认是否全部选中 |
| defaultSort | Object\< title, order \> |  | 默认的排序列和顺序值，其中`title`属性指定默认排序的列。`order`指定默认排序的顺序，可选值: `'desc'`,`'asc'`。 |

### Slots

#### (default)

插入`<u-resize-table-column>`子组件。


#### limit-text

在pattern属性值为limit时，数据的数目大于limit的值时默认在表格最后一行显示的提示内容

#### all-text

在pattern属性值为limit时，显示所有数据后默认在表格最后一行显示的提示内容

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
| $event.selected | Array | 选中的行的数据集合 |
| $event.selectedIndexs | Array | 选中的行的索引集合 |

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

## ResizeTableColumn API
### Props/Attrs
### 视图相关属性

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| width | String |  | 是指列的宽度值 |
| filterMaxWidth | String, Number | | 过滤弹出框最大宽度 |
| border | Boolean | `false` | 是否有边框，默认无 |
| fixed | String | | 将列固定在左边或右边，参见例子`固定左右列`，可选值：`'left'`,`'right'`,`''` |
| move | Boolean | `true` | 表格列是否可以改变宽度 |
| icon | String | | 表格头提示`icon`的名称,目前支持值只有`help` |
| iconContent | String | | 表格头的提示消息 |
| iconPlacement | Stirng |`'bottom'`| 表格头的提示消息弹出方向，可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start'`,`'left-end'`, `'right-start'`, `'right-end'` |
| ellipsis | Boolean | `false` | 是否换行，默认换行，值为`true`则开启不换行，超出部分显示为省略号 |
| defaultText | String | `'-'` | 默认当单元格取值为空时，默认显示的内容，此处是设置某一列的显示 |
| headClass | String | `''` | 给表格头部`'th'`添表格内容过多加自定义`'class'`名称，方便对表格头部自定义样式 |
| placement | String | `'bottom-start'` | 可过滤列选项弹出层的弹出方向，可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start'`,`'left-end'`, `'right-start'`, `'right-end'` |
| expandIcon | String | `'right-down'` | `icon`的图标展开方向，提供两种类型，一种是默认向右点击向下`'right-down'`，另一种是默认向下点击向上`'up-down'` |
| expandStrict | Boolean | `false` | 当`type`属性值为`'expand'`时，开启`'expand'`严格匹配模式， 只有对应的`label`字段有值才显示`icon` |
| expandLabel | String |  | 当`type`属性值为`'expand'`时，当出现组合形式的时候，使用此字段指定`icon`展开依赖的属性字段,label字段用来控制显示内容 |
| expandClass | String |  | 当`type`属性值为`'expand'`时，定义`icon`的样式 |
| visible | Boolean | `true` | 控制列的显示/隐藏 |

#### 数据相关属性

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 列的标题 |
| value | String |  | 默认过滤项选中的值 |
| label | String |  | 对象`data`中对象的属性 |
| field | String |  | `options`中显示文本的字段 |
| type | String |  | 可选值：`'selection'`,`'expand'`,`'time'`, `sortable`, `filter`。值为`'selection'`,表示此列是否是可选择的， 对于日期类型的值可以设置值为`'time'`,配合`timeFormat`属性，转换成想要的日期格式, `'expand'`表示在当前行出现`icon`标识，点击`icon`当前行下新增新一行数据, `sortable`表示排序， `filter`表示过滤 |
| timeFormat | String | `'YYYY-MM-DD HH:mm:ss'` | 定义`type`属性值为`'time'`时，返回的指定日期格式的值 |
| headSelection | Boolean | `true` | 列表是否可全选 |
| options | Array\{name, value} |  | 过滤项列表 |
| formatter | Function |  | 自定义格式化列数据，第一个参数是含有该行数据的对象，第二个参数是列实例 |

### Slots

#### headerTitle

插入自定义`th`标签内容。

#### expandContent

插入自定义`icon`展开的内容。

#### iconContent

自定义icon的提示内容
