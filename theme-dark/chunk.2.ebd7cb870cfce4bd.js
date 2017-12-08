/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([2],{

/***/ 682:
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_aad85f72_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(783);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_aad85f72_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_0_51d731_vue__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_1_669fe6_vue__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_2_ead3ff_vue__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_3_a8b31c_vue__ = __webpack_require__(780);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'C51d731': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_0_51d731_vue__["a" /* default */],
                                'C669fe6': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_1_669fe6_vue__["a" /* default */],
                                'Cead3ff': __WEBPACK_IMPORTED_MODULE_2__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_2_ead3ff_vue__["a" /* default */],
                                'Ca8b31c': __WEBPACK_IMPORTED_MODULE_3__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_checkboxes_vue_README_md_3_a8b31c_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_51d731_vue__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4705494d_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_51d731_vue__ = __webpack_require__(773);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_51d731_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_4705494d_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_51d731_vue__["a" /* default */],
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: true
        };
    }
});

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-checkbox',{model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},[_vm._v(_vm._s(_vm.value))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_669fe6_vue__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_0d89ba52_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_669fe6_vue__ = __webpack_require__(776);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_669fe6_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_0d89ba52_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_669fe6_vue__["a" /* default */],
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
            checkedList: ['毛巾', '沙发']
        };
    }
});

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-checkboxes',{model:{value:(_vm.checkedList),callback:function ($$v) {_vm.checkedList=$$v},expression:"checkedList"}},[_c('u-checkbox',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-checkbox',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-checkbox',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-checkbox',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1),_vm._v("\n    "+_vm._s(_vm.checkedList)+"\n")],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_2_ead3ff_vue__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_727d0b2e_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_2_ead3ff_vue__ = __webpack_require__(779);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_2_ead3ff_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_727d0b2e_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_2_ead3ff_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
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
            checkedList: ['毛巾', '沙发']
        };
    },
    methods: {
        add() {
            this.checkedList.push('水杯');
        }
    }
});

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-checkboxes',{attrs:{"min":1,"max":2},model:{value:(_vm.checkedList),callback:function ($$v) {_vm.checkedList=$$v},expression:"checkedList"}},[_c('u-checkbox',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-checkbox',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-checkbox',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-checkbox',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1),_vm._v("\n    "+_vm._s(_vm.checkedList)+"\n")],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_3_a8b31c_vue__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5737a10f_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_3_a8b31c_vue__ = __webpack_require__(782);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_3_a8b31c_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5737a10f_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_3_a8b31c_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
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
            allChecked: false,
            checkedList: []
        };
    },
    methods: {
        checkAll(checked) {
            this.checkedList = checked ? ['水杯', '坚果', '毛巾', '沙发'] : [];
        },
        onCheck(value) {
            if (this.checkedList.length === 4) this.allChecked = true;else if (this.checkedList.length === 0) this.allChecked = false;else this.allChecked = null;
        }
    }
});

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-checkbox',{on:{"check":function($event){_vm.checkAll($event.value)}},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}},[_vm._v("全选")]),_c('u-checkboxes',{on:{"check":function($event){_vm.onCheck($event.value)}},model:{value:(_vm.checkedList),callback:function ($$v) {_vm.checkedList=$$v},expression:"checkedList"}},[_c('u-checkbox',{attrs:{"label":"水杯"}},[_vm._v("水杯")]),_c('u-checkbox',{attrs:{"label":"坚果"}},[_vm._v("坚果")]),_c('u-checkbox',{attrs:{"label":"毛巾"}},[_vm._v("毛巾")]),_c('u-checkbox',{attrs:{"label":"沙发"}},[_vm._v("沙发")])],1),_vm._v("\n    "+_vm._s(_vm.checkedList)+"\n")],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("多选组 Checkboxes")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-checkbox',[_vm._v("多选框")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("多选框"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("Value绑定")]),_c('div',{staticClass:"u-example"},[_c('C51d731')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(">")]),_vm._v("{{ value }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读和禁用")]),_c('div',{staticClass:"u-example"},[_c('u-linear-layout',[_c('u-checkbox',{attrs:{"value":true,"readonly":""}},[_vm._v("只读")]),_c('u-checkbox',{attrs:{"value":true,"disabled":""}},[_vm._v("禁用")])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_vm._v("只读"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("禁用"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("不确定状态")]),_c('div',{staticClass:"u-example"},[_c('u-checkbox',{attrs:{"value":null}},[_vm._v("不确定")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"null\"")]),_vm._v(">")]),_vm._v("不确定"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("多选组")]),_c('div',{staticClass:"u-example"},[_c('C669fe6')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkedList\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(">")]),_vm._v("\n    {{ checkedList }}\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkedList")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'毛巾'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'沙发'")]),_vm._v("],\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("数量限制")]),_c('p',[_vm._v("使用"),_c('code',{pre:true},[_vm._v("min")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("max")]),_vm._v("属性可以限制选择项的数量。")]),_c('div',{staticClass:"u-example"},[_c('Cead3ff')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":min")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":max")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkedList\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(">")]),_vm._v("\n    {{ checkedList }}\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkedList")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'毛巾'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'沙发'")]),_vm._v("],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        add() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".checkedList.push("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'水杯'")]),_vm._v(")\n        }\n    }\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("全选")]),_c('div',{staticClass:"u-example"},[_c('Ca8b31c')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"allChecked\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@check")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkAll($event.value)\"")]),_vm._v(">")]),_vm._v("全选"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkedList\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@check")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onCheck($event.value)\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"水杯\"")]),_vm._v(">")]),_vm._v("水杯"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"坚果\"")]),_vm._v(">")]),_vm._v("坚果"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"毛巾\"")]),_vm._v(">")]),_vm._v("毛巾"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"沙发\"")]),_vm._v(">")]),_vm._v("沙发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-checkboxes")]),_vm._v(">")]),_vm._v("\n    {{ checkedList }}\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("allChecked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkedList")]),_vm._v(": [],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        checkAll(checked) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".checkedList = checked ? ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'水杯'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'坚果'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'毛巾'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'沙发'")]),_vm._v("] : [];\n        },\n        onCheck(value) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".checkedList.length === "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(")\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".allChecked = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(";\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".checkedList.length === "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(")\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".allChecked = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(";\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".allChecked = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("null")]),_vm._v(";\n        }\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("Checkboxes API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("Array")]),_c('td',[_c('code',{pre:true},[_vm._v("[]")])]),_c('td',[_vm._v("多选组的选中项")])]),_c('tr',[_c('td',[_vm._v("min")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("0")]),_c('td',[_vm._v("可以勾选多选框的最小数量")])]),_c('tr',[_c('td',[_vm._v("max")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("Infinity")]),_c('td',[_vm._v("可以勾选多选框的最大数量")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<checkbox>")]),_vm._v("子组件。")]),_c('h2',[_vm._v("Checkbox API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value.sync, v-model")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("选中状态，"),_c('code',{pre:true},[_vm._v("null")]),_vm._v("表示不确定状态")])]),_c('tr',[_c('td',[_vm._v("label")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("多选框标签。用于关联多选组的值")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-check")]),_c('p',[_vm._v("切换选中状态前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("旧的选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止切换流程")])])])]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("切换选中状态时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("切换后的选中状态")])])])]),_c('h4',[_vm._v("@check")]),_c('p',[_vm._v("切换选中状态时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("旧的选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.label")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("此选框的标签")])])])]),_c('h4',[_vm._v("@change")]),_c('p',[_vm._v("选中状态改变时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Boolean | null")]),_c('td',[_vm._v("旧的选中状态")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});