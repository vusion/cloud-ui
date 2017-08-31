# 日期选择（DatePicker）

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-date-picker date="2018-08-08"></u-date-picker>
```

### 基本
``` html
<u-date-picker></u-date-picker>
```

### 最大值maxDate 最小值minDate
``` html
<u-date-picker date="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-date-picker>
```

### 禁用
``` html
<u-date-picker disabled date="2018-08-08" min-date="2017-08-08" max-date="2019-08-08"></u-date-picker>
```

### 获取改变值方法 change select
``` vue
<template>
<u-date-picker :date="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2014-12-01',
		}
	},
    methods: {
        change(newVal) {
            console.log(newVal);
        },
        select(newVal) {
        	console.log(newVal);
        },
        toggle(event) {
        	console.log(event.open);
        }
    },
};
</script>
```
