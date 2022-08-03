#### Data 方式

``` vue { width: 30% }
<template>
<div>
<u-tree-view :data="data" children-field="total.pages" :more-children-fields="['entities']"></u-tree-view>
<u-button @click="onClick"></u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { text: '节点 1', total: {
                    pages: [
                        { text: '节点 1.1' },
                        { text: '节点 1.2', pages: [
                            { text: '节点 1.2.1' },
                            { text: '节点 1.2.2'}
                        ] },
                        { text: '节点 1.3', disabled: true  },
                        { text: '节点 1.4' },
                    ],
                }, 
                    entities: {
                        Employee: { text: 'employee' },
                        Asset: { text: 'asset' },
                    } },
                { text: '节点 2' },
                { text: '节点 3', pages: [
                    { text: '节点 3.1' },
                    { text: '节点 3.2'}
                ]}
            ]
        }
    },
    methods: {
        onClick() {
            this.data[0].total.pages.push({ text: '节点 1.5' })
        },
    },
};
</script>
```
