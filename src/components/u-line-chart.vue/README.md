# ULineChart 线状图

## 示例
### 基本形式

``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 曲线图

``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :smooth="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 填充下方区域

``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :fill="true" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```


### 单位
``` html
<u-line-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0, name: '个' }" :series="[{ key: 'number' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-line-chart>
```

### 隐藏图例

``` vue
<template>
<u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth">
	<div slot="titleTemplate">{{title}}</div>
</u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'},{key: 'num', hidden: true } ],
			data: [
				{ week: '星期一', number: 150, num: 1200 },
				{ week: '星期二', number: 300, num: 1200 },
				{ week: '星期三', number: 28, num: undefined },
				{ week: '星期四', number: 200, num: 2000 },
				{ week: '星期五', number: 74, num: 740 },
				{ week: '星期六', number: 532, num:2000 },
				{ week: '星期日', number: 420 ,num: 5000},
			],
			smooth: true,
		}
	},
};
</script>
```

### 自定义tooltip
``` vue
<template>
<u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth">
	<div slot="tooltip" slot-scope="scope">
		{{ scope.row[scope.sery.key]}}
	</div>
</u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'} ],
			data: [
				{ week: '星期一', number: 150, num: 1200 },
				{ week: '星期二', number: 300, num: 1200 },
				{ week: '星期三', number: 28, num: undefined },
				{ week: '星期四', number: 200, num: 2000 },
				{ week: '星期五', number: 74, num: 740 },
				{ week: '星期六', number: 532, num:2000 },
				{ week: '星期日', number: 420 ,num: 5000},
			],
			smooth: true,
		}
	},
};
</script>
```

### 自定义X轴显示

``` vue
<template>
<u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth">
	<div slot="titleTemplate">{{title}}</div>
	<div style="transform: translateY(15px) rotate(45deg);transform-origin: bottom;" slot="xLabelTemplate" slot-scope="scope">{{ scope.item }}</div>
</u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'},{key: 'num', hidden: true } ],
			data: [
				{ week: '星期一', number: 150, num: 1200 },
				{ week: '星期二', number: 300, num: 1200 },
				{ week: '星期三', number: 28, num: undefined },
				{ week: '星期四', number: 200, num: 2000 },
				{ week: '星期五', number: 74, num: 740 },
				{ week: '星期六', number: 532, num:2000 },
				{ week: '星期日', number: 420 ,num: 5000},
			],
			smooth: true,
		}
	},
};
</script>
```

### 多线段形式

``` vue
<template>
<u-line-chart border legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth" @click="clickPoint">
	<div slot="titleTemplate">{{title}}</div>
	<span slot="legendTemplate" slot-scope="scope">
		<template>{{scope.sery.name || scope.sery.key}}</template>
	</span>
	<template slot="legendSuffix">
		<span style="vertical-align: middle;">更多</span>
	</template>
</u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'},{key: 'num', } ],
			data: [
				{ week: '星期一', number: 150, num: 1200 },
				{ week: '星期二', number: 300, num: 1200 },
				{ week: '星期三', number: 28, num: 1000 },
				{ week: '星期四', number: 200, num: 2000 },
				{ week: '星期五', number: 74, num: 740 },
				{ week: '星期六', number: 532, num:2000 },
				{ week: '星期日', number: 420 ,num: 5000},
			],
			smooth: true,
		}
	},
	methods: {
		clickPoint(e) {
			console.log(e);
		},
	},
};
</script>
```

### 简单散点图

``` vue
<template>
<u-line-chart border scatter legend :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data" :smooth="smooth" @click="clickPoint">
	<div slot="titleTemplate">{{title}}</div>
</u-line-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个'},
			series: [{key: 'number'} ],
			data: [
				{ week: '星期一', number: 150, num: 1200 },
				{ week: '星期二', number: 300, num: 1200 },
				{ week: '星期三', number: 28, num: 1000 },
				{ week: '星期四', number: 200, num: 2000 },
				{ week: '星期五', number: 74, num: 740 },
				{ week: '星期六', number: 532, num:2000 },
				{ week: '星期日', number: 420 ,num: 5000},
			],
			smooth: true,
		}
	},
	methods: {
		clickPoint(e) {
			console.log(e);
		},
	},
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
| series | Array |  | 传入绘制每条线的数据，数组中对象的属性key对象data数组中对象某个属性，hidden属性表示默认隐藏此选段，absent表示不显示此选段，默认作为tooltip显示的数据内容 |
| border | Boolean | false | 是否有表框 |
| legend | [Boolean, String] | false | X轴下方是否显示每条线段对应的标签，当值是`'always'`的时候，legend始终显示 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| smooth | Boolean | false | 线段是否采用平滑方式绘制 |
| fill | Boolean | false | 线段和X轴之间否填充 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |
| loading | Boolean | `false` | true表示正在加载中，false表示加载完成 |
| scatter | Boolean | `false` | 简单散点图 |

### Events

#### @click

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | 当前点的数据 |
| $event.index | String | 当前索引 |

### Slots

| Slot | Description |
| ---- | ----------- |
| tooltip | 自定义tooltip内容 |

| Slot | Description |
| ---- | ----------- |
| operate | 自定义内容 |

| Slot | Description |
| ---- | ----------- |
| titleTemplate | 自定义标题内容 |

| Slot | Description |
| ---- | ----------- |
| captionTemplate | 自定义caption内容 |

| Slot | Description |
| ---- | ----------- |
| legendTemplate | 自定义legend内容 |

| Slot | Description |
| ---- | ----------- |
| legendSuffix | 自定义legend后缀内容 |

| Slot | Description |
| ---- | ----------- |
| xLabelTemplate | 自定义X轴内容，作用域插槽，会传入三个参数`item`、`data`和`index`, 其中data是x轴的数据集合，item是当前数据项，index是当前数据项索引 |
