#### 支持多选

```vue { width: 30% }
<template>
    <u-tree-select-new  v-model="value" checkable valueField="text1" :checkControlled="false" textField="text1" :data-source="list"></u-tree-select-new>
</template>
<script>
    export default {
        data() {
            return {
                value: ['节点 3.1', '节点 1.2.1'],
                list:[
    { text1: '节点 1', value1: '1', children: [
        { text1: '节点 1.1' , value1: '1.1'},
        { text1: '节点 1.2', value1: '1.2' ,children: [
            { text1: '节点 1.2.1', value1: '1.2.1' },
            { text1: '节点 1.2.2' , value1: '1.2.2' },
        ] },
        { text1: '节点 1.3', value1: '1.3' },
        { text1: '节点 1.4' , value1: '1.4'},
    ] },
    { text1: '节点 2' ,value1: '2'},
    { text1: '节点 3', value1: '3', children: [
        { text1: '节点 3.1', value1: '3.1' },
        { text1: '节点 3.2' , value1: '3.2'},
    ] },
]
            };
        },
        methods: {
            
        },
    }
</script>
```