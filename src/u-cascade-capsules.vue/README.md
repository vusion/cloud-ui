# 级联胶囊 CascadeCapsules

### 基本形式

``` html
<u-cascade-capsules :categories="[
    { label: '学科门类' },
    { label: '一级学科' },
    { label: '二级学科' },
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
        ]},
        { text: '软件工程', value: '软件工程', disabled: true },
        { text: '机械工程', value: '机械工程', children: [
            { text: '机械制造及其自动化', value: '机械制造及其自动化' },
            { text: '机械电子工程', value: '机械电子工程' },
            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
            { text: '车辆工程', value: '车辆工程', disabled: true },
        ]},
    ]},
]">
</u-cascade-capsules>
```

### 值转换器

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-cascade-capsules :value.sync="value" converter="join-number" :categories="[
        { label: 'CPU', key: 'cpu' },
        { label: '内存', key: 'memory' },
        { label: '系统盘', key: 'storage' },
    ]" :data="[
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
    ]">
    </u-cascade-capsules>
    <div>选择的值为：{{ value }}</div>
</u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            value: undefined,
        };
    },
};
</script>
```

### 自动选择

此功能默认开启，父级切换时会跟据当前级别的`value`自动选择，如果没有与`value`相匹配的项，会自动选择第一个显示且非禁用的项。

可以将`auto-select`设置为`false`，关闭此功能。

``` html
<u-cascade-capsules converter="join-number" :auto-select="false" :categories="[
    { label: 'CPU', key: 'cpu' },
    { label: '内存', key: 'memory' },
    { label: '系统盘', key: 'storage' },
]" :data="[
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
]">
</u-cascade-capsules>
```

### cancelable

``` html
<u-cascade-capsules :auto-select="false" cancelable :categories="[
    { label: '学科门类' },
    { label: '一级学科' },
    { label: '二级学科' },
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
        ]},
        { text: '软件工程', value: '软件工程', disabled: true },
        { text: '机械工程', value: '机械工程', children: [
            { text: '机械制造及其自动化', value: '机械制造及其自动化' },
            { text: '机械电子工程', value: '机械电子工程' },
            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },
            { text: '车辆工程', value: '车辆工程', disabled: true },
        ]},
    ]},
]">
</u-cascade-capsules>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | 数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| categories | Array\<{ label, key }\> | | 多级分类 |
| autoSelect | Boolean | `false` |
| converter | String, Object | `'join'` | value 与 values 的转换器。可选值：`'join'`表示将 values 数组 join 之后变成 value，`'join-number'`与`join`类似，只是会考虑它为数字的情况，`'last-value'`表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | Number | 选择的层级 |
| $event.value | Any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.oldValues | Array | 旧的每项值的数组 |
