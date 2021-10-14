<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UCalendarTable 日历表格

- [示例](#示例)
    - [基本用法](#基本用法)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)

**Table**

用于展示大量结构化数据。支持按月展示月内每天的数据。

## 示例
### 基本用法

```vue
<template>
    <u-calendar-table
        firstTitle="姓名"
        firstField="parent.name"
        :data-source-parent="dateSourceParent"
        :data-source-child="dateSourceChild"
        parent-key="parent.name"
        child-key="child.name"
        start-key="child.startTime"
        width="88"
    >
        <template #default="scope">
            <p v-if="scope.item.child && scope.item.child.count">Count: {{scope.item.child.count}}</p>
            <p v-if="scope.item.child && scope.item.child.name">Name: {{scope.item.child.name}}</p>
        </template>
    </u-calendar-table>
</template>
<script>
export default{
    data() {
        return {
            dateSourceParent: {
                content: [
                    { parent: { name: '张三' } },
                    { parent: { name: '李四' } },
                    { parent: { name: '王五' } },
                    { parent: { name: '阿大' } },
                    { parent: { name: '阿二' } },
                ],
                number: 1,
                size: 20,
                totalElements: 5,
                totalPages: 1,
            },
            dateSourceChild: {
                content: [
                    { child: { name: '张三', count: 3, startTime: '2021-10-14' } },
                    { child: { name: '李四', count: 4, startTime: '2021-10-01' } },
                    { child: { name: '王五', count: 5, startTime: '2021-10-02' } },
                    { child: { name: '阿大', count: 1, startTime: '2021-10-03' } },
                    { child: { name: '阿二', count: 2, startTime: '2021-10-04' } },
                    { child: { name: '张三', count: 3, startTime: '2021-10-01' } },
                    { child: { name: '李四', count: 4, startTime: '2021-10-04' } },
                    { child: { name: '张三', count: 8, startTime: '2021-10-13' } },
                    { child: { name: '王五', count: 5, startTime: '2021-10-01' } },
                    { child: { name: '张三', count: 9, startTime: '2021-10-12' } },
                    { child: { name: '李四', count: 4, startTime: '2021-10-05' } },
                ],
                number: 1,
                size: 20,
                totalElements: 11,
                totalPages: 1,
            },
        };
    },
    methods: {},
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source-parent | Array\<Item\> \| Function \| object |  |  | 日历表格主数据源，数组方式表示直接的数据，函数需要返回一个 Promise |
| data-source-child | Array\<Item\> \| Function \| object |  |  | 日历表格子数据源，数组方式表示直接的数据，函数需要返回一个 Promise |
| first-title | string |  | `'姓名'` | 表格第一项内容的标题 |
| first-field | string |  | `'parent.name'` | 表格第一项内容的在 data-source 中的标识 |
| parent-key | String |  | `'parent.name'` | 主数据源中的关键字段，用来将主/子数据源的数据关联 |
| child-key | String |  | `'child.name'` | 子数据源中的关键字段，用来将主/子数据源的数据关联 |
| page-size | string \| number |  | `20` | 每页条数 |
| data-schema | schema |  |  | 日历表格中每项的数据类型 |
| start-key | string |  | `'child.startTime'` | 数据内表示开始时间的字段 |
| end-key | string |  | `'child.endTime'` | 数据内表示结束时间的字段 |
| min-date | Date \| string ｜ number |  |  | 最小日期，默认 5 年前 |
| max-date | Date \| string ｜ number |  |  | 最大日期，默认 4 年后 |
| width | string \| number |  | `48` | 表格每一项内容的宽度，默认 48 表示 '48px' |
| first-width | string \| number |  | `64` | 表格首项宽度，默认 64 表示 '64px' |

### Slots

#### (default)

插入文本或 HTML 至表格项

