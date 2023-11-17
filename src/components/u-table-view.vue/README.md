<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTableView 数据表格

- [示例](#示例)
    - [基本用法](#基本用法)
    - [格式器](#格式器)
    - [列插槽](#列插槽)
    - [表格样式](#表格样式)
    - [表格状态](#表格状态)
    - [表头固定](#表头固定)
    - [表头吸顶](#表头吸顶)
    - [单行省略显示](#单行省略显示)
    - [横向滚动](#横向滚动)
    - [固定列](#固定列)
    - [隐藏部分列](#隐藏部分列)
    - [缩放列宽](#缩放列宽)
    - [分页与加载更多](#分页与加载更多)
    - [排序](#排序)
    - [过滤（筛选）](#过滤筛选)
    - [特殊列](#特殊列)
    - [编辑行](#编辑行)
    - [编辑行-new](#编辑行-new)
    - [树型展示](#树型展示)
    - [表格行拖拽](#表格行拖拽)
    - [两个表格拖拽](#两个表格拖拽)
    - [导出 Excel](#导出-excel)
- [常见问题](#常见问题)

- [UTableView API](#utableview-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)
- [UTableViewColumn API](#utableviewcolumn-api)
    - [Props/Attrs](#propsattrs-2)
    - [Slots](#slots-2)
- [UTableViewColumnConfig API](#utableviewcolumnconfig-api)
    - [Props/Attrs](#propsattrs-3)
    - [Slots](#slots-3)
    - [Events](#events-2)
- [UTableViewColumnDynamic API](#utableviewcolumndynamic-api)
    - [Props/Attrs](#propsattrs-4)
    - [Slots](#slots-4)
- [UTableViewColumnGroup API](#utableviewcolumngroup-api)
    - [Props/Attrs](#propsattrs-5)
    - [Slots](#slots-5)
- [UTableViewExpander API](#utableviewexpander-api)
    - [Props/Attrs](#propsattrs-6)

**Table**

用于展示大量结构化数据。支持排序、过滤（筛选）、分页、自定义操作等复杂功能。

## 示例
基础示例中展示了如何初步地在表格视图组件中配置数据、修饰样式，以及如何处理数据过多的情况。

### 基本用法

以列的视角对数据进行配置，`title`为列的标题，`field`是数据中作为唯一识别的字段名。

使用`width`设置列宽，支持数值和百分比两种格式。列宽的最终效果是这样的：
- 先以配置了`width`的列为准，没有配置`width`的列会根据剩余宽度平均分配；
- 如果所有列都配置了`width`，会产生横向滚动，不会进行宽度缩放。

使用`data-source`属性添加数据，有两种方式：

#### data-source 数组

直接向`data-source`属性中传入`Array<Item>`格式的数组，每个`Item`为这样格式的对象`{ text: string, value: any, disabled: boolean, ... }`。

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### data-source 函数

向`data-source`属性中传入一个加载函数，这种方式会自带 loading 加载、error 错误等效果，并且在下文中后端分页、过滤（筛选）等功能均需要采用这种传入数据的方式。

加载函数的格式是这样的

``` ts
(params) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供过滤（筛选）、分页、加载更多等参数，要求返回一个如上的 Promise。

``` vue
<template>
<u-table-view :data-source="load">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];
    },
};

export default {
    methods: {
        load() {
            return mockService.load();
        },
    },
};
</script>
```

### 格式器

如果列中的数据不是直接想展示的内容，可以对该列配置`formatter`属性对数据进行格式化处理，书写方式类似于 Vue 的 filter。

在下面的示例中，对最近登录时间字段做了格式化处理：

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

也支持传入一个函数。在下面的示例中，对地址字段做了处理：

``` vue
<template>
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" :formatter="addressFormatter"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    methods: {
        addressFormatter(value) {
            return value.replace('浙江省杭州市', '');
        },
    },
};
</script>
```

### 列插槽

如果对数据需要更加自定义的展示，可以使用列的`cell`插槽，定制想要的格式。

这个插槽为一个作用域插槽，会传入5个参数：
- `item`为当前行的对象
- `value`是在`item`中根据`field`字段获取的值 ，即`item[this.field]`
- `columnVM`为该列组件实例
- `rowIndex`为该行的索引
- `columnIndex`为该列的索引

最常用的是`item`和`value`两个字段。

在下面的示例中，把名称变成了链接：

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%">
        <template slot="cell" slot-scope="{ value }">
            <u-link>{{ value }}</u-link>
        </template>
    </u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 表格样式

#### 表格线条

设置`line`，可以给单元格上下左右都加上边框。

``` html
<u-table-view line :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 条纹展示

使用`striped`属性给表格行添加间隔条纹。

``` html
<u-table-view striped :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 表格颜色

设置`color="light"`，可以将表格改为浅色风格。

``` html
<u-table-view color="light" :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 单行颜色

使用`rowColor`字段，可以单独给某一行添加颜色。

``` html
<u-table-view :data-source="[
    { name: '张三', rowColor: 'light', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', rowColor: 'normal', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', rowColor: 'dark', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', rowColor: 'primary', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', rowColor: 'error', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 隐藏头部

将`show-head`属性设置为`false`，可以隐藏头部。

``` html
<u-table-view :show-head="false" :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 表格状态

表格除了加载完成的正常列表状态，还有其它几种状态，可以通过属性或插槽设置。

> 控制表格状态是给`data-source`为数组的情况提供，如果`data-source`为函数，不需要自行设置。

#### 加载中

当`data-source`没传，或设置`loading`属性为`true`时，显示为加载中的状态。

``` html
<u-table-view>
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

可以通过`loading-text`或 loading 插槽自定义加载中信息。

``` html
<u-table-view :loading="true" loading-text="Loading...">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 加载错误

当`data-source`为`null`，或设置`error`属性为`true`时，显示为加载错误的状态。

``` html
<u-table-view :data-source="null">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

可以通过`error-text`或 error 插槽自定义加载错误信息。

``` html
<u-table-view :error="true" error-text="加载出现异常" error-image="https://static-vusion.163yun.com/assets/cloud-ui/1.jpg">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 没有数据

当`data-source`为空数组时，显示为没有数据的状态。

``` html
<u-table-view :data-source="[]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 表头固定

通过给`<u-table-view>`的样式设置`height`或`max-height`属性，可以限制表格高度。在数据较多的情况下，会自动固定表头。

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 表头吸顶

通过设置`stick-head`属性，可以开启表头吸顶功能。通过设置`stick-head-offset`可以调节距离父级滚动元素的偏移位置。

``` html
<u-table-view stick-head :stick-head-offset="60" :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 默认多行显示

某些情况下，我们会遇到文字过长的问题，默认会进行多行显示。

``` html
<u-table-view line striped :data-source="[
    { name: '这是一个很长很长很长很长很长很长很长很长的名字', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '名字就是起得这么这么这么这么这么这么长', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 单行省略显示

可以对列设置`ellipsis`属性，使文本单行省略，鼠标悬浮时会有工具提示。

``` html
<u-table-view line striped :data-source="[
    { name: '这是一个很长很长很长很长很长很长很长很长的名字', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '名字就是起得这么这么这么这么这么这么长', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" ellipsis field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 横向滚动

有时省略文字并不直观，可以考虑对所有列设置较长的宽度。产生横向滚动。

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" type="index" width="50"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="70"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="160"></u-table-view-column>
    <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="操作" width="120">
        <template slot="cell">
            <u-link>详情</u-link>&nbsp;
            <u-link>设置</u-link>
        </template>
    </u-table-view-column>
</u-table-view>
```

### 固定列

也可以对左右边缘重要的列进行固定

``` html
<u-linear-layout direction="vertical">
    <u-table-view :data-source="[
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ]" style="max-height: 300px;">
        <u-table-view-column fixed title="序号" type="index" width="50"></u-table-view-column>
        <u-table-view-column fixed title="用户名" field="name" width="70"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="160"></u-table-view-column>
        <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
        <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
        <u-table-view-column fixed title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column fixed title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column fixed title="操作" width="120">
            <template slot="cell">
                <u-link>详情</u-link>&nbsp;
                <u-link>设置</u-link>
            </template>
        </u-table-view-column>
    </u-table-view>
    <u-table-view :line="true" :data-source="[
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ]" style="max-height: 300px;">
        <u-table-view-column fixed title="序号" type="index" width="50"></u-table-view-column>
        <u-table-view-column fixed title="用户名" field="name" width="70"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="160"></u-table-view-column>
        <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
        <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
        <u-table-view-column fixed title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column fixed title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column fixed title="操作" width="120">
            <template slot="cell">
                <u-link>详情</u-link>&nbsp;
                <u-link>设置</u-link>
            </template>
        </u-table-view-column>
    </u-table-view>
</u-linear-layout>
```

### 隐藏部分列

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout display="block">
        <u-checkbox v-model="columnsVisible[0]">序号</u-checkbox>
        <u-checkbox v-model="columnsVisible[1]">用户名</u-checkbox>
        <u-checkbox v-model="columnsVisible[2]">手机号码</u-checkbox>
        <u-checkbox v-model="columnsVisible[3]">电子邮箱</u-checkbox>
        <u-checkbox v-model="columnsVisible[4]">地址</u-checkbox>
        <u-checkbox v-model="columnsVisible[5]">创建时间</u-checkbox>
        <u-checkbox v-model="columnsVisible[6]">最近登录时间</u-checkbox>
        <u-checkbox v-model="columnsVisible[7]">操作</u-checkbox>
    </u-linear-layout>
    <u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]" style="max-height: 300px;">
        <u-table-view-column :hidden="!columnsVisible[0]" title="序号" type="index" width="50"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[1]" title="用户名" field="name" width="70"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[2]" title="手机号码" field="phone" width="160"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[3]" title="电子邮箱" field="email" width="200"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[4]" title="地址" field="address" width="400"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[5]" title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[6]" title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[7]" title="操作" width="120">
            <template slot="cell">
                <u-link>详情</u-link>&nbsp;
                <u-link>设置</u-link>
            </template>
        </u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            columnsVisible: [true, true, true, false, true, false, true, true],
        };
    },
};
</script>
```

### 缩放列宽

开启`resizable`属性，可以调整列宽。

根据`resize-remaining`属性，调整列宽有三种效果。`average`表示保持总宽不变，后面所有列平均弥补宽度；`sequence`表示保持总宽不变，优先后一列弥补宽度；`none`表示不做任何处理，表格宽度变化。

#### average

``` html
<u-table-view resizable line striped :data-source="[
    { name: '这是一个很长很长很长很长很长很长很长很长的名字', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '名字就是起得这么这么这么这么这么这么长', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### sequence

``` html
<u-table-view resizable resize-remaining="sequence" line striped :data-source="[
    { name: '这是一个很长很长很长很长很长很长很长很长的名字', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '名字就是起得这么这么这么这么这么这么长', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### none

``` html
<u-table-view resizable resize-remaining="none" line striped :data-source="[
    { name: '这是一个很长很长很长很长很长很长很长很长的名字', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '名字就是起得这么这么这么这么这么这么长', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column title="用户名" ellipsis field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" ellipsis field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

### 分页与加载更多

#### 前端分页

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`pageable`或`pageable="pagination"`即可开启分页功能，用`page-size`属性修改分页大小。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest(mockData);
    },
};

export default {
    methods: {
        load() {
            return mockService.loadList();
        },
    },
};
</script>
```

#### 后端分页

如果需要通过后端接口进行分页或加载更多，在开启`pageable`属性的基础上，还要开启`remote-paging`属性。

需要用最前面提到的 data-source 函数的方式传入数据。

加载函数的格式是这样的：

``` ts
({ paging: {
    size: number, // 每页大小
    number: number, // 页数。从1开始计
    offset: number, // 偏移量：(number - 1) * size
    limit: number, // 同 size
} }) => Promise<{
    data: Array<Item>, // 当前页数据
    total: number, // 数据总量
}>
```

组件会给加载函数提供分页器或加载位置的参数，要求返回如上的一个 Promise。Promise 的结果中需要有 total 字段，用于计算页面总数。

可以看下面的示例，在数据栏中`result`为最新一次模拟请求的返回数据。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10" remote-paging>
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(offset, limit) {
        // 在这里模拟了一个后端分页的请求
        return mockRequest({
            total: mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
};

export default {
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        load({ paging }) {
            return mockService.loadList(paging.offset, paging.limit)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

#### 翻页器功能

使用`show-total`、`show-sizer`、`show-jumper`这几个属性，可以对应开启翻译器的显示总页数、切换每页大小、页面跳转功能。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10" remote-paging show-total show-sizer>
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(offset, limit) {
        // 在这里模拟了一个后端分页的请求
        return mockRequest({
            total: mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
};

export default {
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        load({ paging }) {
            return mockService.loadList(paging.offset, paging.limit)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

#### 滚动加载更多

通过设置`pageable="auto-more"`，可以用滚动加载更多代替翻页器。

data-source 加载函数的格式是这样的：

``` ts
({ paging: {
    size: number, // 每页大小
    number: number, // 页数。从1开始计
    offset: number, // 偏移量：(number - 1) * size
    limit: number, // 同 size
} }) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供加载位置的参数，要求返回如上的一个 Promise。翻页是否到底，如果 Promise 的结果为：

- `{ data: Array<Item>, total: number }`，根据 total 数值判断是否翻到最底部
- `{ data: Array<Item>, last: boolean }`，根据 last 布尔值判断是否为最后一次
- `Array<Item>`，则根据数组为空判断为最后一次

可以看下面的示例，在数据栏中`result`为最新一次模拟请求的返回数据。

``` vue
<template>
<u-table-view :data-source="load" pageable="auto-more" :page-size="10" remote-paging style="height: 300px;">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(offset, limit) {
        // 在这里模拟了一个后端分页的请求
        return mockRequest(mockData.slice(offset, offset + limit));
    },
};

export default {
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        load({ paging }) {
            return mockService.loadList(paging.offset, paging.limit)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

#### 手动加载更多

通过设置`pageable="load-more"`，可以用加载更多按钮代替翻页器。

``` vue
<template>
<u-table-view :data-source="load" pageable="load-more" :page-size="10" remote-paging>
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(offset, limit) {
        // 在这里模拟了一个后端分页的请求
        return mockRequest(mockData.slice(offset, offset + limit));
    },
};

export default {
    data() {
        return {
            result: undefined,
        };
    },
    methods: {
        load({ paging }) {
            return mockService.loadList(paging.offset, paging.limit)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

### 排序

#### 前端排序

如果数据源本身为前端数据或是从后端一次性拿过来的，在设置以下属性后，会开启前端排序功能。

在`<u-table-view-column>`上给可以排序的列添加`sortable`属性。

在`<u-table-view>`用`sorting`属性指定初始的排序字段和顺序，该属性可以使用`.sync`。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个后端分页的请求
        return mockRequest(mockData);
    },
};

export default {
    methods: {
        load() {
            return mockService.loadList();
        },
    },
};
</script>
```

#### 后端排序

如果需要后端接口进行排序，在开启某些列的`sortable`属性的基础上，还要开启`remote-sorting`属性。

data-source 加载函数的格式是这样的：

``` ts
({ sorting: {
    field: string, // 排序字段
    order: 'asc' | 'desc', // 升序还是降序
} }) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供排序参数，要求返回如上的一个 Promise。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(paging, sorting) {
        // 在这里模拟了一个后端排序和分页的请求
        const orderSign = sorting.order === 'asc' ? 1 : -1;
        return mockRequest({
            total: mockData.length,
            data: mockData.sort((item1, item2) => {
                if (item1[sorting.field] === item2[sorting.field])
                    return 0;
                else
                    return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
            }).slice(paging.offset, paging.offset + paging.limit),
        });
    },
};

export default {
    methods: {
        load({ paging, sorting }) {
            return mockService.loadList(paging, sorting);
        },
    },
};
</script>
```

### 过滤（筛选）

#### 前端过滤（筛选）

如果数据源本身为前端数据或是从后端一次性拿过来的，在设置以下属性后，会开启前端过滤功能。

在`<u-table-view-column>`上通过`filters`属性，给需要过滤的列添加选项。

在`<u-table-view>`用`filtering`属性指定初始的过滤字段，该属性可以使用`.sync`。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }"
    :filtering="{ address: '浙江省杭州市滨江区网商路599号网易大厦' }">
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" :filters="[
        { text: '全部' },
        { text: '网易大厦', value: '浙江省杭州市滨江区网商路599号网易大厦' },
        { text: '网易二期', value: '浙江省杭州市滨江区网商路599号网易大厦二期' },
        { text: '英飞特科技园', value: '浙江省杭州市滨江区江虹路459号英飞特科技园' },
        { text: '西可科技园', value: '浙江省杭州市滨江区秋溢路606号西可科技园' },
    ]"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest(mockData);
    },
};

export default {
    methods: {
        load() {
            return mockService.loadList();
        },
    },
};
</script>
```

#### 前端过滤（筛选）- 筛选项可多选

用`filterMultiple`属性指定筛选项是否可多选。可在`<u-table-view>`或者`<u-table-view-column>`上设置
用`filterMax`属性指定筛选项最多可选个数。可在`<u-table-view>`或者`<u-table-view-column>`上设置

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }"
    :filtering="{ address: ['浙江省杭州市滨江区网商路599号网易大厦', '浙江省杭州市滨江区网商路599号网易大厦二期'] }"
    :filterMultiple="true">
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%" :filters="[
        { text: '18612917895', value: '18612917895' },
        { text: '13727160283', value: '13727160283' },
        { text: '18897127809', value: '18897127809' },
        { text: '18749261214', value: '18749261214' },
        { text: '13579340020', value: '13579340020' },
    ]"></u-table-view-column>
    <u-table-view-column title="地址" field="address" :filters="[
        { text: '网易大厦', value: '浙江省杭州市滨江区网商路599号网易大厦' },
        { text: '网易二期', value: '浙江省杭州市滨江区网商路599号网易大厦二期' },
        { text: '英飞特科技园', value: '浙江省杭州市滨江区江虹路459号英飞特科技园' },
        { text: '西可科技园', value: '浙江省杭州市滨江区秋溢路606号西可科技园' },
    ]" :filterMax="2"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest(mockData);
    },
};

export default {
    methods: {
        load(params) {
            console.log('params', params);
            return mockService.loadList();
        },
    },
};
</script>
```

#### 后端过滤（筛选）

如果需要通过后端接口进行过滤，在某些列设置了`filters`选项的基础上，还要开启`remote-filtering`属性。

``` ts
({ filtering: {
    [field: string]: any, // 过滤（筛选）字段
} }) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供过滤参数，要求返回如上的一个 Promise。

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting
    :filtering="{ address: '浙江省杭州市滨江区网商路599号网易大厦' }" remote-filtering>
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" :filters="[
        { text: '全部' },
        { text: '网易大厦', value: '浙江省杭州市滨江区网商路599号网易大厦' },
        { text: '网易二期', value: '浙江省杭州市滨江区网商路599号网易大厦二期' },
        { text: '英飞特科技园', value: '浙江省杭州市滨江区江虹路459号英飞特科技园' },
        { text: '西可科技园', value: '浙江省杭州市滨江区秋溢路606号西可科技园' },
    ]"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(paging, sorting, filtering) {
        // 在这里模拟了一个后端过滤（筛选）、排序和分页的请求
        const filteredData = filtering ? mockData.filter((item) => item.address === filtering.address) : mockData;

        const orderSign = sorting.order === 'asc' ? 1 : -1;
        return mockRequest({
            total: filteredData.length,
            data: filteredData.sort((item1, item2) => {
                if (item1[sorting.field] === item2[sorting.field])
                    return 0;
                else
                    return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
            }).slice(paging.offset, paging.offset + paging.limit),
        });
    },
};

export default {
    methods: {
        load({ paging, sorting, filtering }) {
            return mockService.loadList(paging, sorting, filtering);
        },
    },
};
</script>
```

#### 后端过滤（筛选）- 筛选项可多选

用`filterMultiple`属性指定筛选项是否可多选。可在`<u-table-view>`或者`<u-table-view-column>`上设置
用`filterMax`属性指定筛选项最多可选个数。可在`<u-table-view>`或者`<u-table-view-column>`上设置

``` vue
<template>
<u-table-view :data-source="load" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting
    :filtering="{ address: ['浙江省杭州市滨江区网商路599号网易大厦'] }" remote-filtering>
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" :filters="[
        { text: '网易大厦', value: '浙江省杭州市滨江区网商路599号网易大厦' },
        { text: '网易二期', value: '浙江省杭州市滨江区网商路599号网易大厦二期' },
        { text: '英飞特科技园', value: '浙江省杭州市滨江区江虹路459号英飞特科技园' },
        { text: '西可科技园', value: '浙江省杭州市滨江区秋溢路606号西可科技园' },
    ]" :filterMultiple="true"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造 75 条后端数据
const mockData = (() => {
    const baseData = [
        { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
        { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
        { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
        { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
    ];

    const result = [];
    for (let i = 0; i < 75; i++) {
        const item = Object.assign({}, baseData[i % 5]);
        item.name += '-' + (Math.random() * 20 >> 0);
        item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
        item.createdTime += i * 1000 * 3600 * 24;
        item.loginTime += i * 1000 * 3600 * 24;
        result.push(item);
    }

    return result;
})();
// 模拟数据服务
const mockService = {
    loadList(paging, sorting, filtering) {
        // 在这里模拟了一个后端过滤（筛选）、排序和分页的请求
        const filteredData = filtering ? mockData.filter((item) => filtering.address.includes(item.address)) : mockData;

        const orderSign = sorting.order === 'asc' ? 1 : -1;
        return mockRequest({
            total: filteredData.length,
            data: filteredData.sort((item1, item2) => {
                if (item1[sorting.field] === item2[sorting.field])
                    return 0;
                else
                    return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
            }).slice(paging.offset, paging.offset + paging.limit),
        });
    },
};

export default {
    methods: {
        load({ paging, sorting, filtering }) {
            return mockService.loadList(paging, sorting, filtering);
        },
    },
};
</script>
```

### 特殊列

UTableView 中内置了一些特殊的列，通过设置`type`来开启。

#### 序号列

添加一个`type="index"`的`<u-table-view-column>`，这个列中会显示每行的序号。设置`start-index`可以改变初始值，默认为`1`。

> 注意：这种方式只能显示当前页的序号，如果复杂的序号请使用列插槽自定义。

``` html
<u-table-view striped :data-source="[
    { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column type="index" title="#" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

#### 单选列

开启`selectable`属性，可以选择行。

``` html
<u-table-view striped hover selectable :data-source="[
    { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]">
    <u-table-view-column type="index" title="#" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

也可以添加一个`type="radio"`的`<u-table-view-column>`，这个列中会显示单项选择框，专门用于单选操作。

通过`value-field`属性指定数据中唯一值的字段，然后`v-model`或`:value.sync`对选择值进行双向绑定。

``` vue
<template>
<u-table-view striped value-field="id" v-model="selectedValue" :data-source="data">
    <u-table-view-column type="radio" title="选择" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: '5cd49be8f65c4738',
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

#### 多选列

添加一个`type="checkbox"`的`<u-table-view-column>`，这个列中会显示多项选择框，用于多选操作。

控制多选有两种方式，一种是设置数据对应行的`checked`属性，该属性会与多项选择框进行双向绑定。`disabled`属性可以禁用多项选择框。

``` vue
<template>
<u-table-view striped :data-source="data">
    <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', checked: true, name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', checked: true, name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', disabled: true, name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

另一种是通过`value-field`属性指定数据中唯一值的字段，再通过`:values.sync`对选择值进行双向绑定。

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data-source="data">
    <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            values: ['5cd49be8f65c4738', 'f799a0467c494601'],
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

#### 展开列

``` vue
<template>
<u-table-view :data-source="data">
    <u-table-view-column type="expander" title="展开" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

也可以放到列尾。

``` vue
<template>
<u-table-view :data-source="data">
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="展开" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

使用`accordion`属性开启手风琴模式，在展开一项的同时会收起其他项。

``` vue
<template>
<u-table-view :data-source="data" accordion>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="展开" width="8%">
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

#### 特殊列与普通功能共用

使用`type`设置的特殊列可以与普通的`field`共用。

``` vue
<template>
<u-table-view :data-source="data">
    <u-table-view-column type="checkbox" title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column type="expander" title="展开" width="12%">
        <span slot="cell" slot-scope="{ item }">{{ item.name }}</span>
        <div slot="expand-content" slot-scope="{ item }">
            <u-list type="disc">
                <u-list-item>{{ item.address }} 1</u-list-item>
                <u-list-item>{{ item.address }} 2</u-list-item>
                <u-list-item>{{ item.address }} 3</u-list-item>
                <u-list-item>{{ item.address }} 4</u-list-item>
                <u-list-item>{{ item.address }} 5</u-list-item>
            </u-list>
        </div>
    </u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
        };
    },
};
</script>
```

### 编辑行

下面是一个在表格中增删改查数据的综合示例。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-table-view :data-source="data">
        <u-table-view-column title="用户名" width="20%">
            <div slot="cell" slot-scope="{ item, index }">
                <u-validator v-if="item.adding" label="用户名"  rules="required" placement="bottom" :ref="`name_${index}`">
                    <u-input v-model="item.name" :autofocus="true" maxlength="12" width="full"></u-input>
                </u-validator>
                <div v-else>{{ item.name }}</div>
            </div>
        </u-table-view-column>
        <u-table-view-column title="手机号码" width="20%">
            <div slot="cell" slot-scope="{ item, index }">
                <u-validator v-if="item.adding || item.editing" label="手机号码" rules="required | phone" placement="bottom" :ref="`phone_${index}`">
                    <u-input v-model="item.phone" :autofocus="item.editing" width="full"></u-input>
                </u-validator>
                <div v-else>{{ item.phone }}</div>
            </div>
        </u-table-view-column>
        <u-table-view-column title="邮箱">
            <div slot="cell" slot-scope="{ item, index }">
                <u-validator v-if="item.adding || item.editing" label="邮箱" rules="required | email" placement="bottom" :ref="`email_${index}`">
                    <u-input v-model="item.email"></u-input>
                </u-validator>
                <div v-else>{{ item.email }}</div>
            </div>
        </u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column title="操作" width="120">
            <div slot="cell" slot-scope="{ item }">
                <u-linear-layout gap="small">
                    <template v-if="item.adding || item.editing">
                        <u-link @click="onClickConfirm(item)">确定</u-link>
                        <u-link @click="onClickCancel(item)">取消</u-link>
                    </template>
                    <template v-else>
                        <u-link @click="onClickEdit(item)">编辑</u-link>
                        <u-link @click="onClickDelete(item)">删除</u-link>
                    </template>
                </u-linear-layout>
            </div>
        </u-table-view-column>
    </u-table-view>
    <u-linear-layout justify="end">
        <div style="width: 120px;"><u-button color="primary" size="small" @click="add()">添加数据</u-button></div>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    rules: {
        phone: { validate: 'pattern', args: /^\d{11}$/, message: '手机号码格式不正确', trigger: 'blur' },
    },
    data(){
        return {
            data: undefined,
            isValid: false,
        }
    },
    created(){
        this.load();
    },
    methods: {
        getData(){
            return Promise.resolve([
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', createdTime: 1494488730000, loginTime: 1558165530000 },
            ]);
        },
        load() {
            return this.getData().then((res)=>{
                res.forEach((item)=>{
                    // 需要先赋值editing，后续更改editing才会响应
                    item.editing = false;
                });
                this.data = res;
            });
        },
        onClickEdit(item) {
            item.editing = true;
            item.tempData = Object.assign({}, item);
        },
        onClickCancel(item) {
            if (item.adding) {
                this.data.splice(0, 1);
            } else {
                Object.assign(item, item.tempData);
                item.editing = false;
            }
        },
        onClickConfirm(item) {
            const tasks = [];
            const index = this.data.findIndex((temp) => temp.name === item.name);
            Object.keys(item).forEach((key) => {
                const node = this.$refs[`${key}_${index}`];
                if(node){
                    tasks.push(node.validate());
                }
            });
            Promise.all(tasks).then((results) => {
                if (results.every((result) => result.valid)) {
                    if(item.adding) {
                        this.onAdd(item);
                    } else {
                        this.onEdit(item);
                    }
                }
            });
        },
        onClickDelete(item) {
            const index = this.data.findIndex((temp)=>temp.id === item.id);
            this.data.splice(index, 1);
        },
        add(){
            if(!this.data || this.data[0] && this.data[0].adding)
                return;
            this.data.push({
                adding: true,
                name: '',
                phone:'',
                email:''
            });
        },
        onAdd(item){
            item.adding = false;
        },
        onEdit(item){
            item.editing = false;
        }
    }
};
</script>
```

### 编辑行-new

下面是一个在表格中增删改查数据的综合示例。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-table-view :data-source="data" :default-column-width="200">
        <u-table-view-column title="用户名" field="name" type="editable" fixed>
            <template #editcell="scope">
                <u-validator style="width:100%" placement="bottom" display="appear" append-to="body" @blur-valid="validator1_blurvalid(event, scope)" rules="required">
                    <u-input :value.sync="scope.item.name" placeholder="请输入用户名" :autofocus="true" width="full"></u-input>
                </u-validator>
            </template>
            <template #cell="scope">
                <u-text>{{scope.item.name}}</u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" fixed></u-table-view-column>
        <u-table-view-column  title="手机号码" field="phone" type="editable">
            <template #editcell="scope">
                <u-validator style="width:100%" placement="bottom" display="appear" append-to="body" @blur-valid="validator2_blurvalid(event, scope)" rules="required | phone">
                    <u-input :value.sync="scope.item.phone" placeholder="请输入手机号" :autofocus="true" width="full"></u-input>
                </u-validator>
            </template>
            <template #cell="scope">
                <u-text>{{scope.item.phone}}</u-text>
            </template>
        </u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date"></u-table-view-column>
        <u-table-view-column title="操作" fixed>
            <template #cell="scope">
                <u-link text="删除"></u-link>
            </template>
        </u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    rules: {
        phone: { validate: 'pattern', args: /^\d{11}$/, message: '手机号码格式不正确', trigger: 'blur' },
    },
    data(){
        return {
            data: undefined,
            isValid: false,
        }
    },
    created(){
        this.load();
    },
    methods: {
        getData(){
            return Promise.resolve([
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', createdTime: 1494488730000, loginTime: 1558165530000 },
            ]);
        },
        load() {
            return this.getData().then((res)=>{
                res.forEach((item)=>{
                    // 需要先赋值editing，后续更改editing才会响应
                    item.editing = false;
                });
                this.data = res;
            });
        },
        validator1_blurvalid(event, scope) {
            scope.item.editing = '';
        },
        validator2_blurvalid(event, scope) {
            scope.item.editing = '';
        },
    }
};
</script>
```

### 树型展示

同步数据。

``` vue
<template>
<u-linear-layout direction="vertical">
<u-linear-layout>
    <u-text>数据选中类型：</u-text>
    <u-select v-model="checkType" @change="refresh()">
        <u-select-item value="up+down">父子双向关联选中（父选中子选中，子全选父也选中）</u-select-item>
        <u-select-item value="down">单项父关联子（父选中子选中，子全选父不选中）</u-select-item>
        <u-select-item value="up">单项子关联父（父选中子不选中，子全选中父选中）</u-select-item>
        <u-select-item value="none">父子不关联（父选中子不选中，子全选父不选中）</u-select-item>
    </u-select>
</u-linear-layout>
<u-table-view :data-source="list" tree-display :treeCheckType="checkType" ref="tableView">
    <u-table-view-column type="checkbox" width="30"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
<u-button @click="add" color="primary">添加子数据</u-button>
</u-linear-layout>
</template>
<script>
export default {
    data(){
        return {
            list: this.getList(),
            checkType: 'up+down',
        }
    },
    methods: {
        add() {
            this.list[1].expanded = true;
            this.list[1].children.push({ name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 });
        },
        refresh() {
            this.list = this.getList();
        },
        getList() {
            return [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                { name: '张三dd', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, treeExpanded:true, children:[
                    { name: '张三11', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三12', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000,children:[
                    { name: '张三121', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三122', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                ]},
                ]},
                { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
                { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ]
        }
    },
};
</script>
```

异步加载数据，指定`treeDataSource`。

``` vue
<template>
<u-table-view :data-source="load" tree-display>
    <u-table-view-column type="checkbox" width="30"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="20%" ellipsis></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
// 模拟后端请求
const mockRequest = (name, timeout = 1000) => {
    const mockData = [
            { name: '张三1'+name, phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, hasChildren: true },
            { name: '小明1'+name, phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四1'+name, phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华1'+name, phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五1'+name, phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];
    return new Promise((res, rej) => setTimeout(() => res(mockData), timeout));
};

// 模拟数据服务
const mockService = {
    loadList(name) {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest(name);
    },
};

export default {
    methods: {
        load(params, itemData) {
            const name = itemData&&itemData.item?itemData.item.name : '';
            return mockService.loadList(name);
        },
    },
};
</script>
```

### 表格行拖拽

普通表格

``` html
<u-table-view :data-source="[
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
]" :draggable="true">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
```

树型表格

``` vue
<template>
<u-linear-layout direction="vertical">
<u-table-view :data-source="list" tree-display :draggable="true" value-field="name">
    <u-table-view-column type="dragHandler" width="30"></u-table-view-column>
    <u-table-view-column type="checkbox" width="30"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <template #dragGhost="{item}">
        <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
    </template>
</u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data(){
        return {
            list: this.getList(),
        }
    },
    methods: {
        getList() {
            return [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                { name: '张三dd', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, treeExpanded:true, children:[
                    { name: '张三11', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三12', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000,children:[
                    { name: '张三121', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三122', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                ]},
                ]},
                { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
                { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ]
        }
    },
};
</script>
```

树型表格-设置不可拖拽节点、不可放入节点

``` vue
<template>
<u-linear-layout direction="vertical">
<u-table-view :data-source="list" tree-display :draggable="true" value-field="name" :can-dragable-handler="canDrag" :can-dropin-handler="canDropin">
    <u-table-view-column type="dragHandler" width="30"></u-table-view-column>
    <u-table-view-column type="checkbox" width="30"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <template #dragGhost="{item}">
        <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
    </template>
</u-table-view>
<u-table-view :data-source="list" :draggable="true" value-field="name" :can-dragable-handler="canDrag">
    <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <template #dragGhost="{item}">
        <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
    </template>
</u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data(){
        return {
            list: this.getList(),
        }
    },
    methods: {
        getList() {
            return [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                { name: '张三dd', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, treeExpanded:true, children:[
                    { name: '张三11', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三12', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000,children:[
                    { name: '张三121', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                    { name: '张三122', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                ]},
                ]},
                { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
                { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ]
        },
        canDrag(item) {
            return item && item.name !== '李四'
        },
        canDropin(item) {
            return item && item.name !== '王五'
        }
    },
};
</script>
```

### 两个表格拖拽

表格内部&表格间可拖拽

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="list1" :draggable="true" value-field="name" :can-dragable-handler="canDrag" across-table-drag @drop="onDrop1" ref="tableview1">
                <u-table-view-column type="checkbox" width="30"></u-table-view-column>
                <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column ellipsis>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="list2" :draggable="true" value-field="name" :can-dragable-handler="canDrag"  across-table-drag @drop="onDrop2" ref="tableview2">
                <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column ellipsis>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
<script>
export default {
    data(){
        return {
            list1: this.getList(1),
            list2: this.getList(2),
            dragStartNode1: undefined,
            dragStartNode2: undefined,
        }
    },
    methods: {
        getList(index) {
            return [
                { name: '张三' + index, phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                { name: '张三dd' + index, phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
                { name: '小明' + index, phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
                { name: '李四' + index, phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华' + index, phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五' + index, phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ]
        },
        canDrag(item) {
            return item && item.name !== '李四1'
        },
        onDrop1(event) {
            console.log('onDrop1', event);
            if(event.finalSource) {
                this.list1.splice(event.source.index, 1);
                this.list1.splice(event.target.index, 0, event.source.item);
            } else {
                const insertIndex = event.position === 'insertBefore' ? event.target.index : event.target.index + 1;
                this.list1.splice(insertIndex, 0, event.source.item);
                this.list2.splice(event.source.index, 1);
            }
        },
        onDrop2(event) {
            console.log('onDrop2', event);
            if(event.finalSource) {
                this.list2.splice(event.source.index, 1);
                this.list2.splice(event.target.index, 0, event.source.item);
            } else {
                if (event.position === 'append') {
                    this.list2.push(event.source.item);
                    this.list1.splice(event.source.index, 1);
                } else {
                    const insertIndex = event.position === 'insertBefore' ? event.target.index : event.target.index + 1;
                    this.list2.splice(insertIndex, 0, event.source.item);
                    this.list1.splice(event.source.index, 1);
                }
            }
        }
    },
};
</script>
```

表格间可拖拽

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="load1" value-field="name" :can-dragable-handler="canDrag" across-table-drag @drop="onDrop1" ref="tableview1">
                <u-table-view-column type="checkbox" width="30"></u-table-view-column>
                <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column ellipsis>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="load2" value-field="name" :can-dragable-handler="canDrag"  across-table-drag @drop="onDrop2" ref="tableview2">
                <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column ellipsis>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
<script>
const list1 = [
    { name: '张三1', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '张三dd1', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '小明1', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
    { name: '李四1', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华1', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五1', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];
const list2 = [
    { name: '张三2', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '张三dd2', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '小明2', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
    { name: '李四2', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华2', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五2', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];
export default {
    data(){
        return {
        }
    },
    methods: {
        load1() {
            return list1;
        },
        load2() {
            return list2;
        },
        canDrag(item) {
            return item && item.name !== '李四'
        },
        onDrop1(event) {
            console.log('onDrop1', event);
            list1.unshift(event.source.item);
            this.$refs.tableview1.reload();
            const deleteIndex = list2.find((item)=>item.name === event.source.item.name);
            list2.splice(deleteIndex, 1);
            this.$refs.tableview2.reload();
        },
        onDrop2(event) {
            console.log('drop2', event);
            list2.unshift(event.source.item);
            this.$refs.tableview2.reload();
            const deleteIndex = list1.find((item)=>item.name === event.source.item.name);
            list1.splice(deleteIndex, 1);
            this.$refs.tableview1.reload();
        }
    },
};
</script>
```

树型表格间拖拽

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="load1" tree-display :draggable="true" value-field="name" :can-dragable-handler="canDrag" across-table-drag @drop="onDrop1" ref="tableview1">
                <u-table-view-column type="checkbox" width="30"></u-table-view-column>
                <u-table-view-column title="用户名" field="name" width="40%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="6">
            <u-table-view :data-source="load2" :draggable="true" value-field="name" :can-dragable-handler="canDrag"  across-table-drag @drop="onDrop2" ref="tableview2">
                <u-table-view-column title="用户名" field="name" width="40%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
                <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
                <template #dragGhost="{item}">
                    <div style="padding:15px;background:white;border:1px solid #ddd; width:100px;">{{item && item.name}}</div>
                </template>
            </u-table-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
<script>
const treeList = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '张三dd', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, treeExpanded:true, children:[
        { name: '张三11', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
        { name: '张三12', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000,children:[
        { name: '张三121', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
        { name: '张三122', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    ]},
    ]},
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];
const list2 = [
    { name: '张三2', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '张三dd2', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000},
    { name: '小明2', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 , dropDisabled:true},
    { name: '李四2', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华2', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五2', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];
export default {
    data(){
        return {
        }
    },
    methods: {
        load1() {
            return treeList;
        },
        load2() {
            return list2;
        },
        canDrag(item) {
            return item && item.name !== '李四'
        },
        onDrop1(event) {
            console.log('onDrop1', event);
            if(event.finalSource) {
                
            } else {
                if(!event.target.parent) {
                    const item = treeList[event.target.index];
                    if(event.position === 'append') {
                        item.children = item.children || [];
                        item.children.push(event.source.item);
                        item.expanded = true;
                        this.$refs.tableview1.reload();
                    } else {
                        const insertIndex = event.position === 'insertBefore' ? event.target.index : event.target.index + 1;
                        treeList.splice(insertIndex, 0, event.source.item);
                        this.$refs.tableview1.reload();
                    }
                }
                const deleteIndex = list2.find((item)=>item.name === event.source.item.name);
                list2.splice(deleteIndex, 1);
                this.$refs.tableview2.reload();
            }
        },
        onDrop2(event) {
            console.log('onDrop2', event);
        },
    },
};
</script>
```

### 导出 Excel

要使用 exportExcel 方法, 需要向`data-source`属性中可传入加载函数，也可传入数组。传递给 exportExcel 的参数最终会传递给加载函数

``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-button color="primary" @click="() => $refs.tableView.exportExcel()">导出 Excel</u-button>
        <u-table-view ref="tableView" pageable :remote-paging="true" :data-source="load" title="表格标题">
            <u-table-view-column type="index" width="60" title="序号"></u-table-view-column>
            <u-table-view-column title="创建时间">
                <template #cell="scope">
                        <u-text :text="scope.item.student.createdTime"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column title="name">
                <template #cell="scope">
                        <u-text :text="scope.item.student.name"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column title="输入">
                <template #cell="scope">
                    <u-linear-layout gap="small">
                        <u-input :value="100"></u-input>
                    </u-linear-layout>
                </template>
            </u-table-view-column>
            <u-table-view-column title="选择">
                <template #cell="scope">
                    <u-linear-layout gap="small">
                           <u-select placeholder="自定义">
                                <u-select-item value="java">JS</u-select-item>
                                <u-select-item value="nodejs">Node.js</u-select-item>
                            </u-select>
                    </u-linear-layout>
                </template>
            </u-table-view-column>
            <u-table-view-column title="操作">
                <template #cell="scope">
                    <u-linear-layout gap="small">
                        <u-link text="修改" @click="modify($event,scope)"></u-link>
                        <u-link text="删除" @click="remove($event,scope)"></u-link>
                    </u-linear-layout>
                </template>
            </u-table-view-column>
            <u-table-view-column title="日期">
                <template #cell="scope">
                    <u-date-picker date="2018-08-08"></u-date-picker>
                </template>
            </u-table-view-column>
        </u-table-view>
    </u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return {"number":1,"last":false,"size":20,"numberOfElements":20,"totalPages":20,"content":[{"student":{"id":1137630473356288,"createdTime":"2021-11-11T03:05:37.000Z","updatedTime":"2021-11-11T03:05:37.000Z","createdBy":null,"updatedBy":null,"name":"张三","age":10}},{"student":{"id":1137631165416448,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_0","age":35}},{"student":{"id":1137631165416449,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_1","age":57}},{"student":{"id":1137631165416450,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_2","age":44}},{"student":{"id":1137631165416451,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_3","age":25}},{"student":{"id":1137631165416452,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_4","age":75}},{"student":{"id":1137631165416453,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_5","age":8}},{"student":{"id":1137631165416454,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_6","age":52}},{"student":{"id":1137631165416455,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_7","age":31}},{"student":{"id":1137631165416456,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_8","age":44}},{"student":{"id":1137631169610752,"createdTime":"2021-11-11T03:08:23.000Z","updatedTime":"2021-11-11T03:08:23.000Z","createdBy":null,"updatedBy":null,"name":"name_9","age":21}},{"student":{"id":1137631303828480,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_10","age":83}},{"student":{"id":1137631303828481,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_11","age":10}},{"student":{"id":1137631303828482,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_12","age":79}},{"student":{"id":1137631308022784,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_13","age":93}},{"student":{"id":1137631308022785,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_14","age":44}},{"student":{"id":1137631308022786,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_15","age":70}},{"student":{"id":1137631308022787,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_16","age":81}},{"student":{"id":1137631308022788,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_17","age":11}},{"student":{"id":1137631308022789,"createdTime":"2021-11-11T03:08:56.000Z","updatedTime":"2021-11-11T03:08:56.000Z","createdBy":null,"updatedBy":null,"name":"name_18","age":90}}],"first":true,"totalElements":20,"empty":false};
    },
};

export default {
    methods: {
        load() {
            return mockService.load();
        },
    },
};
</script>
```

## 常见问题
暂无
## UTableView API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| extra-params | object |  |  | 数据源除了DataSourceParams外还需要的参数 |
| pageable | boolean |  | `false` |  |
| remote-paging | boolean |  | `false` |  |
| pagination | boolean |  |  | 设置是否分页展示数据 |
| page-size | number |  | `20` |  |
| show-sizer | boolean |  | `false` | 显示每页条数切换器 |
| page-size-options | Array\<number\> |  | `[10, 20, 50]` | 每页条数切换器的选项 |
| page-number | number |  | `1` | 当前默认展示在第几页 |
| show-total | boolean |  | `false` |  |
| show-jumper | boolean |  | `false` | 显示页面跳转输入框 |
| sorting | { field: string, order: string, compare: Function } |  | `'{ field: undefined, order: 'desc' }'` | 设置数据初始化时的排序字段和顺序规则 |
| remote-sorting | boolean |  | `false` |  |
| default-order | string | `[object Object]`<br/>`[object Object]` | `'asc'` |  |
| filtering.sync | object |  |  |  |
| remote-filtering | boolean |  | `false` | 是否使用后端筛选 |
| value-field | string |  |  | 在单选、多选操作、渲染树形数据中，指定数据唯一值的字段 |
| value.sync, v-model | any |  |  | 用于标识单选选项的值 |
| values.sync | Array |  |  | 用于标识多选选项的值 |
| tree-display | boolean |  | `false` | 以树形数据展示表格 |
| parent-field | string |  |  | 当数据源为平铺数据时自动生成树形数据的节点字段名，重要：值字段名需要一起配置 |
| children-field | string |  | `'children'` | 树形数据子节点字段名，默认为children |
| has-children-field | string |  | `'hasChildren'` | 该字段指定行数据是否包含子节点数据，默认为hasChildren |
| tree-check-type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'up+down'` | 父子树节点是否关联选中 |
| title | string |  |  |  |
| show-head | boolean |  | `true` |  |
| stick-head | boolean |  | `false` |  |
| stick-head-offset | number |  | `0` |  |
| hover | boolean |  | `false` | 表格行在悬浮时是否高亮显示 |
| selectable | boolean |  | `false` | 设置是否可以单选行 |
| cancelable | boolean |  | `false` | 设置是否可以取消选择 |
| draggable | boolean |  | `false` | 设置是否可以拖拽行排序 |
| acrossTableDrag | boolean |  | `false` | 设置多个表格间是否可以拖拽放置 |
| can-dragable-handler | Function |  |  | 设置表格行是否可拖拽起来。绑定逻辑 |
| can-dropin-handler | Function |  |  | 设置表格行是否可拖拽放入。绑定逻辑 |
| accordion | boolean |  | `false` | 设置是否每次只展开一个 |
| resizable | boolean |  | `false` | 设置是否可以调整列宽 |
| resize-remaining | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'average'` | 设置调整列宽时如何处理剩余大小 |
| configurable | boolean |  | `false` | 设置是否可以配置展示列 |
| initial-load | boolean |  | `true` | 设置初始时是否立即加载 |
| designer-mode | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'success'` | 设置不同加载状态的展示内容 |
| loading-text | string |  | `'正在加载中...'` | 加载中状态显示的提示文案 |
| loading | boolean |  |  | 加载中状态的触发条件，未设置则默认为系统定义条件 |
| error-text | string |  | `'加载失败，请重试'` | 加载失败状态显示的提示文案 |
| error | boolean |  |  | 加载失败状态的触发条件，未设置则默认为系统定义条件 |
| empty-text | string |  | `'暂无数据'` | 暂无数据状态显示的提示文案 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| title-alignment | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'center'` |  |
| boldHeader | boolean |  | `true` |  |
| border | boolean |  | `false` |  |
| line | boolean |  | `false` | 单元格之间是否显示分隔线条 |
| striped | boolean |  | `false` | 表格行是否按斑马线条纹显示 |
| default-column-width | string \| number |  |  | 表格的默认列宽度，可设置为数字或百分比 |

### Slots

#### (default)

在表格中插入`<u-table-view-column>`子组件

#### loading

自定义加载中内容

#### error

自定义加载错误内容

#### empty

自定义暂无数据内容

#### dragGhost

自定义拖拽缩略图

### Events

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

#### @before-page

切换分页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.size | number | 分页大小 |
| $event.oldSize | number | 旧的分页大小 |
| $event.number | number | 当前页数 |
| $event.oldNumber | number | 旧的页数 |
| $event.preventDefault | Function | 阻止切换分页流程 |
| senderVM | UTableView | 发送事件实例 |

#### @page

切换分页或改变分页大小时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.size | number | 分页大小 |
| $event.oldSize | number | 分页大小 |
| $event.number | number | 当前页数 |
| $event.oldNumber | number | 旧的页数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-sort

排序前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.field | string | 排序字段 |
| $event.order | string | 排序顺序 |
| $event.compare | Function | 排序比较函数 |
| $event.preventDefault | Function | 阻止排序流程 |
| senderVM | UTableView | 发送事件实例 |

#### @sort

排序后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.field | string | 排序顺序 |
| $event.order | string | 排序字段 |
| $event.compare | Function | 排序比较函数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-filter

筛选前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 筛选参数对象 |
| $event.preventDefault | Function | 阻止筛选流程 |
| senderVM | UTableView | 发送事件实例 |

#### @filter

筛选后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 筛选参数对象 |
| senderVM | UTableView | 发送事件实例 |

#### @click-row

点击某一行时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | object | 点击行相关对象 |
| $event.index | number | 点击行索引 |

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择行的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择行相关对象 |
| $event.oldItem | object | 旧的选择行相关对象 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTableView | 发送事件实例 |

#### @input

选择某一项后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择行的值 |
| senderVM | UTableView | 发送事件实例 |

#### @select

选择某一项后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择行相关对象 |
| $event.oldItem | object | 旧的选择行相关对象 |
| $event.selectedItem | object | 最终选择行的对象。在`cancelable`的情况下，与`$event.item`不同。 |
| senderVM | UTableView | 发送事件实例 |

#### @check

多选模式中，选中节点后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.checked | boolean | 选中状态 |
| $event.values | Array | 选择后的值 |
| $event.oldValues | Array | 旧的值 |
| $event.item | object | 选择行相关对象 |
| $event.items | object | 所有选择行相关对象 |
| senderVM | UTableView | 发送事件实例 |

#### @change

单选或多选值改变后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 选择行的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择行相关对象 |
| $event.items | object | 所有选择行相关对象 |
| $event.oldItem | object | 旧的选择行相关对象 |
| senderVM | UTableView | 发送事件实例 |

#### @resize

调整列宽后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.columnVM | UTableColumnVM | 调整的列实例 |
| $event.index | number | 列索引 |
| width | number | 调整后的宽度 |
| oldWidth | number | 调整前的宽度 |

#### @before-toggle-expanded

点击展开按钮前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | object | 选择行相关对象 |
| $event.expanded | boolean | 展开状态值 |
| $event.oldExpanded | boolean | 展开前状态值 |

#### @toggle-expanded

点击展开按钮后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.item | object | 选择行相关对象 |
| $event.expanded | boolean | 展开状态值 |

#### @dragstart

拖拽行时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 被拖拽行相关对象 |
| $event.source | object | 被拖拽行相关对象 |

#### @dragover

拖拽经过每一行时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 拖拽经过的行相关对象 |
| $event.target | object | 拖拽经过的行相关对象 |

#### @drop

拖拽结束时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 拖拽放置的相关对象 |
| $event.source | object | 被拖拽行相关对象 |
| $event.target | object | 拖拽放置行相关对象 |
| $event.position | number | 拖拽放置的位置 |
| $event.finalSource | object | 被拖拽行相关对象 |
| $event.updateData | object | 需要更新的数据 |

Methods

#### reload()

清除缓存，重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### getFields()

获取所有表格列的 field

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### exportExcel(page, size, filename, sort, order, excludeColumns)

导出 excel 文件

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| page | number | `1` | 当前页码 |
| size | number | `2000` | 每页条数 |
| filename | string | `'tableView.params.filename'` | 导出文件名 |
| sort | string | `'tableView.params.sort'` | 排序字段 |
| order | string | `'tableView.params.order'` | 排序顺序，'asc' 或 'desc' |
| excludeColumns | Array\<string\> | `[]` | 排除字段 |

#### resetEdit(item)

重制编辑列的编辑状态为非编辑态

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| item | object |  | 行数据 |

## UTableViewColumn API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| formatter | string \| object \| Function \| Formatter |  | `'placeholder'` | 格式器 |
| filters | Array\<{ text: string, value: any }\> |  |  | 筛选项的参数 |
| field | string |  |  | data 项中的字段 |
| sortable | boolean |  | `false` | 设置该列是否可以排序 |
| default-order | string | `[object Object]`<br/>`[object Object]` | `'asc'` | 该列首次点击时的排序顺序 |
| type | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 支持序号列、单/多选、树形列和编辑列切换，序号列支持按照数字排序。选择编辑列需要先设置列字段。 |
| auto-index | boolean |  | `false` | 换页后，继续上一页的列序号进行编号 |
| start-index | number |  | `1` | 序号列的起始序号 |
| dblclickHandler | Function |  |  | 用于可编辑表格，双击表格列时的处理函数 |
| title | string |  |  |  |
| fixed | boolean |  | `false` | 该列是否固定。左侧固定列需要从第一列到当前固定列之间的列都是固定列。右侧固定列需要最后一列到当前固定列之间的列都是固定列。 |
| ellipsis | boolean |  | `false` | 文字过长是否省略显示。默认文字超出时会换行。 |
| hidden | boolean |  | `false` |  |
| expander-position | string | `[object Object]`<br/>`[object Object]` | `'left'` | 展开列图标的位置 |
| width | string \| number |  |  | 设置列宽度，可设置为数字或百分比 |
| colSpan | number |  |  | undefined |
| autoRowSpan | boolean |  | `false` | undefined |

### Slots

#### cell

对单元格的数据展示进行自定义

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 该列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 列的索引 |

#### editcell

对单元格的编辑数据展示进行自定义

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 该列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 列的索引 |

#### title

对标题进行自定义

| Prop | Type | Description |
| ---- | ---- | ----------- |
| columnVM | string | 该列组件实例 |
| columnIndex | number | 列的索引 |

#### expand-content

展开列的内容

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 展开列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 展开列的索引 |

#### expander

展开列图标

| Prop | Type | Description |
| ---- | ---- | ----------- |
| item | object | 循环中的当前项 |
| value | any | item 中 field 字段对应的值 |
| columnVM | string | 该列组件实例 |
| rowIndex | number | 行的索引 |
| columnIndex | number | 列的索引 |

## UTableViewColumnConfig API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text-field | string |  |  | 配置列的下拉弹窗里，指定数据展示的字段 |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| value-field | string |  | `'value'` | 在单选、多选操作、渲染树形数据中，指定数据唯一值的字段 |
| value.sync, v-model | any |  |  |  |
| show-footer | boolean |  | `true` | 控制弹出层的确定/取消按钮是否展示 |

### Slots

#### title



#### item

自定义选项的结构和样式

### Events

#### @select



| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | USelectItem | 选择项子组件 |
| $event.oldVM | USelectItem | 旧的选择项子组件 |
| senderVM | USelect | 发送事件实例 |

## UTableViewColumnDynamic API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| value-field | string |  | `'value'` | 在单选、多选操作、渲染树形数据中，指定数据唯一值的字段 |
| sortable | boolean |  | `false` | 设置该列是否可以排序 |
| default-order | string | `[object Object]`<br/>`[object Object]` | `'asc'` | 该列首次点击时的排序顺序 |
| fixed | boolean |  | `false` | 该列是否固定。左侧固定列需要从第一列到当前固定列之间的列都是固定列。右侧固定列需要最后一列到当前固定列之间的列都是固定列。 |
| ellipsis | boolean |  | `false` | 文字过长是否省略显示。默认文字超出时会换行。 |
| hidden | boolean |  | `false` |  |
| width | string \| number |  |  | 设置列宽度，可设置为数字或百分比 |

### Slots

#### title



#### cell

自定义选项的结构和样式

## UTableViewColumnGroup API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  |  |

### Slots

#### (default)

在表格中插入`<u-table-view-column>`子组件

#### title

对标题进行自定义

| Prop | Type | Description |
| ---- | ---- | ----------- |
| columnVM | string | 该列组件实例 |
| columnIndex | number | 列的索引 |

## UTableViewExpander API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| expand-icon | icon |  |  | 展开时图标 |
| collapse-icon | icon |  |  | 关闭时图标 |

