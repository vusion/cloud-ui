### 控制显隐

如果要对表格组件控制显隐，请尽量使用`v-if`而不要使用`v-show`。

因为有些尺寸是动态计算得出的，初始隐藏时计算的某些值不正确，`v-if`可以通过`mounted`触发`handleResize`方法，而`v-show`则不能。

比如在下面的例子中，使用了`max-height`的情况下,`v-show`会有些小问题。

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
