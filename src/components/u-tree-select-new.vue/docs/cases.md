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
