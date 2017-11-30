/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?7f8008d4d66e24c1f909764820fc47a3\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?7f8008d4d66e24c1f909764820fc47a3#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?7f8008d4d66e24c1f909764820fc47a3\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?7f8008d4d66e24c1f909764820fc47a3#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?7f8008d4d66e24c1f909764820fc47a3\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?7f8008d4d66e24c1f909764820fc47a3#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?7f8008d4d66e24c1f909764820fc47a3\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?7f8008d4d66e24c1f909764820fc47a3#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([13],{

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

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_399868b6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(869);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_399868b6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_modal_vue_README_md_0_d0b693_vue__ = __webpack_require__(866);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Cd0b693': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_modal_vue_README_md_0_d0b693_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_d0b693_vue__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4aadc470_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_d0b693_vue__ = __webpack_require__(868);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_d0b693_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4aadc470_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_d0b693_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_library__ = __webpack_require__(107);
//
//
//
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
        return {
            modalVisible: false
        };
    },
    methods: {
        open() {
            __WEBPACK_IMPORTED_MODULE_0_library__["Modal"].alert('test');
        }
    }
});

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-modal',{attrs:{"visible":_vm.modalVisible,"title":"提示"},on:{"update:visible":function($event){_vm.modalVisible=$event}}},[_c('span',[_vm._v("内容")])]),_c('u-linear-layout',[_c('u-button',{on:{"click":function($event){_vm.modalVisible = true}}},[_vm._v("Modal")]),_c('u-button',{on:{"click":function($event){_vm.open()}}},[_vm._v("Open")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("弹窗 Modal")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h4',[_vm._v("声明式")]),_c('div',{staticClass:"u-example"},[_c('Cd0b693')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":visible.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modalVisible\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"提示\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("内容"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modalVisible = true\"")]),_vm._v(">")]),_vm._v("Modal"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"open()\"")]),_vm._v(">")]),_vm._v("Open"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Modal } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'library'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("modalVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        open() {\n            Modal.alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'test'")]),_vm._v(");\n        }\n    }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("Static")]),_c('div',{staticClass:"u-example"},[_c('u-modal',{attrs:{"visible":"","static":""}},[_vm._v("静态显示，用于文档或局部展示")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(">")]),_vm._v("静态显示，用于文档或局部展示"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("标题与内容")]),_c('div',{staticClass:"u-example"},[_c('u-modal',{attrs:{"title":"标题","visible":"","static":""}},[_vm._v("内容")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"标题\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(">")]),_vm._v("内容"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("图标、小标题与描述")]),_c('div',{staticClass:"u-example"},[_c('u-modal',{attrs:{"title":"删除","heading":"确定删除该服务吗？","icon":"warning","visible":"","static":""}},[_vm._v("删除后不可恢复。")]),_c('u-modal',{attrs:{"title":"创建","heading":"创建成功","icon":"success","visible":"","static":""}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"删除\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("heading")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"确定删除该服务吗？\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("icon")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"warning\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(">")]),_vm._v("删除后不可恢复。"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"创建\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("heading")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"创建成功\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("icon")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"success\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("自定义")]),_c('div',{staticClass:"u-example"},[_c('u-modal',{attrs:{"visible":"","static":""}},[_c('div',{attrs:{"slot":"title"},slot:"title"}),_c('div',{attrs:{"slot":"foot"},slot:"foot"},[_c('u-button',{attrs:{"color":"primary"}},[_vm._v("关闭")])],1)])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"title\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"foot\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("关闭"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("大小扩展")]),_c('div',{staticClass:"u-example"},[_c('u-modal',{attrs:{"visible":"","static":"","size":"small"}},[_vm._v("\n    size 为small，大小是300px\n")]),_c('u-modal',{attrs:{"visible":"","static":"","size":"normal"}},[_vm._v("\n    size 为默认的normal,大小是400px\n")]),_c('u-modal',{attrs:{"visible":"","static":"","size":"large"}},[_vm._v("\n    size 为large,大小是600px\n")]),_c('u-modal',{attrs:{"visible":"","static":"","size":"huge"}},[_vm._v("\n    size 为huge,大小是800px\n")]),_c('u-modal',{attrs:{"visible":"","static":"","size":"auto"}},[_vm._v("\n    size 为auto\n")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("\n    size 为small，大小是300px\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(">")]),_vm._v("\n    size 为默认的normal,大小是400px\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large\"")]),_vm._v(">")]),_vm._v("\n    size 为large,大小是600px\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"huge\"")]),_vm._v(">")]),_vm._v("\n    size 为huge,大小是800px\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"auto\"")]),_vm._v(">")]),_vm._v("\n    size 为auto\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-modal")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Attrs/Props")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Attr/Prop")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'提示'")])]),_c('td',[_vm._v("弹窗的标题")])]),_c('tr',[_c('td',[_vm._v("content")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'提示内容'")])]),_c('td',[_vm._v("弹窗的内容")])]),_c('tr',[_c('td',[_vm._v("heading")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'提示内容'")])]),_c('td',[_vm._v("弹窗的内容")])]),_c('tr',[_c('td',[_vm._v("visible.sync")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否显示")])]),_c('tr',[_c('td',[_vm._v("okButton")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'确定'")])]),_c('td',[_vm._v("确定按钮文本，如果为空则不显示")])]),_c('tr',[_c('td',[_vm._v("cancelButton")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'取消'")])]),_c('td',[_vm._v("取消按钮文本，如果为空则不显示")])]),_c('tr',[_c('td',[_vm._v("size")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'normal'")])]),_c('td',[_vm._v("弹框的尺寸")])]),_c('tr',[_c('td',[_vm._v("icon")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_c('td',[_vm._v("提示图标, 可选值："),_c('code',{pre:true},[_vm._v("success")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("warning")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("error")])])])])]),_c('h3',[_vm._v("Slots")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Slot")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_c('td',[_vm._v("弹窗标题自定义")])]),_c('tr',[_c('td',[_vm._v("head")]),_c('td',[_vm._v("弹窗头部自定义")])]),_c('tr',[_c('td',[_vm._v("body")]),_c('td',[_vm._v("弹窗中部自定义")])]),_c('tr',[_c('td',[_vm._v("foot")]),_c('td',[_vm._v("弹窗尾部自定义")])]),_c('tr',[_c('td',[_vm._v("heading")]),_c('td',[_vm._v("弹框小标题自定义")])]),_c('tr',[_c('td',[_vm._v("(default)")]),_c('td',[_vm._v("弹窗内容自定义")])])])]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@open")]),_c('p',[_vm._v("打开弹窗时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')]),_c('h4',[_vm._v("@ok")]),_c('p',[_vm._v("确定时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')]),_c('h4',[_vm._v("@cancel")]),_c('p',[_vm._v("取消时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')]),_c('h4',[_vm._v("@before-close")]),_c('p',[_vm._v("关闭弹窗前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止关闭流程")])])])]),_c('h4',[_vm._v("@close")]),_c('p',[_vm._v("关闭弹窗时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});