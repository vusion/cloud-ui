# UBarChart 柱状图

## 示例
### 基本形式

``` html
<u-bar-chart border legend title="每星期访问量" :x-axis="{ key: 'week' }" :y-axis="{ min: 0 }" :series="[{key: 'number', name: '访问量' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-bar-chart>
```

#### 命令式


``` vue
<template>
<u-bar-chart border legend gap-size="medium" :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data"></u-bar-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0 },
			series: [{key: 'number', name: '访问量' }],
			data: [
				{ week: '星期一', number: 150 },
				{ week: '星期二', number: 300 },
				{ week: '星期三', number: 28 },
				{ week: '星期四', number: 200 },
				{ week: '星期五', number: 74 },
				{ week: '星期六', number: 532 },
				{ week: '星期日', number: 420 },

			],
		}
	}
};
</script>
```

#### 自定义X轴显示

``` vue
<template>
<u-bar-chart border legend gap-size="medium" :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data">
	<div style="transform: translateY(10px) rotate(45deg);transform-origin: bottom;" slot="xLabelTemplate" slot-scope="scope">{{ scope.item }}</div>
</u-bar-chart>
</template>

<script>
export default {
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0 },
			series: [{key: 'number', name: '访问量' }],
			data: [
				{ week: '星期一', number: 150 },
				{ week: '星期二', number: 300 },
				{ week: '星期三', number: 28 },
				{ week: '星期四', number: 200 },
				{ week: '星期五', number: 74 },
				{ week: '星期六', number: 532 },
				{ week: '星期日', number: 420 },

			],
		}
	}
};
</script>
```

#### 堆叠数据

``` vue
<template>
<div>
	<u-bar-chart border legend :stack="stack" :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data">
		<div slot-scope="scope" slot="tooltip">
			<div v-for="sery in series">{{ sery.name || sery.key}} : {{ scope.row[sery.key]}} </div>
		</div>
	</u-bar-chart>
</div>
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

#### x轴间隔显示

``` vue
<template>
<div>
	<u-bar-chart border legend :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data">
		<div slot-scope="scope" slot="tooltip">
			{{ scope.sery.name}} : {{ scope.row[scope.sery.key]}}
		</div>
	</u-bar-chart>
</div>
</template>

<script>
export default {
	data() {
		return {
			title: '6月访问量',
			xaxis: { key: 'time', count: 4 },
			yaxis: { min: 0 },
			series: [{key: 'number', name: '访问量' }],
			data: [
				{ time: '2018-06-01', number: 150 },
				{ time: '2018-06-02', number: 300 },
				{ time: '2018-06-03', number: 28 },
				{ time: '2018-06-04', number: 200 },
				{ time: '2018-06-05', number: 74 },
				{ time: '2018-06-06', number: 532 },
				{ time: '2018-06-07', number: 420 },
				{ time: '2018-06-08', number: 532 },
				{ time: '2018-06-09', number: 420 },
				{ time: '2018-06-10', number: 532 },
				{ time: '2018-06-11', number: 420 },
				{ time: '2018-06-12', number: 532 },
				{ time: '2018-06-13', number: 420 },
				{ time: '2018-06-14', number: 200 },
				{ time: '2018-06-15', number: 74 },
				{ time: '2018-06-16', number: 532 },
				{ time: '2018-06-17', number: 420 },
				{ time: '2018-06-18', number: 532 },
				{ time: '2018-06-19', number: 420 },
				{ time: '2018-06-20', number: 420 },
				{ time: '2018-06-21', number: 420 },
				{ time: '2018-06-22', number: 420 },
				{ time: '2018-06-23', number: 420 },
				{ time: '2018-06-24', number: 200 },
				{ time: '2018-06-25', number: 74 },
				{ time: '2018-06-26', number: 532 },
				{ time: '2018-06-27', number: 420 },
				{ time: '2018-06-28', number: 532 },
				{ time: '2018-06-29', number: 420 },
			],
		}
	},
	methods: {
		format(value) {
			console.log(value);
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
| xAxis | Object | | 绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺, count属性用来在数据较多的情况下让x轴间隔显示 |
| yAxis | Object | | 绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8 |
| series | Array |  | 传入绘制每条柱状数据的key值，key值对应着data数组中对象的属性 |
| border | Boolean | false | 是否有表框 |
| legend | [Boolean, String] | false | X轴下方是否显示每条线段对应的标签 |
| width | String | `100%` | 图表的宽度 |
| height | String | `480px` | 图表的高度 |
| stack | Boolean | false | 线段是否采用堆叠方式，这种方式下series中的对象属性key等于data中标识不同部分的key字段 |
| titleAlign | String | `center` | 图表标题的对齐方式，默认是居中，值有:left,center,right |
| loading | Boolean | `false` | true表示正在加载中，false表示加载完成 |
| gapSize | String | `'normal'` | 控制柱的宽度，值可以是`mini,small,normal,medium,large,huge`中的任何一个 |

### Events

#### @click

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.data | Object | 当前柱的数据 |
| $event.index | String | 当前索引 |

### Slots

| Slot | Description |
| ---- | ----------- |
| tooltip | 自定义tooltip内容 |

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
