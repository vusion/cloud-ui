/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?45df73ee96f6cbb25121e92333c9c754\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?45df73ee96f6cbb25121e92333c9c754#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?45df73ee96f6cbb25121e92333c9c754\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?45df73ee96f6cbb25121e92333c9c754#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?45df73ee96f6cbb25121e92333c9c754\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?45df73ee96f6cbb25121e92333c9c754#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?45df73ee96f6cbb25121e92333c9c754\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?45df73ee96f6cbb25121e92333c9c754#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([13],{

/***/ 669:
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

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_16efde60_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(777);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_16efde60_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_multi_select_vue_README_md_0_dfcdb8_vue__ = __webpack_require__(774);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Cdfcdb8': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_multi_select_vue_README_md_0_dfcdb8_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_dfcdb8_vue__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4ffcb6ad_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_dfcdb8_vue__ = __webpack_require__(776);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_dfcdb8_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4ffcb6ad_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_dfcdb8_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: [],
            options: [{
                value: '选项1',
                name: '黄金糕'
            }, {
                value: '选项2',
                name: '双皮奶'
            }, {
                value: '选项3',
                name: '蚵仔煎'
            }, {
                value: '选项4',
                name: '龙须面'
            }, {
                value: '选项5',
                name: '北京烤鸭'
            }]
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    }
});

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-multi-select',{attrs:{"options":_vm.options},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("选择扩展 MultiSelect")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h3',[_vm._v("方法")]),_c('div',{staticClass:"u-example"},[_c('Cdfcdb8')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-multi-select")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"options\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-multi-select")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": [],\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("options")]),_vm._v(": [{\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选项1'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'黄金糕'")]),_vm._v("\n            }, {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选项2'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'双皮奶'")]),_vm._v("\n            }, {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选项3'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'蚵仔煎'")]),_vm._v("\n            }, {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选项4'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'龙须面'")]),_vm._v("\n            }, {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'选项5'")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'北京烤鸭'")]),_vm._v(",\n            }],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n        value(newValue) {\n            "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(newValue);\n        }\n    }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});