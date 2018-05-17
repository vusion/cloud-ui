# 环状图 DonutChart

## 示例
### 基本形式

```vue
<template>
    <u-donut-chart :data="data"></u-donut-chart>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { percent: 40, name: '对象存储', value: 40, state: 'nos', },
                { percent: 20, name: '容器服务', value: 20, state: 'nce', },
                { percent: 30, name: '云服务器', value: 30, state: 'nvm', },
                { percent: 10, name: '弹性公网IP', value: 10, state: 'net', },
            ]
        };
    },
};
</script>
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
                { percent: 40, name: '对象存储', value: 40, state: 'nos', },
                { percent: 20, name: '容器服务', value: 20, state: 'nce', },
                { percent: 30, name: '云服务器', value: 30, state: 'nvm', },
                { percent: 10, name: '弹性公网IP', value: 10, state: 'net', },
            ]
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
                { percent: 7, name: '对象存储', value: 7, state: 'nos', },
                { percent: 5, name: '容器服务', value: 5, state: 'nce', },
                { percent: 8, name: '云服务器', value: 8, state: 'nvm', },
                { percent: 10, name: '弹性公网IP', value: 10, state: 'net', },
                { percent: 9, name: 'RDS', value: 9, state: 'rds', },
                { percent: 1, name: 'Redis', value: 1, state: 'ncr', },
                { percent: 20, name: 'Elasticsearch', value: 20, state: 'nes', },
                { percent: 15, name: '消息队列', value: 15, state: 'nqs', },
                { percent: 5, name: 'CDN', value: 5, state: 'cdn', },
                { percent: 12, name: 'DDoS 基础防护', value: 12, state: 'ddos', },
                { percent: 8, name: 'SSL', value: 8, state: 'ssl', },
            ]
        };
    },
};
</script>
```

### 空态

```html
<u-donut-chart :data="[]"></u-donut-chart>
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