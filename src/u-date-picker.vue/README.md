# 日期选择 DatePicker

## 示例
### 基本形式

#### 声明式

### 基本
默认为当天时间
``` html
<u-date-picker></u-date-picker>
```
``` html
<div>
    <u-date-picker date="2018-08-08" alignment="right"></u-date-picker>
</div>
```


### 最大值maxDate 最小值minDate
``` html
<u-date-picker date="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-date-picker>
```

### 禁用和只读
``` html
<u-linear-layout>
<u-date-picker disabled></u-date-picker>
<u-date-picker readonly></u-date-picker>
</u-linear-layout>

```

### 事件
``` vue
<template>
<u-date-picker @change="change" @select="select" @toggle="toggle($event)"></u-date-picker>
</template>

<script>
export default {
    methods: {
        change($event) {
            console.log('change', $event); // 改变date触发
        },
        select($event) {
        	console.log('select', $event); // 选择日历触发
        },
        toggle($event) {
        	console.log('toggle', $event);
        }
    },
};
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | String,Number,Date | 当天 | 初始日期值 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| autofocus | Boolean | `false` | 文本框默认处于focus |
| alignment | String | `left` | 日历弹窗对其方式，可选值：left, right |
| dateFormat | String | `YYYY-MM-DD` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |
| time | String, Number | `start` | 设置返回的日期的时分秒值，可选值为start:时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 旧日期 |
| $event.oldDate | Date | 新日期 |

#### @select

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 选择日期 |

#### @toggle
同`u-popper`组件的`toggle`事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出层是否打开 |