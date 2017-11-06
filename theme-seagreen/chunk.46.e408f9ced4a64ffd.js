/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?5d6913a1f8b856c7c56ef127ab6f857f#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?5d6913a1f8b856c7c56ef127ab6f857f#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-seagreen/vusion-icon-font.ttf?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.eot?5d6913a1f8b856c7c56ef127ab6f857f#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.woff?5d6913a1f8b856c7c56ef127ab6f857f\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-seagreen/vusion-icon-font.svg?5d6913a1f8b856c7c56ef127ab6f857f#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([46],{

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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_script_index_0_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_template_compiler_index_id_data_v_63c76a25_hasScoped_false_preserveWhitespace_false_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_template_index_0_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(773);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_script_index_0_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_template_compiler_index_id_data_v_63c76a25_hasScoped_false_preserveWhitespace_false_vusion_cli_node_modules_14_0_2_vusion_vue_loader_lib_selector_type_template_index_0_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 772:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({ components: { 'anonymous-5cac4a7b': { "template": "<div class=\"u-example\"><u-tree-view><u-tree-view-node text=\"节点1\"><u-tree-view-node text=\"节点1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\"><u-tree-view-node text=\"节点1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\"></u-tree-view-node><u-tree-view-node text=\"节点1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\"></u-tree-view-node><u-tree-view-node text=\"节点3\"><u-tree-view-node text=\"节点3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view></div>" }, 'anonymous-c5bb1eba': { "template": "<div class=\"u-example\"><u-tree-view :data=\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2' },\n        ] },\n        { text: '节点1.3' },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2' },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2' },\n    ] },\n]\"></u-tree-view></div>" }, 'anonymous-60db1ace': { "template": "<div class=\"u-example\"><u-tree-view :data=\"[\n    { text: '文件夹1', type: 'directory', children: [\n        { text: '文件夹1.1', type: 'directory' },\n        { text: '文件夹1.2', type: 'directory', children: [\n            { text: '文件1.2.1', type: 'file' },\n            { text: '文件1.2.2', type: 'file' },\n        ] },\n        { text: '文件1.3', type: 'file' },\n        { text: '文件1.4', type: 'file' },\n    ] },\n    { text: '文件夹2', type: 'directory' },\n    { text: '文件夹3', type: 'directory', children: [\n        { text: '文件3.1', type: 'file' },\n        { text: '文件3.2', type: 'file' },\n    ] },\n]\"><span slot=\"text\" slot-scope=\"{ node, expanded, text }\">\n        {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}\n        {{ text }}\n    </span></u-tree-view></div>" }, 'anonymous-cd913038': { "template": "<div class=\"u-example\"><u-tree-view value=\"1.2\"><u-tree-view-node text=\"节点1\" value=\"1\"><u-tree-view-node text=\"节点1.1\" value=\"1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\" value=\"1.2\"><u-tree-view-node text=\"节点1.2.1\" value=\"1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\" value=\"1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\" value=\"1.3\"></u-tree-view-node><u-tree-view-node text=\"节点1.4\" value=\"1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\" value=\"2\"></u-tree-view-node><u-tree-view-node text=\"节点3\" value=\"3\"><u-tree-view-node text=\"节点3.1\" value=\"3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\" value=\"3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view></div>" }, 'anonymous-d03be092': { "template": "<div class=\"u-example\"><u-tree-view value=\"1.2\" :data=\"[\n    { text: '节点1', value: '1', children: [\n        { text: '节点1.1', value: '1.1' },\n        { text: '节点1.2', value: '1.2', children: [\n            { text: '节点1.2.1', value: '1.2.1' },\n            { text: '节点1.2.2', value: '1.2.2' },\n        ] },\n        { text: '节点1.3', value: '1.3' },\n        { text: '节点1.4', value: '1.4' },\n    ] },\n    { text: '节点2', value: '2' },\n    { text: '节点3', value: '3', children: [\n        { text: '节点3.1', value: '3.1' },\n        { text: '节点3.2', value: '3.2' },\n    ] },\n]\"></u-tree-view></div>" }, 'anonymous-1c5adacd': { "template": "<div class=\"u-example\"><u-tree-view readonly><u-tree-view-node text=\"节点1\"><u-tree-view-node text=\"节点1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\"><u-tree-view-node text=\"节点1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\"></u-tree-view-node><u-tree-view-node text=\"节点1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\"></u-tree-view-node><u-tree-view-node text=\"节点3\"><u-tree-view-node text=\"节点3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view><u-tree-view disabled><u-tree-view-node text=\"节点1\"><u-tree-view-node text=\"节点1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\"><u-tree-view-node text=\"节点1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\"></u-tree-view-node><u-tree-view-node text=\"节点1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\"></u-tree-view-node><u-tree-view-node text=\"节点3\"><u-tree-view-node text=\"节点3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view><u-tree-view><u-tree-view-node text=\"节点1\"><u-tree-view-node text=\"节点1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\" disabled><u-tree-view-node text=\"节点1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\" disabled></u-tree-view-node><u-tree-view-node text=\"节点1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\" disabled></u-tree-view-node><u-tree-view-node text=\"节点3\"><u-tree-view-node text=\"节点3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view></div>" }, 'anonymous-2c33b193': { "template": "<div class=\"u-example\"><u-tree-view :data=\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', disabled: true, children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2'}\n        ] },\n        { text: '节点1.3', disabled: true  },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2', disabled: true  },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2'}\n    ]}\n]\"></u-tree-view></div>" }, 'anonymous-65e32703': { "template": "<div class=\"u-example\"><u-tree-view cancelable><u-tree-view-node text=\"节点1\"><u-tree-view-node text=\"节点1.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2\"><u-tree-view-node text=\"节点1.2.1\"></u-tree-view-node><u-tree-view-node text=\"节点1.2.2\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点1.3\"></u-tree-view-node><u-tree-view-node text=\"节点1.4\"></u-tree-view-node></u-tree-view-node><u-tree-view-node text=\"节点2\"></u-tree-view-node><u-tree-view-node text=\"节点3\"><u-tree-view-node text=\"节点3.1\"></u-tree-view-node><u-tree-view-node text=\"节点3.2\"></u-tree-view-node></u-tree-view-node></u-tree-view></div>" }, 'anonymous-4e0569c2': { "template": "<div class=\"u-example\"><u-tree-view ref=\"treeView\" checkable :data=\"data\"></u-tree-view><p>{{ data }}</p></div>",
            data() {
                return {
                    data: [{ text: '节点1', expanded: true, checked: false, children: [{ text: '节点1.1', expanded: false, checked: false }, { text: '节点1.2', expanded: true, checked: false, children: [{ text: '节点1.2.1', expanded: false, checked: false }, { text: '节点1.2.2', expanded: false, checked: false }] }, { text: '节点1.3', expanded: false, checked: false }, { text: '节点1.4', expanded: false, checked: false }] }, { text: '节点2', expanded: false, checked: false }, { text: '节点3', expanded: false, checked: false }]
                };
            }
        }, 'anonymous-1df9cd64': { "template": "<div class=\"u-example\"><u-tree-view ref=\"treeView\" checkable :data=\"data\"></u-tree-view><u-button @click=\"checkAll(true)\">全部选中</u-button><u-button @click=\"checkAll(false)\">全部取消</u-button><u-button @click=\"toggleAll(true)\">全部展开</u-button><u-button @click=\"toggleAll(false)\">全部取消</u-button><p>{{ data }}</p></div>",
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
        } } });

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("树型视图（TreeView）")]), _c('h2', [_vm._v("示例")]), _c('h3', [_vm._v("基本形式")]), _c('p', [_vm._v("有两种书写方式，这里推荐使用Data方式，因为树型结构的数据有时非常多。")]), _c('h4', [_vm._v("Tag方式")]), _c('anonymous-5cac4a7b', {
    ref: "anonymous-5cac4a7b"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h4', [_vm._v("Data方式")]), _c('anonymous-c5bb1eba', {
    ref: "anonymous-c5bb1eba"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2' },\n        ] },\n        { text: '节点1.3' },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2' },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2' },\n    ] },\n]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h4', [_vm._v("自定义模板")]), _c('p', [_vm._v("但我们知道，Tag方式很容易自定义模板，而Data方式却不好扩展。我们提供了一个名为"), _c('code', {
    pre: true
  }, [_vm._v("text")]), _vm._v("的作用域插槽，可以很轻松地处理这个问题。")]), _c('anonymous-60db1ace', {
    ref: "anonymous-60db1ace"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[\n    { text: '文件夹1', type: 'directory', children: [\n        { text: '文件夹1.1', type: 'directory' },\n        { text: '文件夹1.2', type: 'directory', children: [\n            { text: '文件1.2.1', type: 'file' },\n            { text: '文件1.2.2', type: 'file' },\n        ] },\n        { text: '文件1.3', type: 'file' },\n        { text: '文件1.4', type: 'file' },\n    ] },\n    { text: '文件夹2', type: 'directory' },\n    { text: '文件夹3', type: 'directory', children: [\n        { text: '文件3.1', type: 'file' },\n        { text: '文件3.2', type: 'file' },\n    ] },\n]\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot-scope")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ node, expanded, text }\"")]), _vm._v(">")]), _vm._v("\n        {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}\n        {{ text }}\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('p', [_vm._v("但"), _c('code', {
    pre: true
  }, [_vm._v("text")]), _vm._v("作用域插槽只支持扩展text文本内容，如果您的需求更加复杂，建议直接通过继承TreeView相关组件来实现。")]), _c('h3', [_vm._v("选项值")]), _c('h4', [_vm._v("Tag方式")]), _c('anonymous-cd913038', {
    ref: "anonymous-cd913038"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.2\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.2\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h4', [_vm._v("Data方式")]), _c('anonymous-d03be092', {
    ref: "anonymous-d03be092"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1.2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[\n    { text: '节点1', value: '1', children: [\n        { text: '节点1.1', value: '1.1' },\n        { text: '节点1.2', value: '1.2', children: [\n            { text: '节点1.2.1', value: '1.2.1' },\n            { text: '节点1.2.2', value: '1.2.2' },\n        ] },\n        { text: '节点1.3', value: '1.3' },\n        { text: '节点1.4', value: '1.4' },\n    ] },\n    { text: '节点2', value: '2' },\n    { text: '节点3', value: '3', children: [\n        { text: '节点3.1', value: '3.1' },\n        { text: '节点3.2', value: '3.2' },\n    ] },\n]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h3', [_vm._v("只读、禁用、禁用某一项")]), _c('h4', [_vm._v("Tag方式")]), _c('anonymous-1c5adacd', {
    ref: "anonymous-1c5adacd"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("readonly")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h4', [_vm._v("Data方式")]), _c('anonymous-2c33b193', {
    ref: "anonymous-2c33b193"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[\n    { text: '节点1', children: [\n        { text: '节点1.1' },\n        { text: '节点1.2', disabled: true, children: [\n            { text: '节点1.2.1' },\n            { text: '节点1.2.2'}\n        ] },\n        { text: '节点1.3', disabled: true  },\n        { text: '节点1.4' },\n    ] },\n    { text: '节点2', disabled: true  },\n    { text: '节点3', children: [\n        { text: '节点3.1' },\n        { text: '节点3.2'}\n    ]}\n]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h3', [_vm._v("可取消")]), _c('anonymous-65e32703', {
    ref: "anonymous-65e32703"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("cancelable")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.2.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点1.4\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.1\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"节点3.2\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view-node")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n")])]), _c('h3', [_vm._v("多选")]), _c('anonymous-4e0569c2', {
    ref: "anonymous-4e0569c2"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"treeView\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checkable")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"data\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("{{ data }}"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    data() {\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": [\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("children")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("children")]), _vm._v(": [\n                        { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2.1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                        { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2.2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" }\n                    ] },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.3'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.4'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                ] },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点3'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n            ],\n        };\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _c('h2', [_vm._v("案例")]), _c('h3', [_vm._v("多选")]), _c('anonymous-1df9cd64', {
    ref: "anonymous-1df9cd64"
  }), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"treeView\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checkable")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"data\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-tree-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" @"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkAll(true)\"")]), _vm._v(">")]), _vm._v("全部选中"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" @"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkAll(false)\"")]), _vm._v(">")]), _vm._v("全部取消"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" @"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"toggleAll(true)\"")]), _vm._v(">")]), _vm._v("全部展开"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" @"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"toggleAll(false)\"")]), _vm._v(">")]), _vm._v("全部取消"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("{{ data }}"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    data() {\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": [\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("children")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("children")]), _vm._v(": [\n                        { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2.1'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                        { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.2.2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" }\n                    ] },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.3'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点1.4'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                ] },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点2'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("text")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'节点3'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("expanded")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(" },\n            ],\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        checkAll(checked) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.treeView.checkAll(checked);\n        },\n        toggleAll(expanded) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.treeView.toggleAll(expanded);\n        }\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _c('h2', [_vm._v("TreeView API")]), _c('h3', [_vm._v("Attrs/Props")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Default")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("data")]), _c('td', [_vm._v("Array<{ text, value }>")]), _c('td'), _c('td', [_vm._v("Data书写方式中的数据列表")])]), _c('tr', [_c('td', [_vm._v("value.sync, v-model")]), _c('td', [_vm._v("Any")]), _c('td'), _c('td', [_vm._v("当前选择的值")])]), _c('tr', [_c('td', [_vm._v("field")]), _c('td', [_vm._v("String")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("'text'")])]), _c('td', [_vm._v("显示文本字段")])]), _c('tr', [_c('td', [_vm._v("cancelable")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("是否可以取消选择")])]), _c('tr', [_c('td', [_vm._v("checkable")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("是否可以选中/取消")])]), _c('tr', [_c('td', [_vm._v("readonly")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("是否只读")])]), _c('tr', [_c('td', [_vm._v("disabled")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("是否禁用")])])])]), _c('h3', [_vm._v("Slots")]), _c('h4', [_vm._v("(default)")]), _c('p', [_vm._v("在插槽中插入"), _c('code', {
    pre: true
  }, [_vm._v("<u-tree-view-node>")]), _vm._v("子组件")]), _c('h3', [_vm._v("Events")]), _c('h4', [_vm._v("@before-select")]), _c('p', [_vm._v("选择某一项前触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.value")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("选择项的值")])]), _c('tr', [_c('td', [_vm._v("$event.oldValue")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("旧的值")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("选择项相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("选择项子组件")])]), _c('tr', [_c('td', [_vm._v("$event.preventDefault")]), _c('td', [_vm._v("Function")]), _c('td', [_vm._v("阻止选择流程")])])])]), _c('h4', [_vm._v("@input")]), _c('p', [_vm._v("选择某一项时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("选择项的值")])])])]), _c('h4', [_vm._v("@select")]), _c('p', [_vm._v("选择某一项时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.value")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("改变后的值")])]), _c('tr', [_c('td', [_vm._v("$event.oldValue")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("旧的值")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("选择项相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("选择项子组件")])])])]), _c('h4', [_vm._v("@toggle")]), _c('p', [_vm._v("展开/收起某节点时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.expanded")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("展开/收起状态")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("节点相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("节点组件")])])])]), _c('h4', [_vm._v("@check")]), _c('p', [_vm._v("选中/取消节点时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.checked")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("选中/取消状态")])]), _c('tr', [_c('td', [_vm._v("$event.oldChecked")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("旧的选中/取消状态")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("节点相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("节点组件")])])])]), _c('h3', [_vm._v("Methods")]), _c('h4', [_vm._v("toggleAll(expanded)")]), _c('p', [_vm._v("展开/收起所有节点")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("expanded")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("展开/收起")])])])]), _c('h4', [_vm._v("checkAll(checked)")]), _c('p', [_vm._v("选中/取消所有节点")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("expanded")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("选中/取消")])])])]), _c('h2', [_vm._v("TreeViewNode API")]), _c('h3', [_vm._v("Attrs/Props")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Default")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("value")]), _c('td', [_vm._v("Any")]), _c('td'), _c('td', [_vm._v("此项的值")])]), _c('tr', [_c('td', [_vm._v("expanded.sync")]), _c('td', [_vm._v("Any")]), _c('td'), _c('td', [_vm._v("展开/收起状态")])]), _c('tr', [_c('td', [_vm._v("checked.sync")]), _c('td', [_vm._v("Any")]), _c('td'), _c('td', [_vm._v("选中/取消状态")])]), _c('tr', [_c('td', [_vm._v("disabled")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("禁用此项")])]), _c('tr', [_c('td', [_vm._v("node")]), _c('td', [_vm._v("Object")]), _c('td'), _c('td', [_vm._v("相关对象。当选择此项时，抛出的事件会传递该对象，便于开发")])])])]), _c('h3', [_vm._v("Slots")]), _c('h4', [_vm._v("(default)")]), _c('p', [_vm._v("在插槽中插入文本或HTML")]), _c('h3', [_vm._v("Events")]), _c('h4', [_vm._v("@before-select")]), _c('p', [_vm._v("选择此项前触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.value")]), _c('td', [_vm._v("Any")]), _c('td', [_vm._v("此项的值")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("此项的相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("此组件")])]), _c('tr', [_c('td', [_vm._v("$event.preventDefault")]), _c('td', [_vm._v("Function")]), _c('td', [_vm._v("阻止选择流程")])])])]), _c('h4', [_vm._v("@before-toggle")]), _c('p', [_vm._v("展开/收起此节点前触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.expanded")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("展开/收起状态")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("节点相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("节点组件")])]), _c('tr', [_c('td', [_vm._v("$event.preventDefault")]), _c('td', [_vm._v("Function")]), _c('td', [_vm._v("阻止选择流程")])])])]), _c('h4', [_vm._v("@toggle")]), _c('p', [_vm._v("展开/收起某节点时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.expanded")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("展开/收起状态")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("节点相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("节点组件")])])])]), _c('h4', [_vm._v("@check")]), _c('p', [_vm._v("选中节点时触发")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Param")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("$event.checked")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("选中状态")])]), _c('tr', [_c('td', [_vm._v("$event.oldChecked")]), _c('td', [_vm._v("Boolean")]), _c('td', [_vm._v("旧的选中状态")])]), _c('tr', [_c('td', [_vm._v("$event.node")]), _c('td', [_vm._v("Object")]), _c('td', [_vm._v("节点相关对象")])]), _c('tr', [_c('td', [_vm._v("$event.nodeVM")]), _c('td', [_vm._v("TreeViewNode")]), _c('td', [_vm._v("节点组件")])])])])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});