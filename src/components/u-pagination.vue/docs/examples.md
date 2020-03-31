### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### 显示数量

当页数多时，可以使用`side`和`around`来设置两边和中间恒定显示的数量。

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### 显示总页数、切换每页大小、页面跳转功能

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper :pageSize="50"></u-pagination>
</u-linear-layout>
```

### 只读和禁用

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper disabled></u-pagination>
</u-linear-layout>
```

