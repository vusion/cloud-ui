# 分页器（Pagination）

## 示例
### 基本形式

``` html
<v-pagination :total="11"></v-pagination>
<v-pagination :total="11" :current="6"></v-pagination>
```

### 显示数目

使用`side`和`around`属性可以改变显示的数目。

``` html
<v-pagination :total="11" :current="6" :side="1" :around="3"></v-pagination>
```

### 禁用

``` html
<v-pagination :total="11" disabled></v-pagination>
```
