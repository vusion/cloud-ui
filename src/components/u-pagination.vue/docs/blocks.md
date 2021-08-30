### 基本用法

``` html
<u-pagination :total="11" :page="6"></u-pagination>
```

### 全部配置

``` html
<u-linear-layout direction="vertical">
    <u-pagination
        :total-items="75"
        show-total
        show-sizer
        show-jumper
        :pageSize="30"
        :pageSizeOptions="[30,50,100]">
    </u-pagination>
</u-linear-layout>
```

### 简洁版

设置`simple`属性即可使用简洁版的分页，不支持显示总页数、切换每页大小、页面跳转功能

``` html
<u-pagination :total="11" simple></u-pagination>
```
