### 设置颜色

``` vue
<template>
<u-linear-layout>
    <u-button @click="$toast.info('轻舟低代码应用开发平台是国内首个面向微服务架构设计和实践的低代码平台，提供基于接口设计的可视化搭建能力，拥有丰富可复用的IT资产，并提供一键发布等特色功能，助力企业快速开发应用。', 0)">长文本</u-button>
    <u-button @click="$toast.success('短文本', 0)">短文本</u-button>
</u-linear-layout>
</template>

<script>
export default {
};
</script>
```
