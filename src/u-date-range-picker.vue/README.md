# 日期选择 DatePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-date-range-picker :placeholderArr="['请选择开始日期', '请选择结束日期']"></u-date-range-picker>
```

### 日期范围
``` html
<u-date-range-picker startDate="2018-01-01" endDate="" minDate="2017-12-12" maxDate="2018-02-12"></u-date-range-picker>
```

### 只读
``` html
<u-date-range-picker readonly startDate="2018-01-01" endDate="2018-02-02"></u-date-range-picker>
```
<!-- ### 只读和禁用 禁用效果诡异
``` html
<u-date-range-picker readonly startDate="2018-01-01" endDate="2018-02-02"></u-date-range-picker>
<u-date-range-picker disabled startDate="2018-01-01" endDate="2018-02-02"></u-date-range-picker>
``` -->

### 事件
``` vue
<template>
    <u-date-range-picker startDate="2018-01-01" endDate="2018-02-02" @change="onChange($event)" @select="onSelect($event)"></u-date-range-picker>
</template>
<script>
export default {
    methods: {
        onChange(event) {
            console.log('change', event);
        },
        onSelect(event) {
            console.log('select', event);
        },
    }
};
</script>
```


## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| startDate | String,Number,Date | `null` | 选择起始日期 |
| endDate | String,Number,Date | `null` | 选择结束日期 |
| showDate | String,Number,Date | `null` | 起始日历显示的日期, 优先级：showDate -> startDate -> new Date() |
| placeholderArr | Array | '[]' | 输入框默认值 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| readonly | Boolean | `false` | 是否只读 |
<!-- | disabled | Boolean | `false` | 是否禁用 | -->
| placement | String | `bottom-start` | 同`<popper>`组件 |
| dateFormat | String | `YYYY-MM-DD` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 旧日期数组 |
| $event.oldDate | Date | 新日期数组 |

#### @select

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.sender | Object | 发出事件的vueComponent |
| $event.date | Date | 旧日期数组 |
| $event.oldDate | Date | 新日期数组 |

#### @toggle
同`u-popper`组件的`toggle`事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出层是否打开 |