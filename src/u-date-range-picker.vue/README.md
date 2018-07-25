# 日期范围选择 DateRangePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-date-range-picker :placeholder="['请选择开始日期', '请选择结束日期']"></u-date-range-picker>
```

### 日期范围
``` html
<u-date-range-picker startValue="2018-01-01" endValue="" maxDate="2018-01-09" minDate="2017-11-12"></u-date-range-picker>
```

### 禁用和只读
``` html
<u-linear-layout>
    <u-date-range-picker disabled startValue="2018-01-01" endValue="2018-02-02"></u-date-range-picker>
    <u-date-range-picker readonly startValue="2018-01-01" endValue="2018-02-02"></u-date-range-picker>
</u-linear-layout>
```

### 事件
``` vue
<template>
    <u-date-range-picker :startValue.sync="startValue" :endValue.sync="endValue" @change="onChange" @before-select="onBeforeSelect" @select="onSelect" @startInput="onStartInput" @endInput="onEndInput" @selectPanelDate="onSelectPanelDate"></u-date-range-picker>
</template>
<script>
export default {
    data() {
        return {
            startValue: '2018-09-09',
            endValue: '2018-10-11',
        }
    },
    watch: {
        startValue(date, oldDate) {
            console.log('startValue watch: ', date, oldDate);
        },
        endValue(date, oldDate) {
            console.log('endValue watch: ', date, oldDate);
        },
    },
    methods: {
        onChange($event) {
            console.log('change', $event); // value改变触发
        },
        onSelect($event) {
        	console.log('select', $event); // 两项都选择触发
        },
        onSelectPanelDate($event) {
        	console.log('selectPanelDate', $event); // 日期面板触发Select事件
        },
        onBeforeSelect($event) {
        	console.log('before-select', $event);
        },
        onStartInput($event) {
        	console.log('startInput', $event);
        },
        onEndInput($event) {
        	console.log('endInput', $event);
        },
        onToggle($event) {
        	console.log('toggle', $event);
        }
    }
};
</script>
```


## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| startValue.sync | String,Number,Date | | 选择起始日期 |
| endValue.sync | String,Number,Date | | 选择结束日期 |
| panelDisplayValue | String,Number,Date | `new Date()` | 初始第一个panel显示时间，如有startValue，则显示startValue |
| placeholder | Array | ` ['开始日期', '结束日期']` | 输入框默认值 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| dateRange | Array | | 多时间范围，二维数组 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| placement | String | `bottom-start` | 同`<popper>`组件 |
| formatter | String | `YYYY-MM-DD` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |
| time | String, Number | `start` | 设置返回的日期的时分秒值，可选值为start:时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |
| fixOn | String | `'blur'` | 错误修复时机。可选值：`'input'`表示在输入时修复，`'blur'`表示在失焦时修复 |


### Events

#### @change

值变化时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array<Date>  | 新日期 |
| $event.oldValue | Array<Date>  | 旧日期 |
| $event.formattedValue | Array<String>  | formatter的新日期 |

#### @startInput/@endInput
时间区间改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | input框显示值 |

#### @before-select
每个panel选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期选择 |


#### @selectPanelDate
选择日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 选择日期 |

#### @select
起始结束日期均被选择时

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array<Date> | 选择日期 |
| $event.oldValue | Array<Date>  | 旧日期 |
| $event.formatedValue | Array<String>  | formatter的新日期 |

#### @toggle
同`u-popper`组件的`toggle`事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出层是否打开 |
