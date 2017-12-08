/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/cloud-ui/theme-dark/vusion-icon-font.ttf?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"truetype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.eot?b5ff7d8612a51fb67a5f0252ec80e6e0#iefix\") format(\"embedded-opentype\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.woff?b5ff7d8612a51fb67a5f0252ec80e6e0\") format(\"woff\"),\n\turl(\"/cloud-ui/theme-dark/vusion-icon-font.svg?b5ff7d8612a51fb67a5f0252ec80e6e0#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([5],{

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

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3f44e648_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(894);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3f44e648_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_lightbox_vue_README_md_0_63f655_vue__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_lightbox_vue_README_md_1_1cedb6_vue__ = __webpack_require__(891);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'C63f655': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_lightbox_vue_README_md_0_63f655_vue__["a" /* default */],
                                'C1cedb6': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_VusionUI_cloud_ui_vusion_src_u_lightbox_vue_README_md_1_1cedb6_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_63f655_vue__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_64cbbd1c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_63f655_vue__ = __webpack_require__(890);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_0_63f655_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_64cbbd1c_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_0_63f655_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 889:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            visible: false
        };
    }
});

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-lightbox',{attrs:{"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('u-lightbox-item',{attrs:{"title":"图片预览"}},[_c('img',{attrs:{"src":"/images/1.jpg"}})])],1),_c('u-linear-layout',[_c('u-button',{on:{"click":function($event){_vm.visible = true}}},[_vm._v("Open Lightbox")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_1cedb6_vue__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7e4b6b50_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_1cedb6_vue__ = __webpack_require__(893);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_README_md_1_1cedb6_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7e4b6b50_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_README_md_1_1cedb6_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 892:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            visible: false,
            images: [{ src: '/images/1.jpg', title: '图片1' }, { src: '/images/2.jpg', title: '图片2' }],
            showItem: 0
        };
    },
    methods: {
        showLightbox(index) {
            this.visible = true;
            this.showItem = index;
        }
    }
});

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('u-lightbox',{attrs:{"visible":_vm.visible,"index":_vm.showItem,"animation":"fade"},on:{"update:visible":function($event){_vm.visible=$event}}},_vm._l((_vm.images),function(image,index){return _c('u-lightbox-item',{attrs:{"title":image.title}},[_c('img',{attrs:{"src":image.src}})])})),_c('u-linear-layout',_vm._l((_vm.images),function(image,index){return _c('img',{staticStyle:{"width":"300px"},attrs:{"src":image.src},on:{"click":function($event){_vm.showLightbox(index)}}})}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("灯箱 Lightbox")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h4',[_vm._v("灯箱包含单个元素")]),_c('div',{staticClass:"u-example"},[_c('C63f655')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":visible.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"visible\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"图片预览\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("img")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("src")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/images/1.jpg\"")]),_vm._v(" />")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"visible = true\"")]),_vm._v(">")]),_vm._v("Open Lightbox"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("灯箱包含多个元素")]),_c('div',{staticClass:"u-example"},[_c('C1cedb6')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":visible.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"visible\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":index")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"showItem\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("animation")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"fade\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-for")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"(image, index) in images\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"image.title\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("img")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":src")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"image.src\"")]),_vm._v(" />")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("img")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 300px;\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-for")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"(image, index) in images\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":src")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"image.src\"")]),_vm._v("  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"showLightbox(index)\"")]),_vm._v("/>")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-linear-layout")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("images")]),_vm._v(": [{"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("src")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'/images/1.jpg'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'图片1'")]),_vm._v("}, {"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("src")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'/images/2.jpg'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'图片2'")]),_vm._v("}],\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("showItem")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(",\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        showLightbox(index) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".visible = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(";\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".showItem = index;\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("Static")]),_c('div',{staticClass:"u-example"},[_c('u-lightbox',{staticStyle:{"position":"relative","height":"400px"},attrs:{"visible":"","static":"","maskClose":false,"zoomButton":false}},[_c('u-lightbox-item',[_c('video',{staticStyle:{"width":"640px","height":"360px","display":"block"},attrs:{"controls":"","poster":"http://www.html5videoplayer.net/poster/big_buck_bunny.jpg","src":"http://www.html5videoplayer.net/videos/big_buck_bunny.mp4"}})])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":maskClose")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"position:relative; height: 400px;\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":zoomButton")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(">")]),_vm._v(" \n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("video")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("controls")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'width: 640px; height: 360px; display: block;'")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("poster")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'http://www.html5videoplayer.net/poster/big_buck_bunny.jpg'")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("src")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'http://www.html5videoplayer.net/videos/big_buck_bunny.mp4'")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("video")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("关闭按钮和放大缩小按钮")]),_c('div',{staticClass:"u-example"},[_c('u-lightbox',{staticStyle:{"position":"relative","height":"520px"},attrs:{"visible":"","static":"","closeButton":true,"closeOnMask":false}},[_c('u-lightbox-item',[_c('img',{attrs:{"src":"/images/2.jpg"}})])],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("visible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("static")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":closeButton")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":closeOnMask")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"position:relative; height: 520px;\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("img")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("src")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/images/2.jpg\"")]),_vm._v(" />")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-lightbox")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Attrs/Props")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_c('td',[_vm._v("内容标题")])]),_c('tr',[_c('td',[_vm._v("visible.sync")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否显示")])]),_c('tr',[_c('td',[_vm._v("maskClose")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("true")])]),_c('td',[_vm._v("点击遮罩层关闭灯箱")])]),_c('tr',[_c('td',[_vm._v("closeButton")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否显示关闭按钮")])]),_c('tr',[_c('td',[_vm._v("loop")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否可循环播放灯箱内容")])]),_c('tr',[_c('td',[_vm._v("animation")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("''")])]),_c('td',[_vm._v("动画（可选fade/zoom-out）")])]),_c('tr',[_c('td',[_vm._v("index")]),_c('td',[_vm._v("Integer")]),_c('td',[_vm._v("0")]),_c('td',[_vm._v("设置显示第index+1个灯箱内容")])]),_c('tr',[_c('td',[_vm._v("zoomable")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("true")]),_c('td',[_vm._v("灯箱是否开启缩放功能（只有当灯箱内容为图片时有效）")])]),_c('tr',[_c('td',[_vm._v("zoomButton")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("true")]),_c('td',[_vm._v("是否显示缩放按钮（只有当zoomable为true时有效）")])]),_c('tr',[_c('td',[_vm._v("zoomWheel")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("true")]),_c('td',[_vm._v("是否允许滚动鼠标缩放（只有当zoomable为true时有效）")])]),_c('tr',[_c('td',[_vm._v("zoomMax")]),_c('td',[_vm._v("Integer/String")]),_c('td',[_vm._v("5")]),_c('td',[_vm._v("设置最大放大宽度：类型为Integer时，表示灯箱最多放大次数。类型为String时，可以设置单位为px或者%。")])]),_c('tr',[_c('td',[_vm._v("zoomMin")]),_c('td',[_vm._v("Integer/String")]),_c('td',[_vm._v("-5")]),_c('td',[_vm._v("设置最小宽度：同上")])]),_c('tr',[_c('td',[_vm._v("zoomRadio")]),_c('td',[_vm._v("Number")]),_c('td',[_vm._v("0.1")]),_c('td',[_vm._v("每次放大缩小的比例")])])])]),_c('h3',[_vm._v("Slots")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Slot")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("(default)")]),_c('td',[_vm._v("灯箱内容")])])])]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@open")]),_c('p',[_vm._v("打开时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')]),_c('h4',[_vm._v("@before-close")]),_c('p',[_vm._v("关闭前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止关闭流程")])])])]),_c('h4',[_vm._v("@close")]),_c('p',[_vm._v("关闭时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody')])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});