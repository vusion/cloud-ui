/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.ttf","md5":"3a0a2d5805181198a80fcdd1bde59dff"},"eot":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.eot","md5":"09224112e93771276999a255b7d43f4e"},"woff":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.woff","md5":"bfbbe316c2b4f1a1bae31d1f15d85713"},"svg":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.svg","md5":"403bc28e6683f85d29a1b7e00f6c1193"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.ttf","md5":"3a0a2d5805181198a80fcdd1bde59dff"},"eot":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.eot","md5":"09224112e93771276999a255b7d43f4e"},"woff":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.woff","md5":"bfbbe316c2b4f1a1bae31d1f15d85713"},"svg":{"path":"\\cloud-ui\\theme-seagreen\\vusion-icon-font.svg","md5":"403bc28e6683f85d29a1b7e00f6c1193"}});
                                }webpackJsonp([7],{

/***/ 641:
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

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(730);

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_5d34bdc1_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(732);
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
  __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_5d34bdc1_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 731:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            value: [],
            options: [{
                value: '选项1',
                name: '黄金糕'
            }, {
                value: '选项2',
                name: '双皮奶'
            }, {
                value: '选项3',
                name: '蚵仔煎'
            }, {
                value: '选项4',
                name: '龙须面'
            }, {
                value: '选项5',
                name: '北京烤鸭'
            }]
        };
    },
    watch: {
        value(newValue) {
            console.log(newValue);
        }
    }
});

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("选择扩展（MultiSelect）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('h3', [_vm._v("方法")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-multi-select', {
      attrs: {
        "options": _vm.options
      },
      model: {
        value: (_vm.value),
        callback: function($$v) {
          _vm.value = $$v
        },
        expression: "value"
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
  }, [_vm._v("u-multi-select")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"value\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-multi-select")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("value")]), _vm._v(": [],\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("options")]), _vm._v(": [{\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'选项1'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'黄金糕'")]), _vm._v("\n            }, {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'选项2'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'双皮奶'")]), _vm._v("\n            }, {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'选项3'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'蚵仔煎'")]), _vm._v("\n            }, {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'选项4'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'龙须面'")]), _vm._v("\n            }, {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'选项5'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'北京烤鸭'")]), _vm._v(",\n            }],\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("watch")]), _vm._v(": {\n        value(newValue) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(newValue);\n        }\n    }\n};\n")]), _c('span', {
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