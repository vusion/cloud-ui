#### 前端分页

``` vue
<template>
<div>
<u-list-view :data="test" style="height: 182px"></u-list-view>
<u-button @click="onClick">传入</u-button>
</div>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data, test: null };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```

#### 多选时验证

``` vue
<template>
<u-validator :rules="rules">
    <u-list-view v-model="test" multiple>
        <u-list-view-item>AAA</u-list-view-item>
        <u-list-view-item>BBB</u-list-view-item>
        <u-list-view-item>CCC</u-list-view-item>
    </u-list-view>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            test: [],
            rules: [
                { required: true, trigger: 'input', validator(rule, value, cb) {
                    cb();
                } },
            ],
        };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```
