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

### 表单验证

``` html
<u-form>
    <u-form-item label="单日期" required rules="required">
        <u-date-picker date="2022-03-10" clearable></u-date-picker>
    </u-form-item>
    <u-form-item label="日期范围" required rules="required">
        <u-date-picker
            start-date="2022-03-10"
            end-date="2022-03-20"
            range
            clearable>
        </u-date-picker>
    </u-form-item>
</u-form>
```

### 格式化
``` vue
<template>
    <div>
        <u-date-picker
            :value.sync="date"
            picker="date"
            show-formatter="YYYY年M月"
            width="large"
            clearable
            @change="onChange"
            @slect="onSelect"
            @toggle="onToggle">
        </u-date-picker>
        <u-date-picker
            :value.sync="date"
            picker="week"
            :advanced-format="{ enable: false, value: 'YYYY年第Q季度' }"
            width="large"
            clearable
            @change="onChange"
            @slect="onSelect"
            @toggle="onToggle">
        </u-date-picker>
    </div> 
</template>
<script>
export default {
    data() {
        return {
            date: '2023-07-07'
        }
    },
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