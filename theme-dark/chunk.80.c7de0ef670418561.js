webpackJsonp([80],{RsdP:function(v,_,e){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var o={render:function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("u-article",[e("h1",[v._v("基础 Base")]),e("h3",[v._v("设计原则")]),e("p",[v._v("Vusion 的组件库与传统的纯 CSS 组件库所不同，它更加重视样式、模板与逻辑三者之间的关系，因此推荐尽可能地将样式封装入基础组件，而不是用一个简单的"),e("code",[v._v("class")]),v._v("来代替。")]),e("p",[v._v("每个独立的组件是没有默认的"),e("code",[v._v("margin")]),v._v("的，因为它们在实际场景中的情形是不确定的。组件之间的布局推荐使用"),e("code",[v._v("<u-linear-layout>")]),v._v("与"),e("code",[v._v("<u-grid-layout>")]),v._v("来控制。")]),e("h3",[v._v("统一样式")]),e("p",[v._v("原型组件库以 "),e("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[v._v("normalize.css")]),v._v(" 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),e("p",[v._v("类似 "),e("u-link",{attrs:{href:"https://getbootstrap.com"}},[v._v("Bootstrap")]),v._v("，将"),e("code",[v._v("box-sizing: border-box")]),v._v("应用到所有元素，于是元素的宽高便不会受到"),e("code",[v._v("padding")]),v._v("的影响。")],1),e("p",[v._v("使用 Vue 的"),e("code",[v._v("preserveWhitespace: false")]),v._v("，将所有元素之间空格清除，这样在"),e("code",[v._v("inline-block")]),v._v("的元素之间不会有空隙。")]),e("h3",[v._v("黑名单")]),e("p",[v._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),e("code",[v._v("<a>")]),v._v("、"),e("code",[v._v("<dl>")]),v._v("、"),e("code",[v._v("<dt>")]),v._v("、"),e("code",[v._v("<dd>")]),v._v("、"),e("code",[v._v("<ul>")]),v._v("、"),e("code",[v._v("<ol>")]),v._v("、"),e("code",[v._v("<li>")]),v._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")]),e("h3",[v._v("样式扩展")]),e("p",[v._v("Proto UI 中组件的颜色只扩展了"),e("code",[v._v("default")]),v._v(", "),e("code",[v._v("primary")]),v._v("和"),e("code",[v._v("error")]),v._v("，推荐按照这些词汇继续进行扩展："),e("code",[v._v("default")]),v._v(", "),e("code",[v._v("primary")]),v._v(", "),e("code",[v._v("info")]),v._v(", "),e("code",[v._v("success")]),v._v(", "),e("code",[v._v("warning")]),v._v(", "),e("code",[v._v("error")]),v._v(", "),e("code",[v._v("disabled")]),v._v(", ...")]),e("p",[v._v("Proto UI 中组件的尺寸只扩展了"),e("code",[v._v("small")]),v._v(", "),e("code",[v._v("base")]),v._v("和"),e("code",[v._v("large")]),v._v("。推荐按照这些词汇继续进行扩展："),e("code",[v._v("mini")]),v._v(", "),e("code",[v._v("small")]),v._v(", "),e("code",[v._v("base")]),v._v(", "),e("code",[v._v("large")]),v._v(", "),e("code",[v._v("huge")]),v._v(", ...")])])},staticRenderFns:[]},c=e("EfGu")(null,o,!1,null,null,null);_.default=c.exports}});