/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?d87d0bfc9fb183e1020ffeb38961dc56#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?d87d0bfc9fb183e1020ffeb38961dc56#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?d87d0bfc9fb183e1020ffeb38961dc56#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?d87d0bfc9fb183e1020ffeb38961dc56#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([11],{

/***/ 677:
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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6a55c08f_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(759);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6a55c08f_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_number_input_vue_README_md_0_ba81af_vue__ = __webpack_require__(756);
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
                                'Cba81af': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_number_input_vue_README_md_0_ba81af_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_ba81af_vue__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4b3befc5_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_ba81af_vue__ = __webpack_require__(758);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_ba81af_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4b3befc5_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_ba81af_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: 12,
            readonly: false
        };
    },
    methods: {
        change(value) {
            console.log(value.value);
        }
    }
});

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-number-input',{attrs:{"value":_vm.value,"readonly":_vm.readonly},on:{"change":_vm.change}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("数字输入 NumberInput")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h4',[_vm._v("声明式")]),_c('h3',[_vm._v("基本")]),_c('div',{staticClass:"u-example"},[_c('u-number-input')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("format属性")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"format":"00","value":"5"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("format")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"00\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"5\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("autofocus")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"value":"12","autofocus":"autofocus"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("autofocus")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"autofocus\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"value":"12","readonly":"readonly"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"readonly\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("最大值 最小值")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"value":"12","min":"5","max":"20"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"5\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"20\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("指定宽高")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"value":"12","width":"150","height":"40"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"150\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("height")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"40\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("禁用")]),_c('div',{staticClass:"u-example"},[_c('u-number-input',{attrs:{"value":"12","disabled":"disabled"}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"disabled\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("获取改变后的值change方法")]),_c('div',{staticClass:"u-example"},[_c('Cba81af')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"change\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":readonly")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"readonly\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-number-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n\tdata() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        change(value) {\n           "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(value.value);\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});