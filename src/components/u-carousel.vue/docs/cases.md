### 数据源

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-carousel :data-source="load" ref="carousel">
        <template #item="current" ref="template2">
            <u-image ref="image1" style="width:100%;height:100%;" :src="current.item.value" fit="contain"></u-image>
        </template>
    </u-carousel>
    <u-button @click="onClickReload">click reload</u-button>
</u-linear-layout>
</template>
<script>
// 模拟构造后端数据
const remoteData = [
    '//ceph.lcap.hadev.163yun.com/lowcode-static/assets/cloud-ui/1.jpg',
    '//defaulttenant.localhost:8850/assets/cloud-ui/3.jpg'].map((text) => ({ text, value: text }));

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
            this.$refs.carousel.reload();
        }
    },
};
</script>
```