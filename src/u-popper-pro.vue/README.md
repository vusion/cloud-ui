# 弹出框 Popper
## 示例
### 基本形式

u-popoer的设计是作为所有弹出组件的基础组件，不自带模板，可以使用标签作为组件使用也可通过mixins混合进入其他组件，触发元素(reference)和弹出元素(popover)均在获取。
#### 使用标签
组件元素有三种获取方式: slot,ref,scopedSlots.
1.slot形式: popover和reference均通过组建slot获取，由于slot限制，对于一个reference只有一个popover组件
``` html
<u-popper-pro trigger="click" placement="bottom">
	<u-button slot="popover">popover content</u-button>
	<u-button slot="reference">click</u-button>
</u-popper-pro>
```
2.ref&key形式: 触发元素以ref定义，并将ref值通过refkey传参进入组件，该方式可对单个触发元素定义多个popover
同一触发元素不同的弹出位置
``` html
<u-popper-pro trigger="hover" placement="top" referkey="reference">
	<u-button slot="popover">top</u-button>
</u-popper-pro>
<u-popper-pro trigger="hover" placement="bottom" referkey="reference">
	<u-button slot="popover">bottom</u-button>
</u-popper-pro>
<u-popper-pro trigger="hover" placement="left" referkey="reference">
	<u-button slot="popover">left</u-button>
</u-popper-pro>
<u-popper-pro trigger="hover" placement="right" referkey="reference">
	<u-button slot="popover">right</u-button>
</u-popper-pro>
<u-button ref="reference">hover</u-button>
```
同一触发元素不同的触发事件
``` html
<u-popper-pro trigger="hover" placement="left" referkey="reference">
	<u-button slot="popover">left hover</u-button>
</u-popper-pro>
<u-popper-pro trigger="click" placement="right" referkey="reference">
	<u-button slot="popover">right click</u-button>
</u-popper-pro>
<u-button ref="reference">hover&click</u-button>
```
3.作用域插槽形式: reference均通过slot获取，popover通过scopedSlots获取，props.show控制popover的显示
``` html
<u-popper-pro trigger="click" placement="bottom">
	<template scope="props" slot="popover" >
		<u-button v-show="props.show">popover content</u-button>
	</template>
	<u-button slot="reference">click</u-button>
</u-popper-pro>
```
#### mixins形式
使用mixins封装一个tooltips组件,具体参照u-tooltips组件

## Popper API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| trigger | String| `'manual'` | 弹出层的触发方式,click,hover,manual |
| placement | String | `'bottom'` | 弹出层的弹出方向,top,bottom,left,right,top-start,top-end... |
| referkey | String | `'undefined'` | 触发元素的ref值 |
| visibleControl | Boolean | `true` | 是否显示弹出层，将显示控制权交由外部(父组件) |
| offset | String | `undefined` | 弹出层偏移，"10px 10px","10% 10%" |
| escapeWithReference | Boolean | `true` | 当触发层离开边际时，弹出层是否跟随离开或保留在边际元素内 |
| movingToBody | Boolean | `true` | 是否将弹出层元素移动到body元素 |
| boundariesElement | element/String | `scrollParent` | 弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素 |
| arrowElement | String | `'[u-arrow]'` | 箭头元素的query值，默认为u-arrow属性，定义该属性则组件会控制箭头元素的偏移量 |
| hoverDelay | Number | `'200'` | 鼠标移动(hover)事件的延迟 |
| modifiers | Object | `'undefined'` | Popper.js的modify参数，具体参照popper.js的文档 |
