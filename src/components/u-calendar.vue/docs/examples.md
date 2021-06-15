### 基本用法

``` html
<u-calendar picker="date"></u-calendar>
```

### 周选择组件

``` html
<u-calendar picker="week"></u-calendar>
```

### 月选择组件

``` html
<u-calendar picker="month"></u-calendar>
```

### 季选择组件

``` html
<u-calendar picker="quarter"></u-calendar>
```


### 年选择组件

``` html
<u-calendar picker="year"></u-calendar>
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

往前往后展示5年

``` html
<u-linear-layout>
<u-calendar yearDiff="5" yearAdd="5" date="2018-08-08"></u-calendar>
</u-linear-layout>
```
