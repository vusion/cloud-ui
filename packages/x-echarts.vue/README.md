# XEcharts


[![NPM Version](http://img.shields.io/npm/v/@cloud-ui/x-echarts.vue.svg?style=flat-square)](http://npmjs.org/package/@cloud-ui/x-echarts.vue)
[![Echarts Version](http://img.shields.io/npm/v/echarts.svg?label=echarts&style=flat-square)](http://npmjs.org/package/echarts)

## 安装

### NPM 安装

``` shell
npm i --save-dev @cloud-ui/x-echarts.vue
```

### 引入

``` js
import Vue from 'vue';
import XEcharts from '@cloud-ui/x-echarts.vue';

Vue.component('x-echarts', XEcharts);
```

或

``` js
import Vue from 'vue';
import { install } from 'vusion-utils';
import XEcharts from '@cloud-ui/x-echarts.vue';

install(Vue, { XEcharts });
```

## 示例
### 基本用法

``` vue
<template>
<x-echarts
    :options="bar"
    :init-options="initOptions"
    autoresize>
</x-echarts>
</template>

<script>
function getData () {
  return {
    title: {
        text: 'Production'
    },
    legend: {},
    tooltip: {},
    dataset: {
      // Provide data.
      source: [
        ['Product', '2015', '2016', '2017'],
        ['Matcha Latte', ...randomize()],
        ['Milk Tea', ...randomize()],
        ['Cheese Cocoa', ...randomize()],
        ['Walnut Brownie', ...randomize()]
      ]
    },
    // Declare X axis, which is a category axis, mapping
    // to the first column by default.
    xAxis: { type: 'category' },
    // Declare Y axis, which is a value axis.
    yAxis: {},
    // Declare several series, each of them mapped to a
    // column of the dataset by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }
}

function randomize () {
  return [0, 0, 0].map(v => {
    return Math.round(300 + Math.random() * 700) / 10
  })
}

export default {
	data() {
		return {
			bar: getData(),
            initOptions: {
                renderer: 'canvas'
            }
		}
	}
};
</script>
```

## API

更多详细信息请参考 [Echarts 的 API 文档](https://echarts.apache.org/zh/api.html)。

### Props/Attrs（均为响应式）

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| initOptions | Object | | 初始化实例 |
| options | Object |  | ECharts 实例的数据。修改这个 prop 会触发 ECharts 实例的 `setOption` 方法。如果直接修改 `options` 绑定的数据而对象引用保持不变，`setOption` 方法调用时将带有参数 `notMerge: false`。否则，如果为 `options` 绑定一个新的对象，`setOption` 方法调用时则将带有参数 `notMerge: true`。 |
| theme | String | | 设置主题 |
| group | String | | 实例的分组，会自动绑定到 ECharts 组件的同名属性上。 |
| autoresize | Boolean | `false` | 指定 ECharts 实例在组件根元素尺寸变化时是否需要自动进行重绘。 |
| manual-update | Boolean | `false` | 在性能敏感（数据量很大）的场景下，我们最好对于 `options` prop 绕过 Vue 的响应式系统。当将 `manual-update` prop 指定为 `true` 且不传入 `options` prop 时，数据将不会被监听。然后，你需要用 `ref` 获取组件实例以后手动调用 `mergeOptions` 方法来更新图表。 |

### Computed

| Computed | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| width | Number | | 用来获取 ECharts 实例的当前宽度。 |
| height | Number | | 用来获取 ECharts 实例的当前高度。 |
| computedOptions | Object | | 用来读取 ECharts 更新内部 `options` 后的实际数据。 |

### Methods

#### mergeOptions

（底层调用了 ECharts 实例的 `setOption` 方法）提供了一个更贴切的名称来描述 `setOption` 方法的实际行为。

#### appendData
#### resize
#### dispatchAction
#### showLoading
#### hideLoading
#### convertToPixel
#### convertFromPixel
#### containPixel
#### getDataURL
#### getConnectedDataURL
#### clear
#### dispose

### Static Methods

#### connect
#### disconnect
#### registerMap
#### registerTheme
#### graphic.clipPointsByRect
#### graphic.clipRectByRect

### Events

#### @legendselectchanged
#### @legendselected
#### @legendunselected
#### @legendscroll
#### @datazoom
#### @datarangeselected
#### @timelinechanged
#### @timelineplaychanged
#### @restore
#### @dataviewchanged
#### @magictypechanged
#### @geoselectchanged
#### @geoselected
#### @geounselected
#### @pieselectchanged
#### @pieselected
#### @pieunselected
#### @mapselectchanged
#### @mapselected
#### @mapunselected
#### @axisareaselected
#### @focusnodeadjacency
#### @unfocusnodeadjacency
#### @brush
#### @brushselected
#### @rendered
#### @finished
#### @click
#### @dblclick
#### @mouseover
#### @mouseout
#### @mousemove
#### @mousedown
#### @mouseup
#### @globalout
#### @contextmenu

