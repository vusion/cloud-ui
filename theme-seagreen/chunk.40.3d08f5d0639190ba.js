/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?5d6913a1f8b856c7c56ef127ab6f857f#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?5d6913a1f8b856c7c56ef127ab6f857f#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?5d6913a1f8b856c7c56ef127ab6f857f#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?5d6913a1f8b856c7c56ef127ab6f857f#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([40],{

/***/ 667:
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_template_compiler_index_id_data_v_20a9cde6_hasScoped_false_preserveWhitespace_false_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(809);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_template_compiler_index_id_data_v_20a9cde6_hasScoped_false_preserveWhitespace_false_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({ components: {} });

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article')
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});