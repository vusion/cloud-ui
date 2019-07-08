# 环状图 DonutChart

## 示例
### 基本形式

``` html
<u-donut-chart :data="[3, 6, 5, 4, 2]"></u-donut-chart>
```

``` html
<u-donut-chart legend title="24小时消费" :data="[
    { name: '对象存储', value: 40 },
    { name: '容器服务', value: 20 },
    { name: '云服务器', value: 30 },
    { name: '弹性公网IP', value: 10 },
]"></u-donut-chart>
```

### 工具提示

```vue
<template>
    <u-donut-chart :data="data" tooltip unit="元"></u-donut-chart>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { percent: 40, name: '对象存储', value: 40, state: 'nos' },
                { percent: 20, name: '容器服务', value: 20, state: 'nce' },
                { percent: 30, name: '云服务器', value: 30, state: 'nvm' },
                { percent: 10, name: '弹性公网IP', value: 10, state: 'net' },
            ],
        };
    },
};
</script>
```

### 图例

```vue
<template>
    <u-donut-chart :data="data" legend unit="元"></u-donut-chart>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { percent: 7, name: '对象存储', value: 7, state: 'nos' },
                { percent: 5, name: '容器服务', value: 5, state: 'nce' },
                { percent: 8, name: '云服务器', value: 8, state: 'nvm' },
                { percent: 10, name: '弹性公网IP', value: 10, state: 'net' },
                { percent: 9, name: 'RDS', value: 9, state: 'rds' },
                { percent: 1, name: 'Redis', value: 1, state: 'ncr' },
                { percent: 20, name: 'Elasticsearch', value: 20, state: 'nes' },
                { percent: 15, name: '消息队列', value: 15, state: 'nqs' },
                { percent: 5, name: 'CDN', value: 5, state: 'cdn' },
                { percent: 12, name: 'DDoS 基础防护', value: 12, state: 'ddos' },
                { percent: 8, name: 'SSL', value: 8, state: 'ssl' },
            ],
        };
    },
};
</script>
```

### 数据状态

#### 加载中
``` html
<u-donut-chart title="24小时消费" border legend></u-donut-chart>
```

#### 加载失败
``` html
<u-donut-chart title="24小时消费" border legend :data="null"></u-donut-chart>
```

#### 空态
``` html
<u-donut-chart title="24小时消费" legend :data="[]"></u-donut-chart>
```

#### 和为0

``` html
<u-donut-chart legend title="每星期访问量" :data="[
    { name: 'selector1', value: 0 },
    { name: 'selector2', value: 0 },
    { name: 'selector3', value: 0 },
    { name: 'selector4', value: 0 },
]"></u-donut-chart>
```

### 设置颜色

``` html
<u-donut-chart legend :data="[
    { name: '请求成功数', value: 90, color: 'success' },
    { name: '请求失败数', value: 10, color: 'error' },
    { name: '线程超时次数', value: 4, color: '#5b9cff' },
    { name: '线程拒绝次数', value: 6, color: 'warning' },
]"></u-donut-chart>
```

### 大小扩展

``` html
<u-donut-chart size="small" legend title="24小时消费" :data="[
    { name: '对象存储', value: 40 },
    { name: '容器服务', value: 20 },
    { name: '云服务器', value: 30 },
    { name: '弹性公网IP', value: 10 },
]"></u-donut-chart>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array |  | 图表需要显示的数据,数组中的对象key值：percent表示占比，请传入整数形式，例30表示30%；name表示占比的名称；value表示占比的值；state表示占比的描述，用于确定区域底色。|
| unit | String |  | 图表数据的单位 |
| width | Number | `160` | 图表的宽度 |
| height | Number | `160` | 图表的高度 |
| tooltip | Boolean | `false` | 是否显示提示工具 |
| legend | Boolean | `false` | 是否显示图例 |
| value | String |  | 图表初始选中的值 |
| valueField | String | `name` | 图表初始选中的值的字段名 |