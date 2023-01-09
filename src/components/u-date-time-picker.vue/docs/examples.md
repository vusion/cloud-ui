### 基本用法

``` html
<u-linear-layout>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable></u-date-time-picker>
    <u-date-time-picker date="2018-08-08"></u-date-time-picker>
</u-linear-layout>
```

### 隐藏底部按钮

```html
<u-linear-layout>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable :showFooter=false></u-date-time-picker>
</u-linear-layout>
```

### 自定义底部文案

```html
<u-linear-layout>
    <u-date-time-picker footerContent="此时 取消 确定" preIcon suffixIcon="calendar" clearable></u-date-time-picker>
</u-linear-layout>
```

### 选择日期

``` vue
<template>
<u-date-time-picker v-model="date"></u-date-time-picker>
</template>
<script>
export default {
    data() {
        return {
            date: '',
        };
    },
};
</script>
```

### 自动获取焦点
``` html
<u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-date-time-picker date="2018-08-08" readonly></u-date-time-picker>
    <u-date-time-picker date="2018-08-08" disabled></u-date-time-picker>
</u-linear-layout>
```

### 最大值和最小值
``` html
<u-date-time-picker date="2017-05-12 8:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 07:00:00"></u-date-time-picker>
```

### 自定义底部
``` html
<u-date-time-picker clearable>
    <div slot="footer" style="padding: 15px 0 5px;text-align:center">
        插入文本或  HTML 至日期组件底部
    </div>
</u-date-time-picker>
```

### 方法
``` vue
<template>
<u-date-time-picker :date="date" @change="change($event.date)" @select="select($event)"></u-date-time-picker>
</template>

<script>
export default {
    data() {
        return {
            date: '2017-12-01 20:12:12',
        };
    },
    methods: {
        change(time) {
            console.log(time);
        },
        select(date) {
            console.log(date);
        }
    },
};
</script>
```
