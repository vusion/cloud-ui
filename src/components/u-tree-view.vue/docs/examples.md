### 基本用法

有两种书写方式，这里推荐使用Data方式，因为树型结构的数据有时非常多。

#### Tag 方式

``` html
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

``` html
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

``` html
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

``` html
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

``` html
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

``` html
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

``` html
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

``` html
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

``` html
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

``` vue
<template>
<u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
</template>

<script>
export default {
    data() {
        return {
            data: [
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
            ],
        };
    },
};
</script>
```

另一种是通过`:values.sync`对选择值进行双向绑定，该方法要求每项有`value`作为唯一值。`values`只会收集叶子节点的值。

``` vue
<template>
<u-tree-view ref="treeView" checkable :values.sync="values" :data="data"></u-tree-view>
</template>

<script>
export default {
    data() {
        return {
            values: ['1.2.1', '1.2.2', '1.3', '3'],
            data: [
                { text: '节点 1', value: '1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', value: '1.1', expanded: false, checked: false },
                    { text: '节点 1.2', value: '1.2', expanded: true, checked: false, children: [
                        { text: '节点 1.2.1', value: '1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', value: '1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', value: '1.3', expanded: false, checked: false },
                    { text: '节点 1.4', value: '1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', value: '2', expanded: false, checked: false },
                { text: '节点 3', value: '3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```

### 其他方法

#### 统一操作

UTreeView 有针对选中/取消和展开/收起两个操作的统一处理的方法：`checkAll`和`toggleAll`，方便开发者使用。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
    <u-linear-layout>
        <u-button @click="checkAll(true)">全部选中</u-button>
        <u-button @click="checkAll(false)">全部取消</u-button>
        <u-button @click="toggleAll(true)">全部展开</u-button>
        <u-button @click="toggleAll(false)">全部收起</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点 1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', expanded: false, checked: false },
                    { text: '节点 1.2', expanded: true, checked: false, disabled: true, children: [
                        { text: '节点 1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', expanded: false, checked: false },
                    { text: '节点 1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', expanded: false, checked: false },
                { text: '节点 3', expanded: false, checked: false },
            ],
        };
    },
    methods: {
        checkAll(checked) {
            this.$refs.treeView.checkAll(checked);
        },
        toggleAll(expanded) {
            this.$refs.treeView.toggleAll(expanded);
        },
    },
};
</script>
```

#### 遍历和查找

UTreeView 有关于遍历与查找节点的方法：`walk`和`find`，方便开发者使用。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-tree-view ref="treeView" :data="data"></u-tree-view>
    <u-linear-layout>
        <u-button @click="walk()">遍历所有节点</u-button>
        <u-button @click="find()">查找末尾为`4`的节点</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点 1', expanded: true, checked: false, children: [
                    { text: '节点 1.1', expanded: false, checked: false },
                    { text: '节点 1.2', expanded: true, checked: false, disabled: true, children: [
                        { text: '节点 1.2.1', expanded: false, checked: false },
                        { text: '节点 1.2.2', expanded: false, checked: false },
                    ] },
                    { text: '节点 1.3', expanded: false, checked: false },
                    { text: '节点 1.4', expanded: false, checked: false },
                ] },
                { text: '节点 2', expanded: false, checked: false },
                { text: '节点 3', expanded: false, checked: false },
            ],
        };
    },
    methods: {
        walk() {
            // 注意：如果有返回值，遍历会终止。
            this.$refs.treeView.walk((nodeVM) => console.info(nodeVM.text));
        },
        find() {
            const nodeVM = this.$refs.treeView.find((nodeVM) => nodeVM.text.endsWith('4'));
            alert(nodeVM.text);
        },
    },
};
</script>
```
