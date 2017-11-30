/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e1bb148a5a4f320fe56599ec68939b09\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?e1bb148a5a4f320fe56599ec68939b09#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?e1bb148a5a4f320fe56599ec68939b09\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?e1bb148a5a4f320fe56599ec68939b09#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?e1bb148a5a4f320fe56599ec68939b09\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?e1bb148a5a4f320fe56599ec68939b09#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?e1bb148a5a4f320fe56599ec68939b09\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?e1bb148a5a4f320fe56599ec68939b09#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([19],{

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

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_687f1d28_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(824);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_687f1d28_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_list_view_vue_README_md_0_84d531_vue__ = __webpack_require__(821);
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
                                'C84d531': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_list_view_vue_README_md_0_84d531_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_84d531_vue__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7f109cd7_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_84d531_vue__ = __webpack_require__(823);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_84d531_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7f109cd7_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_84d531_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    data() {
        return { value: ['nut', 'towel'] };
    }
});

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-list-view',{attrs:{"multiple":""},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1),_c('p',[_vm._v("value: "+_vm._s(_vm.value))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("列表视图 ListView")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-list-view',[_c('u-list-view-item',[_vm._v("水杯")]),_c('u-list-view-item',[_vm._v("坚果")]),_c('u-list-view-item',[_vm._v("毛巾")]),_c('u-list-view-item',[_vm._v("沙发")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("选项值")]),_c('div',{staticClass:"u-example"},[_c('u-list-view',{attrs:{"value":"towel"}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读、禁用、禁用某一项")]),_c('h4',[_vm._v("Tag方式")]),_c('div',{staticClass:"u-example"},[_c('u-grid-layout',[_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-list-view',{attrs:{"value":"towel","readonly":""}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-list-view',{attrs:{"value":"towel","disabled":""}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-list-view',{attrs:{"value":"towel"}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut","disabled":""}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("分隔符")]),_c('div',{staticClass:"u-example"},[_c('u-list-view',{attrs:{"value":"nut"}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("牙刷")]),_c('u-list-view-divider'),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-divider")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-divider")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("分组")]),_c('div',{staticClass:"u-example"},[_c('u-grid-layout',[_c('u-grid-layout-row',[_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("默认，无折叠功能")]),_c('u-list-view',[_c('u-list-view-group',{attrs:{"title":"洗具"}},[_c('u-list-view-item',[_vm._v("毛巾")]),_c('u-list-view-item',[_vm._v("牙刷")])],1),_c('u-list-view-group',{attrs:{"title":"杯具"}},[_c('u-list-view-item',[_vm._v("牙缸")]),_c('u-list-view-item',[_vm._v("水杯")])],1),_c('u-list-view-group',{attrs:{"title":"餐具"}},[_c('u-list-view-item',[_vm._v("筷子")]),_c('u-list-view-item',[_vm._v("碗")])],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("开启折叠功能")]),_c('u-list-view',{attrs:{"collapsible":""}},[_c('u-list-view-group',{attrs:{"title":"洗具"}},[_c('u-list-view-item',[_vm._v("毛巾")]),_c('u-list-view-item',[_vm._v("牙刷")])],1),_c('u-list-view-group',{attrs:{"title":"杯具","expanded":"","disabled":""}},[_c('u-list-view-item',[_vm._v("牙缸")]),_c('u-list-view-item',[_vm._v("水杯")])],1),_c('u-list-view-group',{attrs:{"title":"餐具","collapsible":false}},[_c('u-list-view-item',[_vm._v("筷子")]),_c('u-list-view-item',[_vm._v("碗")])],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("手风琴模式")]),_c('u-list-view',{attrs:{"collapsible":"","accordion":"","value":"cup"}},[_c('u-list-view-group',{attrs:{"title":"洗具"}},[_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"toothbrush"}},[_vm._v("牙刷")])],1),_c('u-list-view-group',{attrs:{"title":"杯具"}},[_c('u-list-view-item',{attrs:{"value":"toothcup"}},[_vm._v("牙缸")]),_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")])],1),_c('u-list-view-group',{attrs:{"title":"餐具"}},[_c('u-list-view-item',{attrs:{"value":"chopsticks"}},[_vm._v("筷子")]),_c('u-list-view-item',{attrs:{"value":"bowl"}},[_vm._v("碗")])],1)],1)],1)],1),_c('u-grid-layout-row',[_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("触发方式：整行点击均可触发（默认）")]),_c('u-list-view',{attrs:{"collapsible":"","expand-trigger":"click"}},[_c('u-list-view-group',{attrs:{"title":"洗具"}},[_c('u-list-view-item',[_vm._v("毛巾")]),_c('u-list-view-item',[_vm._v("牙刷")])],1),_c('u-list-view-group',{attrs:{"title":"杯具"}},[_c('u-list-view-item',[_vm._v("牙缸")]),_c('u-list-view-item',[_vm._v("水杯")])],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("触发方式：仅点击小箭头时触发")]),_c('u-list-view',{attrs:{"collapsible":"","expand-trigger":"click-expander"}},[_c('u-list-view-group',{attrs:{"title":"洗具"}},[_c('u-list-view-item',[_vm._v("毛巾")]),_c('u-list-view-item',[_vm._v("牙刷")])],1),_c('u-list-view-group',{attrs:{"title":"杯具"}},[_c('u-list-view-item',[_vm._v("牙缸")]),_c('u-list-view-item',[_vm._v("水杯")])],1)],1)],1)],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("默认，无折叠功能"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"洗具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"杯具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙缸"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"餐具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("筷子"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("碗"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("开启折叠功能"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"洗具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"杯具\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙缸"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"餐具\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":collapsible")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("筷子"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("碗"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("手风琴模式"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("accordion")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"洗具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toothbrush\"")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"杯具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toothcup\"")]),_vm._v(">")]),_vm._v("牙缸"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"餐具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"chopsticks\"")]),_vm._v(">")]),_vm._v("筷子"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bowl\"")]),_vm._v(">")]),_vm._v("碗"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("触发方式：整行点击均可触发（默认）"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"洗具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"杯具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙缸"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("触发方式：仅点击小箭头时触发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click-expander\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"洗具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙刷"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"杯具\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("牙缸"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("可取消")]),_c('p',[_vm._v("尝试在同一个选项上点击两次。")]),_c('div',{staticClass:"u-example"},[_c('u-list-view',{attrs:{"value":"towel","cancelable":""}},[_c('u-list-view-item',{attrs:{"value":"cup"}},[_vm._v("水杯")]),_c('u-list-view-item',{attrs:{"value":"nut"}},[_vm._v("坚果")]),_c('u-list-view-item',{attrs:{"value":"towel"}},[_vm._v("毛巾")]),_c('u-list-view-item',{attrs:{"value":"sofa"}},[_vm._v("沙发")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("cancelable")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("多项")]),_c('div',{staticClass:"u-example"},[_c('C84d531')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("multiple")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"cup\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"nut\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"towel\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"sofa\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-list-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("value: {{ value }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'nut'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'towel'")]),_vm._v("] };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("ListView API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("data")]),_c('td',[_vm._v("Array<{ text, value }>")]),_c('td'),_c('td',[_vm._v("Data书写方式中的数据列表")])]),_c('tr',[_c('td',[_vm._v("value.sync, v-model")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("当前选择的值")])]),_c('tr',[_c('td',[_vm._v("field")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'text'")])]),_c('td',[_vm._v("显示文本字段")])]),_c('tr',[_c('td',[_vm._v("cancelable")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否可以取消选择")])]),_c('tr',[_c('td',[_vm._v("multiple")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否可以多选")])]),_c('tr',[_c('td',[_vm._v("collapsible")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("分组是否可以折叠")])]),_c('tr',[_c('td',[_vm._v("accordion")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否每次只会展开一个分组")])]),_c('tr',[_c('td',[_vm._v("expandTrigger")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'click'")])]),_c('td',[_vm._v("展开/折叠的触发方式。可选值："),_c('code',{pre:true},[_vm._v("'click'")]),_vm._v("表示整行点击均可触发、"),_c('code',{pre:true},[_vm._v("'click-expander'")]),_vm._v("表示仅点击小箭头时触发")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-list-view-item>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-list-view-divider>")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("<u-list-view-group>")]),_vm._v("子组件。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择某一项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])])])]),_c('h4',[_vm._v("@select")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("改变后的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("单选模式中，选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("单选模式中，选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.items")]),_c('td',[_vm._v("Array<Object>")]),_c('td',[_vm._v("多选模式中，所有选中项相关对象的数组")])]),_c('tr',[_c('td',[_vm._v("$event.itemVMs")]),_c('td',[_vm._v("Array<ListViewItem>")]),_c('td',[_vm._v("多选模式中，所有选中项子组件的数组")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某分组时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("ListViewGroup")]),_c('td',[_vm._v("分组组件")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("toggleAll(expanded)")]),_c('p',[_vm._v("展开/折叠所有分组")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠")])])])]),_c('h2',[_vm._v("ListViewItem API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("禁用此项")])]),_c('tr',[_c('td',[_vm._v("item")]),_c('td',[_vm._v("Object")]),_c('td'),_c('td',[_vm._v("相关对象。当选择此项时，抛出的事件会传递该对象，便于开发")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择此项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("此项的相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("此组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h2',[_vm._v("ListViewGroup API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("显示的标题")])]),_c('tr',[_c('td',[_vm._v("collapsible")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_c('code',{pre:true},[_vm._v("false")])])]),_c('tr',[_c('td',[_vm._v("expanded.sync")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用。禁用时无法展开/折叠")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-list-view-item>")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("<u-list-view-divider>")]),_vm._v("子组件。")]),_c('h4',[_vm._v("title")]),_c('p',[_vm._v("自定义文本显示。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-toggle")]),_c('p',[_vm._v("展开/折叠此分组前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("分组组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止展开/折叠流程")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某分组时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("分组组件")])])])]),_c('h2',[_vm._v("ListViewDivider API")]),_c('p',[_vm._v("无")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});