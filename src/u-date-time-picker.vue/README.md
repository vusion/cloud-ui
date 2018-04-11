# 日期时间选择 DateTimePicker

## 示例
### 基本形式

#### 声明式

### 基本 有初始值
``` html
<u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
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

## DateTimePicker API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | String, Number, Date | | 显示的日期值 |
| minDate | String, Number, Date | | 最小日期值 |
| maxDate | SString, Number, Date | | 最大日期值 |
| placeholder | String | `请选择时间` | 默认提示语 |
| autofocus | Boolean | `false` | 是否默认处于focus状态 |
| disabled | Boolean | `false` | 是否禁用 |
| readonly | Boolean | `false` | 是否只读 |

### Events

#### @select

日期值发生变化触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | NUmber | 选择项的值，默认返回时间戳 |

#### @change

选择新时间触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | NUmber | 选择项的值，默认返回时间戳 |