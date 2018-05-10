webpackJsonp([28],{602:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-lightbox",{attrs:{visible:s.visible,closeButton:!0},on:{"update:visible":function(t){s.visible=t}}},[a("u-lightbox-item",{attrs:{title:"图片预览"}},[a("img",{attrs:{src:"/cloud-ui/images/1.jpg"}})])],1),a("u-linear-layout",[a("u-button",{on:{click:function(t){s.visible=!0}}},[s._v("Open Lightbox")])],1)],1)},staticRenderFns:[]},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-lightbox",{attrs:{visible:s.visible,value:s.showItem,animation:"fade"},on:{"update:visible":function(t){s.visible=t}}},s._l(s.images,function(s,t){return a("u-lightbox-item",{key:t,attrs:{value:t,title:s.title}},[a("img",{attrs:{src:s.src}})])})),a("u-linear-layout",s._l(s.images,function(t,l){return a("img",{staticStyle:{width:"300px"},attrs:{src:t.src},on:{click:function(t){s.showLightbox(l)}}})}))],1)},staticRenderFns:[]},n={components:{C3e1f9d:a(0)({data:function(){return{visible:!1}}},l,!1,null,null,null).exports,Ce8aa21:a(0)({data:function(){return{visible:!1,images:[{src:"/cloud-ui/images/1.jpg",title:"图片1"},{src:"/cloud-ui/images/2.jpg",title:"图片2"}],showItem:0}},methods:{showLightbox:function(s){this.visible=!0,this.showItem=s}}},v,!1,null,null,null).exports}},r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("灯箱 Lightbox")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h4",[s._v("灯箱包含单个元素")]),a("div",{staticClass:"u-example"},[a("C3e1f9d")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":closeButton")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"图片预览"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/cloud-ui/images/1.jpg"')]),s._v(" />")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible = true"')]),s._v(">")]),s._v("Open Lightbox"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("灯箱包含多个元素")]),a("div",{staticClass:"u-example"},[a("Ce8aa21")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showItem"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"fade"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"(image, index) in images"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"image.title"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":src")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"image.src"')]),s._v(" />")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-lightbox")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width: 300px;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"(image, index) in images"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":src")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"image.src"')]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showLightbox(index)"')]),s._v("/>")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("images")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'/cloud-ui/images/1.jpg'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'图片1'")]),s._v("}, {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'/cloud-ui/images/2.jpg'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'图片2'")]),s._v("}],\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("showItem")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showLightbox(index) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".visible = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showItem = index;\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("visible.sync")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否显示")])]),a("tr",[a("td",[s._v("maskClose")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("点击遮罩层关闭灯箱")])]),a("tr",[a("td",[s._v("closeButton")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否显示关闭按钮")])]),a("tr",[a("td",[s._v("loop")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否可循环播放灯箱内容")])]),a("tr",[a("td",[s._v("animation")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("动画（可选fade/zoom-out）")])]),a("tr",[a("td",[s._v("value.sync, v-model")]),a("td",[a("code",{pre:!0},[s._v("Any")])]),a("td"),a("td",[s._v("当前选择的值")])]),a("tr",[a("td",[s._v("zoomable")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("灯箱是否开启缩放功能（只有当灯箱内容为图片时有效）")])]),a("tr",[a("td",[s._v("zoomButton")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("是否显示缩放按钮（只有当zoomable为true时有效）")])]),a("tr",[a("td",[s._v("zoomWheel")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("true")])]),a("td",[s._v("是否允许滚动鼠标缩放（只有当zoomable为true时有效）")])]),a("tr",[a("td",[s._v("zoomMax")]),a("td",[s._v("Integer/String")]),a("td",[a("code",{pre:!0},[s._v("5")])]),a("td",[s._v("设置最大放大宽度：类型为Integer时，表示灯箱最多放大次数。类型为String时，可以设置单位为px或者%。")])]),a("tr",[a("td",[s._v("zoomMin")]),a("td",[s._v("Integer/String")]),a("td",[a("code",{pre:!0},[s._v("-5")])]),a("td",[s._v("设置最小宽度：同上")])]),a("tr",[a("td",[s._v("zoomRadio")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0.1")])]),a("td",[s._v("每次放大缩小的比例")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("(default)")]),a("td",[s._v("灯箱内容")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@open")]),a("p",[s._v("打开时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@before-close")]),a("p",[s._v("关闭前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止关闭流程")])])])]),a("h4",[s._v("@close")]),a("p",[s._v("关闭时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@rotate")]),a("p",[s._v("旋转时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("direction")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("left")]),s._v("或"),a("code",{pre:!0},[s._v("right")])])])])]),a("h4",[s._v("@zoom")]),a("p",[s._v("缩放时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("direction")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("in")]),s._v("放大或"),a("code",{pre:!0},[s._v("out")]),s._v("缩小")])])])])])},staticRenderFns:[]},_=a(0)(n,r,!1,null,null,null);t.default=_.exports}});