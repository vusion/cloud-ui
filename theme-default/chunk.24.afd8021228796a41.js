webpackJsonp([24],{GQp7:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("lVK7"),v={data:function(){return{modalVisible:!1}},methods:{open:function(){l.Modal.alert("test")}}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-modal",{attrs:{visible:s.modalVisible,"mask-close":"",title:"提示"},on:{"update:visible":function(t){s.modalVisible=t}}},[a("span",[s._v("内容")])]),a("u-linear-layout",[a("u-button",{on:{click:function(t){s.modalVisible=!0}}},[s._v("Modal")]),a("u-button",{on:{click:function(t){s.open()}}},[s._v("Open")])],1)],1)},staticRenderFns:[]},_={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("u-button",{attrs:{color:"primary"},on:{click:this.openAlert}},[this._v("alert")])],1)},staticRenderFns:[]},r={methods:{openConfirm:function(){this.$confirm("hello world","title").then(function(){console.log("确定")}).catch(function(){console.log("取消")})}}},e={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("u-button",{attrs:{color:"primary"},on:{click:this.openConfirm}},[this._v("confirm")])],1)},staticRenderFns:[]},c={components:{"anondemo-7a84648d-534":a("EfGu")(v,n,!1,null,null,null).exports,"anondemo-664f5a96-242":a("EfGu")({methods:{openAlert:function(){this.$alert("hello world","title")}}},_,!1,null,null,null).exports,"anondemo-f744a93e-435":a("EfGu")(r,e,!1,null,null,null).exports}},o={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("弹窗 Modal")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h4",[s._v("声明式")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!0,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("anondemo-7a84648d-534")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visible.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"modalVisible"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("mask-close")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"提示"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"modalVisible = true"')]),s._v(">")]),s._v("Modal"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"open()"')]),s._v(">")]),s._v("Open"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Modal } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'library'")]),s._v(";\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("modalVisible")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        open() {\n            Modal.alert("),a("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(");\n        }\n    }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])])])])]),a("h3",[s._v("Static")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("u-modal",{attrs:{visible:"",static:""}},[s._v("静态显示，用于文档或局部展示")])],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(">")]),s._v("静态显示，用于文档或局部展示"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")])])])])]),a("h3",[s._v("标题与内容")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("u-modal",{attrs:{title:"标题",visible:"",static:""}},[s._v("内容")])],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"标题"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(">")]),s._v("内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")])])])])]),a("h3",[s._v("图标、小标题与描述")]),a("u-code-example",{attrs:{"show-code":!0,"show-detail":!1,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("u-modal",{attrs:{title:"删除",heading:"确定删除该服务吗？",icon:"warning",visible:"",static:""}},[s._v("删除后不可恢复。")]),a("u-modal",{attrs:{title:"创建",heading:"创建成功",icon:"success",visible:"",static:""}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"删除"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"确定删除该服务吗？"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(">")]),s._v("删除后不可恢复。"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"创建"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"创建成功"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")])])])])]),a("h3",[s._v("自定义")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!1,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("u-modal",{attrs:{visible:"",static:""}},[a("div",{attrs:{slot:"title"},slot:"title"},[s._v("自定义")]),a("div",{attrs:{slot:"foot"},slot:"foot"},[a("u-button",{attrs:{color:"primary"}},[s._v("关闭")])],1)])],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(">")]),s._v("自定义"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"foot"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("关闭"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")])])])])]),a("h3",[s._v("大小扩展")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!1,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("u-modal",{attrs:{visible:"",static:"",size:"small"}},[s._v("\n    size 为small，大小是300px\n")]),a("u-modal",{attrs:{visible:"",static:"",size:"normal"}},[s._v("\n    size 为默认的normal,大小是400px\n")]),a("u-modal",{attrs:{visible:"",static:"",size:"large"}},[s._v("\n    size 为large,大小是600px\n")]),a("u-modal",{attrs:{visible:"",static:"",size:"huge"}},[s._v("\n    size 为huge,大小是800px\n")]),a("u-modal",{attrs:{visible:"",static:"",size:"auto"}},[s._v("\n    size 为auto\n")])],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),s._v("\n    size 为small，大小是300px\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"normal"')]),s._v(">")]),s._v("\n    size 为默认的normal,大小是400px\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("\n    size 为large,大小是600px\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("\n    size 为huge,大小是800px\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("visible")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("static")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"auto"')]),s._v(">")]),s._v("\n    size 为auto\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-modal")]),s._v(">")])])])])]),a("h3",[s._v("简便使用方式")]),a("p",[s._v("调用$alert方法即可打开消息提示，它实现的是只有确定按钮的modal")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!0,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("anondemo-664f5a96-242")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openAlert"')]),s._v(">")]),s._v("alert"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        openAlert() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$alert("),a("span",{attrs:{class:"hljs-string"}},[s._v("'hello world'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(");\n        }\n    }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])])])])]),a("p",[s._v("调用$confirm方法即可打开确认提示，它实现的是有确定和取消按钮modal")]),a("u-code-example",{attrs:{"show-code":!1,"show-detail":!0,"file-path":"src/u-modal.vue/README.md"}},[a("div",[a("anondemo-f744a93e-435")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openConfirm"')]),s._v(">")]),s._v("confirm"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        openConfirm() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$confirm("),a("span",{attrs:{class:"hljs-string"}},[s._v("'hello world'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(").then("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 点击确定按钮的逻辑")]),s._v("\n                "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(");\n            }).catch("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 点击取消按钮的逻辑")]),s._v("\n                "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'取消'")]),s._v(");\n            });\n        }\n    }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])])])])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'提示'")])]),a("td",[s._v("弹窗的标题")])]),a("tr",[a("td",[s._v("content")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'提示内容'")])]),a("td",[s._v("弹窗的内容")])]),a("tr",[a("td",[s._v("heading")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'提示内容'")])]),a("td",[s._v("弹窗的内容")])]),a("tr",[a("td",[s._v("visible.sync")]),a("td",[s._v("Boolean")]),a("td",[a("code",[s._v("false")])]),a("td",[s._v("是否显示")])]),a("tr",[a("td",[s._v("okButton")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'确定'")])]),a("td",[s._v("确定按钮文本，如果为空则不显示")])]),a("tr",[a("td",[s._v("cancelButton")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'取消'")])]),a("td",[s._v("取消按钮文本，如果为空则不显示")])]),a("tr",[a("td",[s._v("size")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("'normal'")])]),a("td",[s._v("弹框的尺寸")])]),a("tr",[a("td",[s._v("icon")]),a("td",[s._v("String")]),a("td",[a("code",[s._v("''")])]),a("td",[s._v("提示图标, 可选值："),a("code",[s._v("success")]),s._v(", "),a("code",[s._v("warning")]),s._v(", "),a("code",[s._v("error")])])]),a("tr",[a("td",[s._v("maskClose")]),a("td",[s._v("Boolean")]),a("td",[a("code",[s._v("false")])]),a("td",[s._v("点击遮罩层关闭弹窗，默认不可关闭，设置可关闭则需设置值为true")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("弹窗标题自定义")])]),a("tr",[a("td",[s._v("head")]),a("td",[s._v("弹窗头部自定义")])]),a("tr",[a("td",[s._v("body")]),a("td",[s._v("弹窗中部自定义")])]),a("tr",[a("td",[s._v("foot")]),a("td",[s._v("弹窗尾部自定义")])]),a("tr",[a("td",[s._v("heading")]),a("td",[s._v("弹框小标题自定义")])]),a("tr",[a("td",[s._v("(default)")]),a("td",[s._v("弹窗内容自定义")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@open")]),a("p",[s._v("打开弹窗时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@ok")]),a("p",[s._v("确定时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@cancel")]),a("p",[s._v("取消时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h4",[s._v("@before-close")]),a("p",[s._v("关闭弹窗前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.preventDefault")]),a("td",[s._v("Function")]),a("td",[s._v("阻止关闭流程")])])])]),a("h4",[s._v("@close")]),a("p",[s._v("关闭弹窗时触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody")]),a("h3",[s._v("Methods")]),a("h4",[s._v("alert(content, title)")]),a("p",[s._v("打开只有确定按钮的消息提示")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("content")]),a("td",[s._v("String")]),a("td",[s._v("提示内容")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[s._v("提示标题")])])])]),a("h4",[s._v("confirm(content, title)")]),a("p",[s._v("打开有确定和取消按钮的消息提示")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("content")]),a("td",[s._v("String")]),a("td",[s._v("提示内容")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td",[s._v("提示标题")])])])])],1)},staticRenderFns:[]},h=a("EfGu")(c,o,!1,null,null,null);t.default=h.exports}});