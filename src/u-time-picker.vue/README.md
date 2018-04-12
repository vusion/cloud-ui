# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-time-picker value="15:46:33"></u-time-picker>
```
### 显示时分
``` html
<u-time-picker value="15:46:33" tag="110"></u-time-picker>
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
<u-time-picker value="15:46:33" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

### 事件
``` vue
<template>
<u-time-picker :value.sync="time" @change="onChange" @select="onSelect"  @before-select="onBeforeSelect" @input="onInput"></u-time-picker>
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
        onChange($event) {
            console.log('change', $event); // 时间改变触发，输入框blur
        },
        onSelect($event) {
        	console.log('select', $event); // 调整时间触发
        },
        onBeforeSelect($event) {
        	console.log('before-select', $event);
        },
        onInput($event) { // 输入框输入或者调整时间时触发
        	console.log('input', $event);
        },
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
| tag | String | `111` | 控制显示时分秒的显示，1为显示，0为不显示 |

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
