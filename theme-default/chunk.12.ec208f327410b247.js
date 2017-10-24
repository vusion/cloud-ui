/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","ttf":{"url":"/cloud-ui/theme-default/vusion-icon-font.ttf","hash":"f4e3b1920ed1d4d72c2527c2e548346c"},"eot":{"url":"/cloud-ui/theme-default/vusion-icon-font.eot","hash":"0210344b0ff917edd1d1fb530066620e"},"woff":{"url":"/cloud-ui/theme-default/vusion-icon-font.woff","hash":"5f71bcf553183e8aa77b24d4c9ecdffd"},"svg":{"url":"/cloud-ui/theme-default/vusion-icon-font.svg","hash":"e1bbb7e0ce5ae32d57495c645c36821a"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","ttf":{"url":"/cloud-ui/theme-default/vusion-icon-font.ttf","hash":"f4e3b1920ed1d4d72c2527c2e548346c"},"eot":{"url":"/cloud-ui/theme-default/vusion-icon-font.eot","hash":"0210344b0ff917edd1d1fb530066620e"},"woff":{"url":"/cloud-ui/theme-default/vusion-icon-font.woff","hash":"5f71bcf553183e8aa77b24d4c9ecdffd"},"svg":{"url":"/cloud-ui/theme-default/vusion-icon-font.svg","hash":"e1bbb7e0ce5ae32d57495c645c36821a"}});
                                }webpackJsonp([12],{

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig || window.ICON_FONT_STYLE;
    var fontName = style.fontName;
    var srcStr = [];

    for(var name in style) {
        var url = style[name].url;
        var hash = style[name].hash;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+url+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+url+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+url+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+url+'?'+hash+'#'+fontName+'") format("svg")');
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
    var styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
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

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(760);

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ebb37b06_hasScoped_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(762);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_ebb37b06_hasScoped_false_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 761:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' }, { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' }, { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' }, { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' }]
        };
    }
});

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("表单")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-form', [_c('u-form-item', {
    attrs: {
      "title": "计费方式"
    }
  }), _c('u-form-item', {
    attrs: {
      "title": "实例名称"
    }
  }, [_c('u-input', {
    attrs: {
      "size": "huge",
      "maxlength": "63",
      "placeholder": "由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"
    }
  })], 1), _c('u-form-item', {
    attrs: {
      "title": "规格"
    }
  }, [_c('u-capsules', {
    attrs: {
      "value": "0101"
    }
  }, [_c('u-capsule', {
    attrs: {
      "value": "0101"
    }
  }, [_vm._v("1核 1GB")]), _c('u-capsule', {
    attrs: {
      "value": "0102"
    }
  }, [_vm._v("1核 2GB")]), _c('u-capsule', {
    attrs: {
      "value": "0204"
    }
  }, [_vm._v("2核 4GB")]), _c('u-capsule', {
    attrs: {
      "value": "0408"
    }
  }, [_vm._v("4核 8GB")]), _c('u-capsule', {
    attrs: {
      "value": "0816"
    }
  }, [_vm._v("8核 16GB")]), _c('u-capsule', {
    attrs: {
      "value": "0832"
    }
  }, [_vm._v("8核 32GB")]), _c('u-capsule', {
    attrs: {
      "value": "1664"
    }
  }, [_vm._v("16核 64GB")])], 1)], 1), _c('u-form-item', {
    attrs: {
      "title": "端口号"
    }
  }, [_c('u-input', {
    attrs: {
      "size": "huge",
      "maxlength": "5",
      "placeholder": "1150-65535",
      "value": "3306"
    }
  })], 1), _c('u-form-item', {
    attrs: {
      "title": "详情"
    }
  }, [_c('u-textarea', {
    attrs: {
      "size": "huge"
    }
  })], 1), _c('u-form-item', [_c('u-button', {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("立即创建")])], 1)], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"计费方式\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"实例名称\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"63\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"规格\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsules")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0101\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0101\"")]), _vm._v(">")]), _vm._v("1核 1GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0102\"")]), _vm._v(">")]), _vm._v("1核 2GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0204\"")]), _vm._v(">")]), _vm._v("2核 4GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0408\"")]), _vm._v(">")]), _vm._v("4核 8GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0816\"")]), _vm._v(">")]), _vm._v("8核 16GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"0832\"")]), _vm._v(">")]), _vm._v("8核 32GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1664\"")]), _vm._v(">")]), _vm._v("16核 64GB"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsule")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-capsules")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"端口号\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"5\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"1150-65535\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"3306\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"详情\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-textarea")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- u-form-item title=\"表格\" layout=\"block\">\n        <u-table-view :data=\"[{\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄',\n        }, {\n            date: '2016-05-04',\n            name: '王大虎',\n            address: '上海市普陀区金沙江路 1517 弄'\n        }, {\n            date: '2016-05-01',\n            name: '天王盖地虎',\n            address: '上海市普陀区金沙江路 1519 弄'\n        }, {\n            date: '2016-05-03',\n            name: '小鸡炖蘑菇',\n            address: '上海市普陀区金沙江路 1516 弄'\n        }]\">\n            <u-table-view-column title=\"日期\" label=\"date\" sortable></u-table-view-column>\n            <u-table-view-column title=\"姓名\" label=\"name\"></u-table-view-column>\n            <u-table-view-column title=\"地址\" label=\"address\"></u-table-view-column>\n        </u-table-view>\n    </u-form-item -->")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("立即创建"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("行内")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-form', {
    attrs: {
      "layout": "inline",
      "label-size": "auto"
    }
  }, [_c('u-form-item', {
    attrs: {
      "title": "状态"
    }
  }, [_c('u-input', {
    attrs: {
      "maxlength": "63",
      "placeholder": "认证中"
    }
  })], 1), _c('u-form-item', {
    attrs: {
      "title": "用户名"
    }
  }, [_c('u-input', {
    attrs: {
      "maxlength": "63",
      "placeholder": "请输入用户名"
    }
  })], 1), _c('u-form-item', {
    attrs: {
      "title": "联系号码"
    }
  }, [_c('u-input', {
    attrs: {
      "maxlength": "63",
      "placeholder": "请输入联系号码"
    }
  })], 1), _c('u-form-item', [_c('u-button', {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("layout")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"inline\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label-size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"auto\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"状态\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"63\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"认证中\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"63\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入用户名\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"联系号码\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"63\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入联系号码\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("查询"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', [_vm._v("表单验证")]), _vm._v(" "), _c('h3', [_vm._v("规则列表")]), _vm._v(" "), _c('p', [_vm._v("每个表单项的验证行为用一个有序列表"), _c('code', {
    pre: true
  }, [_vm._v("rules")]), _vm._v("来声明，列表中包含若干条验证规则。结构如下：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-javascript"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("[{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", ... }, { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": ... }, { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": ... }, ...]\n")])]), _vm._v(" "), _c('p', [_vm._v("每条规则至少包含以下几个参数：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("type")]), _vm._v("：数据类型")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("trigger")]), _vm._v("：触发方式")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("message")]), _vm._v("：验证不通过时的消息提示")]), _vm._v(" "), _c('li', [_vm._v("...")])]), _vm._v(" "), _c('p', [_vm._v("下面举个例子，一个用户名输入框的验证包含以下规则：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("必须输入用户名，失焦验证")]), _vm._v(" "), _c('li', [_vm._v("以字母开头，实时验证")]), _vm._v(" "), _c('li', [_vm._v("字母、数字或中划线组成，实时验证")]), _vm._v(" "), _c('li', [_vm._v("以字母或数字结尾，失焦验证")]), _vm._v(" "), _c('li', [_vm._v("4~12个字符，失焦验证")])]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "rules": _vm.rules
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "112",
        "placeholder": "4~12位字母、数字或中划线组成"
      }
    })], 1)]
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
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"112\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12位字母、数字或中划线组成\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("rules")]), _vm._v(": [\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^[a-zA-Z]/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'以字母开头'")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^[a-zA-Z0-9-]+$/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'字母、数字或中划线组成'")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/[a-zA-Z0-9]$/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'以字母或数字结尾'")]), _vm._v(" },\n                { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'不得少于4个字符'")]), _vm._v(" },\n            ],\n        };\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', [_vm._v("多字段的规则列表")]), _vm._v(" "), _c('p', [_vm._v("如果一个表单多个字段有规则列表，可以在"), _c('code', {
    pre: true
  }, [_vm._v("u-form")]), _vm._v("中汇总传入。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      }
    })], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("数据类型")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', {
    pre: true
  }, [_vm._v("string")]), _vm._v(": Must be of type string. This is the default type.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("number")]), _vm._v(": Must be of type number.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("boolean")]), _vm._v(": Must be of type boolean.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("method")]), _vm._v(": Must be of type function.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("regexp")]), _vm._v(": Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("integer")]), _vm._v(": Must be of type number and an integer.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("float")]), _vm._v(": Must be of type number and a floating point number.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("array")]), _vm._v(": Must be an array as determined by Array.isArray.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("object")]), _vm._v(": Must be of type object and not Array.isArray.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("enum")]), _vm._v(": Value must exist in the enum.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("date")]), _vm._v(": Value must be valid as determined by Date")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("url")]), _vm._v(": Must be of type url.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("hex")]), _vm._v(": Must be of type hex.")]), _vm._v(" "), _c('li', [_c('code', {
    pre: true
  }, [_vm._v("email")]), _vm._v(": Must be of type email.")])]), _vm._v(" "), _c('p', [_vm._v("其它请参见"), _c('u-link', {
    attrs: {
      "href": "https://github.com/yiminghe/async-validator"
    }
  }, [_vm._v("async-validator")]), _vm._v("。")], 1), _vm._v(" "), _c('h3', [_vm._v("触发方式")]), _vm._v(" "), _c('p', [_vm._v("表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则"), _c('code', {
    pre: true
  }, [_vm._v("trigger")]), _vm._v("的三种触发方式："), _c('code', {
    pre: true
  }, [_vm._v("submit")]), _vm._v(", "), _c('code', {
    pre: true
  }, [_vm._v("blur")]), _vm._v(", "), _c('code', {
    pre: true
  }, [_vm._v("input")]), _vm._v("，规则中默认为"), _c('code', {
    pre: true
  }, [_vm._v("submit")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。")]), _vm._v(" "), _c('h4', [_vm._v("提交验证")]), _vm._v(" "), _c('p', [_vm._v("点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的"), _c('code', {
    pre: true
  }, [_vm._v("click")]), _vm._v("事件。示例如下：")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      }
    })], 1), _c('u-form-item', [_c('u-button', {
      attrs: {
        "color": "primary"
      },
      on: {
        "click": function($event) {
          _vm.submit()
        }
      }
    }, [_vm._v("提交")])], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"submit()\"")]), _vm._v(">")]), _vm._v("提交"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        submit() {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.form.validate()\n                .then("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" alert("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'提交成功'")]), _vm._v("))\n                .catch("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {});\n        },\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', [_vm._v("失焦验证")]), _vm._v(" "), _c('p', [_vm._v("在表单控件失去焦点时对该控件进行验证，通常对应表单控件的"), _c('code', {
    pre: true
  }, [_vm._v("blur")]), _vm._v("事件。示例如下：")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      }
    })], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', [_vm._v("实时验证")]), _vm._v(" "), _c('p', [_vm._v("在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的"), _c('code', {
    pre: true
  }, [_vm._v("input")]), _vm._v("事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式"), _c('code', {
    pre: true
  }, [_vm._v("input+blur")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      }
    })], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', [_vm._v("表单限制")]), _vm._v(" "), _c('p', [_vm._v("在表单控件的值改变时，对该值限制在规定的长度或范围内，如"), _c('code', {
    pre: true
  }, [_vm._v("<input>")]), _vm._v("控件的部分"), _c('code', {
    pre: true
  }, [_vm._v("type")]), _vm._v("和"), _c('code', {
    pre: true
  }, [_vm._v("maxlength")]), _vm._v("的限制行为等：")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-form', [_c('u-form-item', {
    attrs: {
      "title": "用户名"
    }
  }, [_c('u-input', {
    attrs: {
      "size": "huge",
      "maxlength": "4",
      "placeholder": "不超过4个字符"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"不超过4个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("通过设置"), _c('code', {
    pre: true
  }, [_vm._v("maxlength-message")]), _vm._v("属性，可以在已输入至最大长度的情况下继续输入时，给用户提示消息。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-form', {
    ref: "form"
  }, [_c('u-form-item', {
    attrs: {
      "title": "用户名"
    }
  }, [_c('u-input', {
    attrs: {
      "maxlength": "4",
      "maxlength-message": "不超过4个字符",
      "placeholder": "不超过4个字符"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength-message")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"不超过4个字符\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"不超过4个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', [_vm._v("案例")]), _vm._v(" "), _c('p', [_vm._v("前面的示例只是局部展示组件库表单验证体系的使用方法，达到的效果不一定符合实际情况。下面举几种比较合理的案例：")]), _vm._v(" "), _c('p', [_vm._v("按照表单提交按钮在什么情况下可点击，可以分为以下几种常见且比较合理的情况：始终可点、必填项有内容可点、所有项内容正确时才可点。")]), _vm._v(" "), _c('h3', [_vm._v("始终可点")]), _vm._v(" "), _c('p', [_vm._v("表单提交按钮始终可点。")]), _vm._v(" "), _c('p', [_vm._v("表现为表单中所有控件的所有行为必须进行提交验证，适当采用失焦和实时验证加以帮助。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      },
      model: {
        value: (_vm.model.username),
        callback: function($$v) {
          _vm.$set(_vm.model, "username", $$v)
        },
        expression: "model.username"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      },
      model: {
        value: (_vm.model.email),
        callback: function($$v) {
          _vm.$set(_vm.model, "email", $$v)
        },
        expression: "model.email"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "手机号码",
        "name": "phone"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "11",
        "placeholder": "请输入手机号码"
      },
      model: {
        value: (_vm.model.phone),
        callback: function($$v) {
          _vm.$set(_vm.model, "phone", $$v)
        },
        expression: "model.phone"
      }
    })], 1), _c('u-form-item', [_c('u-button', {
      attrs: {
        "color": "primary"
      },
      on: {
        "click": function($event) {
          _vm.submit()
        }
      }
    }, [_vm._v("提交")])], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.username\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"手机号码\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"phone\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.phone\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入手机号码\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"submit()\"")]), _vm._v(">")]), _vm._v("提交"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("model")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            },\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^\\d{11}$/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'手机号码格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        submit() {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.form.validate()\n                .then("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" alert("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'提交成功'")]), _vm._v("))\n                .catch("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {});\n        },\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("必填项有内容可点")]), _vm._v(" "), _c('p', [_vm._v("当表单中所有必填项有内容时，表单提交按钮才可点。")]), _vm._v(" "), _c('p', [_vm._v("表现为根据表单中必填项是否为空，使用计算属性来实时判断提交按钮是否可点。并且在这种情况下，通常采用三种验证相结合的方式。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      },
      model: {
        value: (_vm.model.username),
        callback: function($$v) {
          _vm.$set(_vm.model, "username", $$v)
        },
        expression: "model.username"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      },
      model: {
        value: (_vm.model.email),
        callback: function($$v) {
          _vm.$set(_vm.model, "email", $$v)
        },
        expression: "model.email"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "手机号码",
        "name": "phone"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "11",
        "placeholder": "请输入手机号码"
      },
      model: {
        value: (_vm.model.phone),
        callback: function($$v) {
          _vm.$set(_vm.model, "phone", $$v)
        },
        expression: "model.phone"
      }
    })], 1), _c('u-form-item', [_c('u-button', {
      attrs: {
        "color": "primary",
        "disabled": !_vm.canSubmit
      },
      on: {
        "click": function($event) {
          _vm.submit()
        }
      }
    }, [_vm._v("提交")])], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.username\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"手机号码\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"phone\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.phone\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入手机号码\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"!canSubmit\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"submit()\"")]), _vm._v(">")]), _vm._v("提交"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("model")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            },\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^\\d{11}$/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'手机号码格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("computed")]), _vm._v(": {\n        canSubmit() {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".model.username && "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".model.email;\n        },\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        submit() {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.form.validate()\n                .then("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" alert("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'提交成功'")]), _vm._v("))\n                .catch("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {});\n        },\n    },\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("所有项内容正确可点")]), _vm._v(" "), _c('p', [_vm._v("当表单中所有项内容均符合要求时，表单提交按钮才可点。")]), _vm._v(" "), _c('p', [_vm._v("表现为根据每个表单控件的验证结果，使用计算属性来实时判断提交按钮是否可点。这种情况下，一般就不需要进行提交验证了。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-form', {
      ref: "form",
      attrs: {
        "rules": _vm.rules
      },
      on: {
        "validate": function($event) {
          _vm.canSubmit = $event
        }
      }
    }, [_c('u-form-item', {
      attrs: {
        "title": "用户名",
        "name": "username"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "12",
        "placeholder": "4~12个字符"
      },
      model: {
        value: (_vm.model.username),
        callback: function($$v) {
          _vm.$set(_vm.model, "username", $$v)
        },
        expression: "model.username"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "邮箱",
        "name": "email"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "24",
        "placeholder": "请输入邮箱"
      },
      model: {
        value: (_vm.model.email),
        callback: function($$v) {
          _vm.$set(_vm.model, "email", $$v)
        },
        expression: "model.email"
      }
    })], 1), _c('u-form-item', {
      attrs: {
        "title": "手机号码",
        "name": "phone"
      }
    }, [_c('u-input', {
      attrs: {
        "size": "huge",
        "maxlength": "11",
        "placeholder": "请输入手机号码"
      },
      model: {
        value: (_vm.model.phone),
        callback: function($$v) {
          _vm.$set(_vm.model, "phone", $$v)
        },
        expression: "model.phone"
      }
    })], 1), _c('u-form-item', [_c('u-button', {
      attrs: {
        "color": "primary",
        "disabled": !_vm.canSubmit
      },
      on: {
        "click": function($event) {
          _vm.submit()
        }
      }
    }, [_vm._v("提交")])], 1)], 1)]
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
  }, [_vm._v("u-form")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"form\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":rules")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"rules\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@validate")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"canSubmit = $event\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"用户名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"username\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.username\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"12\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"4~12个字符\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"邮箱\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"24\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入邮箱\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"手机号码\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"phone\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"huge\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"model.phone\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("maxlength")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"11\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"请输入手机号码\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-input")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("color")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"!canSubmit\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"submit()\"")]), _vm._v(">")]), _vm._v("提交"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form-item")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-form")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("canSubmit")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("model")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            },\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("rules")]), _vm._v(": {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("username")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入用户名'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("max")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入4~12个字符'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("email")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("required")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'请输入邮箱'")]), _vm._v(" },\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'email'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'邮箱格式不正确'")]), _vm._v(" },\n                ],\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("phone")]), _vm._v(": [\n                    { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("pattern")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-regexp"
    }
  }, [_vm._v("/^\\d{11}$/")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'input+blur'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("message")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'手机号码格式不正确'")]), _vm._v(" },\n                ],\n            },\n        };\n    },\n    mounted() {\n        "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// 必须初始化时或在获取数据到时安静验证一次")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.form.validate("), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(")\n            .catch("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {});\n        "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// 在获取数据到时如下")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("// this.getData().then(...)")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//  .then(() => this.$refs.form.validate(true))")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//  .catch(() => {});")]), _vm._v("\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        submit() {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.form.validate()\n                .then("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" alert("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'提交成功'")]), _vm._v("))\n                .catch("), _c('span', {
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {});\n        },\n    },\n};\n")]), _c('span', {
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