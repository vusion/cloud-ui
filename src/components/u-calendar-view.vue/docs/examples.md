### 基本用法

```html
<u-calendar-view></u-calendar-view>
```

### 数据日历

```vue
<template>
    <u-calendar-view :data="data">
        <template v-slot="scope">
            <p v-if="scope.item.data.Apple">苹果: {{scope.item.data.Apple}}</p>
            <p v-if="scope.item.data.Orange">橘子: {{scope.item.data.Orange}}</p>
        </template>
    </u-calendar-view>
</template>
<script>
export default{
    data() {
        return {
            data: [{
                StartTime: '2021-10-05',
                Apple: 8,
                Orange: 8,
            }, {
                StartTime: '2021-10-16',
                Apple: 1,
                Orange: 2,
            }, {
                StartTime: '2021-10-31',
                Apple: 3,
                Orange: 2,
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
