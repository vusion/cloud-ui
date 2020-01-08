``` vue
<template>
<div>
<u-tabs>
    <u-tab v-for="item in list" :key="item" :title="item"></u-tab>
</u-tabs>
<u-button @click="add">添加</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: ['AAA', 'BBB', 'CCC'],
        };
    },
    methods: {
        add() {
            this.list.unshift(String(this.list.length));
        },
    },
};
</script>
```