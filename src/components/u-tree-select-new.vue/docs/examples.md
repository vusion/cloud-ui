### 基本用法

#### Tag 方式

``` vue
<template>
    <u-tree-select-new v-model="value" :data-source="load" text-field="title" value-field="title">
    </u-tree-select-new>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));

export default {
    data() {
        return {
            value: '页面2'
        };
    },
    methods: {
        load(params) {
            if (!params.node) {
                return mockRequest([
                    { type: 'app', title: '应用1', childrenField: 'services' },
                    { type: 'app', title: '应用2', childrenField: 'services' },
                ]);
            } else if (params.node.type === 'app') {
                return mockRequest([
                    { type: 'service', title: '服务1', childrenField: 'pages' },
                    { type: 'service', title: '服务2', childrenField: 'pages' },
                    { type: 'service', title: '服务3', childrenField: 'pages' },
                ]);
            } else if (params.node.type === 'service') {
                return mockRequest([
                    { type: 'page', title: '页面1', isLeaf: true, childrenField: 'children' },
                    { type: 'page', title: '页面2', isLeaf: true, childrenField: 'children' },
                ]);
            }
        },
    },
}
</script>
```

#### Tag 方式

``` html
<u-tree-select-new value="节点 1" valueField="text" textField="text1">
    <u-tree-view-node-new text="节点 1" :node="{text1: '节点 2'}">
        <u-tree-view-node-new text="节点 1.1" :node="{text1: '节点 1.1'}"></u-tree-view-node-new>
        <u-tree-view-node-new text="节点 1.2" :node="{text1: '节点 1.2'}">
            <u-tree-view-node-new text="节点 1.2.1" :node="{text1: '节点 1.2.1'}"></u-tree-view-node-new>
            <u-tree-view-node-new text="节点 1.2.2" :node="{text1: '节点 1.2.2'}"></u-tree-view-node-new>
        </u-tree-view-node-new>
        <u-tree-view-node-new text="节点 1.3" :node="{text1: '节点 1.3'}"></u-tree-view-node-new>
        <u-tree-view-node-new text="节点 1.4" :node="{text1: '节点 1.4'}"></u-tree-view-node-new>
    </u-tree-view-node-new>
    <u-tree-view-node-new text="节点 2" :node="{text1: '节点 2'}"></u-tree-view-node-new>
    <u-tree-view-node-new text="节点 3" :node="{text1: '节点 3'}">
        <u-tree-view-node-new text="节点 3.1" :node="{text1: '节点 3.1'}"></u-tree-view-node-new>
        <u-tree-view-node-new text="节点 3.2" :node="{text1: '节点 3.2'}"></u-tree-view-node-new>
    </u-tree-view-node-new>
</u-tree-select-new>
```

#### Data 方式

``` html { width: 30% }
<u-tree-select-new value="节点 1" valueField="text1" textField="text1" :data-source="[
    { text1: '节点 1', children: [
        { text1: '节点 1.1' },
        { text1: '节点 1.2', children: [
            { text1: '节点 1.2.1' },
            { text1: '节点 1.2.2' },
        ] },
        { text1: '节点 1.3' },
        { text1: '节点 1.4' },
    ] },
    { text1: '节点 2' },
    { text1: '节点 3', children: [
        { text1: '节点 3.1' }
        ,
        { text1: '节点 3.2' },
    ] },
]"></u-tree-select-new>
```

#### 支持清除

多选：

```vue { width: 30% }
<template>
    <u-tree-select-new  v-model="value" checkable clearable valueField="text1" textField="text1" :data-source="dataSource"></u-tree-select-new>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                dataSource: [
                    { text1: '节点 1', value1: '1', children: [
                        { text1: '节点 1.1' , value1: '1.1'},
                        { text1: '节点 1.2', value1: '1.2' ,children: [
                            { text1: '节点 1.2.1', value1: '1.2.1' },
                            { text1: '节点 1.2.2' , value1: '1.2.2' },
                        ] },
                        { text1: '节点 1.3', value1: '1.3' },
                        { text1: '节点 1.4' , value1: '1.4'},
                    ] },
                    { text1: '节点 2' ,value1: '2'},
                    { text1: '节点 3', value1: '3', children: [
                        { text1: '节点 3.1', value1: '3.1' },
                        { text1: '节点 3.2' , value1: '3.2'},
                    ] },
                ],
            };
        },
        methods: {
            
        },
    }
</script>
```
单选：
```vue { width: 30% }
<template>
    <u-tree-select-new  v-model="value"  clearable valueField="text1" textField="text1" :data-source="dataSource"></u-tree-select-new>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                dataSource: [
                    { text1: '节点 1', value1: '1', children: [
                        { text1: '节点 1.1' , value1: '1.1'},
                        { text1: '节点 1.2', value1: '1.2' ,children: [
                            { text1: '节点 1.2.1', value1: '1.2.1' },
                            { text1: '节点 1.2.2' , value1: '1.2.2' },
                        ] },
                        { text1: '节点 1.3', value1: '1.3' },
                        { text1: '节点 1.4' , value1: '1.4'},
                    ] },
                    { text1: '节点 2' ,value1: '2'},
                    { text1: '节点 3', value1: '3', children: [
                        { text1: '节点 3.1', value1: '3.1' },
                        { text1: '节点 3.2' , value1: '3.2'},
                    ] },
                ],
            };
        },
        methods: {
            
        },
    }
</script>
```


