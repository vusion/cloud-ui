# 弹窗 PieChart

## 示例
### 基本形式

``` html
<u-pie-chart border legend title="每星期访问量" :data="[{ 'percent': 0, 'name': 'selector1' }, { 'percent': 0, 'name': 'selector2' }, { 'percent': 0, 'name': 'selector3' }, { 'percent': 0, 'name': 'selector4' }]"></u-pie-chart>
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
