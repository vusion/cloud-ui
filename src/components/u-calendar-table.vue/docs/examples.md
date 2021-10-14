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
