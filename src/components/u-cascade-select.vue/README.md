<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCascadeSelect 级联选择

**表单控件**, **块级展示**

## 示例
### 基本用法

``` html
<u-cascade-select :categories="[
    { label: '学科门类' },
    { label: '一级学科' },
    { label: '二级学科' },
]" :data="[
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
</u-cascade-select>
```

### Placeholder

``` html
<u-cascade-select :categories="[
    { label: '学科门类', placeholder: '学科门类' },
    { label: '一级学科', placeholder: '一级学科' },
    { label: '二级学科', placeholder: '二级学科' },
]" :data="[
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
]">
</u-cascade-select>
```

### 隐藏空列表

``` html
<u-cascade-select hide-empty :categories="[
    { label: '学科门类', placeholder: '学科门类' },
    { label: '一级学科', placeholder: '一级学科' },
    { label: '二级学科', placeholder: '二级学科' },
]" :data="[
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
]">
</u-cascade-select>
```

### 值转换器

组件的 value 与 各选择器的 value 的转换器。

#### join

默认为`'join'`，表示将 values 数组 join 之后变成 value。这种情况下 value 一般不会重复，推荐使用。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="join" v-model="value" :categories="[
        { label: '学科门类' },
        { label: '一级学科' },
        { label: '二级学科' },
    ]" :data="data">
    </u-cascade-select>
    <div>选择的值为：{{ value }}</div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '工学,计算机科学与技术,计算机应用技术',
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

`'join.number'`与`join`类似，只是会考虑它为数字的情况。

`'join:,'`，还可以用`:`修改分隔符，类似 Vue 的指令参数。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select :value.sync="value" converter="join.number:|" :categories="[
        { label: 'CPU', key: 'cpu' },
        { label: '内存', key: 'memory' },
        { label: '系统盘', key: 'storage' },
    ]" :data="data">
    </u-cascade-select>
    <div>选择的值为：{{ value }}</div>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
            data: [
                { text: '1核', value: 1, children: [
                    { text: '1GB', value: 1, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '2核', value: 2, children: [
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '4核', value: 4, children: [
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '16GB', value: 16, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
            ],
        };
    },
};
</script>
```

#### last-value

`'last-value'`表示以最后一项的值作为 value，如果每一项的值是唯一的，可以用这种方法。

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-select converter="last-value" v-model="value" :categories="[
        { label: '学科门类' },
        { label: '一级学科' },
        { label: '二级学科' },
    ]" :data="data">
    </u-cascade-select>
    <div>选择的值为：{{ value }}</div>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: '213',
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

### 大小扩展

``` html
<u-cascade-select size="medium" :categories="[
    { label: '学科门类' },
    { label: '一级学科' },
    { label: '二级学科' },
]" :data="[
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
</u-cascade-select>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data | Array\<{ text, value }\> |  |  | 数据列表 |
| value.sync, v-model | any |  |  | 当前选择的值 |
| categories | Array\<{ label, key, placeholder }\> |  |  | 多级分类 |
| hide-empty | boolean |  | `false` | 是否隐藏空列表 |
| converter | string, object |  | `'join'` | value 与 values 的转换器。可选值：`'join'`表示将 values 数组 join 之后变成 value，`'join.number'`与`join`类似，只是会考虑它为数字的情况。也可以用`:`修改分隔符，类似 Vue 的指令参数，`'last-value'`表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象 |
| field | string |  | `'text'` | 显示文本字段 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | UCascadeSelect | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | number | 选择的层级 |
| $event.value | any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |
| senderVM | UCascadeSelect | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.oldValues | Array | 旧的每项值的数组 |
| senderVM | UCascadeSelect | 发送事件实例 |
