### 分页
#### 纯数组前端分页

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 刚开始为空的情况

``` vue
<template>
<u-table-view striped :data-source="data" pageable :page-size="10">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return { data: undefined };
    },
    created() {
        setTimeout(() => {
            this.data = [];
        }, 200);
    },
};
</script>
```

### 排序

#### 纯数组前端排序

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 后端排序，前端分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(remoteData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

### 过滤
#### 纯前端过滤

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
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
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"
></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 后端过滤，前端分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
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
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 175; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting, filtering }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.address === filtering.address) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    console.log('filteredData', filteredData)
                    resolve(filteredData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

### 表头吸顶

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
]" style="max-height: 300px;">
    <u-table-view-column fixed title="序号" type="index" width="50"></u-table-view-column>
    <u-table-view-column fixed title="用户名" field="name" width="70"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="160"></u-table-view-column>
    <u-table-view-column title="电子邮箱" field="email" width="200"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="创建时间" field="createdTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    <u-table-view-column fixed title="操作" width="120">
        <template slot="cell">
            <u-link>详情</u-link>&nbsp;
            <u-link>设置</u-link>
        </template>
    </u-table-view-column>
</u-table-view>
```

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

### 文字过长问题

#### 默认多行显示

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '张三张三张三张三张三张三张三张三张三张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四李四李四李四李四李四李四李四李四李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 省略显示

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '张三张三张三张三张三张三张三张三张三张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四李四李四李四李四李四李四李四李四李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column ellipsis title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column ellipsis title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 列分布

#### 全部百分比

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="20%"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="20%"></u-table-view-column>
    <u-table-view-column title="区县" field="district" width="40%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="40%"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 百分比与数字结合，横向滚动

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="200"></u-table-view-column>
    <u-table-view-column title="区县" field="district" width="200"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 固定列

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column fixed title="序号" field="id" width="5%"></u-table-view-column>
    <u-table-view-column fixed title="姓名" field="name" width="10%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="200"></u-table-view-column>
    <u-table-view-column fixed title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 多选的问题

另一种是通过`value-field`属性指定数据中唯一值的字段，再通过`:values.sync`对选择值进行双向绑定。

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data="data">
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

### 局部报错

局部报错不应该让整个表格都挂掉。

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address">
        <template slot="cell" slot-scope="{ item, value }">
            <div>{{ value | someFilter }}</div>
        </template>
    </u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    filters: {
        someFilter(value) {
            throw Error('[ERROR] some errors');
        },
    },
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

### value-field

value-field 需要编辑时，建议使用另一个字段。

``` vue
<template>
<u-table-view striped value-field="name" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
    <u-table-view-column title="用户名" field="name" width="12%">
        <template slot="cell" slot-scope="{ item, value }">
            <u-input v-model="item.name"></u-input>
        </template>
    </u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address">
        <template slot="cell" slot-scope="{ item, value }">
            <u-input v-model="item.address"></u-input>
        </template>
    </u-table-view-column>
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
###  数据后来加载过来时，高度应当重新计算

``` vue
<template>
<u-table-view striped :data="data">
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
            data: undefined,
        };
    },
    created() {
        this.load();
    },
    methods: {
        load() {
            setTimeout(() => {
                this.data = [
                    { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                    { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                    { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                    { id: '40e8ca488a1c4bce', name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                    { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
                ];
            }, 2000);
        },
    },
};
</script>
```

#### data-source Error 的情况

``` vue
<template>
<u-table-view striped :data-source="load">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('error');
                }, 400);
            });
        },
    },
};
</script>
```

### 步骤条中使用

