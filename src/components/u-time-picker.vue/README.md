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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| time.sync, v-model | string |  | `''` | 默认显示的时间值，格式如08:08:08 |
| minUnit | string | `[object Object]`<br/>`[object Object]` | `'second'` | 最小时间单位 |
| min-time | string |  | `'00:00:00'` | 支持输入的最小时间 |
| max-time | string |  | `'23:59:59'` | 支持输入的最大时间 |
| autofocus | boolean |  | `false` | 是否自动获得焦点 |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| visible | boolean |  | `true` | 是否显示 |
| clearable | boolean |  | `true` | 开启并在输入框有内容时会显示清除按钮 |
| showRightNowButton | boolean |  | `true` |  |
| rightNowTitle | string |  | `''` | 快捷选择当前时间 |
| showFooterButton | boolean |  | `true` |  |
| cancelTitle | string |  | `''` |  |
| okTitle | string |  | `''` |  |
| preIcon | string | `[object Object]` | `'time'` |  |
| suffixIcon | string | `[object Object]` |  |  |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置时间选择输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置时间选择输入框高度大小 |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'body'` | 设置添加到哪个元素。可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中 |

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

