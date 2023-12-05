<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UDateTimePicker 日期时间选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [隐藏底部按钮](#隐藏底部按钮)
    - [自定义底部文案](#自定义底部文案)
    - [选择日期](#选择日期)
    - [自动获取焦点](#自动获取焦点)
    - [只读和禁用](#只读和禁用)
    - [最大值和最小值](#最大值和最小值)
    - [自定义底部](#自定义底部)
    - [方法](#方法)
    - [范围选择](#范围选择)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Selector**

日期时间选择器

## 示例
### 基本用法

``` html
<u-linear-layout>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable></u-date-time-picker>
    <u-date-time-picker date="2018-08-08"></u-date-time-picker>
</u-linear-layout>
```

### 隐藏底部按钮

```html
<u-linear-layout>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable :showFooterButton=false></u-date-time-picker>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable :showRightNowButton=false></u-date-time-picker>
    <u-date-time-picker preIcon suffixIcon="calendar" clearable :showRightNowButton=false :showFooterButton=false></u-date-time-picker>
</u-linear-layout>
```

### 自定义底部文案

```html
<u-linear-layout>
    <u-date-time-picker cancelTitle="取" okTitle="确" rightNowTitle="此" preIcon suffixIcon="calendar" clearable></u-date-time-picker>
</u-linear-layout>
```

### 选择日期

``` vue
<template>
<u-date-time-picker v-model="date"></u-date-time-picker>
</template>
<script>
export default {
    data() {
        return {
            date: '',
        };
    },
};
</script>
```

### 自动获取焦点
``` html
<u-date-time-picker date="2018-08-08" autofocus></u-date-time-picker>
```

### 只读和禁用
``` html
<u-linear-layout>
    <u-date-time-picker date="2018-08-08" readonly></u-date-time-picker>
    <u-date-time-picker date="2018-08-08" disabled></u-date-time-picker>
</u-linear-layout>
```

### 最大值和最小值
``` html
<u-date-time-picker date="2017-05-12 8:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 07:00:00"></u-date-time-picker>
```

### 自定义底部
``` html
<u-date-time-picker clearable>
    <div slot="footer" style="padding: 15px 0 5px;text-align:center">
        插入文本或  HTML 至日期组件底部
    </div>
</u-date-time-picker>
```

### 方法
``` vue
<template>
<u-date-time-picker :date="date" @change="change($event.date)" @select="select($event)"></u-date-time-picker>
</template>

<script>
export default {
    data() {
        return {
            date: '2017-12-01 20:12:12',
        };
    },
    methods: {
        change(time) {
            console.log(time);
        },
        select(date) {
            console.log(date);
        }
    },
};
</script>
```

### 范围选择

``` html
<u-date-time-picker
    range
    start-date="2023-03-10"
    end-date="2023-03-20"
    clearable>
</u-date-time-picker>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| minUnit | string | `[object Object]`<br/>`[object Object]` | `'second'` | 最小时间单位 |
| range | boolean |  | `false` | 是否支持进行日期时间区间选择，关闭则为日期时间点选择 |
| value.sync, v-model | string, number, Date |  |  | 默认显示的日期时间值，格式如2018-08-08 08:08:08 |
| startDate.sync | string,number,Date |  |  | 默认显示的起始日期时间值，格式如2018-08-08 08:08:08 |
| endDate.sync | string,number,Date |  |  | 默认显示的结束日期时间值，格式如2018-08-08 08:08:08 |
| minDate | string, number, Date |  |  | 最小可选的日期时间值，填写null则不限制，日期填写格式为“yyyy-mm-dd  00:00:00” |
| maxDate | string, number, Date |  |  | 最大可选的日期时间值，填写null则不限制，日期填写格式为“yyyy-mm-dd  00:00:00” |
| yearDiff | number |  | `20` | 最小可选年份值与当前年份值的差值 |
| yearAdd | number |  | `20` | 最大可选年份值与当前年份值的差值 |
| show-date-formatter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'YYYY-MM-DD'` |  |
| show-time-formatter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'HH:mm:ss'` |  |
| advanced-format | { enable: boolean, value: string } |  | `'{ enable: false, value: '' }'` |  |
| placeholder | string |  | `'请选择时间'` | 为空时显示的占位符文本 |
| autofocus | boolean |  | `false` | 设置是否自动获取焦点 |
| showRightNowButton | boolean |  | `true` | 点击可快捷选择当前时间 |
| rightNowTitle | string |  | `''` |  |
| showFooterButton | boolean |  | `true` | 控制弹出层的关闭和设置的生效与否 |
| cancelTitle | string |  | `''` | 取消按钮的显示名称，如果为空则不显示 |
| okTitle | string |  | `''` | 确定按钮的显示名称，如果为空则不显示 |
| converter | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'json'` |  |
| preIcon | string | `[object Object]` | `'calendar'` |  |
| suffixIcon | string | `[object Object]` |  |  |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'body'` | 设置弹出层依据哪个元素定位位置，可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中。 |
| clearable | boolean |  |  | 可点击清除按钮一键清除内容 |
| opened | boolean |  | `false` | 弹出状态分为“True(弹出)/False(关闭)”，默认为“关闭” |
| disabled | boolean |  | `false` | 置灰显示，且禁止任何交互（焦点、点击、选择、输入等） |
| readonly | boolean |  | `false` | 正常显示，但禁止选择/输入 |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置日期时间选择输入框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置日期时间选择输入框高度大小 |

### Events

#### @select

日期值发生变化触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.date | number | 选择项的值，默认返回时间戳 |

#### @change

选择新时间触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.date | number | 选择项的值，默认返回时间戳 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM |  | 发送事件实例 |

