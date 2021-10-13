### 基本用法

```html
<u-calendar-view></u-calendar-view>
```

### 数据日历

```vue
<template>
    <u-calendar-view :data="data">
        <template #default="scope">
            <p v-if="scope.item.data.apple">苹果: {{scope.item.data.apple}}</p>
            <p v-if="scope.item.data.orange">橘子: {{scope.item.data.orange}}</p>
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
        };
    },
    methods: {},
};
</script>
```

### 普通模式

``` html
<u-calendar-view :show-advance="false" :first-day-of-week="7"></u-calendar-view>
```

### 最大值最小值

``` html
<u-calendar-view min-date="2021-01-01" max-date="2021-08-01"></u-calendar-view>
```
