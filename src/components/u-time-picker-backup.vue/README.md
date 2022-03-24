<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTimePicker 时间选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读和禁用](#只读和禁用)
    - [日期范围](#日期范围)
    - [日期最小单位](#日期最小单位)
    - [方法](#方法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

时间选择器

## 示例
### 基本用法

``` html
<u-time-picker time="15:46:33"></u-time-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-time-picker time="15:46:33" readonly="readonly"></u-time-picker>
    <u-time-picker time="15:46:33" disabled="disabled"></u-time-picker>
</u-linear-layout>
```

### 日期范围
``` html
<u-time-picker time="15:46:33" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

### 日期最小单位
``` vue
<template>
    <u-time-picker minUnit="minute" min-time="12:30" max-time="14:45" :time="time" @change="change($event.time)"></u-time-picker>
</template>
<script>
export default {
	data() {
		return {
			time: '13:12',
		};
	},
    methods: {
        change(time) {
            this.time = time;
            console.log(time);
        },
    },
};
</script>
```
### 方法

``` vue
<template>
<u-time-picker :time="time" @change="change($event.time)"></u-time-picker>
</template>

<script>
export default {
	data() {
		return {
			time: '20:12:12',
		};
	},
    methods: {
        change(time) {
            this.time = time;
            console.log(time);
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| time.sync, v-model | string |  | `'00:00'` | 默认显示的时间值，格式如08:08:08 |
| minUnit | string | `[object Object]`<br/>`[object Object]` | `'second'` | 最小时间单位 |
| minTime | string |  | `'00:00:00'` | 支持输入的最小时间 |
| maxTime | string |  | `'23:59:59'` | 支持输入的最大时间 |
| autofocus | boolean |  | `false` | 是否自动获得焦点 |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| visible | boolean |  | `true` | 是否显示 |

### Events

#### @change

时间改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| time | object | 改变后的时间 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM |  | 发送事件实例 |

