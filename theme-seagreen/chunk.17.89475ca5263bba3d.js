webpackJsonp([17],{609:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("u-article",[s("h1",[t._v("弹窗 PieChart")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-pie-chart",{attrs:{border:"",legend:"",title:"每星期访问量",data:[{percent:25,name:"selector1"},{percent:25,name:"selector2"},{percent:25,name:"selector3"},{percent:25,name:"selector4"}]}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("legend")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"每星期访问量"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { 'percent': 25, 'name': 'selector1' }, \n    { 'percent': 25, 'name': 'selector2' }, \n    { 'percent': 25, 'name': 'selector3' }, \n    { 'percent': 25, 'name': 'selector4' }\n]\"")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(">")]),t._v("\n")])]),s("h4",[t._v("百分比都为 0")]),s("div",{staticClass:"u-example"},[s("u-pie-chart",{attrs:{border:"",legend:"",title:"每星期访问量",data:[{percent:0,name:"selector1"},{percent:0,name:"selector2"},{percent:0,name:"selector3"},{percent:0,name:"selector4"}]}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("border")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("legend")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"每星期访问量"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { 'percent': 0, 'name': 'selector1' }, \n    { 'percent': 0, 'name': 'selector2' }, \n    { 'percent': 0, 'name': 'selector3' }, \n    { 'percent': 0, 'name': 'selector4' }\n]\"")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-pie-chart")]),t._v(">")]),t._v("\n")])]),s("h2",[t._v("API")]),s("h3",[t._v("Attrs/Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("title")]),s("td",[t._v("String")]),s("td"),s("td",[t._v("图表的标题")])]),s("tr",[s("td",[t._v("caption")]),s("td",[t._v("String")]),s("td"),s("td",[t._v("图表的描述")])]),s("tr",[s("td",[t._v("data")]),s("td",[t._v("Array")]),s("td"),s("td",[t._v("图表需要显示的数据,数组中的对象key值：percent表示占比，请传入整数形式，例30表示30%，name表示占比的名称，会在底部的legend中显示")])]),s("tr",[s("td",[t._v("border")]),s("td",[t._v("Boolean")]),s("td",[t._v("false")]),s("td",[t._v("是否有表框")])]),s("tr",[s("td",[t._v("width")]),s("td",[t._v("String")]),s("td",[s("code",{pre:!0},[t._v("100%")])]),s("td",[t._v("图表的宽度")])]),s("tr",[s("td",[t._v("height")]),s("td",[t._v("String")]),s("td",[s("code",{pre:!0},[t._v("480px")])]),s("td",[t._v("图表的高度")])]),s("tr",[s("td",[t._v("titleAlign")]),s("td",[t._v("String")]),s("td",[s("code",{pre:!0},[t._v("center")])]),s("td",[t._v("图表标题的对齐方式，默认是居中，值有:left,center,right")])])])]),s("h3",[t._v("Slot")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Slot")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("tooltipTemplate + index（index为遍历data的索引）")]),s("td",[t._v("自定义tooltip内容")])])])])])},staticRenderFns:[]},r=s(0)(null,a,!1,null,null,null);e.default=r.exports}});