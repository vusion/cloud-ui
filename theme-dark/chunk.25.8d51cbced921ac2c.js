webpackJsonp([25],{609:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0,name:"个"},series:[{key:"number"},{key:"num",hidden:!0}],data:[{week:"星期一",number:150,num:1200},{week:"星期二",number:300,num:1200},{week:"星期三",number:28,num:void 0},{week:"星期四",number:200,num:2e3},{week:"星期五",number:74,num:740},{week:"星期六",number:532,num:2e3},{week:"星期日",number:420,num:5e3}],smooth:!0}}},r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-line-chart",{attrs:{border:"",legend:"","x-axis":s.xaxis,"y-axis":s.yaxis,series:s.series,data:s.data,smooth:s.smooth}},[a("div",{attrs:{slot:"titleTemplate"},slot:"titleTemplate"},[s._v(s._s(s.title))])])},staticRenderFns:[]},l={components:{Ca884b4:a(0)(e,r,!1,null,null,null).exports}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("线状图 LineChart")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{ min: 0 }"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ key: 'number' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("曲线图")]),a("div",{staticClass:"u-example"},[a("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},smooth:!0,series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{ min: 0 }"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":smooth")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ key: 'number' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("填充下方区域")]),a("div",{staticClass:"u-example"},[a("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},fill:!0,series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{ min: 0 }"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ key: 'number' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("隐藏图例")]),a("div",{staticClass:"u-example"},[a("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量",legend:!1,"x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":legend")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{ min: 0 }"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ key: 'number' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("单位")]),a("div",{staticClass:"u-example"},[a("u-line-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0,name:"个"},series:[{key:"number"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ min: 0, name: '个' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ key: 'number' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("命令式")]),a("div",{staticClass:"u-example"},[a("Ca884b4")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"xaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"yaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"series"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":smooth")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"smooth"')]),s._v(">")]),s._v("\n\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"titleTemplate"')]),s._v(">")]),s._v("{{title}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-line-chart")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'每星期访问量'")]),s._v(",\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("xaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'week'")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("yaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'个'")]),s._v("},\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("series")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'number'")]),s._v("},{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'num'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hidden")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",} ],\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期一'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期二'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期三'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("28")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期四'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期五'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("740")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期六'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(":"),a("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期日'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" ,"),a("span",{attrs:{class:"hljs-attr"}},[s._v("num")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("5000")]),s._v("},\n\t\t\t],\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("smooth")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n\t\t}\n\t},\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("图表的标题")])]),a("tr",[a("td",[s._v("caption")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("图表的描述")])]),a("tr",[a("td",[s._v("data")]),a("td",[s._v("Array")]),a("td"),a("td",[s._v("图表需要显示的数据")])]),a("tr",[a("td",[s._v("xAxis")]),a("td",[s._v("Object")]),a("td"),a("td",[s._v("绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺")])]),a("tr",[a("td",[s._v("yAxis")]),a("td",[s._v("Object")]),a("td"),a("td",[s._v("绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8")])]),a("tr",[a("td",[s._v("series")]),a("td",[s._v("Array")]),a("td"),a("td",[s._v("传入绘制每条线的数据，数组中对象的属性key对象data数组中对象某个属性，hidden属性表示默认隐藏此选段，absent表示不显示此选段，默认作为tooltip显示的数据内容")])]),a("tr",[a("td",[s._v("border")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("是否有表框")])]),a("tr",[a("td",[s._v("legend")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("X轴下方是否显示每条线段对应的标签")])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("100%")])]),a("td",[s._v("图表的宽度")])]),a("tr",[a("td",[s._v("height")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("480px")])]),a("td",[s._v("图表的高度")])]),a("tr",[a("td",[s._v("smooth")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("线段是否采用平滑方式绘制")])]),a("tr",[a("td",[s._v("fill")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("线段和X轴之间否填充")])]),a("tr",[a("td",[s._v("titleAlign")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("center")])]),a("td",[s._v("图表标题的对齐方式，默认是居中，值有:left,center,right")])]),a("tr",[a("td",[s._v("loading")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("true表示正在加载中，false表示加载完成")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("tooltipTemplate + index（index为遍历data的索引）")]),a("td",[s._v("自定义tooltip内容")])])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("operate")]),a("td",[s._v("自定义内容")])])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("titleTemplate")]),a("td",[s._v("自定义标题内容")])])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("captionTemplate")]),a("td",[s._v("自定义caption内容")])])])])])},staticRenderFns:[]},v=a(0)(l,n,!1,null,null,null);t.default=v.exports}});