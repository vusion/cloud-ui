# 日期时间选择 DateTimePicker

## 示例
### 基本形式

#### 声明式

### 基本 有初始值
``` html
<u-date-time-picker date="2018-08-08"></u-date-time-picker>
```

### 基本 无初始值
``` html
<u-date-time-picker></u-date-time-picker>
```

### 禁用
``` html
<u-date-time-picker date="2018-08-08" disabled="disabled"></u-date-time-picker>
```

### 只读
``` html
<u-date-time-picker date="2018-08-08" readonly="readonly"></u-date-time-picker>
```

### 最大值 最小值
``` html
<u-date-time-picker date="2017-05-12 8:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 07:00:00"></u-date-time-picker>
```

### 方法change
``` vue
<template>
<u-date-time-picker :date="date" @change="change($event.date)"></u-date-time-picker>
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
    },
};
</script>
```
