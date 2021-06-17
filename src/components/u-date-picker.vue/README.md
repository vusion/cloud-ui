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
    <u-date-picker clearable></u-date-picker>
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
<u-date-picker time="morning" year-diff="1" min-date="2009" max-date="2020" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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
<u-date-picker picker="month" time="morning" min-date="2021-3" max-date="2024-5"  year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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
<u-date-picker picker="quarter" time="morning" min-date="2021-Q3" max-date="2024-5" year-diff="1" year-add="5" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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

### 年份选择
``` vue
<template>
<u-date-picker min-date="2021" max-date="2024" picker="year" time="morning" year-diff="20" year-add="20" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
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
| width | number |  | `160` | 输入框宽度 |
| date.sync, v-model | string,number,Date |  |  | 选择值 |
| minDate | string,number,Date |  |  | 最小日期 |
| maxDate | string,number,Date |  |  | 最大日期 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |
| autofocus | boolean |  | `false` | 文本框默认处于focus |
| placeholder | string |  | `'请输入'` | 文本框默认提示 |
| clearable | boolean |  |  | 开启并在输入框有内容时会显示清除按钮。 |
| alignment | string | `[object Object]`<br/>`[object Object]` | `'left'` | 日历弹窗对其方式 |
| time | string, number |  | `'0:00:00'` | 输入对应格式的字符串（8:00:00）即可 |
| yearDiff | number |  | `20` | 最小可选年份值为当前年减去此值 |
| yearAdd | number |  | `20` | 最大可选年份值为当前年加上此值 |
| picker | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'date'` | 用于定义选择的格式 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'json'` | 转换器，用于转换时间结果 |

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

