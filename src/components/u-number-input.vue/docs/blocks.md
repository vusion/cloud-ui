### 基本用法

``` html
<u-number-input :value="6"></u-number-input>
```

### 最大值和最小值

``` html
<u-number-input :value="6" :min="4" :max="12"></u-number-input>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

``` html
<u-number-input :value="5" :precision="5" :step="10"></u-number-input>
```
