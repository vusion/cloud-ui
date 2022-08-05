### 基本用法

#### Data 方式

``` html { width: 30% }
<u-tree-view-plus :data="[
    { text: '节点 1', value: '1', children: [
        { text: '节点 1.1', value: '1.1' },
        { text: '节点 1.2', value: '1.2', children: [
            { text: '节点 1.2.1', value: '1.2.1' },
            { text: '节点 1.2.2', value: '1.2.2' },
        ] },
        { text: '节点 1.3', value: '1.3' },
        { text: '节点 1.4', value: '1.4' },
    ] },
    { text: '节点 2', value: '2' },
    { text: '节点 3', value: '3', children: [
        { text: '节点 3.1', value: '3.1' },
        { text: '节点 3.2', value: '3.2' },
    ] },
]" :props="{label: 'text'}">
</u-tree-view-plus>
```

#### 可选择

``` vue { width: 30% }
<template>
<u-tree-view-plus 
    ref="treeView"
    :props="{label: 'text'}"  
    show-checkbox 
    :data="data"
></u-tree-view-plus>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点 1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', expanded: false, checked: false },
                    { text: '节点 1.2', expanded: true, checked: false, children: [
                        { text: '节点 1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', expanded: false, checked: false },
                    { text: '节点 1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', expanded: false, checked: false },
                { text: '节点 3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```

#### 可拖拽节点

``` vue { width: 30% }
<template>
<u-tree-view-plus 
    ref="treeView"
    :props="{label: 'text'}"  
    draggable 
    :data="data"
    node-key="text"
></u-tree-view-plus>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点 1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', expanded: false, checked: false },
                    { text: '节点 1.2', expanded: true, checked: false, children: [
                        { text: '节点 1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', expanded: false, checked: false },
                    { text: '节点 1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', expanded: false, checked: false },
                { text: '节点 3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```
