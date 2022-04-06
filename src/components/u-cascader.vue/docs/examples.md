### 基本用法

``` html
<u-cascader :data="[
    { text: '理学', value: '理学', children: [
        { text: '物理学', value: '物理学', children: [
            { text: '理论物理', value: '理论物理' },
            { text: '凝聚态物理', value: '凝聚态物理' },
            { text: '材料物理', value: '材料物理' },
        ] },
        { text: '数学', value: '数学', children: [
            { text: '基础数学', value: '基础数学' },
            { text: '计算数学', value: '计算数学' },
            { text: '应用数学', value: '应用数学' },
        ] },
        { text: '化学', value: '化学' },
    ]},
    { text: '工学', value: '工学', children: [
        { text: '计算机科学与技术', value: '计算机科学与技术', children: [
            { text: '计算机系统结构', value: '计算机系统结构' },
            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
            { text: '计算机应用技术', value: '计算机应用技术' },
        ] },
        { text: '软件工程', value: '软件工程', disabled: true },
        { text: '机械工程', value: '机械工程', children: [
            { text: '机械制造及其自动化', value: '机械制造及其自动化' },
            { text: '机械电子工程', value: '机械电子工程' },
            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
            { text: '车辆工程', value: '车辆工程', disabled: true },
        ] },
    ] },
]">
</u-cascader>
```

### Placeholder

``` html
<u-cascader :data="[
    { text: '理学', value: '理学', children: [
        { text: '物理学', value: '物理学', children: [
            { text: '理论物理', value: '理论物理' },
            { text: '凝聚态物理', value: '凝聚态物理' },
            { text: '材料物理', value: '材料物理' },
        ]},
        { text: '数学', value: '数学', children: [
            { text: '基础数学', value: '基础数学' },
            { text: '计算数学', value: '计算数学' },
            { text: '应用数学', value: '应用数学' },
        ]},
        { text: '化学', value: '化学' },
    ]},
    { text: '工学', value: '工学', children: [
        { text: '计算机科学与技术', value: '计算机科学与技术', children: [
            { text: '计算机系统结构', value: '计算机系统结构' },
            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
            { text: '计算机应用技术', value: '计算机应用技术' },
        ] },
        { text: '软件工程', value: '软件工程', disabled: true },
        { text: '机械工程', value: '机械工程', children: [
            { text: '机械制造及其自动化', value: '机械制造及其自动化' },
            { text: '机械电子工程', value: '机械电子工程' },
            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
            { text: '车辆工程', value: '车辆工程', disabled: true },
        ] },
    ] },
]" placeholder="placeholder自定义内容">
</u-cascader>
```

### 触发方式

使用trigger属性设置触发方式，默认为click。

``` vue
<template>
<u-linear-layout >
    <u-cascader :data="data" placeholder="默认click点击触发">
    </u-cascader>
    <u-cascader trigger="hover" placeholder="hover悬浮触发" :data="data">
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理' },
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学' },
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 禁用某项

通过在数据源中设置 disabled 字段来声明该选项是禁用的,也可以是整个级联框

``` vue
<template>
<u-linear-layout>
    <u-cascader :data="data" disabled>
    </u-cascader>
    <u-cascader trigger="hover" :data="data">
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理', disabled: true },
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学', disabled: true},
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 可清空

通过 clearable 设置输入框可清空

``` vue
<template>
<u-linear-layout >
    <u-cascader trigger="hover" :data="data" clearable>
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理'},
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学'},
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 仅显示最后一级

仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。
属性showFinalValue定义了是否显示完整的路径，将其赋值为true则仅显示最后一级

``` vue
<template>
<u-linear-layout >
    <u-cascader trigger="hover" :data="data" showFinalValue>
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理'},
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学'},
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```
### 双向绑定

使用`v-model`进行双向绑定。

``` vue
<template>
<u-linear-layout >
    <u-cascader trigger="hover" :data="data" v-model="value">
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理'},
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学'},
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 级联间连接字符

join定义每一层级联之间的各个连接符，默认为：' / ',不允许为空值

