webpackJsonp([39],{581:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-linear-layout",{attrs:{direction:"vertical"}},[e("u-cascade-capsules",{attrs:{converter:"join",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},l={data:function(){return{value:void 0}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-linear-layout",{attrs:{direction:"vertical"}},[e("u-cascade-capsules",{attrs:{value:t.value,converter:"join.number:|",categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]},on:{"update:value":function(a){t.value=a}}}),e("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-linear-layout",{attrs:{direction:"vertical"}},[e("u-cascade-capsules",{attrs:{converter:"last-value",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"1",children:[{text:"物理学",value:"11",children:[{text:"理论物理",value:"111"},{text:"凝聚态物理",value:"112"},{text:"材料物理",value:"113"}]},{text:"数学",value:"12",children:[{text:"基础数学",value:"121"},{text:"计算数学",value:"122"},{text:"应用数学",value:"123"}]},{text:"化学",value:"13"}]},{text:"工学",value:"2",children:[{text:"计算机科学与技术",value:"21",children:[{text:"计算机系统结构",value:"211"},{text:"计算机软件与理论",value:"212",disabled:!0},{text:"计算机应用技术",value:"213"}]},{text:"软件工程",value:"22",disabled:!0},{text:"机械工程",value:"23",children:[{text:"机械制造及其自动化",value:"231"},{text:"机械电子工程",value:"232"},{text:"机械设计及理论",value:"233",disabled:!0},{text:"车辆工程",value:"234",disabled:!0}]}]}]},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),e("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},r={components:{C0640fc:e(0)({data:function(){return{value:"工学,计算机科学与技术,计算机应用技术"}}},s,!1,null,null,null).exports,C7305b0:e(0)(l,v,!1,null,null,null).exports,Cafec81:e(0)({data:function(){return{value:"213"}}},n,!1,null,null,null).exports}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-article",[e("h1",[t._v("级联胶囊 CascadeCapsules")]),e("h3",[t._v("基本形式")]),e("div",{staticClass:"u-example"},[e("u-cascade-capsules",{attrs:{categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),e("h3",[t._v("值转换器")]),e("p",[t._v("组件的 value 与 各选择器的 value 的转换器。")]),e("h4",[t._v("join")]),e("p",[t._v("默认为"),e("code",{pre:!0},[t._v("'join'")]),t._v("，表示将 values 数组 join 之后变成 value。这种情况下 value 一般不会重复，推荐使用。")]),e("div",{staticClass:"u-example"},[e("C0640fc")],1),e("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"join"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: '学科门类' },\n        { label: '一级学科' },\n        { label: '二级学科' },\n    ]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '理学', value: '理学', children: [\n            { text: '物理学', value: '物理学', children: [\n                { text: '理论物理', value: '理论物理' },\n                { text: '凝聚态物理', value: '凝聚态物理' },\n                { text: '材料物理', value: '材料物理' },\n            ]},\n            { text: '数学', value: '数学', children: [\n                { text: '基础数学', value: '基础数学' },\n                { text: '计算数学', value: '计算数学' },\n                { text: '应用数学', value: '应用数学' },\n            ]},\n            { text: '化学', value: '化学' },\n        ]},\n        { text: '工学', value: '工学', children: [\n            { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n                { text: '计算机系统结构', value: '计算机系统结构' },\n                { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n                { text: '计算机应用技术', value: '计算机应用技术' },\n            ]},\n            { text: '软件工程', value: '软件工程', disabled: true },\n            { text: '机械工程', value: '机械工程', children: [\n                { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n                { text: '机械电子工程', value: '机械电子工程' },\n                { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n                { text: '车辆工程', value: '车辆工程', disabled: true },\n            ]},\n        ]},\n    ]\"")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{attrs:{class:"javascript"}},[t._v("\n"),e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'工学,计算机科学与技术,计算机应用技术'")]),t._v(",\n        };\n    },\n};\n")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),e("p",[e("code",{pre:!0},[t._v("'join.number'")]),t._v("与"),e("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况。")]),e("p",[e("code",{pre:!0},[t._v("'join:,'")]),t._v("，还可以用"),e("code",{pre:!0},[t._v(":")]),t._v("修改分隔符，类似 Vue 的指令参数。")]),e("div",{staticClass:"u-example"},[e("C7305b0")],1),e("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":value.sync")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"join.number:|"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: 'CPU', key: 'cpu' },\n        { label: '内存', key: 'memory' },\n        { label: '系统盘', key: 'storage' },\n    ]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '1核', value: 1, children: [\n            { text: '1GB', value: 1, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '2核', value: 2, children: [\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '4核', value: 4, children: [\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '16GB', value: 16, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n    ]\"")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{attrs:{class:"javascript"}},[t._v("\n"),e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{attrs:{class:"hljs-literal"}},[t._v("undefined")]),t._v(",\n        };\n    },\n};\n")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),e("h4",[t._v("last-value")]),e("p",[e("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value，如果每一项的值是唯一的，可以用这种方法。")]),e("div",{staticClass:"u-example"},[e("Cafec81")],1),e("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"last-value"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: '学科门类' },\n        { label: '一级学科' },\n        { label: '二级学科' },\n    ]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '理学', value: '1', children: [\n            { text: '物理学', value: '11', children: [\n                { text: '理论物理', value: '111' },\n                { text: '凝聚态物理', value: '112' },\n                { text: '材料物理', value: '113' },\n            ]},\n            { text: '数学', value: '12', children: [\n                { text: '基础数学', value: '121' },\n                { text: '计算数学', value: '122' },\n                { text: '应用数学', value: '123' },\n            ]},\n            { text: '化学', value: '13' },\n        ]},\n        { text: '工学', value: '2', children: [\n            { text: '计算机科学与技术', value: '21', children: [\n                { text: '计算机系统结构', value: '211' },\n                { text: '计算机软件与理论', value: '212', disabled: true },\n                { text: '计算机应用技术', value: '213' },\n            ]},\n            { text: '软件工程', value: '22', disabled: true },\n            { text: '机械工程', value: '23', children: [\n                { text: '机械制造及其自动化', value: '231' },\n                { text: '机械电子工程', value: '232' },\n                { text: '机械设计及理论', value: '233', disabled: true },\n                { text: '车辆工程', value: '234', disabled: true },\n            ]},\n        ]},\n    ]\"")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{attrs:{class:"javascript"}},[t._v("\n"),e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'213'")]),t._v(",\n        };\n    },\n};\n")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),e("h3",[t._v("自动选择")]),e("p",[t._v("此功能默认开启，父级切换时会跟据当前级别的"),e("code",{pre:!0},[t._v("value")]),t._v("自动选择，如果没有与"),e("code",{pre:!0},[t._v("value")]),t._v("相匹配的项，会自动选择第一个显示且非禁用的项。")]),e("p",[t._v("可以将"),e("code",{pre:!0},[t._v("auto-select")]),t._v("设置为"),e("code",{pre:!0},[t._v("false")]),t._v("，关闭此功能。")]),e("div",{staticClass:"u-example"},[e("u-cascade-capsules",{attrs:{converter:"join.number","auto-select":!1,categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]}})],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"join.number"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: 'CPU', key: 'cpu' },\n    { label: '内存', key: 'memory' },\n    { label: '系统盘', key: 'storage' },\n]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '1核', value: 1, children: [\n        { text: '1GB', value: 1, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '2核', value: 2, children: [\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '4核', value: 4, children: [\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '16GB', value: 16, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n]\"")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),e("h3",[t._v("可取消")]),e("div",{staticClass:"u-example"},[e("u-cascade-capsules",{attrs:{"auto-select":!1,cancelable:"",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("cancelable")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),e("h2",[t._v("API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("data")]),e("td",[t._v("Array<{ text, value }>")]),e("td"),e("td",[t._v("数据列表")])]),e("tr",[e("td",[t._v("value.sync, v-model")]),e("td",[t._v("Any")]),e("td"),e("td",[t._v("当前选择的值")])]),e("tr",[e("td",[t._v("categories")]),e("td",[t._v("Array<{ label, key }>")]),e("td"),e("td",[t._v("多级分类")])]),e("tr",[e("td",[t._v("autoSelect")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("true")])]),e("td")]),e("tr",[e("td",[t._v("converter")]),e("td",[t._v("String, Object")]),e("td",[e("code",{pre:!0},[t._v("'join'")])]),e("td",[t._v("value 与 values 的转换器。可选值："),e("code",{pre:!0},[t._v("'join'")]),t._v("表示将 values 数组 join 之后变成 value，"),e("code",{pre:!0},[t._v("'join.number'")]),t._v("与"),e("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况。也可以用"),e("code",{pre:!0},[t._v(":")]),t._v("修改分隔符，类似 Vue 的指令参数，"),e("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象")])]),e("tr",[e("td",[t._v("field")]),e("td",[t._v("String")]),e("td",[e("code",{pre:!0},[t._v("'text'")])]),e("td",[t._v("显示文本字段")])]),e("tr",[e("td",[t._v("cancelable")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("是否可以取消选择")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("是否只读")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("是否禁用")])])])]),e("h3",[t._v("Events")]),e("h4",[t._v("@input")]),e("p",[t._v("选择某一项时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event")]),e("td",[t._v("Any")]),e("td",[t._v("选择项的值")])])])]),e("h4",[t._v("@select")]),e("p",[t._v("选择某一项时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.level")]),e("td",[t._v("Number")]),e("td",[t._v("选择的层级")])]),e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("$event.values")]),e("td",[t._v("Array")]),e("td",[t._v("改变后每项值的数组")])]),e("tr",[e("td",[t._v("$event.item")]),e("td",[t._v("Object")]),e("td",[t._v("选择项相关对象")])]),e("tr",[e("td",[t._v("$event.itemVM")]),e("td",[t._v("ListViewItem")]),e("td",[t._v("选择项子组件")])])])]),e("h4",[t._v("@change")]),e("p",[t._v("选择值改变时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("$event.oldValue")]),e("td",[t._v("Any")]),e("td",[t._v("旧的值")])]),e("tr",[e("td",[t._v("$event.values")]),e("td",[t._v("Array")]),e("td",[t._v("改变后每项值的数组")])]),e("tr",[e("td",[t._v("$event.oldValues")]),e("td",[t._v("Array")]),e("td",[t._v("旧的每项值的数组")])])])])])},staticRenderFns:[]},c=e(0)(r,u,!1,null,null,null);a.default=c.exports}});