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

### 显示总页数

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total></u-pagination>
    <u-pagination :total-items="75" show-total>
        <template slot="totalText" slot-scope="{ data }">
            {{ (data.page - 1)*data.pageSize + 1}}-{{ data.page*data.pageSize}}条，共{{data.totalItems}}条
        </template>
    </u-pagination>
</u-linear-layout>
```

### 显示所有配置选项

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total-items="75" show-total show-sizer show-jumper></u-pagination>
    <u-pagination 
        :total-items="75" 
        show-total 
        show-sizer 
        show-jumper 
        :pageSize="30" 
        :pageSizeOptions="[10,20,30,40]">
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

