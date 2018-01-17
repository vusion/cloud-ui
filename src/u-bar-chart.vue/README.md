# 柱状图 BarChart

## 示例
### 基本形式

``` html
<u-bar-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{key: 'number', name: '访问量' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-bar-chart>
```

#### 命令式


``` vue
<template>
<u-bar-chart border legend :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data"></u-bar-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0 },
			series: [{key: 'number', name: '访问量' }],
			data: [{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }],
		}
	}
};
</script>
```

#### 堆叠数据

``` vue
<template>
<u-bar-chart border legend :stack="stack" :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data"></u-bar-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0 },
			stack: 'stack',
			series: [{ key: 'rds' }, { key: 'ncr' }, { key: 'nce' }],
			data: [
				{ week: '星期一', rds: 150, ncr: 200, nce: 50 },
	            { week: '星期二', rds: 300, ncr: 340, nce: 20 },
	            { week: '星期三', rds: 28, ncr: 56, nce: 28 },
	            { week: '星期四', rds: 200, ncr: 78, nce: 40 },
	            { week: '星期五', rds: 74, ncr: 100, nce: 74 },
	            { week: '星期六', rds: 532, ncr: 200, nce: 32 },
	            { week: '星期日', rds: 420, ncr: 260, nce: 20 },
			],
		}
	}
};
</script>
```

## API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 图表的标题 |
| caption | String |  | 图表的描述 |
| data | Array |  | 图表需要显示的数据 |
| xAxis | Object | | 绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺 |
| yAxis | Object | | 绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8 |
| series | Array |  | 传入绘制每条柱状数据的key值，key值对应着data数组中对象的属性 |
| border | Boolean | false | 是否有表框 |
| legend | Boolean | false | X轴下方是否显示每条线段对应的标签 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| stack | Boolean | false | 线段是否采用堆叠方式，这种方式下series中的对象属性key等于data中标识不同部分的key字段 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |
| loading | Boolean | `false` | true表示正在加载中，false表示加载完成 |

### Slots

| Slot | Description |
| ---- | ----------- |
| tooltipTemplate + index（index为遍历data的索引） | 自定义tooltip内容 |

| Slot | Description |
| ---- | ----------- |
| titleTemplate | 自定义标题内容 |

| Slot | Description |
| ---- | ----------- |
| captionTemplate | 自定义caption内容 |
