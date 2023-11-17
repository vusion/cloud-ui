### 基本用法

``` html
<u-linear-layout>
    <u-date-picker date="2018-08-08" clearable></u-date-picker>
    <u-date-picker preIcon suffixIcon="calendar" width="400" date="2022-08-08" clearable></u-date-picker>
</u-linear-layout>
```
### 自动对焦

``` html
<u-date-picker date="2018-08-08" autofocus></u-date-picker>
```

### 弹窗对其方式

``` html
<u-linear-layout>
    <u-date-picker date="2018-08-08" placeholder="请选择日期" alignment="left"></u-date-picker>
    <u-date-picker date="2018-08-08" placeholder="请选择日期" alignment="right"></u-date-picker>
</u-linear-layout>

```

### 最大值和最小值
``` html
<u-date-picker date="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-date-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-date-picker readonly date="2018-08-08"></u-date-picker>
    <u-date-picker disabled date="2018-08-08"></u-date-picker>
</u-linear-layout>

```

### 方法
``` vue
<template>
<u-date-picker min-date="2021-06-18T00:00:00.000Z" time="morning" year-diff="1" max-date="2025" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-08-01',
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
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 周选择
``` vue
<template>
<u-date-picker min-date="2017-06-18T00:00:00.000Z" picker="week" time="morning" max-date="2024-5"  year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-08-01',
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
        	console.log(event.opened);
        }
    },
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 月份选择
``` vue
<template>
<u-date-picker min-date="2021-06-18T00:00:00.000Z" picker="month" time="morning" max-date="2024-5"  year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-08-01',
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
        	console.log(event.opened);
        }
    },
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 季度选择
``` vue
<template>
<u-date-picker min-date="2021-06-18T00:00:00.000Z" picker="quarter" time="morning" max-date="2024-5" year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2021-01-01',
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
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 年份选择
``` vue
<template>
<u-date-picker min-date="2021-07-18T00:00:00.000Z" max-date="2024" picker="year" time="morning" clearable year-diff="20" year-add="20" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-01-01',
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
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

### 日期范围选择

``` html
<u-date-picker
    range
    picker="date"
    start-date="2023-03-10"
    end-date="2023-03-20"
    min-date="2023-02-01"
    max-date="2023-05-02"
    clearable>
</u-date-picker>
```

### 周范围选择

``` html
<u-date-picker
    range
    picker="week"
    start-date="2023-03-10"
    end-date="2023-03-21"
    min-date="2023-02-01"
    max-date="2023-05-02"
    clearable>
</u-date-picker>
```

### 月份范围选择

``` html
<u-date-picker
    range
    picker="month"
    start-date="2021-06-10"
    end-date="2022-03-20"
    min-date="2021-02-01"
    max-date="2022-05-02"
    clearable>
</u-date-picker>
```

### 季度范围选择

``` html
<u-date-picker
    range
    picker="quarter"
    start-date="2021-06-10"
    end-date="2022-03-20"
    min-date="2020-12-01"
    max-date="2022-09-02">
</u-date-picker>
```

### 年度范围选择

``` html
<u-date-picker
    range
    picker="year"
    start-date="2001-06-10"
    end-date="2013-03-20"
    min-date="2000-12-01"
    max-date="2015-09-02">
</u-date-picker>
```
