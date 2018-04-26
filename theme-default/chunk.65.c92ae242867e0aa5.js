webpackJsonp([65],{566:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement;return(s._self._c||a)("u-checkbox",{model:{value:s.value,callback:function(a){s.value=a},expression:"value"}},[s._v(s._s(s.value))])},staticRenderFns:[]},v={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("u-checkboxes",{model:{value:s.checkedList,callback:function(a){s.checkedList=a},expression:"checkedList"}},[t("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},e={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("u-checkboxes",{attrs:{min:1,max:2},model:{value:s.checkedList,callback:function(a){s.checkedList=a},expression:"checkedList"}},[t("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("u-checkbox",{on:{check:function(a){s.checkAll(a.value)}},model:{value:s.allChecked,callback:function(a){s.allChecked=a},expression:"allChecked"}},[s._v("全选")]),t("u-checkboxes",{on:{check:function(a){s.onCheck(a.value)}},model:{value:s.checkedList,callback:function(a){s.checkedList=a},expression:"checkedList"}},[t("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),t("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),t("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),t("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},_={components:{C04fffe:t(0)({data:function(){return{value:!0}}},l,!1,null,null,null).exports,Ccc74c4:t(0)({data:function(){return{checkedList:["毛巾","沙发"]}}},v,!1,null,null,null).exports,C876d6a:t(0)({data:function(){return{checkedList:["毛巾","沙发"]}},methods:{add:function(){this.checkedList.push("水杯")}}},e,!1,null,null,null).exports,C7422fd:t(0)({data:function(){return{allChecked:!1,checkedList:[]}},methods:{checkAll:function(s){this.checkedList=s?["水杯","坚果","毛巾","沙发"]:[]},onCheck:function(s){4===this.checkedList.length?this.allChecked=!0:0===this.checkedList.length?this.allChecked=!1:this.allChecked=null}}},n,!1,null,null,null).exports}},c={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("多选组 Checkboxes")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-checkbox",[s._v("多选框")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("多选框"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("Value绑定")]),t("div",{staticClass:"u-example"},[t("C04fffe")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),s._v("{{ value }}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        };\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("只读和禁用")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-checkbox",{attrs:{value:!0,readonly:""}},[s._v("只读")]),t("u-checkbox",{attrs:{value:!0,disabled:""}},[s._v("禁用")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),s._v("只读"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("禁用"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("不确定状态")]),t("div",{staticClass:"u-example"},[t("u-checkbox",{attrs:{value:null}},[s._v("不确定")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"null"')]),s._v(">")]),s._v("不确定"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("多选组")]),t("div",{staticClass:"u-example"},[t("Ccc74c4")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkedList"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(">")]),s._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("checkedList")]),s._v(": ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'毛巾'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'沙发'")]),s._v("],\n        };\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("数量限制")]),t("p",[s._v("使用"),t("code",{pre:!0},[s._v("min")]),s._v("和"),t("code",{pre:!0},[s._v("max")]),s._v("属性可以限制选择项的数量。")]),t("div",{staticClass:"u-example"},[t("C876d6a")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkedList"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(">")]),s._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("checkedList")]),s._v(": ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'毛巾'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'沙发'")]),s._v("],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        add() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkedList.push("),t("span",{attrs:{class:"hljs-string"}},[s._v("'水杯'")]),s._v(")\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("全选")]),t("div",{staticClass:"u-example"},[t("C7422fd")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"allChecked"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@check")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkAll($event.value)"')]),s._v(">")]),s._v("全选"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkedList"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@check")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"onCheck($event.value)"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"水杯"')]),s._v(">")]),s._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"坚果"')]),s._v(">")]),s._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"毛巾"')]),s._v(">")]),s._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"沙发"')]),s._v(">")]),s._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkbox")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-checkboxes")]),s._v(">")]),s._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("allChecked")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("checkedList")]),s._v(": [],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        checkAll(checked) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkedList = checked ? ["),t("span",{attrs:{class:"hljs-string"}},[s._v("'水杯'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'坚果'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'毛巾'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'沙发'")]),s._v("] : [];\n        },\n        onCheck(value) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkedList.length === "),t("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkedList.length === "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(";\n        }\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("Checkboxes API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value")]),t("td",[s._v("Array")]),t("td",[t("code",{pre:!0},[s._v("[]")])]),t("td",[s._v("多选组的选中项")])]),t("tr",[t("td",[s._v("min")]),t("td",[s._v("Number")]),t("td",[s._v("0")]),t("td",[s._v("可以勾选多选框的最小数量")])]),t("tr",[t("td",[s._v("max")]),t("td",[s._v("Number")]),t("td",[s._v("Infinity")]),t("td",[s._v("可以勾选多选框的最大数量")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入"),t("code",{pre:!0},[s._v("<checkbox>")]),s._v("子组件。")]),t("h2",[s._v("Checkbox API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value.sync, v-model")]),t("td",[s._v("Boolean, null")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("选中状态，"),t("code",{pre:!0},[s._v("null")]),s._v("表示不确定状态")])]),t("tr",[t("td",[s._v("label")]),t("td",[s._v("Any")]),t("td"),t("td",[s._v("多选框标签。用于关联多选组的值")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入文本或HTML。")]),t("h3",[s._v("Events")]),t("h4",[s._v("@before-check")]),t("p",[s._v("切换选中状态前触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("选中状态")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("旧的选中状态")])]),t("tr",[t("td",[s._v("$event.preventDefault")]),t("td",[s._v("Function")]),t("td",[s._v("阻止切换流程")])])])]),t("h4",[s._v("@input")]),t("p",[s._v("切换选中状态时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("切换后的选中状态")])])])]),t("h4",[s._v("@check")]),t("p",[s._v("切换选中状态时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("选中状态")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("旧的选中状态")])]),t("tr",[t("td",[s._v("$event.label")]),t("td",[s._v("Any")]),t("td",[s._v("此选框的标签")])])])]),t("h4",[s._v("@change")]),t("p",[s._v("选中状态改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("选中状态")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Boolean, null")]),t("td",[s._v("旧的选中状态")])])])])])},staticRenderFns:[]},r=t(0)(_,c,!1,null,null,null);a.default=r.exports}});