``` vue
<template>
<u-linear-layout >
    <u-cascader :data="data">
    </u-cascader>
    <u-cascader :data="data" join='---'>
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '理学', children: [
                    { text: '物理学', value: '物理学', children: [
                        { text: '理论物理', value: '理论物理' },
                        { text: '凝聚态物理', value: '凝聚态物理' },
                        { text: '材料物理', value: '材料物理' },
                    ] },
                    { text: '数学', value: '数学', children: [
                        { text: '基础数学', value: '基础数学' },
                        { text: '计算数学', value: '计算数学' },
                        { text: '应用数学', value: '应用数学' },
                    ] },
                    { text: '化学', value: '化学' },
                ] },
                { text: '工学', value: '工学', children: [
                    { text: '计算机科学与技术', value: '计算机科学与技术', children: [
                        { text: '计算机系统结构', value: '计算机系统结构' },
                        { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },
                        { text: '计算机应用技术', value: '计算机应用技术' },
                    ] },
                    { text: '软件工程', value: '软件工程', disabled: true },
                    { text: '机械工程', value: '机械工程', children: [
                        { text: '机械制造及其自动化', value: '机械制造及其自动化' },
                        { text: '机械电子工程', value: '机械电子工程' },
                        { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
                        { text: '车辆工程', value: '车辆工程', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 过滤（可搜索）

设置filterable属性即可开启过滤功能,解锁手动输入,用于快速查找选项。

``` vue
<template>
<u-linear-layout >
    <u-cascader :data="data" filterable clearable>
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '1', children: [
                    { text: '物理学', value: '11', children: [
                        { text: '理论物理', value: '111' },
                        { text: '凝聚态物理', value: '112' },
                        { text: '材料物理', value: '113' },
                    ] },
                    { text: '数学', value: '12', children: [
                        { text: '基础数学', value: '121' },
                        { text: '计算数学', value: '122' },
                        { text: '应用数学', value: '123' },
                    ] },
                    { text: '化学', value: '13' },
                ] },
                { text: '工学', value: '2', children: [
                    { text: '计算机科学与技术', value: '21', children: [
                        { text: '计算机系统结构', value: '211' },
                        { text: '计算机软件与理论', value: '212', disabled: true },
                        { text: '计算机应用技术', value: '213' },
                    ] },
                    { text: '软件工程', value: '22', disabled: true },
                    { text: '机械工程', value: '23', children: [
                        { text: '机械制造及其自动化', value: '231' },
                        { text: '机械电子工程', value: '232' },
                        { text: '机械设计及理论', value: '233', disabled: true },
                        { text: '车辆工程', value: '234', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### field

自定义文本字段，默认为text

``` vue
<template>
<u-linear-layout >
    <u-cascader :data="data" field='value'>
    </u-cascader>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '1', children: [
                    { text: '物理学', value: '11', children: [
                        { text: '理论物理', value: '111' },
                        { text: '凝聚态物理', value: '112' },
                        { text: '材料物理', value: '113' },
                    ] },
                    { text: '数学', value: '12', children: [
                        { text: '基础数学', value: '121' },
                        { text: '计算数学', value: '122' },
                        { text: '应用数学', value: '123' },
                    ] },
                    { text: '化学', value: '13' },
                ] },
                { text: '工学', value: '2', children: [
                    { text: '计算机科学与技术', value: '21', children: [
                        { text: '计算机系统结构', value: '211' },
                        { text: '计算机软件与理论', value: '212', disabled: true },
                        { text: '计算机应用技术', value: '213' },
                    ] },
                    { text: '软件工程', value: '22', disabled: true },
                    { text: '机械工程', value: '23', children: [
                        { text: '机械制造及其自动化', value: '231' },
                        { text: '机械电子工程', value: '232' },
                        { text: '机械设计及理论', value: '233', disabled: true },
                        { text: '车辆工程', value: '234', disabled: true },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

### 动态加载

通过lazy开启动态加载，并通过lazyload来设置加载数据源的方法。lazyload方法有两个参数，第一个参数node为当前点击的节点，第二个resolve为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。

``` vue
<template>
<u-linear-layout >
    <u-cascader lazy :lazyLoad="lazyLoad" >
    </u-cascader>
</u-linear-layout>
</template>
<script>
let id = 0;
export default {
    data(){
        return {
            lazyLoad (node, resolve) {
                const { level } = node;
                setTimeout(() => {
                const nodes = Array.from({ length: level + 1 })
                    .map(() => ({
                    value: ++id,
                    text: `选项${id}`,
                    leaf: level >= 2
                    }));
                // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                resolve(nodes);
                }, 1500);
            }
        }
    },
};
</script>
```

### size

提供几个可选的值定义级联选择框的大小

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout >
        <u-cascader :data="data" width="mini" height="mini"></u-cascader>
        <u-cascader :data="data" width="mini" height="normal"></u-cascader>
        <u-cascader :data="data" width="mini" height="medium"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data="data" width="small" height="mini"></u-cascader>
        <u-cascader :data="data" width="small" height="normal"></u-cascader>
        <u-cascader :data="data" width="small" height="medium"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data="data" width="medium" height="mini"></u-cascader>
        <u-cascader :data="data" width="medium" height="normal"></u-cascader>
        <u-cascader :data="data" width="medium" height="medium"></u-cascader>
    </u-linear-layout>
    <u-linear-layout>
        <u-cascader :data="data" width="large" height="large"></u-cascader>
        <u-cascader :data="data" width="huge" height="huge"></u-cascader>
        <u-cascader :data="data" width="full" height="full"></u-cascader>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '理学', value: '1' },
                { text: '工学', value: '2' },
            ],
        };
    },
};
</script>
```