``` vue
<template>
<u-steps :value="value">
    <u-step title="Step1">
    Content1
    <u-linear-layout>
        <u-button @click="onNext">下一步</u-button>
    </u-linear-layout>
    </u-step>
    <u-step title="Step2">
        <u-table-view striped :data="data">
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
        <u-linear-layout>
            <u-button @click="onPrev">上一步</u-button>
            <u-button @click="onNext">下一步</u-button>
        </u-linear-layout>
    </u-step>
    <u-step title="Step3">
        Content3
        <u-linear-layout>
            <u-button @click="onPrev">上一步</u-button>
            <u-button>创建</u-button>
        </u-linear-layout>
    </u-step>
</u-steps>
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
            value: 0,
        };
    },
    methods: {
        onNext() {
            this.value += 1;
        },
        onPrev() {
            this.value -= 1;
        },
    },
};
</script>
```

### 排序+调整列宽

``` vue
<template>
<u-table-view resizable striped :data="data" pageable :page-size="10"
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
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"
></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

### 切换时分页调整不回来，分页报错

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging show-total show-sizer>
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 15; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        total: remoteData.length,
                        data: remoteData.slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

#### 过滤下拉菜单不应该嵌在表格内部

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
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
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"
></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
        ];

        return { data: baseData };
    },
};
</script>
```

### 空表格显示数据异常

``` vue
<template>
<div>
    <u-button @click="add(), $refs.tableView.load()">添加</u-button>
    <u-table-view ref="tableView" striped :data-source="load" pageable :page-size="10" remote-paging show-total show-sizer>
        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</div>
</template>
<script>
const data = [];

export default {
    methods: {
        add() {
            data.push({ name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 });
        },
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        totalElements: 0,
                        content: [],
                    });
                }, 400);
            });
        },
    },
};
</script>
```

### 空表格添加数据不会 reload

``` vue
<template>
<div>
    <u-button @click="add(), $refs.tableView.load()">添加</u-button>
    <u-table-view ref="tableView" striped :data-source="load" pageable :page-size="10" remote-paging show-total show-sizer>
        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</div>
</template>
<script>
const data = [];

export default {
    methods: {
        add() {
            data.push({ name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 });
        },
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 400);
            });
        },
    },
};
</script>
```

#### u-grid-layout 和 u-tabs 中的布局问题

``` vue
<template>
<u-tabs>
    <u-tab title="A">
        <u-grid-layout>
            <u-grid-layout-row :repeat="2">
                <u-grid-layout-column :span="1">
                    <u-table-view striped :data="data" pageable :page-size="5">
                        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
                        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                        <u-table-view-column title="地址" field="address"></u-table-view-column>
                        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
                    </u-table-view>
                </u-grid-layout-column>
                <u-grid-layout-column :span="1">
                    <u-table-view striped :data="data" pageable :page-size="5">
                        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
                        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                        <u-table-view-column title="地址" field="address"></u-table-view-column>
                        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
                    </u-table-view>
                </u-grid-layout-column>
            </u-grid-layout-row>
        </u-grid-layout>
    </u-tab>
    <u-tab title="B">
        <u-grid-layout>
            <u-grid-layout-row :repeat="2">
                <u-grid-layout-column :span="1">
                    <u-table-view striped :data="data" pageable :page-size="5">
                        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
                        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                        <u-table-view-column title="地址" field="address"></u-table-view-column>
                        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
                    </u-table-view>
                </u-grid-layout-column>
                <u-grid-layout-column :span="1">
                    <u-table-view striped :data="data" pageable :page-size="5">
                        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
                        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                        <u-table-view-column title="地址" field="address"></u-table-view-column>
                        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
                    </u-table-view>
                </u-grid-layout-column>
            </u-grid-layout-row>
        </u-grid-layout>
    </u-tab>
</u-tabs>

</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

### loading 的问题

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-button @click="load">加载</u-button>
    <u-table-view striped :data="data" pageable :page-size="10" :loading="loading">
        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));

export default {
    data() {
        return {
            loading: true,
            data: [],
        };
    },
    methods: {
        async load() {
            this.loading = true;

            const baseData = [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ];

            // 构造数量较多的 500 条数据
            const data = [];
            for (let i = 0; i < 75; i++) {
                const item = Object.assign({}, baseData[i % 5]);
                item.name += '-' + i;
                item.phone = String(+item.phone + i);
                item.createdTime += i * 1000 * 3600 * 24;
                item.loginTime += i * 1000 * 3600 * 24;
                data.push(item);
            }

            const result = await mockRequest(data);
            this.data = result;

            this.loading = false;
        }
    }
};
</script>
```

