### 日期范围复杂情况

``` vue
<template>
    <u-date-picker
        range
        picker="date"
        width="large"
        minDate="2023-01-01"
        maxDate="2023-07-31"
        start-date="2023-03-10"
        end-date="2023-03-20"
        preIcon="home"
        suffixIcon="time"
        clearable
        @change="onChange"
        @slect="onSelect"
        @toggle="onToggle">
    </u-date-picker>
</template>
<script>
export default {
    methods: {
        onChange($event) {
            console.log('onChange', $event);
        },
        onSelect($event) {
            console.log('onSelect',$event);
        },
        onToggle($event) {
            console.log('onToggle',$event);
        },
    },
};
</script>
```

### 日期范围禁用

``` html
<u-date-picker
    range
    picker="date"
    start-date="2023-03-10"
    end-date="2023-03-20"
    disabled>
</u-date-picker>
```

### 日期范围只读

``` html
<u-date-picker
    range
    picker="date"
    start-date="2023-03-10"
    end-date="2023-03-20"
    readonly>
</u-date-picker>
```
