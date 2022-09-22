#### 动态数据支持下拉框选择属性

``` html { width: 70% }
<u-tree-view-new :data-source="[
    { text1: '节点 1',value: '1', children1: [
        { text1: '节点 1.1', value: '1.1' },
        { text1: '节点 1.2', value: '1.2', children1: [
            { text1: '节点 1.2.1', value: '1.2.1' },
            { text1: '节点 1.2.2', value: '1.2.2' },
        ] },
        { text1: '节点 1.3', value: '1.3' },
        { text1: '节点 1.4', value: '1.4', },
    ] },
    { text1: '节点 2', value: '2' },
    { text1: '节点 3', value: '3',children1: [
        { text1: '节点 3.1', value: '3.1'},
        { text1: '节点 3.2', value: '3.2'},
    ] },
]" textField="text1" valueField="value" childrenField="children1">
    <template #item="scope">
        <u-text>{{ scope.item.text1 }} - {{ scope.item.value}}</u-text> 
    </template>
</u-tree-view-new>
```