#### 前端排序不需要 sorting 也能保持状态

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-button @click="load">加载</u-button>
    <u-table-view :data-source="data" pageable :page-size="10">
        <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
        <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));

// 模拟数据服务
const mockService = {
    loadList() {
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
                item.name += '-' + i;
                item.phone = String(+item.phone + i);
                item.createdTime += i * 1000 * 3600 * 24;
                item.loginTime += i * 1000 * 3600 * 24;
                result.push(item);
            }

            return result;
        })();

        // 在这里模拟了一个后端分页的请求
        return mockRequest(mockData);
    },
};

export default {
    data() {
        return {
            data: [],
            sorting: { field: 'loginTime', order: 'asc' },
        };
    },
    methods: {
        async load() {
            const result = await mockService.loadList();
            this.data = result;
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
<u-table-view :data-source="load" value-field="name" pageable :page-size="10" remote-paging
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column type="checkbox" width="15%"></u-table-view-column>
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
        item.name += '-' + i;
        item.phone = String(+item.phone + i);
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

### 控制显隐

目前使用 ResizeObserver 后，`v-if`和`v-show`均可。
#### v-if

``` vue
<template>
<div>
    <u-link @click="visible = !visible">展开/收起</u-link>
    <div>
        <u-table-view v-if="visible" striped :data="data" style="max-height: 300px;">
            <u-table-view-column title="序号" field="id"></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
        </u-table-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            data: [
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
            ],
        };
    },
};
</script>
```

#### v-show

``` vue
<template>
<div>
    <u-link @click="visible = !visible">展开/收起</u-link>
    <div>
        <u-table-view v-show="visible" striped :data="data" style="max-height: 300px;">
            <u-table-view-column title="序号" field="id"></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
        </u-table-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            data: [
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
            ],
        };
    },
};
</script>
```

### 树型展示，点击选中

``` vue
<template>
<u-table-view :data-source="load" tree-display checkable @select="onSelect" selectable @tree-toggle-expanded="onToggle">
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
        onSelect() {
            console.log('select');
        },
        onToggle(e, t) {
            console.log(e, t);
        }
    },
};
</script>
```

### 树型展示

同步数据。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout direction="vertical">
        <u-table-view :data-source="list" tree-display ref="tableView">
            <u-table-view-column type="checkbox" width="30"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
        <u-button @click="add" color="primary">添加子数据</u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical">
        <u-table-view :data-source="list1" tree-display ref="tableView1" parentField="parentId" valueField="name" pagination>
            <u-table-view-column type="checkbox" width="30"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="20%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
        <u-linear-layout>
            <u-button @click="add1" color="primary">添加子数据</u-button>
            <u-button @click="add2" color="primary">添加第二层子数据</u-button>
        </u-linear-layout>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    data(){
        return {
            list: this.getList(),
            list1: [
                { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, parentId: undefined },
                { name: '张三11', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000, parentId: '张三'}
            ]
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
        },
        add1() {
            const name = '小明' + (new Date().getTime());
            const item = { name: name, phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000, parentId: '张三' };
            this.list1.push(item);
        },
        add2() {
            const name = '李四' + (new Date().getTime());
            const item = { name: name, phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000,  parentId: '张三11' };
            this.list1.push(item);
        },
    },
};
</script>
```


### 显隐列配置

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号" field="id"></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :data-source="loadConfigData"
                    :value="configValue"
                    value-field="key"
                    @select="onSelectConfig"
                    style="color:blue"
                    :show-footer="false">
                    <template #title>
                        <i-ico name="menu"></i-ico>
                        <u-text>配置</u-text>
                    </template>
                    <template #item="current">
                        <u-text :text="current.item.name"></u-text>
                    </template>
                </u-table-view-column-config>
            </template>
        </u-table-view>
        双向绑定的值：{{ configValue }}
    </u-linear-layout>
    <u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号" field="id"></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :data-source="dataSource"
                    value-field="key"
                    @select="onSelectConfig"
                    style="color:blue"
                    :show-footer="false">
                    <template #title>
                        <i-ico name="menu"></i-ico>
                        <u-text>配置</u-text>
                    </template>
                    <template #item="current">
                        <u-text :text="current.item.name"></u-text>
                    </template>
                </u-table-view-column-config>
            </template>
        </u-table-view>
        <u-button @click="onSetDataSource">点击切换数据源</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号"><span slot="cell" slot-scope="{ item }">{{ item.id }}</span></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :value.sync="configValue"
                    @select="onSelectConfig">
                    <template #title><i-ico name="add"></i-ico></template>
                </u-table-view-column-config>
            </template>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号"><span slot="cell" slot-scope="{ item }">{{ item.id }}</span></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :data-source="dataSource1">
                    <template #title><i-ico name="add"></i-ico></template>
                    <template #item="current">
                        <u-text :text="current.item"></u-text>
                    </template>
                </u-table-view-column-config>
            </template>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号11"><span slot="cell" slot-scope="{ item }">{{ item.id }}</span></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :data-source="['name', 'province']">
                    <template #title><i-ico name="add"></i-ico></template>
                    <template #item="current">
                        <u-text :text="current.item"></u-text>
                    </template>
                </u-table-view-column-config>
            </template>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-linear-layout>
            <u-popup-combination ref="popup_combination1">
                <template #reference>
                    <i-ico ref="ico2" name="setting" icotype="left">
                        <u-text ref="text28" text="列"></u-text>
                    </i-ico>
                </template>
                <u-checkboxes :value.sync="variable1" :data-source="loadCheckList" value-field="key">
                    <template #item="current">
                        <u-text :text="current.item.name"></u-text>
                    </template>
                </u-checkboxes>
            </u-popup-combination>
        </u-linear-layout>
        <u-table-view striped :data="data" style="max-height: 300px;" configurable>
            <u-table-view-column title="序号" field="id"></u-table-view-column>
            <u-table-view-column title="姓名" field="name"></u-table-view-column>
            <template #config-columns>
                <u-table-view-column-config
                    :data-source="loadCheckList"
                    :value.sync="variable1"
                    text-field="name"
                    value-field="key"
                    :hiddenConfig="true">
                </u-table-view-column-config>
            </template>
            <u-table-view-column title="省份" field="province"></u-table-view-column>
            <u-table-view-column title="城市" field="city"></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
                { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
                { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
                { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
                { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
                { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
            ],
            configData: ['姓名', '省份', '城市'].map((item) => ({ text: item, value: item })),
            configValue: ['name', 'province'],
            variable1: ['name'],
            variable2: [],
            dataSource: undefined,
            dataSource1: ['name', 'province'],
        };
    },
    methods: {
        loadConfigData() {
            console.log('loadConfigData');
             return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([{name: '姓名', key: 'name'}, {name: '省份', key: 'province'}]);
                }, 500);
            });
        },
        onSelectConfig(value) {
            console.log('onSelectConfig', value);
        },
        loadCheckList() {
            return [{name: '姓名', key: 'name'}, {name: '省份', key: 'province'}, {name: '城市', key: 'city'}];
        },
        onSetDataSource() {
            console.log('set');
            this.seting = !this.seting;
            this.dataSource = this.seting?this.loadConfigData:undefined;
        }
    }
};
</script>
```

### 编辑行

添加新行时，select数据load情况

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
                <u-validator key="aaa" v-if="item.adding || item.editing" label="邮箱" rules="required | email" placement="bottom" :ref="`email_${index}`">
                    <u-select :data-source="loadSelect" key="ssss"></u-select>
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
            count: 0,
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
        },
        loadSelect() {
            console.log('select load');
            this.count = this.count + 1;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([{text: `姓名${this.count}`, value: 'name'}, {text: '省份', value: 'province'}]);
                }, 500);
            });
        }
    }
};
</script>
```


### 动态列

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <u-text>from data</u-text>
    <u-linear-layout>
        <u-table-view striped :data-source="data">
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list">
                <div slot="title" slot-scope="{ columnItem }">
                    <u-text>{{ columnItem.name }}</u-text>
                </div>
                <div slot="cell" slot-scope="{ item, columnItem }">
                    <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                </div>
            </u-table-view-column-dynamic>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout direction="vertical" gap="small">
        <u-linear-layout><u-button @click="onRefresh">刷新</u-button></u-linear-layout>
        <u-linear-layout>
            <u-table-view striped :data-source="load" ref="tableview">
                <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
                <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
                <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
                <u-table-view-column-dynamic :data-source="loadSubList">
                    <div slot="title" slot-scope="{ columnItem }">
                        <u-text>{{ columnItem.name }}</u-text>
                    </div>
                    <div slot="cell" slot-scope="{ item, columnItem }">
                        <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                    </div>
                </u-table-view-column-dynamic>
                <u-table-view-column title="地址" field="address"></u-table-view-column>
                <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
            </u-table-view>
        </u-linear-layout>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>from load()</u-text>
        <u-table-view striped :data-source="load">
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list">
                <div slot="title" slot-scope="{ columnItem }">
                    <u-text>{{ columnItem.name }}</u-text>
                </div>
                <div slot="cell" slot-scope="{ item, columnItem }">
                    <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                </div>
            </u-table-view-column-dynamic>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="loadSubList">
                <div slot="title" slot-scope="{ columnItem }">
                    <u-text>{{ columnItem.name }}</u-text>
                </div>
                <div slot="cell" slot-scope="{ item, columnItem }">
                    <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                </div>
            </u-table-view-column-dynamic>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>fixed</u-text>
        <u-table-view striped :data-source="data" defaultColumnWidth="200">
            <u-table-view-column type="checkbox" title="选择"></u-table-view-column>
            <u-table-view-column title="用户名" field="name"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone"></u-table-view-column>
            <u-table-view-column title="地址" field="address"  width="150px" fixed></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date"  width="150px" fixed></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list" width="150px" fixed>
                <div slot="title" slot-scope="{ columnItem }">
                    <u-text>{{ columnItem.name }}</u-text>
                </div>
                <div slot="cell" slot-scope="{ item, columnItem }">
                    <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                </div>
            </u-table-view-column-dynamic>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>sortable</u-text>
        <u-table-view striped :data-source="load1" pagination>
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list" sortable>
                <template #title="current">
                    <u-text>{{ current.columnItem.name }}</u-text>
                </template>
                <template #cell="current">
                    <u-text>{{ current.item.name }} {{ current.columnItem.name }}</u-text>
                </template>
            </u-table-view-column-dynamic>
            <u-table-view-column title="地址" field="address"></u-table-view-column>
            <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>hidden</u-text>
        <u-table-view striped :data-source="data">
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list" hidden>
                <template #title="current">
                    <u-text>{{ current.columnItem.name }}</u-text>
                </template>
                <template #cell="current">
                    <u-text>{{ current.item.name }} {{ current.columnItem.name }}</u-text>
                </template>
            </u-table-view-column-dynamic>
        </u-table-view>
    </u-linear-layout>
    <u-linear-layout>
        <u-text>ellipsis</u-text>
        <u-table-view striped :data-source="data">
            <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
            <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone" width="50%"></u-table-view-column>
            <u-table-view-column-dynamic :data-source="list" width="100" ellipsis>
                <template #title="current">
                    <u-text>{{ current.columnItem.name }}</u-text>
                </template>
                <template #cell="current">
                    <u-text overflow="ellipsis">{{ current.item.address }}</u-text>
                </template>
            </u-table-view-column-dynamic>
        </u-table-view>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', disabled: true, name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
            list: [{name: '一月份', value: 'column1'}, {name: '二月份', value: 'column2'}],
            count: 0,
        };
    },
    methods: {
        load() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.data.slice(0));
                }, 500);
            });
        },
        load1({page, sort, order}) {
            console.log('load1', sort, order);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        list:  [{ id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                            { id: '5cd49be8f65c4738', name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                            { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                            { id: '40e8ca488a1c4bce', disabled: true, name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                            { id: '150823cc351642b6', name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 }],
                        total: 5,
                    });
                }, 500);
            });
        },
        loadSubList() {
            console.log('loadSubList');
            this.count = this.count + 1;
            let data = [{name: `一月份${this.count}`, columnName:'one'}, {name: `二月份${this.count}`, columnName:'tow'}];
            if(this.count === 3) {
                // data.push({name: `三月份${this.count}`, columnName:'three'});
                data = [];
            }
            if(this.count === 5) {
                data.push({name: `三月份${this.count}`, columnName:'three'});
                data.push({name: `四月份${this.count+1}`, columnName:'four'});
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 500);
            });
        },
        onRefresh() {
            this.$refs.tableview.reload();
        },
    }
};
</script>
```

