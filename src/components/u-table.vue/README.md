# UTable 表格

### 基本形式

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

## UTable

### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。
