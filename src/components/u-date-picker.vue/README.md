<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDatePicker 日期选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [自动对焦](#自动对焦)
    - [弹窗对其方式](#弹窗对其方式)
    - [最大值和最小值](#最大值和最小值)
    - [只读和禁用](#只读和禁用)
    - [方法](#方法)
    - [周选择](#周选择)
    - [月份选择](#月份选择)
    - [季度选择](#季度选择)
    - [年份选择](#年份选择)
    - [日期范围选择](#日期范围选择)
    - [周范围选择](#周范围选择)
    - [月份范围选择](#月份范围选择)
    - [季度范围选择](#季度范围选择)
    - [年度范围选择](#年度范围选择)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

日期选择

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-date-picker date="2018-08-08" clearable></u-date-picker>
    <u-date-picker preIcon suffixIcon="calendar" width="400" date="2022-08-08" clearable></u-date-picker>
</u-linear-layout>
```
### 自动对焦

``` html
<u-date-picker date="2018-08-08" autofocus></u-date-picker>
```

### 弹窗对其方式

``` html
<u-linear-layout>
    <u-date-picker date="2018-08-08" placeholder="请选择日期" alignment="left"></u-date-picker>
    <u-date-picker date="2018-08-08" placeholder="请选择日期" alignment="right"></u-date-picker>
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

### 周选择
``` vue
<template>
<u-date-picker min-date="2017-06-18T00:00:00.000Z" picker="week" time="morning" max-date="2024-5"  year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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
        	console.log(event.opened);
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
        	console.log(event.opened);
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

### 日期范围选择

``` html
<u-date-picker
    range
    picker="date"
    start-date="2023-03-10"
    end-date="2023-03-20"
    min-date="2023-02-01"
    max-date="2023-05-02"
    clearable>
</u-date-picker>
```

### 周范围选择

``` html
<u-date-picker
    range
    picker="week"
    start-date="2023-03-10"
    end-date="2023-03-21"
    min-date="2023-02-01"
    max-date="2023-05-02"
    clearable>
</u-date-picker>
```

### 月份范围选择

``` html
<u-date-picker
    range
    picker="month"
    start-date="2021-06-10"
    end-date="2022-03-20"
    min-date="2021-02-01"
    max-date="2022-05-02"
    clearable>
</u-date-picker>
```

### 季度范围选择

``` html
<u-date-picker
    range
    picker="quarter"
    start-date="2021-06-10"
    end-date="2022-03-20"
    min-date="2020-12-01"
    max-date="2022-09-02">
</u-date-picker>
```

### 年度范围选择

``` html
<u-date-picker
    range
    picker="year"
    start-date="2001-06-10"
    end-date="2013-03-20"
    min-date="2000-12-01"
    max-date="2015-09-02">
</u-date-picker>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| picker | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'date'` | 日期格式设置 |
| range | boolean |  | `false` | 是否支持进行日期区间选择，关闭则为日期点选择 |
| value.sync, v-model | string,number,Date |  |  | 默认显示的日期值，格式如2018-08-08 |
| startDate.sync | string,number,Date |  |  | 默认显示的起始日期值，格式如2018-08-08 |
| endDate.sync | string,number,Date |  |  | 默认显示的结束日期值，格式如2018-08-08 |
| minDate | string,number,Date |  |  | 最小可选的日期值，默认为10年前，日期填写格式为“yyyy-mm-dd” |
| maxDate | string,number,Date |  |  | 最大可选的日期值，默认为9年后，日期填写格式为“yyyy-mm-dd” |
| time | string, number |  | `'00:00:00'` | 输入对应格式的字符串（8:00:00）即可 |
| yearDiff | number |  | `20` | 最小可选年份值与当前年份值的差值 |
| yearAdd | number |  | `20` | 最大可选年份值与当前年份值的差值 |
| show-formatter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` |  |  |
| advanced-format | { enable: boolean, value: string } |  | `'{ enable: false, value: '' }'` |  |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| placeholder | string |  | `'请输入'` | 为空时显示的占位符文本 |
| alignment | string | `[object Object]`<br/>`[object Object]` | `'left'` | 日历弹窗对齐方式 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'format'` | 转换器，用于转换时间结果 |
| preIcon | string | `[object Object]` | `'calendar'` |  |
| suffixIcon | string | `[object Object]` |  |  |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'body'` | 设置弹出层依据哪个元素定位位置，可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中。 |
| clearable | boolean |  |  | 可点击清除按钮一键清除内容 |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| opened | boolean |  | `false` | 弹出状态分为“True(弹出)/False(关闭)”，默认为“关闭” |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置日期选择输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置日期选择输入框高度大小 |

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

