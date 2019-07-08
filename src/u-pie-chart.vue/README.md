# 饼图 PieChart

## 示例
### 基本形式

``` html
<u-pie-chart border legend title="每星期访问量" :data="[
    { 'percent': 23, 'name': 'selector1' },
    { 'percent': 27, 'name': 'selector2' },
    { 'percent': 12, 'name': 'selector3' },
    { 'percent': 38, 'name': 'selector4' }
]"></u-pie-chart>
```

### 百分比都为 0

``` html
<u-pie-chart border legend title="每星期访问量" :data="[
    { 'percent': 0, 'name': 'selector1' },
    { 'percent': 0, 'name': 'selector2' },
    { 'percent': 0, 'name': 'selector3' },
    { 'percent': 0, 'name': 'selector4' }
]"></u-pie-chart>
```

### 自定义tooltip
``` html
<u-pie-chart border legend title="每星期访问量" :data="[
    { 'percent': 25, 'name': 'selector1' },
    { 'percent': 25, 'name': 'selector2' },
    { 'percent': 30, 'name': 'selector3' },
    { 'percent': 20, 'name': 'selector4' }
]">
    <div slot="tooltip" slot-scope="scope">{{ scope.row.name }}</div>
    <div slot="text" slot-scope="scope">{{ scope.row.percent + '%' }}</div>
</u-pie-chart>
```

### 选择项

``` html
<u-pie-chart border legend title="每星期访问量" value="selector2"s :data="[
    { 'percent': 23, 'name': 'selector1' },
    { 'percent': 27, 'name': 'selector2' },
    { 'percent': 12, 'name': 'selector3' },
    { 'percent': 38, 'name': 'selector4' },
]"></u-pie-chart>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 图表的标题 |
| caption | String |  | 图表的描述 |
| data | Array |  | 图表需要显示的数据,数组中的对象key值：percent表示占比，请传入整数形式，例30表示30%，name表示占比的名称，会在底部的legend中显示 |
| border | Boolean | false | 是否有表框 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |
| value.sync | String |  | 图表选中的值 |
| valueField | String | `name` | 图表初始选中的值的字段名 |

### Slot

| Slot | Description |
| ---- | ----------- |
| tooltip | 自定义tooltip内容(作用域插槽，请参照示例自定义tooltip的写法) |
| text | 自定义文本显示(作用域插槽，请参照示例写法) |
