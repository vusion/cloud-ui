# 基础 Base

### 设计原则

Vusion 的组件库与传统的纯 CSS 组件库所不同，它更加重视样式、模板与逻辑三者之间的关系，因此推荐尽可能地将样式封装入基础组件，而不是用一个简单的`class`来代替。

<!-- @TODO: 比如对于常用列表： -->

每个独立的组件是没有默认的`margin`的，因为它们在实际场景中的情形是不确定的。组件之间的布局推荐使用`<u-linear-layout>`与`<u-grid-layout>`来控制。

### 统一样式

原型组件库以 [normalize.css](http://necolas.github.io/normalize.css) 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。

类似 [Bootstrap](https://getbootstrap.com)，将`box-sizing: border-box`应用到所有元素，于是元素的宽高便不会受到`padding`的影响。

使用 Vue 的`preserveWhitespace: false`，将所有元素之间空格清除，这样在`inline-block`的元素之间不会有空隙。

### 黑名单

为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单：`<a>`、`<dl>`、`<dt>`、`<dd>`、`<ul>`、`<ol>`、`<li>`。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。

### 样式扩展

Proto UI 中组件的颜色只扩展了`default`, `primary`和`error`，推荐按照这些词汇继续进行扩展：`default`, `primary`, `info`, `success`, `warning`, `error`, `disabled`, ...

Proto UI 中组件的尺寸只扩展了`small`, `base`和`large`。推荐按照这些词汇继续进行扩展：`mini`, `small`, `base`, `large`, `huge`, ...
