# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-linear-layout>
    <u-time-picker></u-time-picker>
    <u-time-picker value="15:46:33"></u-time-picker>
</u-linear-layout>
```
### 输入格式化时机

用`fixOn`属性可以设置错误在失焦时格式化（默认）还是在输入时（输入结束1秒）格式化。

``` html
<u-linear-layout>
    <u-time-picker value="15:46:33"></u-time-picker>
    <u-time-picker value="15:46:33" fix-on="input"></u-time-picker>
</u-linear-layout>
```

### 显示时分
``` html
<u-time-picker value="15:46:33" formatter="HH:mm"></u-time-picker>
```

 ### 禁用和只读
``` html
<u-linear-layout>
<u-time-picker value="15:46:33" disabled="disabled"></u-time-picker>
<u-time-picker value="15:46:33" readonly="readonly"></u-time-picker>
</u-linear-layout>
```


### 日期范围
``` html
<u-time-picker value="12:46:33" minDate="12:30:00" maxDate="14:45:00"></u-time-picker>
</u-linear-layout>
```

### 事件
``` vue
<template>
<u-linear-layout>
<u-time-picker :value.sync="time" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect" @input="onInput" @toggle="onToggle"></u-time-picker>
<u-time-picker value="15:46:33" formatter="HH:mm" @change="onChange2"></u-time-picker>
</u-linear-layout>
</template>

<script>
export default {
	data() {
		return {
			time: '1:12:12',
		};
    },
    watch: {
        time(value, oldValue) {
            console.log('time watch: ', value, oldValue);
        },
    },
    methods: {
        onChange($event) { // 合法值改变
            console.log('change', $event);
        },
        onSelect($event) { // 选择
        	console.log('select', $event);
        },
        onBeforeSelect($event) {
        	console.log('before-select', $event);
        },
        onInput($event) { // 输入
        	console.log('input', $event);
        },
        onToggle($event) {
        	console.log('toggle', $event);
        },
        onChange2($event) {
            console.log('时分change', $event);
        },
    },
};
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | String |  | 时间，无value时时间面板默认选中`'00:00:00'` |
| minTime | String | `'00:00:00'` | 最小时间 |
| maxTime | String | `'23:59:59'` | 最大时间 |
| dateRange | Array | | 多时间范围，二维数组 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| placement | String | `bottom-start` | 日历弹窗对其方式，设置方式同popper的placement |
| placeholder | String | `请选择时间` | 输入框默认值 |
| formatter | String | `HH:mm:ss` | 日期显示格式，合法格式参照[date-fns](https://date-fns.org/v1.29.0/docs/format) |
| fixOn | String | `'blur'` | 错误修复时机。可选值：`'input'`表示在输入时修复，`'blur'`表示在失焦时修复 |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 当前时间 |
| $event.oldValue | String | 旧时间 |

#### @input
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | input框输入值 |

#### @before-select
选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止时间选择事件 |

#### @select

选择日期时

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 当前时间 |
| $event.oldValue | String | 旧时间 |

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