#### 支持多选

```vue { width: 30% }
<template>
    <u-tree-select-new  v-model="value" checkable clearable valueField="text1" textField="text1" :data-source="dataSource"></u-tree-select-new>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                dataSource: [
                    { text1: '节点 1', value1: '1', children: [
                        { text1: '节点 1.1' , value1: '1.1'},
                        { text1: '节点 1.2', value1: '1.2' ,children: [
                            { text1: '节点 1.2.1', value1: '1.2.1' },
                            { text1: '节点 1.2.2' , value1: '1.2.2' },
                        ] },
                        { text1: '节点 1.3', value1: '1.3' },
                        { text1: '节点 1.4' , value1: '1.4'},
                    ] },
                    { text1: '节点 2' ,value1: '2'},
                    { text1: '节点 3', value1: '3', children: [
                        { text1: '节点 3.1', value1: '3.1' },
                        { text1: '节点 3.2' , value1: '3.2'},
                    ] },
                ],
            };
        },
        methods: {
            
        },
    }
</script>
```

#### 一维Data

``` html { width: 30% }
<u-tree-select-new :data-source="[{id: 1, name: '节点1', pid: null}, {id: 2, name: '节点2', pid: 1}, {id: 3, name: '节点3', pid: null}, {id: 4, name: '节点4', pid: null}, {id: 5, name: '节点5', pid: 1}, {id: 6, name: '节点6', pid: 2}]"
                 parent-field="pid"
                 value-field="id"
                 children-field="children"
                 text-field="name"  
></u-tree-select-new>
```

#### 动态插槽数据
``` html { width: 70% }
<u-tree-select-new valueField="value" textField="text" childrenField="children" :data-source="[
    { text: '节点 1',value: '1', children: [
        { text: '节点 1.1', value: '1.1' },
        { text: '节点 1.2', value: '1.2', children: [
            { text: '节点 1.2.1', value: '1.2.1' },
            { text: '节点 1.2.2', value: '1.2.2' },
        ] },
        { text: '节点 1.3', value: '1.3' },
        { text: '节点 1.4', value: '1.4', },
    ] },
    { text: '节点 2', value: '2' },
    { text: '节点 3', value: '3',children: [
        { text: '节点 3.1', value: '3.1'},
        { text: '节点 3.2', value: '3.2'},
    ] },
]">
    <template #item="scope">
        <u-text>{{ scope.item.text }} - {{ scope.item.value}}</u-text> 
    </template>
    <u-tree-view-node-new ref="tree_view_node_new11" text="选项一" value="jing1">
        <template #item ref="template18">
            <u-text ref="text18" text="选项1"></u-text>
        </template>
    </u-tree-view-node-new>
    <u-tree-view-node-new ref="tree_view_node_new12" text="选项2" value="jing2">
        <template #item ref="template19">
            <u-text ref="text19" text="选项2"></u-text>
        </template>
    </u-tree-view-node-new>
</u-tree-select-new>
```

#### 动静结合选项回填
``` html { width: 70% }
<u-tree-select-new valueField="data.id" textField="data.deptname" parentField="data.parentid"
        :data-source="[ { 'data': { 'id': 1, 'deptname': '一级部门a', 'parentid': 0, 'name': '小明' } }, { 'data': { 'id': 2, 'deptname': '一级部门b', 'parentid': 11, 'name': 'xiaoming' } }, { 'data': { 'id': 99, 'deptname': '一级部门c', 'parentid': 0, 'name': 'xiaoming' } },{ 'data': { 'id': 3, 'deptname': '二级部门a', 'parentid': 1, 'name': '小明2' } }, { 'data': { 'id': 4, 'deptname': '三级部门a', 'parentid': 3, 'name': '小明3' } } ]"
>
    <template #item="scope">
        <u-text>{{ scope.item.data.deptname }}</u-text> 
    </template>
    <u-tree-view-node-new ref="tree_view_node_new11" text="选项一" value="jing1">
        <template #item ref="template18">
            <u-text ref="text18" text="选项1"></u-text>
        </template>
    </u-tree-view-node-new>
    <u-tree-view-node-new ref="tree_view_node_new12" text="选项2" value="jing2">
        <template #item ref="template19">
            <u-text ref="text19" text="选项2"></u-text>
        </template>
    </u-tree-view-node-new>
</u-tree-select-new>
```

```html 
<u-tree-select-new ref="tree_select_new3" placeholder="请选择">
    <template #item="scope" ref="template4"></template>
    <u-tree-view-node-new ref="tree_view_node_new1" text="水果" :value="1">
        <template #item ref="template5">
            <u-text ref="text6" text="水果"></u-text>
        </template>
        <u-tree-view-node-new ref="tree_view_node_new2" text="苹果" :value="2">
            <template #item ref="template6">
                <u-text ref="text7" text="平果"></u-text>
            </template>
            <u-tree-view-node-new ref="tree_view_node_new4" text="无核" :value="3">
                <template #item ref="template8">
                    <u-text ref="text9" text="无核"></u-text>
                </template>
            </u-tree-view-node-new>
        </u-tree-view-node-new>
    </u-tree-view-node-new>
    <u-tree-view-node-new ref="tree_view_node_new3" text="电器" :value="1">
        <template #item ref="template7">
            <u-text ref="text8" text="电器"></u-text>
        </template>
    </u-tree-view-node-new>
</u-tree-select-new>
```

