<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UFootbar 底部栏

## 示例
### 基本用法

``` vue
<template>
<u-footbar :position="position">
    <u-linear-layout>
        <u-button color="primary" @click="position='fixed'">切换底部</u-button>
        <u-button @click="position='static'">取消</u-button>
    </u-linear-layout>
</u-footbar>
</template>
<script>
export default {
    data() {
        return {
            position: 'fixed',
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| position | string |  |  | 显示的位置。 |
