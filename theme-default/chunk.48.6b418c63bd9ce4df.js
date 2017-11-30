/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?ec225889f67a74692cc3a6f9410bafce\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?ec225889f67a74692cc3a6f9410bafce#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?ec225889f67a74692cc3a6f9410bafce\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?ec225889f67a74692cc3a6f9410bafce#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([48],{

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

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_730873dc_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(748);
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
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_730873dc_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("单选组 Radios")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-radios',{attrs:{"value":"毛巾"}},[_c('u-radio',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-radio',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-radio',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-radio',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读、禁用、禁用某一项")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',{attrs:{"direction":"vertical"}},[_c('u-radios',{attrs:{"value":"毛巾","readonly":""}},[_c('u-radio',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-radio',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-radio',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-radio',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1),_c('u-radios',{attrs:{"value":"毛巾","disabled":""}},[_c('u-radio',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-radio',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-radio',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-radio',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1),_c('u-radios',{attrs:{"value":"坚果"}},[_c('u-radio',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-radio',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-radio',{attrs:{"label":"毛巾","disabled":""}},[_vm._v("毛巾")]),_c('u-radio',{attrs:{"label":"沙发","disabled":""}},[_vm._v("沙发")])],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("Radios API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value.sync, v-model")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("当前选择的值")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-radio>")]),_vm._v("子组件。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择某一项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])])])]),_c('h4',[_vm._v("@select")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("改变后的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("选择项子组件")])])])]),_c('h2',[_vm._v("Radio API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("label")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("单选框标签。用于关联单选组的值")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("禁用只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("禁用此项")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择此项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.label")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("此项的标签")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("ListViewItem")]),_c('td',[_vm._v("此组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});