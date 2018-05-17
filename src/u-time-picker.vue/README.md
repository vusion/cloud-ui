# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-time-picker value="15:46:33"></u-time-picker>
```
<!-- ### 显示时分
``` html
<u-time-picker value="15:46:33" tag="110"></u-time-picker>
```
-->
### 禁用和只读
``` html
<u-linear-layout>
<u-time-picker value="15:46:33" disabled="disabled"></u-time-picker>
<u-time-picker value="15:46:33" readonly="readonly"></u-time-picker>
</u-linear-layout>
```


### 日期范围
``` html
<u-linear-layout>
<u-time-picker value="15:46:33" minTime="12:30:00" maxTime="14:45:00"></u-time-picker>
<u-time-picker value="12:46:33" minTime="12:30:00" maxTime="14:45:00"></u-time-picker>
</u-linear-layout>
```

### 事件
``` vue
<template>
<u-time-picker :value.sync="time" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect" @input="onInput" @toggle="onToggle"></u-time-picker>
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
        }
    },
};
</script>
```
## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | String | `'00:00:00'` | 时间 |
| minTime | String | `'00:00:00'` | 最小时间 |
| maxTime | String | `'23:59:59'` | 最大时间 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| placement | String | `bottom-start` | popper方向 |
| placeholder | String | `选择时间` | 输入框文本 |
| fixOn | String | `input`或`blur` | input校验时机 |

### Events

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 当前时间 |
| $event.oldValue | Date | 旧时间 |

#### @input
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | formatter格式数据 |

#### @before-select
选择日期前
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止上下按钮改变时间 |

#### @select

选择日期时

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Date | 值 |
| $event.oldValue | Date | 旧值 |
