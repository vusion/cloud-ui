/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?332b686a57b9a11e78be4ffa5e2c5fe3\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?332b686a57b9a11e78be4ffa5e2c5fe3#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?332b686a57b9a11e78be4ffa5e2c5fe3\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?332b686a57b9a11e78be4ffa5e2c5fe3#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?332b686a57b9a11e78be4ffa5e2c5fe3\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?332b686a57b9a11e78be4ffa5e2c5fe3#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?332b686a57b9a11e78be4ffa5e2c5fe3\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?332b686a57b9a11e78be4ffa5e2c5fe3#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([3],{

/***/ 695:
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

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2997a808_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(951);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2997a808_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_dragger_vue_README_md_0_c69aba_vue__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_dragger_vue_README_md_1_819518_vue__ = __webpack_require__(947);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Cc69aba': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_dragger_vue_README_md_0_c69aba_vue__["a" /* default */],
                                'C819518': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_dragger_vue_README_md_1_819518_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_063bdaf8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_c69aba_vue__ = __webpack_require__(946);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(944);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_063bdaf8_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_c69aba_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(945);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("253db9a3", content, true);

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._18ZtaEcSEMgdGacM{display:inline-block;position:relative;vertical-align:bottom;width:300px;height:300px;padding:20px;background:#f4f4f4;border:2px solid #ccc}.JhnZKK9wEen32yl7{position:absolute}", ""]);

// exports
exports.locals = {
	"well": "_18ZtaEcSEMgdGacM",
	"block": "JhnZKK9wEen32yl7"
};

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.$style.well},[_c('u-dragger',{attrs:{"range":{ left: 0, top: 0, right: 200, bottom: 200 }}},[_c('u-block',{class:_vm.$style.block,attrs:{"size":"normal","color":"primary","inline":""}},[_vm._v("object")])],1)],1),_c('div',{class:_vm.$style.well},[_c('u-dragger',{attrs:{"range":"offset-parent"}},[_c('u-block',{class:_vm.$style.block,attrs:{"size":"normal","color":"primary","inline":""}},[_vm._v("offset-parent")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4c04a062_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_819518_vue__ = __webpack_require__(950);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(948);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4c04a062_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_819518_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(949);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("25d7feb0", content, true);

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._23OBKGHD1c8VcoxJ{display:inline-block;position:relative;vertical-align:bottom;width:300px;height:300px;padding:20px;background:#f4f4f4;border:2px solid #ccc}._2eKAoxTjUb9pfYCD{position:absolute}._2eKAoxTjUb9pfYCD[range-mode=center]{margin-left:-32px;margin-top:-32px}", ""]);

// exports
exports.locals = {
	"well": "_23OBKGHD1c8VcoxJ",
	"block": "_2eKAoxTjUb9pfYCD"
};

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.$style.well},[_c('u-dragger',{attrs:{"range":"offset-parent","range-mode":"inside"}},[_c('u-block',{class:_vm.$style.block,attrs:{"size":"normal","color":"primary","inline":""}},[_vm._v("object")])],1)],1),_c('div',{class:_vm.$style.well},[_c('u-dragger',{attrs:{"range":"offset-parent","range-mode":"center"}},[_c('u-block',{class:_vm.$style.block,attrs:{"range-mode":"center","size":"normal","color":"primary","inline":""}},[_vm._v("offset-parent")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("拖拽器 Dragger")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-dragger',[_c('u-block',{attrs:{"size":"normal"}},[_vm._v("拖我")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(">")]),_vm._v("拖我"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("轴向约束")]),_c('div',{staticClass:"u-example"},[_c('u-dragger',{attrs:{"axis":"horizontal"}},[_c('u-block',{attrs:{"size":"normal","inline":""}},[_vm._v("水平")])],1),_c('u-dragger',{attrs:{"axis":"vertical"}},[_c('u-block',{attrs:{"size":"normal","inline":""}},[_vm._v("垂直")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"horizontal\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("水平"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("axis")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"vertical\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("垂直"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("网格约束")]),_c('div',{staticClass:"u-example"},[_c('u-dragger',{attrs:{"grid":{ x: 40, y: 30 }}},[_c('u-block',{attrs:{"size":"normal","color":"primary","inline":""}},[_vm._v("网格")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":grid")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ x: 40, y: 30 }\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("网格"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("范围约束")]),_c('div',{staticClass:"u-example"},[_c('Cc69aba')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.well\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":range")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ left: 0, top: 0, right: 200, bottom: 200 }\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.block\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("object"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.well\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"offset-parent\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.block\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("offset-parent"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".well")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("position")]),_vm._v(": relative;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("vertical-align")]),_vm._v(": bottom;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("padding")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#f4f4f4")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".block")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("position")]),_vm._v(": absolute;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("范围约束模式")]),_c('div',{staticClass:"u-example"},[_c('C819518')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.well\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"offset-parent\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range-mode")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"inside\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.block\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("object"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.well\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"offset-parent\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range-mode")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.block\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("range-mode")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("offset-parent"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-dragger")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".well")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("position")]),_vm._v(": relative;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("vertical-align")]),_vm._v(": bottom;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("300px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("padding")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#f4f4f4")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".block")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("position")]),_vm._v(": absolute;\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".block")]),_c('span',{attrs:{"class":"hljs-selector-attr"}},[_vm._v("[range-mode=\"center\"]")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-left")]),_vm._v(": -"),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("32px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-top")]),_vm._v(": -"),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("32px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("axis")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("both")])]),_c('td',[_vm._v("拖拽时移动路径的约束轴向。可选值："),_c('code',{pre:true},[_vm._v("both")]),_vm._v("表示可以在任意方向上移动、"),_c('code',{pre:true},[_vm._v("horizontal")]),_vm._v("表示限制在水平方向上移动、"),_c('code',{pre:true},[_vm._v("vertical")]),_vm._v("表示限制在垂直方向上移动。")])]),_c('tr',[_c('td',[_vm._v("grid")]),_c('td',[_vm._v("Object")]),_c('td',[_c('code',{pre:true},[_vm._v("{ x: 0, y: 0 }")])]),_c('td',[_vm._v("f拖拽时移动路径的约束网格。值为一个{x,y}格式的对象，表示水平方向和垂直方向网格的大小。")])]),_c('tr',[_c('td',[_vm._v("range")]),_c('td',[_vm._v("String | Object")]),_c('td'),_c('td',[_vm._v("拖拽范围。值可以为一个{left,top,right,bottom}格式的对象，表示代理元素移动的上下左右边界。当值为"),_c('code',{pre:true},[_vm._v("offset-parent")]),_vm._v("，代理元素限制在offsetParent中移动，仅适用于"),_c('code',{pre:true},[_vm._v("position")]),_vm._v("为"),_c('code',{pre:true},[_vm._v("absolute")]),_vm._v("的情况。")])]),_c('tr',[_c('td',[_vm._v("range-mode")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("inside")])]),_c('td',[_vm._v("拖拽范围模式。可选值："),_c('code',{pre:true},[_vm._v("inside")]),_vm._v("表示在拖拽范围内侧移动，"),_c('code',{pre:true},[_vm._v("center")]),_vm._v("表示在拖拽范围边缘及内侧移动，"),_c('code',{pre:true},[_vm._v("outside")]),_vm._v("表示在拖拽范围外侧及内侧移动。")])]),_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("transfer")]),_c('td',[_vm._v("String | Element")]),_c('td',[_c('code',{pre:true},[_vm._v("'self'")])]),_c('td',[_vm._v("拖拽时的移动元素。可选值："),_c('code',{pre:true},[_vm._v("'clone'")]),_vm._v("表示拖拽时拖起自身的一个拷贝，"),_c('code',{pre:true},[_vm._v("'self'")]),_vm._v("表示拖拽时拖起自身，也可以直接传入一个元素，或者用slot来设置。")])]),_c('tr',[_c('td',[_vm._v("immediate")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否在鼠标按下时立即拖拽。默认为"),_c('code',{pre:true},[_vm._v("false")]),_vm._v("，是为了防止鼠标单击等事件频繁触发拖拽操作。")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入需要拖拽的元素，仅一个。")]),_c('h4',[_vm._v("transfer")]),_c('p',[_vm._v("自定义的移动元素。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@dragstart")]),_c('p',[_vm._v("拖拽开始时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h4',[_vm._v("@drag")]),_c('p',[_vm._v("正在拖拽时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h4',[_vm._v("@dragend")]),_c('p',[_vm._v("拖拽结束时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("cancel()")]),_c('p',[_vm._v("取消拖拽。")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});