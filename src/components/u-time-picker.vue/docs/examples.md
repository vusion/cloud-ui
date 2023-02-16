### 基本用法

``` html
<u-time-picker time="15:46:33"></u-time-picker>
```

### 隐藏底部按钮

```html
<u-linear-layout>
    <u-time-picker time="15:46:33" :showFooterButton=false></u-time-picker>
    <u-time-picker time="15:46:33" :showRightNowButton=false></u-time-picker>
    <u-time-picker time="15:46:33" :showRightNowButton=false :showFooterButton=false></u-time-picker>
</u-linear-layout>
```

### 自定义底部文案

```html
<u-linear-layout>
    <u-time-picker cancelTitle="取" okTitle="确" rightNowTitle="此" ></u-time-picker>
</u-linear-layout>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-time-picker time="15:46:33" readonly="readonly"></u-time-picker>
    <u-time-picker time="15:46:33" disabled="disabled"></u-time-picker>
</u-linear-layout>
```

### 日期范围
``` html
<u-time-picker time="15:46:33" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

### 日期最小单位
``` vue
<template>
    <u-time-picker minUnit="minute" min-time="12:30" max-time="14:45" :time="time" @change="change($event.time)"></u-time-picker>
</template>
<script>
export default {
	data() {
		return {
			time: '13:12',
		};
	},
    methods: {
        change(time) {
            this.time = time;
            console.log(time);
        },
    },
};
</script>
```
### 方法

``` vue
<template>
<u-time-picker :time="time" @change="change($event.time)"></u-time-picker>
</template>

<script>
export default {
	data() {
		return {
			time: '20:12:12',
		};
	},
    methods: {
        change(time) {
            this.time = time;
            console.log(time);
        },
    },
};
</script>
```
