如果要给某些节点添加展开/收起动画效果，但不知道节点的高度，这时动画光靠 CSS 的`transition`属性是实现不了的，需要用 JS 进行计算。

本组件对这种动画进行了封装，方便快速实现这种效果。需要完成以下几步工作：

- 给需要添加动画的节点外面包裹`<f-collapse-transition>`组件；
- 给需要添加动画的节点在 CSS 中添加针对`height`、`padding-top`和`padding-bottom`几个属性的`transition`动画；
- 使用`v-show`或`v-if`控制节点的显示/隐藏。
