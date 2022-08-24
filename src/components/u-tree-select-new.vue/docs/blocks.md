#### 

``` html { width: 30% }
<u-tree-select-new value="节点 1" valueField="text1" textField="text1" :data="[
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
