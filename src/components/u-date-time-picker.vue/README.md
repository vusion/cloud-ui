# UDateTimePicker 日期时间选择

## 示例

### 基本形式

``` html
<u-linear-layout>
    <u-date-time-picker></u-date-time-picker>
    <u-date-time-picker date="2018-08-08"></u-date-time-picker>
</u-linear-layout>
```

### 自动对焦
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
<u-date-time-picker>
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

## DateTimePicker API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date.sync | String, Number, Date | | 显示的日期值 |
| minDate | String, Number, Date | | 最小日期值 |
| maxDate | String, Number, Date | | 最大日期值 |
| placeholder | String | `请选择时间` | 默认提示语 |
| autofocus | Boolean | `false` | 是否默认处于focus状态 |
| disabled | Boolean | `false` | 是否禁用 |
| readonly | Boolean | `false` | 是否只读 |
| yearDiff | String, Number | `3` | 最小可选年份值为当前年减去此值 |
| yearAdd | String, Number | `1` | 最大可选年份值为当前年加上此值 |

### Slots

#### (footer)

插入文本或  HTML 至日期组件底部

### Events

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
