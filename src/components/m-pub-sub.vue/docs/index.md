在 Vue 原生的功能中，不管是`$emit`和`$on`，还是`provide`和`inject`，在组件间传递变量都有些局限，特别是在两个不相关的组件之间。

本组件包含了两个 Mixins：MPublisher 和 MSubscriber，用于在任意两个组件之间通过发布订阅模式传递数据。

一种用法是，直接使用 Mixin 之后的四个方法`$publish`、`$unpublish`、`$subscribe`和`$unsubscribe`。

另一种用法是，Mixin 支持选项`publish`为一个对象，键为需要发布的主题，值为需要监听的表达式或函数。在 Mixin MSubscriber 时，选项`subscribe`为一个对象，键为需要订阅的主题，值为订阅时执行的方法。

> 注意：这对 Mixins 和普通的发布订阅模式有一点区别是，订阅时会执行上一次发布的结果，方便一些异步订阅的场景。
