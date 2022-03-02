### 基本样式

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule>Banana</u-capsule>
    <u-capsule>Cake</u-capsule>
</u-capsules>
```

### 选择值

``` html
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-capsules value="C" readonly>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<u-capsules value="C" disabled>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
<u-capsules value="C">
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B" disabled>Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
</u-linear-layout>
```

### 可取消

点击两次同一项，可取消状态

``` html
<u-capsules value="C" cancelable>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 多项选择

绑定`value`属性，可以用`v-model`或`:value.sync`。

``` html
<u-capsules :value="['B', 'C']" multiple>
    <u-capsule value="A">Apple</u-capsule>
    <u-capsule value="B">Banana</u-capsule>
    <u-capsule value="C">Cake</u-capsule>
</u-capsules>
```

### 胶囊组

``` html
<u-capsules>
    <u-capsules-group>
        <u-capsule>Apple</u-capsule>
        <u-capsule>Banana</u-capsule>
        <u-capsule>Cake</u-capsule>
    </u-capsules-group>
    <u-capsules-group>
        <u-capsule>Apple</u-capsule>
        <u-capsule>Banana</u-capsule>
        <u-capsule>Cake</u-capsule>
    </u-capsules-group>
</u-capsules>
```

### Flag

``` html
<u-capsules>
    <u-capsule>Apple</u-capsule>
    <u-capsule flag>Banana</u-capsule>
    <u-capsule flag="">Cake</u-capsule>
</u-capsules>
```

### 标签

``` html
<u-capsules size="small">
    <u-capsule value="1" >1月</u-capsule>
    <u-capsule value="3">3月</u-capsule>
    <u-capsule value="6" label="95折">6月</u-capsule>
    <u-capsule value="12" label="88折">1年</u-capsule>
    <u-capsule value="24" label="80折">2年</u-capsule>
</u-capsules>
```
