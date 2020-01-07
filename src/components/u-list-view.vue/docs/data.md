### 数据和数据源

基础示例中采用的是标签形式添加数据，适合数据量小、数据操作简单或对模板有定制化的场景。

如果数据量较大，或要使用一些高级功能时，推荐使用`data`或`data-source`属性。`data`属性的格式为`Array<{ text, value }>`，下面简写为`Array<Item>`；`data-source`属性一般接受一个`load`函数，用于异步加载。

#### 纯前端数据

``` vue
<template>
<u-list-view :data="data" style="height: 182px"></u-list-view>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 100 条数据
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

### 分页

#### 前端分页

当数据量较大时，开启`pageable`属性可以进行前端分页，同时可以用`page-size`属性修改默认分页大小。

``` vue
<template>
<u-list-view :data="data" pageable :page-size="50" style="height: 182px"></u-list-view>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let data = [];
        for (let i = 1; i <= 500; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端分页

在`data-source`属性中传入`load`方法，用于接收完整的后端数据。

`load`方法要求返回一个`Promise<Array<Item>>`或`Promise<{ data: Array<Item>, total: Number }>`的格式。该会在组件初始化时会被调用一次，如果不需要可以将`initial-load`属性设置为`false`。

开启`pageable`属性时可以进行前端分页。

``` vue
<template>
<u-list-view :data-source="load" pageable :page-size="20" style="height: 182px"></u-list-view>
</template>
<script>
// 模拟构造远程数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### 后端分页

如果要使用后端分页，在`data-source`属性中传入`load`方法的基础上，开启`remote-paging`功能。

这时`load`方法会接受一个与分页相关的`paging`参数：

``` js
params.paging = {
    size: Number, // 每页大小
    number: Number, // 页数。从1开始计
    offset: Number, // 偏移量：(number - 1) * size
    limit: Number, // 同 size
}
```

要求返回一个`Promise<Array<Item>>`或`Promise<{ data: Array<Item>, total: Number }>`的格式。翻页是否到底，根据`total`字段判断，如果没有则根据最后一次数组为空判断。

``` vue
<template>
<u-list-view :data-source="load" pageable remote-paging style="height: 182px"></u-list-view>
</template>
<script>
// 模拟构造数量较多的 500 条远程数据
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ paging }) {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.slice(paging.offset, paging.offset + paging.limit));
                }, 500);
            });
        },
    },
};
</script>
```
