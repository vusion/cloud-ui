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
