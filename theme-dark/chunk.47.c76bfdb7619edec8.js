/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?187e2065ae265f4e5daf5b839e870470\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?187e2065ae265f4e5daf5b839e870470#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?187e2065ae265f4e5daf5b839e870470\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?187e2065ae265f4e5daf5b839e870470#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([47],{

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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_09a1b222_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(914);
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
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_09a1b222_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("路由项 RouterItem")]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("href")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("链接地址")])]),_c('tr',[_c('td',[_vm._v("target")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("打开方式")])]),_c('tr',[_c('td',[_vm._v("to")]),_c('td',[_vm._v("String | Location")]),_c('td'),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),_c('tr',[_c('td',[_vm._v("replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性相同。如果为"),_c('code',{pre:true},[_vm._v("true")]),_vm._v("，当点击时，会调用"),_c('code',{pre:true},[_vm._v("router.replace()")]),_vm._v("而不是"),_c('code',{pre:true},[_vm._v("router.push()")]),_vm._v("，于是导航后不会留下"),_c('code',{pre:true},[_vm._v("history")]),_vm._v("记录。")])]),_c('tr',[_c('td',[_vm._v("exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-navigate")]),_c('p',[_vm._v("使用router相关属性切换路由前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止切换流程")])])])]),_c('h4',[_vm._v("@navigate")]),_c('p',[_vm._v("使用router相关属性切换路由时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性的值")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});