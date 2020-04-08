### 基本用法

``` html
<u-slider :value="36"></u-slider>
```

### 最大值和最小值

``` html
<u-slider :value="36" :min="10" :max="50"></u-slider>
```

### 连续和间隔

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :step="0"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :step="20"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 只读和禁用

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 倒序

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]" reverse></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]" reverse></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 倒序-只读、禁用

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly reverse></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled reverse></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 垂直

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]" vertical></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]" vertical></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 垂直-只读、禁用

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly vertical></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled vertical></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 垂直倒序

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]" vertical reverse></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]" vertical reverse></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 垂直倒序-只读、禁用

```html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly vertical reverse></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled vertical reverse></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```
