/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([32],{

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

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ec843fa6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(732);
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
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ec843fa6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("Logo")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',{attrs:{"direction":"vertical"}},[_c('div',{staticStyle:{"background":"#4289db","padding":"0 10px"}},[_c('u-logo')],1),_c('div',{staticStyle:{"background":"#1d2b40","padding":"0 10px"}},[_c('u-logo',{attrs:{"name":"yiwu"}})],1),_c('div',{staticStyle:{"background":"#1d2b40","padding":"0 10px"}},[_c('u-logo',{attrs:{"href":"http://www.baidu.com","target":"_blank","name":"163yun"}})],1)])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #4289db; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #1d2b40; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"yiwu\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #1d2b40; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"http://www.baidu.com\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"_blank\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"163yun\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("子标题")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',{attrs:{"direction":"vertical"}},[_c('div',{staticStyle:{"background":"#4289db","padding":"0 10px"}},[_c('u-logo',[_c('a',{attrs:{"href":"/","target":"_blank"}},[_vm._v("ICP 备案系统")])])],1),_c('div',{staticStyle:{"background":"#1d2b40","padding":"0 10px"}},[_c('u-logo',{attrs:{"name":"163yun"}},[_vm._v("管理平台")])],1)])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #4289db; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("a")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"_blank\"")]),_vm._v(">")]),_vm._v("ICP 备案系统"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("a")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #1d2b40; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"163yun\"")]),_vm._v(">")]),_vm._v("管理平台"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("颜色扩展")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',{attrs:{"direction":"vertical"}},[_c('div',{staticStyle:{"background":"#343f4f","padding":"0 10px"}},[_c('u-logo',{attrs:{"color":"2color"}})],1),_c('div',{staticStyle:{"background":"#343f4f","padding":"0 10px"}},[_c('u-logo',{attrs:{"name":"yiwu","color":"2color"}})],1),_c('div',{staticStyle:{"background":"#343f4f","padding":"0 10px"}},[_c('u-logo',{attrs:{"name":"163yun","color":"2color"}})],1)])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #343f4f; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2color\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #343f4f; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"yiwu\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2color\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #343f4f; padding: 0 10px;\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"163yun\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2color\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-logo")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});