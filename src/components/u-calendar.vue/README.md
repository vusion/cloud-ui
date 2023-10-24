<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCalendar 日历

- [示例](#示例)
    - [基本用法](#基本用法)
    - [周选择组件](#周选择组件)
    - [月选择组件](#月选择组件)
    - [季选择组件](#季选择组件)
    - [年选择组件](#年选择组件)
    - [只读和禁用](#只读和禁用)
    - [最大值最小值](#最大值最小值)
    - [增加展示年份](#增加展示年份)
    - [日期范围选择](#日期范围选择)
    - [周范围选择](#周范围选择)
    - [月份范围选择](#月份范围选择)
    - [季度范围选择](#季度范围选择)
    - [年度范围选择](#年度范围选择)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

## 示例
### 基本用法

``` html
<u-calendar picker="date" date="2022-08-08"></u-calendar>
```

### 周选择组件

``` html
<u-calendar picker="week" date="2022-08-08"></u-calendar>
```

### 月选择组件

``` html
<u-calendar picker="month" date="2022-08-08"></u-calendar>
```
### 季选择组件

``` html
<u-calendar picker="quarter" date="2022-08-08"></u-calendar>
```

### 年选择组件

``` html
<u-calendar picker="year" date="2022-08-08"></u-calendar>
```

### 只读和禁用
``` html
<u-linear-layout>
<u-calendar date="2018-08-08" readonly style="display: inline-block"></u-calendar>
<u-calendar date="2018-08-08" min-date="2017-08-08" max-date="2019-08-08" disabled style="display: inline-block"></u-calendar>
</u-linear-layout>
```

### 最大值最小值
``` html
<u-calendar date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18"></u-calendar>
```

### 增加展示年份

往前往后展示5年

``` html
<u-linear-layout>
<u-calendar yearDiff="5" yearAdd="5" date="2018-08-08"></u-calendar>
</u-linear-layout>
```

### 日期范围选择

``` html
<u-calendar-range
    picker="date"
    start-date="2023-03-10"
    end-date="2023-03-20">
</u-calendar-range>
```

### 周范围选择

``` html
<u-calendar-range
    picker="week"
    start-date="2023-03-10"
    end-date="2023-03-21">
</u-calendar-range>
```

### 月份范围选择

``` html
<u-calendar-range
    picker="month"
    start-date="2021-06-10"
    end-date="2022-03-20">
</u-calendar-range>
```

### 季度范围选择

``` html
<u-calendar-range
    picker="quarter"
    start-date="2021-06-10"
    end-date="2022-03-20">
</u-calendar-range>
```

### 年度范围选择

``` html
<u-calendar-range
    picker="year"
    start-date="2001-06-10"
    end-date="2013-03-20">
</u-calendar-range>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| date.sync, v-model | Date \| string |  | `'TODAY'` | 当前选择的日期 |
| min-date | Date \| string |  |  | 最小日期，如果为空则不限制 |
| max-date | Date \| string |  |  | 最大日期，如果为空则不限制 |
| year-diff | string \| number |  | `20` | 当前年份往前展示的年数，例：当前为`2018`年，则从`2015`年开始展示 |
| year-add | string \| number |  | `4` | 当前年份往后展示的年数，例：当前为`2018`年，则展示至`2019`年 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入文本或 HTML 至日期组件底部

### Events

#### @change

日期改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| date | object | 改变后的日期 |

#### @select

选择某一个日期时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| date | object | 当前选择的日期 |

