# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-time-picker time="15:46:33"></u-time-picker>
```

### 禁用
``` html
<u-time-picker time="15:46:33" disabled="disabled"></u-time-picker>
```

### 只读
``` html
<u-time-picker time="15:46:33" readonly="readonly"></u-time-picker>
```

### 日期范围
``` html
<u-time-picker time="15:46:33" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

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
            console.log(time);
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| time | String | '00:00' | 当前的时间值 |
| minTime | String | '00:00' | 最小时间 |
| maxTime | String | '23:59' | 最大时间 |
| autofocus | Boolean | `false` | 是否自动获得焦点 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| visible | Boolean | `true` | 是否显示 |

### Events

#### @change

时间改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| time | Object | 改变后的时间 |
