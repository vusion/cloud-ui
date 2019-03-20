webpackJsonp([39],{"Go/k":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{date:"2017-12-01 20:12:12"}},methods:{change:function(t){console.log(t)},select:function(t){console.log(t)}}},l={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-date-time-picker",{attrs:{date:t.date},on:{change:function(s){t.change(s.date)},select:function(s){t.select(s)}}})},staticRenderFns:[]},r={components:{"anondemo-4a6f154d-386":a("EfGu")(e,l,!1,null,null,null).exports}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("日期时间选择 DateTimePicker")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-date-time-picker.vue/README.md"}},[a("div",[a("u-linear-layout",[a("u-date-time-picker"),a("u-date-time-picker",{attrs:{date:"2018-08-08"}})],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")])])])])]),a("h3",[t._v("自动对焦")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-date-time-picker.vue/README.md"}},[a("div",[a("u-date-time-picker",{attrs:{date:"2018-08-08",autofocus:""}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("autofocus")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")])])])])]),a("h3",[t._v("只读和禁用")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-date-time-picker.vue/README.md"}},[a("div",[a("u-linear-layout",[a("u-date-time-picker",{attrs:{date:"2018-08-08",readonly:""}}),a("u-date-time-picker",{attrs:{date:"2018-08-08",disabled:""}})],1)],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")])])])])]),a("h3",[t._v("最大值和最小值")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-date-time-picker.vue/README.md"}},[a("div",[a("u-date-time-picker",{attrs:{date:"2017-05-12 8:00:00","min-date":"2017-01-10 07:00:00","max-date":"2017-12-12 07:00:00"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-05-12 8:00:00"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("min-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-01-10 07:00:00"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"2017-12-12 07:00:00"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")])])])])]),a("h3",[t._v("方法")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!0,"file-path":"src/u-date-time-picker.vue/README.md"}},[a("div",[a("anondemo-4a6f154d-386")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":date")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("change")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"change($event.date)"')]),t._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"select($event)"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'2017-12-01 20:12:12'")]),t._v(",\n\t\t};\n\t},\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        change(time) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(time);\n        },\n        select(date) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date);\n        }\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")])])])])]),a("h2",[t._v("DateTimePicker API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("date.sync")]),a("td",[t._v("String, Number, Date")]),a("td"),a("td",[t._v("显示的日期值")])]),a("tr",[a("td",[t._v("minDate")]),a("td",[t._v("String, Number, Date")]),a("td"),a("td",[t._v("最小日期值")])]),a("tr",[a("td",[t._v("maxDate")]),a("td",[t._v("String, Number, Date")]),a("td"),a("td",[t._v("最大日期值")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("String")]),a("td",[a("code",[t._v("请选择时间")])]),a("td",[t._v("默认提示语")])]),a("tr",[a("td",[t._v("autofocus")]),a("td",[t._v("Boolean")]),a("td",[a("code",[t._v("false")])]),a("td",[t._v("是否默认处于focus状态")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",[t._v("false")])]),a("td",[t._v("是否禁用")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("yearDiff")]),a("td",[t._v("String, Number")]),a("td",[a("code",[t._v("3")])]),a("td",[t._v("最小可选年份值为当前年减去此值")])]),a("tr",[a("td",[t._v("yearAdd")]),a("td",[t._v("String, Number")]),a("td",[a("code",[t._v("1")])]),a("td",[t._v("最大可选年份值为当前年加上此值")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@select")]),a("p",[t._v("日期值发生变化触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.date")]),a("td",[t._v("Number")]),a("td",[t._v("选择项的值，默认返回时间戳")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("选择新时间触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.date")]),a("td",[t._v("Number")]),a("td",[t._v("选择项的值，默认返回时间戳")])])])])],1)},staticRenderFns:[]},n=a("EfGu")(r,v,!1,null,null,null);s.default=n.exports}});