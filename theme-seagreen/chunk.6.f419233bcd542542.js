/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e1bb148a5a4f320fe56599ec68939b09\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?e1bb148a5a4f320fe56599ec68939b09#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?e1bb148a5a4f320fe56599ec68939b09\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?e1bb148a5a4f320fe56599ec68939b09#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e1bb148a5a4f320fe56599ec68939b09\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?e1bb148a5a4f320fe56599ec68939b09#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?e1bb148a5a4f320fe56599ec68939b09\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?e1bb148a5a4f320fe56599ec68939b09#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([6],{

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig || window.ICON_FONT_STYLE;
    return style.styleContent || '';
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type = 'text/css';
    if (headElement) {
        headElement.appendChild(styleTag);
    } else {
        window.addEventListener('load', function () {
            headElement.appendChild(styleTag);
        });
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if (!styleTag) {
        addStyle(fontConfig);
    } else {
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports = function() {
    if (window.HAS_CREATE_FONT_STYLE) {
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if (false) {
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_35b9ca5c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(881);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_35b9ca5c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_toast_vue_README_md_0_ceb3e8_vue__ = __webpack_require__(878);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
                components: {
                                'Cceb3e8': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_toast_vue_README_md_0_ceb3e8_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_ceb3e8_vue__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_1ec01ff9_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_ceb3e8_vue__ = __webpack_require__(880);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_ceb3e8_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_1ec01ff9_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_ceb3e8_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        open() {
            this.$refs.toast.show();
        }
    }
});

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-button',{nativeOn:{"click":function($event){_vm.open($event)}}},[_vm._v("Toast")]),_c('u-toast',{ref:"toast",attrs:{"message":"消息提示"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("消息提示 Toast")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h4',[_vm._v("声明式")]),_c('div',{staticClass:"u-example"},[_c('u-button',{nativeOn:{"click":function($event){_vm.$refs.toast.show()}}},[_vm._v("toast")]),_c('u-toast',{ref:"toast",attrs:{"message":"消息提示","position":"static"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.toast.show()\"")]),_vm._v(">")]),_vm._v("toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("position")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"static\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n")])]),_c('div',{staticClass:"u-example"},[_c('u-button',{nativeOn:{"click":function($event){_vm.$refs.toastInfo.show()}}},[_vm._v("toast")]),_c('u-toast',{ref:"toastInfo",attrs:{"message":"消息提示","state":"info"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.toastInfo.show()\"")]),_vm._v(">")]),_vm._v("toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("state")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"info\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n")])]),_c('div',{staticClass:"u-example"},[_c('u-button',{nativeOn:{"click":function($event){_vm.$refs.toastSucc.show()}}},[_vm._v("toast")]),_c('u-toast',{ref:"toastSucc",attrs:{"message":"消息提示","state":"success"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.toastSucc.show()\"")]),_vm._v(">")]),_vm._v("toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastSucc\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("state")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"success\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n")])]),_c('div',{staticClass:"u-example"},[_c('u-button',{nativeOn:{"click":function($event){_vm.$refs.toastWarn.show()}}},[_vm._v("toast")]),_c('u-toast',{ref:"toastWarn",attrs:{"message":"消息提示","state":"warnning"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.toastWarn.show()\"")]),_vm._v(">")]),_vm._v("toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastWarn\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("state")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"warnning\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n")])]),_c('div',{staticClass:"u-example"},[_c('u-button',{nativeOn:{"click":function($event){_vm.$refs.toastError.show()}}},[_vm._v("toast")]),_c('u-toast',{ref:"toastError",attrs:{"message":"消息提示","state":"error"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.toastError.show()\"")]),_vm._v(">")]),_vm._v("toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastError\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("state")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"error\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("命令式")]),_c('div',{staticClass:"u-example"},[_c('Cceb3e8')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"open\"")]),_vm._v(">")]),_vm._v("Toast"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toast\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"消息提示\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-toast")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        open() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.toast.show();\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Attrs/Props")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Attr/Prop")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("position")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("top-center")]),_c('td',[_vm._v("显示的位置，可选的值有：top-center, top-left, top-right, bottom-center, bottom-left, bottom-right, static")])]),_c('tr',[_c('td',[_vm._v("duration")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("2000")]),_c('td',[_vm._v("默认的显示位置")])]),_c('tr',[_c('td',[_vm._v("single")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("false")]),_c('td',[_vm._v("只显示一个toast提示，，需要手动设置，默认为false")])]),_c('tr',[_c('td',[_vm._v("state")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("''")]),_c('td',[_vm._v("可选值有info，success, warnning, error和默认的五种样式toast")])]),_c('tr',[_c('td',[_vm._v("message")]),_c('td',[_vm._v("String")]),_c('td',[_vm._v("''")]),_c('td',[_vm._v("提示内容")])]),_c('tr',[_c('td',[_vm._v("closeable")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("false")]),_c('td',[_vm._v("是否可关闭提示，默认不可关闭")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});