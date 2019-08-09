# XECharts -- 继承自Vue-ECharts，添加了Vusion主题
# Vue-ECharts

> ECharts 的 Vue.js 组件。

基于 [ECharts](http://echarts.baidu.com/index.html) `v4.1.0`+ 开发，依赖 [Vue.js](https://vuejs.org/) `v2.2.6`+。

## 示例
### 基本形式

``` html

```

``` vue
<template>
<figure>
    <x-echarts
    :options="bar"
    :init-options="initOptions"
    autoresize
    />
</figure>
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

### Props *（均为响应式）*

* `initOptions`

  用来初始化 ECharts 实例。

* `theme`

  当前 ECharts 实例使用的主题。

* `options`

  ECharts 实例的数据。修改这个 prop 会触发 ECharts 实例的 `setOption` 方法。

  如果直接修改 `options` 绑定的数据而对象引用保持不变，`setOption` 方法调用时将带有参数 `notMerge: false`。否则，如果为 `options` 绑定一个新的对象，`setOption` 方法调用时则将带有参数 `notMerge: true`。

* `group`

  实例的分组，会自动绑定到 ECharts 组件的同名属性上。

* `autoresize` （默认值：`false`）

  这个 prop 用来指定 ECharts 实例在组件根元素尺寸变化时是否需要自动进行重绘。

* `manual-update` （默认值：`false`）

  在性能敏感（数据量很大）的场景下，我们最好对于 `options` prop 绕过 Vue 的响应式系统。当将 `manual-update` prop 指定为 `true` 且不传入 `options` prop 时，数据将不会被监听。然后，你需要用 `ref` 获取组件实例以后手动调用 `mergeOptions` 方法来更新图表。

  ### 计算属性

* `width` **[只读]**

  用来获取 ECharts 实例的当前宽度。

* `height` **[只读]**

  用来获取 ECharts 实例的当前高度。

* `computedOptions` **[只读]**

  用来读取 ECharts 更新内部 `options` 后的实际数据。

### 方法

* `mergeOptions`（底层调用了 ECharts 实例的 `setOption` 方法）

  *提供了一个更贴切的名称来描述 `setOption` 方法的实际行为。*

* `appendData`
* `resize`
* `dispatchAction`
* `showLoading`
* `hideLoading`
* `convertToPixel`
* `convertFromPixel`
* `containPixel`
* `getDataURL`
* `getConnectedDataURL`
* `clear`
* `dispose`

### 静态方法

* `connect`
* `disconnect`
* `registerMap`
* `registerTheme`
* `graphic.clipPointsByRect`
* `graphic.clipRectByRect`

### 事件

Vue-ECharts 支持如下事件：

* `legendselectchanged`
* `legendselected`
* `legendunselected`
* `legendscroll`
* `datazoom`
* `datarangeselected`
* `timelinechanged`
* `timelineplaychanged`
* `restore`
* `dataviewchanged`
* `magictypechanged`
* `geoselectchanged`
* `geoselected`
* `geounselected`
* `pieselectchanged`
* `pieselected`
* `pieunselected`
* `mapselectchanged`
* `mapselected`
* `mapunselected`
* `axisareaselected`
* `focusnodeadjacency`
* `unfocusnodeadjacency`
* `brush`
* `brushselected`
* `rendered`
* `finished`
* 鼠标事件
  * `click`
  * `dblclick`
  * `mouseover`
  * `mouseout`
  * `mousemove`
  * `mousedown`
  * `mouseup`
  * `globalout`
  * `contextmenu`

更多详细信息请参考 [ECharts 的 API 文档](https://echarts.apache.org/zh/api.html)。
