### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select defaultValue="浙江 / 杭州 / 滨江区"></u-region-select>
</u-linear-layout>
```

### 双向绑定

使用`v-model`进行双向绑定。

```vue
<template>
    <u-region-select v-model="address"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '',
        };
    },
};
</script>
```

### Placeholder

``` html
<u-region-select placeholder='请选择省份' ></u-region-select>
```


### 仅显示什么区

只想输入框中显示最后一项时，使用showFinalValue

``` html
<u-region-select showFinalValue trigger="hover"></u-region-select>
```