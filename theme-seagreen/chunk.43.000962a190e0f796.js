webpackJsonp([43],{592:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("u-article",[s("h1",[a._v("日历 Calendar")]),s("h2",[a._v("示例")]),s("h3",[a._v("基本形式")]),s("h4",[a._v("声明式")]),s("h3",[a._v("基本")]),s("div",{staticClass:"u-example"},[s("u-calendar",{attrs:{date:"2018-08-08"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("只读 readonly")]),s("div",{staticClass:"u-example"},[s("u-calendar",{attrs:{date:"2018-08-08",readonly:"readonly"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v("  "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"readonly"')]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("最大值maxDate 最小值minDate")]),s("div",{staticClass:"u-example"},[s("u-calendar",{attrs:{date:"2018-08-08","min-date":"2018-08-02","max-date":"2018-08-18"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("min-date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-02"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("max-date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-18"')]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("禁用disabled")]),s("div",{staticClass:"u-example"},[s("u-calendar",{attrs:{date:"2018-08-08","min-date":"2017-08-08","max-date":"2019-08-08",disabled:"disabled"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("min-date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2017-08-08"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("max-date")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2019-08-08"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("disabled")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"disabled"')]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])]),s("h2",[a._v("API")]),s("h3",[a._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Prop/Attr")]),s("th",[a._v("Type")]),s("th",[a._v("Default")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("date")]),s("td",[a._v("Date/String")]),s("td",[a._v("TODAY")]),s("td",[a._v("当前选择的日期")])]),s("tr",[s("td",[a._v("minDate")]),s("td",[a._v("Date/String")]),s("td"),s("td",[a._v("最小日期，如果为空则不限制")])]),s("tr",[s("td",[a._v("maxDate")]),s("td",[a._v("Date/String")]),s("td",[s("code",{pre:!0},[a._v("'text'")])]),s("td",[a._v("最大日期，如果为空则不限制")])]),s("tr",[s("td",[a._v("readonly")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("是否只读")])]),s("tr",[s("td",[a._v("disabled")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("是否禁用")])])])]),s("h3",[a._v("Slots")]),s("h4",[a._v("(default)")]),s("p",[a._v("插入文本或 HTML 至日期组件底部")]),s("h3",[a._v("Events")]),s("h4",[a._v("@change")]),s("p",[a._v("日期改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("date")]),s("td",[a._v("Object")]),s("td",[a._v("改变后的日期")])])])]),s("h4",[a._v("@select")]),s("p",[a._v("选择某一个日期时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("date")]),s("td",[a._v("Object")]),s("td",[a._v("当前选择的日期")])])])])])},staticRenderFns:[]},r=s(0)(null,l,!1,null,null,null);t.default=r.exports}});