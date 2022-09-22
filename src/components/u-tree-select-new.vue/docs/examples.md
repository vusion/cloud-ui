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

#### 支持多选

``` html { width: 30% }
<u-tree-select-new value="节点 1" checkable valueField="text1" textField="text1" :data-source="[
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
        { text1: '节点 3.1' },
        { text1: '节点 3.2' },
    ] },
]"></u-tree-select-new>
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
