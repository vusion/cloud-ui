### 基本用法

``` html
<u-pills>
    <u-pill>Apple</u-pill>
    <u-pill>Banana</u-pill>
    <u-pill>Cake</u-pill>
</u-pills>
```

### 选择值

``` html
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-pills value="C" readonly>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<u-pills value="C" disabled>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
<u-pills value="C">
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B" disabled>Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
</u-linear-layout>
```

### 可取消

点击两次同一项，可取消状态

``` html
<u-pills value="C" cancelable>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```

### 多项选择

绑定`value`属性，可以用`v-model`或`:value.sync`。

``` html
<u-pills :value="['B', 'C']" multiple>
    <u-pill value="A">Apple</u-pill>
    <u-pill value="B">Banana</u-pill>
    <u-pill value="C">Cake</u-pill>
</u-pills>
```
