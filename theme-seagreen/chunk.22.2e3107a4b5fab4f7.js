webpackJsonp([22],{548:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("链接 Link")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-link",{attrs:{href:"#"}},[t._v("链接")]),t._v(" "),a("u-link",{attrs:{href:"#"}},[t._v("查看详情")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("链接"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("查看详情"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-link",{attrs:{href:"#",disabled:""}},[t._v("Link")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("Link"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),a("h3",[a("code",{pre:!0},[t._v("href")]),t._v(" vs "),a("code",{pre:!0},[t._v("to")])]),a("div",{staticClass:"u-example"},[a("u-link",{attrs:{href:"https://vusion.github.io",target:"_blank"}},[t._v("href")]),t._v(" \n"),a("u-link",{attrs:{to:"/components/u-button"}},[t._v("to")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"https://vusion.github.io"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("target")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"_blank"')]),t._v(">")]),t._v("href"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/components/u-button"')]),t._v(">")]),t._v("to"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("href")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("链接地址")])]),a("tr",[a("td",[t._v("target")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("（原生属性）")])]),a("tr",[a("td",[t._v("to")]),a("td",[t._v("String,  Location")]),a("td"),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),a("tr",[a("td",[t._v("replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("replace")]),t._v("属性相同。如果为"),a("code",{pre:!0},[t._v("true")]),t._v("，当点击时，会调用"),a("code",{pre:!0},[t._v("router.replace()")]),t._v("而不是"),a("code",{pre:!0},[t._v("router.push()")]),t._v("，于是导航后不会留下"),a("code",{pre:!0},[t._v("history")]),t._v("记录。")])]),a("tr",[a("td",[t._v("append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("append")]),t._v("属性相同。如果为"),a("code",{pre:!0},[t._v("true")]),t._v("，则在当前路径后追加"),a("code",{pre:!0},[t._v("to")]),t._v("的路径。")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用。禁用后不会响应"),a("code",{pre:!0},[t._v("click")]),t._v("事件。")])])])]),a("h3",[t._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Slot")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("(default)")]),a("td",[t._v("插入文本或HTML")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("$listeners")]),a("p",[t._v("监听所有"),a("code",{pre:!0},[t._v("<a>")]),t._v("元素的事件。")]),a("h4",[t._v("@before-navigate")]),a("p",[t._v("使用router相关属性切换路由前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.to")]),a("td",[t._v("String,  Location")]),a("td",[a("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("append")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止切换流程")])])])]),a("h4",[t._v("@navigate")]),a("p",[t._v("使用router相关属性切换路由时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.to")]),a("td",[t._v("String,  Location")]),a("td",[a("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("append")]),t._v("属性的值")])])])])])},staticRenderFns:[]},v=a(0)(null,e,!1,null,null,null);s.default=v.exports}});