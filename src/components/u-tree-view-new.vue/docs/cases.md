### 实例

``` html { width: 70% }

<u-tree-view-new ref="tree_view_new1" text-field="lCAPRole.name" value-field="lCAPRole.name" children-field="lCAPRole.children1"
    :data-source="[{
  'lCAPRole': {
    'id': 1251898191512580,
    'createdTime': '2022-09-22T10:44:44.000Z',
    'updatedTime': null,
    'createdBy': null,
    'updatedBy': null,
    'uuid': '778cd6dabc3440e4a81346d771293b5b',
    'name': 'DEV-AdminRole',
    'description': null,
    'roleStatus': false,
    'editable': false,
    'children1': [{
      'lCAPRole': {
        'id': 1251898191512581,
        'createdTime': '2022-09-22T10:44:44.000Z',
        'updatedTime': null,
        'createdBy': null,
        'updatedBy': null,
        'uuid': '778cd6dabc3440e4a81346d771293b5b',
        'name': 'DEV-AdminRole',
        'description': null,
        'roleStatus': false,
        'editable': false,
        'children1': []
      }
    }, {
      'lCAPRole': {
        'id': 24451203343232328,
        'createdTime': '2022-09-22T10:58:19.000Z',
        'updatedTime': '2022-09-22T10:58:19.000Z',
        'createdBy': null,
        'updatedBy': null,
        'uuid': null,
        'name': 'test',
        'description': null,
        'roleStatus': true,
        'editable': true,
        'children1': [],
      }
    }]
  }
}, {
  'lCAPRole': {
    'id': 2445120334390528,
    'createdTime': '2022-09-22T10:58:19.000Z',
    'updatedTime': '2022-09-22T10:58:19.000Z',
    'createdBy': null,
    'updatedBy': null,
    'uuid': null,
    'name': 'test',
    'description': null,
    'roleStatus': true,
    'editable': true,
    'children1': [],
  }
}]
    ">
    <template #item="scope" ref="template9">
        <u-text ref="text17" :text="scope && scope.item && scope.item.lCAPRole && scope.item.lCAPRole.name"></u-text>
        <u-text ref="text18" text="普通文本"></u-text>
        <u-button ref="button5" color="primary" text="确定"></u-button>
    </template>
    <u-tree-view-node-new ref="tree_view_node_new1">
        <template #item ref="template10">
            <u-text ref="text19" text="节点"></u-text>
        </template>
    </u-tree-view-node-new>
</u-tree-view-new>

```
