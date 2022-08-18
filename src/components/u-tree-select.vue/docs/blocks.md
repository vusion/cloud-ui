### 基本用法

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
