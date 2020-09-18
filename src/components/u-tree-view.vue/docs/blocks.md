### 基本用法

有两种书写方式，这里推荐使用Data方式，因为树型结构的数据有时非常多。

#### Tag 方式

``` html { width: 30% }
<u-tree-view>
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
</u-tree-view>
```

#### Data 方式

``` html { width: 30% }
<u-tree-view :data="[
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
]"></u-tree-view>
```

#### 自定义模板

Tag 方式很容易自定义模板，而 Data 方式却不好扩展。我们提供了一个名为`text`的作用域插槽，可以很轻松地处理这个问题。

``` html { width: 30% }
<u-tree-view :data="[
    { text: '文件夹1', type: 'directory', children: [
        { text: '文件夹1.1', type: 'directory' },
        { text: '文件夹1.2', type: 'directory', children: [
            { text: '文件1.2.1', type: 'file' },
            { text: '文件1.2.2', type: 'file' },
        ] },
        { text: '文件1.3', type: 'file' },
        { text: '文件1.4', type: 'file' },
    ] },
    { text: '文件夹2', type: 'directory' },
    { text: '文件夹3', type: 'directory', children: [
        { text: '文件3.1', type: 'file' },
        { text: '文件3.2', type: 'file' },
    ] },
]">
    <span slot="text" slot-scope="{ node, expanded, text }">
        {{ node.type === 'directory' ? (expanded ? '📂' : '📁') : '📄' }}
        {{ text }}
    </span>
</u-tree-view>
```

但`text`作用域插槽只支持扩展 text 文本内容，如果你的需求更加复杂，建议直接通过继承 UTreeView 相关组件来实现。

### 选项值

#### Tag 方式

``` html { width: 30% }
<u-tree-view value="1.2">
    <u-tree-view-node text="节点 1" value="1">
        <u-tree-view-node text="节点 1.1" value="1.1"></u-tree-view-node>
        <u-tree-view-node text="节点 1.2" value="1.2">
            <u-tree-view-node text="节点 1.2.1" value="1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点 1.2.2" value="1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.3" value="1.3"></u-tree-view-node>
        <u-tree-view-node text="节点 1.4" value="1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点 2" value="2"></u-tree-view-node>
    <u-tree-view-node text="节点 3" value="3">
        <u-tree-view-node text="节点 3.1" value="3.1"></u-tree-view-node>
        <u-tree-view-node text="节点 3.2" value="3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data 方式

``` html { width: 30% }
<u-tree-view value="1.2" :data="[
    { text: '节点 1', value: '1', children: [
        { text: '节点 1.1', value: '1.1' },
        { text: '节点 1.2', value: '1.2', children: [
            { text: '节点 1.2.1', value: '1.2.1' },
            { text: '节点 1.2.2', value: '1.2.2' },
        ] },
        { text: '节点 1.3', value: '1.3' },
        { text: '节点 1.4', value: '1.4' },
    ] },
    { text: '节点 2', value: '2' },
    { text: '节点 3', value: '3', children: [
        { text: '节点 3.1', value: '3.1' },
        { text: '节点 3.2', value: '3.2' },
    ] },
]"></u-tree-view>
```

### 只读、禁用、禁用某一项

#### Tag 方式

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-tree-view readonly>
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
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-tree-view disabled>
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
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-tree-view>
            <u-tree-view-node text="节点 1">
                <u-tree-view-node text="节点 1.1"></u-tree-view-node>
                <u-tree-view-node text="节点 1.2" disabled>
                    <u-tree-view-node text="节点 1.2.1"></u-tree-view-node>
                    <u-tree-view-node text="节点 1.2.2"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="节点 1.3" disabled></u-tree-view-node>
                <u-tree-view-node text="节点 1.4"></u-tree-view-node>
            </u-tree-view-node>
            <u-tree-view-node text="节点 2" disabled></u-tree-view-node>
            <u-tree-view-node text="节点 3">
                <u-tree-view-node text="节点 3.1"></u-tree-view-node>
                <u-tree-view-node text="节点 3.2"></u-tree-view-node>
            </u-tree-view-node>
        </u-tree-view>
    </u-grid-layout-column>
</u-grid-layout>
```

#### Data 方式

``` html { width: 30% }
<u-tree-view :data="[
    { text: '节点 1', children: [
        { text: '节点 1.1' },
        { text: '节点 1.2', disabled: true, children: [
            { text: '节点 1.2.1' },
            { text: '节点 1.2.2'}
        ] },
        { text: '节点 1.3', disabled: true  },
        { text: '节点 1.4' },
    ] },
    { text: '节点 2', disabled: true  },
    { text: '节点 3', children: [
        { text: '节点 3.1' },
        { text: '节点 3.2'}
    ]}
]"></u-tree-view>
```

### 手风琴

``` html { width: 30% }
<u-tree-view accordion>
    <u-tree-view-node text="节点 1">
        <u-tree-view-node text="节点 1.1">
            <u-tree-view-node text="节点 1.1.1"></u-tree-view-node>
            <u-tree-view-node text="节点 1.1.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.2">
            <u-tree-view-node text="节点 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.3">
            <u-tree-view-node text="节点 1.3.1"></u-tree-view-node>
            <u-tree-view-node text="节点 1.3.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点 2" expanded>
        <u-tree-view-node text="节点 2.1"></u-tree-view-node>
        <u-tree-view-node text="节点 2.2"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点 3">
        <u-tree-view-node text="节点 3.1"></u-tree-view-node>
        <u-tree-view-node text="节点 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### 展开/折叠触发方式

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4" expand-trigger="click">
        <p>整行点击均可触发（默认）</p>
        <u-tree-view>
            <u-tree-view-node text="节点 1" expanded>
                <u-tree-view-node text="节点 1.1" expanded></u-tree-view-node>
                <u-tree-view-node text="节点 1.2" expanded>
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
        </u-tree-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <p>仅点击小箭头时触发</p>
        <u-tree-view expand-trigger="click-expander">
            <u-tree-view-node text="节点 1" expanded>
                <u-tree-view-node text="节点 1.1" expanded></u-tree-view-node>
                <u-tree-view-node text="节点 1.2" expanded>
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
        </u-tree-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### 可取消

``` html { width: 30% }
<u-tree-view cancelable>
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
</u-tree-view>
```

### 节点显示/隐藏

Tag 方式中可以使用`v-show`，Data 方式中可以使用`hidden`属性

``` html { width: 30% }
<u-tree-view cancelable>
    <u-tree-view-node v-show="false" text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2">
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2"></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1" hidden></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### 多选

通过`checkable`属性开启多选模式。

控制多选有两种方式，一种是设置数据各项的`checked`属性，该属性会与多项选择框进行双向绑定。`disabled`属性可以禁用多项选择框。

``` html { width: 30% }
<u-tree-view ref="treeView" checkable :data="[
                { text: '节点 1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', expanded: false, checked: false },
                    { text: '节点 1.2', expanded: true, checked: false, children: [
                        { text: '节点 1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', expanded: false, checked: false },
                    { text: '节点 1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', expanded: false, checked: false },
                { text: '节点 3', expanded: false, checked: false },
            ]"></u-tree-view>
```
