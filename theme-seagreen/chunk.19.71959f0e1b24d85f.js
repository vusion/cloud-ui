webpackJsonp([19],{

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(675);

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_1b82440b_hasScoped_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(676);
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_1b82440b_hasScoped_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("分页器（Pagination）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pagination', {
    attrs: {
      "total": 11
    }
  }), _c('u-pagination', {
    attrs: {
      "total": 11,
      "page": 6
    }
  })], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":total")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pagination")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":total")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":page")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"6\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pagination")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("显示数目")]), _vm._v(" "), _c('p', [_vm._v("使用"), _c('code', {
    pre: true
  }, [_vm._v("side")]), _vm._v("和"), _c('code', {
    pre: true
  }, [_vm._v("around")]), _vm._v("属性可以改变显示的数目。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pagination', {
    attrs: {
      "total": 11,
      "page": 6,
      "side": 1,
      "around": 3
    }
  })], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":total")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":page")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"6\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":side")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":around")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-pagination")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-pagination', {
    attrs: {
      "total": 11,
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-pagination")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":total")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("u-pagination")]), _vm._v(">")]), _vm._v("\n")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});