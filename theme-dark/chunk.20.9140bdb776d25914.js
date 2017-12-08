/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([20],{

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

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7faefe06_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(928);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7faefe06_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_droppable_vue_README_md_0_687e22_vue__ = __webpack_require__(925);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'C687e22': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_node_modules_proto_ui_vusion_src_u_droppable_vue_README_md_0_687e22_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_687e22_vue__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_744d3726_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_687e22_vue__ = __webpack_require__(927);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_687e22_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_744d3726_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_687e22_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 926:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            color: ''
        };
    }
});

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-draggable',{attrs:{"value":"primary"}},[_c('u-block',{attrs:{"size":"normal","color":"primary","inline":""}},[_vm._v("拖我")])],1),_c('u-draggable',{attrs:{"value":"success"}},[_c('u-block',{attrs:{"size":"normal","color":"success","inline":""}},[_vm._v("拖我")])],1),_c('u-draggable',{attrs:{"value":"error"}},[_c('u-block',{attrs:{"size":"normal","color":"error","inline":""}},[_vm._v("拖我")])],1),_c('p'),_c('u-droppable',{on:{"drop":function($event){_vm.color = $event.value}}},[_c('u-block',{attrs:{"size":"normal","color":_vm.color}},[_vm._v("放到这里")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("放置 Draggable")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('C687e22')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("拖我"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"success\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"success\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("拖我"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"error\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"error\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("inline")]),_vm._v(">")]),_vm._v("拖我"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-draggable")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-droppable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@drop")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"color = $event.value\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"normal\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"color\"")]),_vm._v(">")]),_vm._v("放到这里"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-block")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-droppable")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入可以放置的元素，仅一个。")]),_c('h4',[_vm._v("transfer")]),_c('p',[_vm._v("自定义的移动元素。")]),_c('h4',[_vm._v("@dragenter")]),_c('p',[_vm._v("拖拽进入该元素时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.targetEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("放置目标元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h4',[_vm._v("@dragleave")]),_c('p',[_vm._v("拖拽离开该元素时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.targetEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("放置目标元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h4',[_vm._v("@dragover")]),_c('p',[_vm._v("拖拽在该元素上方时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.targetEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("放置目标元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.ratioX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于接收元素所占的长度比")])]),_c('tr',[_c('td',[_vm._v("$event.ratioY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于接收元素所占的高度比")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h4',[_vm._v("@drop")]),_c('p',[_vm._v("拖拽放置时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.originVM")]),_c('td',[_vm._v("VueComponent")]),_c('td',[_vm._v("拖拽源，为当前的"),_c('code',{pre:true},[_vm._v("<u-draggable>")])])]),_c('tr',[_c('td',[_vm._v("$event.sourceEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽起始元素")])]),_c('tr',[_c('td',[_vm._v("$event.transferEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("拖拽移动元素")])]),_c('tr',[_c('td',[_vm._v("$event.targetEl")]),_c('td',[_vm._v("Element")]),_c('td',[_vm._v("放置目标元素")])]),_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("需要传递的值")])]),_c('tr',[_c('td',[_vm._v("$event.ratioX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于接收元素所占的长度比")])]),_c('tr',[_c('td',[_vm._v("$event.ratioY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于接收元素所占的高度比")])]),_c('tr',[_c('td',[_vm._v("$event.screenX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.screenY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于屏幕的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.clientY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于浏览器的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.pageY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("鼠标指针相对于页面的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的水平坐标")])]),_c('tr',[_c('td',[_vm._v("$event.startY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时鼠标指针的垂直坐标")])]),_c('tr',[_c('td',[_vm._v("$event.dragX")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),_c('tr',[_c('td',[_vm._v("$event.dragY")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),_c('tr',[_c('td',[_vm._v("$event.startLeft")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.startTop")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽开始时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.left")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的left值")])]),_c('tr',[_c('td',[_vm._v("$event.top")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("拖拽时代理元素的top值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止拖拽流程")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("cancel()")]),_c('p',[_vm._v("取消拖拽。")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});