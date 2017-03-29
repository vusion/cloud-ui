# 分页器（Pagination）

## 示例
### 基本形式

``` html
<vi-pagination :total="11"></vi-pagination>
<vi-pagination :total="11" :current="6"></vi-pagination>
```

### 显示数目

使用`side`和`around`属性可以改变显示的数目。

``` html
<vi-pagination :total="11" :current="6" :side="1" :around="3"></vi-pagination>
```

### 禁用

``` html
<vi-pagination :total="11" disabled></vi-pagination>
```
