### 基本用法

```html
<u-calendar-view value="2022-02-01"></u-calendar-view>
```

### 数据日历

```vue
<template>
    <u-calendar-view :data="data" :value.sync="value" @change="onChange" @select="onSelect">
        <template #default="scope">
            <p v-if="scope.item.apple">苹果: {{scope.item.apple}}</p>
            <p v-if="scope.item.orange">橘子: {{scope.item.orange}}</p>
        </template>
    </u-calendar-view>
</template>
<script>
export default{
    data() {
        return {
            data: [{
                startTime: '2021-10-05',
                orange: 8,
            }, {
                startTime: '2021-10-16',
                apple: 1,
            }, {
                startTime: '2021-10-31',
                apple: 3,
                orange: 2,
            }],
            value: '2021-10-01',
        };
    },
    watch: {
        value(val, oldVal) {
            console.log('val', val);
            console.log('oldVal', oldVal);
        },
    },
    methods: {
        onChange(val) {
            console.log('onChange', val);
        },
        onSelect(val) {
            console.log('onSelect', val);
        },
    },
};
</script>
```

### 数据日历，reload方法

```vue
<template>
<u-linear-layout>
    <u-calendar-view :data-source="load" :value.sync="value" ref="calendarView">
        <template #default="scope">
            <p v-if="scope.item.apple">苹果: {{scope.item.apple}}</p>
            <p v-if="scope.item.orange">橘子: {{scope.item.orange}}</p>
        </template>
    </u-calendar-view>
    <u-button @click="reload">重新加载</u-button>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((resolve, rej) => setTimeout(() => resolve(data), timeout));

export default {
    data() {
        return {
            value: '2021-10-01',
        };
    },
    methods: {
        load(params) {
            console.log('load');
            return mockRequest([{
                startTime: '2021-10-05',
                orange: 8,
            }, {
                startTime: '2021-10-16',
                apple: 1,
            }, {
                startTime: '2021-10-31',
                apple: 3,
                orange: 2,
            }]);
        },
        reload() {
            console.log('reload');
            this.$refs.calendarView.reload();
        }
    },
}
</script>
```

### 普通模式

``` html
<u-calendar-view :show-advance="false" :first-day-of-week="7" value="2022-02-01"></u-calendar-view>
```

### 最大值最小值

``` html
<u-calendar-view min-date="2021-01-01" max-date="2021-08-01"></u-calendar-view>
```
