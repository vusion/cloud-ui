/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([18],{

/***/ 664:
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

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_97b45f5e_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(774);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_97b45f5e_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_color_select_vue_README_md_0_b3eea4_vue__ = __webpack_require__(771);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Cb3eea4': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_color_select_vue_README_md_0_b3eea4_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_b3eea4_vue__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2d2c5ca8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_b3eea4_vue__ = __webpack_require__(773);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_b3eea4_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2d2c5ca8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_b3eea4_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: '#EE867D',
            options: [{
                value: '#EE867D'
            }, {
                value: '#805DCF'
            }, {
                value: '#40CCCA'
            }, {
                value: '#FFCA12'
            }, {
                value: '#30A8DC'
            }, {
                value: '#E1AEF6'
            }, {
                value: '#D2D2D2'
            }]
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    }
});

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-color-select',{attrs:{"options":_vm.options,"value":_vm.value},on:{"select":function($event){_vm.select($event.value)}}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("颜色选择扩展 SelectColor")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h3',[_vm._v("方法")]),_c('div',{staticClass:"u-example"},[_c('Cb3eea4')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-color-select")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"options\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@select")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"select($event.value)\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-color-select")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#EE867D'")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#EE867D'")]),_vm._v(",\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#805DCF'")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#40CCCA'")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#FFCA12'")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#30A8DC'")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#E1AEF6'")]),_vm._v("\n                },\n                {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'#D2D2D2'")]),_vm._v("\n                },\n            ],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        select(value) {\n            "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(value);\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".value = value;\n        }\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});