### 行列与表头合并

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-text>静态列</u-text>
    <u-table-view line :data-source="data">
        <u-table-view-column type="checkbox" title="选择"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column-group title="用户信息">
            <u-table-view-column title="用户名" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone"></u-table-view-column>
        </u-table-view-column-group>
        <!-- 测试空组过滤 -->
        <u-table-view-column-group title="用户信息"></u-table-view-column-group>
        <u-table-view-column-group title="用户信息2">
            <u-table-view-column title="用户名2" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码2" field="phone"></u-table-view-column>
        </u-table-view-column-group>
        <u-table-view-column title="创建日期与登录日期表头合并" :col-span="2" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
    </u-table-view>
    <!-- <u-text>动态列</u-text>
    <u-table-view striped :data-source="data">
        <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
        <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column-group title="分组">
            <u-table-view-column-dynamic :data-source="list">
                <div slot="title" slot-scope="{ columnItem }">
                    <u-text>{{ columnItem.name }}</u-text>
                </div>
                <div slot="cell" slot-scope="{ item, columnItem }">
                    <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
                </div>
            </u-table-view-column-dynamic>
        </u-table-view-column-group>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view> -->
    <u-text>动态列加载</u-text>
    <u-table-view striped :data-source="load">
        <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
        <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
        <u-table-view-column-dynamic :data-source="loadSubList">
            <div slot="title" slot-scope="{ columnItem }">
                <u-text>{{ columnItem.name }}</u-text>
            </div>
            <div slot="cell" slot-scope="{ item, columnItem }">
                <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
            </div>
        </u-table-view-column-dynamic>
        <u-table-view-column-group title="用户信息">
            <u-table-view-column title="用户名" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone"></u-table-view-column>
        </u-table-view-column-group>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', colSpan: [[2, 2]], name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', disabled: true, rowSpan: [[1, 2]], name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '李华', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
            list: [{name: '一月份', value: 'column1'}, {name: '二月份', value: 'column2'}, {name: '三月份', value: 'column3'}],
            count: 0,
        };
    },
    methods: {
        load() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.data.slice(0));
                }, 500);
            });
        },
        loadSubList() {
            this.count = this.count + 1;
            const data = [{name: `一月份${this.count}`, columnName:'one'}, {name: `二月份${this.count}`, columnName:'tow'}];
            if(this.count === 3) {
                data.push({name: `三月份${this.count}`, columnName:'three'});
            }
            if(this.count === 5) {
                data.push({name: `三月份${this.count}`, columnName:'three'});
                data.push({name: `四月份${this.count+1}`, columnName:'four'});
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 500);
            });
        },
    }
};
</script>
```

### 行列与表头合并+固定列

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-text>静态列</u-text>
    <u-button @click="show=!show">显隐 {{ show }}</u-button>
    <u-button color="primary" @click="() => $refs.tableView.exportExcel()">导出 Excel</u-button>
    <u-table-view line :data-source="data" :default-column-width="100" ref="tableView" configurable>
        <u-table-view-column type="checkbox" title="选择" fixed></u-table-view-column>
        <u-table-view-column title="地址" field="address" fixed ></u-table-view-column>
        <u-table-view-column-group title="用户信息2">
            <u-table-view-column title="序号" fixed type="index"></u-table-view-column>
            <u-table-view-column title="用户名2" field="name" :auto-row-span="true" fixed></u-table-view-column>
            <u-table-view-column title="手机号码2" field="phone" fixed></u-table-view-column>
        </u-table-view-column-group>
        <u-table-view-column title="3333地址" field="address" v-if="show" fixed></u-table-view-column>
        <u-table-view-column-group title="用户信息">
            <u-table-view-column title="用户名" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone"></u-table-view-column>
            <u-table-view-column-group title="用户信息111">
                <u-table-view-column title="用户名111" field="name" :auto-row-span="true" :hidden="!show"></u-table-view-column>
                <u-table-view-column title="手机号码111" field="phone"></u-table-view-column>
            </u-table-view-column-group>
        </u-table-view-column-group>
        <!-- 测试空组过滤 -->
        <u-table-view-column-group title="用户信息"></u-table-view-column-group>
        <u-table-view-column title="3333地址" field="address" v-if="show" fixed></u-table-view-column>
        <u-table-view-column-group title="用户信息2">
            <u-table-view-column title="用户名2" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码2" field="phone"></u-table-view-column>
        </u-table-view-column-group>
        <u-table-view-column title="创建日期与登录日期表头合并" :col-span="2" field="loginTime" formatter="placeholder | date" width="10%" fixed></u-table-view-column>
        <u-table-view-column field="loginTime" formatter="placeholder | date" width="10%"></u-table-view-column>
        <u-table-view-column title="地址" field="address" fixed></u-table-view-column>
    </u-table-view>
   
    <u-text>动态列加载</u-text>
    <u-table-view striped :data-source="load">
        <u-table-view-column type="checkbox" title="选择" width="8%"></u-table-view-column>
        <u-table-view-column title="用户名" field="name" width="12%"></u-table-view-column>
        <u-table-view-column-dynamic :data-source="loadSubList">
            <div slot="title" slot-scope="{ columnItem }">
                <u-text>{{ columnItem.name }}</u-text>
            </div>
            <div slot="cell" slot-scope="{ item, columnItem }">
                <u-text>{{ item.name }} {{ columnItem.name }}</u-text>
            </div>
        </u-table-view-column-dynamic>
        <u-table-view-column-group title="用户信息">
            <u-table-view-column title="用户名" field="name" :auto-row-span="true"></u-table-view-column>
            <u-table-view-column title="手机号码" field="phone"></u-table-view-column>
        </u-table-view-column-group>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '07cdcb8ed5e94cec', name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
                { id: '5cd49be8f65c4738', colSpan: [[2, 2]], name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
                { id: 'f799a0467c494601', name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
                { id: '40e8ca488a1c4bce', disabled: true, rowSpan: [[1, 2]], name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
                { id: '150823cc351642b6', name: '李华', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
            ],
            list: [{name: '一月份', value: 'column1'}, {name: '二月份', value: 'column2'}, {name: '三月份', value: 'column3'}],
            count: 0,
            show: false,
        };
    },
    methods: {
        load() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.data.slice(0));
                }, 500);
            });
        },
        loadSubList() {
            this.count = this.count + 1;
            const data = [{name: `一月份${this.count}`, columnName:'one'}, {name: `二月份${this.count}`, columnName:'tow'}];
            if(this.count === 3) {
                data.push({name: `三月份${this.count}`, columnName:'three'});
            }
            if(this.count === 5) {
                data.push({name: `三月份${this.count}`, columnName:'three'});
                data.push({name: `四月份${this.count+1}`, columnName:'four'});
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 500);
            });
        },
    }
};
</script>
```

