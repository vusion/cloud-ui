<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTreeSelectNew 树选择

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
    - [Methods](#methods)

**Selector**

树选择

## 示例
### 基本用法

#### Tag 方式

```vue
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


## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。 |
| data-schema | schema |  |  | 数据源返回的数据结构的类型，自动识别类型进行展示说明 |
| text-field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 集合的元素类型中，用于标识选中值的属性 |
| parent-field | string |  | `''` | 集合的元素类型中，用于标识父节点的属性 |
| children-field | string |  | `'children'` | 集合的元素类型中，用于标识子节点的属性，默认为children |
| value.sync, v-model | any |  |  | 选择后，所选中的值 |
| checkable | boolean |  | `false` | 设置是否开启多选模式，显示多选框 |
| placeholder | string |  | `'请选择'` | 为空时显示的占位符文本 |
| check-controlled | boolean |  | `false` | 开启后父节点选择不会全选子节点，子节点选择不会联动父节点 |
| disabled-field | string |  | `'disabled'` | 集合的元素类型中，用于标识节点的disabled属性 |
| clearable | boolean |  | `false` | 设置是否开启可清除模式 |
| append-to | string | `[object Object]`<br/>`[object Object]` | `'reference'` | 设置弹出层依据哪个元素定位位置，可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中。 |

### Slots

#### (default)

插入`<u-tree-view-node-new>`子组件

#### item

自定义选项的结构和样式

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.param1 | string | 参数1 |
| $event.param2 | number | 参数2 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.node | object | 选择项相关对象 |
| $event.oldNode | object | 旧的选择项相关对象 |
| $event.nodeVM | UTreeViewNode | 选择项子组件 |
| $event.oldVM | UTreeViewNode | 旧的选择项子组件 |
| senderVM | UTreeView | 发送事件实例 |

#### @check

选中/取消节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.checked | boolean | 选中/取消状态 |
| $event.oldChecked | boolean | 旧的选中/取消状态 |
| $event.values | Array | 所有选中节点的值 |
| $event.node | object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| senderVM | UTreeView | 发送事件实例 |

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载后触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | null | 无 |
| senderVM | UTableView | 发送事件实例 |

#### @before-clear

清空前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.preventDefault | Function | 阻止清空流程 |
| senderVM | UTreeView | 发送事件实例 |

#### @clear

清空时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| senderVM | UTreeView | 发送事件实例 |

Methods

#### reload()

重新加载

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

