# UTable 表格

### 基本用法

``` html
<u-table>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 表格线条

设置`line="both"`属性，使表格单元格之间由线条隔开。

``` html
<u-table line="both">
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 条纹展示

添加`striped`属性，使表格具有斑马线条纹样式。

``` html
<u-table striped>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 单行颜色

在`<tr>`上用`color`属性，可以单独给某一行添加颜色。

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr color="light">
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="normal">
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="dark">
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="primary">
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="error">
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

## UTable

### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。
