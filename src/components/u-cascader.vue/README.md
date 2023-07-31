<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCascader 级联选择

- [示例](#示例)
    - [基本用法](#基本用法)
    - [Placeholder](#placeholder)
    - [触发方式](#触发方式)
    - [禁用某项](#禁用某项)
    - [可清空](#可清空)
    - [仅显示最后一级](#仅显示最后一级)
    - [双向绑定](#双向绑定)
    - [级联间连接字符](#级联间连接字符)
    - [过滤（可搜索）](#过滤可搜索)
    - [field](#field)
    - [动态加载](#动态加载)
    - [size](#size)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)
    - [Methods](#methods)

**Selector**

一次选择多个相关联的项

## 示例
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
    <u-cascader trigger="hover" :data="data" :value.sync="value">
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
## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source | Array\<{ text, value }\> |  |  | 数据列表 |
| data-schema | schema |  |  | 集合类型每一元素的数据类型 |
| field | string |  | `'text'` | 集合的元素类型中，用于显示文本的属性名称 |
| value-field | string |  | `'value'` | 集合的元素类型中，用于标识选中值的属性 |
| children-field | string |  | `'children'` | 树形数据子节点字段名，默认为children |
| parent-field | string |  |  | 当数据源为平铺数据时自动生成级联数据的节点字段名，重要：值字段名需要一起配置 |
| value.sync, v-model | any |  |  |  |
| placeholder | string |  | `'请选择'` | 搜索框为空时提示文本 |
| trigger | string | `[object Object]`<br/>`[object Object]` | `'click'` | 触发方式 |
| join | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `' / '` | 将选中的值以选择的符号作为连接符，转为字符串格式,不可为空值 |
| filterable | boolean |  | `false` | 是否可以过滤（搜索），开启将会显示搜索框。 |
| clearable | boolean |  | `false` | 开启并在输入框有内容时会显示清除按钮。 |
| showFinalValue | boolean |  | `false` | 定义是否显示完整的路径，ture时只显示最后一项 |
| disabled | boolean |  | `false` |  |
| opened | boolean |  | `false` | 切换弹出/关闭状态 |
| autofocus | boolean |  | `false` | 是否自动获取焦点 |
| width | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置级联框宽度大小 |
| height | string | `[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]`<br/>`[object Object]` | `'normal'` | 设置级联框高度大小 |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | UCascader | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.level | number | 选择的层级 |
| $event.value | any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| senderVM | UCascader | 发送事件实例 |

#### @focus

获得焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @blur

失去焦点时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 原生事件对象 |
| senderVM | UInput | 发送事件实例 |

#### @clear

清空后触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | object | 自定义事件对象 |
| $event.value | string | 清空后的值 |
| $event.oldValue | string | 旧的值 |
| senderVM | UInput | 发送事件实例 |

Methods

#### open()

弹出实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### close()

关闭实例。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### clear()

清空输入框。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

