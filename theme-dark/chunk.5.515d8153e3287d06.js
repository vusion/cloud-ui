/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?d87d0bfc9fb183e1020ffeb38961dc56#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?d87d0bfc9fb183e1020ffeb38961dc56#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?d87d0bfc9fb183e1020ffeb38961dc56#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?d87d0bfc9fb183e1020ffeb38961dc56\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?d87d0bfc9fb183e1020ffeb38961dc56#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([5],{

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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6c4bd711_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(828);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6c4bd711_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_tree_view_vue_README_md_0_c0d54f_vue__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_tree_view_vue_README_md_1_37254e_vue__ = __webpack_require__(825);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Cc0d54f': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_tree_view_vue_README_md_0_c0d54f_vue__["a" /* default */],
                                'C37254e': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_tree_view_vue_README_md_1_37254e_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_c0d54f_vue__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_68d2f44c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_c0d54f_vue__ = __webpack_require__(824);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_c0d54f_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_68d2f44c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_c0d54f_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
            data: [{ text: '节点1', expanded: true, checked: false, children: [{ text: '节点1.1', expanded: false, checked: false }, { text: '节点1.2', expanded: true, checked: false, children: [{ text: '节点1.2.1', expanded: false, checked: false }, { text: '节点1.2.2', expanded: false, checked: false }] }, { text: '节点1.3', expanded: false, checked: false }, { text: '节点1.4', expanded: false, checked: false }] }, { text: '节点2', expanded: false, checked: false }, { text: '节点3', expanded: false, checked: false }]
        };
    }
});

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-tree-view',{ref:"treeView",attrs:{"checkable":"","data":_vm.data}}),_c('p',[_vm._v(_vm._s(_vm.data))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_37254e_vue__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_415b2a55_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_37254e_vue__ = __webpack_require__(827);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_37254e_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_415b2a55_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_37254e_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 826:
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
            data: [{ text: '节点1', expanded: true, checked: false, children: [{ text: '节点1.1', expanded: false, checked: false }, { text: '节点1.2', expanded: true, checked: false, children: [{ text: '节点1.2.1', expanded: false, checked: false }, { text: '节点1.2.2', expanded: false, checked: false }] }, { text: '节点1.3', expanded: false, checked: false }, { text: '节点1.4', expanded: false, checked: false }] }, { text: '节点2', expanded: false, checked: false }, { text: '节点3', expanded: false, checked: false }]
        };
    },
    methods: {
        checkAll(checked) {
            this.$refs.treeView.checkAll(checked);
        },
        toggleAll(expanded) {
            this.$refs.treeView.toggleAll(expanded);
        }
    }
});

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-tree-view',{ref:"treeView",attrs:{"checkable":"","data":_vm.data}}),_c('u-button',{on:{"click":function($event){_vm.checkAll(true)}}},[_vm._v("全部选中")]),_c('u-button',{on:{"click":function($event){_vm.checkAll(false)}}},[_vm._v("全部取消")]),_c('u-button',{on:{"click":function($event){_vm.toggleAll(true)}}},[_vm._v("全部展开")]),_c('u-button',{on:{"click":function($event){_vm.toggleAll(false)}}},[_vm._v("全部取消")]),_c('p',[_vm._v(_vm._s(_vm.data))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("树型视图 TreeView")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('p',[_vm._v("有两种书写方式，这里推荐使用Data方式，因为树型结构的数据有时非常多。")]),_c('h4',[_vm._v("Tag方式")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("Data方式")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"data":[
    { text: '节点1', children: [
        { text: '节点1.1' },
        { text: '节点1.2', children: [
            { text: '节点1.2.1' },
            { text: '节点1.2.2' } ] },
        { text: '节点1.3' },
        { text: '节点1.4' } ] },
    { text: '节点2' },
    { text: '节点3', children: [
        { text: '节点3.1' },
        { text: '节点3.2' } ] } ]}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2' },\n        ] },\n        { text: '节点1.3' },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2' },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2' },\n    ] },\n]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("自定义模板")]),_c('p',[_vm._v("但我们知道，Tag方式很容易自定义模板，而Data方式却不好扩展。我们提供了一个名为"),_c('code',{pre:true},[_vm._v("text")]),_vm._v("的作用域插槽，可以很轻松地处理这个问题。")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"data":[
    { text: '文件夹1', type: 'directory', children: [
        { text: '文件夹1.1', type: 'directory' },
        { text: '文件夹1.2', type: 'directory', children: [
            { text: '文件1.2.1', type: 'file' },
            { text: '文件1.2.2', type: 'file' } ] },
        { text: '文件1.3', type: 'file' },
        { text: '文件1.4', type: 'file' } ] },
    { text: '文件夹2', type: 'directory' },
    { text: '文件夹3', type: 'directory', children: [
        { text: '文件3.1', type: 'file' },
        { text: '文件3.2', type: 'file' } ] } ]},scopedSlots:_vm._u([{key:"text",fn:function(ref){
var node = ref.node;
var expanded = ref.expanded;
var text = ref.text;
return _c('span',{},[_vm._v("\n        "+_vm._s(node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄')+"\n        "+_vm._s(text)+"\n    ")])}}])})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[\n    { text: '文件夹1', type: 'directory', children: [\n        { text: '文件夹1.1', type: 'directory' },\n        { text: '文件夹1.2', type: 'directory', children: [\n            { text: '文件1.2.1', type: 'file' },\n            { text: '文件1.2.2', type: 'file' },\n        ] },\n        { text: '文件1.3', type: 'file' },\n        { text: '文件1.4', type: 'file' },\n    ] },\n    { text: '文件夹2', type: 'directory' },\n    { text: '文件夹3', type: 'directory', children: [\n        { text: '文件3.1', type: 'file' },\n        { text: '文件3.2', type: 'file' },\n    ] },\n]\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"text\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ node, expanded, text }\"")]),_vm._v(">")]),_vm._v("\n        {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}\n        {{ text }}\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("但"),_c('code',{pre:true},[_vm._v("text")]),_vm._v("作用域插槽只支持扩展text文本内容，如果您的需求更加复杂，建议直接通过继承TreeView相关组件来实现。")]),_c('h3',[_vm._v("选项值")]),_c('h4',[_vm._v("Tag方式")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"value":"1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1","value":"1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1","value":"1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2","value":"1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1","value":"1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2","value":"1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3","value":"1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4","value":"1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2","value":"2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3","value":"3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1","value":"3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2","value":"3.2"}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.2\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.2\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("Data方式")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"value":"1.2","data":[
    { text: '节点1', value: '1', children: [
        { text: '节点1.1', value: '1.1' },
        { text: '节点1.2', value: '1.2', children: [
            { text: '节点1.2.1', value: '1.2.1' },
            { text: '节点1.2.2', value: '1.2.2' } ] },
        { text: '节点1.3', value: '1.3' },
        { text: '节点1.4', value: '1.4' } ] },
    { text: '节点2', value: '2' },
    { text: '节点3', value: '3', children: [
        { text: '节点3.1', value: '3.1' },
        { text: '节点3.2', value: '3.2' } ] } ]}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[\n    { text: '节点1', value: '1', children: [\n        { text: '节点1.1', value: '1.1' },\n        { text: '节点1.2', value: '1.2', children: [\n            { text: '节点1.2.1', value: '1.2.1' },\n            { text: '节点1.2.2', value: '1.2.2' },\n        ] },\n        { text: '节点1.3', value: '1.3' },\n        { text: '节点1.4', value: '1.4' },\n    ] },\n    { text: '节点2', value: '2' },\n    { text: '节点3', value: '3', children: [\n        { text: '节点3.1', value: '3.1' },\n        { text: '节点3.2', value: '3.2' },\n    ] },\n]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读、禁用、禁用某一项")]),_c('h4',[_vm._v("Tag方式")]),_c('div',{staticClass:"u-example"},[_c('u-grid-layout',[_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-tree-view',{attrs:{"readonly":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-tree-view',{attrs:{"disabled":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('u-tree-view',[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2","disabled":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3","disabled":""}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2","disabled":""}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("readonly")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("Data方式")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"data":[
    { text: '节点1', children: [
        { text: '节点1.1' },
        { text: '节点1.2', disabled: true, children: [
            { text: '节点1.2.1' },
            { text: '节点1.2.2'}
        ] },
        { text: '节点1.3', disabled: true  },
        { text: '节点1.4' } ] },
    { text: '节点2', disabled: true  },
    { text: '节点3', children: [
        { text: '节点3.1' },
        { text: '节点3.2'}
    ]}
]}})],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', disabled: true, children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2'}\n        ] },\n        { text: '节点1.3', disabled: true  },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2', disabled: true  },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2'}\n    ]}\n]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("手风琴")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"accordion":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.1.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.3.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2","expanded":""}},[_c('u-tree-view-node',{attrs:{"text":"节点2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("accordion")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("展开/折叠触发方式")]),_c('div',{staticClass:"u-example"},[_c('u-grid-layout',[_c('u-grid-layout-column',{attrs:{"span":4,"expand-trigger":"click"}},[_c('p',[_vm._v("整行点击均可触发（默认）")]),_c('u-tree-view',[_c('u-tree-view-node',{attrs:{"text":"节点1","expanded":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1","expanded":""}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2","expanded":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('u-grid-layout-column',{attrs:{"span":4}},[_c('p',[_vm._v("仅点击小箭头时触发")]),_c('u-tree-view',{attrs:{"expand-trigger":"click-expander"}},[_c('u-tree-view-node',{attrs:{"text":"节点1","expanded":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1","expanded":""}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2","expanded":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("整行点击均可触发（默认）"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("仅点击小箭头时触发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click-expander\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("可取消")]),_c('div',{staticClass:"u-example"},[_c('u-tree-view',{attrs:{"cancelable":""}},[_c('u-tree-view-node',{attrs:{"text":"节点1"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2"}},[_c('u-tree-view-node',{attrs:{"text":"节点1.2.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.2.2"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点1.3"}}),_c('u-tree-view-node',{attrs:{"text":"节点1.4"}})],1),_c('u-tree-view-node',{attrs:{"text":"节点2"}}),_c('u-tree-view-node',{attrs:{"text":"节点3"}},[_c('u-tree-view-node',{attrs:{"text":"节点3.1"}}),_c('u-tree-view-node',{attrs:{"text":"节点3.2"}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("cancelable")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.2.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点1.4\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.1\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"节点3.2\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view-node")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("多选")]),_c('div',{staticClass:"u-example"},[_c('Cc0d54f')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"treeView\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("{{ data }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n                        { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2.1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                        { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2.2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" }\n                    ] },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.3'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.4'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                ] },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点3'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n            ],\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("案例")]),_c('h3',[_vm._v("多选")]),_c('div',{staticClass:"u-example"},[_c('C37254e')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"treeView\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checkable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-tree-view")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkAll(true)\"")]),_vm._v(">")]),_vm._v("全部选中"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checkAll(false)\"")]),_vm._v(">")]),_vm._v("全部取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toggleAll(true)\"")]),_vm._v(">")]),_vm._v("全部展开"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toggleAll(false)\"")]),_vm._v(">")]),_vm._v("全部取消"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("{{ data }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n                        { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2.1'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                        { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.2.2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" }\n                    ] },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.3'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点1.4'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                ] },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点2'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("text")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'节点3'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n            ],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        checkAll(checked) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.treeView.checkAll(checked);\n        },\n        toggleAll(expanded) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.treeView.toggleAll(expanded);\n        }\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("TreeView API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("data")]),_c('td',[_vm._v("Array<{ text, value }>")]),_c('td'),_c('td',[_vm._v("Data书写方式中的数据列表")])]),_c('tr',[_c('td',[_vm._v("value.sync, v-model")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("当前选择的值")])]),_c('tr',[_c('td',[_vm._v("field")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'text'")])]),_c('td',[_vm._v("显示文本字段")])]),_c('tr',[_c('td',[_vm._v("cancelable")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否可以取消选择")])]),_c('tr',[_c('td',[_vm._v("checkable")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否可以选中/取消")])]),_c('tr',[_c('td',[_vm._v("accordion")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否每次只会展开一个分组")])]),_c('tr',[_c('td',[_vm._v("expandTrigger")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'click'")])]),_c('td',[_vm._v("展开/折叠的触发方式。可选值："),_c('code',{pre:true},[_vm._v("'click'")]),_vm._v("表示整行点击均可触发、"),_c('code',{pre:true},[_vm._v("'click-expander'")]),_vm._v("表示仅点击小箭头时触发")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-tree-view-node>")]),_vm._v("子组件")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择某一项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])])])]),_c('h4',[_vm._v("@select")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("改变后的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("选择项子组件")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某节点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("节点相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("节点组件")])])])]),_c('h4',[_vm._v("@check")]),_c('p',[_vm._v("选中/取消节点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.checked")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("选中/取消状态")])]),_c('tr',[_c('td',[_vm._v("$event.oldChecked")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("旧的选中/取消状态")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("节点相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("节点组件")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("toggleAll(expanded)")]),_c('p',[_vm._v("展开/折叠所有节点")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠")])])])]),_c('h4',[_vm._v("checkAll(checked)")]),_c('p',[_vm._v("选中/取消所有节点")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("选中/取消")])])])]),_c('h2',[_vm._v("TreeViewNode API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("expanded.sync")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("checked.sync")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("选中/取消状态")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("禁用此项")])]),_c('tr',[_c('td',[_vm._v("node")]),_c('td',[_vm._v("Object")]),_c('td'),_c('td',[_vm._v("相关对象。当选择此项时，抛出的事件会传递该对象，便于开发")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择此项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("此项的相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("此组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@before-toggle")]),_c('p',[_vm._v("展开/折叠此节点前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("节点相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("节点组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止展开/折叠流程")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某节点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("节点相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("节点组件")])])])]),_c('h4',[_vm._v("@check")]),_c('p',[_vm._v("选中节点时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.checked")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.oldChecked")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("旧的选中状态")])]),_c('tr',[_c('td',[_vm._v("$event.node")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("节点相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.nodeVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("节点组件")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});