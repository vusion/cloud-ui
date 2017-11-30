/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([38],{

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

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4f465231_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(730);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
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
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4f465231_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("Icon Icon")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',[_c('u-icon',{attrs:{"name":"area"}},[_vm._v("area")]),_c('u-icon',{attrs:{"name":"portrait"}},[_vm._v("portrait")]),_c('u-icon',{attrs:{"name":"angle-left"}},[_vm._v("left")]),_c('u-icon',{attrs:{"name":"angle-right"}},[_vm._v("right")]),_c('u-icon',{attrs:{"name":"arrow-down"}},[_vm._v("arrow-down")]),_c('u-icon',{attrs:{"name":"arrow-up"}},[_vm._v("arrow-up")]),_c('u-icon',{attrs:{"name":"refresh"}},[_vm._v("refresh")]),_c('u-icon',{attrs:{"name":"search"}},[_vm._v("search")]),_c('u-icon',{attrs:{"name":"apm-alert"}},[_vm._v("alert")]),_c('u-icon',{attrs:{"name":"logout","size":"small"}},[_vm._v("logout")]),_c('u-icon',{attrs:{"name":"dropdown","size":"large"}},[_vm._v("dropdown")]),_c('u-icon',{attrs:{"name":"angle-down"}},[_vm._v("down")]),_c('u-icon',{attrs:{"name":"angle-up"}},[_vm._v("up")]),_c('u-icon',{attrs:{"name":"chart-refresh"}},[_vm._v("chart-refresh")]),_c('u-icon',{attrs:{"name":"chart-zoom"}},[_vm._v("chart-zoom")]),_c('u-icon',{attrs:{"name":"close"}},[_vm._v("close")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"area\"")]),_vm._v(">")]),_vm._v("area"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"portrait\"")]),_vm._v(">")]),_vm._v("portrait"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"angle-left\"")]),_vm._v(">")]),_vm._v("left"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"angle-right\"")]),_vm._v(">")]),_vm._v("right"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"arrow-down\"")]),_vm._v(">")]),_vm._v("arrow-down"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"arrow-up\"")]),_vm._v(">")]),_vm._v("arrow-up"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"refresh\"")]),_vm._v(">")]),_vm._v("refresh"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"search\"")]),_vm._v(">")]),_vm._v("search"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"apm-alert\"")]),_vm._v(">")]),_vm._v("alert"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"logout\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v(">")]),_vm._v("logout"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"dropdown\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"large\"")]),_vm._v(">")]),_vm._v("dropdown"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"angle-down\"")]),_vm._v(">")]),_vm._v("down"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"angle-up\"")]),_vm._v(">")]),_vm._v("up"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"chart-refresh\"")]),_vm._v(">")]),_vm._v("chart-refresh"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"chart-zoom\"")]),_vm._v(">")]),_vm._v("chart-zoom"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"close\"")]),_vm._v(">")]),_vm._v("close"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-icon")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});