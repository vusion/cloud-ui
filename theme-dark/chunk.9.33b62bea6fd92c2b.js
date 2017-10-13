/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"b5b4923b99832b1207184288d268d341"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"cf21d208bc59fea51efcce2cb205b54c"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"98f1492c1d7a2b1df824fc9c3437d6c6"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"ea6d9257f15dff6942c064a45dfac582"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.ttf","md5":"b5b4923b99832b1207184288d268d341"},"eot":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.eot","md5":"cf21d208bc59fea51efcce2cb205b54c"},"woff":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.woff","md5":"98f1492c1d7a2b1df824fc9c3437d6c6"},"svg":{"path":"\\cloud-ui\\theme-dark\\vusion-icon-font.svg","md5":"ea6d9257f15dff6942c064a45dfac582"}});
                                }webpackJsonp([9],{

/***/ 635:
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

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(794);

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_5c9d71d8_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(796);
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
  __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_5c9d71d8_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 795:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			title: '每星期访问量',
			xaxis: { key: 'week' },
			yaxis: { min: 0, name: '个' },
			series: [{ key: 'number' }, { key: 'num', hidden: true }],
			data: [{ week: '星期一', number: 150, num: 120 }, { week: '星期二', number: 300, num: 120 }, { week: '星期三', number: 28, num: undefined }, { week: '星期四', number: 200, num: 200 }, { week: '星期五', number: 74, num: 74 }, { week: '星期六', number: 532, num: 200 }, { week: '星期日', number: 420, num: 500 }],
			smooth: true
		};
	}
});

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('p', [_vm._v("#线状图（LineChart）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-line-chart', {
    attrs: {
      "border": "",
      "legend": "",
      "title": "每星期访问量",
      "x-axis": {
        key: 'week'
      },
      "y-axis": {
        min: 0
      },
      "series": [{
        key: 'number'
      }],
      "data": [{
        week: '星期一',
        number: 150
      }, {
        week: '星期二',
        number: 300
      }, {
        week: '星期三',
        number: 28
      }, {
        week: '星期四',
        number: 200
      }, {
        week: '星期五',
        number: 74
      }, {
        week: '星期六',
        number: 532
      }, {
        week: '星期日',
        number: 420
      }]
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"每星期访问量\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ key: 'week' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ min: 0 }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ key: 'number' }]\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("曲线图")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-line-chart', {
    attrs: {
      "border": "",
      "legend": "",
      "title": "每星期访问量",
      "x-axis": {
        key: 'week'
      },
      "y-axis": {
        min: 0
      },
      "smooth": true,
      "series": [{
        key: 'number'
      }],
      "data": [{
        week: '星期一',
        number: 150
      }, {
        week: '星期二',
        number: 300
      }, {
        week: '星期三',
        number: 28
      }, {
        week: '星期四',
        number: 200
      }, {
        week: '星期五',
        number: 74
      }, {
        week: '星期六',
        number: 532
      }, {
        week: '星期日',
        number: 420
      }]
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"每星期访问量\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ key: 'week' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ min: 0 }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":smooth")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ key: 'number' }]\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("填充下方区域")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-line-chart', {
    attrs: {
      "border": "",
      "legend": "",
      "title": "每星期访问量",
      "x-axis": {
        key: 'week'
      },
      "y-axis": {
        min: 0
      },
      "fill": true,
      "series": [{
        key: 'number'
      }],
      "data": [{
        week: '星期一',
        number: 150
      }, {
        week: '星期二',
        number: 300
      }, {
        week: '星期三',
        number: 28
      }, {
        week: '星期四',
        number: 200
      }, {
        week: '星期五',
        number: 74
      }, {
        week: '星期六',
        number: 532
      }, {
        week: '星期日',
        number: 420
      }]
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"每星期访问量\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ key: 'week' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ min: 0 }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":fill")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ key: 'number' }]\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("隐藏图例")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-line-chart', {
    attrs: {
      "border": "",
      "legend": "",
      "title": "每星期访问量",
      "legend": false,
      "x-axis": {
        key: 'week'
      },
      "y-axis": {
        min: 0
      },
      "series": [{
        key: 'number'
      }],
      "data": [{
        week: '星期一',
        number: 150
      }, {
        week: '星期二',
        number: 300
      }, {
        week: '星期三',
        number: 28
      }, {
        week: '星期四',
        number: 200
      }, {
        week: '星期五',
        number: 74
      }, {
        week: '星期六',
        number: 532
      }, {
        week: '星期日',
        number: 420
      }]
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"每星期访问量\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":legend")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"false\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ key: 'week' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ min: 0 }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ key: 'number' }]\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("单位")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-line-chart', {
    attrs: {
      "border": "",
      "legend": "",
      "title": "每星期访问量",
      "x-axis": {
        key: 'week'
      },
      "y-axis": {
        min: 0,
        name: '个'
      },
      "series": [{
        key: 'number'
      }],
      "data": [{
        week: '星期一',
        number: 150
      }, {
        week: '星期二',
        number: 300
      }, {
        week: '星期三',
        number: 28
      }, {
        week: '星期四',
        number: 200
      }, {
        week: '星期五',
        number: 74
      }, {
        week: '星期六',
        number: 532
      }, {
        week: '星期日',
        number: 420
      }]
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"每星期访问量\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ key: 'week' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"{ min: 0, name: '个' }\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ key: 'number' }]\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h4', [_vm._v("命令式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-line-chart', {
      attrs: {
        "border": "",
        "legend": "",
        "title": _vm.title,
        "x-axis": _vm.xaxis,
        "y-axis": _vm.yaxis,
        "series": _vm.series,
        "data": _vm.data,
        "smooth": _vm.smooth
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
  }, [_vm._v("u-line-chart")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("border")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("legend")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"title\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":x-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"xaxis\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":y-axis")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"yaxis\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":series")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"series\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"data\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":smooth")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"smooth\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-line-chart")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
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
  }, [_vm._v("default")]), _vm._v(" {\n\tdata() {\n\t\t"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" {\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'每星期访问量'")]), _vm._v(",\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("xaxis")]), _vm._v(": { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("key")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'week'")]), _vm._v(" },\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("yaxis")]), _vm._v(": { "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("min")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("0")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'个'")]), _vm._v("},\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("series")]), _vm._v(": [{"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("key")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'number'")]), _vm._v("},{"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("key")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'num'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("hidden")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v("} ],\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": [\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期一'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("150")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("120")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期二'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("300")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("120")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期三'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("28")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("undefined")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期四'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("200")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("200")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期五'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("74")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("74")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期六'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("532")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("200")]), _vm._v(" },\n\t\t\t\t{ "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("week")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'星期日'")]), _vm._v(", "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("number")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("420")]), _vm._v(" ,"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("num")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("500")]), _vm._v("},\n\t\t\t],\n\t\t\t"), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("smooth")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(",\n\t\t}\n\t}\n};\n")]), _c('span', {
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