<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# DatePicker 日期选择

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-date-picker></u-date-picker>
    <u-date-picker date="2018-08-08"></u-date-picker>
</u-linear-layout>
```
### 自动对焦

``` html
<u-date-picker date="2018-08-08" autofocus></u-date-picker>
```

### 弹窗对其方式

``` html
<u-linear-layout>
    <u-date-picker placeholder="请选择日期" alignment="left"></u-date-picker>
    <u-date-picker placeholder="请选择日期" alignment="right"></u-date-picker>
</u-linear-layout>

```

### 最大值和最小值
``` html
<u-date-picker date="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-date-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-date-picker readonly date="2018-08-08"></u-date-picker>
    <u-date-picker disabled date="2018-08-08"></u-date-picker>
</u-linear-layout>

```

### 方法
``` vue
<template>
<u-date-picker time="morning" year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-08-01',
		}
	},
    methods: {
        change(newVal) {
            console.log(newVal);
        },
        select(newVal) {
        	console.log(newVal);
        },
        toggle(event) {
        	console.log(event.open);
        }
    },
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| width | string, number |  | `160` | 输入框宽度 |
| date.sync | string,number,Date |  |  | 初始日期值 |
| minDate | string,number,Date |  |  | 最小日期 |
| maxDate | string,number,Date |  |  | 最大日期 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| autofocus | boolean |  | `false` | 文本框默认处于focus |
| placeholder | string |  | `'请输入'` | 文本框默认提示 |
| alignment | string |  | `'left'` | 日历弹窗对其方式，可选值：`left`, `right` |
| time | string, number |  | `'start'` | 设置返回的日期的时分秒值，可选值为`start`,表示时分秒是0:00:00,`morning`:时分秒为8:00:00,`end`:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |
| yeadDiff | string, number |  | `3` | 当前年份前几年 |
| yearAdd | string, number |  | `1` | 当前年份后几年 |

### Events

#### @input

值变化时触发 (表单验证可以检测到其值得变化)

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Date | 改变后的日期值 |

#### @change

值变化时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | Date | 改变后的日期值 |

#### @select

选择日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.date | Date | 选择后的日期值 |

#### @toggle

弹出/隐藏时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | boolean | 弹出/隐藏状态 |
