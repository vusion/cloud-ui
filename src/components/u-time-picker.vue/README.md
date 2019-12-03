<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTimePicker 时间选择

## 示例
### 基本用法

``` html
<u-time-picker time="15:46:33"></u-time-picker>
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| time | string |  | `'00:00'` | 当前的时间值 |
| minUnit | string |  | `'second'` | 最小时间单位`'second'`或者是`'minute'` |
| minTime | string |  | `'00:00'` | 最小时间 |
| maxTime | string |  | `'23:59'` | 最大时间 |
| autofocus | boolean |  | `false` | 是否自动获得焦点 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| visible | boolean |  | `true` | 是否显示 |

### Events

#### @change

时间改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| time | object | 改变后的时间 |
