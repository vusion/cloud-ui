### 数据源

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-radios :data-source="load" ref="radio">
        <template #item="current">
            <u-text>{{ current.item.text }}</u-text>
        </template>
    </u-radios>
    <u-button @click="onClickReload">click reload</u-button>
</u-linear-layout>
</template>
<script>
// 模拟构造后端数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
        onClickReload() {
            console.log('reload');
            this.$refs.radio.reload();
        }
    },
};
</script>
```