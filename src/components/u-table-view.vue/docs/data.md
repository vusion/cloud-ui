### 数据与数据源

当数据量不大时，可以用`data`属性一次性传进来`data`属性的格式为`Array<{ [field]: string, ... }>`，如基础示例中的例子。

当数据量较大，或需要执行后端分页、排序和过滤等操作时，推荐使用`data-source`。

### 分页

#### 前端分页

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
            item.name += '-' + (Math.random() * 20 >> 0);
            item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10">
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging>
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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

#### 翻页器功能

使用`show-total`、`show-sizer`、`show-jumper`这几个属性，可以对应开启翻译器的显示总页数、切换每页大小、页面跳转功能。

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
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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

### 排序

在`<u-table-view-column>`上给可以排序的列添加`sortable`属性，在`<u-table-view>`用`sorting`属性指定默认的排序字段和顺序。

#### 前端排序

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
            item.name += '-' + (Math.random() * 20 >> 0);
            item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端排序

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
    :sorting="{ field: 'loginTime', order: 'asc' }">
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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
                    resolve(remoteData);
                }, 400);
            });
        },
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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

#### 后端排序且分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging, sorting }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: remoteData.length,
                        data: remoteData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

### 过滤

#### 前端过滤

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
            item.name += '-' + (Math.random() * 20 >> 0);
            item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
            item.createdTime += i * 1000 * 3600 * 24;
            item.loginTime += i * 1000 * 3600 * 24;
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端过滤

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10"
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
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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
                    resolve(remoteData);
                }, 400);
            });
        },
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
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
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

#### 后端过滤、排序且分页

``` vue
<template>
<u-table-view striped :data-source="load" pageable :page-size="10" remote-paging
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
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.name += '-' + (Math.random() * 20 >> 0);
    item.phone = String(+item.phone + (Math.random() * 10 >> 0) * Math.pow(10, Math.random() * 8 >> 0));
    item.createdTime += i * 1000 * 3600 * 24;
    item.loginTime += i * 1000 * 3600 * 24;
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging, sorting, filtering }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.address === filtering.address) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: filteredData.length,
                        data: filteredData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```