### 自定义展开列图标

``` vue
<template>
<u-table-view :data-source="data">
    <u-table-view-column type="expander" title="展开" width="8%">
        <template #expander="current">
            <u-table-view-expander
                :item="current.item"
                @toggle="current.toggle"
                expand-icon="decrease">
            </u-table-view-expander>
        </template>
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

### 虚拟列表

``` vue
<template>
<u-table-view striped :data="data" virtual  style="max-height: 200px" :virtualCount="5">
    <u-table-view-column title="用户名" field="name" width="15%" ellipsis></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%" ellipsis></u-table-view-column>
    <u-table-view-column title="地址" field="address" ellipsis></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%" ellipsis></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 10; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

### new Datasource

#### 纯数组前端分页

``` vue
<template>
<u-table-view striped :data="data" pagination :page-size="10">
    <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 纯前端分页数据源改变后分页情况

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout><u-button @click="changeList">变换data值</u-button></u-linear-layout>
    <u-table-view striped :data="data" pagination :page-size="10" :show-sizer="true" :page-size-options="[10,20,50]">
        <u-table-view-column title="用户名" field="name" width="15%"></u-table-view-column>
        <u-table-view-column title="手机号码" field="phone" width="20%"></u-table-view-column>
        <u-table-view-column title="地址" field="address"></u-table-view-column>
        <u-table-view-column title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data, initialData: data,  count: 0 };
    },
    methods: {
        changeList() {
            this.count = this.count +1;
            this.data = this.initialData.map((item)=> {
                item.name = item.name + this.count;
                return item;
            });
        }
    }
};
</script>
```

