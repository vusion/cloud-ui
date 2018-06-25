# 表格 Table（纯属样式封装）

## 示例
### 基本形式

```html
<u-table>
    <thead>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>地址</th>
            <th>出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路 599号</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区网商路 599号</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>3</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路 599号</td>
            <td>1991-05-28</td>
        </tr>
    </tbody>
</u-table>
```

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在表格中插入内容 |
| thead | 插入表头 |
| tbody | 插入表格内容 |
| page | 插入翻页等其他不在表格内部内容 |


