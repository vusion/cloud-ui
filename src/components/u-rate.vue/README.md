<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# URate 评分

- [示例](#示例)
    - [基本用法](#基本用法)
    - [允许半选](#允许半选)
    - [允许清除](#允许清除)
    - [只读](#只读)
    - [只读，值为小数](#只读值为小数)
    - [辅助文字](#辅助文字)
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

### 允许半选

``` vue
<template>
<u-rate v-model="rating" allowHalf></u-rate>
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

### 允许清除

``` vue
<template>
<u-rate v-model="rating" :clearable="true"></u-rate>
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

### 只读，值为小数

``` vue
<template>
<div>
<u-rate :value="rating" readonly></u-rate>
<u-rate :value="rating" readonly showValue></u-rate>
</div>
</template>
<script>
export default {
    data() {
        return {
            rating: 3.6,
        };
    },
};
</script>
```

### 辅助文字

``` vue
<template>
<u-rate :value="rating" showText showTooltip></u-rate>
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
| allow-half | boolean |  | `false` | 是否允许半选 |
| clearable | boolean |  | `false` | 是否允许选中后点击清除 |
| show-text | boolean |  | `false` | 在评分后展示辅助文字 |
| texts | Array |  | `[极差, 失望, 一般, 满意, 惊喜]` | 辅助文字设置。在展示辅助文字开关打开的情况下才会生效 |
| show-tooltip | boolean |  | `false` | 鼠标悬浮时展示提示文字 |
| tooltips | Array |  | `[极差, 失望, 一般, 满意, 惊喜]` | Tooltip文字设置。在展示Tooltip开关打开的情况下才会生效 |

### Events

#### @change

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | number | 改变后的值 |
| $event.oldValue | number | 旧的值 |

