### 基本展示

``` vue
<template>
    <u-linear-layout direction="vertical">
        <u-button @click="changeType">改变类型</u-button>
        <u-process-record :type="type"></u-process-record>
    </u-linear-layout>
</template>

<script>
export default {
    data() {
        return {
            type: 'table',
        };
    },
    methods: {
        changeType() {
           this.type = this.type === 'table' ? 'timeline' : 'table';
        },
    },
};
</script>
```
