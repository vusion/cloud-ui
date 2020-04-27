### 基本用法

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="6"></u-number-input>
</u-linear-layout>
```

### 双向绑定

``` vue
<template>
<u-number-input v-model="value"></u-number-input>
</template>
<script>
export default {
    data() {
        return {
            value: 6,
        };
    },
};
</script>
```

### 最大值和最小值

``` html
<u-linear-layout>
    <u-number-input :min="4" :max="12"></u-number-input>
    <u-number-input :value="6" :min="4" :max="12"></u-number-input>
</u-linear-layout>
```

### 精度与间隔

精度表示数字要保留的最小单位，整数、小数均可，输入框会根据它作四舍五入。默认为`1`，即保留到整数。

间隔表示点击按钮或按上下键所增加或减少的量，最好为精度的整数倍。

``` html
<u-linear-layout>
    <u-number-input :value="6" :precision="0.1" :step="0.5"></u-number-input>
    <u-number-input :value="5" :precision="5" :step="10"></u-number-input>
    <u-number-input :value="6" :step="10"></u-number-input>
</u-linear-layout>
```

如果不限精度和间隔，则将`precision`和`step`设置为`0`即可。

``` html
<u-linear-layout>
    <u-number-input :value="6" :precision="0" :step="0"></u-number-input>
</u-linear-layout>
```

### 格式化

通常可以用以下字符组成一个格式化字符串：

- `0`表示数字占位符。如果整数部分长度小于占位符的数量，则用`0`补足。如果小数部分长度大于占位符数量，则会四舍五入。
- `#`表示数字占位符。只显有意义的零而不显示无意义的零。
- `.`表示小数点。
- `,`表示千分位。

也可以传入一个包含`get`和`set`方法的格式化对象。

``` html
<u-linear-layout>
    <u-number-input :value="20" formatter="0000"></u-number-input>
    <u-number-input :value="1234" :precision="0.01" :step="0.1" formatter="$ #,##0.00"></u-number-input>
    <u-number-input :value="20" :precision="0.5" :step="0.5" formatter="0.0%"></u-number-input>
</u-linear-layout>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-number-input :value="6" readonly></u-number-input>
    <u-number-input :value="6" disabled></u-number-input>
</u-linear-layout>
```
