webpackJsonp([74],{YvxP:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var _={render:function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("u-article",[e("h1",[t._v("面包屑 Crumb")]),e("h2",[t._v("示例")]),e("h3",[t._v("基本形式")]),e("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"node_modules/proto-ui.vusion/src/u-crumb.vue/README.md"}},[e("div",[e("u-crumb",[e("u-crumb-item",{attrs:{to:"/"}},[t._v("首页")]),e("u-crumb-item",{attrs:{to:"/proto-ui"}},[t._v("原型组件")]),e("u-crumb-item",{attrs:{to:"/proto-ui/u-crumb",disabled:""}},[t._v("面包屑")])],1)],1),e("div",{attrs:{slot:"code"},slot:"code"},[e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"/"')]),t._v(">")]),t._v("首页"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"/proto-ui"')]),t._v(">")]),t._v("原型组件"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"/proto-ui/u-crumb"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("面包屑"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb-item")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-crumb")]),t._v(">")])])])])]),e("h2",[t._v("Crumb API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("无")]),e("td"),e("td"),e("td")])])]),e("h3",[t._v("Slots")]),e("h4",[t._v("(default)")]),e("p",[t._v("插入"),e("code",[t._v("<u-crumb-item>")]),t._v("子组件。")]),e("h2",[t._v("CrumbItem API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("href")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("链接地址")])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("（原生属性）")])]),e("tr",[e("td",[t._v("to")]),e("td",[t._v("String, Location")]),e("td"),e("td",[t._v("需要vue-router，与"),e("code",[t._v("<router-link>")]),t._v("的"),e("code",[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),e("tr",[e("td",[t._v("replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])]),e("td",[t._v("需要vue-router，与"),e("code",[t._v("<router-link>")]),t._v("的"),e("code",[t._v("replace")]),t._v("属性相同。如果为"),e("code",[t._v("true")]),t._v("，当点击时，会调用"),e("code",[t._v("router.replace()")]),t._v("而不是"),e("code",[t._v("router.push()")]),t._v("，于是导航后不会留下"),e("code",[t._v("history")]),t._v("记录。")])]),e("tr",[e("td",[t._v("append")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])]),e("td",[t._v("需要vue-router，与"),e("code",[t._v("<router-link>")]),t._v("的"),e("code",[t._v("append")]),t._v("属性相同。如果为"),e("code",[t._v("true")]),t._v("，则在当前路径后追加"),e("code",[t._v("to")]),t._v("的路径。")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("false")])]),e("td",[t._v("是否不可点击。如果为"),e("code",[t._v("true")]),t._v("，则不会响应"),e("code",[t._v("click")]),t._v("事件。")])])])]),e("h3",[t._v("Slots")]),e("h4",[t._v("(default)")]),e("p",[t._v("插入文本或 HTML。")]),e("h3",[t._v("Events")]),e("h4",[t._v("$listeners")]),e("p",[t._v("监听所有"),e("code",[t._v("<a>")]),t._v("元素的事件。")]),e("h4",[t._v("@click")]),e("p",[t._v("点击链接时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event")]),e("td",[t._v("MouseEvent")]),e("td",[t._v("鼠标事件对象")])])])]),e("h4",[t._v("@before-navigate")]),e("p",[t._v("使用router相关属性切换路由前触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.to")]),e("td",[t._v("String, Location")]),e("td",[e("code",[t._v("to")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("replace")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.append")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("append")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止切换流程")])])])]),e("h4",[t._v("@navigate")]),e("p",[t._v("使用router相关属性切换路由时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.to")]),e("td",[t._v("String, Location")]),e("td",[e("code",[t._v("to")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("replace")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.append")]),e("td",[t._v("Boolean")]),e("td",[e("code",[t._v("append")]),t._v("属性的值")])])])])],1)},staticRenderFns:[]},s=e("EfGu")(null,_,!1,null,null,null);v.default=s.exports}});