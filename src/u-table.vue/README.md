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

### 和翻页组件结合

```vue
<template>
    <u-table page :total="2" :page-num="1" @change="change">
        <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>地址</th>
                <th>出生日期</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in list">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.birth}}</td>
            </tr>
        </tbody>
    </u-table>
</template>
<script>
export default{
    data() {
        return {
            list: [
                { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                { name: '李四', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                { name: '王五', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                { name: '田柳', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                { name: '琪琪', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
            ]
        }
    },
    methods: {
        change(value) {
            console.log(value);
            setTimeout(() => {
                if (value === 2) {
                    this.list = [
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                    ];
                } else {
                    this.list = [
                        { name: '张三', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '李四', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '王五', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '田柳', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                        { name: '琪琪', address: '浙江省杭州市滨江区网商路 599号', birth: '20180101'},
                    ];
                }
            }, 2000);
        }
    }
};
</script>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| page | Boolean | `false` | 是否使用默认翻页 |
| pageNum | Number | `1` | 当前页码 |
| total | Number | `1` | 总页数 |
| side | Number | `2` | 当页数多时，两边恒定显示的数量 |
| around | Number | `5` | 当页数多时，中间恒定显示的数量  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| align | String | `'right'` | 翻页组件对齐方式 ，默认右对齐|

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在表格中插入内容 |
| thead | 插入表头 |
| tbody | 插入表格内容 |
| page | 插入翻页等其他不在表格内部内容 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Number | 当前所在页 |

