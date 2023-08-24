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

### 表单验证

``` html
<u-form>
    <u-form-item label="单日期" required rules="required">
        <u-date-time-picker date="2022-03-10" clearable></u-date-time-picker>
    </u-form-item>
    <u-form-item label="日期范围" required rules="required">
        <u-date-time-picker
            start-date="2022-03-10"
            end-date="2022-03-20"
            range
            clearable>
        </u-date-time-picker>
    </u-form-item>
</u-form>
```

### 格式化

``` vue
<template>
    <div>
        <u-date-time-picker 
            :advanced-format="{enable: true, value: 'YYYY年M月D日 HH时mm分ss秒'}"
            :value.sync="date"
            clearable></u-date-time-picker>
        <u-date-time-picker
            :advanced-format="{enable: true, value: 'YYYY年M月D日 HH时mm分'}"
            range
            :start-date.sync="startDate"
            :end-date.sync="endDate"
            @change="change"
            @select="select"
            @blur="blur">
        </u-date-time-picker>
    </div>

</template>
<script>
export default {
    data() {
        return {
            date: '2023-08-10',
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