### 基本用法

``` html
<u-combo-slider></u-combo-slider>
```

### 提示
``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB"></u-combo-slider>
```

### 最大值和最小值

``` html
<u-combo-slider :step="10" unit="GB" tip="步长为10GB" :min="10" :max="90" :value="40"></u-combo-slider>
```

### 只读
``` html
   <u-combo-slider :value="36" readonly></u-combo-slider>
```

### 禁用
``` html
 <u-combo-slider :value="36" disabled></u-combo-slider>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

间隔为`0`时，滑块拖动连续，数值保留到精度。

``` html
<u-combo-slider :value="20" :precision="5" :step="20"></u-combo-slider>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
 <u-combo-slider :value="50" :range="[20, 85]"></u-combo-slider>
```
