<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDatePicker 日期选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自动对焦](#自动对焦)
    - [弹窗对其方式](#弹窗对其方式)
    - [最大值和最小值](#最大值和最小值)
    - [只读和禁用](#只读和禁用)
    - [方法](#方法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

日期选择器

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
| date.sync, v-model | string,number,Date |  |  | 选择值 |
| minDate | string,number,Date |  |  | 最小日期 |
| maxDate | string,number,Date |  |  | 最大日期 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| autofocus | boolean |  | `false` | 文本框默认处于focus |
| placeholder | string |  | `'请输入'` | 文本框默认提示 |
| alignment | string | `[object Object]`<br/>`[object Object]` | `'left'` | 日历弹窗对其方式 |
| time | string, number |  | `'0:00:00'` | 输入对应格式的字符串（8:00:00）即可 |
| yeadDiff | string, number |  | `3` | 最小可选年份值为当前年减去此值 |
| yearAdd | string, number |  | `1` | 最大可选年份值为当前年加上此值 |
| converter | string | `'JSON'` ()<br/>`'Unix 时间戳'` ()<br/>`'Date 对象'` () |  | 转换器，用于转换时间结果 |

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
| $event | object | 自定义事件对象 |
| $event.date | Date | 改变后的日期值 |

#### @select

选择日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.date | Date | 选择后的日期值 |

#### @toggle

弹出/隐藏时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.open | boolean | 弹出/隐藏状态 |

