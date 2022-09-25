### 实例

``` html { width: 70% }

<u-tree-view-new ref="tree_view_new1"
    :data-source="[ { 'data': { 'id': 1, 'deptname': '一级部门a', 'parentid': 0, 'name': '小明' } }, { 'data': { 'id': 2, 'deptname': '一级部门b', 'parentid': 11, 'name': 'xiaoming' } }, { 'data': { 'id': 99, 'deptname': '一级部门c', 'parentid': 0, 'name': 'xiaoming' } },{ 'data': { 'id': 3, 'deptname': '二级部门a', 'parentid': 1, 'name': '小明2' } }, { 'data': { 'id': 4, 'deptname': '三级部门a', 'parentid': 3, 'name': '小明3' } } ]"
    text-field="data.deptname" value-field="data.id" parent-field="data.parentid">
    <template #item="scope" ref="template1">
        <u-text ref="text1" :text="scope && scope.item && scope.item.data && scope.item.data.deptname"></u-text>
    </template>
</u-tree-view-new>

```
