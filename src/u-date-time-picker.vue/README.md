# 日期时间选择 DateTimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-linear-layout>
    <u-date-time-picker></u-date-time-picker>
    <u-date-time-picker value="2018-08-08"></u-date-time-picker>
</u-linear-layout>
```

### 输入格式化时机

用`fixOn`属性可以设置错误在失焦时格式化（默认）还是在输入时（输入结束1秒）格式化。

``` html
<u-linear-layout>
    <u-date-time-picker value="2018-08-08"></u-date-time-picker>
    <u-date-time-picker value="2018-08-08" fix-on="input"></u-date-time-picker>
</u-linear-layout>
```

### 禁用与只读
``` html
<u-linear-layout>
    <u-date-time-picker value="2018-08-08" disabled="disabled"></u-date-time-picker>
    <u-date-time-picker value="2018-08-08" readonly="readonly"></u-date-time-picker>
</u-linear-layout>
```

### 最大值maxDate 最小值minDate
``` html
<u-date-time-picker value="2017-05-12 08:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 16:00:00"></u-date-time-picker>
```

### 事件
``` vue
<template>
<u-linear-layout>
    <u-date-time-picker :value.sync="value" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect" @toggle="onToggle" @input="onInput" @blur="onBlur"></u-date-time-picker>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: '2018-09-09 08:00:00',
        }
    },
    watch: {
        value(date, oldDate) {
            console.log('value watch: ', date, oldDate);
        },
    },
    methods: {
        onChange($event) {
            console.log('change', $event); // value改变触发
        },
        onSelect($event) {
        	console.log('select', $event); // 选择日历触发
        },
        onBeforeSelect($event) {
        	console.log('before-select', $event);
        },
        onInput($event) {
        	console.log('input', $event);
        },
        onToggle($event) {
        	console.log('toggle', $event);
        },
        onBlur($event) {
        	console.log('blur', $event);
        }
    },
};
</script>
```


## date-timePicker API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | String,Number,Date | | 初始日期值，输入[date-fns parse](https://date-fns.org/v1.29.0/docs/parse)支持的格式 |
| placeholder | String | `yyyy-mm-dd hh:mm:ss` | 输入框默认值 |
| disabled | Boolean | `false` | 是否禁用 |
| readonly | Boolean | `false` | 是否只读 |
| placement | String | `bottom-start` | 日历弹窗对其方式，设置方式同popper的placement |
| formatter | String | `'YYYY-MM-DD HH:mm:ss'` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |
| fix-on | String | `'blur'` | 错误修复时机。可选值：`'input'`表示在输入时修复，`'blur'`表示在失焦时修复 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| dateRange | Array | | 多时间范围，二维数组 |

### Events

#### value.sync
与value格式相同的日期

#### @change
值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 当前日期 |
| $event.oldValue | Date | 旧日期 |
| $event.formattedValue | String | formatted日期 |

#### @input
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | 输入框当前值 |

#### @before-select
选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期选择 |

#### @select

选择日期时

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 选择日期 |
| $event.oldValue | Date | 旧日期 |
| $event.formattedValue | String | formatted日期 |

#### @toggle
同`u-popper`组件的`toggle`事件

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出层是否打开 |

#### @blur
输入框blur时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| event |  | 原生事件 |

