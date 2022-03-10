<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDatePicker 日期选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自动对焦](#自动对焦)
    - [弹窗对其方式](#弹窗对其方式)
    - [最大值和最小值](#最大值和最小值)
    - [只读和禁用](#只读和禁用)
    - [方法](#方法)
    - [月份选择](#月份选择)
    - [季度选择](#季度选择)
    - [年份选择](#年份选择)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

日期选择器

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-date-picker preIcon suffixIcon="calendar" width="400" clearable></u-date-picker>
    <u-date-picker date="2018-08-08" clearable></u-date-picker>
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
<u-date-picker min-date="2021-06-18T00:00:00.000Z" time="morning" year-diff="1" max-date="2025" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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

### 月份选择
``` vue
<template>
<u-date-picker min-date="2021-06-18T00:00:00.000Z" picker="month" time="morning" max-date="2024-5"  year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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

### 季度选择
``` vue
<template>
<u-date-picker min-date="2021-06-18T00:00:00.000Z" picker="quarter" time="morning" max-date="2024-5" year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2021-01-01',
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

### 年份选择
``` vue
<template>
<u-date-picker min-date="2021-07-18T00:00:00.000Z" max-date="2024" picker="year" time="morning" clearable year-diff="20" year-add="20" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
	data(){
		return {
			date: '2018-01-01',
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
| preIcon | string | `[object Object]`<br/>`[object Object]` | `'calendar'` |  |
| suffixIcon | string | `[object Object]`<br/>`[object Object]` | `''` |  |
| picker | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'date'` | 日期格式设置 |
| date.sync, v-model | string,number,Date |  |  | 默认显示的日期值，格式如2018-08-08 |
| minDate | string,number,Date |  |  | 支持输入的最小日期，不限制填写null |
| maxDate | string,number,Date |  |  | 支持输入的最大日期，不限制填写null |
| readonly | boolean |  | `false` |  |
| disabled | boolean |  | `false` |  |
| opened | boolean |  | `false` | 切换弹出/关闭状态 |
| autofocus | boolean |  | `false` | 是否自动获取焦点 |
| placeholder | string |  | `'请输入'` | 输入框的提示文字 |
| clearable | boolean |  |  | 输入框输入内容支持一键清除 |
| alignment | string | `[object Object]`<br/>`[object Object]` | `'left'` | 日历弹窗对齐方式 |
| time | string, number |  | `'0:00:00'` | 输入对应格式的字符串（8:00:00）即可 |
| yearDiff | number |  | `20` | 最小可选年份值为当前年减去此值 |
| yearAdd | number |  | `20` | 最大可选年份值为当前年加上此值 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'format'` | 转换器，用于转换时间结果 |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'reference'` | 设置添加到哪个元素。可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中 |

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

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM |  | 发送事件实例 |

