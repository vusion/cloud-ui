### 数据源

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-gallery
            ref="gallery"
            :data-source="load"
            url-field="entity1.url"
        ></u-gallery>
        <u-button @click="onClickReload">click reload</u-button>
    </u-linear-layout>
</u-linear-layout>
</template>
<script>
// 模拟后端请求
const mockData = [
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_1.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_2.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_3.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_4.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png' } },
    { entity1:{ url:'https://static-vusion.nos-eastchina1.126.net/h5-template/gallery/1_5.png' } },
];
const mockRequest = (name, timeout = 1000) => {
    return new Promise((res, rej) => setTimeout(() => res(mockData), timeout));
};

// 模拟数据服务
const mockService = {
    loadList() {
        // 在这里模拟了一个从后端一次性获取数据的请求
        return mockRequest();
    },
};
export default {
    data(){
        return {
            data: mockData,
        }
    },
    methods: {
        load() {
            console.log('load')
            return mockService.loadList();
        },
        onClickReload() {
            console.log('reload');
            this.$refs.gallery.reload();
        }
    }
};
</script>
```