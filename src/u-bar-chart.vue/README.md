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
