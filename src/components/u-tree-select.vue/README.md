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

``` html
<u-tree-select>
    <u-tree-view-node text="节点 1">
        <u-tree-view-node text="节点 1.1"></u-tree-view-node>
        <u-tree-view-node text="节点 1.2">
            <u-tree-view-node text="节点 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.3"></u-tree-view-node>
        <u-tree-view-node text="节点 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点 2"></u-tree-view-node>
    <u-tree-view-node text="节点 3">
        <u-tree-view-node text="节点 3.1"></u-tree-view-node>
        <u-tree-view-node text="节点 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-select>
```

#### Data 方式

``` html { width: 30% }
<u-tree-select :data="[
    { text: '节点 1', children: [
        { text: '节点 1.1' },
        { text: '节点 1.2', children: [
            { text: '节点 1.2.1' },
            { text: '节点 1.2.2' },
        ] },
        { text: '节点 1.3' },
        { text: '节点 1.4' },
    ] },
    { text: '节点 2' },
    { text: '节点 3', children: [
        { text: '节点 3.1' },
        { text: '节点 3.2' },
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
| $event.param1 | string | 参数1 |
| $event.param2 | number | 参数2 |

