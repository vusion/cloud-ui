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

### 上一页和下一页

修改上一页和下一页，接受 slot 来自定义内容

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11">
        <a slot="prev" role="text">上一页</a>
        <a slot="next" role="text">下一页</a>
    </u-pagination>
</u-linear-layout>
```

### 显示总条数

显示总共多少条数据，接受 slot 来自定义内容

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total></u-pagination>
    <u-pagination :total-items="75" show-total>
        <template slot="total" slot-scope="{ data }">
            {{ (data.page - 1)*data.pageSize + 1}}-{{ data.page*data.pageSize}}条，共{{data.totalItems}}条
        </template>
    </u-pagination>
</u-linear-layout>
```

### 全部配置

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper></u-pagination>
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

### 只读和禁用

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
    <u-pagination :total-items="75" show-total show-sizer show-jumper disabled></u-pagination>
</u-linear-layout>
```

### 小尺寸

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper size="small"></u-pagination>
</u-linear-layout>
```

### 简洁版

设置`simple`属性即可使用简洁版的分页，不支持显示总页数、切换每页大小、页面跳转功能

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" simple></u-pagination>
    <u-pagination :total="11" simple readonly></u-pagination>
    <u-pagination :total="11" simple disabled></u-pagination>
</u-linear-layout>
```
