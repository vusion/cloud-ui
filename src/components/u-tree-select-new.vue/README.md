<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTreeSelectNew 树选择器

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**Form**

树选择器

## 示例
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

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<Item\> \| Function \| object \| DataSource |  |  | 集合类型变量或者输出参数为集合类型的逻辑 |
| data-schema | schema |  |  | 表格每一行的数据类型 |
| text-field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 集合的元素类型中，用于标识选中值的属性 |
| children-field | string |  | `'children'` | 集合的元素类型中，用于标识子节点的属性 |
| parent-field | string |  | `''` | 集合的元素类型中，用于标识父节点的属性 |
| value.sync, v-model | any |  |  | 选择后，所选中的值 |

### Slots

#### (default)

插入`<u-tree-view-node-new>`子组件

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

