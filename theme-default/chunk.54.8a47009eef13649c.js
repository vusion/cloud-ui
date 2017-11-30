/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([54],{

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

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6e913422_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(720);
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
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6e913422_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("基础 Base")]),_c('h3',[_vm._v("统一样式")]),_c('p',[_vm._v("原型组件库以"),_c('u-link',{attrs:{"href":"http://necolas.github.io/normalize.css"}},[_vm._v("normalize.css")]),_vm._v("为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),_c('p',[_vm._v("类似"),_c('u-link',{attrs:{"href":"https://getbootstrap.com"}},[_vm._v("Bootstrap")]),_vm._v("，将"),_c('code',{pre:true},[_vm._v("box-sizing: border-box")]),_vm._v("应用到所有元素，于是元素的宽高便不会受到"),_c('code',{pre:true},[_vm._v("padding")]),_vm._v("的影响。")],1),_c('p',[_vm._v("使用Vue的"),_c('code',{pre:true},[_vm._v("preserveWhitespace: false")]),_vm._v("，将所有元素之间空格清除，这样在"),_c('code',{pre:true},[_vm._v("inline-block")]),_vm._v("的元素之间不会有空隙。")]),_c('h3',[_vm._v("黑名单")]),_c('p',[_vm._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),_c('code',{pre:true},[_vm._v("<a>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<dl>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<dt>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<dd>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<ul>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<ol>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<li>")]),_vm._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});