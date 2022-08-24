<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTreeSelect 树型选择框

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

请在这里添加描述

## 示例
### 基本用法

#### Tag 方式

``` vue
<template>
    <u-tree-select v-model="value" :data-source="load" text-field="title" value-field="title">
    </u-tree-select>
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
<u-tree-select value="节点 1" valueField="text" textField="text1">
    <u-tree-view-node text="节点 1" :node="{text1: '节点 2'}">
        <u-tree-view-node text="节点 1.1" :node="{text1: '节点 1.1'}"></u-tree-view-node>
        <u-tree-view-node text="节点 1.2" :node="{text1: '节点 1.2'}">
            <u-tree-view-node text="节点 1.2.1" :node="{text1: '节点 1.2.1'}"></u-tree-view-node>
            <u-tree-view-node text="节点 1.2.2" :node="{text1: '节点 1.2.2'}"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.3" :node="{text1: '节点 1.3'}"></u-tree-view-node>
        <u-tree-view-node text="节点 1.4" :node="{text1: '节点 1.4'}"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点 2" :node="{text1: '节点 2'}"></u-tree-view-node>
    <u-tree-view-node text="节点 3" :node="{text1: '节点 3'}">
        <u-tree-view-node text="节点 3.1" :node="{text1: '节点 3.1'}"></u-tree-view-node>
        <u-tree-view-node text="节点 3.2" :node="{text1: '节点 3.2'}"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-select>
```

#### Data 方式

``` html { width: 30% }
<u-tree-select value="节点 1" valueField="text1" textField="text1" :data="[
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
]"></u-tree-select>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value | number |  | `0` | 需要传入的值 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.param1 | string | 参数1 |
| $event.param2 | number | 参数2 |

