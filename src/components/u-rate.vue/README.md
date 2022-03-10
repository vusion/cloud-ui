<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URate 评分

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读](#只读)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Events](#events)

**Form**

评分组件。

## 示例
### 基本用法

``` vue
<template>
<u-rate v-model="rating"></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

### 只读

``` vue
<template>
<u-rate v-model="rating" readonly></u-rate>
</template>
<script>
export default {
    data() {
        return {
            rating: 3,
        };
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | number |  | `0` |  |
| max | number |  | `5` |  |
| readonly | boolean |  | `false` |  |

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | 改变后的值 |
| $event.oldValue | number | 旧的值 |

