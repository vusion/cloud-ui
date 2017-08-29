# 分页器（Pagination）

## 示例
### 基本形式

``` html
<u-pagination :total="11"></u-pagination>
<u-pagination :total="11" :page="6"></u-pagination>
```

### 显示数目

使用`side`和`around`属性可以改变显示的数目。

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### 禁用

``` html
<u-pagination :total="11" disabled></u-pagination>
```
