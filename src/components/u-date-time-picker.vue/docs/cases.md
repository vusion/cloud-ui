### 范围选择最大最小值

``` html
<u-date-time-picker
    range
    start-date="2022-03-10"
    end-date="2022-03-20"
    min-date="2022-01-10 07:00:00"
    max-date="2022-12-12 07:00:00"
    clearable>
</u-date-time-picker>
```

### 范围变量绑定

``` vue
<template>
    <u-date-time-picker
        range
        :start-date.sync="startDate"
        :end-date.sync="endDate"
        @change="change"
        @select="select"
        @blur="blur">
    </u-date-time-picker>
</template>
<script>
export default {
    data() {
        return {
            startDate: '2022-03-10',
            endDate: '2022-03-20',
        };
    },
    methods: {
        change(event) {
            console.log('change', event);
        },
        select(event) {
            console.log('select', event);
        },
        blur(event) {
            console.log('blur', event);
        },
    },
};
</script>
```
