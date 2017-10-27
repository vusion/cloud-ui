/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?29c3d9029f77b2b3e1d3497cf1a3dba4\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?29c3d9029f77b2b3e1d3497cf1a3dba4#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?29c3d9029f77b2b3e1d3497cf1a3dba4\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?29c3d9029f77b2b3e1d3497cf1a3dba4#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-default/vusion-icon-font.ttf?29c3d9029f77b2b3e1d3497cf1a3dba4\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.eot?29c3d9029f77b2b3e1d3497cf1a3dba4#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.woff?29c3d9029f77b2b3e1d3497cf1a3dba4\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-default/vusion-icon-font.svg?29c3d9029f77b2b3e1d3497cf1a3dba4#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([27],{

/***/ 653:
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

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_07980f33_hasScoped_false_preserveWhitespace_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(705);
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_07980f33_hasScoped_false_preserveWhitespace_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 704:
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
/* harmony default export */ __webpack_exports__["a"] = ({ components: { 'anonymous-447abec6': { "template": "<div class=\"u-example\"><u-link href=\"#\">链接</u-link>&nbsp;<u-link href=\"#\">查看详情</u-link></div>" }, 'anonymous-1d7dac26': { "template": "<div class=\"u-example\"><u-link href=\"#\" disabled>Link</u-link></div>" }, 'anonymous-132c7362': { "template": "<div class=\"u-example\"><u-link href=\"https://github.com/vusion/vusion\" target=\"_blank\">href</u-link>&nbsp;\n<u-link to=\"/some/router/path\">to</u-link></div>" } } });

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("链接（Link）")]), _c('h2', [_vm._v("示例")]), _c('h3', [_vm._v("基本形式")]), _c('anonymous-447abec6', {
    ref: "anonymous-447abec6"
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
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(">")]), _vm._v("链接"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("&nbsp;"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(">")]), _vm._v("查看详情"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _c('h3', [_vm._v("禁用")]), _c('anonymous-1d7dac26', {
    ref: "anonymous-1d7dac26"
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
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("Link"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _c('h3', [_c('code', {
    pre: true
  }, [_vm._v("href")]), _vm._v(" vs "), _c('code', {
    pre: true
  }, [_vm._v("to")])]), _c('anonymous-132c7362', {
    ref: "anonymous-132c7362"
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
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"https://github.com/vusion/vusion\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("target")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"_blank\"")]), _vm._v(">")]), _vm._v("href"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("&nbsp;\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("to")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"/some/router/path\"")]), _vm._v(">")]), _vm._v("to"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-link")]), _vm._v(">")]), _vm._v("\n")])]), _c('h2', [_vm._v("API")]), _c('h3', [_vm._v("Attrs/Props")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _c('th', [_vm._v("Type")]), _c('th', [_vm._v("Default")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("href")]), _c('td', [_vm._v("String")]), _c('td'), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("href")]), _vm._v(" property of link")])]), _c('tr', [_c('td', [_vm._v("target")]), _c('td', [_vm._v("String")]), _c('td'), _c('td', [_vm._v("(native property)")])]), _c('tr', [_c('td', [_vm._v("to")]), _c('td', [_vm._v("String | Object")]), _c('td'), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("to")]), _vm._v(" property of "), _c('code', {
    pre: true
  }, [_vm._v("vue-router")])])]), _c('tr', [_c('td', [_vm._v("replace")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td')]), _c('tr', [_c('td', [_vm._v("append")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td')]), _c('tr', [_c('td', [_vm._v("disabled")]), _c('td', [_vm._v("Boolean")]), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _c('td', [_vm._v("Prevent action of this link")])])])]), _c('h3', [_vm._v("Slots")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Slot")]), _c('th', [_vm._v("Description")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v("(default)")]), _c('td', [_vm._v("Hold the text and can contain HTML")])])])]), _c('h3', [_vm._v("Events")]), _c('h4', [_vm._v("$listeners")]), _c('p', [_vm._v("Inherit all events from "), _c('code', {
    pre: true
  }, [_vm._v("<a>")]), _vm._v(" element.")]), _c('h4', [_vm._v("@click")]), _c('h4', [_vm._v("@navigate")])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});