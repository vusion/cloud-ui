/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.ttf","md5":"c8e66daa37b2da9fd8a843ab93e229d5"},"eot":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.eot","md5":"a5f01fa1b80f96efb2269a1b0aaed511"},"woff":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.woff","md5":"72ca0d256122c1b43b0c285361e649b3"},"svg":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.svg","md5":"614ac493fb7351ae90a1f86957a8e845"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.ttf","md5":"c8e66daa37b2da9fd8a843ab93e229d5"},"eot":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.eot","md5":"a5f01fa1b80f96efb2269a1b0aaed511"},"woff":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.woff","md5":"72ca0d256122c1b43b0c285361e649b3"},"svg":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.svg","md5":"614ac493fb7351ae90a1f86957a8e845"}});
                                }webpackJsonp([14],{

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig||window.ICON_FONT_STYLE,
        fontName = style.name,  srcStr = [];

    for(var name in style){
        var path  = style[name].path,hash = style[name].md5;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+path+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+path+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+path+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+path+'?'+hash+'#'+fontName+'") format("svg")');
                    break;
                default:
                    break;
            }
        }
    }
    srcStr = srcStr.join(",\n\t");
    return '@font-face {\n\tfont-family: "'+fontName+'";\n\tsrc:'+srcStr+";\n}";
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'),headElement  = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
    if(headElement){
        headElement.appendChild(styleTag);
    }else{
        window.addEventListener('load',() => {
            headElement.appendChild(styleTag);
        })
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if(!styleTag){
        addStyle(fontConfig);
    }else{
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports= function() {
    if(window.HAS_CREATE_FONT_STYLE){
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(731);

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_795141d7_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(733);
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_795141d7_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 732:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: '#EE867D',
            options: [{
                value: '#EE867D'
            }, {
                value: '#805DCF'
            }, {
                value: '#40CCCA'
            }, {
                value: '#FFCA12'
            }, {
                value: '#30A8DC'
            }, {
                value: '#E1AEF6'
            }, {
                value: '#D2D2D2'
            }]
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    }
});

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("颜色选择扩展（SelectColor）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('h3', [_vm._v("方法")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-color-select', {
      attrs: {
        "options": _vm.options,
        "value": _vm.value
      },
      on: {
        "select": function($event) {
          _vm.select($event.value)
        }
      }
    })]
  ], 2), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-color-select")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"options\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"value\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@select")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"select($event.value)\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-color-select")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#EE867D'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("options")]), _vm._v(": [\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#EE867D'")]), _vm._v(",\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#805DCF'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#40CCCA'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#FFCA12'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#30A8DC'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#E1AEF6'")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#D2D2D2'")]), _vm._v("\n                },\n            ],\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        select(value) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(value);\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".value = value;\n        }\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});