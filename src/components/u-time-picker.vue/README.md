<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTimePicker 时间选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [隐藏底部按钮](#隐藏底部按钮)
    - [自定义底部文案](#自定义底部文案)
    - [只读和禁用](#只读和禁用)
    - [日期范围](#日期范围)
    - [日期最小单位](#日期最小单位)
    - [方法](#方法)
    - [范围选择](#范围选择)
    - [范围选择分钟](#范围选择分钟)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

时间选择

## 示例
### 基本用法

``` html
<u-time-picker time="15:46:33"></u-time-picker>
```

### 隐藏底部按钮

```html
<u-linear-layout>
    <u-time-picker time="15:46:33" :showFooterButton=false></u-time-picker>
    <u-time-picker time="15:46:33" :showRightNowButton=false></u-time-picker>
    <u-time-picker time="15:46:33" :showRightNowButton=false :showFooterButton=false></u-time-picker>
</u-linear-layout>
```

### 自定义底部文案

```html
<u-linear-layout>
    <u-time-picker cancelTitle="取" okTitle="确" rightNowTitle="此" ></u-time-picker>
</u-linear-layout>
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

### 范围选择

``` html
<u-time-picker
    range
    startTime="12:46:33"
    endTime="18:18:33"
    min-time="12:30:00"
    max-time="21:45:15">
</u-time-picker>
```

### 范围选择分钟

``` html
<u-time-picker
    range
    startTime="12:46"
    endTime="18:18"
    min-time="12:30:00"
    max-time="21:45:15"
    min-unit="minute">
</u-time-picker>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| minUnit | string | `[object Object]`<br/>`[object Object]` | `'second'` | 最小时间单位 |
| range | boolean |  | `false` | 是否支持进行时间区间选择，关闭则为时间点选择 |
| value.sync, v-model | string |  | `''` | 默认显示的时间值，格式如08:08:08 |
| startTime.sync | string |  |  | 默认显示的起始时间值，格式如08:08:08 |
| endTime.sync | string |  |  | 默认显示的结束时间值，格式如08:08:08 |
| min-time | string |  | `'00:00:00'` | 最小可选的时间值，填写null则不限制，日期填写格式为“00:00:00” |
| max-time | string |  | `'23:59:59'` | 最大可选的时间值，填写null则不限制，日期填写格式为“00:00:00” |
| show-formatter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  |  |
| advanced-format | { enable: boolean, value: string } |  | `'{ enable: false, value: '' }'` |  |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| showRightNowButton | boolean |  | `true` | 点击可快捷选择当前时间 |
| rightNowTitle | string |  | `''` |  |
| showFooterButton | boolean |  | `true` | 控制弹出层的关闭和设置的生效与否 |
| cancelTitle | string |  | `''` |  |
| okTitle | string |  | `''` | 确定按钮的显示名称，如果为空则不显示 |
| preIcon | string | `[object Object]` | `'time'` |  |
| suffixIcon | string | `[object Object]` |  |  |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'body'` | 设置弹出层依据哪个元素定位位置，可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中。 |
| clearable | boolean |  | `true` | 可点击清除按钮一键清除内容 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| visible | boolean |  | `true` | 显示状态分为“True(打开)/False(关闭)”，默认为“打开” |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置时间选择输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置时间选择输入框高度大小 |

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

