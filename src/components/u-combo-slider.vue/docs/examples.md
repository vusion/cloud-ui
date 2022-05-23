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

### 只读和禁用
``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="36" readonly></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="36" disabled></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

间隔为`0`时，滑块拖动连续，数值保留到精度。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="5" :step="5"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :precision="5" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" :step="0"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="50" :range="[20, 85]"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="40" :step="10" :range="[30]"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 同步时机

用`sync-on`属性可以设置输入后何时同步值到`<u-slider>`组件中。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="20" :precision="10" :step="20"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-combo-slider :value="20" :precision="10" :step="20" sync-on="blur"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 格式化

通常可以用以下字符组成一个格式化字符串：

- `0`表示数字占位符。如果整数部分长度小于占位符的数量，则用`0`补足。如果小数部分长度大于占位符数量，则会四舍五入。
- `#`表示数字占位符。只显有意义的零而不显示无意义的零。
- `.`表示小数点。
- `,`表示千分位。

也可以传入一个包含`get`和`set`方法的格式化对象。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="6" formatter="000"></u-combo-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="8">
        <u-combo-slider :value="20" formatter="0%"></u-combo-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 显示输入框button

``` html
<u-combo-slider :hide-buttons="false"></u-combo-slider>
```

### 显示tooltip

``` html
<u-combo-slider :show-tooltip="true"></u-combo-slider>
```
