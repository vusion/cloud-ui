/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"c674a3176d4ab1b22cc55deb1a4aed00"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"3e2fe21397a12cc942b3d78a4be49675"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"97cf188ed7d70c560ee613af8e05eefc"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"479f83d2ec7caf3e3dac7b4cb5e8081c"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"c674a3176d4ab1b22cc55deb1a4aed00"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"3e2fe21397a12cc942b3d78a4be49675"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"97cf188ed7d70c560ee613af8e05eefc"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"479f83d2ec7caf3e3dac7b4cb5e8081c"}});
                                }webpackJsonp([44],{

/***/ 637:
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

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(688);

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_0a49d305_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(689);
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
  __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_0a49d305_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("按钮（Button）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-button', [_vm._v("设 置")])], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("设 置"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-button', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("设 置")])], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("设 置"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("颜色扩展")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-button', {
    attrs: {
      "color": "primary"
    }
  }, [_vm._v("立即创建")]), _c('u-button', {
    attrs: {
      "color": "primary",
      "disabled": ""
    }
  }, [_vm._v("立即创建")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("立即创建"), _c('span', {
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
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("大小扩展")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-button', {
    attrs: {
      "size": "small",
      "disabled": ""
    }
  }, [_vm._v("保存")]), _c('u-button', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("创建服务")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"small\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("保存"), _c('span', {
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
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("创建服务"), _c('span', {
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
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("正方形")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-button', {
    attrs: {
      "square": "",
      "icon": "refresh"
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
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("square")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"refresh\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("图标")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-button', {
    attrs: {
      "color": "primary",
      "icon": "create"
    }
  }, [_vm._v("创建实例")]), _c('u-button', {
    attrs: {
      "color": "primary",
      "icon": "loading"
    }
  }, [_vm._v("立即创建")]), _c('u-button', {
    attrs: {
      "color": "primary",
      "icon": "loading",
      "disabled": ""
    }
  }, [_vm._v("立即创建")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"create\"")]), _vm._v(">")]), _vm._v("创建实例"), _c('span', {
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
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"loading\"")]), _vm._v(">")]), _vm._v("立即创建"), _c('span', {
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
  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"loading\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("立即创建"), _c('span', {
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
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("链接")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-button', {
    attrs: {
      "href": "https://github.com/vusion/vusion"
    }
  }, [_vm._v("Button")]), _c('u-button', {
    attrs: {
      "to": "/some/router/path"
    }
  }, [_vm._v("Button")]), _c('u-button', {
    attrs: {
      "href": "https://github.com/vusion/vusion",
      "disabled": ""
    }
  }, [_vm._v("Button")])], 1)], 1), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"https://github.com/vusion/vusion\"")]), _vm._v(">")]), _vm._v("Button"), _c('span', {
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
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("to")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"/some/router/path\"")]), _vm._v(">")]), _vm._v("Button"), _c('span', {
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
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("Button"), _c('span', {
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
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', [_vm._v("API")]), _vm._v(" "), _c('h3', [_vm._v("Attrs/Props")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("href")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("href")]), _vm._v(" property of link")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("target")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("(native property)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("to")]), _vm._v(" "), _c('td', [_vm._v("String | Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("to")]), _vm._v(" property of "), _c('code', {
    pre: true
  }, [_vm._v("vue-router")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("replace")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("append")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("''")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("''")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("square")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("false")])]), _vm._v(" "), _c('td', [_vm._v("Disable the button")])])])]), _vm._v(" "), _c('h3', [_vm._v("Slots")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Slot")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("(default)")]), _vm._v(" "), _c('td', [_vm._v("Hold the text and can contain HTML")])])])]), _vm._v(" "), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('h4', [_vm._v("$listeners")]), _vm._v(" "), _c('p', [_vm._v("Inherit all events from "), _c('code', {
    pre: true
  }, [_vm._v("<a>")]), _vm._v(" element.")]), _vm._v(" "), _c('h4', [_vm._v("@click")]), _vm._v(" "), _c('h4', [_vm._v("@navigate")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});