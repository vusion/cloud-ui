webpackJsonp([36],{579:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{value:"#EE867D",options:[{value:"#EE867D"},{value:"#805DCF"},{value:"#40CCCA"},{value:"#FFCA12"},{value:"#30A8DC"},{value:"#E1AEF6"},{value:"#D2D2D2"}]}},methods:{select:function(s){console.log(s),this.value=s}}},v={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-color-select",{attrs:{options:s.options,value:s.value},on:{select:function(t){s.select(t.value)}}})},staticRenderFns:[]},n={components:{C3d5b71:a(0)(l,v,!1,null,null,null).exports}},e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("颜色选择扩展 SelectColor")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h3",[s._v("方法")]),a("div",{staticClass:"u-example"},[a("C3d5b71")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"select($event.value)"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-color-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'#EE867D'")]),s._v(",\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#805DCF'")]),s._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#40CCCA'")]),s._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#FFCA12'")]),s._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#30A8DC'")]),s._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#E1AEF6'")]),s._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'#D2D2D2'")]),s._v("\n                },\n            ],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        select(value) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value);\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = value;\n        }\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("width")]),a("td",[s._v("String/Number")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("输入框长度")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@select")]),a("p",[s._v("选中列表项时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.selected")]),a("td",[s._v("Object")]),a("td",[s._v("选中后的列表对象")])]),a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("String")]),a("td",[s._v("选中后的列表对象的值")])])])]),a("h4",[s._v("@change")]),a("p",[s._v("开关状态改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.selected")]),a("td",[s._v("Object")]),a("td",[s._v("改变后的列表对象")])]),a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("String")]),a("td",[s._v("改变后的列表对象的值")])])])])])},staticRenderFns:[]},r=a(0)(n,e,!1,null,null,null);t.default=r.exports}});