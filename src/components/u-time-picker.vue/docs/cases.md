### 日期范围
``` html
<u-time-picker time="15:46:33" min-time="15:30:00" max-time="14:45:00"></u-time-picker>
```

### 时间单位容错

``` vue
<template>
    <u-time-picker minUnit="minute" :time.sync="time"></u-time-picker>
</template>
<script>
export default {
    data() {
        return {
            // 传入值单位为秒，应该有容错
            time: '02:02:00',
        };
    },
    mounted() {
        setTimeout(() => {
            // 这里变更后，之前会变成当前时间，已修复
            this.time = '12:30:00';
        }, 200);
    },
};
</script>
```

### 范围选择变量绑定

``` vue
<template>
    <u-time-picker
        range
        :start-time.sync="starTime"
        :end-time.sync="endTime"
        @change="onChange">
    </u-time-picker>
</template>
<script>
export default {
    data() {
        return {
            starTime: '12:46:33',
            endTime: '18:18:33',
        };
    },
    methods: {
        onChange(event) {
            console.log(event);
        },
    },
};
</script>
```

### 表单验证

``` html
<u-form>
    <u-form-item label="单日期" required rules="required">
        <u-time-picker time="15:46:33" clearable></u-time-picker>
    </u-form-item>
    <u-form-item label="日期范围" required rules="required">
        <u-time-picker startTime="12:46:33" endTime="18:18:33" range clearable></u-time-picker>
    </u-form-item>
</u-form>
```
