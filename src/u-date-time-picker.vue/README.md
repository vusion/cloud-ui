# 日期时间选择 DateTimePicker

## 示例
### 基本形式

#### 声明式

### 基本 有初始值

### 方法change
``` vue
<template>
<u-date-time-picker :date="date" :min-date="date1" :max-date="date2" @change="change($event.date)" @select="select($event)"></u-date-time-picker>
</template>

<script>
export default {
	data() {
		return {
			date: '',
            date1: '',
            date2: '',
		};
	},
    created() {
        setTimeout(() => {
            this.date1 = '2018-07-05 17:49:27';
            this.date2 = '2018-07-05 17:49:25';
            this.date = '2018-07-05 17:49:27';
        }, 3000);
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
| date.sync | String, Number, Date | | 显示的日期值 |
| minDate | String, Number, Date | | 最小日期值 |
| maxDate | SString, Number, Date | | 最大日期值 |
| placeholder | String | `请选择时间` | 默认提示语 |
| autofocus | Boolean | `false` | 是否默认处于focus状态 |
| disabled | Boolean | `false` | 是否禁用 |
| readonly | Boolean | `false` | 是否只读 |
| yearDiff | String, Number | `3` | 最小可选年份值为当前年减去此值 |
| yearAdd | String, Number | `1` | 最大可选年份值为当前年加上此值 |

### Slots

#### (default)

### Events

#### @input

值变化时触发 (表单验证可以检测到其值得变化)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Date | 改变后的日期值 |

#### @select

日期值发生变化触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | Number | 选择项的值，默认返回时间戳 |

#### @change

选择新时间触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | Number | 选择项的值，默认返回时间戳 |