#### 排序

##### 纯数组前端排序

``` vue
<template>
<u-table-view striped :data="data" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

##### 后端排序，前端分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="用户名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column sortable title="手机号码" field="phone" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(remoteData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

#### 过滤
##### 纯前端过滤

``` vue
<template>
<u-table-view striped :data="data" pagination :page-size="10"
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
    <u-table-view-column sortable title="最近登录时间" field="loginTime" formatter="placeholder | date" width="20%"
></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
            { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
            { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
            { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
            { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.name += '-' + i;
            item.phone = String(+item.phone + i);
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

##### 后端过滤，前端分页

``` vue
<template>
<u-table-view striped :data-source="load" pagination :page-size="10"
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
const baseData = [
    { name: '张三', phone: '18612917895', email: 'zhangsan@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦', createdTime: 1464421931000, loginTime: 1527515531000 },
    { name: '小明', phone: '13727160283', email: 'xiaoming@163.com', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', createdTime: 1520864676000, loginTime: 1552400676000 },
    { name: '李四', phone: '18897127809', email: 'lisi@163.com', address: '浙江省杭州市滨江区秋溢路606号西可科技园', createdTime: 1494488730000, loginTime: 1558165530000 },
    { name: '李华', phone: '18749261214', email: 'lihua@163.com', address: '浙江省杭州市滨江区长河路590号东忠科技园', createdTime: 1476073921000, loginTime: 1544428081000 },
    { name: '王五', phone: '13579340020', email: 'wangwu@163.com', address: '浙江省杭州市滨江区网商路599号网易大厦二期', createdTime: 1468614726000, loginTime: 1531675926000 },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 175; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + i;
    item.phone = String(+item.phone + i);
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting, filtering }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.address === filtering.address) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    console.log('filteredData', filteredData)
                    resolve(filteredData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```
