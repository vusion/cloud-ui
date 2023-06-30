### 基本用法

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select defaultValue="浙江省 / 杭州市 / 滨江区"></u-region-select>
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

### 过滤（可搜索）

设置filterable属性即可开启过滤功能,解锁手动输入,用于快速查找选项。

``` html
<u-region-select filterable trigger="hover"></u-region-select>
```

### 转换为地区名格式

将值转换为地区名称。

```vue
<template>
    <u-region-select v-model="address" converter="name" @change="onChange"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '浙江省/杭州市/滨江区',
        };
    },
    methods: {
        onChange({ value }) {
            console.log(value)
        }
    }
};
</script>
```

### 转换为地区码格式

将值转换为地区码。

```vue
<template>
    <u-region-select v-model="address" converter="code" @change="onChange"></u-region-select>
</template>
<script>
export default {
    data() {
        return {
            address: '330108',
        };
    },
    methods: {
        onChange(event) {
            console.log(event)
        }
    }
};
</script>
```
