# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-time-picker time="15:46:33"></u-time-picker>
```
### 显示时分
``` html
<u-time-picker time="15:46:33" tag="110"></u-time-picker>
```

### 禁用和只读
``` html
<u-linear-layout>
<u-time-picker time="15:46:33" disabled="disabled"></u-time-picker>
<u-time-picker time="15:46:33" readonly="readonly"></u-time-picker>
</u-linear-layout>
```


### 日期范围
``` html
<u-time-picker time="15:46:33" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

``` vue
<template>
<u-time-picker :time="time" @change="change($event)"></u-time-picker>
</template>

<script>
export default {
	data() {
		return {
			time: '1:12:12',
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
| time.sync, v-model | String | `'00:00:00'` | 时间 |
| minTime | String | `'00:00:00'` | 最小时间 |
| maxTime | String | `'23:59:59'` | 最大时间 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| tag | String | `111` | 控制显示时分秒的显示，1为显示，0为不显示 |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |
