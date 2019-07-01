# UFootbar 底部栏

## 示例
### 基本形式

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

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| position | String |  | 显示的位置。 |
