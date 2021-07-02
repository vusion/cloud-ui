### 设置颜色

``` vue
<template>
<u-linear-layout>
    <u-button @click="show('info')">长文本</u-button>
    <u-button @click="show('success')">Success</u-button>
    <u-button @click="show('warning')">Warning</u-button>
    <u-button @click="show('error')">Error</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        show(color) {
            this.$toast[color]('轻舟低代码应用开发平台是国内首个面向微服务架构设计和实践的低代码平台，提供基于接口设计的可视化搭建能力，拥有丰富可复用的IT资产，并提供一键发布等特色功能，助力企业快速开发应用。', 1000);
        },
    },
};
</script>
```
